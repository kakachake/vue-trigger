export declare function cubicBezier(p1x: number, p1y: number, p2x: number, p2y: number): (x: number) => number;
export declare const ease: (x: number) => number;
export declare const easeIn: (x: number) => number;
export declare const easeOut: (x: number) => number;
export declare const easeInOut: (x: number) => number;
export declare const defaultBezier: {
    ease: (x: number) => number;
    easeIn: (x: number) => number;
    easeOut: (x: number) => number;
    easeInOut: (x: number) => number;
};
