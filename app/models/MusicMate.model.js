module.exports = (sequelize, dataType) => {
    const MusicMate = sequelize.define("MusicMate", {
        id: {
            type: dataType.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Recommend: {
            type: dataType.STRING,
            allowNull: false
        },
        ArtistName: {
            type: dataType.STRING,
            allowNull: false
        },
        Musicgenre: {
            type: dataType.STRING,
            allowNull: false
        },
        Country: {
            type: dataType.STRING,
            allowNull: false
        },
    });

    return MusicMate;
};