import express from 'express';
import {
    createAppointment, deleteAppointment,
    getAllAppointments,
    getAppointment,
    updateAppointment
} from "../controllers/AppointmentController.js";
const router = express.Router();

/*********************************************************************************************************************/
//Mostrar todos las citas
router.get('/',getAllAppointments);
router.get('/:id',getAppointment);
router.post('/',createAppointment);
router.put('/:id',updateAppointment);
router.delete('/:id',deleteAppointment);

export default router;