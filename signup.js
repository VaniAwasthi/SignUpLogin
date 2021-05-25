function validateInfo(){  
    var email=document.getElementById('email').value;
    var checkFirstEmail = "vani@xyz.com";
    var checkSecondEmail="vani@gmail.com"
    var password=document.getElementById('password').value;  
    
      
    if (email === checkFirstEmail || email===checkSecondEmail && password){
        //redirect to some page  
        alert("success");  
      return false;  
    }else{  
        alert("Either email or password is invalid");  
        return false; 
    }
    } 