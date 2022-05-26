import * as THREE from 'three';

const Canvas = {
    height: 400,
    heightRatio: 1,
    widthRatio: 1,
    getHieght() {
        return this.height;
    },
    getWidth() {
        return (this.height / this.heightRatio) * this.widthRatio;
    }
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, Canvas.getWidth() / Canvas.getHieght(), 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(Canvas.getWidth(), Canvas.getHieght());
document.body.appendChild(renderer.domElement);
renderer.setClearColor("#fff");

function makeCard(x, y, z){
    var geometry = new THREE.BoxGeometry(1, 1.5, 0.01);
    var loader = new THREE.TextureLoader();
    var cube;
    loader.load('../img/7-spades.png', (texture) => {
        texture.anisotropy = renderer.getMaxAnisotropy();
        const material = new THREE.MeshBasicMaterial({
            map: texture,
        });
        cube = new THREE.Mesh(geometry, material);
        cube.position.set(x,y,z);
        scene.add(cube);
        return cube;
    });
}
for(var i = -3; i != 3.5; i += .5){
    makeCard(i, 0, 0);
}


camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();