selectElement = document.querySelector('#GRADE');
var oInputs = new Array();
oInputs = document.getElementsByTagName( 'input' ) ;

var sum = 0;
var res = 0;
var n   = 0;
var nOfHours=0;
function GPA(){
    for ( i = 0; i < oInputs.length; i++ )
    { 
        if ( oInputs[i].type == 'number' )
        {
            n=oInputs[i].value;
        }
    }
  output = selectElement.options[selectElement.selectedIndex].value;
  nOfHours=nOfHours+n;
  res=(res+(n*output));
} 
function ADD(){
  var course = document.getElementById('CourseName').value;
  var degree =document.getElementById('CourseHour').value;
  output = selectElement.options[selectElement.selectedIndex].value;
  var table = document.getElementsByTagName('table')[0];
  var newRow = table.insertRow(table.rows.length);
  var cell0 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  cell0.innerHTML=course;
  cell2.innerHTML=degree;
  cell3.innerHTML=output;
  GPA();
}
function Calc(){
  var x = document.getElementById('prosses');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

  while (nOfHours != 0) {
    sum = sum + nOfHours % 10;
    nOfHours = parseInt(nOfHours / 10);
  }
  res=res/sum;
  document.querySelector('.output').textContent = res;
}

function changeCal(){
  document.getElementById('textaria').style.backgroundColor='#C6C6C6';
  document.getElementById('textaria').style.color='#000';
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






/*Gallery*/



function SearchFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("img")[0];
    txtValue = a.textContent || a.alt;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


function change(){
  var ele = document.getElementsByName('1');
  for(i=0 ;i<ele.length;i++){
    if(ele[i].checked){
      document.getElementById("rate").innerHTML="thank you for your rating " +ele[i].value;
    }
  }
  
}


/*
ــــــــــــــــ
light box gallary 
ـــــــــــــ
*/

function openModal(){
    document.getElementById('myModal2').style.display="block";
}


function closeModal() {
  document.getElementById("myModal2").style.display = "none";
}



    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {

      var slides =document.getElementsByClassName('mySlides');
      var i;
      if (n > slides.length) {
        slideIndex = 1
      }
      if (n < 1) {
        slideIndex = slides.length
      }

      for(i=0;i<slides.length;i++){  
          slides[i].style.display = "none";
      }
   
      slides[slideIndex-1].style.display="block"
    }
