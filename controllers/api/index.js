const router = require('express').Router();
const userRoutes = require('./userRoutes');
const discussionRoutes = require('./DiscussionRoutes');
const commentRoutes = require('./comment');

router.use('/users', userRoutes);
router.use('/discussion', discussionRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
