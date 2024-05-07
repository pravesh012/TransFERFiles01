const SendKey = require('./Types/ServernewUser.js'); 
const express = require('express');
const cors = require('cors');
const socket = require('socket.io');
const http = require('http');
const app = express();
const Port = 3001;


const devices = {};
app.use(cors({
    origin: '*',
}));

const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "http://192.168.2.20:3000",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    // Listen for 'newDevice' event from the client
    socket.on('newDevice', (deviceData) => {
        devices[socket.id] = deviceData;
        console.log('connected')
        io.emit('newUser', devices);
    });

    function DataRecievedNSubmit()
    {
        let previousSequence = undefined
        socket.on('sendingData', ({deviceSelected, data, type, sequenceCounter, isFinished} )=>{
           
            let selectedkey = SendKey(deviceSelected, devices);
            
            if(previousSequence == undefined && sequenceCounter == 0)
            {
               
                previousSequence = 0;
                io.to(selectedkey).emit('recievingData', {deviceSelected, data, type, sequenceCounter, isFinished});
            };
            if( previousSequence == (sequenceCounter - 1 )&& isFinished == false)
            {
               
                io.to(selectedkey).emit('recievingData', {deviceSelected, data, type, sequenceCounter, isFinished});
                previousSequence = sequenceCounter;
            }
            else{
                // if data is finished
                
                io.to(selectedkey).emit('recievingData', {deviceSelected, data, type, sequenceCounter, isFinished});
                previousSequence 

            }

        })
    }
    
        
        DataRecievedNSubmit();
     
   
       
        socket.on('disconnect', (reason) => {
            delete devices[socket.id];
            io.emit('newUser', devices)
            console.log(reason)
            console.log('User disconnected');
        });

    
});


server.listen(Port, () => {
    console.log(`Server started at port ${Port}`);
});
