'use client'
import UserAgent from "user-agents";
import { io } from "socket.io-client";
import React from "react";
import { useEffect, useState, useMemo, useRef } from "react";
import './deviceCSS.css'
import FormData, {SequenceChecker} from './Types/FormData.js'




export default function Device(){
let clientSideSequenceCounter = useRef(0);
const finalFileResult = useRef([]);
const renderCounter = useRef(0);
const myFileChosen = useRef(null)
const socket = useRef(io('http://192.168.2.20:3001/'))
const [yourPlatform, setYourPlatform ] = useState(navigator.platform || "unknown");
const [platform, setPlatform] = useState([
    
]);

// function that sends the data//

  function handleTheSelectedFile(event){
    let instance = new FormData(socket.current);
        instance.HandleClicked(event);


  };
 
useEffect(() => {
    // dev mode renders twice on server prevent do this//
    
    if(renderCounter.current == 0){
        // send your device to the server//
        socket.current.on('connect', ()=>{

            socket.current.emit('newDevice', yourPlatform);
            
          
          
            
                socket.current.on('newUser', (data) =>{

                    function returnOtherDevice(){
                        const OtherDevice = {...data};
                        // delete your own device//
                        delete OtherDevice[socket.current.id];
                        
                        let arrayofUsers = Object.values(OtherDevice);
                        
                             function setThemP(){
                                let initalarray = []; 
                             
                                 arrayofUsers.forEach((elements, index )=>{ 
                                    initalarray.push(
                                    <div key={index}>
                                    <input onChange = {(handleTheSelectedFile)}type="file" ref={myFileChosen} style={{display:'none'}} multiple></input>
                                    <p onClick={()=>{myFileChosen.current.click();}}> {elements}
                                    </p>
                                    </div>)});
                                 
                                 setPlatform(initalarray);
                               };
                               setThemP();
                       
                    };
                    returnOtherDevice();
                    
            });
            

            // show the data to user//
            function Setup(){
                let sequence = {previousSequence: undefined};

                socket.current.on('recievingData', ({deviceSelected, data, type, sequenceCounter, isFinished})=>{

                    SequenceChecker(data, sequenceCounter, type, isFinished, finalFileResult, sequence ,DownloadFile);
    
                    function DownloadFile(file, typeFile)
                    {
                      if(!file && !typeFile)
                        {
                            console.log('no FILE!')

                        };
                      

                        let blob = new Blob(file.current);
                        let url = URL.createObjectURL(blob);
                            let body = document.getElementsByTagName('body')[0];
                            let anchor = document.createElement('a');
                                anchor.download = typeFile;
                                anchor.href = url;
                                anchor.style.display = 'none';
                                body.appendChild(anchor);
                                anchor.click();
        
                                URL.revokeObjectURL(url)
                                body.removeChild(anchor);
                                sequence.previousSequence = 0;
                            
                       

    
                    }
                   
                })
            }
            
            Setup()
            
            
        })
        renderCounter.current = 1;
       
      
    }
    else{
         renderCounter.current = 0;
    }
  
}, []);

    
    
    return(
        <>
        
        <h3 className="devices">Other devices</h3>
        <div className="devicesContainer">
            {platform}
        </div>
        </>

    )
};




