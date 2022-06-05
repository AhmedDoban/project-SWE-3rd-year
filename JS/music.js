//audio play
var audio = new Audio('/song/Sia-Courage-To-Change.mp3');
window.onload = function playAduio(){
  audio.play()
}

 new Vue({
  el:'#App',
    data:{
        show:true,
    },
    methods:{
      playAduio(){     
        audio.play();  
      },
      pauseVid(){ 
          audio.pause(); 
      },
    }
 })
 // slider 

 let arrow = document.querySelectorAll(".arrow");
 for (var i = 0; i < arrow.length; i++) {
   arrow[i].addEventListener("click", (e)=>{
  let arrowParent = e.target.parentElement.parentElement;
  arrowParent.classList.toggle("showMenu");
   });
 }
 let sidebar = document.querySelector(".sidebar");
 let sidebarBtn = document.querySelector(".fa-bars");
 console.log(sidebarBtn);
 sidebarBtn.addEventListener("click", ()=>{
   sidebar.classList.toggle("close");
 });


 
