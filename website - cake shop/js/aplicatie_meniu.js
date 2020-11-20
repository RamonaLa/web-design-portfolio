var obiecte = [
{id_produs: 1, id_categ: 1, imagine: "img/meniu/trufe.jpg", denumire: "Trufe cu caramel sarat si alune", descriere: "Contururile rotunde ale acestei mici gustari sunt un teatru de contraste caramel sarat- ciocolata cu lapte dulce, invelis de alune crocant.", servire: "Produsul este disponibil și în varianta de livrare TO GO.", pret: "24 lei"},
{id_produs: 2, id_categ: 1, imagine: "img/meniu/tarta.jpg",  denumire: "Tarta cu vanilie si fructe",  descriere: "Regasim bogatia de fructe a fiecarui anotimp in aceste mici cosulete delicioase.", servire: "Produsul se poate comanda si la casa.", pret: "23 lei"},
{id_produs: 3, id_categ: 1, imagine: "img/meniu/biscuit.jpg", denumire: "Biscuiti cu lamaie", descriere: "O textura crocanta si gust proaspat de lamaie.", servire: "Produsul este disponibil și în varianta de livrare TO GO.", pret: "18 lei"},

];

var i = 0;

var cfront = '<div class="single-menu-product mb-30"><div class="menu-product-img"> <img src="{poza}" /> </div><div class="menu-product-content"><div class="menu-title-price"><div class="menu-title"><h4>{denumire}</h4></div><div class="menu-price"><span>Pret: {pret}</span></div></div> <p><strong>Descriere:</strong> {descriere}</p></div></divcccc';

var cback = '<div class="single-menu-product mb-30"><div class="menu-product-content"><div class="menu-title-price"><div class="menu-title"><h4>{denumire}</h4></div></div>';
cback += '<p><strong>Servire:</strong> {servire}</p></div>';


var sirh6 = ' {nrprodus} / 3';

afisez(); 

function afisez() {
    //  preiau obiectul avand class="flip-card-front"
    var front = document.querySelector(".flip-card-front");

    // Inlocuiesc in card-front 
    var frontH = cfront.replace("{denumire}", obiecte[i].denumire)
                       .replace("{descriere}", obiecte[i].descriere)
                       .replace("{pret}", obiecte[i].pret)
                       .replace("{poza}", obiecte[i].imagine);
    front.innerHTML = frontH;

    //  preiau obiectul avand class="flip-card-back"
    var back = document.querySelector(".flip-card-back");

    // Inlocuiesc in card-back 
    var backH = cback.replace("{denumire}", obiecte[i].denumire)
                       .replace("{servire}", obiecte[i].servire);
                     
    back.innerHTML = backH;

    //  preiau elementul 

    var elh6 = document.querySelector("h6");
    // Inlocuiesc in sirh6 {nrprodus}
    var elh6a = sirh6.replace("{nrprodus}", i+1);
    elh6.innerHTML = elh6a;
}

//  Actiuni declansate de butonul cu id=urmatorul
var next = document.querySelector("#urmatorul");
next.onclick = function(){
  obiecte[i].id_categ= 1;
  i++;
  if(i < obiecte.length) {
     
      afisez();
    } else {
      i--;
    };
};