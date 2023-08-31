import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const tagForReview = sequelize.define('tagForReview', {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    reviewId: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        indexes: [
            {
                fields: ['reviewId']
            }
        ]
    },
    tagId: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        indexes: [
            {
                fields: ['tagId']
            }
        ]
    }
});

export default tagForReview;


