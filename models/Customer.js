// for using in another files

module.exports = (sequelize, DataTypes) => {
    // // Table name as Blog in double quote and Blog as variable in front
    const Customer = sequelize.define("Customer", {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Customer;
};