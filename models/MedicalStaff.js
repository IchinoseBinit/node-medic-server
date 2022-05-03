// for using in another files

module.exports = (sequelize, DataTypes) => {
    // // Table name as Blog in double quote and Blog as variable in front
    const MedicalStaff = sequelize.define("MedicalStaff", {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        qualification: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return MedicalStaff;
};