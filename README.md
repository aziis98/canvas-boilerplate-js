
# JS Canvas Boilerplate

Basic Painter usage

```js

import Painter from "./painter.js";

const painter = new Painter({

    el: 'canvas',
    doRenderLoop: false,

    setup() {

    },
    render(g) {

        g.resetTransform();
        g.translate(0.5, 0.5);

        g.fillStyle = 'black';
        g.fillRect(0, 0, this.width, this.height);
        
        g.fillStyle = 'red';
        g.fillRect(this.width / 4, this.height / 4, this.width / 2, this.height / 2);
        
    },
    update() {

    }

});

```