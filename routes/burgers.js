const express = require('express');
const app = express();
const router = express.Router();
const burgers = ['spicy chicken', 'whopper', 'big mac'];

router.get('/all', (req, res) => {
 res.send(burgers.toString());
})

router.get('/:id', (req, res) => {
 res.send(burgers[req.params.id]);
})

module.exports = router;