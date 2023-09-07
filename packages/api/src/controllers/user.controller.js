import User from '#models';

const Op = User.Sequelize.Op;

const createUser = async (req,res) => {
    const user = await User.create(req.body);
    if(!user){
        return res.status(500);
    }
     res.status(201);
     return user;    
};

const findAllUsers =  async (req,res) => {
    try{
        const username =  req.query.username;
        const condition  = (username) ? { username: { [Op.like] : `%${username}%`} } : null;
    
        if(!condition){
        throw new Error(100, 'No condition found');
     }
    return User.findAll({
        where: condition
    });

} catch(err) {
    if(err.messsage === 'No condition found'){
        return res.status(500).send({message: err.message || `Error occurred while retrieving users. ${err}`});
    };
};
};
    


const findByPk = async (req, res) => {
    try {
        const id = req.params.id;
        
        if (!id) {
            throw new Error(100, 'No Id found');
        }
        
        return User.findByPk(id);
    }
    catch(err){
        if(err.message === 'No Id found'){
            return res.status(500).send({message: err.message || `Error occurred while retrieving Id. ${err}`});
        };
    };
};

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = req.body;

        if (!id) {
            throw new Error(100, 'No Id found');
        };

        return await User.update(updatedUser, {
            where : { id : id}
        });


    } catch (err) {
        if(message === 'No Id found') {
            return res.status(500).send({message: err.message || `Error occurred while updating user. ${err}`});
        };
    };
};

const destroyUser = async (req, res) => {
    try {
        const id = req.params.id;
        if(!id) {
            throw new Error(100, 'No Id found');
        };

        return await User.destroy({
            where: {id : id}
        });
    } catch (err) {
        if(messsage === 'No Id found') {
            return res.status(500).send({message: err.message || `Error occurred while deleting user. ${err}`});
        };
        
    };
};

module.exports = {
    createUser,
    findAllUsers,
    findByPk,
    updateUser,
    destroyUser
};