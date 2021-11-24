export declare const getType: (o: any) => string;
export declare function decimalsLength(number: number): number;
export declare function getTopHeight(el: HTMLElement): {
    top: number;
    height: number;
};
/***
 * params: val
 * return: {
 *  type: MapValue Type,
 *  val: Format Value
 * }
 */
export declare function getMapTypeAndValue(val: string): {
    type: string;
    val: any;
};
/**
 * 根据选择器查找元素
 * @param selector <String> 选择器
 * @param context <DOM> 查询上下文
 * @return 返回查找到的元素
 */
export declare function getEl(selector: string, context?: Document): HTMLElement | HTMLCollectionOf<Element> | null;
export declare class Throttle {
    /**
     *
     * @param fn
     * @param awit
     */
    static use(fn: Function, awit?: number): (...args: any) => void;
}
export declare class Debounced {
    /**
     *
     * @param fn 要执行的函数
     * @param awit  时间
     * @param immediate 是否在触发事件后 在时间段n开始，立即执行，否则是时间段n结束，才执行
     */
    static use(fn: Function, awit?: number, immediate?: boolean): (...args: any) => void;
}
