import point2 from "./point2";

export function polar2(angle, rho) {
    return point2(Math.cos(angle), Math.sin(angle)).mul(rho).asPoint2();
}