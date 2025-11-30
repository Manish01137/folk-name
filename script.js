/*------------------------------------------------
    ADVANCED GSAP CURSOR + RING + MAGNETIC EFFECT
------------------------------------------------*/

// SELECTOR FOR MAIN CURSOR + OUTER RING
const cursor = document.querySelector(".cursor");
const ring = document.querySelector(".cursor-ring");

let ringX = 0, ringY = 0;

/*------------------------------------------------
    MAIN CURSOR FOLLOW (NO LAG)
------------------------------------------------*/
document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.12,
        ease: "power3.out"
    });

    ringX = e.clientX;
    ringY = e.clientY;
});

/*------------------------------------------------
    OUTER RING FOLLOW (SMOOTH DELAY)
------------------------------------------------*/
gsap.ticker.add(() => {
    gsap.to(ring, {
        x: ringX,
        y: ringY,
        duration: 0.25,
        ease: "power3.out"
    });
});


/*------------------------------------------------
    CURSOR HOVER EFFECT (GROW + GLOW)
------------------------------------------------*/
document.querySelectorAll("a, button, .magnetic").forEach((item) => {

    item.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            scale: 2,
            backgroundColor: "rgba(255,0,200,0.5)",
            duration: 0.2
        });

        gsap.to(ring, {
            scale: 1.8,
            opacity: 0.5,
            duration: 0.2
        });
    });

    item.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: "rgba(255,0,200,1)",
            duration: 0.2
        });

        gsap.to(ring, {
            scale: 1,
            opacity: 1,
            duration: 0.2
        });
    });

});


/*------------------------------------------------
    IMPROVED MAGNETIC HOVER EFFECT
------------------------------------------------*/
document.querySelectorAll(".magnetic").forEach((el) => {
    const strength = 0.4; // attraction power

    el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        gsap.to(el, {
            x: x * strength,
            y: y * strength,
            duration: 0.3,
            ease: "power3.out"
        });
    });

    el.addEventListener("mouseleave", () => {
        gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.35,
            ease: "power3.out"
        });
    });
});


/*------------------------------------------------
    HERO TEXT ANIMATIONS
------------------------------------------------*/
gsap.from(".hero-title", {
    y: 80,
    opacity: 0,
    duration: 1.4,
    ease: "power4.out",
});

gsap.from(".gradient-text", {
    y: 80,
    opacity: 0,
    duration: 1.6,
    delay: 0.2,
    ease: "power4.out",
});

gsap.from(".hero-subtext", {
    y: 60,
    opacity: 0,
    duration: 1.2,
    delay: 0.4,
    ease: "power3.out",
});


/*------------------------------------------------
    FLOATING SHAPES
------------------------------------------------*/
gsap.to(".shape1", {
    y: 40,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

gsap.to(".shape2", {
    y: -30,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

gsap.to(".shape3", {
    y: 50,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});


/*------------------------------------------------
    SERVICE CARD REVEAL
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
        duration: 1.2,
        delay: i * 0.15,
        ease: "power3.out",
    });
});

document.querySelector(".hamburger").onclick = function () {
    this.classList.toggle("active");
    document.querySelector(".mobile-nav").classList.toggle("active");
}


// Title Animation
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

// Stats pop-in animation
gsap.utils.toArray(".stat-box").forEach((box, i) => {
    gsap.from(box, {
        y: 40,
        opacity: 0,
        delay: i * 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: box,
            start: "top 85%"
        }
    });
});

// Feature card animation
gsap.utils.toArray(".why-card").forEach((card, i) => {
    gsap.from(card, {
        y: 60,
        opacity: 0,
        delay: i * 0.18,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: card,
            start: "top 90%"
        }
    });
});



// COUNT-UP EFFECT FOR STATS
gsap.utils.toArray(".count").forEach((el) => {
    let finalValue = +el.dataset.count;

    gsap.fromTo(
        el,
        { innerText: 0 },
        {
            innerText: finalValue,
            duration: 2,
            ease: "power1.out",
            snap: { innerText: 1 },
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
                once: true   // only runs once
            },
            onUpdate: function () {
                el.innerText = Math.floor(el.innerText);
            }
        }
    );
});
