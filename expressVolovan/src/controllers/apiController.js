const DB = require('../../src/database/models/Productos')


const controller = {
    users: (req, res) => {
        return res.json({
            count: 1,
            users: {
                id: 1,
                name: 'Luis',
                email: 'luis@correo.com',
                detail: 'url para obtener el detalle'
            }
        });
    },
    userDetail: (req, res) => {
        return res.json({
            id: '',
            name: '',
            email: '',
            avatar: ''
        })
    },
    products: (req, res) => {
        return res.json({
            count: '30',
            countByCategory: {
                salados: {
                    totalProducts: '6'
                },
                dulces: {
                    totalProducts: '6'
                },
            },
            products: {
                id: 1,
                name: 'Volovan de Jamon',
                description: 'Hojaldre relleno con jamon, queso amarrillo y salsa chipotle. ',
                // categories: [],
                detail: 'url para obtener el detalle',
            }
        })
    },
    productDetail: (req, res) => {
        return res.json({
            product_id: '1',
            product_name: 'Volovan de Jamon',
            product_price: '13',
            product_description: 'Hojaldre relleno con jamon, queso amarillo y salsa chipotle. ',
            category: 'salados',
            image: 'volovan-jamon.jpg',
        })
    }
}

module.exports = controller;