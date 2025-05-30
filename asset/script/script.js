catLife = 500;
forceUtilisateur = 50;

//recuprer les 3 element html
//vie chat / force utilisateur
//image du chat

//mettre a jour la force de l'utilisateur et la vie du chat par rapport aux variable du dessus

//ajout click sur ton image de chat
//pendant le click
//enlever de la vie au chat avec les variables catLife et forceUtilisateur
//mettre a jour l'html avec la nouvelle vie du chat

//si catLife <= 0
//alert
//changer image du chat

// 1 recup vie cat
let life = document.getElementById("life");
console.log("life");

// 2 recup force
let force = document.getElementById("use");
console.log("use");

//3 recup cat img
let cat = document.getElementById("myCat");
console.log("myCat");

//mettre a jour la force de l'utilisateur et la vie du chat par rapport aux variable du dessus
force.innerHTML = forceUtilisateur;

life.innerHTML = catLife;

//ajout click sur ton image de chat
cat.addEventListener("click", () => {
  //pendant le click
  //enlever de la vie au chat avec les variables catLife et forceUtilisateur
  //mettre a jour l'html avec la nouvelle vie du chat
  catLife -= forceUtilisateur;
  life.innerHTML = catLife;
  console.log(catLife);

  if (catLife < 0) {
    catLife = 0; // Empêche la vie du chat de devenir négative
  }

  if (catLife <= 0) {
    alert("Vous êtes un monstre !");
    // changer l'image du chat
    cat.src = "/asset/image/explosion.gif";
    // afficher une seconde image de chat killer
    setTimeout(() => {
      cat.src = "/asset/image/killer-upset.gif";
    }, 6000);
    // remettre à zéro la vie du chat avec set timeout
    setTimeout(() => {
      catLife = 500; // Réinitialiser la vie du chat
      life.innerHTML = catLife; // Mettre à jour l'affichage de la vie
      cat.src = "/asset/image/chaton.webp"; // Remettre l'image du chat
    }, 9000);
  }
});
