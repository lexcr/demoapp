const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  ImageSchema = new Schema({
    
    url: {
        type:String
        
    },
    
 
    });

    const  MediaSchema = new Schema({
        
        image : ImageSchema
      
        
        });

const  DataSchema = new Schema({
      
    url: {
        type:String
        
    },
    description:{
        type:String
    },


    data:MediaSchema

 
    });

const  NinjaSchema = new Schema({

    permalink_url: {
        type:String
        
    },
    message:{
        type:String
    },
    created_time:{
        type: String
        
    },
    id:{
        type: String
        
    },
    atachments:DataSchema

});

const Ninja = mongoose.model('ninja',NinjaSchema);

module.exports = Ninja; 
 
/* const NinSchema =  new Schema({
    
        "permalink_url": "https://www.facebook.com/noticiasrepretelcostarica/posts/1864206296952446",
        "message": "#Ins\u00f3lito El feto pesaba 1,6 kilos, desarroll\u00f3 pelo, genitales y parte de sus extremidades, informaron los m\u00e9dicos.",
        "created_time": "2018-01-09T17:37:16+0000",
        "id": "100237323349361_1864206296952446",
        "attachments": {
            "data": [
                {
                    "description": "Un ni\u00f1o de 15 a\u00f1os sufri\u00f3 durante mucho tiempo una inflamaci\u00f3n estomacal. Por esta raz\u00f3n decidi\u00f3 acudir al m\u00e9dico y se encontraron con una sorpresa may\u00fascula. ",
                    "url": "https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.repretel.com%2Factualidad%2Ffue-al-hospital-por-un-dolor-estomacal-y-descubrieron-que-un-nino-de-15-anos-tenia-dentro-un-feto-muerto-101680&h=ATNCezM5wcu9s3JfYALsUlw7jrexFSuKZ60GMISm5Q-Aujzjz2jYZtq2_l8pVtCMvPD49elbevcWgbQAw2da2vl4Rsog7EcgpUtnHkYBGA&s=1&enc=AZPkBLZzY4B-H1UFQZVmIqnsMK60xZNgVyKbUm0Kqu3JYa3WhG5kBK8wpU_lTY9TEYrKDYXPcdmkBBqw73z0C0_H",
                    "media": {
                        "image": {
                            "src": "https://external.xx.fbcdn.net/safe_image.php?d=AQDfTB808bDq8M8U&w=720&h=720&url=http%3A%2F%2Fcdn.repretel.com%2Ffiles%2F5a54f2ad7411f5311490fc4d.jpg&cfs=1&_nc_hash=AQDGhKLFPrBr6G-B",
                            "width": 530,
                            "height": 530
                        }
                    },
                    "title": "Fue al hospital por un dolor estomacal y descubrieron que un ni\u00f1o de 15 a\u00f1os ten\u00eda dentro un feto muerto - Repretel",
                    "type": "share",
                    "target": {
                        "url": "https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.repretel.com%2Factualidad%2Ffue-al-hospital-por-un-dolor-estomacal-y-descubrieron-que-un-nino-de-15-anos-tenia-dentro-un-feto-muerto-101680&h=ATNCezM5wcu9s3JfYALsUlw7jrexFSuKZ60GMISm5Q-Aujzjz2jYZtq2_l8pVtCMvPD49elbevcWgbQAw2da2vl4Rsog7EcgpUtnHkYBGA&s=1&enc=AZPkBLZzY4B-H1UFQZVmIqnsMK60xZNgVyKbUm0Kqu3JYa3WhG5kBK8wpU_lTY9TEYrKDYXPcdmkBBqw73z0C0_H"
                    }
                }
            ]
        }
    },
    {
        "permalink_url": "https://www.facebook.com/noticiasrepretelcostarica/posts/1864199736953102",
        "message": "Por tercera vez en 40 a\u00f1os, la nieve cubri\u00f3 uno de los puntos m\u00e1s calurosos del planeta: el desierto del Sahara.",
        "created_time": "2018-01-09T17:32:04+0000",
        "id": "100237323349361_1864199736953102",
        "attachments": {
            "data": [
                {
                    "description": "La ciudad de Ain Sefra, en Argelia, se cubri\u00f3 de blanco esta semana. La zona pas\u00f3 de ser \"la puerta del desierto\", como es conocida, a convertirse en una gigantesca plataforma para construir mu\u00f1ecos de nieve.",
                    "url": "https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.repretel.com%2Factualidad%2Fasi-fue-la-impresionante-nevada-en-el-desierto-del-sahara--101677&h=ATPbVrcRD5fcjqcVG1637NNfgHpu49XRwkLBoakj9pViHoKZO5PDs85ZbcPXpVFq2eP8u_1W1PgpjJEPyN2D7sxDmkQLMnY6l5T_s-UJaQ&s=1&enc=AZNb8Q6I_dCPG-64B0t_CjwiF5U128denLTVByEZh0zZAxedGtVBSq_M2VMLsDC9p_ENeuo0IGtSKtswoPb3mFiV",
                    "media": {
                        "image": {
                            "src": "https://external.xx.fbcdn.net/safe_image.php?d=AQD4Msx2uUGm97yV&w=720&h=720&url=http%3A%2F%2Fcdn.repretel.com%2Ffiles%2F2018%2F01%2F09%2Fnevadadesiertosahara2018-03bb72fc64e53f78e60be977d95de75f-1200x600.jpg&cfs=1&_nc_hash=AQAxTkPShqEKvr_E",
                            "width": 530,
                            "height": 530
                        }
                    },
                    "title": "As\u00ed fue la impresionante nevada en el desierto del Sahara - Repretel",
                    "type": "share",
                    "target": {
                        "url": "https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.repretel.com%2Factualidad%2Fasi-fue-la-impresionante-nevada-en-el-desierto-del-sahara--101677&h=ATPbVrcRD5fcjqcVG1637NNfgHpu49XRwkLBoakj9pViHoKZO5PDs85ZbcPXpVFq2eP8u_1W1PgpjJEPyN2D7sxDmkQLMnY6l5T_s-UJaQ&s=1&enc=AZNb8Q6I_dCPG-64B0t_CjwiF5U128denLTVByEZh0zZAxedGtVBSq_M2VMLsDC9p_ENeuo0IGtSKtswoPb3mFiV"
                    }
                }
            ]
        }
    },
    {
        "permalink_url": "https://www.facebook.com/noticiasrepretelcostarica/posts/1864190206954055",
        "created_time": "2018-01-09T17:22:10+0000",
        "id": "100237323349361_1864190206954055",
        "attachments": {
            "data": [
                {
                    "description": "El balompi\u00e9 hondure\u00f1o se visti\u00f3 de luto este martes por la lamentable noticia de la muerte de uno de sus exfutbolistas de tan solo 29 a\u00f1os y que form\u00f3 parte de la Selecci\u00f3n que compiti\u00f3 en el Mundial de Brasil 2014.",
                    "url": "https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.repretel.com%2Fdeportes%2Fhonduras-lamenta-la-muerte-de-joven-mundialista-en-brasil-2014-101673&h=ATPROnqosperzTW5cBc575vTbjFnpiQlr0OBtlW5K-E2dCa1GOlPV6uwWFWbIh3acvWpuqJPDNSlTe7R8SZFf6fSo-k4uftrByuRvvDzUQ&s=1&enc=AZNPlpW7HIR9Rg4C7y0Zol785fAZZnULEBFOfYijjyJ9AZ36tf_11WaQX0G_XjbhjIb_QcVUd5e3HXdb8e8n8Kff",
                    "media": {
                        "image": {
                            "src": "https://external.xx.fbcdn.net/safe_image.php?d=AQBKH4TdGbVOKBrS&w=530&h=530&url=http%3A%2F%2Fcdn.repretel.com%2Ffiles%2F2018%2F01%2F09%2Fjuancarlosgarciahondurasmuereleucemia20172-8646abd8f09eb36d806eca20b84316a5-1200x600.jpg&cfs=1&sx=96&sy=0&sw=530&sh=530&_nc_hash=AQBLDwaUDyY6e7Qr",
                            "width": 530,
                            "height": 530
                        }
                    },
                    "title": "Honduras lamenta la muerte de joven mundialista en Brasil 2014 - Repretel",
                    "type": "share",
                    "target": {
                        "url": "https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.repretel.com%2Fdeportes%2Fhonduras-lamenta-la-muerte-de-joven-mundialista-en-brasil-2014-101673&h=ATPROnqosperzTW5cBc575vTbjFnpiQlr0OBtlW5K-E2dCa1GOlPV6uwWFWbIh3acvWpuqJPDNSlTe7R8SZFf6fSo-k4uftrByuRvvDzUQ&s=1&enc=AZNPlpW7HIR9Rg4C7y0Zol785fAZZnULEBFOfYijjyJ9AZ36tf_11WaQX0G_XjbhjIb_QcVUd5e3HXdb8e8n8Kff"
                    }
                }
            ]
        }
    },
    {
        "permalink_url": "https://www.facebook.com/noticiasrepretelcostarica/posts/1864109160295493",
        "message": "La bi\u00f3loga Nan Hauser capt\u00f3 con su c\u00e1mara el momento en que el cet\u00e1ceo la salv\u00f3 del inminente ataque.",
        "created_time": "2018-01-09T16:01:08+0000",
        "id": "100237323349361_1864109160295493",
        "attachments": {
            "data": [
                {
                    "description": "infobae",
                    "url": "https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.repretel.com%2Factualidad%2Fel-increible-momento-en-que-una-ballena-protege-a-una-buzo-de-la-amenaza-de-un-tiburon-101667&h=ATMJrC1mjLGHn8eMpE_XMntJVCc7SEinyZpLaB3yAcCm6qQebsNwiw3u8ScVAvFY0b4DA91z8jvK42vstw0jc6R1xMokN-m5m2bKQpHh6A&s=1&enc=AZNL5MvjRBPXHI512lwM3YUINaZ8U6S1a5jn9gslAIgtqeri8Af3qGIorz-H-5suDueYbEjcC-RAHwlahExIzGQx",
                    "media": {
                        "image": {
                            "src": "https://external.xx.fbcdn.net/safe_image.php?d=AQBoRc1fJwCAuyiH&w=720&h=720&url=http%3A%2F%2Fcdn.repretel.com%2Ffiles%2F5a54d12f7411f5311490f6cd.jpg&cfs=1&_nc_hash=AQBzCN4Iaaq_xe5V",
                            "width": 530,
                            "height": 530
                        }
                    },
                    "title": "El incre\u00edble momento en que una ballena protege a una buzo de la amenaza de un tibur\u00f3n - Repretel",
                    "type": "share",
                    "target": {
                        "url": "https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.repretel.com%2Factualidad%2Fel-increible-momento-en-que-una-ballena-protege-a-una-buzo-de-la-amenaza-de-un-tiburon-101667&h=ATMJrC1mjLGHn8eMpE_XMntJVCc7SEinyZpLaB3yAcCm6qQebsNwiw3u8ScVAvFY0b4DA91z8jvK42vstw0jc6R1xMokN-m5m2bKQpHh6A&s=1&enc=AZNL5MvjRBPXHI512lwM3YUINaZ8U6S1a5jn9gslAIgtqeri8Af3qGIorz-H-5suDueYbEjcC-RAHwlahExIzGQx"
                    }
                }
            ]
        }
    },
    {
        "permalink_url": "https://www.facebook.com/noticiasrepretelcostarica/posts/1864105963629146",
        "message": "Hasta ahora se cuentan dos fallecidos",
        "created_time": "2018-01-09T15:57:56+0000",
        "id": "100237323349361_1864105963629146",
        "attachments": {
            "data": [
                {
                    "description": "El desprendimiento de un vag\u00f3n de un tren de carga mat\u00f3 a dos personas y dej\u00f3 a otras dos heridas en un accidente en San Rafael de Alajuela.",
                    "url": "https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.repretel.com%2Factualidad%2Fvocera-del-incofer-entrega-mas-informacion-sobre-el-accidente-ferroviario-101663&h=ATPj4-Bf9UBqU6eMkInsayFCZv4ozHVsjERWDCpaugpNoI9q-JJoOeNo_H4ryn0Ql2ozarL0FycDAAVKaD31vVzb-IsbjJxmQQMq3geIqw&s=1&enc=AZN_GPi2WJKqSWPlQ0HODOpchndia4Nh8rQiF2TkpisXsQJzyejn_SQWHOFK7sEuPdDTlFE1kCmK9wWUFlAQQhnq",
                    "media": {
                        "image": {
                            "src": "https://external.xx.fbcdn.net/safe_image.php?d=AQBsGbQrxL0hjT2l&w=530&h=530&url=http%3A%2F%2Fcdn.repretel.com%2Ffiles%2F2018%2F01%2F09%2F2018-01-09T10_00_46.006Z_image.jpg&cfs=1&sx=13&sy=0&sw=530&sh=530&_nc_hash=AQAJ1co0Js64vloP",
                            "width": 530,
                            "height": 530
                        }
                    },
                    "title": "Vocera del Incofer entrega m\u00e1s informaci\u00f3n sobre el accidente ferroviario - Repretel",
                    "type": "share",
                    "target": {
                        "url": "https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.repretel.com%2Factualidad%2Fvocera-del-incofer-entrega-mas-informacion-sobre-el-accidente-ferroviario-101663&h=ATPj4-Bf9UBqU6eMkInsayFCZv4ozHVsjERWDCpaugpNoI9q-JJoOeNo_H4ryn0Ql2ozarL0FycDAAVKaD31vVzb-IsbjJxmQQMq3geIqw&s=1&enc=AZN_GPi2WJKqSWPlQ0HODOpchndia4Nh8rQiF2TkpisXsQJzyejn_SQWHOFK7sEuPdDTlFE1kCmK9wWUFlAQQhnq"
                    }
                }
            ]
        }
    },
    {
        "permalink_url": "https://www.facebook.com/noticiasrepretelcostarica/posts/1864077003632042",
        "message": "EN VIVO Dos personas fallecidas tras accidente contra el tren, siga todos los detalles por canal 6 y repretel.com/envivo",
        "created_time": "2018-01-09T15:25:44+0000",
        "id": "100237323349361_1864077003632042",
        "attachments": {
            "data": [
                {
                    "type": "photo",
                    "url": "https://www.facebook.com/noticiasrepretelcostarica/photos/a.116984258341334.7712.100237323349361/1864076076965468/?type=3",
                    "description": "EN VIVO Dos personas fallecidas tras accidente contra el tren, siga todos los detalles por canal 6 y repretel.com/envivo",
                    "media": {
                        "image": {
                            "src": "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/26233735_1864076076965468_5989456874902999995_o.jpg?oh=8bf6ebc13472fb9533b873d05c614db2&oe=5ABB8BB8",
                            "width": 720,
                            "height": 405
                        }
                    },
                    "target": {
                        "url": "https://www.facebook.com/noticiasrepretelcostarica/photos/a.116984258341334.7712.100237323349361/1864076076965468/?type=3",
                        "id": "1864076076965468"
                    }
                }
            ]
        }
    },
    {
        "permalink_url": "https://www.facebook.com/noticiasrepretelcostarica/posts/1864060320300377",
        "message": "[Informaci\u00f3n en Desarrollo] Desprendimiento de vag\u00f3n deja al menos dos muertos en San Rafael de Alajuela",
        "created_time": "2018-01-09T15:05:53+0000",
        "id": "100237323349361_1864060320300377",
        "attachments": {
            "data": [
                {
                    "description": "Cuatro personas viajaban en un carro que fue impactado por un vag\u00f3n del tren, de los cuales dos resultaron fallecidos.",
                    "url": "https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.repretel.com%2Factualidad-3%2F101660&h=ATNrpbghAX3AJSWwrfcCwdRtgSkdkDviRzYDbVv1deZ0Ks0Hkf9GOtadghxMhqEV1fahik0rMTcYFlljKIjOKXZs-WGQtiv5kSDOWKrWUQ&s=1&enc=AZNtK3_mZUhKxsdj-aKePudtIg1jMWR7fzyi8F4G-6ZuKmJF1j_iDAUV2BoICGJgBuaIix_VsAK93gvbMnMk5b_z",
                    "media": {
                        "image": {
                            "src": "https://external.xx.fbcdn.net/safe_image.php?d=AQAsuB93d_WSJQrB&w=720&h=720&url=http%3A%2F%2Fcdn.repretel.com%2Ffiles%2F2018%2F01%2F09%2F2018-01-09T10_00_43.828Z_image.jpg&cfs=1&_nc_hash=AQBPBuoUHaErKgc9",
                            "width": 530,
                            "height": 530
                        }
                    },
                    "title": "Accidente del tren deja al menos dos fallecidos - Repretel",
                    "type": "share",
                    "target": {
                        "url": "https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.repretel.com%2Factualidad-3%2F101660&h=ATNrpbghAX3AJSWwrfcCwdRtgSkdkDviRzYDbVv1deZ0Ks0Hkf9GOtadghxMhqEV1fahik0rMTcYFlljKIjOKXZs-WGQtiv5kSDOWKrWUQ&s=1&enc=AZNtK3_mZUhKxsdj-aKePudtIg1jMWR7fzyi8F4G-6ZuKmJF1j_iDAUV2BoICGJgBuaIix_VsAK93gvbMnMk5b_z"
                    }
                }
            ]
        }
    },
    {
        "permalink_url": "https://www.facebook.com/noticiasrepretelcostarica/posts/1863998370306572",
        "message": "Su familia asegura que s\u00f3lo ten\u00eda problemas con el alcohol",
        "created_time": "2018-01-09T14:01:20+0000",
        "id": "100237323349361_1863998370306572",
        "attachments": {
            "data": [
                {
                    "description": "Su familia asegura que uno de los fallecidos por el fr\u00edo no era un indigente, sino que ten\u00eda problemas con el alcohol.",
                    "url": "https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.repretel.com%2Factualidad%2Ffallecido-por-frio-no-era-indigente-101658&h=ATNeByF8w2UQYU4BpejGaZj38sw8klXFlEdpaGZRPqxcOpTAzOZnIa_KwLsMyOvYFj8jJP4-WMfdjcORzHPjP1UW7LYkUflE3sZXt6I22A&s=1&enc=AZPHVlA-NzsHPlquR-1sz4sncAyn3QjnSxPXWUhQ53fAlOd0x7hjdQNYdBlJsobtTY1TodYs70xc4UAbW2yHFoiU",
                    "media": {
                        "image": {
                            "src": "https://external.xx.fbcdn.net/safe_image.php?d=AQBOz83sHooOjSY_&w=720&h=720&url=http%3A%2F%2Fcdn.repretel.com%2Ffiles%2F2018%2F01%2F09%2F2018-01-09T10_00_38.118Z_image.jpg&cfs=1&_nc_hash=AQA4N__SaDY_oU_f",
                            "width": 530,
                            "height": 530
                        }
                    },
                    "title": "Fallecido por fr\u00edo no era indigente - Repretel",
                    "type": "share",
                    "target": {
                        "url": "https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.repretel.com%2Factualidad%2Ffallecido-por-frio-no-era-indigente-101658&h=ATNeByF8w2UQYU4BpejGaZj38sw8klXFlEdpaGZRPqxcOpTAzOZnIa_KwLsMyOvYFj8jJP4-WMfdjcORzHPjP1UW7LYkUflE3sZXt6I22A&s=1&enc=AZPHVlA-NzsHPlquR-1sz4sncAyn3QjnSxPXWUhQ53fAlOd0x7hjdQNYdBlJsobtTY1TodYs70xc4UAbW2yHFoiU"
                    }
                }
            ]
        }
    },
    {
        "permalink_url": "https://www.facebook.com/noticiasrepretelcostarica/posts/1863991203640622",
        "message": "Realizan intensos trabajos de b\u00fasqueda",
        "created_time": "2018-01-09T13:53:48+0000",
        "id": "100237323349361_1863991203640622",
        "attachments": {
            "data": [
                {
                    "description": "El joven desapareci\u00f3 este lunes al caer al caudal del r\u00edo Reventaz\u00f3n, siendo intensamente buscado por cuadrillas.",
                    "url": "https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.repretel.com%2Factualidad%2Freinician-busqueda-de-joven-que-cayo-a-rio-reventazon-101654&h=ATPNf1rYw4tIhQbqI6Z1U7jagSqMIvtjKkbeozg_qKga9itHXWfyV716wJlULBGJ97k-I8bl99C3U98sGY0iku2Z0MiW39UoGzlGJKOzRg&s=1&enc=AZOCwMFhKx44VLBB8zGrMegtBEmayaAUp3c0aoqIZRJ9Kts-c4qhIUbvEOJkOF1qhujktcsmNsoA-TXiMjYz4OLM",
                    "media": {
                        "image": {
                            "src": "https://external.xx.fbcdn.net/safe_image.php?d=AQBaibxMCs5uWMCn&w=720&h=720&url=http%3A%2F%2Fcdn.repretel.com%2Ffiles%2F2018%2F01%2F09%2F2018-01-09T10_00_35.104Z_image.jpg&cfs=1&_nc_hash=AQDXuAOSldjSNWvY",
                            "width": 530,
                            "height": 530
                        }
                    },
                    "title": "Reinician b\u00fasqueda de joven que cay\u00f3 a r\u00edo Reventaz\u00f3n - Repretel",
                    "type": "share",
                    "target": {
                        "url": "https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.repretel.com%2Factualidad%2Freinician-busqueda-de-joven-que-cayo-a-rio-reventazon-101654&h=ATPNf1rYw4tIhQbqI6Z1U7jagSqMIvtjKkbeozg_qKga9itHXWfyV716wJlULBGJ97k-I8bl99C3U98sGY0iku2Z0MiW39UoGzlGJKOzRg&s=1&enc=AZOCwMFhKx44VLBB8zGrMegtBEmayaAUp3c0aoqIZRJ9Kts-c4qhIUbvEOJkOF1qhujktcsmNsoA-TXiMjYz4OLM"
                    }
                }
            ]
        }
    },
    {
        "permalink_url": "https://www.facebook.com/noticiasrepretelcostarica/posts/1863970960309313",
        "message": "Los m\u00e9dicos quedaron sorprendidos cuando fueron a practicarle la autopsia",
        "created_time": "2018-01-09T13:32:15+0000",
        "id": "100237323349361_1863970960309313",
        "attachments": {
            "data": [
                {
                    "description": "Los m\u00e9dicos de un centro de salud de Espa\u00f1a reaccionaron sorprendidos cuando descubrieron que el supuesto fallecido estaba vivo.",
                    "url": "https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.repretel.com%2Factualidad%2Finsolito--lo-dieron-por-muerto-y-desperto-antes-de-la-autopsia-101652&h=ATPVYMjDalQKtS-yrdrGUtqd9Kek-4i_KfABM5d98plPMwiMn9K85LlsT5jAYh6zTMsDfwP4DIu5D9ILESEZw8v6YLJTXKkkW6GSjbCgag&s=1&enc=AZOfOoGoqT6jIq0x063WipZdOaySjrfTYqhTrzXroJb4iaz5NQa3vgah2gTQ3Orh7d20hNDVinSklbbJNDyQGww-",
                    "media": {
                        "image": {
                            "src": "https://external.xx.fbcdn.net/safe_image.php?d=AQDCAT3mt3XR3iYl&w=720&h=720&url=http%3A%2F%2Fcdn.repretel.com%2Ffiles%2F2018%2F01%2F09%2F2018-01-09T10_00_34.605Z_image.jpg&cfs=1&_nc_hash=AQCpMC1ni8Dq7BT3",
                            "width": 530,
                            "height": 530
                        }
                    },
                    "title": "Ins\u00f3lito: Lo dieron por muerto y despert\u00f3 antes de la autopsia - Repretel",
                    "type": "share",
                    "target": {
                        "url": "https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.repretel.com%2Factualidad%2Finsolito--lo-dieron-por-muerto-y-desperto-antes-de-la-autopsia-101652&h=ATPVYMjDalQKtS-yrdrGUtqd9Kek-4i_KfABM5d98plPMwiMn9K85LlsT5jAYh6zTMsDfwP4DIu5D9ILESEZw8v6YLJTXKkkW6GSjbCgag&s=1&enc=AZOfOoGoqT6jIq0x063WipZdOaySjrfTYqhTrzXroJb4iaz5NQa3vgah2gTQ3Orh7d20hNDVinSklbbJNDyQGww-"
                    }
                }
            ]
        }
    
    


}); */



/* const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const GeoSchema = new Schema({
    type:{
        type: String,
        default:"Point"
    },
    coordinates:{
        type:[Number],
        index: "2dsphere"
    }
});

 const NinjaSchema = new Schema({
    name: {
        type:String,
        required:[true,"name is required"]
    },
    rank:{
        type:String
    },
    available:{
        type: Boolean,
        default:false
    },
    geometry:GeoSchema

   


 });



 const Ninja = mongoose.model('ninja',NinjaSchema);

 module.exports = Ninja;   */