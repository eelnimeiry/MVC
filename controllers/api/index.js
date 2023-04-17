const router = require('express').Router();
const userRoutes = require('./userRoutes');
const discussionRoutes = require('./DiscussionRoutes');

router.use('/users', userRoutes);
router.use('/discussions', discussionRoutes);

module.exports = router;
