const btns = document.getElementById("button");
const randomcolor = () =>
{
   let val="0123456789ABCDEF";
   let cons="#";
   for(let i=0;i<6;i++) {
       cons=cons+val[Math.floor(Math.random()*16)];
      
   }
   return cons;
};
function callrandomcolor()
{
   document.body.style.backgroundColor = randomcolor();
   
}

btns.addEventListener("click",callrandomcolor);