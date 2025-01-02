let All =document.getElementById("All")
let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")


All.style.width="250px"

All.style.height="250px"
All.style.border="3px solid orange"
All.style.borderRadius="50%"
All.style.margin="20px 50px"

btn1.style.background="red"
btn1.style.padding="5px 15px"
btn1.style.borderRadius='4px'
btn1.style.color="white"

btn2.style.background="black"
btn2.style.padding="5px 15px"
btn2.style.borderRadius='4px'
btn2.style.color="white"

btn1.addEventListener("click",()=>{
    All.style.background="red"
    
})



btn2.addEventListener("click",()=>{
    All.style.background='white'
})

