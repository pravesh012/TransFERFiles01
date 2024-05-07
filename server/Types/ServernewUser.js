

function SendKey( deviceSelected, devices)
{
    const trimIncomingValue = deviceSelected.trim();
        for(const [key, value] of Object.entries(devices)){                
            if(value.trim() == trimIncomingValue){
                selectedkey = key;
                break;
            }
        };
            if(!selectedkey){
                // no selected key
                console.log('no KEY')
                return Error('no Keys!')
            };
        return selectedkey;
};
module.exports = SendKey;