import bcrypt from 'bcrypt';

export default(sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: Sequelize.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allowNull: false
                },
        username : {
            type: Sequelize.STRING,
            allowNull: false,
            indexes: [
                {
                    fields: ['username']
                }
            ]
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            indexes: [
                {
                    fields: ['email']
                }
            ]
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        hooks: {
            beforeCreate: (user) => {
                if (user.password) {
                    const salt = bcrypt.genSaltSync(10, 'a');
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            }
        }
        
    });

    User.prototype.validPassword = function(password, hash) {
        return bcrypt.compareSync(password, hash);
    }

};

return User;


