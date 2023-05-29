const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const whiteList = [
    'http://192.168.56.1:4000',
    'http://localhost:4000',
    'http://192.168.0.10:3000', 
    'http://localhost:3001', 
    'http://localhost:3000',
    'https://808f-179-51-12-162.ngrok.io/'
]

const dbConection = require('./DataBase/conection.js');
const db = dbConection();

let app = express();
app.use(cors({origin: whiteList}));
app.use(bodyParser.json());
app.use(router);


router.get('/', function(req,res){
    //console.log(req.body);
    if (req.query.id) {
        db.query('SELECT * FROM proveedores WHERE id='+req.query.id, (err, result) => {
            res.send(JSON.stringify(result));
        });
    }else{ 
        db.query('SELECT * FROM proveedores', (err, result) => {
        res.send(JSON.stringify(result));
    });}
})

router.post('/', function(req,res){
    db.query(`INSERT INTO proveedores (nombre,direccion,departamento,estado,fecha_alta,costo_servicios) VALUES ('${req.body.nombre}','${req.body.direccion}','${req.body.departamento}',${req.body.estado},'${req.body.fecha_alta}',${req.body.costo_servicios})`, (err, result) => {
        res.send(JSON.stringify(err));
    })
})

router.put('/', function(req,res){
    db.query(`UPDATE proveedores SET nombre = "${req.body.nombre}", direccion = "${req.body.direccion}", departamento = "${req.body.departamento}", estado = ${req.body.estado}, fecha_alta = "${req.body.fecha_alta}", costo_servicios = ${req.body.costo_servicios} WHERE id=${req.body.id}`, (err, result) => {
        res.send(JSON.stringify(err));
    })
})

router.delete('/', function(req,res){
    db.query(`DELETE FROM proveedores WHERE id=${req.query.id}`, (err, result) => {
        res.send(JSON.stringify(err));
    })
})

app.listen(3001);
console.log("Server iniciado");