const router = require("express").Router();
const { CreateEventReservation, GetEventReservations, GetSingleEventReservation, UpdateEventReservation, DeleteEventReservation, GetAllEventReservations } = require('../controller/eventreservationclient')
const { CheckUser } = require('../middleware/checkuser')

router.route('/').post(CheckUser, CreateEventReservation).get(CheckUser, GetEventReservations)
router.route('/getall').get(GetAllEventReservations)
router.route('/:id').get(CheckUser, GetSingleEventReservation).patch(CheckUser, UpdateEventReservation).delete(CheckUser, DeleteEventReservation)


module.exports = router