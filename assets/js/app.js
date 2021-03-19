// Récupération du form
const form = document.querySelector("form");

//Récupération de l'input name
const input = document.getElementById("name");

// Récupération de l'id datalist
const fighters = document.getElementById("fighters");

// Récupération de l'id combattants
const combattants = document.getElementById("combattants");

// Récupération du btn
const btn = document.getElementById("btn");

// ***********************Ecoute input************************************

input.addEventListener("input", (e) => {
  e.preventDefault();
  console.log(input.value);
 

  // On communique avec le scipt passé en 1 er arg sous forme de caractère
  fetch("assets/php/ajax.php", {
  
  // 2 eme arg de fetch avec la méthode POST et on instancie le body avec new FormData
      method: "POST",
      body: new FormData(form),
    }
    
    )

    // Response du serv et Promise résolue qui contiendra les données parsées en JSON, soit un objet JS
    .then((response) => response.json())

    // Nous recevons ENFIN nos données comme un obj JS
    .then((datas) => {
      console.log(datas);
      fighters.innerHTML = "";
      datas.forEach((data) => {

        const option = document.createElement("option");
        option.value = data["prenom_nom"];
        option.innerText = data["prenom_nom"];


        
        fighters.appendChild(option);

      });
      const options = document.querySelectorAll("option");

      options.forEach(option => {
        if (input.value == option.innerText) {

          fighters.innerText = "";
          btn.click();
        }
      })

    });

});


//*****************Validation submit*********** */

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input);

  //On communique avec le script passé en 1er argument sous forme de caractère

  fetch("assets/php/ajax.php", {
      method: "POST",
      body: new FormData(form),
    })

    //2ème argument de fetch, le corps de notre requête, dans notre cas on précise la méthode "POST" et le body (les données) soit le formData
    .then((response) => response.json())

     //Nous recevons ENFIN nos données comme un objet JS
    .then((datas) => {

      //on manipule nos données

      console.log(datas);
      combattants.innerHTML = "";
      datas.forEach((data) => {
        combattants.innerHTML += `
        <div class="card">                                   
          <div class="card_element">                                      
          <img src="${data.img}" alt="" width="500px"> 
          </div>                             
                <div class="background_card card_element">                                       
                  <div class="text_center">                                        
                   <h2>${data.prenom_nom}</h2>                                      
                    </div>
                    <div>                                    
                      <p>${data.aka}</p>                
                      </div>                                                                
                      <div>                                    
                      <p>${data.age}</p>                
                      </div>
                      <div>                                    
                      <p>${data.taille_poids}</p>                
                      </div>
                      <div>                                    
                      <p>${data.lieu_naissance}</p>                
                      </div>
                      <div>                                  
                      <p>${data.discipline}</p>                
                      </div>
                      <div>                                    
                      <p>${data.categorie}</p>                
                      </div>
                      <div>                                    
                      <p>${data.titre}</p>                
                    </div>
                  </div>
                  </div>`
      });

      // je vide mon form
      form.reset();
    });
});