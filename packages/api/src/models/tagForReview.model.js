export default(sequelize, Sequelize) => {
    const tagForReview = sequelize.define('tagForReview', {
        id: {
            type: Sequelize.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        reviewId: {
            type: Sequelize.UUID,
            defaultValue: UUIDV4,
            allowNull: false,
            indexes: [
                {
                    fields: ['reviewId']
                }
            ]
        },
        tagId: {
            type: Sequelize.UUID,
            defaultValue: UUIDV4,
            allowNull: false,
            indexes: [
                {
                    fields: ['tagId']
                }
            ]
        }
        
    });
    return tagForReview
};

