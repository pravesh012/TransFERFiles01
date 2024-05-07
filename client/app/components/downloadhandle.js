export default function HandleDownload(event){
    // if user clicks the container or data doesnt load
    if(event.target.innerText == ''){
        return;
    }
    else{
        console.log(event.target.innerText)
    }
}
export function openFile(){
    console.log(myFileChosen.current)
    myFileChosen.current.click();
}