//Importamos el modelo
import AppointmentModel from "../model/AppointmentModel.js";

/*********************************************************************************************************************/
// METODOS DEL CRUD

//Mostrar todas las citas
export const getAllAppointments = async (req, res) => {
    try {
        const appointments = await AppointmentModel.findAll();
        res.json(appointments);
    } catch (e) {
        res.json({message: e.message})
    }
}

//Mostrar una cita especifica
export const getAppointment = async (req, res) => {
    try {
        const appointment = await AppointmentModel.findAll({
            where: {
                id_appointment: req.params.id
            }
        });
        res.json(appointment[0]);
    } catch (e) {
        res.json({message: e.message})
    }
}
//Insertar una cita
export const createAppointment = async (req, res) => {
    try {
        await AppointmentModel.create(req.body);
        res.json({"mesage": "La cita fue creada correctamente"})
    } catch (e) {
        res.json({message: e.message})
    }
}

//Actualizar una cita especifica
export const updateAppointment = async (req, res) => {
    try {
        await AppointmentModel.update(req.body, {
            where: {
                id_appointment: req.params.id
            }
        })
        res.json({"mesage": "La cita actulizada correctamente"})
    } catch (e) {
        res.json({message: e.message})
    }
}

//Elminar una cita especifica
export const deleteAppointment = async (req, res) => {
    try {
        await AppointmentModel.destroy({
            where: {
                id_appointment: req.params.id
            }
        })
        res.json({"mesage": "La cita elimnada correctamente"})
    } catch (e) {
        res.json({message: e.message})
    }
}