import React, { useEffect } from "react";
import * as THREE from "three";

const ThreeCanvas = () => {
  useEffect(() => {
    const canvas = document.querySelector("#canvas");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      canvas.offsetWidth / canvas.offsetHeight,
      1,
      1000
    );
    camera.position.setZ(96);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    document.body.appendChild(renderer.domElement);

    window.addEventListener("resize", onWindowResize, false);

    function onWindowResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      camera.aspect = canvas.width / canvas.height;
      camera.updateProjectionMatrix();

      renderer.setSize(canvas.width, canvas.height);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotlight = new THREE.SpotLight(0xffffff, 1);
    spotlight.castShadow = true;
    spotlight.position.set(0, 64, 32);
    scene.add(spotlight);

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(boxMesh);

    boxMesh.position.y -= 8;

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(boxMesh.rotation, {
      scrollTrigger: {
        trigger: "wheel",
        scrub: true,
      },
      x: boxMesh.rotation.x + 2 * Math.PI - Math.PI / 30,
      y: boxMesh.rotation.y + 2 * Math.PI,
      z: boxMesh.rotation.z + 2 * Math.PI,

      ease: "linear",

      duration: 4,
    });

    gsap.to(camera.position, {
      scrollTrigger: {
        trigger: "wheel",
        scrub: true,
      },

      y: camera.position.y + 10,
      ease: "linear",

      duration: 1,
    });

    gsap.to(boxMesh.material, {
      scrollTrigger: {
        trigger: document.querySelector("#wireframe"),
        toggleActions: "play reverse play reset ",
        start: "top bottom",
        end: "bottom top",
      },
      wireframe: true,
      duration: 0.00001,
    });
    const animate = () => {
      renderer.render(scene, camera);

      // boxMesh.rotation.x += Math.PI / 128;
      // boxMesh.rotation.y += Math.PI / 256;
      // boxMesh.rotation.z += Math.PI / 256;

      window.requestAnimationFrame(animate);
    };

    animate();
  }, []);
  return (
    <div>
      <canvas
        id='canvas'
        className='w-screen h-screen fixed top-0 left-0'></canvas>
    </div>
  );
};

export default ThreeCanvas;
