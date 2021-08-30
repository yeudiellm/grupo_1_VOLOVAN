const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
	register: (req, res) => {
		res.render('users/register');
	},
	processRegister: (req, res) => {
		const resultValidation = validationResult(req);

		if(resultValidation.errors.length > 0){
			return res.render('users/register',{
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

	},
	login: (req, res) => {
		res.render('users/login');
	},

};

module.exports = controller;