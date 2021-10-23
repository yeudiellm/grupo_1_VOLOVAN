module.exports = (sequelize, DataTypes) =>{
    let alias="Productos"; 
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
            primaryKey: true, 
            autoIncrement: true,
            allowNull: false,
        }, 
        nombre: {
            type: DataTypes.STRING(100), 
            allowNull: false,
        }, 
        descripcion: {
            type: DataTypes.STRING(100), 
            allowNull: false,
        }, 
        precio: {
            type: DataTypes.DECIMAL(4,2), 
            allowNull: false,
            defaultValue: 13.00,
        }, 
        imagen_nombre: {
            type: DataTypes.STRING(100), 
            allowNull: false,
        }, 
        id_categoria: {
            type: DataTypes.INTEGER.UNSIGNED.ZEROFILL, 
            allowNull: false,
        }
    }; 
    let config={
        tableName: "productos", 
        timestamps: false

    }; 
    const Productos= sequelize.define(alias, cols, config); 
    Productos.asociate = function(models){
        Productos.hasMany(models.Pedidos,{
            as:"pedidos",
            foreignKey:"id_producto", 
        }); 
        Productos.belongsTo(models.CategoriasProductos, {
            as: "categoriasproductos", 
            foreignKey:"id_categoria", 
        });
    };


    return Productos;
}; 