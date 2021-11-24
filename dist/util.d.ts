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
