
import point2 from "./point2.js";

/**
 * @typedef Interval
 * @property {number} min 
 * @property {number} max 
 */

/**
 * Creates an interval object
 * @param {number} min
 * @param {number} max 
 */
export function interval(min, max) {
    return { __type__: "interval", min, max };
} 

/**
 * Multimethod utility for generating random numeric structures.
 * 
 * See `random.typeMap` for avaiable call singatures, for now this supports:
 * 
 * - `random(interval(min, max))`: Generates a random number in the provided interval.
 * 
 * - `random(interval(minX, maxX), interval(minY, maxY))`: Generates a Point2 in the provided bounds. 
 */
export function random() {
    const signature = Array.prototype.map.call(arguments, o => o.__type__ || o.constructor.name || typeof(o)).join(" ");
    return (random.typeMap[signature] || random.errFn(signature)).apply(this, arguments);
}

random.errFn = function (signature) {
    console.error(`Undefined multimethod for signature "${signature}"`);
}

random.typeMap = {
    /**
     * @param {Interval} interval 
     */
    "interval": function (interval) {
        return Math.random() * (interval.max - interval.min) + interval.min;
    },
    /**
     * @param {Interval} intervalX 
     * @param {Interval} intervalY 
     */
    "interval interval": function (intervalX, intervalY) {
        return point2(random(intervalX), random(intervalY));
    }
}