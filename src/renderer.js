import {
    AdditiveBlending,
    BoxGeometry,
    Mesh,
    MeshStandardMaterial,
    OrbitControls,
    PerspectiveCamera,
    Scene,
    Sprite,
    SpriteMaterial,
    TextureLoader,
    WebGLRenderer
} from "three-full/builds/Three.es";

const generic = 0x4068F4,         // BLUE
    numericColor = 0x9b42f4,    // ORANGE
    binaryColor = 0xF6B85B,     // GREEN
    textColor = 0x21C156,       // PURPLE
    xDistanceScale = 1.5,
    yDistanceScale = 5;

export default class Renderer {
    constructor(genomes, container = null) {
        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;
        this.camera = null;
        this.scene = null;
        this.renderer = null;
        this.geneToMeshMap = {};
        this.genomes = genomes;
        this.container = container || document.createElement('div');
        document.body.appendChild(this.container);

        this.init(this.container);
        this.animate();
    }

    geneToBox(gene, isActivated, xIndex, yIndex) {
        let color,
            position = {x: xIndex * xDistanceScale, y: yIndex * yDistanceScale, z: 0},
            geometry = new BoxGeometry(1, 1, 1, 2, 2, 2);
        switch (gene.type) {
            case "numeric":
                color = numericColor;
                break;
            case "text":
                color = textColor;
                break;
            case "binary":
                color = binaryColor;
                break;
            default:
                color = generic;
                break;
        }

        let material = new MeshStandardMaterial({color: color, emissive: color});
        let mesh = new Mesh(geometry, material);

        let spriteMaterial = new SpriteMaterial({
            map: Renderer.loadTexture('./glow.png'),
            useScreenCoordinates: false,
            color: color,
            transparent: false,
            blending: AdditiveBlending
        });

        let sprite = new Sprite(spriteMaterial);
        sprite.scale.set(1.5, 2, .1);
        sprite.visible = false;
        mesh.add(sprite);

        mesh.position.set(position.x, position.y, position.z);
        return mesh;
    }

    updateGenome(genome) {
        let activatedGenes = genome.enabledGenes;
        for (let i = 0; i < genome.genes.length; i++) {
            this.updateGene(genome.genes[i], activatedGenes[i])
        }
    }

    randomizeValue(gene) {
        switch (gene.type) {
            case 'binary':
                gene._data = Math.random() > 0.5;
                break;
            case 'numeric':
                gene._data = Math.random() * 1000;
                break;
            default:
                gene._data = Math.floor(Math.random() * 1000000).toString();
                break;
        }
    }

    updateGene(gene, isActivated) {
        // TODO: put this in a meaningful place
        // randomizeValue(gene);
        let yScale = Math.log(1 + (gene.length));
        let mesh = this.geneToMeshMap[gene];

        let color;
        switch (gene.type) {
            case "numeric":
                color = numericColor;
                break;
            case "text":
                color = textColor;
                break;
            case "binary":
                color = binaryColor;
                break;
            default:
                color = generic;
                break;
        }

        mesh.children[0].visible = isActivated;
        mesh.scale.set(mesh.scale.x, yScale, mesh.scale.z);
    }

    renderGenome(genome, verticalIndex) {
        return genome.genes.map((gene, i) => {
            let mesh = this.geneToBox(gene, genome.enabledGenes[i], i, verticalIndex);
            this.geneToMeshMap[gene] = mesh;
            return mesh;
        });
    }

    init(container) {
        this.camera = new PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 200;
        this.camera.position.x -= 20;
        let scene = this.scene = new Scene();
        this.renderer = new WebGLRenderer({antialias: true, alpha: true});
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        // container.appendChild(this.renderer.domElement);

        this.genomes.forEach((it, i) => {
            this.renderGenome(it, i).forEach(mesh => {
                console.log("Adding mesh", mesh);
                scene.add(mesh)
            });
        });

        container.appendChild(this.renderer.domElement);
        window.addEventListener('resize', this.onWindowResize.bind(this), false);
        console.log("Finished initializing renderer");
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.render();
    }

    render() {
        this.camera.lookAt(this.scene.position);
        let time = Date.now() * 0.00015;
        this.scene.children.forEach((child, i) => {
            child.rotation.y = time * (i % 2 ? 1 : -1);
        });
        // this.composer.render();
        this.renderer.render(this.scene, this.camera);
        this.genomes.forEach(genome => {
            this.updateGenome(genome);
            genome.reset();
        })
    }

    static loadTexture(url, mapping, onLoad, onError, crossOrigin) {
        let loader = new TextureLoader();
        loader.setCrossOrigin(crossOrigin);
        let texture = loader.load(url, onLoad, undefined, onError);
        if (mapping) texture.mapping = mapping;
        return texture;
    }
}