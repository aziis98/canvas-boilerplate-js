
/**
 * Class rappresenting a 2d vector.
 */
export class Vec2 {

    /**
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Scales a vector, returns a new vector.
     * @param {number} scalar 
     */
    mul(scalar) {
        return new Vec2(this.x * scalar, this.y * scalar);
    }

    /**
     * @param {Vec2} other 
     */
    add(other) {
        return new Vec2(this.x + other.x, this.y + other.y);
    }

    /**
     * @param {Vec2} other 
     */
    sub(other) {
        return new Vec2(this.x - other.x, this.y - other.y);
    }

    /**
     * Returns the norm-2 of this vector.
     */
    norm2() {
        return Math.sqrt(this.norm2Sq());
    }

    /**
     * Returns the norm-2 squared of this vector.
     */
    norm2Sq() {
        return this.x * this.x + this.y * this.y;
    }

    /**
     * Normalized version of this vector
     */
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

/**
 * Creates a Vec2 object
 * @param {number} x The x coordinate
 * @param {number} y The y coordinate
 */
export default function vec2(x, y) {
    return new Vec2(x, y);
}

