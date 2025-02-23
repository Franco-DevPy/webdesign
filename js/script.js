document.addEventListener('DOMContentLoaded', function () {


 


  // Buscar .hamburger
let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".bar-nav");
let cuerpo = document.body; // Selecciona el cuerpo del documento

let menuIsOpen = false; // Estado inicial del menú

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    cuerpo.classList.toggle('no-scroll');

    if (menuIsOpen) {
        // Si el menú está abierto, lo animamos para que desaparezca hacia la derecha
        gsap.to('.bar-nav', {top: "-150%"});
        menuIsOpen = false; // Actualizamos el estado del menú
    } else {
        // Si el menú está cerrado, lo animamos para que aparezca desde la derecha
        gsap.to('.bar-nav', {top: 0});
        menuIsOpen = true; // Actualizamos el estado del menú
    }
});



document.querySelectorAll(".bar-nav a").forEach(link => {
  link.addEventListener("click", () => {
      // Verificar si el menú está abierto antes de intentar cerrarlo
      if(menuIsOpen) {
          gsap.to('.bar-nav', {top: "-150%"}); // Ajusta la animación según cómo quieras que se cierre el menú
          hamburger.classList.remove("is-active");
          cuerpo.classList.remove('no-scroll');
          menuIsOpen = false; // Actualiza el estado del menú
      }
  });
});







let tlMenu = gsap.timeline()


tlMenu.from(".menu-container ul li a", {
  delay:2,
  duration: 1,
  x:-900, 
  stagger:.5,

});


// SECTION PRELOAD


// document.body.classList.add('no-scroll');

// let preloading = gsap.timeline();

// preloading
// .from('.logo-preload',{
//   opacity: 0,
//   duration: 1,
// })
// .to('.logo-preload', {
//   opacity: 0,
//   duration: 1,
//   autoAlpha: 0,
//   onComplete: () => gsap.set('.logo-preload', {display: "none"}) // Aquí usamos onComplete para aplicar display: none
// })
// .from(".t-loader", {
//   duration: 1,
//   opacity: 0,
// })
// .to(".t-loader", {
//   duration: 1,
//   opacity: 0,
// })
// .to("#loader", {
//   y: 1000,
//   duration: 1,
//   delay: .5,
//   onComplete: () => {
//     gsap.set("#loader", {display: "none"}); // Usamos onComplete para aplicar display: "none"
//     document.body.classList.remove('no-scroll'); // Quitamos la clase para restablecer el desplazamiento
//   }
// });






// SECTION HERO

let textHero = gsap.timeline({ repeat: -1, repeatDelay: 0 });

textHero
  // Mueve el primer slider desde arriba hacia el centro y luego hacia abajo
  .fromTo(".h2-slider1", { y: "-100%" }, { y: "0%", duration: .5, ease: "none" })
  .to(".h2-slider1", { y: "100%", duration: .5 , ease: "none", delay:8, }) // Retraso antes de mover hacia abajo
  
  // Mueve el segundo slider siguiendo el mismo patrón después de un retraso
  .fromTo(".h2-slider2", { y: "-100%" }, { y: "0%", duration: .5, ease: "none" }, ) // Empieza antes de que el primero termine
  .to(".h2-slider2", { y: "100%", duration: .5, ease: "none", delay:8, }); // Mueve hacia abajo




// MENU 
gsap.to('.container-info3 img:nth-child(2)',{
  rotation: -720,
  duration:5,
  ease:'none',
  repeat:-1,
})




gsap.to('.container-info3 img:nth-child(1)', {
  x: 120,
  duration: 2, // Una duración más larga puede hacer que el movimiento se sienta más suave
  ease: 'sine.inOut', // 'sine.inOut' crea un efecto suave de ida y vuelta
  repeat: -1, // Repetir infinitamente
  yoyo: true // Alternar la dirección de la animación para un ciclo continuo
});





let typed = new Typed('.type-h1', {
  strings: [ 'Concepteur', 'DÉVELOPPEUR',],
  typeSpeed: 200,
  backSpeed: 100,
  backDelay: 4000,
  loop: true,
  
});




let typedMenu = new Typed('span.puntos', {
  strings: [ '...',],
  typeSpeed: 900,
  backSpeed: 200,
  backDelay: 3000,
  loop: true,
  
});






// SECTION SKILL



let titleSkill = gsap.timeline({ repeat: -1, repeatDelay: .5 });

titleSkill
  // Mueve el primer slider desde arriba hacia el centro y luego hacia abajo
  .fromTo(".skill-content", { x: "-200%" , opacity:0 }, { x: "0%", duration: 1, ease: "none",opacity:1, })
  .to(".skill-content", { duration: .5 , ease: "none", delay:10, opacity:0 }) // Retraso antes de mover hacia abajo
  
  // // // Mueve el segundo slider siguiendo el mismo patrón después de un retraso
    .fromTo(".title-skill", { x: "-200%",opacity:0  }, { x : "0%", duration: 1, ease: "none",opacity:1 }, ) // Empieza antes de que el primero termine
    .to(".title-skill", { duration: .5, ease: "none", delay:8,opacity:0 }); // Mueve hacia abajo





 let skillListD = gsap.timeline({ repeat: -1, repeatDelay: 2 });

 skillListD
 .to(".skill-p1", { duration:.1, backgroundColor:"#EEEEEE", color:"#1A1A1A"})
 .to(".skill-p1", { duration:.1, backgroundColor:"#1A1A1A", color:"#EEEEEE"}, "+=1.5")
 
 .to(".skill-p2", { duration:.1, backgroundColor:"#EEEEEE", color:"#1A1A1A"})
 .to(".skill-p2", { duration:.1, backgroundColor:"#1A1A1A", color:"#EEEEEE"}, "+=1.5")
 
 .to(".skill-p3", { duration:.1, backgroundColor:"#EEEEEE", color:"#1A1A1A"})
 .to(".skill-p3", { duration:.1, backgroundColor:"#1A1A1A", color:"#EEEEEE"}, "+=1.5")
 
 .to(".skill-p4", { duration:.1, backgroundColor:"#EEEEEE", color:"#1A1A1A"})
 .to(".skill-p4", { duration:.1, backgroundColor:"#1A1A1A", color:"#EEEEEE"}, "+=1.5")
 
 .to(".skill-p5", { duration:.1, backgroundColor:"#EEEEEE", color:"#1A1A1A"})
 .to(".skill-p5", { duration:.1, backgroundColor:"#1A1A1A", color:"#EEEEEE"}, "+=1.5")

 .to(".skill-p6", { duration:.1, backgroundColor:"#EEEEEE", color:"#1A1A1A"})
 .to(".skill-p6", { duration:.1, backgroundColor:"#1A1A1A", color:"#EEEEEE"}, "+=1.5")

 .to(".skill-p7", { duration:.1, backgroundColor:"#EEEEEE", color:"#1A1A1A"})
 .to(".skill-p7", { duration:.1, backgroundColor:"#1A1A1A", color:"#EEEEEE"}, "+=1.5")

 .to(".skill-p8", { duration:.1, backgroundColor:"#EEEEEE", color:"#1A1A1A"})
 .to(".skill-p8", { duration:.1, backgroundColor:"#1A1A1A", color:"#EEEEEE"}, "+=1.5")

 .to(".skill-p9", { duration:.1, backgroundColor:"#EEEEEE", color:"#1A1A1A"})
 .to(".skill-p9", { duration:.1, backgroundColor:"#1A1A1A", color:"#EEEEEE"}, "+=1.5")

 .to(".skill-p10", { duration:.1, backgroundColor:"#EEEEEE", color:"#1A1A1A"})
 .to(".skill-p10", { duration:.1, backgroundColor:"#1A1A1A", color:"#EEEEEE"}, "+=1.5")

 .to(".skill-p11", { duration:.1, backgroundColor:"#EEEEEE", color:"#1A1A1A"})
 .to(".skill-p11", { duration:.1, backgroundColor:"#1A1A1A", color:"#EEEEEE"}, "+=1.5")

 


 let typedApropos = new Typed('.about-text', {
  contentType: 'html',
  strings: ["Bienvenue dans mon monde, où la technologie rencontre l'art pour donner vie à vos idées."],
  typeSpeed: 50,
  backSpeed: 100,
  backDelay: 10000,
  loop: true,
  showCursor: false
});



let typedcontact = new Typed('.contact-text', {
  contentType: 'html',
  strings: ["Transformons ensemble vos idées en succès numériques. Contactez-moi pour démarrer une collaboration unique et créer une expérience digitale qui marque... À très vite pour faire naître votre projet !"],
  typeSpeed: 50,
  backSpeed: 100,
  backDelay: 10000,
  loop: true,
  showCursor: false
});


let typedfooter = new Typed('.puntosf', {
  strings: [ '...',],
  typeSpeed: 900,
  backSpeed: 200,
  backDelay: 3000,
  loop: true,
  
});





let typedformation = new Typed('.puntosformation', {
  strings: [ '...',],
  typeSpeed: 900,
  backSpeed: 200,
  backDelay: 3000,
  loop: true,
  
});





gsap.to('.box-deco-projet2 img:nth-child(1)',{
  rotation: 720,
  duration:5,
  ease:'none',
  repeat:-1,
})








});



  // .fromTo(".skill-content", { opacity: 1, x: 0 }, { duration: 1, opacity: 0, x: -1200 })
  // .fromTo(".title-skill", { opacity: 0, x: -900 }, { delay: 5, duration: 1, opacity: 1, x: 0 })
  // .to(".title-skill", { duration: 1, opacity: 0, x: -1200 })
  // .fromTo(".skill-content", { opacity: 0, x: -1200 }, { delay: 5, duration: 1, opacity: 1, x: 0 });
