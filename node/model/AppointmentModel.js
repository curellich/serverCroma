//Importamos la conexion a la BD
import db from '../database/db.js'
import {DataTypes} from "sequelize";

/*********************************************************************************************************************/
//CONFIGURAMOS EL MODELO
const AppointmentModel = db.define('Appointments', {
    id_appointment: {
        type: DataTypes.INTEGER,
        notNull: false,
        primaryKey: true
    },
    appointmentDate: {
        type: DataTypes.DATE,
        notNull: false,
    },
    id_professional: {
        type: DataTypes.INTEGER,
        notNull: false,
    },
    id_patient: {
        type: DataTypes.INTEGER,
        notNull: false,

    }
}, {timestamps: false})

export default AppointmentModel;