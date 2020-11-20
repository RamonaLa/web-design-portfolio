document.querySelector("#logare").onclick = function (event) {
 var formElement = document.querySelector("#formularlogare"); 
  var formData = new FormData(formElement);
  var xhtp = new XMLHttpRequest();
  xhtp.open("POST", "autentif.json");  // va deveni autentificare.php
 
   xhtp.onload = function () {
   var raspunsobiect = JSON.parse(this.responseText);
   var blocraspuns = document.querySelector("#afiseaza");
   
    if(raspunsobiect.autentificat == "da") {
       var continutbloc = '<p class="text-center">Sunteți logat cu numele:  <strong>{nume}</strong><br>Acțiuni posibile în baza de date</p><div class="row justify-content-md-center"><span class="actiuni"><a href="adaugare.html">adaugă articole</a><a href="sterge.html">șterge articole</a><a href="logout.html">delogare</a></span></div>';  
    }
     else {
       var continutbloc = '<p class="text-center"><strong>{nume}</strong><br> NU aveți acces la baza de date</p>';
    }
    continutbloc = continutbloc.replace('{nume}', raspunsobiect.nume);
    document.querySelector("#blocform").style.display='none';
    //afisez raspunsul
    blocraspuns.innerHTML=continutbloc;
     console.log("testez: " + continutbloc);
  };

 
  xhtp.onerror = function () {
    alert('Hopa! Ceva n-a mers!');
  };

  xhtp.send(formData);
  ;
};