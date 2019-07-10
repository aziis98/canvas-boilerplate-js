
export default class {
    
    /**
     * @param {{render: (g: CanvasRenderingContext2D) => void} definition 
     */
    constructor(definition) {

        const voidFn = () => {};

        this.fps = definition.fps || 60;
        this.density = definition.density || 1;
        // this.aspectRatio = definition.aspectRatio || (16.0 / 9.0);

        this.setup = definition.setup || voidFn;
        this.render = definition.render || voidFn;
        this.update = definition.update || voidFn;

        this.$canvas = document.querySelector(definition.el);
        this.getContext();

        this.setup();

        this.loop();

        this.$timer = setInterval(() => {
            this.update();
        }, 1000 / this.fps);

        this.onResize();
        window.addEventListener('resize', this.onResize.bind(this));

    }

    get width() {
        return this.$canvas.width;
    }

    get height() {
        return this.$canvas.height;
    }

    getContext() {
        this.$context = this.$canvas.getContext('2d');
        return this.$context;
    }

    onResize() {
        this.$canvas.width = window.innerWidth * this.density;
        this.$canvas.height = window.innerHeight * this.density;
    }

    loop() {
        this.render(this.getContext());
        requestAnimationFrame(this.loop.bind(this));
    }

}