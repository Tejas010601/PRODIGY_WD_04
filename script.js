function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
    
  }
  
  window.addEventListener("scroll", reveal); 
  
document.addEventListener('scroll',()=>{
  const header=document.querySelector('header');
  if (window.scrollY>0){
    header.classList.add('scrolled');
  }
  else{
    header.classList.remove('scrolled');
  }
});