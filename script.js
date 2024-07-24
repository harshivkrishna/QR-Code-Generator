
let imgBox=document.getElementById("imgBox");
let qrImage=document.getElementById("qrImage")
let qrText=document.getElementById("qrText");
let mytext=document.getElementById("mytext")
let errorMessage=document.getElementById("errorMessage")

function generateQR(){
    if(!qrText.value.includes('.')){
        errorMessage.innerHTML="Enter a valid URL"
        errorMessage.classList.add("errorChecker")
        qrText.classList.add('error');
        qrText.value=''
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000)
    }
    else if(qrText.value.length>0){
        qrImage.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value; 
        imgBox.classList.add("show-img")
        mytext.innerHTML=qrText.value
        qrText.value=''
    }
    
    else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000)
    }
    
}
