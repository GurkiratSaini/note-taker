const router = require('express').Router();
const notesRoutes = requre('../apiRoutes/notesRoutes.js');

router.use(notesRoutes);

module.exports = router;