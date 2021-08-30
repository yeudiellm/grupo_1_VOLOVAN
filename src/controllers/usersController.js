const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
	register: (req, res) => {
		res.render('users/register');
	},
	processRegister: (req, res) =>{
		return res.send({
			body: req.body,
			file: req.file
		});
	},
	login: (req, res) => {
		res.render('users/login');
	},

};

module.exports = controller;