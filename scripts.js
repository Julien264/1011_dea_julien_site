/* ==========================================================================
   Fenêtre modale
   ========================================================================== */

const employes = document.querySelectorAll('.employe');
const modal = document.querySelector('.modal');

for (let i = 0; i < employes.length; i++) {
    const button = employes[i];
    
    button.addEventListener('click', openModal);
}

function openModal(){
    
    const path = this.src;
    const image = document.createElement('img');
    image.src = path;
    image.classList.add('zoom');
    
    modal.appendChild(image);
    modal.classList.add('visible');

    // Fermeture de la modale
    image.addEventListener('click', closeModal);
}

function closeModal(event){
    modal.classList.remove("visible");
    modal.removeChild(event.currentTarget);
}

/* ==========================================================================
   Produits
   ========================================================================== */