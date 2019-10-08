'use strict';

module.exports = (sequelize, Datatypes) => {
    return sequelize.define('empresa', {
        id: {
            type: Datatypes.UUID,
            primaryKey: true
        },
        rubro: {
            type: Datatypes.STRING,
            isAlphanumeric: true,
            required: true,
            allowNull: true
        },
        razon_social: {
            type: Datatypes.STRING,
            isAlphanumeric: true,
            required: true,
            allowNull: true
        },
        logo: {
            type: Datatypes.STRING,
            isAlphanumeric: true,
            required: true,
            allowNull: true
        },
        telefono: {
            type: Datatypes.STRING,
            isAlphanumeric: true,
            allowNull: true},
        celular: {
            type: Datatypes.STRING,
            isAlphanumeric: true,
            allowNull: true
        },
        email: {
            type: Datatypes.STRING,
            required: true,
            allowNull: true,
            len: [7,100],
            isEmail: true  
        },
        descripcion: {
            type: Datatypes.STRING,
            isAlphanumeric: true,
            required: true,
            allowNull: true
        },
        llave: {
            type: Datatypes.STRING,
            isAlphanumeric: true,
            required: true,
            allowNull: true
        },
        created_at: {typee: Datatypes.DATETIME},
        updated_at: {typee: Datatypes.DATETIME},
        deleted_at: {typee: Datatypes.DATETIME}
    },{
        underscored: true,
        paranoid: true
    });
}