const fs = require('fs');
const path = require('path');



const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
	
	index: (req, res) => {
		res.render('index');
	},
};

module.exports = controller;