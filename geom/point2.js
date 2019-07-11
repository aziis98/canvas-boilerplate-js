
import { Vec2 } from "./vec2.js";

/**
 * Rappresents a point in 2d space
 */
export class Point2 extends Vec2 {
    constructor(x, y) {
        super(x, y);
    }

    midpoint(other) {
        return this.interpTo(other, 0.5);
    }

    /**
     * @param {Point2} other 
     */
    vectorTo(other) {
        return other.sub(this);
    }

}

/**
 * @param {number} x 
 * @param {number} y 
 */
export default function point2(x, y) {
    return new Point2(x, y);
}

// Conversions

// Overrides default behavior of creating a new Point2 if already a Point2
Point2.prototype.asPoint2 = function() {
    return this;
}

/**
 * Converts a Vec2 to a Point2
 * @returns {Point2}
 */
Vec2.prototype.asPoint2 = function() {
    return new Point2(this.x, this.y);
}