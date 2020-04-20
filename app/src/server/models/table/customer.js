module.exports = function(){
	return {
        tableName: 'customers',
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
}