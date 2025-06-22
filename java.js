let litere;
let lenis; // doar declarăm

async function incarcaSVG() {
  // SVG #1 – background principal
  const responseIntro = await fetch("Vectori/background-principal2.svg");
  const svgIntro = await responseIntro.text();
  document.getElementById("backmain").innerHTML = svgIntro;

  const curgere = document.getElementById("curgere");
  const pf2 = document.getElementById("pf2");
  const micropigmentation = document.getElementById("Micropigmentation");
  const pozapus = document.getElementById("pozapus");
  const lash = document.getElementById("Lash_extensions");

  if (curgere) {
    curgere.style.transform = "translateY(-150vw)";
  }

  if (pf2 && micropigmentation && lash) {
    pf2.addEventListener("mouseenter", () => {
      gsap.to(micropigmentation, {
        filter: "drop-shadow(-8px 14px 3px rgba(20, 20, 20, 0.89))",
        scale: 1.1,
        transformOrigin: "center center",
        duration: 1,
        ease: "power3.out"
      });

      gsap.to(lash, {
        fill: "#5f5f5f",
        duration: 0.5,
        ease: "power3.out"
      });
    });

    pf2.addEventListener("mouseleave", () => {
      gsap.to(micropigmentation, {
        filter: "drop-shadow(0px 0px 0px rgba(20, 20, 20, 0.89))",
        scale: 1,
        duration: 1,
        ease: "power3.inOut"
      });

      gsap.to(lash, {
        fill: "#ffffff",
        duration: 0.5,
        ease: "power3.inOut"
      });
    });
  }

  if (pozapus && lash && micropigmentation) {
    pozapus.addEventListener("mouseenter", () => {
      gsap.to(lash, {
        filter: "drop-shadow(-8px 14px 3px rgba(20, 20, 20, 0.89))",
        scale: 1.1,
        transformOrigin: "center center",
        duration: 1,
        ease: "power3.out"
      });

      gsap.to(micropigmentation, {
        fill: "#5f5f5f",
        duration: 0.5,
        ease: "power3.out"
      });
    });

    pozapus.addEventListener("mouseleave", () => {
      gsap.to(lash, {
        filter: "drop-shadow(0px 0px 0px rgba(20, 20, 20, 0.89))",
        scale: 1,
        duration: 1,
        ease: "power3.inOut"
      });

      gsap.to(micropigmentation, {
        fill: "#ffffff",
        duration: 0.5,
        ease: "power3.inOut"
      });
    });
  }

  const scrolSus = document.getElementById("scrolsus");
  const scrolJos = document.getElementById("scroljos");

  if (scrolSus && scrolJos) {
    gsap.to(scrolSus, {
      y: 15,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(scrolJos, {
      y: 15,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  // Așteaptă 3 secunde după ce primul SVG e injectat
  await new Promise(resolve => setTimeout(resolve, 3000));

  // SVG #2 – mentiune
  const responseMentiune = await fetch("Vectori/mentiune.svg");
  const svgMentiune = await responseMentiune.text();
  document.getElementById("mentiune").innerHTML = svgMentiune;

  const cercuri = [
    { id: "cerc1", y: -140, start: "top 85%", end: "top 50%" },
    { id: "cerc2", y: -60, start: "top 90%", end: "top 40%" },
    { id: "cerc3", y: -60, start: "top 95%", end: "top 30%" },
    { id: "cerc4", y: -110, start: "top 92%", end: "top 35%" },
    { id: "cerc5", y: -50, start: "top 88%", end: "top 42%" },
    { id: "cerc6", y: -90, start: "top 93%", end: "top 33%" },
    { id: "cerc7", y: -40, start: "top 89%", end: "top 39%" },
  ];

  const trz = document.getElementById("mentiune");

  cercuri.forEach(({ id, y }) => {
    const elem = document.getElementById(id);
    if (elem) {
      gsap.fromTo(elem,
        { y: 0 },
        {
          y: y,
          scrollTrigger: {
            trigger: trz,
            start: "top 90%",
            end: "bottom 10%",
            scrub: 1,
          },
          ease: "sine.inOut",
          duration: 3,
        }
      );
    }
  });

  // Animația liniei
  const path = document.getElementById("linie");
  if (path) {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: path,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }
}






  




window.addEventListener("load", () => {
incarcaSVG();




    // deblochează scroll-ul
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden"; // important și body uneori
const logo_inceput = document.getElementById("logo");
 const full=document.getElementsByClassName("fullscreen")[0];
 full.style.display="none"
  const halfR=document.getElementsByClassName("right-half")[0];
   const halfl=document.getElementsByClassName("left-half")[0];
  const linie=document.getElementsByClassName("line-wrapper")[0];

   setTimeout(()=>{
     full.style.display = "block";         // fă-l vizibil
  void full.offsetWidth;                // forțează browserul să "vadă" starea inițială
  full.classList.add("apare");          // adaugă clasa cu tranziție



  },2500);


setTimeout(()=>{
  halfR.style.display = "none";
  halfl.style.display = "none";
  linie.style.display = "none";
  logo_inceput.style.display = "none";
  },4000);

});




//TIMEOUT CA SA SE STEARGA SVG UL SA INTRE PE SITE
setTimeout(()=>{

let triggered = false;

window.addEventListener("wheel", () => {
  if (!triggered) {
    const svg = document.getElementsByClassName("totsvg")[0];
    const logo_div = document.getElementById("logo_centrat");
    const logo_inceput = document.getElementById("logo");
    const micro = document.getElementById("micro_scris");


    const fullscreen = document.querySelector(".fullscreen");
      
if (fullscreen) {
  
  gsap.to(curgere, {
    y:0,
  
    duration: 1.5,
    ease: "power2.out",
    
  });
  gsap.to(fullscreen, {
    backgroundColor: "#ffffff",
  duration: 0.2,             // ↗️ durată mai lungă pentru efect calm
  ease: "expo.inOut",        // ↘️ easing moale, cu început și final fluid
    
  });
}


let lenis = null;



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


  // SVG dispare
  if (svg) {
    gsap.to(svg, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut"
    });
    svg.style.position = "absolute";
   
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

 
}, 1500);


    

    triggered = true;
  }
  ScrollTrigger.refresh();
}, { passive: true });
  },4200);//DE MODIFICAT !!!!!!!!!!!!!!!!!!!!!!!!!
  














document.addEventListener("DOMContentLoaded", () => {
 const pf1 = document.getElementById("pf1");
if (!pf1) return;

let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;
let animationFrameId = null;
let active = false;

function animate() {
  currentX += (targetX - currentX) * 0.08;
  currentY += (targetY - currentY) * 0.08;

  pf1.style.transform = `
    perspective(800px)
    rotateX(${currentY}deg)
    rotateY(${currentX}deg)
  `;

  animationFrameId = requestAnimationFrame(animate);
}

function startTracking() {
  if (active) return;
  active = true;

  document.addEventListener("mousemove", onMouseMove);
  animate();
}

function stopTracking() {
  if (!active) return;
  active = false;

  cancelAnimationFrame(animationFrameId);
  document.removeEventListener("mousemove", onMouseMove);
}

function onMouseMove(e) {
  const { innerWidth, innerHeight } = window;
  const x = (e.clientX / innerWidth - 0.5) * -2;
  const y = (e.clientY / innerHeight - 0.5) * -2;

  targetX = -x * 7;
  targetY = y * 7;
}

// 📌 Activăm doar când intră în viewport
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startTracking();
    } else {
      stopTracking();
    }
  });
}, {
  threshold: 0.5 // minim 50% vizibil
});

observer.observe(pf1);

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


function startCounterEased(el, target =1000, duration = 2000) {
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
        startCounterEased(cout, 1000, 2000);
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

        
const floatingItemsConfig = [
  { id: 'for2', amplitude: 1.5, speed: 0.002, rotationSpeed: 0.01 },
  { id: 'for3', amplitude: 2, speed: 0.0018, rotationSpeed: -0.008 },
  { id: 'for4', amplitude: 1.2, speed: 0.0015, rotationSpeed: 0.007 },
  { id: 'for5', amplitude: 1.7, speed: 0.0021, rotationSpeed: -0.009 }
];

const floatingItems = [];

floatingItemsConfig.forEach(item => {
  const el = document.getElementById(item.id);
  if (!el) return;

  const baseX = getComputedStyle(el).transform.includes("matrix") ? "0vw" : el.style.left || "0vw";
  const baseY = "0vh"; // adaptat pentru `translateY`

  floatingItems.push({
    el,
    baseX,
    baseY,
    amplitude: item.amplitude,
    speed: item.speed,
    rotationSpeed: item.rotationSpeed,
    phase: Math.random() * Math.PI * 2,
    active: false // va fi true doar dacă e în viewport
  });
});

let startTime = performance.now();

function animateFloating(time) {
  const t = time - startTime;

  floatingItems.forEach(item => {
    if (!item.active) return;

    const offsetY = Math.sin(t * item.speed + item.phase) * item.amplitude;
    const angle = t * item.rotationSpeed;

    item.el.style.transform = `
      translateX(${item.baseX}) 
      translateY(calc(${item.baseY} + ${offsetY}vh)) 
      rotate(${angle}deg)
    `;
  });

  requestAnimationFrame(animateFloating);
}

requestAnimationFrame(animateFloating);

// 🧠 Observer pentru activare/dezactivare individuală
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const item = floatingItems.find(f => f.el === entry.target);
    if (item) {
      item.active = entry.isIntersecting;
    }
  });
}, { threshold: 0.3 });

floatingItems.forEach(item => observer.observe(item.el));



  const titluri = {
    t1: "poze/wet_look_eye.jpg",
    t2: "poze/cat_eye_kim_kardashian.jpg",
    t3: "poze/barbiedollkk.jpg",
    t4: "poze/eye.jpeg",
    t5: "poze/foxy_eyelashescut.jpg",
    t6: "poze/1d.jpg",
    t7: "poze/2d.jpg",
    t8: "poze/3d.jpg",
    t9: "poze/barbiedoll.jpg",
    t10: "poze/foxy.jpg"
  };

  Object.keys(titluri).forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener("click", () => {
      const img = document.getElementById("poza_cerc");
   gsap.to(img, {
    rotationY: -90,
    opacity: 0.5,
    duration: 0.5,
    ease: "power2.in",
    onComplete: () => {
      img.onload = () => {
        gsap.fromTo(img,
          {
            rotationY: 90,
            opacity: 0.5,
          },
          {
            rotationY: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
          }
        );
      };
      img.src = titluri[id];
    }
  });

      
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  const linie = document.getElementById("linie_sub");
  const trg=document.getElementsByClassName("galerie")[0];

  ScrollTrigger.create({
    trigger:trg,
    start: "top 60%",
    end: "bottom 40%",
    onEnter: () => {
      linie.classList.add('active-underline');
    },
    onLeave: () => {
      linie.classList.remove('active-underline');
    },
    onEnterBack: () => {
      linie.classList.add('active-underline');
    },
    onLeaveBack: () => {
      linie.classList.remove('active-underline');
    }
  });
});





