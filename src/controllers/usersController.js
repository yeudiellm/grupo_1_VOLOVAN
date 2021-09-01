const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require ('../../models/User');

const controller = {
	register: (req, res) => {
		res.render('users/register');
	},
	processRegister: (req, res) => {
		const resultValidation = validationResult(req);

		if(resultValidation.errors.length > 0){
			return res.render('users/register',{
				errors: resultValidation.mapped(),
				oldData: req.body,
			});
		}else{

			let userInDB = User.findByField('email', req.body.email);
			
			if (userInDB) {
				return res.render('users/register',{
					errors: {
						email: {
							msg: 'Este correo ya está registrado'
						}
					},
					oldData: req.body,
				});
			}

			let userToCreate = {
				...req.body,
				password: bcryptjs.hashSync(req.body.password, 10),
				avatar: req.file.filename,
			}
			let userCreated = User.create(userToCreate);
			return res.redirect('/users/login');

		}

	},
	login: (req, res) => {
		res.render('users/login');
	},

};

module.exports = controller;