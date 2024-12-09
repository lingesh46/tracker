function myfunction(){
    let list = document.getElementById("listitem");
               list.innerHTML ="";
               let expense = JSON.parse(localStorage.getItem("expenses"))||[];
               expense.forEach(( expense,index)=>{

                    let li = document.createElement("li");
               li.innerHTML =`${expense.expense},${expense.amount},${expense.title}
               <button onclick="remove(${index})">Remove</button>`;   
               list.appendChild(li);
               });
 }   
 function myFunction2(){
    localStorage.setItem("expenses",JSON.stringify(expenses));

 }
 function remove(){
    
 }