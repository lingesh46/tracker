
function myFunction(){
     const Email = document.getElementById("Email").value;
     const password= document.getElementById("password").value;
 

 
     let value = validation(Email,password);
     if(value==true ){
     
         let store =  localStorage.getItem("emailname");
         let storepass =  localStorage.getItem("password");
         

         if(store==Email){

          if(storepass ==  password){
           alert("valid password");
           window.location.assign('index2.html');
 
          }else{
           alert("invalid password")
          }



         }else{
          alert("invalid Email")

         }
            
         
     
     }

}

function validation(Email,password){

     console.log(Email, password,);
     const error1 = document.getElementById("error1");
     const error2 = document.getElementById("error2");

     if(Email==""){
          error1.textContent="please Enter your Email";
          return false;


     }
     else if(password==""){
          error1.textContent =" ";
          error2.textContent= "please Enter your Password";
          // error1.textContent=" ";

          return false;


     }
     else if(password.length>=8){
          error2.textContent = "name must be 8 character"
          return false;
     }
     else{
          error1.textContent = "";
          error2.textContent = "";
          return true;
     }
}

save();
  function save(){
     localStorage.setItem("emailname","@glingesh.com");
     localStorage.setItem("password","liyaa");

  }


// form 2 start
  function myfunction3(){   
               let list = document.getElementById("listitem");
               list.innerHTML ="";
               let expense = JSON.parse(localStorage.getItem("expenses"))||[];
                          expense.forEach(( expense,index)=>{

                    let li = document.createElement("li");
               li.innerHTML =`${expense.selectItem}-${expense.amount}-${expense.title}
               <button onclick="remove(${index})">Remove</button>`;   
               list.appendChild(li);
               });
                    
  }
   

async function myFunction2(){
     let selectItem = document.getElementById("expense-category").value;
     let amount = document.getElementById("expense-amount").value;
     let title = document.getElementById("expense-title").value;  
     let validate = await validation1(selectItem,amount,title);
     console.log(validate);
     
      
   
     
      if(validate){
          let expense = JSON.parse(localStorage.getItem("expenses"))||[];
          
         console.log({selectItem,amount,title});
           expense.push({selectItem,amount,title});
          document.getElementById("expense-category").value="select Item";
          document.getElementById("expense-amount").value="";
           document.getElementById("expense-title").value="";

           localStorage.setItem("expenses",JSON.stringify(expense));

          

           
           myfunction3();
          
      }

     
}

function remove(index){
     let expense = JSON.parse(localStorage.getItem("expenses"))||[];
     expense.splice(index,1);
     localStorage.setItem("expenses",JSON.stringify(expense));
     myfunction3();

}
   window.onload= myfunction3;
function validation1(selectItem,amount,title){


     // console.log(amount,title,selectItem);

     let para1 = document.getElementById("para1");
     let para2 = document.getElementById("para2");
     let para3 = document.getElementById("para3");

 
     if(selectItem ==""  ||  selectItem =="select Item"){
         
          
           para1.textContent = "Please select your Item";
          return false;
     }

     else if(amount==""||isNaN(amount)){
       para1.textContent="";
       para2.textContent ="Please Enter your valid price";
       return false;
     }
     else if(amount<= 0){
      para2.textContent = "The price must be greater than zero";
      return false;   
     }
   else if(title =="")
     {
          
      para2.textContent ="";
      para3.textContent ="Please Enter Your value"
     return false;

   }
   else if(title.length<3||title.length>50){
     para3.textContent = "the expense title must be betwwen 3 and 50 character"
     return false;

   }else{
     para1.textContent ="";
     para2.textContent ="";
     para3.textContent ="";
     return true;

   }

}
