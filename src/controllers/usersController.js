const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require ('../../models/User');

const controller = {
	register: (req, res) => {
		return res.render('users/register');
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
		return res.render('users/login');
	},
	processLogin: (req, res)=>{
		const resultValidation2 = validationResult(req);

		if(resultValidation2.errors.length > 0){
			return res.render('users/login',{
				errors: resultValidation2.mapped(),
				oldData: req.body,
			});
		}else{
			let userToLogin = User.findByField('email', req.body.email);
		
			if (userToLogin) {
				let isPasswordOk = bcryptjs.compareSync(req.body.password, userToLogin.password)
				if (isPasswordOk) {
					delete userToLogin.password;
					req.session.userLogged = userToLogin;
					//Seteo de cookie en caso de activar casilla (1día duración)
					if (req.body.remember_me) {
						res.cookie('userEmail', req.body.email, {maxAge: ((1000 * 60) * 1440)})
					}
					return res.redirect('/users/profile');
				}else{
					return res.render('users/login', {
						errors: {
							email: {
								msg: 'El correo o contraseña es incorrecto'
							}
						},
						oldData: req.body,
					});
				}
			}
			return res.render('users/login', {
				errors: {
					email: {
						msg: 'Este email no está en nuestra base de datos'
					}
				},
				oldData: req.body,
			});
		}

		
	},
	profile: (req, res) => {
		return res.render('users/profile', {
			user: req.session.userLogged
		});
	},
	logout: (req, res)=>{
		//Destrucción de logueo y de cookie guardada
		res.clearCookie('userEmail')
		req.session.destroy();
		return res.redirect('/')
	},

};

module.exports = controller;