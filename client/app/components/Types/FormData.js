export default class FormData{
    constructor(socket)
    
    {   
        this.SYSFILECOUNT;
        this.socket = socket
        this.deviceSelected;
        this.files;
        this.sequenceCounter = 0;
        
    }
    HandleClicked(event){
        const Kbyte = 100000;
        let offset = {set: 0}; 
        this.deviceSelected = event.target.parentNode.innerText;
        this.files = Object.values(event.target.files);
        this.SYSFILECOUNT ={length: 0};
        
        if(!this.files){
            // no files
            console.log('no files!')
            return 'no files!'
        }
        
       
        this.SendServer(this.files, this.SYSFILECOUNT, offset);



    };
    SendServer(files, SYSFILECOUNT, offset ){
        const Kbyte  = 100000;
        console.log('send executed')
        console.log('file is:', files[0]);

        if(files.length > SYSFILECOUNT.length )
            {
                console.log('file is from inner:', files[SYSFILECOUNT.length]);
                console.log(SYSFILECOUNT.length)
                let interval = setInterval(()=>{
                    let file = files[SYSFILECOUNT.length];
                    if(offset.set < file.size)
                        {
                            let slicedChunk = file.slice(offset.set, offset.set + Kbyte); 
                            this.socket.emit('sendingData', { deviceSelected: this.deviceSelected, data: slicedChunk, type:file.name , sequenceCounter:this.sequenceCounter, isFinished: false});
                            this.sequenceCounter++
                            offset.set +=Kbyte;
                            console.log(this.sequenceCounter);
                            console.log(SYSFILECOUNT);
                            console.log('data', slicedChunk)


                        }
                        else{
                            this.socket.emit('sendingData', { deviceSelected: this.deviceSelected, data: 'none', type:file.name , sequenceCounter:0, isFinished: true});
                            offset.set = 0;
                            SYSFILECOUNT.length++
                            this.sequenceCounter = 0
                            clearInterval(interval);
                            

                            this.SendServer(files, SYSFILECOUNT, offset);
                        }

                },0)
                
            }
            else{
                return;
            }

       

            
            

            
           
      

        
    };



    
};
// download it 1,2,3. not at same time.
export function SequenceChecker(data, sequenceCounter, type, isFinished, finalFileResult, sequence ,callback)
{   
        console.log(sequenceCounter)
  
        if( sequence.previousSequence == undefined && sequenceCounter == 0)
        {
            console.log(sequenceCounter);
            console.log(data);
            console.log(finalFileResult)
            finalFileResult.current.push(new Uint8Array(data));
            sequence.previousSequence = 0;


           
        };
        if( sequence.previousSequence == (sequenceCounter - 1) && isFinished == false )
        {
            
            console.log(sequenceCounter)

            finalFileResult.current.push(new Uint8Array(data));
            sequence.previousSequence = sequenceCounter;
           
        } 
        else{
            // when finished or duplicates//
            if( data == 'none' && isFinished )
            {
                console.log('prevSeq', sequence.previousSequence);
                console.log(sequenceCounter)

                callback(finalFileResult, type);
                finalFileResult.current = [];
                sequence.previousSequence = undefined;
                console.log(finalFileResult);
                
            }
            // this is duplicates, ignore it
           
        }


};

