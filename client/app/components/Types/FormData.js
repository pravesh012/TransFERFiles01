export default class FormData{
    constructor(socket)
    
    {   
        this.socket = socket
        this.deviceSelected;
        this.files;
        this.sequenceCounter = 0;
        
    }
    HandleClicked(event){
       
        this.deviceSelected = event.target.parentNode.innerText;
        this.files = Object.values(event.target.files);
        
        if(!this.files){
            // no files
            console.log('no files!')
            return 'no files!'
        }
        
        this.files.forEach(file => {
            this.SendServer(file);
        });



    };
    SendServer(file){
        const Kbyte  = 100000;
        let offset = 0;

        let interval = setInterval(()=>{
           
            if(offset < file.size)
            {   
            
                let slicedChunk = file.slice(offset, offset + Kbyte);
                
                this.socket.emit('sendingData', { deviceSelected: this.deviceSelected, data: slicedChunk, type:file.name , sequenceCounter:this.sequenceCounter, isFinished: false});
                this.sequenceCounter++
                offset +=Kbyte;
            }
            else{
              
                clearInterval(interval);
               
                this.socket.emit('sendingData', { deviceSelected: this.deviceSelected, data: 'none', type:file.name , sequenceCounter:(this.sequenceCounter - 1), isFinished: true});
                offset = 0;
            }
           
        }, 200);
       

        
    };



    
};
// download it 1,2,3. not at same time.
export function SequenceChecker(data, sequenceCounter, type, isFinished, finalFileResult, sequence ,callback)
{   

  
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

