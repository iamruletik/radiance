/*****************************************************Main Function***************************************************/
const lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 0.5,
    infinite: false,
    gestureOrientation: "vertical",
    normalizeWheel: false,
    smoothTouch: false,
    syncTouchLerp: 1,
    touchMultiplier: 0.1,
    autoResize: true
});

lenis.stop();

runPreloader();

window.addEventListener("DOMContentLoaded", (event) => {
    connectLenis();

    //showHeroAnimation();

    activateHalo();
    showPresentationAnimations();

    showRadianceBranding();
    showCurrentTime();

    showMainAnimation();
    showLettersAnimation();

    showDesktopMenu();
    showMobileMenu();

    showPortfolioAnimation();
    showMobileMatterJS();
    animateEmail();

    animateHeroLinks();

    activateAccordeon();

});

window.addEventListener("resize", (event) => { });


/*****************************************************Functions***************************************************/


function runPreloader() {

    let preloader = gsap.timeline({
        onComplete: () => {
            showHeroAnimation();
            lenis.start();
        }
    });

    preloader.to(".preloader-layout", {
        autoAlpha: 1,
        duration: 0.3
    });

    preloader.from("#preloader-loader", {
        textContent: 0,
        snap: { textContent: 1 },
        stagger: 1,
        duration: 1.5
    });

    preloader.to(".preloader-section", {
        autoAlpha: 0
    });
}


function connectLenis() {
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

    ScrollTrigger.config({ ignoreMobileResize: true });
    // Uncomment this if using GSAP ScrollTrigger
    //connectToScrollTrigger();
}


function showHeroAnimation() {

    let mainScreenAnimation = gsap.timeline();

    mainScreenAnimation.to(".header-section", {
        yPercent: 100
    });

    mainScreenAnimation.to(".fixed-holder", {
        autoAlpha: 1,
        duration: 0.6
    });

    mainScreenAnimation.to(
        ".splited-text",
        {
            autoAlpha: 1,
            yPercent: "20",
            duration: 0.5
        },
        "<"
    );

    mainScreenAnimation.to(".matter-js-mobile-letters", { autoAlpha: 1 });

    mainScreenAnimation.to(".letter-container", {
        yPercent: -100,
        stagger: { amount: 0.6 },
        ease: CustomEase.create(
            "custom",
            "M0,0 C0.11,0.494 0.112,0.726 0.238,0.852 0.37,0.984 0.504,1 1,1"
        )
    }, "<");

    mainScreenAnimation.to(
        ".default-text",
        {
            autoAlpha: 1,
            stagger: 0.1,
            ease: "power4.out"
        },
        "<"
    );


    gsap.to("#hero-screen", {
        scrollTrigger: {
            trigger: ".presentation-wrapper",
            start: "top 50%",
            end: "+=300",
            toggleActions: "restart none none reverse"
        },
        backgroundColor: "#000000"
    });



}

function showRadianceBranding() {
    // Console Branding
    const styles = [
        "color: #FFD73B",
        "font-size: 1em",
        "font-family: sans-serif",
        "padding: 10px 20px 20px 20px"
    ].join(";");
    console.log(
        "%cMade by Radiance Crew https://www.instagram.com/designbyradiance/",
        styles
    );
}

function showDesktopMenu() {
    const menu = document.querySelector(".menu-section");
    const menuButton = document.querySelector(".menu-button");
    const closeButton = document.querySelector(".close-menu-button");
    let menuLinks = document.querySelectorAll(".menu-anim-link");

    //console.log(menuLinks);

    gsap.set(menu, { autoAlpha: 0 });

    let menuAnimation = gsap.timeline({
        defaults: { duration: 0.4, ease: "power3.out" }
    });
    menuAnimation.pause();
    menuAnimation
        .to(menu, { autoAlpha: 1 })
        .from(".menu-background", { scale: 0 }, "<")
        .from(".menu-anim-link", { autoAlpha: 0, yPercent: -20 })
        .from(closeButton, { autoAlpha: 0 }, "<");

    menuLinks.forEach((element) => {
        element.addEventListener("click", (event) => {

            menuAnimation.reverse();
        }, true);
    });

    menuButton.addEventListener("click", (event) => {
        menuAnimation.play();
    });

    closeButton.addEventListener("click", (event) => {
        menuAnimation.reverse();
    });
}

function showMobileMenu() {
    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    const mobileMenu = document.querySelector(".mobile-menu");
    let menuLinks = document.querySelectorAll(".mobile-link");


    //console.log(menuLinks);
    var mobileSwitch = false;

    gsap.set(mobileMenu, { autoAlpha: 0 });

    let menuMobileAnimation = gsap.timeline({
        defaults: { duration: 0.6, ease: "power3.out" }
    });
    menuMobileAnimation.pause();
    menuMobileAnimation
        .to(mobileMenu, { autoAlpha: 1 })
        .to(mobileMenuButton.firstChild, { text: "CLOSE", duration: 0.4 })
        .from(
            ".mobile-link",
            { opacity: 0, yPercent: -20, stagger: { amount: 0.7 } },
            "<"
        );

    menuLinks.forEach((element) => {
        element.addEventListener("click", (event) => {

            menuMobileAnimation.reverse();
            mobileSwitch = !mobileSwitch;
        }, true);
    });

    mobileMenuButton.addEventListener("click", (event) => {
        if (mobileSwitch) {
            menuMobileAnimation.reverse();
            mobileSwitch = !mobileSwitch;
        } else {
            menuMobileAnimation.play();
            mobileSwitch = !mobileSwitch;
        }
    });
}

function activateAccordeon() {
    let cards = document.querySelectorAll(".card");
    const stagger = 0.5;
    const scaleMax = gsap.utils.mapRange(0, cards.length, 0.75, 1);
    let photoScale = 1.15;

    let mql = window.matchMedia("(max-width: 414px)");
    if (mql.matches) {
        photoScale = 1.7;
    }

    gsap.set(".card", {
        transformStyle: "preserve-3d",
        transformPerspective: 1920,
        z: 1
    });

    gsap.set(".mid", {
        transformOrigin: "center top",
        y: window.innerHeight,
        rotationX: 40,
        scale: 1.1
    });

    gsap.set(".team-background", {
        scale: 0.01 //вернуть photoscale
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".presentation-section",
            pin: ".presentation-wrapper",
            start: "top top",
            end: "bottom 80%",
            scrub: 0.7
            //markers: true,
        }
    });

    tl.to(".team-background", {
        scale: photoScale,
        ease: "power2.in"
    });

    tl.to(".presentation-section", {
        backgroundColor: "#FFD73B"
    });

    tl.to(".team-background", {
        scale: 1,
        ease: "power2.in"
    }, "<");

    tl.set(".first", {
        transformOrigin: "center top"
    });

    tl.to(".first", {
        rotationX: -40,
        y: -6,
        opacity: 0.7,
        ease: "power1.in",
        scale: 0.65
    });

    tl.to(
        ".mid",
        {
            scale: 1,
            ease: "power1.out",
            y: (index) => {
                return 2 * index;
            },
            rotationX: 0,
            stagger: {
                each: stagger
            }
        },
        "-=0.4"
    );

    tl.to(
        ".mid",
        {
            rotationX: -40,
            y: (index) => {
                return 12 * index;
            },
            opacity: (index) => {
                return scaleMax(index) + 0.1;
            },
            ease: "power1.in",
            scale: (index) => {
                return scaleMax(index);
            },
            stagger: {
                each: stagger
            }
        },
        "<+=0.5"
    );


    tl.to(".presentation-section", {
        backgroundColor: "#F5F4EE"
    }, "<+=1.25");
}

function showPresentationAnimations() {

    let mql = window.matchMedia("(max-width: 768px)");

    runningText();
    if (mql.matches) {
        secondMatterJSContainer();
    } else {
        showLottiePhysics();
    }
    animateLastCard();


    function runningText() {
        const infitext = gsap.utils.toArray(".infitext-one"),
            infitext2 = gsap.utils.toArray(".infitext-two"),
            infiOne = horizontalLoop(infitext, { repeat: -1, paddingRight: "4rem" }),
            infiTwo = horizontalLoop(infitext2, { repeat: -1, paddingRight: "4rem" });

        let mql2 = window.matchMedia("(max-width: 414px)");
        if (mql2.matches) {
            const infilogos = gsap.utils.toArray(".partner-logo"),
                logoloop = horizontalLoop(infilogos, { repeat: -1 });
        }

        const infiCards = gsap.utils.toArray(".estimate-card"),
            estimateloop = horizontalLoop(infiCards, { repeat: -1, speed: 0.5 });
    }

    function showLottiePhysics() {
        let animationPath =
            "https://uploads-ssl.webflow.com/64b67c94ee9e6ec6dbadceab/659c1465c7db119a860cd03a_physics-radiance.json";

        let animationWrapper = document.querySelector(".lottie-physics-wrapper"),
            playhead = { frame: 0 },
            animation = lottie.loadAnimation({
                container: animationWrapper,
                renderer: "svg",
                loop: false,
                autoplay: false,
                path: animationPath,
                rendererSettings: {
                    preserveAspectRatio: "xMaxYMin slice",
                },
            });

        animation.addEventListener("DOMLoaded", function () {
            gsap.to(playhead, {
                scrollTrigger: {
                    trigger: ".presentation-section",
                    start: "bottom 300%",
                    end: "+=1000",
                    toggleActions: "play reset play reset"
                },
                frame: animation.totalFrames - 1,
                ease: "none",
                duration: 8,
                onUpdate: () => animation.goToAndStop(playhead.frame, true),
            });
        });

    }

    function secondMatterJSContainer() {
        const matterContainer = document.querySelector(".matter-second-container");
        const matterWrapper = document.querySelector(".matter-wrapper");
        const THICCNESS = 60;

        // module aliases
        var Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite;

        // create an engine
        var engine = Engine.create();

        // create a renderer
        var render = Render.create({
            element: matterContainer,
            engine: engine,
            options: {
                width: matterWrapper.offsetWidth + 16,
                height: matterWrapper.offsetHeight + 16,
                background: "transparent",
                wireframes: false,
                showAngleIndicator: false
                //pixelRatio: window.devicePixelRatio
            }
        });

        let elements = [];
        let imageCount = 19;
        let imgWidth = 60;

        for (let i = 1; i < imageCount + 1; i++) {
            const newImage = new Image();
            newImage.src =
                "https://storage.googleapis.com/radiance/circles/circle" + i + ".png";

            const imageResolver = new Promise((resolve, reject) => {
                newImage.onload = function () {
                    resolve(newImage.width);
                };
                newImage.onerror = function () {
                    console.log(`Not Found: ${pic_path}`);
                    reject();
                };
            });

            imageResolver.then((v) => {
                let mql = window.matchMedia("(max-width: 600px)");
                let texScale = 0.5;
                if (mql.matches) {
                    imgWidth = newImage.width / 8;
                    texScale = 0.25;
                } else {
                    imgWidth = newImage.width / 4;
                }

                let circle = Bodies.circle(
                    matterWrapper.offsetWidth / 2,
                    matterWrapper.offsetHeight / 2,
                    imgWidth,
                    {
                        friction: 0.3,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                            fillStyle: "#FFD73B",
                            sprite: {
                                texture: newImage.src,
                                xScale: texScale,
                                yScale: texScale
                            }
                        }
                    }
                );
                elements.push(circle);
                Composite.add(engine.world, circle);
            });
        }

        var ground = Bodies.rectangle(
            matterContainer.offsetWidth / 2,
            matterContainer.offsetHeight + THICCNESS,
            matterContainer.offsetWidth + THICCNESS,
            THICCNESS,
            { isStatic: true }
        );

        var roof = Bodies.rectangle(
            -THICCNESS,
            -THICCNESS,
            matterContainer.offsetWidth,
            THICCNESS,
            { isStatic: true }
        );

        let leftWall = Bodies.rectangle(
            0 - THICCNESS,
            matterContainer.offsetHeight / 2,
            THICCNESS,
            matterContainer.offsetHeight * 5,
            {
                isStatic: true
            }
        );

        let rightWall = Bodies.rectangle(
            matterContainer.offsetWidth + THICCNESS,
            matterContainer.offsetHeight / 2,
            THICCNESS,
            matterContainer.offsetHeight * 5,
            { isStatic: true }
        );

        // add all of the bodies to the world
        Composite.add(engine.world, [ground, roof, leftWall, rightWall]);

        let mouse = Matter.Mouse.create(render.canvas);
        let mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

        Composite.add(engine.world, mouseConstraint);

        // allow scroll through the canvas
        mouseConstraint.mouse.element.removeEventListener(
            "mousewheel",
            mouseConstraint.mouse.mousewheel
        );
        mouseConstraint.mouse.element.removeEventListener(
            "DOMMouseScroll",
            mouseConstraint.mouse.mousewheel
        );

        // run the renderer
        Render.run(render);

        // create runner
        let runner = Runner.create();

        //Observer runs the matter engine when card intersects viewport
        let observerTarget = document.querySelector(".matter-wrapper");
        let observer = new IntersectionObserver((entries) => {
            if (entries[0].intersectionRatio > 0) {
                // run the engine
                Runner.run(runner, engine);
                matterForceOnScroll(0.007);
            }
        });
        observer.observe(observerTarget);

        //**SCROLL ATTEMPT HACK

        function matterForceOnScroll(moveForce) {
            var lastScrollTop = 0;
            // element should be replaced with the actual target element on which you have applied scroll, use 	window in case of no target element.
            window.addEventListener(
                "scroll",
                function () {
                    // or window.addEventListener("scroll"....
                    var st = window.scrollY || document.documentElement.scrollTop;
                    if (st > lastScrollTop) {
                        // downscroll code
                        elements.forEach((body) => {
                            Matter.Body.setStatic(body, false);
                            Matter.Body.applyForce(
                                body,
                                {
                                    x: body.position.x,
                                    y: body.position.y
                                },
                                { x: 0, y: -moveForce }
                            );
                        });
                    } else if (st < lastScrollTop) {
                        // upscroll code
                        elements.forEach((body) => {
                            Matter.Body.setStatic(body, false);
                            Matter.Body.applyForce(
                                body,
                                {
                                    x: body.position.x,
                                    y: body.position.y
                                },
                                { x: 0, y: moveForce }
                            );
                        });
                    } // else was horizontal scroll
                    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
                },
                false
            );
        }
        //**END SCROLL ATTEMPT HACK

        function handleResize(matterContainer) {
            // set canvas size to new values
            render.canvas.width = matterContainer.offsetWidth;
            render.canvas.height = matterContainer.offsetHeight;

            // reposition ground
            Matter.Body.setPosition(
                ground,
                Matter.Vector.create(
                    matterContainer.offsetWidth / 2,
                    matterContainer.offsetHeight + THICCNESS / 2
                )
            );

            // reposition right wall
            Matter.Body.setPosition(
                rightWall,
                Matter.Vector.create(
                    matterContainer.offsetWidth + THICCNESS / 2,
                    matterContainer.offsetHeight / 2
                )
            );
        }

        window.addEventListener("resize", () => handleResize(matterContainer));
    }

    function animateLastCard() {
        gsap.to(".ending-background", {
            scrollTrigger: {
                trigger: ".presentation-section",
                start: "bottom 150%",
                end: "+=1000",
                scrub: 0.4
                //: true,
                //toggleActions: "play none none reverse",
            },
            top: 0,
            scale: 2
        });


        gsap.to("#arrow-svg-arrow", {
            y: 6,
            yoyo: true,
            duration: 0.75,
            ease: "power2.inOut",
            repeat: -1
        });

        document.querySelector(".arrow-svg").addEventListener("mouseenter", (event) => {

            console.log("hovered");

            gsap.to("#arrow-svg-background", {
                duration: 0.3,
                ease: "power2.inOut",
                fill: "#0D99FE  ",
            });

            gsap.to("#arrow-svg-line", {
                duration: 0.3,
                ease: "power2.inOut",
                scale: 0
            });

            gsap.to(".arrow-svg", {
                duration: 0.3,
                ease: "power2.inOut",
                scale: 1.1
            });

        }, true);


        document.querySelector(".arrow-svg").addEventListener("mouseleave", (event) => {

            console.log("hovered");

            gsap.to("#arrow-svg-background", {
                duration: 0.3,
                ease: "power2.inOut",
                fill: "#000000",
            });

            gsap.to("#arrow-svg-line", {
                duration: 0.3,
                ease: "power2.inOut",
                scale: 1
            });

            gsap.to(".arrow-svg", {
                duration: 0.3,
                ease: "power2.inOut",
                scale: 1
            });

        }, true);


    }

    /*     gsap.to("#presentation-id", {
            scrollTrigger: {
                trigger: ".work-layout",
                start: "top 125%",
                end: "+=500",
                toggleActions: "play none none reverse",
            },
            backgroundColor: "#F5F4EE"
        }); */

}


function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth,
        curX,
        distanceToStart,
        distanceToLoop,
        item,
        i;
    gsap.set(items, {
        // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
            let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
            xPercents[i] = snap(
                (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
                gsap.getProperty(el, "xPercent")
            );
            return xPercents[i];
        },
    });
    gsap.set(items, { x: 0 });
    totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
        gsap.getProperty(items[length - 1], "scaleX") +
        (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
            distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(
            item,
            {
                xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                duration: distanceToLoop / pixelsPerSecond,
            },
            0
        )
            .fromTo(
                item,
                {
                    xPercent: snap(
                        ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                    ),
                },
                {
                    xPercent: xPercents[i],
                    duration:
                        (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                    immediateRender: false,
                },
                distanceToLoop / pixelsPerSecond
            )
            .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 &&
            (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
            // if we're wrapping the timeline's playhead, make the proper adjustments
            vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    }
    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
    }
    return tl;
}

function showMainAnimation() {
    let items = gsap.utils.toArray(".hoverable--link");
    let hiddenVideo = document.querySelectorAll(".hidden-video");
    let numCallback = -1;

    items.forEach((link) => {
        numCallback++;

        let currentVideo = hiddenVideo[numCallback];
        let current = link;
        let linkTimeline = gsap.timeline();
        linkTimeline.pause();

        // grab all the links that aren't the current one
        let itemsWithoutCurrent = items.filter(function (x) {
            return x !== current;
        });

        linkTimeline.fromTo(
            [
                itemsWithoutCurrent,
                ".hide-this-text",
                ".bottom-layout",
                ".top-layout",
                ".header-section"
            ],
            {
                duration: 0.4,
                ease: "power2.in",
                autoAlpha: 1
            },
            {
                duration: 0.4,
                ease: "power2.in",
                autoAlpha: 0
            }, "<"
        )
            .fromTo(currentVideo, {
                duration: 0.4,
                scale: 1,
                ease: "power2.in",
                autoAlpha: 0,
            }, {
                duration: 0.4,
                scale: 1.05,
                ease: "power2.in",
                autoAlpha: 1,
            }, "<");


        link.addEventListener("mouseover", () => {
            linkTimeline.restart();

            gsap.to(link, {
                duration: 0.2,
                ease: "power2.in",
                color: "#f5f2ee"
            });
        });

        link.addEventListener("mouseleave", () => {
            linkTimeline.reverse();

            gsap.to(link, {
                duration: 0.2,
                ease: "power2.in",
                color: "#1A1A1A"
            });
        });
    });
}


function showLettersAnimation() {
    let frameCount = 17;

    rLetterAnimation();
    aLetterAnimation();
    dLetterAnimation();
    iLetterAnimation();
    a2LetterAnimation();
    nLetterAnimation();
    cLetterAnimation();
    eLetterAnimation();

    function rLetterAnimation() {
        const linkR = document.getElementById("r-letter");

        let tlR = new gsap.timeline();
        tlR.pause();

        tlR.to(".r-letter", {
            autoAlpha: 1,
            duration: 0.3
        });

        tlR.to(
            ".r-char",
            {
                opacity: 0
            },
            "<"
        );

        tlR.fromTo(
            ".letter_r",
            1,
            { backgroundPosition: "0 0" },
            {
                backgroundPosition: function () {
                    var imageWidth =
                        document.querySelector(".animation").clientWidth * frameCount;
                    return "-" + imageWidth + "px 0";
                },
                ease: SteppedEase.config(frameCount)
            },
            "<"
        );

        window.addEventListener("resize", function () {
            tlR.invalidate();
        });

        linkR.addEventListener("mouseenter", (event) => {
            tlR.play();
        });

        linkR.addEventListener("mouseleave", (event) => {
            tlR.reverse();
        });
    }

    function aLetterAnimation() {
        const linkA = document.getElementById("a-letter");

        let tlA = new gsap.timeline();
        tlA.pause();

        tlA.to(".a-letter", {
            autoAlpha: 1,
            duration: 0.3
        });

        tlA.to(
            ".a-char",
            {
                opacity: 0
            },
            "<"
        );

        tlA.fromTo(
            ".letter_a",
            1,
            { backgroundPosition: "0 0" },
            {
                backgroundPosition: function () {
                    var imageWidth =
                        document.querySelector(".anima").clientWidth * frameCount;
                    return "-" + imageWidth + "px 0";
                },
                ease: SteppedEase.config(frameCount)
            },
            "<"
        );

        window.addEventListener("resize", function () {
            tlA.invalidate();
        });

        linkA.addEventListener("mouseenter", (event) => {
            tlA.play();
        });

        linkA.addEventListener("mouseleave", (event) => {
            tlA.reverse();
        });
    }

    function dLetterAnimation() {
        const linkD = document.getElementById("d-letter");

        let tlD = new gsap.timeline();
        tlD.pause();

        tlD.to(".d-letter", {
            autoAlpha: 1,
            duration: 0.3
        });

        tlD.to(
            ".d-char",
            {
                opacity: 0
            },
            "<"
        );

        tlD.fromTo(
            ".letter_d",
            1,
            { backgroundPosition: "0 0" },
            {
                backgroundPosition: function () {
                    var imageWidth =
                        document.querySelector(".animd").clientWidth * frameCount;
                    return "-" + imageWidth + "px 0";
                },
                ease: SteppedEase.config(frameCount)
            },
            "<"
        );

        window.addEventListener("resize", function () {
            tlD.invalidate();
        });

        linkD.addEventListener("mouseenter", (event) => {
            tlD.play();
        });

        linkD.addEventListener("mouseleave", (event) => {
            tlD.reverse();
        });
    }
    function iLetterAnimation() {
        const linkI = document.getElementById("i-letter");

        let tlI = new gsap.timeline();
        tlI.pause();

        tlI.to(".i-letter", {
            autoAlpha: 1,
            duration: 0.3
        });

        tlI.to(
            ".i-char",
            {
                opacity: 0
            },
            "<"
        );

        tlI.fromTo(
            ".letter_i",
            1,
            { backgroundPosition: "0 0" },
            {
                backgroundPosition: function () {
                    var imageWidth =
                        document.querySelector(".animi").clientWidth * frameCount;
                    return "-" + imageWidth + "px 0";
                },
                ease: SteppedEase.config(frameCount)
            },
            "<"
        );

        window.addEventListener("resize", function () {
            tlI.invalidate();
        });

        linkI.addEventListener("mouseenter", (event) => {
            tlI.play();
        });

        linkI.addEventListener("mouseleave", (event) => {
            tlI.reverse();
        });
    }
    function a2LetterAnimation() {
        const linkA2 = document.getElementById("a2-letter");

        let tlA2 = new gsap.timeline();
        tlA2.pause();

        tlA2.to(".a2-letter", {
            autoAlpha: 1,
            duration: 0.3
        });

        tlA2.to(
            ".a2-char",
            {
                opacity: 0
            },
            "<"
        );

        tlA2.fromTo(
            ".letter_a2",
            1,
            { backgroundPosition: "0 0" },
            {
                backgroundPosition: function () {
                    var imageWidth =
                        document.querySelector(".anima2").clientWidth * frameCount;
                    return "-" + imageWidth + "px 0";
                },
                ease: SteppedEase.config(frameCount)
            },
            "<"
        );

        window.addEventListener("resize", function () {
            tlA2.invalidate();
        });

        linkA2.addEventListener("mouseenter", (event) => {
            tlA2.play();
        });

        linkA2.addEventListener("mouseleave", (event) => {
            tlA2.reverse();
        });
    }
    function nLetterAnimation() {
        const linkN = document.getElementById("n-letter");

        let tlN = new gsap.timeline();
        tlN.pause();

        tlN.to(".n-letter", {
            autoAlpha: 1,
            duration: 0.3
        });

        tlN.to(
            ".n-char",
            {
                opacity: 0,
                duration: 0.1
            },
            "<"
        );

        tlN.fromTo(
            ".letter_n",
            1,
            { backgroundPosition: "0 0" },
            {
                backgroundPosition: function () {
                    var imageWidth =
                        document.querySelector(".animn").clientWidth * frameCount;
                    return "-" + imageWidth + "px 0";
                },
                ease: SteppedEase.config(frameCount)
            },
            "<"
        );

        window.addEventListener("resize", function () {
            tlN.invalidate();
        });

        linkN.addEventListener("mouseenter", (event) => {
            tlN.play();
        });

        linkN.addEventListener("mouseleave", (event) => {
            tlN.reverse();
        });
    }
    function cLetterAnimation() {
        const linkC = document.getElementById("c-letter");

        let tlC = new gsap.timeline();
        tlC.pause();

        tlC.to(".c-letter", {
            autoAlpha: 1,
            duration: 0.3
        });

        tlC.to(
            ".c-char",
            {
                opacity: 0
            },
            "<"
        );

        tlC.fromTo(
            ".letter_c",
            1,
            { backgroundPosition: "0 0" },
            {
                backgroundPosition: function () {
                    var imageWidth =
                        document.querySelector(".animc").clientWidth * frameCount;
                    return "-" + imageWidth + "px 0";
                },
                ease: SteppedEase.config(frameCount)
            },
            "<"
        );

        window.addEventListener("resize", function () {
            tlC.invalidate();
        });

        linkC.addEventListener("mouseenter", (event) => {
            tlC.play();
        });

        linkC.addEventListener("mouseleave", (event) => {
            tlC.reverse();
        });
    }
    function eLetterAnimation() {
        const linkE = document.getElementById("e-letter");

        let tlE = new gsap.timeline();
        tlE.pause();

        tlE.to(".e-letter", {
            autoAlpha: 1,
            duration: 0.3
        });

        tlE.to(
            ".e-char",
            {
                opacity: 0
            },
            "<"
        );

        tlE.fromTo(
            ".letter_e",
            1,
            { backgroundPosition: "0 0" },
            {
                backgroundPosition: function () {
                    var imageWidth =
                        document.querySelector(".anime").clientWidth * frameCount;
                    return "-" + imageWidth + "px 0";
                },
                ease: SteppedEase.config(frameCount)
            },
            "<"
        );

        window.addEventListener("resize", function () {
            tlE.invalidate();
        });

        linkE.addEventListener("mouseenter", (event) => {
            tlE.play();
        });

        linkE.addEventListener("mouseleave", (event) => {
            tlE.reverse();
        });
    }
}



function animateHeroLinks() {
    let heroLinks = document.querySelectorAll(".hero-link");
    heroLinks.forEach((herolink) => {
        const templink = herolink.querySelector("*");
        templink.style.textShadow = "0 1em";
        herolink.addEventListener("mouseenter", () => {
            gsap.to(templink, {
                yPercent: -101,
                overwrite: true,
                ease: "circ.inOut",
                overwrite: true
            });
        });

        herolink.addEventListener("mouseleave", () => {
            gsap.set(templink, {
                yPercent: 0,
                overwrite: true
            });
        });
    });
}

function showCurrentTime() {
    let DateTime = luxon.DateTime;
    let tbilisiTime = document.getElementById("tbilisi-time");

    let mql = window.matchMedia("(max-width: 568px)");

    if (mql.matches) {
        tbilisiTime = document.getElementById("mobile-clock");
    }

    let f = {
        weekday: "short",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    };
    tbilisiTime.innerHTML = DateTime.now().setZone("UTC+4").setLocale('en-US').toLocaleString(f);

    const intervalID = setInterval(myCallback, 1000);

    function myCallback() {
        tbilisiTime.innerHTML = DateTime.now().setZone("UTC+4").setLocale('en-US').toLocaleString(f);
    }
}

function showMobileMatterJS() {
    let mql4 = window.matchMedia("(max-width: 767px)");

    if (mql4.matches) {
        const matterContainer = document.querySelector(".matter-container");
        const THICCNESS = 60;

        // module aliases
        var Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite;

        // create an engine
        var engine = Engine.create();

        // create a renderer
        var render = Render.create({
            element: matterContainer,
            engine: engine,
            options: {
                width: matterContainer.clientWidth,
                height: matterContainer.clientHeight,
                background: "transparent",
                wireframes: false,
                showAngleIndicator: false
            }
        });

        let letterBodies = [];

        let ii = 9;
        for (let i = 1; i < 9; i++) {
            ii--;
            let circle = Bodies.circle(60, 60, 60, {
                friction: 0.4,
                frictionAir: 0.00001,
                restitution: 0.8,
                render: {
                    sprite: {
                        texture:
                            "https://storage.googleapis.com/radiance/3d-letters/letter0" +
                            ii +
                            ".webp",
                        xScale: 0.325,
                        yScale: 0.325
                    }
                }
            });
            letterBodies.push(circle);
            Composite.add(engine.world, circle);
        }

        var ground = Bodies.rectangle(
            matterContainer.clientWidth / 2,
            matterContainer.clientHeight + THICCNESS / 2,
            27184,
            THICCNESS,
            { isStatic: true }
        );

        var roof = Bodies.rectangle(-THICCNESS, -THICCNESS, 27184, THICCNESS, {
            isStatic: true
        });

        let leftWall = Bodies.rectangle(
            0 - THICCNESS / 2,
            matterContainer.clientHeight / 2,
            THICCNESS,
            matterContainer.clientHeight * 5,
            {
                isStatic: true
            }
        );

        let rightWall = Bodies.rectangle(
            matterContainer.clientWidth + THICCNESS / 2,
            matterContainer.clientHeight / 2,
            THICCNESS,
            matterContainer.clientHeight * 5,
            { isStatic: true }
        );

        // add all of the bodies to the world
        Composite.add(engine.world, [ground, roof, leftWall, rightWall]);

        let mouse = Matter.Mouse.create(render.canvas);
        let mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

        mouseConstraint.mouse.element.removeEventListener(
            "touchmove",
            mouseConstraint.mouse.mousemove
        );
        mouseConstraint.mouse.element.removeEventListener(
            "touchstart",
            mouseConstraint.mouse.mousedown
        );
        mouseConstraint.mouse.element.removeEventListener(
            "touchend",
            mouseConstraint.mouse.mouseup
        );

        // allow scroll through the canvas
        mouseConstraint.mouse.element.removeEventListener(
            "mousewheel",
            mouseConstraint.mouse.mousewheel
        );
        mouseConstraint.mouse.element.removeEventListener(
            "DOMMouseScroll",
            mouseConstraint.mouse.mousewheel
        );

        Composite.add(engine.world, mouseConstraint);
        // run the renderer
        Render.run(render);

        // create runner
        var runner = Runner.create();
        matterForceOnScroll(0.05);
        // run the engine
        Runner.run(runner, engine);

        function matterForceOnScroll(moveForce) {
            var lastScrollTop = 0;
            // element should be replaced with the actual target element on which you have applied scroll, use 	window in case of no target element.
            window.addEventListener(
                "scroll",
                function () {
                    // or window.addEventListener("scroll"....
                    var st = window.scrollY || document.documentElement.scrollTop;
                    if (st > lastScrollTop) {
                        // downscroll code
                        letterBodies.forEach((body) => {
                            Matter.Body.setStatic(body, false);
                            Matter.Body.applyForce(
                                body,
                                {
                                    x: body.position.x,
                                    y: body.position.y
                                },
                                { x: 0, y: -moveForce }
                            );
                        });
                    } else if (st < lastScrollTop) {
                        // upscroll code
                        letterBodies.forEach((body) => {
                            Matter.Body.setStatic(body, false);
                            Matter.Body.applyForce(
                                body,
                                {
                                    x: body.position.x,
                                    y: body.position.y
                                },
                                { x: 0, y: moveForce }
                            );
                        });
                    } // else was horizontal scroll
                    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
                },
                false
            );
        }

        function handleResize(matterContainer) {
            // set canvas size to new values
            render.canvas.width = matterContainer.clientWidth;
            render.canvas.height = matterContainer.clientHeight;

            // reposition ground
            Matter.Body.setPosition(
                ground,
                Matter.Vector.create(
                    matterContainer.clientWidth / 2,
                    matterContainer.clientHeight + THICCNESS / 2
                )
            );

            // reposition right wall
            Matter.Body.setPosition(
                rightWall,
                Matter.Vector.create(
                    matterContainer.clientWidth + THICCNESS / 2,
                    matterContainer.clientHeight / 2
                )
            );
        }

        window.addEventListener("resize", () => handleResize(matterContainer));
    }
}

function showPortfolioAnimation() {


    let allWorks = document.querySelectorAll(".work-link");

    allWorks.forEach((element) => {

        let arrowSvg = element.querySelectorAll(".arrow-link-svg")

        element.addEventListener("mouseenter", (event) => {
            gsap.to(arrowSvg, {
                x: 8,
                y: -8,
                duration: 0.3,
                ease: "power2.inOut"
            });
        });

        element.addEventListener("mouseleave", (event) => {
            gsap.to(arrowSvg, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.inOut"
            });
        });
    });




    gsap.to(".work-visual", {
        scrollTrigger: {
            trigger: ".work-layout",
            start: "top 50%",
            end: "bottom bottom",
            scrub: 0.5
            //markers: true,
        },
        scale: 1.3,
        stagger: { each: 0.4 }
    });

    gsap.to(".work-heading-container", {
        scrollTrigger: {
            trigger: ".work-layout",
            start: "top top",
            end: "+=500",
            scrub: 0.5
            //markers: true,
        },
        opacity: 0
    });
}


function activateHalo() {
    const audioElement = document.getElementById("gospel");
    let halo = document.querySelector(".threejs-wrapper");
    let footer = document.querySelector(".footer");

    gsap.to(halo.children[0], {
        scrollTrigger: {
            trigger: footer,
            start: "top 10%",
            end: "bottom bottom",
            toggleActions: "restart none none reverse"
        },
        width: "12rem"
    });

    gsap.to("#work-section", {
        scrollTrigger: {
            trigger: footer,
            start: "top 300%",
            end: "top top",
            toggleActions: "restart none none reverse"
        },
        backgroundColor: "#000000"
    });

    gsap.to([".work-description", ".showreel-container"], {
        scrollTrigger: {
            trigger: footer,
            start: "top 300%",
            end: "top top",
            toggleActions: "restart none none reverse"
        },
        color: "#f5f2ee"
    });



    gsap.to([".ogl-godrays", ".tap-me-mobile-wrapper"], {
        scrollTrigger: {
            trigger: footer,
            start: "top 10%",
            end: "bottom bottom",
            //toggleActions: "restart none none reverse"
            scrub: 1
        },
        autoAlpha: 1
    });





    function audioVolumeIn(q) {
        if (q.volume) {
            var InT = 0;
            var setVolume = 0.1; // Target volume level for new song
            var speed = 0.05; // Rate of increase
            q.volume = InT;
            var eAudio = setInterval(function () {
                InT += speed;
                q.volume = InT.toFixed(1);
                if (InT.toFixed(1) >= setVolume) {
                    clearInterval(eAudio);
                    //alert('clearInterval eAudio'+ InT.toFixed(1));
                }
            }, 50);
        }
    }

    halo.addEventListener("click", (event) => {
        audioElement.muted = false;
        audioElement.play();
        audioVolumeIn(audioElement);
    });
}

function animateEmail() {


    let footerEmail = document.querySelector(".footer-heading");

    let typeSplit = new SplitType(footerEmail, {
        types: "chars",
        tagName: "span"
    });

    let allChars = footerEmail.querySelectorAll(".char");

    footerEmail.addEventListener("mouseenter", (event) => {
        gsap.to(allChars, {
            //duration: 0.4,
            ease: "power2.inOut",
            color: "#3B3B36",
            stagger: {
                from: "center",
                amount: 0.6
            }
        });
    });


    footerEmail.addEventListener("mouseleave", (event) => {
        gsap.to(allChars, {
            //duration: 0.4,
            ease: "power2.inOut",
            color: "#F5F2EE",
            stagger: {
                from: "center",
                amount: 0.6
            }
        });
    });





}
