const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const { REPL_MODE_SLOPPY } = require('repl');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
    users: (req, res) => {
        db.Usuarios.findAll()
        .then(usuarios => {
            console.log(usuarios);
            let respuesta = {
                count: usuarios.length,
                users: [],
            }

            usuarios.forEach(usuario => {
                respuesta.users.push({
                    id: usuario.id,
                    name: usuario.nombre,
                    email: usuario.email,
                    detail: 'url para obtener el detalle',
                });
            });

            return  res.json(respuesta);
            }).catch(error => res.send(error));
    },
    userDetail: (req, res) => {
        db.Usuarios.findByPk(req.params.id)
        .then(usuario => {
            let respuesta = {
                id: usuario.id,
                name: usuario.nombre,
                email: usuario.email,
                avatar: usuario.avatar_nombre
            }
            return res.json(respuesta);
        }).catch(error => res.send(error));
    },
    products: (req, res) => {
        db.CategoriasProductos.findAll()
        .then(categorias => {
            db.Productos.findAll({
                include: ["categoria"],
            })
            .then(productos=>{
                let respuesta = {
                   count: productos.length,
                   countByCategory: [],
                   products: [],
                }
                categorias.forEach(categoria => {
                    respuesta.countByCategory.push({
                        nameCategory : categoria.nombre,
                        countPerCategory: productos.filter(producto=>{return producto.id_categoria===categoria.id}).length,
                    });
                    
                });
                productos.forEach(producto => {
                    respuesta.products.push({
                        id: producto.id,
                        name:  producto.nombre,
                        description: producto.descripcion,
                        category: producto.categoria.nombre,
                        price: toThousand(producto.precio),
                        details: 'products/detail/'+producto.id,
                    });
                });

                return res.json(respuesta);
            }).catch(error => res.send(error));       
            }).catch(error => res.send(error));
    },
    productDetail: (req, res) => {
        db.Productos.findByPk(req.params.id,{
            include: ["categoria"],
        }
            )
            .then(producto => {
                let respuesta = {
                    product_id: producto.id,
                    product_name: producto.nombre,
                    product_price: toThousand(producto.precio),
                    product_description: producto.descripcion,
                    category: producto.categoria.nombre,
                    image: 'images/products/'+producto.imagen_nombre,
                    
                }
                return res.json(respuesta);
            }).catch(error => res.send(error));
    }
}

module.exports = controller;