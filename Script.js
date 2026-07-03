let count=0;
document.addEventListener("DOMContentLoaded",() => {
    const myBtn=document.getElementById("btnA");
    const counter=document.getElementById ("btnB");
   
    myBtn.addEventListener("click",() =>{
    count++;
    
    counter.innerText="total clicks:" + count;
});

});
