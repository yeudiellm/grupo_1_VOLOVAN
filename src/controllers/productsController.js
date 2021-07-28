const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products/products',{products:products, toThousand:toThousand});
	},
	productCart: (req,res)=>{
		res.render('products/productCart');
	},
	create: (req,res)=>{
		res.render('products/create');
	}

	// Detail - Detail from one product
    //LATER

	// Create - Form to create
    //LATER
	
	// Create -  Method to store
	//LATER

	// Update - Form to edit
	//LATER 

	// Update - Method to update
	//LATER

	// Delete - Delete one product from DB
	//LATER
};

module.exports = controller;