
const express = require('express');
const router = express.Router();
const knex = require('../knex')


router.get('/', function(req, res) {
  knex('classifieds')
    .select('id', 'title', 'description', 'price', 'item_image', 'created_at')
    .then(function(results) {
      res.json(results)

    }).catch(function(err) {
    res.send(err);
    console.log(err);
  });
});


// GET one particular 'item' object from the 'db' by its 'id'
router.get('/:id', function(req, res) {
  // assert & specify that id is always integer
  let id = +req.params.id
  knex('classifieds')
    .select('id', 'title', 'description', 'price', 'item_image')
    .where('id', id)
    .then(function(results) {
      console.log(results[0]);
      res.json(results[0]);

    }).catch(function(err) {
      res.send(err);
      console.log(err);
    });
});


// POST an 'item' object
router.post('/', function(req, res) {
  console.log(req.body)
  knex('classifieds')
    .insert({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      item_image: req.body.item_image
    }).returning(['id', 'title', 'description', 'price', 'item_image'])
    .then(function(results) {
      console.log(results[0]);
      res.json(results[0])

    }).catch(function(err) {
    res.send(err);
    console.log(err);
  });
});







router.patch('/:id', function(req, res) {
  let id = +req.params.id

  knex('classifieds')
    .where('id', id)
    .update({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      item_image: req.body.item_image
    }).returning(['id', 'title', 'description', 'price', 'item_image'])
    .then(function(results) {
      console.log(results[0]);
      res.json(results[0])

    }).catch(function(err) {
      res.send(err);
      console.log(err);
    });
});






router.delete('/:id', function(req, res) {
  let id = +req.params.id
  // console.log(req.params.title)
  // let deletedItemTitle = req.params.title
  knex('classifieds')
    .where('id', id)
      .first()
      .del()
      .returning(['id', 'title', 'description', 'price', 'item_image'])
        .then(function(results) {

          console.log(results[0]);
          res.json(results[0]);

  }).catch(function(err) {
    res.send(err);
  });
});


module.exports = router;
