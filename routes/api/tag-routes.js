const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: [{model: Product}]
  }).then(response => res.json(response)).catch(err => console.log(err))
  // be sure to include its associated Product data

});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
        id: req.params.id
    },
    include: [
        {
            model: Product,
        }
    ]
}).then(response => res.json(response)).catch(err => console.log(err))
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
}).then(response => res.json(response)).catch(err => console.log(err))

  
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
        id: req.params.id
    }
}).then(response => res.json(response)).catch(err => console.log(err))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
        id: req.params.id
    }
}).then(response => res.json(response)).catch(err => console.log(err))
});

module.exports = router;
