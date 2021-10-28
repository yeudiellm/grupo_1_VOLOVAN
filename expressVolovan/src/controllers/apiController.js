const DB = require('../../src/database/models/Productos')


const controller = {
    users: (req, res) => {
        return res.json({
            count: 2,
            users: [
                {
                    id: 1,
                    name: 'Luis',
                    email: 'luis@correo.com',
                    detail: 'url para obtener el detalle'
                },
                {
                    id: 2,
                    name: 'Pedro',
                    email: 'pedro@correo.com',
                    detail: 'url para obtener el detalle'
                },
            ],
        });
    },
    userDetail: (req, res) => {
        return res.json({
            id: 1,
            name: 'Luis',
            email: 'luis@correo.com',
            avatar: 'img_avatar.png'
        })
    },
    products: (req, res) => {
        return res.json({
            count: '5',
            countByCategory: {
                salados: {
                    totalProducts: '5'
                },
                dulces: {
                    totalProducts: '6'
                },
                postres: {
                    totalProducts: '3'
                },
                especialidades: {
                    totalProducts: '1'
                },
            },
            products: [
                {
                    id: '1',
                    name: 'volovan de jamon',
                    description: 'un volovan que tiene jamon',
                    category: 'salados',
                    price: '10',
                    details: 'products/detail/1',
                },
                {
                    id: '2',
                    name: 'volovan de piña',
                    description: 'un volovan que tiene piña',
                    category: 'dulce',
                    price: '10',
                    details: 'products/detail/2',
                },
                {
                    id: '3',
                    name: 'volovan de manzana',
                    description: 'un volovan que tiene manzana',
                    category: 'dulce',
                    price: '10',
                    details: 'products/detail/3',
                },
                {
                    id: '4',
                    name: 'volovan de aguacate',
                    description: 'un volovan que tiene aguacate',
                    category: 'dulce',
                    price: '10',
                    details: 'products/detail/4',
                },
                {
                    id: '5',
                    name: 'volovan de pizza',
                    description: 'un volovan que tiene pizza',
                    category: 'dulce',
                    price: '10',
                    details: 'products/detail/5',
                },
            ]
        })
    },
    productDetail: (req, res) => {
        return res.json({
            product_id: '1',
            product_name: 'Volovan de Jamon',
            product_price: '13',
            product_description: 'Hojaldre relleno con jamon, queso amarillo y salsa chipotle. ',
            category: 'salados',
            image: 'images/products/volovan-jamon.jpg',
        })
    }
}

module.exports = controller;