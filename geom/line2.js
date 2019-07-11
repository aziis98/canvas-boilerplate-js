
import { Point2 } from "./point2";

export class Line2 {
    
    /**
     * @param {Point2} p1 
     * @param {Point2} p2 
     */
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }

}

export default function line2(p1, p2) {
    return new Line2(p1.asPoint2(), p2.asPoint2());
}