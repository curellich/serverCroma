import {Sequelize} from 'sequelize';

const db = new Sequelize('CromaTest','root','4948Nino',{
    host:'localhost',
    dialect:'mysql'
})

export default db;