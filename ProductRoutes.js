const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  getAll,
  getById,
  create,
  update,
  delete: remove,
} = require('../controllers/productController');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', auth, create);
router.put('/:id', auth, update);
router.delete('/:id', auth, remove);

module.exports = router;
