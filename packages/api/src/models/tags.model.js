export default (sequelize, Sequelize) => {
    const Tags = sequelize.define('Tags', {
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
                    unique: true,
                    fields: ['name']
                }
            ]
        }
    });
    return Tags
};



