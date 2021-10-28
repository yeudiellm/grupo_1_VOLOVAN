const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require("../database/models");


const controller = {
	register: (req, res) => {
		return res.render('users/register');
	},
	processRegister: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body,
			});
		} else {
			db.Usuarios.findOne({
				where: {
					email: req.body.email,
				}
			}).then(user => {
				if(user){
					return res.redirect('/users/login')
				}
				else{
					const userToCreate = {
						nombre: req.body.name,
						email: req.body.email,
						password: bcryptjs.hashSync(req.body.password, 10),
						avatar_nombre: req.file.filename,
					}
					db.Usuarios.create(
						userToCreate
					).then(() => { return res.redirect('/users/login'); })
						.catch(error => res.send(error));

				}
			})
			.catch(error => res.send(error));
		}
	},
	login: (req, res) => {
		return res.render('users/login');
	},
	processLogin: (req, res) => {
		const resultValidation2 = validationResult(req);

		if (resultValidation2.errors.length > 0) {
			return res.render('users/login', {
				errors: resultValidation2.mapped(),
				oldData: req.body,
			});
		} else {
			db.Usuarios.findOne({
				where: {
					email: req.body.email,
				}
			}).then(userToLogin =>{
				if(userToLogin){
					let isPasswordOk = bcryptjs.compareSync(req.body.password, userToLogin.password)
					if (isPasswordOk) {
						delete userToLogin.password;
						req.session.userLogged = userToLogin;
						//Seteo de cookie en caso de activar casilla (1día duración)
						if (req.body.remember_me) {
							res.cookie('userEmail', req.body.email, { maxAge: ((1000 * 60) * 1440) })
						}
						return res.redirect('/users/profile');
					} else {
						return res.render('users/login', {
							errors: {
								email: {
									msg: 'El correo o contraseña son incorrectos.'
								}
							},
							oldData: req.body,
						});
					}
				}
				else{
					return res.render('users/login', {
						errors: {
							email: {
								msg: 'Este email no está en nuestra base de datos.'
							}
						},
						oldData: req.body,
					});
				}
			}).catch(error => res.send(error));
		}
	},
	profile: (req, res) => {
		return res.render('users/profile', {
			user: req.session.userLogged
		});
	},
	logout: (req, res) => {
		//Destrucción de logueo y de cookie guardada
		res.clearCookie('userEmail')
		req.session.destroy();
		return res.redirect('/')
	},

};

module.exports = controller;