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
  


  
   
//   var num=0;
// function myfnc(x){
//    openHamburger(x);



//     if(num==0){
//         openNav();
       
//         num=1;
//     }else if(num=1){
//         openHamburger(x);
//          closeNav();
        
//          num=0;
//     }
// }

function myfnc(x) {
    openHamburger(x);
    const element = document.getElementById("mySidenav");
    const addMargin = document.getElementById("main");
    element.classList.toggle("sidenav");
    element.classList.toggle("open");
    addMargin.classList.toggle("addNavbar")

    
   
   
    
  } 


  