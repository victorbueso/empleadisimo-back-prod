const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const http = require('http');
var usuariosRouter = require('./routes/usuarios-router');
var cvRouter = require('./routes/cv-router');
var publicacionesRouter = require('./routes/publicaciones-router');
var transaccionesRouter = require('./routes/transacciones-router');
var contratosRouter = require('./routes/contratos-router');
var database = require('./modules/database');

var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server, {
    cors: {
        origins: ['http://localhost:4200']
    }
});

//settings
app.set('port', process.env.PORT || 3000);
/*cv
//establecer directorio público
app.use(express.static('public'));

//manejo de rutas para producción
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

server.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on ${process.env.PORT || 3000} port!`);
});
*/
//Middleware
app.set('socketio', io);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/usuarios', usuariosRouter);
app.use('/cv', cvRouter);
app.use('/publicaciones', publicacionesRouter);
app.use('/transacciones', transaccionesRouter);
app.use('/contratos', contratosRouter);
app.use('/uploads', express.static(path.resolve('uploads')));
app.use('/uploads', express.static(path.resolve('uploads')))
module.exports = {
    io
}
require('./sockets/sockets');

app.get('/', (req, res) => {
    res.send('Hello World!');
    res.end();
});