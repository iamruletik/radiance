"use strict"; // fix lenis in safari

console.log("Made by Shoreditch Design");
let isMobile = window.matchMedia("(max-width: 568px)");
let topContainer = document.querySelector(".top-element");
var isPreloaderReady = false;
var animSrcs = [];
var animWraps = [];
var animTmlns = [];
var mainTimeline = gsap.timeline();
var scrollTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-animation-content",
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
    pin: "#main-lottie-container",
  },
  //onUpdate: () => console.log("animated")
});
var scrollTextContent = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-animation-content",
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
    pin: "#maincontentpinner",
  },
});
scrollTimeline.pause();
scrollTextContent.pause();
mainTimeline.pause();
const lenis = new Lenis({
  lerp: 0.04,
  wheelMultiplier: 1.35,
  gestureOrientation: "vertical",
  smoothWheel: true,
  smoothTouch: false,
  syncTouchLerp: 0.03,
  touchMultiplier: 2,
  autoResize: true,
});

if (isMobile.matches) {
  animSrcs[0] =
    "https://uploads-ssl.webflow.com/655239d611597a961541f426/655239d611597a961541f46e_intro%20mobile.json";
  animSrcs[1] =
    "https://uploads-ssl.webflow.com/655239d611597a961541f426/655239d611597a961541f470_first-part-1-mobile.json";
  animSrcs[2] =
    "https://uploads-ssl.webflow.com/655239d611597a961541f426/655239d611597a961541f46f_first-part-2-mobile.json";
  //console.log("Not Desktop");
} else {
  animSrcs[0] =
    "https://uploads-ssl.webflow.com/655239d611597a961541f426/655239d611597a961541f46c_intro.json";
  animSrcs[1] =
    "https://uploads-ssl.webflow.com/655239d611597a961541f426/655bb4663f0a2c0e4741ca6b_first-part-1-desktop-update.json";
  animSrcs[2] =
    "https://uploads-ssl.webflow.com/655239d611597a961541f426/655239d611597a961541f46b_first-part-2-desktop.json";
  //console.log("Desktop");
}

/*Timeline for main text content*/
scrollTextContent
  .to("#elevating-humanity", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to(
    "#prev-slide",
    {
      y: 0,
      duration: 0.5,
      ease: "power2.inOut",
    },
    "<",
  )
  .to("#we-are-impact", {
    autoAlpha: 1,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#we-are-impact", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#ideas-that-matter", {
    autoAlpha: 1,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#ideas-that-matter", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#we-work-with", {
    autoAlpha: 1,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#we-work-with", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#future-vision", {
    autoAlpha: 1,
    duration: 1,
    ease: "power1.Out",
  })
  .to("#future-vision", {
    autoAlpha: 0,
    duration: 1,
    ease: "power1.Out",
  })
  .to("#the-divine", {
    autoAlpha: 1,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#the-divine", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#mankind-on-journey", {
    autoAlpha: 1,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#mankind-on-journey", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#darkness-light", {
    autoAlpha: 1,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#darkness-light", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#humanity-1000", {
    autoAlpha: 1,
    duration: 1,
    ease: "power1.Out",
  })
  .to("#humanity-1000", {
    autoAlpha: 0,
    duration: 1,
    ease: "power1.Out",
  })
  .to("#our-approach", {
    autoAlpha: 1,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#our-approach", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#find-fund-support", {
    autoAlpha: 1,
    duration: 1,
    ease: "power1.Out",
  })
  .to("#find-fund-support", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#journey", {
    autoAlpha: 1,
    duration: 1,
    ease: "power1.Out",
  })
  .to("#journey", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to(
    "#step1",
    {
      autoAlpha: 1,
      duration: 0.5,
      ease: "power1.Out",
    },
    "+=1",
  )
  .to("#step1", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#step2", {
    autoAlpha: 1,
    duration: 1,
    ease: "power1.Out",
  })
  .to("#step2", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#step3", {
    autoAlpha: 1,
    duration: 1,
    ease: "power1.Out",
  })
  .to("#step3", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#step4", {
    autoAlpha: 1,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#step4", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#step5", {
    autoAlpha: 1,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#step5", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#step6", {
    autoAlpha: 1,
    duration: 1,
    ease: "power1.Out",
  })
  .to("#step6", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.Out",
  })
  .to("#step7", {
    autoAlpha: 1,
    duration: 1,
    ease: "power1.Out",
  })
  .to("#step7", {
    autoAlpha: 0,
    duration: 1,
    ease: "power1.Out",
  })
  .to("#coco-way", {
    autoAlpha: 1,
    duration: 1,
    ease: "power1.Out",
  })
  .to("#coco-way", {
    autoAlpha: 0,
    duration: 1,
    ease: "power1.Out",
  })
  .to("#divine-guidance", {
    autoAlpha: 1,
    duration: 1,
    ease: "power1.Out",
  })
  .to("#divine-guidance", {
    autoAlpha: 0,
    duration: 1,
    ease: "power1.Out",
  })
  .to("#educational-aspect", {
    autoAlpha: 1,
    duration: 1,
    ease: "power1.Out",
  })
  .to(
    ".cue-button",
    {
      y: 200,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.1,
    },
    "<-1",
  )
  .to(
    ".keep-scrolling",
    {
      opacity: 1,
      ease: "power2.inOut",
    },
    "<+1",
  )
  .to(
    ".keep-scrolling",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    ">+1",
  );
/*Timeline for main text content*/

animWraps[0] = lottie.loadAnimation({
  container: document.querySelector(".lot1"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: animSrcs[0],
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});
animWraps[1] = lottie.loadAnimation({
  container: document.querySelector(".lot2"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: animSrcs[1],
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});
animWraps[2] = lottie.loadAnimation({
  container: document.querySelector(".lot3"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: animSrcs[2],
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});
animWraps[0].addEventListener("DOMLoaded", function () {
  //console.log("Intro Loaded");

  let playhead = { frame: 0 };
  let animation = gsap
    .timeline()
    .to(playhead, {
      frame: animWraps[0].totalFrames - 1,
      ease: "none",
      duration: 1,
      onUpdate: () => animWraps[0].goToAndStop(playhead.frame, true),
    })
    .set(".lot1", { autoAlpha: 0 })
    .set(".lot2", { display: "block" });
  mainTimeline.add(animation);
  ScrollTrigger.sort();
  ScrollTrigger.refresh();
});

animWraps[2].addEventListener("DOMLoaded", function () {
  //console.log("Third Loaded");

  lenis.scrollTo(0, { immediate: true, lock: true });

  /* Check for anchor*/
  var hash = window.location.hash;
  if (hash == "#team") {
    lenis.scrollTo("#team");
  } else if (hash == "#team-mobile") {
    lenis.scrollTo("#team-mobile");
  }
  /* Check for anchor*/

  //console.log(document.documentElement.scrollTop || document.body.scrollTop);
  ScrollTrigger.refresh();
  let playhead = { frame: 0 },
    playhead2 = { frame: 0 };
  scrollTimeline
    .to(playhead, {
      frame: animWraps[1].totalFrames - 1,
      ease: "none",
      onUpdate: () => animWraps[1].goToAndStop(playhead.frame, true),
    })
    .set(".lot2", { autoAlpha: 0 })
    .set(".lot3", { display: "block" })
    .to(playhead2, {
      frame: animWraps[2].totalFrames - 1,
      ease: "none",
      onUpdate: () => animWraps[2].goToAndStop(playhead2.frame, true),
    });
  ScrollTrigger.sort();
  ScrollTrigger.refresh();
  loadPreloader();
});

animWraps[1].addEventListener("DOMLoaded", function () {
  //console.log("Second Loaded");
});

/***************************************Main Function**************************/

window.addEventListener("DOMContentLoaded", (event) => {
  //console.log("Full Site");
  connectLenis();
  animateHeroLinks();
  preloaderListener();

  function preloaderListener() {
    const readyListener = () => {
      if (isPreloaderReady) {
        //console.log("Preloader Off");

        /* Cue Buttons*/
        let cueButtonNext = document.querySelector("#next-slide");
        let cueButtonPrev = document.querySelector("#prev-slide");
        cueButtonNext.classList.remove("slidetranslatey");
        cueButtonPrev.classList.remove("slidetranslatey");
        /* Cue Buttons*/

        mainTimeline.add(scrollTimeline, "<");
        mainTimeline.add(scrollTextContent, "<");
        mainTimeline.play();
        showSecondAnimation();
        showThirdAnimation();
      } else {
        return setTimeout(readyListener, 50);
      }
    };
    readyListener();
  }
});

window.addEventListener("resize", (event) => {});

/***************************************Main Function**************************/

/* Functions */

function logoScrollToTop() {
  let cocoLogo = document.querySelector(".logo-layout");

  cocoLogo.addEventListener("click", function () {
    lenis.scrollTo(0);
  });
}

function connectLenis() {
  /*Setting up Lenis*/
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  function connectToScrollTrigger() {
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }
  connectToScrollTrigger();
  /*Setting up Lenis*/
}

function loadPreloader() {
  let preloaderWrapper = document.querySelector(".preloader-lottie-wrapper");
  let preloaderContainer = document.querySelector(".preloader-container");
  let preloaderAnimation = bodymovin.loadAnimation({
    container: preloaderWrapper,
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "https://uploads-ssl.webflow.com/655239d611597a961541f426/655239d611597a961541f455_preloader-white.json",
  });

  preloaderAnimation.onComplete = function () {
    gsap.to(preloaderContainer, {
      autoAlpha: 0,
      duration: 0.5,
      ease: "power1.inOut",
      onComplete: () => {
        isPreloaderReady = true;
        preloaderContainer.remove();
      },
    });
  };
}

function showSecondAnimation() {
  let animationPath =
    "https://uploads-ssl.webflow.com/655239d611597a961541f426/655239d611597a961541f458_second%20part%20desktop.json";

  let mql = window.matchMedia("(max-width: 568px)");
  if (mql.matches) {
    animationPath =
      "https://uploads-ssl.webflow.com/655239d611597a961541f426/655239d611597a961541f459_second-part-mobile.json";
  }

  let animationWrapper = document.querySelector("#lottie-part2"),
    playhead = { frame: 0 },
    animation = lottie.loadAnimation({
      container: animationWrapper,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: animationPath,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });

  animation.addEventListener("DOMLoaded", function () {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#ourvision",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          pin: "#second-pinner",
        },
      })
      .to(playhead, {
        frame: animation.totalFrames - 1,
        ease: "none",
        duration: 95,
        onUpdate: () => animation.goToAndStop(playhead.frame, true),
      })
      .from(
        ".drive-change-2",
        {
          opacity: 0,
          y: -100,
          ease: "power1.Out",
          duration: 20,
        },
        "<",
      )
      .to(
        ".drive-change-2",
        {
          opacity: 0,
          ease: "power1.Out",
          duration: 20,
        },
        ">",
      );
  });
}

function showThirdAnimation() {
  let animationPath =
    "https://uploads-ssl.webflow.com/655239d611597a961541f426/655239d611597a961541f45b_second%20part%202%20desktop.json";

  let mql = window.matchMedia("(max-width: 568px)");
  if (mql.matches) {
    animationPath =
      "https://uploads-ssl.webflow.com/655239d611597a961541f426/655239d611597a961541f45a_second%20part%202%20mobile.json";
  }

  let animationWrapper = document.querySelector("#lottie-part3"),
    playhead = { frame: 0 },
    animation = lottie.loadAnimation({
      container: animationWrapper,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: animationPath,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });

  animation.addEventListener("DOMLoaded", function () {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#purpose",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          id: "tl",
          pin: "#third-pinner",
          //markers: { indent: 200 }
        },
      })
      .to(playhead, {
        frame: animation.totalFrames - 1,
        ease: "none",
        duration: 95,
        onUpdate: () => animation.goToAndStop(playhead.frame, true),
      })
      .from(
        ".purpose-lovers-2",
        {
          opacity: 0,
          y: 100,
          ease: "power1.Out",
          duration: 20,
        },
        "-=50%",
      );
  });
}

function animateHeroLinks() {
  let heroLinks = document.querySelectorAll(".hero-link");
  heroLinks.forEach((herolink) => {
    const templink = herolink.querySelector("*");
    templink.style.textShadow = "0 1rem";
    herolink.addEventListener("mouseenter", () => {
      gsap.to(templink, {
        yPercent: -101,
        overwrite: true,
        ease: "circ.inOut",
        overwrite: true,
      });
    });

    herolink.addEventListener("mouseleave", () => {
      gsap.set(templink, {
        yPercent: 0,
        overwrite: true,
      });
    });
  });
}

function splideConnect() {
  //Temporal Splide Connect
  if (window.innerWidth >= 998) {
    $(".board_item").on("mouseenter", function () {
      $(".board_item").removeClass("active");
      $(".board_item").find(".board_details").removeClass("active");
      var $this = $(this);
      $this.addClass("active");

      setTimeout(function () {
        $this.find(".board_details").addClass("active");
      }, 10);
    });
  }

  let perPageValue = window.innerWidth < 769 ? 1.25 : 6;
  let Isloop = window.innerWidth < 769 ? "slide" : "none";
  $(".splide").each(function () {
    new Splide(this, {
      type: Isloop,
      perPage: perPageValue,
      gap: "32px",
      autoplay: false,
      interval: 1000,
      pauseOnHover: true,
      arrows: true,
      pagination: true,
      focus: "left",
      keyboard: true,
      drag: true,
      perMove: 1,
      easing: "linear",
      speed: 350,
    }).mount();
  });
  //Temporal Splide Connect
}
