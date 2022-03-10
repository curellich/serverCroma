import express from "express";
import cors from 'cors';
//Importamos la conexion a la BD
import db from './database/db.js'
//Importamos nuestro enrutador
import AppointmentRoutes from './routes/routes.js'

const app = express();


app.use(cors());
app.use(express.json());
app.use('/Appointments', AppointmentRoutes);

try {
    db.authenticate();
    console.log("Conexion exitosa a la base de datos");
} catch (e) {
    console.log("El error en la conexion a la base de datos es: " + e);
}

app.get('/', (req, res) => {
    res.send("HOLA MUNDO");
})

app.listen(8000, () => {
    console.log("SERVER UP ON PORT 8000")
})
