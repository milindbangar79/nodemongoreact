var ObjectID = require('mongodb').ObjectID;

const usercollection = 'userdetails'

var users = {
  getAll: function(req, res, next) {
    db.collection(usercollection).find().toArray(function(err, results) {
      if (err) {
			  log.error(err)
		  	return next(new errors.InvalidContentError(err.errors.name.message))
		  }
      res.json(results);
      next()
    })
  },

  createUser: function(req, res, next) {
    db.collection(usercollection).insert({"iconimage":req.params.iconimage,
									"fname":req.params.fname,
									"lname":req.params.lname,
									"age":req.params.age,
                  "livesin" : req.params.livesin,
                  "ethnicity": req.params.ethnicity,
                  "speaks" :req.params.speaks
									}, function(err, docs) {
      if (err) {
          res.json({error : "database error"});
      }
      res.json({"message":"Added to User Details"});
    });
  },

   getUser: function(req, res, next) {
    var id = req.params.id;
    db.collection(usercollection).find({"_id":new ObjectID(id)}).toArray(function(err, results) {
      if (err) {
			  log.error(err)
		  	return next(new errors.InvalidContentError(err.errors.name.message))
		  }
      res.json(results);
      next()
    })
  },

  updateUser: function(req, res, next) {
     var id = req.params.id;
    db.collection(usercollection).updateOne({"_id":new ObjectID(id)},
			{"iconimage":req.params.iconimage,
			"fname":req.params.fname,
			"lname":req.params.lname,
			"age":req.params.age,
		          "livesin" : req.params.livesin,
		          "ethnicity": req.params.ethnicity,
		          "speaks" :req.params.speaks
			}, function(err, docs) {
      if (err) {
          res.json({error : "database error"});
      }
      res.json({"message":"Updated to User Details"});
    });
  },


};
module.exports = users;
