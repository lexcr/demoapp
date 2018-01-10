const express = require('express');
const router = express.Router();
const Ninja = require('./models/ninja');

// getting data from database
/* router.get('/frutas', function(req,res,next){
    Ninja.geoNear(
        {type:'Point',coordinates:[parseFloat(req.query.lng), parseFloat(req.query.lat)]},
        {maxDistance: 100000, spherical:true}
    ).then(function(ninjas){
        res.send(ninjas);
    })
}); */
   
    //res.send({type:'GET'});
/*     Ninja.find({}).then(function(ninjas){

    });
});


 */
//usando mongo , no ovidar importarlo con body 

router.get('/frutas', function(req,res,next){
    Ninja.find({}).then(function(ninjas){
        res.send(ninjas);
            });
}); 

router.post('/frutas', function(req,res,next){
    //res.writeHead(200, {"Content-Type": "application/json"});
    /* var ninja = new Ninja(req.body);
    ninja.save(); */
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);

});
// recordar poner en el update la variable del ID  and refind
/* router.put('/frutas/:id', function(req,res,next){
    Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Ninja.findOne({_id:req.params.id}).then(function(ninja){
            res.send({ninja});
        });
       
    });
    
}); */

/* router.delete('/frutas/:id', function(req,res,next){
    Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
        res.send(ninja);
    }).catch(next);
    //req.params.id
    res.send({type:'DELETE'});
}); */


module.exports = router;