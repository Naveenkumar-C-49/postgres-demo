const Router = require('express-promise-router');

const controller = require('../../controller/movieController');

module.exports = () => {
    const router = Router({ mergeParams: true });
    router.route('/create').post(controller.add);

    return router;
}