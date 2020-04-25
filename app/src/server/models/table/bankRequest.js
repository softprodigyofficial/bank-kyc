module.exports = function(){
	return {
        tableName: 'bank_requests',
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