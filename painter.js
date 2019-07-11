
export default class {
    
    /**
     * @param {{render: (g: CanvasRenderingContext2D) => void} definition 
     */
    constructor(definition) {

        const voidFn = () => {};

        this.ups = definition.ups || 30;

        this.density = definition.density || 1;
        this.doRenderLoop = definition.doRenderLoop === undefined ? true : definition.doRenderLoop;
        
        this.setup = definition.setup || voidFn;
        this.render = definition.render || voidFn;
        this.update = definition.update || voidFn;

        // Log Render Calls
        const _renderFn = this.render;
        this.render = function () { 
            console.log("render()");
            _renderFn.apply(this, arguments);
        }

        this.$canvas = document.querySelector(definition.el);
        this.getContext();

        this.setup();

        if (this.doRenderLoop) 
            this.loop();

        this.$timer = setInterval(() => {
            this.update();
        }, 1000 / this.ups);

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

        requestAnimationFrame(() => this.render(this.getContext()));
    }

    loop() {
        this.render(this.getContext());
        requestAnimationFrame(this.loop.bind(this));
    }

}