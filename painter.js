
export default class {
    
    /**
     * @param {{render: (g: CanvasRenderingContext2D) => void} definition 
     */
    constructor(definition) {

        const voidFn = () => {};

        this.ups = definition.ups || 30;

        this.canvasWidth = definition.canvasWidth;
        this.doRenderLoop = definition.doRenderLoop === undefined ? true : definition.doRenderLoop;
        this.aspectRatio = definition.aspectRatio || 'auto';
        
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

        const px = n => n + 'px';
        
        let w, h;
        
        if (this.aspectRatio !== 'auto') {
            if (window.innerWidth / window.innerHeight < this.aspectRatio) {
                w = window.innerWidth;
                h = window.innerWidth / this.aspectRatio;
            }
            else {
                w = window.innerHeight * this.aspectRatio;
                h = window.innerHeight;
            }
        }
        else {
            w = window.innerWidth;
            h = window.innerHeight;
        }

        this.$canvas.width = this.canvasWidth;
        this.$canvas.height = this.canvasWidth / this.aspectRatio;

        this.$canvas.style.width = px(w);
        this.$canvas.style.height = px(h);

        requestAnimationFrame(() => this.render(this.getContext()));
    }

    loop() {
        this.render(this.getContext());
        requestAnimationFrame(this.loop.bind(this));
    }

}