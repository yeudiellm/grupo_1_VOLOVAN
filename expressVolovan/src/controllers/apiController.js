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
            count: '2',
            countByCategory: {
                salados: {
                    totalProducts: '6'
                },
                dulces: {
                    totalProducts: '6'
                },
            },
            products: [
                {
                    id: '1',
                    name: 'volovan de jamon',
                    description: 'un volovan que tiene jamon',
                    category: 'salados',
                    details: 'products/detail/1',
                },
                {
                    id: '2',
                    name: 'volovan de piña',
                    description: 'un volovan que tiene piña',
                    category: 'dulce',
                    details: 'products/detail/2',
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