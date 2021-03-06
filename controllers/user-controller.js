const { User, Thought } = require('../models');

getAllusers(req, res) {
    User.find({})
        .populate({
            path: 'thoughts',
            select: '-__v'
        })

        .select('-__v')
        .sort({ _id: -1 })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
},
  