 function main(){
	 var c =document.getElementById('dropTable');
	   
	  if(c.style.display === "none")
	  {
		  c.style.display="block";
	  }
	  else{
		  c.style.display="none";
	  }
 }
 function nothing()
  {
	  var x=document.getElementById('drop');
	  alert("Welcome to the BBC news!")
	  x.onclick=main;
  }
    
	 window.addEventListener("load",nothing,false);