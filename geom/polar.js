import point2 from "./point2";

/**
 * Creates a point from the corresponding polar coordinates
 * @param {number} angle [0, 2pi]
 * @param {number} rho [0, +\infty]
 */
export function polar2(angle, rho) {
    return point2(Math.cos(angle), Math.sin(angle)).mul(rho).asPoint2();
}