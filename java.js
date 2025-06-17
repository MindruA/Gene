let litere;
let lenis; // doar declarăm
window.addEventListener("load", () => {

console.log(document.getElementById("nume")); // Trebuie să returneze elementul
  
   let nume = document.getElementById("nume");
let paths = nume.querySelectorAll("path");
paths.forEach((p, i) => {
  p.style.animation = `draw 3s ease forwards`;
  p.style.animationDelay = `${i * 0.03}s`;
});

 setTimeout(()=>{
paths.forEach((path, i) => {
  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
  path.style.animation = "contureaza 3s ease forwards";
  path.style.animationDelay = `${i * 0.02}s`;
  
});
  },3000);



const pathss = document.querySelectorAll("#nume path");
const nume2=document.getElementById("nume");
const tl = gsap.timeline({ delay: 7 });

pathss.forEach((path, i) => {
  let direction;
  let rotation;

  if (i % 2 === 0) {
    direction = -50*(i%5); // sus
    rotation = -15*i;
  } else {
    direction = 50*(i%5); // jos
    rotation = 10*(i%3);
  }

tl.to(path, {
  y: direction,
  rotation: rotation,
  duration: 2,
  ease: "power3.inOut"
}, i * 0.02);

tl.to(path, {
  autoAlpha: 0,
  duration: 2,
  ease: "power3.inOut",
  stagger: 0.05        // fiecare path întârzie cu 0.05s față de cel anterior
}, i * 0.12); // doar opacity întârziat





// Aflăm cât durează ultima animație
const totalDelay = 2; // ultimul path + durata animației + delay dorit

tl.to({}, { duration: totalDelay }); // element gol doar pentru delay
tl.to(nume2, {
  opacity: 0,
}).add(() => {
  nume2.style.display = "none";
});


});







    // deblochează scroll-ul
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden"; // important și body uneori


  setTimeout(()=>{

  // Setăm opacitatea pentru poza1stanga și poza1dreapta
  const poza1stanga = document.getElementById("pozaparalaxdivstanga");
  const poza1dreapta = document.getElementById("pozaparalaxdiv");
    const elementstanga = document.getElementById("pozaparalaxstanga");
  const elementdreapta = document.getElementById("pozaparalax");


  if (poza1stanga) {
  gsap.to(poza1stanga, {
    opacity: 1,
    duration: 0.4,
    ease: "power2.out"
  });
}

if (poza1dreapta) {
  gsap.to(poza1dreapta, {
    opacity: 1,
    duration: 0.6,
    ease: "power2.out"
  });
}

if (elementstanga) {
  gsap.fromTo(elementstanga,
    { x: "-80px", opacity: 0 },
    { x: "0px", opacity: 1, duration: 1, ease: "power2.out" }
  );
}

if (elementdreapta) {
  gsap.fromTo(elementdreapta,
    { x: "80px", opacity: 0 },
    { x: "0px", opacity: 1, duration: 1, ease: "power2.out" }
  );
}


  const scrisMana = document.getElementById("scris_mana");

  const linie= document.getElementsByClassName("line-wrapper")[0]
  linie.style.opacity = 0;
  scrisMana.style.opacity = 1;  
   
  if (scrisMana) {
    const paths = scrisMana.querySelectorAll("path");

    paths.forEach((path, i) => {
      const length = path.getTotalLength(); // Obține lungimea fiecărui path
      path.style.strokeDasharray = length; // Setează dasharray la lungimea totală
      path.style.strokeDashoffset = length; // Ascunde complet linia

       
      // Animația pentru fiecare path
      gsap.to(path, {
        strokeDashoffset: 0, // Animația scrie linia
        duration: 1, // Durata animației pentru fiecare path
        delay: i * 0.1, // Întârziere între animațiile fiecărui path
        ease: "power2.out", // Efect de animație lină
        
      });
    });
  }

  const logo_svg=document.getElementById("logo_svg");
  

if (logo_svg) {
  gsap.to(logo_svg, {
    y: "0",      
    duration: 1.2,
    ease: "power2.inOut",
    opacity: 1      // opțional dacă vrei să o păstreze (sau scoate linia dacă e deja 1)
  });
}
 


  },10000);

});
setTimeout(() => {
  gsap.to("#Vector", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out"
  });

  gsap.to("#Vector2", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",

  });
}, 12000); // după scris_mana care e la 10000

setTimeout(() => {
  const scrollSvg = document.getElementById("scroll-svg");
  if (scrollSvg) {
    gsap.to(scrollSvg, {
      y: 10, // deplasare în jos față de poziția inițială
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      repeat: -1,
      yoyo: true
    });
  }
}, 12300); // după apariția lui Vector2 (care e la 12000)



//TIMEOUT CA SA SE STEARGA SVG UL SA INTRE PE SITE
setTimeout(()=>{

let triggered = false;

window.addEventListener("wheel", () => {
  if (!triggered) {
    const svg = document.getElementsByClassName("totsvg")[0];
    const logo_div = document.getElementById("logo_centrat");
    const logo_inceput = document.getElementById("logo");
    const micro = document.getElementById("micro_scris");


let lenis = null;

window.addEventListener("wheel", () => {
  // Blochează scrollul imediat după evenimentul wheel (opțional)
  document.documentElement.style.overflowY = "hidden";
  document.body.style.overflowY = "hidden";

  setTimeout(() => {
    // Deblochează scrollul
    document.documentElement.style.overflowY = "auto";
    document.body.style.overflowY = "auto";

    // Inițializează Lenis scroll
    lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true
    });

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value) : window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      fixedMarkers: true
    });

    ScrollTrigger.defaults({ scroller: document.body });

    lenis.on("scroll", ScrollTrigger.update);

    requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    });

    ScrollTrigger.refresh();
  },1500); // 🔁 întârziere după wheel
}, { once: true });





// Animația de ștergere și ridicare în sus pentru scris_mana
const scrisMana = document.getElementById("scris_mana");
if (scrisMana) {
  const paths = scrisMana.querySelectorAll("path");
  paths.forEach((path, i) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = 0; // pornim de la scris complet

    gsap.to(path, {
      strokeDashoffset: length,
      y: "-30",          // ridică path-ul cu 30px în sus (ajustează după preferință)
      duration: 1.3,
      delay: i * 0.03,
      ease: "power2.inOut",
    });
  });
  gsap.to(scrisMana, {
    opacity: 0,
    duration: 1.32,
    ease: "power2.inOut",
    onComplete: () => {
      scrisMana.style.display = "none"; // ascunde elementul după animație
    }
  });
}
// ascunde și span-urile și SVG-ul după ce scrisMana a dispărut
gsap.to("#nume", {
  opacity: 0,
  duration: 1.4,
  ease: "power2.inOut",
  onComplete: () => {
    const nume = document.getElementById("nume");
    if (nume) nume.style.display = "none";
  }
});

const scrollSvg = document.getElementById("scroll-svg");
if (scrollSvg) {
  gsap.to(scrollSvg, {
    opacity: 0,
    duration: 1.4,
    ease: "power2.inOut",
    onComplete: () => {
      scrollSvg.style.display = "none";
    }
  });
}

// La final, ascunde și întreg div-ul cu clasa totsvg (care conține tot SVG-ul)
const totsvg = document.querySelector(".totsvg");
if (totsvg) {
  gsap.to(totsvg, {
    opacity: 0,
    duration: 1.5,
    delay: 1.5,
    ease: "sine.inOut",
    onComplete: () => {
      totsvg.style.visibility = "hidden";
      totsvg.style.pointerEvents = "none";
    }
  });
}



  // Pozele zboară în sus și dispar
  const pozaStanga = document.getElementById("pozaparalaxdivstanga");
  const pozaDreapta = document.getElementById("pozaparalaxdiv");

  if (pozaStanga) {
    gsap.to(pozaStanga, {
      x: "-100%",  // mută în sus cu 150% din înălțimea lor (sau ajustează după preferință)
      opacity: 0,
      duration: 1,
      ease: "sine.inOut"
    });
  }

  if (pozaDreapta) {
    gsap.to(pozaDreapta, {
      x: "100%",
      opacity: 0,
      duration: 1,
      ease: "sine.inOut"
    });
  }

  // SVG dispare
  if (svg) {
    gsap.to(svg, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut"
    });
    svg.style.position = "absolute";
   
  }

  // logo centrat dispare
  if (logo_div) {
    gsap.to(logo_div, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        logo_div.style.display = "none";
      }
    });
  }

  // logo început dispare
  if (logo_inceput) {
    gsap.to(logo_inceput, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut"
    });
  }

 

 const logo_svg=document.getElementById("logo_svg");

  logo_svg.style.opacity=0;
  setTimeout(() => {
  const logo_header = document.getElementById("logo_header");
  logo_header.style.opacity = 1;

  const sh1 = document.getElementById("sh1");
  const sh2 = document.getElementById("sh2");

  gsap.fromTo(sh1, 
    { y: 60, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1.4, ease: "power2.out" }
  );

  gsap.fromTo(sh2, 
    { y: 60, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1.4, ease: "power2.out", delay: 0.2 }
  );

 
}, 500);


    

    triggered = true;
  }
  ScrollTrigger.refresh();
}, { passive: true });
  },120);//DE MODIFICAT !!!!!!!!!!!!!!!!!!!!!!!!! ALEX cu 12000
  








// Efectul de paralaxă pentru poza1sdreapta

document.addEventListener("DOMContentLoaded", () => {
  const poza1stanga = document.getElementById("pozaparalax");

  if (poza1stanga) {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      let x = (clientX / innerWidth) * 2 - 1;
      let y = (clientY / innerHeight) * 2 - 1;

      const maxRangeYNegative = -0.1;

      if (y < 0) {
        y = Math.max(y, maxRangeYNegative);
      }

      const parallaxAmount = 15;
      const targetX = x * parallaxAmount;
      const targetY = y * parallaxAmount;

      // 🎯 GSAP animare smooth spre poziția nouă
      gsap.to(poza1stanga, {
        x: targetX,
        y: targetY,
        duration: 1,
        ease: "expo.out"
      });
    });
  }
});



// Efectul de paralaxă pentru poza1stanga

document.addEventListener("DOMContentLoaded", () => {
  const poza1stanga = document.getElementById("pozaparalaxstanga");

  if (poza1stanga) {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      let x = (clientX / innerWidth) * -2 - 1;
      let y = (clientY / innerHeight) * 1.05  - 1;

      const maxRangeYNegative = -0.1;

      if (y < 0) {
        y = Math.max(y, maxRangeYNegative);
      }

      const parallaxAmount = 20;
      const targetX = x * parallaxAmount;
      const targetY = y * parallaxAmount;

      // 🎯 GSAP animare smooth spre poziția nouă
      gsap.to(poza1stanga, {
        x: targetX,
        y: targetY,
        duration: 1,
        ease: "expo.out"
      });
    });
  }
});





window.addEventListener("DOMContentLoaded", () => {
  const stele = Array.from(document.querySelectorAll("[id^='stelute-galbene']"));

  if (stele.length === 0) return;

  document.addEventListener("mousemove", (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = (e.clientX - centerX) / centerX;
    const offsetY = (e.clientY - centerY) / centerY;

    stele.forEach((stea, i) => {
      const factor = 10; // mai aproape = mai mare
      const scale = 1 + (i % 3) * 0.03;
      const rotation = offsetX * 6 + i;

      gsap.to(stea, {
        x: offsetX * factor,
        y: offsetY * factor,
        rotation: rotation,
        scale: scale,
        transformOrigin: "center center",
        duration: 1,
        ease: "expo.out"
      });
    });
  });
});

window.addEventListener("scroll", () => {
  const fata = document.getElementById("fataback5");
  const spate = document.getElementById("back5");

  const scrollY = window.scrollY;

  if (fata) {
    const scale = 1 + scrollY * 0.0005; // ajustează 0.0005 pentru cât de rapid să se mărească

    gsap.to(fata, {
      y: scrollY * 0.2,
      scale: scale,
      duration: 0.5,
      ease: "power1.out"
    });
  }

  if (spate) {
    const scale = 1 + scrollY * 0.0003; // fundal se mărește mai lent

    gsap.to(spate, {
      y: scrollY * 0.1,
      scale: scale,
      duration: 0.5,
      ease: "power1.out"
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const pf1 = document.getElementById("pf1");

  if (!pf1) return;

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  document.addEventListener("mousemove", (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * -2; // invers
    const y = (e.clientY / innerHeight - 0.5) * -2; // invers

    targetX = -x *7; // rotire inversă pe Y
    targetY = y * 7;  // rotire inversă pe X
  });

  function animate() {
    // interpolare spre target (lerping)
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    pf1.style.transform = `
      perspective(800px)
      rotateX(${currentY}deg)
      rotateY(${currentX}deg)
    `;

    requestAnimationFrame(animate);
  }

  animate();
});


function easeOutQuad(t) {
  return t * (2 - t);
}


 function fireConfetti() {
  var count = 200;
  var defaults = {
    origin: { y: 1 }, // confetti pornește din marginea de jos
    colors: ['#000000', '#D4AF37', '#B76E79', '#F5F5F5', '#C0C0C0'] // negru, gold, rose gold, alb, argintiu
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}


function startCounterEased(el, target = 100, duration = 2000) {
  let start = null;
  let lastValue = -1;

  function animate(timestamp) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuad(progress);

    const currentValue = Math.floor(easedProgress * target);

    if (currentValue !== lastValue) {
      el.textContent = currentValue;
      lastValue = currentValue;
    }

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      el.textContent = target;
      fireConfetti(); // 🎉 declanșăm când ajunge la final
    }
  }

  requestAnimationFrame(animate);
}

document.addEventListener("DOMContentLoaded", () => {
  const cout = document.getElementById("cout");
  if (!cout) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounterEased(cout, 100, 2000);
        obs.unobserve(cout);
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(cout);
});



document.addEventListener("DOMContentLoaded", () => {
  const detaliu1 = document.getElementById("detaliu1");
  const detaliu2 = document.getElementById("detaliu2");
  const imaginepart = document.getElementById("imaginepart");
  const pf1 = document.getElementById("pf1");
  if (!detaliu1 || !detaliu2 || !imaginepart || !pf1) return;

  // Inițial: inner shadow, fără scale
  detaliu1.style.boxShadow = "inset 5px 5px 22px rgba(0,0,0,0.35)";
  detaliu1.style.transform = "scale(1)";
  detaliu1.style.transition = "none";

  detaliu2.style.boxShadow = "inset 5px 5px 22px rgba(0,0,0,0.35)";
  detaliu2.style.transform = "scale(1)";
  detaliu2.style.transition = "none";

  imaginepart.style.transform = "scale(0.8)";
  imaginepart.style.transition = "none";
  pf1.style.filter = "none";

  let started = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true;

          let finished = 0;
          function finish() {
            finished++;
            if (finished === 2) {
              gsap.to(imaginepart, {
                scale: 1,
                duration: 0.7,
                ease: "expo.out"
              });
              gsap.to(pf1, {
                filter: "drop-shadow(5px 5px 10px #000000)",
                duration: 0.7,
                ease: "power2.out"
              });
            }
          }

          // Acum: fade-out la inner shadow → fade-in la drop shadow 3D
          const tl1 = gsap.timeline({ onComplete: finish });
          tl1.to(detaliu1, {
            boxShadow: "inset 5px 5px 22px rgba(0,0,0,0)",
            transform: "scale(1.01)",
            duration: 0.7,
            ease: "expo.inOut"
          });
          tl1.to(detaliu1, {
            boxShadow: "-15px 12px 20px 2px rgba(0, 0, 0, 0.37)",
            transform: "scale(1.03)",
            duration: 0.8,
            ease: "expo.inOut"
          });

          const tl2 = gsap.timeline({ onComplete: finish });
          tl2.to(detaliu2, {
            boxShadow: "inset 5px 5px 22px rgba(0,0,0,0)",
            transform: "scale(1.01)",
            duration: 0.7,
            ease: "expo.inOut"
          });
          tl2.to(detaliu2, {
            boxShadow: "-15px 12px 20px 2px rgba(0, 0, 0, 0.37)",
            transform: "scale(1.03)",
            duration: 0.8,
            ease: "expo.inOut"
          });
        }
      });
    },
    { threshold: 0.7 }
  );
  observer.observe(pf1);
});


 
const outer = document.getElementById("outer-circle");
const inner = document.getElementById("inner-circle");

let scrollY = 0;
let ticking = false;

function updateRotation() {
  const factor = 0.055;
  const rots = -scrollY * 0.1;
  const rotd = scrollY * factor;

  if (outer) gsap.set(outer, { rotation: rots, transformOrigin: "50% 50%" });
  if (inner) gsap.set(inner, { rotation: rotd, transformOrigin: "50% 50%" });

  ticking = false;
}

window.addEventListener("scroll", () => {
  scrollY = window.scrollY;
  if (!ticking) {
    requestAnimationFrame(updateRotation);
    ticking = true;
  }
});


 gsap.registerPlugin(ScrollTrigger);

        document.addEventListener("DOMContentLoaded", () => {
            const element = document.getElementById("px1");
           const trig=document.getElementById("img_paralax")
             const element2 = document.getElementById("px2");
           const trig2=document.getElementById("divpx1")
            const element3 = document.getElementById("px3");
         

gsap.set(element, {
    y: "10%",
    scale: 1.2
  });

            // Crează animația
            const animation = gsap.to(element, {
                y: -50, // Final position (normal)
           scale: 1,        // Scalare până la 80%
 
                 ease: "sine.out", // Easing mai lin decât power2.out
                
                // Configurare ScrollTrigger
                scrollTrigger: {
                    trigger: trig,
                    start: "top top", // Când partea de sus a elementului atinge partea de jos a viewport-ului
                   end: "bottom top",
                     scrub: 1.5,          // Valoare mai mică = mai puțină rezistență
                  
                    
                }
            });

gsap.set(element2, {
   
    scale: 1.2
  });
            // Crează animația
            const animation2 = gsap.to(element2, {
                y: -12, // Final position (normal)
              scale: 1,        // Scalare până la 80%
 
                 ease: "sine.out", // Easing mai lin decât power2.out
                
                // Configurare ScrollTrigger
                scrollTrigger: {
                    trigger: trig,
                    start: "30% top", // Când partea de sus a elementului atinge partea de jos a viewport-ului
                  
                     scrub: 1.5,          // Valoare mai mică = mai puțină rezistență
                   
                }
            });


gsap.set(element3, {
    y: "10%",
    scale: 1.2
  });
            // Crează animația
            const animation3 = gsap.to(element3, {
                y: -50, // Final position (normal)
           scale: 1,        // Scalare până la 80%
 
                 ease: "sine.out", // Easing mai lin decât power2.out
                
                // Configurare ScrollTrigger
                scrollTrigger: {
                    trigger: trig,
                    start: "20% top", // Când partea de sus a elementului atinge partea de jos a viewport-ului
                  
                     scrub: 1.5,          // Valoare mai mică = mai puțină rezistență
                 
                    
                }
            });



        });


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const drum = document.getElementById("drum");
  if (!drum) return;

  
  const paths = drum.querySelectorAll("path");

  paths.forEach((path) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: drum,
        start: "top 80%",
        end: "bottom 10%",
        scrub: true,
 
      }
    });
  });
});


document.addEventListener("DOMContentLoaded",()=>{
 gsap.registerPlugin(ScrollTrigger);
  const scris = document.getElementById("divh2");
  const funda = document.getElementById("funda");
  const trig3=document.getElementById("divpx2")
  if (!drum) return;

const paths = funda.querySelectorAll("path");
paths.forEach((path) => {
  const length = path.getTotalLength();

  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;

  gsap.to(path, {
    strokeDashoffset: 0,
    ease: "ease",
    scrollTrigger: {
      trigger: trig3,
      start: "top 70%",
      end: "bottom 30%",
      scrub: true,
     
    }
  });
});


 // animația pentru text (ex: apare cu fade și translate)
  gsap.from(scris, {
    opacity: 0,
    y: 50,
    scale:0.8,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: trig3,
      start: "top 70%",
      end: "bottom 30%",
      scrub: true,
    
    }
  });

})

        