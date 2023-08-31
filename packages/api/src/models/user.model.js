import { Sequelize, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';

const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        indexes: [
            {
                fields: ['username']
            }
            
        ]
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        indexes: [
            {
                fields: ['email']
            }
        ]
    },
    password: {
        type: DataTypes.STRING,
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
    

export default User



