export default(sequelize, Sequelize) => {
    const company = sequelize.define('Company', {
        id: {
            type: Sequelize.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            indexes: [
                {
                    fields: ['name']
                }
            ]
        },
        reviews: {
            type: Sequelize.UUID,
            defaultValue: UUIDV4,
            allowNull: false
        }
    });
    return company
};

