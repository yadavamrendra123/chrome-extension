let myLeads=[]
const inputEl=document.getElementById("input-el")
ulEl=document.getElementById("ul-el")
const delBtn=document.getElementById("delete-btn")


const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

delBtn.addEventListener("dblclick",function(){
 localStorage.clear()
 myLeads=[]
 renderLeads()
})



document.getElementById("input-btn").addEventListener("click",function(){

    myLeads.push(inputEl.value)
    if(inputEl.value!=""){
      inputEl.value=""

    }
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads();

   
 })
 

 function renderLeads(){
   listitems=""
 for (let index = 0; index < myLeads.length; index++) {
   //listitems += "<li><a target='_blank' href='" + myLeads[index] + "'>" + myLeads[index] + "</a></li>"
   listitems += `
       <li>
           <a target='_blank' href='${myLeads[index]}'>
               ${myLeads[index]}
           </a>
       </li>
   `
 }

 ulEl.innerHTML=listitems

 } 