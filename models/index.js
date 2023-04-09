const User = require('./User');
const Discussion = require('./Discussion');
const Comment = require("./Comment")

User.hasMany(Discussion, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Discussion.belongsTo(User, {
  foreignKey: 'user_id'
});

Discussion.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Discussion.belongsTo(Project, {
  foreignKey: 'user_id'
});

module.exports = { User, Discussion };
