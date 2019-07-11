
import point2 from "./point2.js";

export function range(min, max) {
    return { __type__: "range", from: min, to: max };
} 

export function random() {
    const signature = Array.prototype.map.call(arguments, o => o.__type__ || o.constructor.name || typeof(o)).join(" ");
    return (random.typeMap[signature] || random.errFn(signature)).apply(this, arguments);
}

random.errFn = function (signature) {
    console.error(`Undefined multimethod for signature "${signature}"`);
}

random.typeMap = {
    "range": function (range) {
        return Math.random() * (range.to - range.from) + range.from;
    },
    "range range": function (rangeX, rangeY) {
        return point2(random(rangeX), random(rangeY));
    }
}