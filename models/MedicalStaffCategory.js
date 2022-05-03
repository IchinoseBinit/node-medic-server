// for using in another files

module.exports = (sequelize, DataTypes) => {
    // // Table name as Blog in double quote and Blog as variable in front
    const MedicalStaffCategory = sequelize.define("MedicalStaffCategory", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    MedicalStaffCategory.associate = (models) => {
        MedicalStaffCategory.hasMany(models.MedicalStaff, {
            onDelete: "cascade",
        });
    };
    return MedicalStaffCategory;
};