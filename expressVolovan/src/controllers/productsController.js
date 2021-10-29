const fs = require('fs');
const { parse } = require('path');
const path = require('path');

const { validationResult } = require('express-validator');
const { send } = require('process');

const db = require("../database/models");

const { Op } = require("sequelize");


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		db.CategoriasProductos.findAll()
			.then(function (categorias) {
				db.Productos.findAll()
					.then(function (productos) {
						return res.render('products/products', {
							productos: productos,
							categorias: categorias,
							toThousand: toThousand,
						});
					})//.catch(error => res.send(error));
			}).catch(error => res.send(error));
	},
	detail: (req, res) => {
		const productID = parseInt(req.params.id, 10);
		db.Productos.findByPk(productID)
			.then(product => {
				res.render('products/detail', { product: product, toThousand: toThousand });
			});
	},
	productCart: (req, res) => {
		res.render('products/productCart');
	},
	create: (req, res) => {
		db.CategoriasProductos.findAll()
			.then(categorias => {
				return res.render('products/create', {
					categorias: categorias,
				});
			});
	},
	build: (req, res) => {
		const resultValidation = validationResult(req);
		// proceso de validación
		if (resultValidation.errors.length > 0) {
			return res.render('products/create', {
				errors: resultValidation.mapped(),
				oldData: req.body
			})
		}
		// continua el flujo si no hay errores de validacion
		const newProduct = {
			nombre: req.body.product_name,
			precio: req.body.product_price,
			descripcion: req.body.product_description,
			id_categoria: req.body.category,
			imagen_nombre: req.file.filename || 'default-image.png'
		}
		db.Productos.create(
			newProduct
		).then(() => { return res.redirect('/products'); })
			.catch(error => res.send(error));
	},
	edit: (req, res) => {
		let productoId = req.params.id;
		let promProductos = db.Productos.findByPk(productoId);
		let promCategoria = db.CategoriasProductos.findAll();
		Promise
			.all([promProductos, promCategoria])
			.then(([product, categorias]) => {
				return res.render('products/edit',
					{ product: product, categorias: categorias, toThousand: toThousand })
			})
			.catch(error => res.send(error));
	},
	update: (req, res) => {
		const resultValidation2 = validationResult(req);
		// proceso de validación
		if (resultValidation2.errors.length > 0) {
			let productoId = req.params.id;
			let promProductos = db.Productos.findByPk(productoId);
			let promCategoria = db.CategoriasProductos.findAll();
			Promise
				.all([promProductos, promCategoria])
				.then(([product, categorias]) => {
					return res.render('products/edit',
						{
							product: product, categorias: categorias,
							errors: resultValidation2.mapped(),
							oldData: req.body,
							toThousand: toThousand
						})
				})
				.catch(error => res.send(error));
		}
		// continua con el flujo si no hay errores en validacion
		const productoId = parseInt(req.params.id, 10);
		let promProductos = db.Productos.findByPk(productoId);
		Promise
			.all([promProductos])
			.then(([product]) => {
				let editProduct = {
					nombre: req.body.product_name || product.nombre,
					precio: req.body.product_price || product.precio,
					descripcion: req.body.product_description || product.descripcion,
					id_categoria: req.body.category || product.id_categoria,
				}
				if (req.file) {
					try {
						fs.unlinkSync('public/images/products/' + product.imagen_nombre);
						editProduct.imagen_nombre = req.file.filename || 'default-image.png';
						console.log('File removed');
					} catch (err) {
						console.error('Something wrong happened removing the file', err);
					}
				}

				db.Productos
					.update(editProduct,
						{ where: { id: product.id } })
					.then(() => {
						return res.redirect('/products');
					})
					.catch(error => res.send(error))
			})
			.catch(error => res.send(error));

	},
	search: (req, res) => {
		const resultValidation3 = validationResult(req);
		// proceso de validación
		if (resultValidation3.errors.length > 0) {
			res.redirect('/products');
		}

		const nombre = "%" + req.body.product_name.toString() + "%";
		db.Productos.findOne({
			where: {
				nombre: {
					[Op.like]: nombre,
				}
			}
		})
			.then(product => {
				if (product) {
					res.render('products/detail', { product: product, toThousand: toThousand });
				}
				else {
					res.redirect('/products');
				}
			}).catch(error => res.send(error));
	},
	delete: (req, res) => {
		const deleteId = parseInt(req.params.id, 10);
		db.Productos.findByPk(deleteId)
			.then(product => {
				try {
					fs.unlinkSync('public/images/products/' + product.imagen_nombre);
					console.log('File removed');
				} catch (err) {
					console.error('Something wrong happened removing the file', err);
				}
				db.Productos
					.destroy({ where: { id: deleteId }, force: true }) 
					.then(() => {
						return res.redirect('/products');
					})
					.catch(error => res.send(error));
			}).catch(error => res.send(error));
	},
};

module.exports = controller;