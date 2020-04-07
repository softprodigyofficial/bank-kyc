module.exports = function(){
    return {
        tableName: 'users',
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        classMethods: {},
        scopes: {
           active: {
           	 where: { is_active: true }
           }
        }
    };
};
