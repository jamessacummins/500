const Canvas = {
    height: 400,
    heightRatio: 1,
    widthRatio: 1,
    getHieght(){
        return this.height;
    },
    getWidth(){
        return (this.height / this.heightRatio) * this.widthRatio;
    } 
}

const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, Canvas.getWidth() / Canvas.getHieght(), 0.1, 1000);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(Canvas.getWidth(), Canvas.getHieght());
        document.body.appendChild(renderer.domElement);
        renderer.setClearColor("red");

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();