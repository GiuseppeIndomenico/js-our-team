// NAME     SURNAME    ROLE                      IMAGE
// Wayne    Barnett	Founder & CEO	          wayne-barnett-founder-ceo.jpg
// Angela   Caroll	    Chief Editor	          angela-caroll-chief-editor.jpg
// Walter   Gordon	    Office Manager	          walter-gordon-office-manager.jpg
// Angela   Lopez	    Social Media Manager	  angela-lopez-social-media-manager.jpg
// Scott    Estrada	Developer	              scott-estrada-developer.jpg
// Barbara  Ramos	    Graphic Designer	      barbara-ramos-graphic-designer.jpg



    const team = [
        worker = {
            name:'Wayne',
            surname:' Barnett',
            role:'Founder & CEO',
            image:'wayne-barnett-founder-ceo.jpg' 

        },

        worker1 = {
            name:'Angela ',
            surname:' Caroll',
            role:'Chief Editor',
            image:'angela-caroll-chief-editor.jpg' 

        },
        worker2 = {
            name:'Walter ',
            surname:'  Gordon',
            role:'Office Manager',
            image:' walter-gordon-office-manager.jpg' 

        },

    ]

    for (const key in team) {
               const element = team[key];
        
               console.log(element);
        }
    



    