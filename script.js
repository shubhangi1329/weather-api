
const addbtn=document.querySelector("#addbtn");




addbtn.addEventListener('click',(event)=>{
 event.preventDefault();
 console.log("clicked");
 const fname=document.querySelector(".fname").value;
 const fprof=document.querySelector(".fprof").value;
 const fage=document.querySelector(".fage").value;

 renderEmp(fname,fprof,fage)

});
var count=1;
function renderEmp(fname,fprof,fage){
 
    if(fname=="" || fprof=="" ||fage==""){
        // console.log("inside if")
        var PTag=document.querySelector('#status');
        PTag.innerHTML=`<p id="color1">
                        Error: Please make sure all the fields are filled before adding in an Employee !
                        </p>`
    }
    else{
        var PTag2=document.querySelector('#status');
        const msg=document.querySelector("#msg");
        const addemp=document.querySelector("#addemp")
        addemp.innerHTML+=`<li class="listapp" id="${count}">
                           <p>${count}.</p>
                            <p>Name:${fname}</p>
                            <p> Profession:${fprof}</p>
                            <p>Age:${fage}</p>
                            <button id="${count}"  class="deluser">Delete User</button>
                            </li>
                            `

     PTag2.innerHTML=`<p id="color2">
                      Success:Employee Added !
                      </p> `

msg.style.display="none";
count++;
   document.querySelector(".fname").value="";
    document.querySelector(".fprof").value="";
    document.querySelector(".fage").value="";

    }

   
}
document.querySelectorAll(".deluser").forEach((button)=>{
   button.addEventListener('click', empDel)
   console.log(button);
})
function empDel(){
    
}
// var delbtn=document.querySelectorAll(".deluser");
// console.log(delbtn);

// function remove(e){

//     e.parentNode.removeChild(e);
// }

