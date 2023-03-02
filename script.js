function normalPool(o){var r=0;do{var a=Math.round(normal({mean:o.mean,dev:o.dev}));if(a<o.pool.length&&a>=0)return o.pool[a];r++}while(r<100)}function randomNormal(o){if(o=Object.assign({mean:0,dev:1,pool:[]},o),Array.isArray(o.pool)&&o.pool.length>0)return normalPool(o);var r,a,n,e,l=o.mean,t=o.dev;do{r=(a=2*Math.random()-1)*a+(n=2*Math.random()-1)*n}while(r>=1);return e=a*Math.sqrt(-2*Math.log(r)/r),t*e+l}

const NUM_PARTICLES = 600;
const PARTICLE_SIZE = 0.5; // View heights
const SPEED = 20000; // Milliseconds

let particles = [];

function rand(low, high) {
  return Math.random() * (high - low) + low;
}

function createParticle(canvas) {
  const colour = {
    r: 255,
    g: randomNormal({ mean: 125, dev: 20 }),
    b: 50,
    a: rand(0, 1),
  };
  return {
    x: -2,
    y: -2,
    diameter: Math.max(0, randomNormal({ mean: PARTICLE_SIZE, dev: PARTICLE_SIZE / 2 })),
    duration: randomNormal({ mean: SPEED, dev: SPEED * 0.1 }),
    amplitude: randomNormal({ mean: 16, dev: 2 }),
    offsetY: randomNormal({ mean: 0, dev: 10 }),
    arc: Math.PI * 2,
    startTime: performance.now() - rand(0, SPEED),
    colour: `rgba(${colour.r}, ${colour.g}, ${colour.b}, ${colour.a})`,
  }
}

function moveParticle(particle, canvas, time) {
  const progress = ((time - particle.startTime) % particle.duration) / particle.duration;
  return {
    ...particle,
    x: progress,
    y: ((Math.sin(progress * particle.arc) * particle.amplitude) + particle.offsetY),
  };
}

function drawParticle(particle, canvas, ctx) {
  canvas = document.getElementById('particle-canvas');
  const vh = canvas.height / 100;

  ctx.fillStyle = particle.colour;
  ctx.beginPath();
  ctx.ellipse(
    particle.x * canvas.width,
    particle.y * vh + (canvas.height / 2),
    particle.diameter * vh,
    particle.diameter * vh,
    0,
    0,
    2 * Math.PI
  );
  ctx.fill();
}

function draw(time, canvas, ctx) {
  // Move particles
  particles.forEach((particle, index) => {
    particles[index] = moveParticle(particle, canvas, time);
  })

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the particles
  particles.forEach((particle) => {
    drawParticle(particle, canvas, ctx);
  })

  // Schedule next frame
  requestAnimationFrame((time) => draw(time, canvas, ctx));
}

function initializeCanvas() {
  let canvas = document.getElementById('particle-canvas');
  canvas.width = canvas.offsetWidth * window.devicePixelRatio;
  canvas.height = canvas.offsetHeight * window.devicePixelRatio;
  let ctx = canvas.getContext("2d");

  window.addEventListener('resize', () => {
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx = canvas.getContext("2d");
  })

  return [canvas, ctx];
}

function startAnimation() {
  const [canvas, ctx] = initializeCanvas();

  // Create a bunch of particles
  for (let i = 0; i < NUM_PARTICLES; i++) {
    particles.push(createParticle(canvas));
  }
  
  requestAnimationFrame((time) => draw(time, canvas, ctx));
};

// Start animation when document is loaded
(function () {
  if (document.readystate !== 'loading') {
    startAnimation();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      startAnimation();
    })
  }
}());


const btn = document.getElementById("btn");
function check(){
    console.log("Cos tam klika");
}
btn.addEventListener("click",check);



    const l = "login";
    const p = "password";

    const login = document.getElementById("login");
    const password = document.getElementById("password");
    
    btn.addEventListener("click",function(){
        const loginValue=login.value;
        const passwordValue=password.value;
        if(loginValue.trim().length === 0 || passwordValue.trim().length === 0){
          let myContainer = document.getElementsByClassName("container");
            const popUp1 = 'popUpDiv';
            const isExisting = document.getElementById(popUp1);
            if(isExisting)
            {
              return;
            }
            //window.alert("Nieprawidłowy login lub hasło!");
            const newDiv1 = document.createElement("div");
            newDiv1.setAttribute("id","popUpDiv1");
            newDiv1.style.width="400px";
            newDiv1.style.height="100px";
            newDiv1.style.zIndex="999";
            newDiv1.style.backgroundColor="lightgrey";
            newDiv1.textContent="Wprowadź dane!";
            newDiv1.style.textAlign="center";
            newDiv1.style.display="flex";
            newDiv1.style.justifyContent="center";
            newDiv1.style.justifyItems="center";
            newDiv1.style.alignItems="center";
            newDiv1.style.borderRadius="10px";
            newDiv1.style.boxShadow="2px 2px 5px 2px rgba(0, 0, 0, 0.3)";
            newDiv1.style.left="50%";
            newDiv1.style.transform="translateY(-50%)";
            newDiv1.style.top="35%";
            newDiv1.style.transform="translateX(-50%)";
            newDiv1.style.position="fixed";
            newDiv1.style.opacity=".9";
            myContainer[0].appendChild(newDiv1);
            setTimeout(function() {
              newDiv1.remove();
            }, 1500);
            return;
        }
        
        
        if(loginValue!==l || p!==passwordValue){
            let myContainer = document.getElementsByClassName("container");
            const popUp = 'popUpDiv';
            const isExisting = document.getElementById(popUp);
            if(isExisting)
            {
              return;
            }
            //window.alert("Nieprawidłowy login lub hasło!");
            const newDiv = document.createElement("div");
            newDiv.setAttribute("id","popUpDiv");
            newDiv.style.width="400px";
            newDiv.style.height="100px";
            newDiv.style.zIndex="999";
            newDiv.style.backgroundColor="lightgrey";
            newDiv.textContent="Nieprawidłowy login lub hasło!";
            newDiv.style.textAlign="center";
            newDiv.style.display="flex";
            newDiv.style.justifyContent="center";
            newDiv.style.justifyItems="center";
            newDiv.style.alignItems="center";
            newDiv.style.borderRadius="10px";
            newDiv.style.boxShadow="2px 2px 5px 2px rgba(0, 0, 0, 0.3)";
            newDiv.style.left="50%";
            newDiv.style.transform="translateY(-50%)";
            newDiv.style.top="35%";
            newDiv.style.transform="translateX(-50%)";
            newDiv.style.position="fixed";
            newDiv.style.opacity=".9";
            myContainer[0].appendChild(newDiv);
            setTimeout(function() {
              newDiv.remove();
            }, 3000);
            return;
        }
        
        if(loginValue==l && p==passwordValue){
             window.alert("Pomyślnie zalogowano!");
             location.href="./PROJEKTY/OverThinker/index.html";

            return;
        }

           
    });


