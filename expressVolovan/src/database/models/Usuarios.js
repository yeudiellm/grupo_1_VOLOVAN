module.exports = (sequelize, dataTypes) =>{
    let alias="Usuarios"; 
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED.ZEROFILL,
            primaryKey: true, 
            autoIncrement: true,
            allowNull: false,
        }, 
        esAdmin:{
            type: dataTypes.BOOLEAN,  
            defaultValue: false, 
        },
        nombre: {
            type: dataTypes.STRING(100), 
            allowNull: false,

        },
        email: {
            type: dataTypes.STRING(100), 
            allowNull: false,
        },  
        password: {
            type: dataTypes.STRING(100), 
            allowNull: false,
        },  
        avatar_nombre: {
            type: dataTypes.STRING(100), 
            allowNull: false,
        }
    }; 
    let config={
        tableName: "usuarios", 
        timestamps: false

    }; 
    const Usuarios= sequelize.define(alias, cols, config); 
    Usuarios.associate = function(models){
        Usuarios.hasMany(models.Usuarios,{
            as:"pedidos",
            foreignKey:"id_usuario", 
        }); 

    }
    return Usuarios
}; 