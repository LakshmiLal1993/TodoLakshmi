function login(){
     
    alert("login success");
    window.location ="main page.html";
}


function validate(callback)
{
    let username= document.getElementById("fname").value;
    let password= document.getElementById("pwd").value;

    if(username== "admin" && password == "12345"){
           
        callback(login());
        
             
    }
     else if(username=='' && password == "12345")
     {
         alert("Incorrect Username");
         
     }   
     else if(username=="admin" && password == "")
     {
        alert("Incorrect Password");
    }
    else if(username == ""&& password == ""){

        alert("Please enter username & password");
    
    }
    else
    {
        alert("Entered invalid credentials....Please try again");
    }
}

validate(login);