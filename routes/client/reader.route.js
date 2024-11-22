const express = require("express");
const router = express.Router();
const data = require("../../controllers/client/book.controller");

const controller = require("../../controllers/client/reader.controller");

router.get('/', controller.getAll);

router.put('/borrow', controller.borrowBook);

router.get('/user', controller.getUser);

router.get('/userinfor', controller.getInforUserByToken);

router.put('/:token', controller.updateUser);

router.put('/statusBookReturn/:readerId/:bookId', controller.statusBookReturn)

router.delete('/return/:id', controller.deleteBookFromBorrow)

router.get('/numberbookborrowed/:id_book', controller.getNumberBookBorrowed)

router.get('/detail/:id', data.getOne)


module.exports = router;