const router = require('express').Router();

const apiRoutes = require('./api');
const routes = require('./api/routes');

router.use('/api', apiRoutes);
router.use('/', routes);

module.exports = router;
