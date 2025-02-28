export default (sequelize, DataTypes) => {
  const artistSongs = sequelize.define(
    'artist_songs',
    {
      artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      song_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return artistSongs;
};
