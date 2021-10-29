module.exports = (sequelize, dataTypes) =>{
    let alias="Pedidos"; 
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED.ZEROFILL,
            primaryKey: true, 
            autoIncrement: true,
            allowNull: false,
        },  
        fecha: {
            type: dataTypes.DATE,
            allowNull: false,
        }, 
        cantidad:{
            type: dataTypes.INTEGER.UNSIGNED.ZEROFILL,
            allowNull: false,
        }, 
        sub_total:{
            type: dataTypes.DECIMAL(10,2), 
            allowNull: false,
        },
        id_producto: {
            type: dataTypes.INTEGER.UNSIGNED.ZEROFILL, 
            allowNull: false,
        },
        id_usuario: {
            type: dataTypes.INTEGER.UNSIGNED.ZEROFILL, 
            allowNull: false,
        }
    }; 
    let config={
        tableName: "pedidos", 
        timestamps: false

    }; 
    const Pedidos= sequelize.define(alias, cols, config); 
    Pedidos.associate = function(models){
        Pedidos.belongsTo(models.Productos, {
            as: "productos", 
            foreignKey:"id_producto", 
        });
        Pedidos.belongsTo(models.Usuarios, {
            as: "usuarios", 
            foreignKey:"id_usuario", 
        });
    };


    return Pedidos;
}; 