const path = require('path');
const { body } = require('express-validator');

const SearchValidation=[body('product_name')
.notEmpty().bail()
.isLength({min:5,max:undefined})];

module.exports = SearchValidation;