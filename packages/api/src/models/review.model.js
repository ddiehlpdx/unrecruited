export default(sequelize, Sequelize) => {
    const Review = sequelize.define('Review', {
        id: {
            type: Sequelize.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            indexes: [
                {
                    fields: ['id']
                }
            ]
        },
        title: {
            type: Sequelize.STRING(128),
            allowNull: false,
            indexes: [
                {
                    fields: ['title']
                }
            ]

        },
        body: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rating: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        tags: {
            type: Sequelize.FLOAT,
            allowNull: false,
            
        },
        user: {
            type: Sequelize.UUID,
            defaultValue: UUIDV4,
            allowNull: false
        },
        company: {
            type: Sequelize.UUID,
            defaultValue: UUIDV4,
            allowNull: false
        }
    }); 
    return Review   
};

