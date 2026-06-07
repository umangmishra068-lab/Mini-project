// Locomotive + ScrollTrigger Setup
function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });

  // Sync ScrollTrigger with LocomotiveScroll
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

// Timeline Animations
const tl = gsap.timeline();

tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  opacity: 0,
  duration: 0.6,
  delay: 0.5
});

tl.from(".line1-part1, .line h2", {
  opacity: 0,
  onStart: function () {
    const h5timer = document.querySelector(".line1-part1 h5");
    let grow = 0;
    setInterval(function () {
      if (grow < 100) {
        h5timer.innerHTML = grow++;
      } else {
        h5timer.innerHTML = grow;
      }
    }, 40);
  }
});

tl.to("#loader", {
  opacity: 0,
  duration: 0.2,
  delay: 4
});

tl.from("#page1", {
  y: 1600,
  delay: 0.2,
  opacity: 0,
  ease: Power4.easeOut
});

tl.to("#loader", {
  display: "none"
});

tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
  y: 150,
  stagger: 0.25,
  opacity: 0
});

tl.from("#hero1, #page2", {
  opacity: 0
}, "-=1.2");

tl.from("#nav", {
  opacity: 0
});

// Cursor Animation
const cursor = document.querySelector("#crsr");
document.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.clientX,
    y: dets.clientY,
    stagger: 0.25
  });
});

// Video Cursor + Controls
const videoContainer = document.querySelector("#video-container");
const video = document.querySelector("#video-container video");
const img = document.querySelector("#video-container img");
const playIcon = document.querySelector("#video-cursour");

// videoContainer.addEventListener("mousemove", function (dets) {
//   gsap.to("#video-cursour", {
//     x: dets.clientX - 570,
//     y: dets.clientY - 320,
//     duration: 0.3
//   });
// });
 
let clickCount = 0;

videoContainer.addEventListener("click", function () {
    clickCount++;

    setTimeout(() => {
        if (clickCount === 1) {
            // Single click → play
            video.play("/project video.mp4");
            video.style.opacity = 1;
            img.style.opacity = 0;
            playIcon.style.opacity = 0;
        } else if (clickCount === 2) {
            // Double click → pause
            video.pause("./project video.mp4");
            video.style.opacity = 0;
            img.style.opacity = 1;
        }

        clickCount = 0;
    }, 250);
});


// Shery Animation
function sheryAnimation() {
  Shery.imageEffect(".image-div", {
    style: 5,
    gooey: true,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: 0.75, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7241195453907675 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.23, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.5, range: [0, 10] },
      metaball: { value: 0.33, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0.01, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] }
    }
  });
}
