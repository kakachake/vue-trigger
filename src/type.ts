import { type } from "os";

export type CssVariable = `--${string}`;
export type TgFilter = {
  mode: string,
  values: Array<any>
}

export type Mapping = Record<string, string | number>
export interface TgElementConfig {
  name: string
  from: number
  to: number
  steps: number
  step: number
  mapping: Mapping
  filter: TgFilter
  edge: string,
  follow: any,
  mode: string,
  keyframe: Record<string, string | number>, // TODO?
  bezier: string | Array<number>, //bezier
  // obConfig: IntersectionObserverInit,
  percentage: number,
  top: number,
  height: number,
  range: number;
  increment: number;
  segments: number;
  decimals: number;
  multiplier: number;
}

export interface TgElement {
  $el: HTMLElement,
  top: number,
  height: number,
  config: TgElementConfig[]
}

export interface TriggerEles {
  [proppName: string]: TgElement
}
