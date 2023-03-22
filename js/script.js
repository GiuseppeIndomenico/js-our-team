// NAME     SURNAME    ROLE                      IMAGE
// Wayne    Barnett	Founder & CEO	          wayne-barnett-founder-ceo.jpg
// Angela   Caroll	    Chief Editor	          angela-caroll-chief-editor.jpg
// Walter   Gordon	    Office Manager	          walter-gordon-office-manager.jpg
// Angela   Lopez	    Social Media Manager	  angela-lopez-social-media-manager.jpg
// Scott    Estrada	Developer	              scott-estrada-developer.jpg
// Barbara  Ramos	    Graphic Designer	      barbara-ramos-graphic-designer.jpg

/* <div class="card p-2">
<div class="card-header cont-img">
    <img class="img-fluid" src="./img/angela-caroll-chief-editor.jpg" alt="">
</div>
<div class="text-dark container-fluid">
    <h6>Nome:</h6>
    <h6>Cognome:</h6>
    <h6>Ruolo:</h6>
</div>
</div> */

const team = [
  {
        name: 'Wayne',
        surname: 'Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'

    },

   {
        name: 'Angela ',
        surname: 'Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'

    },
   {
        name: 'Walter ',
        surname: 'Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'

    },

   {
        name: 'Angela ',
        surname: 'Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'

    },

   {
        name: 'Scott',
        surname: 'Estrada',
        role: 'Developer	',
        image: 'scott-estrada-developer.jpg'

    },

    worker5 = {
        name: 'Barbara',
        surname: 'Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'

    },

]

const content =document.getElementById('content')

for (const key in team) {
    const element = team[key];

    console.log(element);

    content.innerHTML+= `<div class="card p-2">
    <div class="card-header cont-img">
        <img class="img-fluid" src="./img/${element.image}" alt="">
    </div>
    <div class="text-dark container-fluid">
        <h6>Nome: ${element.name} </h6>
        <h6>Cognome: ${element.surname}</h6>
        <h6>Ruolo: ${element.role}</h6>
    </div>
    </div>`
}




