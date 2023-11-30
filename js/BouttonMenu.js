
//Lorsqu'on clique, change display footer
function cacheMontre(){
    let footer = document.getElementById("monFooter");
    console.log(footer.style.display);
    let displayActuel = footer.style.display;
    if(displayActuel === "none"){
        footer.style.display = "grid";
        changerPosition(); 
    }
    else{
        footer.style.display = "none"; 
        changerPosition();  
    }
}

//Déplace le bouton lorsqu'on affiche/cache le footer
function changerPosition(){
    let button = document.getElementById("button");
    let footer = document.getElementById("monFooter");
    let displayActuel = footer.style.display;
    if(displayActuel === "none"){
        button.style.position = "absolute";
        button.style.bottom = "0";
        changerClasse();
    }
    else{
        button.style.position = "absolute";
        button.style.bottom = "10%";
        changerClasse();
    }
}
//Pour toggle la flèche haut/bas
function changerClasse(){
    let icon = document.getElementById("icon");
    let footer = document.getElementById("monFooter");
    let displayActuel = footer.style.display;
    if(displayActuel === "none"){
        icon.classList.remove("fa-caret-down");
        icon.classList.add("fa-caret-up");
        icon.style.width = "50px";
    }
    else{
        icon.classList.remove("fa-caret-up");
        icon.classList.add("fa-caret-down");
        icon.style.width = "50px";
    }
    

}



