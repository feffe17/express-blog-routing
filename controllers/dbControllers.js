const db = require("../db");

exports.index = (req, res) => {
    res.json({
      counter: db.length,
      lista: db
    });
  };

  exports.show = (req, res) => {
    const post = db.find(post => post.slug === req.params.slug);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: "Post non trovato" });
    }
  };