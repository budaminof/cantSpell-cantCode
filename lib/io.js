var io = require('socket.io')();

io.on('connection', function (socket) {

socket.on('msg', function (data){
  io.sockets.in(socket.room).emit('message', data);
})

});

module.exports = io;
