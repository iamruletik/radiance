var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});
renderer.outputEncoding = THREE.sRGBEncoding;
//renderer.physicallyCorrectLights = true;
renderer.setPixelRatio(2);
//renderer.toneMapping = THREE.ACESFilmicToneMapping;

var camera = new THREE.PerspectiveCamera(10, 1, 1, 1000);
camera.position.set(0, 0, 4.5);

var canvas = renderer.domElement;
document.querySelector('.threejs-wrapper').appendChild(canvas);

const modelPath = 'https://storage.googleapis.com/radiance/final-torus.gltf';

const loader = new THREE.GLTFLoader();
let model;
let mixer;

loader.load(modelPath, function (gltf) {

    model = gltf.scene;
    const scale = 0.4;
    model.scale.set(scale, scale, scale);
    base.add(model);
    mixer = new THREE.AnimationMixer(model);
    const clips = gltf.animations;
    const clip = THREE.AnimationClip.findByName(clips, 'axisAction');
    const action = mixer.clipAction(clip);
    action.play();

});

let base = new THREE.Object3D();
scene.add(base);

base.rotation.set(0.3, 0, 0);

let clock = new THREE.Clock();
let speed = 1;
let hovered = false;


//Animate Halo on hover
let haloAnimation = gsap.timeline();
let tapMeText = document.querySelector(".fixed-holder .tap-me");

haloAnimation.fromTo(base.rotation, {
    x: 0.3,
}, {
    x: -0.3,
    duration: 0.7,
    ease: "back.out(2)"
});

haloAnimation.to(tapMeText, {
    autoAlpha: 1,
    ease: "power2.out"
}, "<");

haloAnimation.pause();

canvas.addEventListener("mouseenter", (event) => {
    hovered = true;
    haloAnimation.play();
});

canvas.addEventListener("mouseleave", (event) => {
    hovered = false;
    haloAnimation.reverse();
});

//Animate Halo on hover





renderer.setAnimationLoop(() => {
    let delta = clock.getDelta();

    if (resize(renderer)) {
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }
    if (mixer) {
        mixer.update(delta);
    }
    renderer.render(scene, camera);
});

function resize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize;
}
