var io = require('socket.io')();

io.on('connection', function (socket) {

  socket.on('join', function (data){

    if(socket.room){
      socket.leave(socket.room)
    }
    socket.join(data.showName)
    socket.room = data.showName

  })

  socket.on('msg', function (data){
    console.log('in Back', data);
    io.sockets.in(socket.room).emit('message', data);
  })

});

module.exports = io;
