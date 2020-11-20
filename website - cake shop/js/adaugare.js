document.querySelector("#adauga").onclick = function (event) {
       
        var formElement = document.querySelector("#colecteaza");
        var formData = new FormData(formElement);
        var xhtp = new XMLHttpRequest();
        xhtp.open("POST", "adaugare.json");  //  Va deveni adaugare.php

        // S-au primit date de la scriptul de pe server
        xhtp.onload = function () {
            var raspunsobiect = JSON.parse(this.responseText);
    var blocraspuns = document.querySelector("#afiseaza");
    if (raspunsobiect.mesaj === "da") {
      var continutbloc = '<p class="text-center">Produsul <strong>{nume} </strong>s-a adaugat în baza de date.<br><br>Puteți adăuga încă un <a href="adaugare.html">produs</a> sau vă puteți <a href="#">deconecta</a></p>';
    } else {
      var continutbloc = '<p class="text-center">Produsul <strong>{nume} </strong> NU s-a adăugat în baza de date.<br><br>Puteți adăuga încă un <a href="adaugare.html">produs</a> sau vă puteți <a href="#">deconecta</a></p>';
  }
    
    continutbloc = continutbloc.replace('{nume}', raspunsobiect.nume);
    document.querySelector("#blocform").style.display='none';
    blocraspuns.innerHTML = continutbloc;
        };

        // S-a produs o eroare
        xhtp.onerror = function () {
            alert('Hopa! Ceva n-a mers!');
        };

        xhtp.send(formData);
    };