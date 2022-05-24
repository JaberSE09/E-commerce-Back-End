const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  Category.findAll({
    include: [
      {
        model: Product,
      },
    ],
  }).then(response => res.json(response)).catch(err => console.log(err))

  // be sure to include its associated Products
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
        id: req.params.id
    },
    include: [
        {
            model: Product,
        }
    ]
}).then(response => res.json(response)).catch(err => console.log(err))
  // be sure to include its associated Products
});

router.post("/", (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
}).then(response => res.json(response)).catch(err => console.log(err))
// be sure to include its associated Products
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
        id: req.params.id
    }
}).then(response => res.json(response)).catch(err => console.log(err))
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
        id: req.params.id
    }
}).then(response => res.json(response)).catch(err => console.log(err))
});

module.exports = router;
