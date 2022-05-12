// function btnClose() {
//     document.getElementsByClassName("btnClose").style.display = "block";
//   }
  
//   function btnOpen() {
//     document.getElementsByClassName("btnOpen").style.display = "none";
//   }

function menuTogglehandler (){
    const navLinks = document.getElementById('navLinks')

    // navLinks.classList.toggle('active')

    navLinks.style.display = (navLinks.style.display == 'none') ? 'flex' : 'none'
}