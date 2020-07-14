function openNav() {
    //document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    
  }
  
  function closeNav() {
    //document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    
    
  }
 function openHamburger(x) {
    x.classList.toggle("change");
    
  }
 

function myFnc(x) {
    openHamburger(x);
    const element = document.getElementById("mySidenav");
    const addMargin = document.getElementById("main");
    element.classList.toggle("sidenav");
    element.classList.toggle("open");
    addMargin.classList.toggle("addNavbar")
  } 

  var formValue= ()=>{
    
    let name,email,purpose,text;
    name=document.getElementById('fname').value;
    email=document.getElementById('email').value;
    purpose=document.getElementById('purpose').value;
    text=document.getElementById('text-area').value;

    alert(`Thank's ${name},your request has been submit, your mail ${email} and you message:"${text}"` )
     }



  