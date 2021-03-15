// const form = document.querySelector("form");
// const input = document.getElementById("name");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(input);
// });
// input.addEventListener("input", (e) => {
//   console.log(input.value);
//   if (input.value !== "") {
//     fetch("assets/php/ajax.php", {
//       method: "POST",
//       body: new FormData(form),
//     })
//       .then((response) => response.json())
//       .then((data) => {

//       datalist.innerHTML = "";

//       datas.forEach((data) => {

//         const option = document.createElement("option");

//         option.value = data["prenom"];

//         option.innerText = data["nom"];

//       datalist.appendChild(option);
//       })
//       });

const form = document.querySelector("form");
const input = document.getElementById("name");
const fighters = document.getElementById("fighters");
const combattants = document.getElementById("combattants");
const btn = document.getElementById("btn");


input.addEventListener("input", (e) => {
  e.preventDefault();
  console.log(input.value);
  // if (input.value !== "") {
  fetch("assets/php/ajax.php", {
      method: "POST",
      body: new FormData(form),
    })
    .then((response) => response.json())
    .then((datas) => {
      console.log(datas);
      fighters.innerHTML = "";
      datas.forEach((data) => {

        const option = document.createElement("option");
        option.value = data["prenom_nom"];
        option.innerText = data["prenom_nom"];


        // const option2 = document.createElement("option2");
        // option2.value = data["nom"];
        // option2.innerText = data["nom"];
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
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input);

  // if (input.value !== "") {
  fetch("assets/php/ajax.php", {
      method: "POST",
      body: new FormData(form),
    })
    .then((response) => response.json())
    .then((datas) => {
      console.log(datas);
      combattants.innerHTML = "";
      datas.forEach((data) => {
        combattants.innerHTML += `                                   
          <div>                                       
          <img src="${data.img}" alt="" width="500px"> 
          </div>                             
                <div>                                       
                  <div>                                        
                   <h2>${data.prenom_nom}</h2>                                      
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
                      </div>`
      });
      form.reset();
    });
});