const express = require('express');
const router = express.Router();

const User = require('../database/database');

router.get('/', function (req, res) {
     User.find({}, function(err, foundList){
      if(err){
        res.render(err)
      }else{
        res.render('home1', {newuser: foundList}) ////, Email:Email, Gender: Gender, Status:Status})
      }
    });
});


router.get('/newuser', function (req, res) {
	res.render('newuser')
});


router.post('/newuser', function (req, res) {
 const user1 = new User({
	      ID: 12,
          Name: req.body.Name,
          Email: req.body.Email,
          Gender: req.body.Gender,
          Status: req.body.Status,
});
 user1.save()
 res.redirect('/newuser')
});

router.get('/edituser/:username', function (req, res) {
  console.log(req.params.username)
  User.findOne({Name: req.params.username}, function (err, resu) {
    if(err){
      res.render(err)
    }else {
      console.log(resu)
      res.render('edit_user', {
        Name: resu.Name,
        Email: resu.Email,
        Gender: resu.Gender
      })
    }
  })

});


router.post('/edituser/:username', function (req, res) {
   User.updateOne({Name: req.params.username}, {$set: {Name: req.body.Name, Email: req.body.Email, Gender: req.body.Gender, Status: req.body.Status}}, function (err, user) {
     if(!err){ res.render('edit_user', {
       Name: req.body.Name,
       Email: req.body.Email,
       Gender: req.body.Gender,
       Status: req.body.Status

     })
   }
})
});


router.post('/delete', function(req, res){
	const id = req.body.list
    console.log(req.body.list)
    User.findByIdAndRemove({_id: id}, function(err){
    	if(err){
    		console.log(err)
    	}else{
    		res.redirect('/')
    	}
    });
});




module.exports = router
