
export class Vec2 {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    mul(scalar) {
        return new Vec2(this.x * scalar, this.y * scalar);
    }

    add(other) {
        return new Vec2(this.x + other.x, this.y + other.y);
    }

    sub(other) {
        return new Vec2(this.x - other.x, this.y - other.y);
    }

    norm2() {
        return Math.sqrt(this.norm2Sq());
    }

    norm2Sq() {
        return this.x * this.x + this.y * this.y;
    }

    unit() {
        return this.mul(1.0 / this.norm2());
    }

    /**
     * @param {Vec2} other The vector to interpolate to (at t=1)
     * @param {number} t The interpolation factor, should be in [0, 1]
     */
    interpTo(other, t) {
        return this.add(other.sub(this).mul(t));
    }
    
}

export default function vec2(x, y) {
    return new Vec2(x, y);
}

