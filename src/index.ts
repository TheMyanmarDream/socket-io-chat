import http from 'http';
import { Server } from 'socket.io';
import express from 'express';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('a user connected');
  
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      io.emit('chat message', msg);
    });
  });

const port = 3000;

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});