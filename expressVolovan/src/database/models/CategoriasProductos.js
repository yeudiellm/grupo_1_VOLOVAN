module.exports = (sequelize, dataTypes) =>{
    let alias="CategoriasProductos"; 
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED.ZEROFILL,
            primaryKey: true, 
            autoIncrement: true,
            allowNull: false,
        }, 
        nombre: {
            type: dataTypes.STRING(100), 
            allowNull: false,
        }, 
    }; 
    let config={
        tableName: "categoriasproductos", 
        timestamps: false

    }; 
    const CategoriasProductos= sequelize.define(alias, cols, config); 
    CategoriasProductos.associate = function(models){
        CategoriasProductos.hasMany(models.Productos,{
            as: "productos",
            foreignKey:"id_categoria", 
        }); 

    }
    return CategoriasProductos;
}; 