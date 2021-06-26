const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li'); //selects everything in nav-links
    
     burger.addEventListener('click' , () =>{ //on click
        //toggle nav

        nav.classList.toggle('nav-active'); //changes the class
         
        //animate links
            navLinks.forEach((link, index) =>{
            if(link.style.animation){ //if animations on links exists
                link.style.animation = ''
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s `;
            }
        });

        //burger animation
        burger.classList.toggle('toggle');
     });

}

const app = () =>{ //add functions here
    navSlide();
}

app();
