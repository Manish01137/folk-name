/*------------------------------------------------
    ADVANCED GSAP CURSOR + RING + MAGNETIC EFFECT
------------------------------------------------*/

const cursor = document.querySelector(".cursor");
const ring = document.querySelector(".cursor-ring");

let ringX = 0, ringY = 0;

/* MAIN CURSOR FOLLOW */
document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power3.out"
    });

    ringX = e.clientX;
    ringY = e.clientY;
});

/* OUTER RING FOLLOW (DELAY) */
gsap.ticker.add(() => {
    gsap.to(ring, {
        x: ringX,
        y: ringY,
        duration: 0.25,
        ease: "power3.out"
    });
});

/* HOVER EFFECT */
document.querySelectorAll("a, button, .magnetic, input, label").forEach((item) => {

    item.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            scale: 2,
            backgroundColor: "rgba(255,79,79,0.6)",
            duration: 0.2
        });

        gsap.to(ring, {
            scale: 1.7,
            opacity: 0.45,
            duration: 0.25
        });
    });

    item.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: "rgba(255,79,79,1)",
            duration: 0.2
        });

        gsap.to(ring, {
            scale: 1,
            opacity: 1,
            duration: 0.25
        });
    });

});


/*------------------------------------------------
    MAGNETIC HOVER EFFECT
------------------------------------------------*/
document.querySelectorAll(".magnetic").forEach((el) => {
    const strength = 0.35;

    el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        gsap.to(el, {
            x: x * strength,
            y: y * strength,
            duration: 0.35,
            ease: "power3.out"
        });
    });

    el.addEventListener("mouseleave", () => {
        gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.45,
            ease: "power4.out"
        });
    });
});


/*------------------------------------------------
    HERO TEXT ANIMATION
------------------------------------------------*/
gsap.from(".hero-title", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
});

gsap.from(".gradient-text", {
    y: 90,
    opacity: 0,
    duration: 1.4,
    delay: 0.1,
    ease: "power4.out",
});

gsap.from(".hero-subtext", {
    y: 60,
    opacity: 0,
    duration: 1.2,
    delay: 0.25,
    ease: "power3.out",
});

gsap.from(".hero-buttons", {
    y: 40,
    opacity: 0,
    duration: 1.1,
    delay: 0.4,
    ease: "power3.out",
});


/*------------------------------------------------
    FLOATING SHAPES
------------------------------------------------*/
gsap.to(".shape1", {
    y: 50,
    rotate: 8,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

gsap.to(".shape2", {
    y: -40,
    rotate: -6,
    duration: 7,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

gsap.to(".shape3", {
    y: 60,
    rotate: 5,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});


/*------------------------------------------------
    SERVICE CARDS REVEAL
------------------------------------------------*/
gsap.utils.toArray(".service-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reset"
        },
        y: 50,
        opacity: 0,
        duration: 1.1,
        delay: i * 0.12,
        ease: "power3.out",
    });
});


/*------------------------------------------------
    HAMBURGER MENU FIXED
------------------------------------------------*/
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobileNav.classList.toggle("active");
    });
}


/*------------------------------------------------
    WHY SECTION + OTHER SECTION REVEALS
------------------------------------------------*/
gsap.from(".why-title", {
    y: 60,
    opacity: 0,
    duration: 1.3,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".why-section",
        start: "top 85%"
    }
});

gsap.utils.toArray(".stat-box").forEach((box, i) => {
    gsap.from(box, {
        y: 40,
        opacity: 0,
        delay: i * 0.12,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: box,
            start: "top 85%"
        }
    });
});

gsap.utils.toArray(".why-card").forEach((card, i) => {
    gsap.from(card, {
        y: 60,
        opacity: 0,
        delay: i * 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: card,
            start: "top 90%"
        }
    });
});


/*------------------------------------------------
    COUNT UP
------------------------------------------------*/
gsap.utils.toArray(".count").forEach((el) => {
    const final = +el.dataset.count;

    gsap.fromTo(
        el,
        { innerText: 0 },
        {
            innerText: final,
            duration: 2,
            ease: "power1.out",
            snap: { innerText: 1 },
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
                once: true
            },
            onUpdate: () => {
                el.innerText = Math.floor(el.innerText);
            }
        }
    );
});


/*------------------------------------------------
    PROJECT CARDS
------------------------------------------------*/
gsap.utils.toArray(".project-card").forEach((card, i) => {
    gsap.from(card, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        delay: i * 0.15,
        ease: "power3.out",
        scrollTrigger: {
            trigger: card,
            start: "top 90%",
        }
    });
});



/*------------------------------------------------
    PRICING CARDS
------------------------------------------------*/
gsap.utils.toArray(".pricing-card").forEach((card, i) => {
    gsap.from(card, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        delay: i * 0.15,
        ease: "power3.out",
        scrollTrigger: {
            trigger: card,
            start: "top 90%",
        }
    });
});


/*------------------------------------------------
    FAQ
------------------------------------------------*/
gsap.utils.toArray(".faq-item").forEach((item, i) => {
    gsap.from(item, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        delay: i * 0.12,
        ease: "power3.out",
        scrollTrigger: {
            trigger: item,
            start: "top 90%"
        }
    });
});


/*------------------------------------------------
    CTA
------------------------------------------------*/
gsap.from(".cta-title", {
    opacity: 0,
    y: 60,
    duration: 1.3,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".cta-section",
        start: "top 85%"
    }
});

gsap.from(".cta-subtitle", {
    opacity: 0,
    y: 40,
    duration: 1.0,
    delay: 0.15,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".cta-section",
        start: "top 85%"
    }
});

gsap.utils.toArray(".cta-box").forEach((box, i) => {
    gsap.from(box, {
        opacity: 0,
        y: 40,
        duration: 1.1,
        delay: i * 0.15,
        ease: "power3.out",
        scrollTrigger: {
            trigger: box,
            start: "top 90%"
        }
    });
});


/*------------------------------------------------
    PARALLAX MOUSE MOVEMENT
------------------------------------------------*/
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    gsap.to(".shape1", { x: x * 0.8, y: y * 0.6, duration: 1.2 });
    gsap.to(".shape2", { x: -x * 0.6, y: -y * 0.4, duration: 1.2 });
    gsap.to(".shape3", { x: x * 0.4, y: -y * 0.5, duration: 1.2 });
});


/*------------------------------------------------
    PARTICLE CANVAS BACKGROUND
------------------------------------------------*/
(function initParticles() {
    const canvas = document.getElementById("hero-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let W = canvas.width = canvas.offsetWidth;
    let H = canvas.height = canvas.offsetHeight;

    const DPR = window.devicePixelRatio || 1;

    canvas.width = Math.floor(W * DPR);
    canvas.height = Math.floor(H * DPR);

    canvas.style.width = W + "px";
    canvas.style.height = H + "px";

    ctx.scale(DPR, DPR);

    const PARTICLE_COUNT = Math.floor(Math.min(120, W * H / 30000));
    const particles = [];

    function rand(min, max) {
        return Math.random() * (max - min) + min;
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
            x: rand(0, W),
            y: rand(0, H),
            r: rand(2.5, 5.5),
            vx: rand(-0.25, 0.25),
            vy: rand(-0.25, 0.25),
            alpha: rand(0.25, 0.8)
        });
    }

    function resize() {
        W = canvas.offsetWidth;
        H = canvas.offsetHeight;

        canvas.width = Math.floor(W * DPR);
        canvas.height = Math.floor(H * DPR);

        canvas.style.width = W + "px";
        canvas.style.height = H + "px";

        ctx.scale(DPR, DPR);
    }

    window.addEventListener("resize", resize);

    function animate() {
        ctx.clearRect(0, 0, W, H);

        for (let p of particles) {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = W;
            if (p.x > W) p.x = 0;
            if (p.y < 0) p.y = H;
            if (p.y > H) p.y = 0;

            ctx.beginPath();
            ctx.fillStyle = `rgba(255,79,79,${p.alpha})`;
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
        }

        requestAnimationFrame(animate);
    }

    animate();
})();
