import {Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const Review = sequelize.define('Review', {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        indexes: [
            {
                fields: ['id']
            }
        ]
    },
    title: {
        type: DataTypes.STRING(128),
        allowNull: false,
        indexes: [
            {
                fields: ['title']
            }
        ]
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    tags: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    user: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false
    },
    company: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false
    }
});

export default Review;

        
       