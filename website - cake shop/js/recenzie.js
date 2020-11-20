document.querySelector("#adrecenzie").onclick = function (event) {  
   var formElement = document.querySelector(".contact-form"); 
   var formData = new FormData(formElement);

   var xhtp = new XMLHttpRequest();
   xhtp.open("POST", "recenzie.php");
   
   xhtp.onload = function () {

   var raspunsobiect = JSON.parse(this.responseText);
     // console.log("raspunsobiect: " + raspunsobiect);
   var blocraspuns = document.querySelector("#rezrecenzie");

   var continutbloc = '<p class="text-center citeste"><strong>{nume}  {prenume}</strong></p><p> Mulțumim pentru recenzia scrisă de dvs. Opiniile trimise de dvs. sunt importante pentru noi, în menținerea standardelor de calitate.</p></br><div class="row justify-content-md-center actiuni"> <a href="citeste.html">citeste recenziile</a></div>';
          
   continutbloc = continutbloc.replace('{nume}', raspunsobiect.nume);
   continutbloc = continutbloc.replace('{prenume}', raspunsobiect.prenume);

   
   document.querySelector("#blocform").style.display='none';
  
    blocraspuns.innerHTML = continutbloc;
   };


   // S-a produs o eroare
   xhtp.onerror = function () {
      alert('Hopa! Ceva n-a mers!');
   };

   xhtp.send(formData);
};