import { TgElementConfig, TgFilter } from '../type';
declare const _default: {
    to: (value?: number | undefined) => number;
    from: (value?: number | undefined) => number;
    step: (value?: number | undefined) => number;
    name: (value: string) => any;
    steps: (value?: number | undefined) => number;
    mapping: (value?: Record<string, string> | undefined, config?: TgElementConfig | undefined) => Record<string, string> | undefined;
    filter: (value?: TgFilter | undefined) => TgFilter | undefined;
    edge(value: string): string;
    bezier(value?: string | number[] | undefined): string | number[] | undefined;
    mode(value?: string | undefined): string;
};
export default _default;
