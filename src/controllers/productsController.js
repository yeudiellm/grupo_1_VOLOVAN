const fs = require('fs');
const { parse } = require('path');
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
	build: (req, res) => {
		const newProduct = {
			product_id : parseInt(Date.now(),10),
			product_name: req.body.product_name,
			product_price: 13.00,
			product_description: req.body.product_description,
			category: req.body.category,
			image: req.file.filename || 'default-image.png'
		} 
		products.push(newProduct); 
		const productsJSON =JSON.stringify(products,null,2); 
		fs.writeFileSync(productsFilePath, productsJSON);
		res.redirect('/products');
	},
	edit: (req, res)=>{
		let id =parseInt(req.params.id,10);
		const product=products.find(p => p.product_id === id);	
		console.log(product);
		res.render('products/edit', {product:product,toThousand:toThousand});
	},
	update: (req, res) => {
		const productId = parseInt(req.params.id,10); 
		const product = products.find( p=> p.product_id===productId);
		if(product){
			const NewValues= req.body; 
			product.product_name =NewValues.product_name || product.product_name; 
			product.product_price= NewValues.product_price || product.product_price; 
			product.product_discount= NewValues.product_discount ||product.product_discount;
			product.product_description=NewValues.description ||product.product_description;
			product.category =NewValues.category || product.category; 
			if(req.file){
				try {
					fs.unlinkSync('public/images/products/'+product.image);
					product.image = req.file.filename || 'default-image.png';
					console.log('File removed');
				} catch(err) {
					console.error('Something wrong happened removing the file', err);
				}
			}
		}
		const productsJSON =JSON.stringify(products,null,2); 
		fs.writeFileSync(productsFilePath, productsJSON);
		res.redirect('/products');
	},
	detail: (req, res) => {
		const productId=parseInt(req.params.id,10);
		const product=products.find(p => p.product_id === productId);
		res.render('products/detail',{product:product, toThousand:toThousand});
	},
	delete: (req,res)=>{
		const deleteId = parseInt(req.params.id,10);
		const productDelete = products.find(p => p.product_id===deleteId); 
		const productsF = products.filter((p)=>{
			return p.product_id!= deleteId; 
		});
		const productsJSON =JSON.stringify(productsF,null,2); 
		fs.writeFileSync(productsFilePath, productsJSON);
		try {
			fs.unlinkSync('public/images/products/'+productDelete.image);
			console.log('File removed');
		} catch(err) {
			console.error('Something wrong happened removing the file', err);
		}
		res.redirect('/products');
	}
};

module.exports = controller;