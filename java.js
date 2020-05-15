


           function popUp(){
           document.querySelector(".popup").style.display= "flex";
           }   

           document.querySelector(".close").addEventListener("click", function(){
           document.querySelector(".popup").style.display = "none"; 
     
           })



          //choose any number and call us
           function callNumber(){
                 document.querySelector(".popup").style.display = "none";
                  document.querySelector(".popup2").style.display= "flex";      

           }
             document.querySelector(".close2").addEventListener("click", function(){
           document.querySelector(".popup2").style.display = "none"; 
     
           })



           function appointment(){
             document.querySelector(".popup3").style.display= "flex";
           } 
        
        
          document.querySelector(".close3").addEventListener("click", function(){
           document.querySelector(".popup3").style.display = "none"; 
     
           })

          function emergency(){
             document.querySelector(".popup4").style.display= "flex";
           } 

           document.querySelector(".close4").addEventListener("click", function(){
           document.querySelector(".popup4").style.display = "none"; 
     
           })

 


          function onlineHelp(){
             document.querySelector(".popup5").style.display= "flex";
           } 
             

          function moreInformation(){
             document.querySelector(".popup6").style.display= "flex";
           } 
             


            document.querySelector(".close5").addEventListener("click", function(){
           document.querySelector(".popup5").style.display = "none"; 
     
           }) 

            document.querySelector(".close6").addEventListener("click", function(){
           document.querySelector(".popup6").style.display = "none"; 
     
           })
        


       function changeColorName(){
        document.getElementById("inputName").style.backgroundColor=' #D4E7ED';

       }
    function changeColorEmail(){
        document.getElementById("inputEmail").style.backgroundColor=' #D4E7ED';

       }
    function changeColorText(){
        document.getElementById("inputtext").style.backgroundColor=' #D4E7ED';

       }  

          function changeColorName(){
        document.getElementById("inputName").style.backgroundColor=' #D4E7ED';

       }
    function changeColorEmail(){
        document.getElementById("inputEmail").style.backgroundColor=' #D4E7ED';

       }
    function changeColorText(){
        document.getElementById("inputtext").style.backgroundColor=' #D4E7ED';

       }

  
function storeData() {  
 console.log(localStorage);
 var namex = document.getElementById("inputName").value;
/* document.getElementById("op1").innerHTML = namex;*/
 var emailx =  document.getElementById("inputEmail").value;
 localStorage.setItem("nameEntered" , namex);
 localStorage.setItem("emailEntered" , emailx);
 var localName = localStorage.getItem("nameEntered");
 var localEmail = localStorage.getItem("emailEntered");
 var parent_Obj_Name =  document.getElementById('name');
 var my_New_Option = document.createElement('option'); 

 var parent_Obj_Email =  document.getElementById('email');
 var new_Option_Email = document.createElement('option');

for ( var i = 0; i < 5; i++) {
    parent_Obj_Name.insertBefore(my_New_Option ,parent_Obj_Name.children[i] ) ; 
    parent_Obj_Email.insertBefore(new_Option_Email ,parent_Obj_Email.children[i] ) ; 
     
  }

  var new_Text = document.createTextNode(localName); 
  my_New_Option.appendChild(new_Text); 

  /*document.getElementById("op2").innerHTML = localName;*/
 
 var new_Email = document.createTextNode(localEmail); 
  new_Option_Email.appendChild(new_Email);  
  }


function clickBtn(){
  alert("thank you for conact with us ");
}
  


/*names();*/

/*function names(){
   var name = document.getElementById("inputName").value;
   localStorage.setItem("names", name);
   var getname = localStorage.getItem(names);
   console.log("getname" + getname);
   document.getElementById("op1").innerHTML = getname;
   var x1 = localStorage.key(0);
   var x2 = localStorage.key(1);
   var x3 = localStorage.key(2);
   var x4 = localStorage.key(3);
  console.log("get item from local storage   " + localStorage.getItem(x2));
  var z = localStorage.getItem(x2) ; 
  var y =  document.getElementById("op1");
 y.innerHTML = z;
}
*/



function feedback(){
  window.open("file:///C:/Users/user/Documents/GitHub/Perfect-smile-dental-website-/feedback.html");
}








