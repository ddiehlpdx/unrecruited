import {Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const Company = sequelize.define('Company', {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        indexes: [
            {
                fields: ['name']
            }
        ]
    },
    reviews: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false
    }
});

export default Company;



