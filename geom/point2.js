
import { Vec2 } from "./vec2.js";

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

export default function point2(x, y) {
    return new Point2(x, y);
}

// Conversions

Point2.prototype.asPoint2 = function() {
    return this;
}

Vec2.prototype.asPoint2 = function() {
    return new Point2(this.x, this.y);
}