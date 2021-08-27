const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		const productSalados = products.filter(product => product.category==="salados");
		const productDulces = products.filter(product => product.category==="dulces");
		const productEspeciales = products.filter(product => product.category==="especiales");
		const productPostres = products.filter(product => product.category==="postres");
		res.render('products/products',
			{productSalados:productSalados,
			 productDulces:productDulces, 
			 productEspeciales:productEspeciales, 
			 productPostres: productPostres,
			 toThousand:toThousand});
	},
	productCart: (req,res)=>{
		res.render('products/productCart');
	},
	create: (req,res)=>{
		res.render('products/create');
	},
	edit: (req, res)=>{
		let idProduct =parseInt(req.params.idProduct);
		
		res.render('products/edit', {idProduct: idProduct});
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