(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.trigger = factory());
})(this, (function () { 'use strict';

  var bind = (ob, element, name) => {
      element.setAttribute('data-trigger-name', name);
      ob && ob.observe(element);
  };

  /**
   * @copyright Maichong Software Ltd. 2016 http://maichong.it
   * @date 2016-01-20
   * @author Liang <liang@maichong.it>
   */

  var numbers = '0123456789';
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var specials = '~!@#$%^*()_+-=[]{}|;:,./<>?';

  /**
   * Generate random string
   * @param {Number} length
   * @param {Object} options
   */
  function random(length, options) {
    length || (length = 8);
    options || (options = {});

    var chars = '';
    var result = '';

    if (options === true) {
      chars = numbers + letters + specials;
    } else if (typeof options == 'string') {
      chars = options;
    } else {
      if (options.numbers !== false) {
        chars += (typeof options.numbers == 'string') ? options.numbers : numbers;
      }

      if (options.letters !== false) {
        chars += (typeof options.letters == 'string') ? options.letters : letters;
      }

      if (options.specials) {
        chars += (typeof options.specials == 'string') ? options.specials : specials;
      }
    }

    while (length > 0) {
      length--;
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }

  var stringRandom = random.default = random;

  const defaultOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0
  };
  function observer (cb, options = defaultOptions) {
      // Check if `IntersectionObserver` is available
      if (typeof IntersectionObserver === 'undefined') {
          console.warn('IntersectionObserver is not supported in this browser');
          throw new Error('IntersectionObserver is not supported in this browser');
      }
      return new IntersectionObserver(cb, options);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var rgbColor = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
  	module.exports = factory() ;
  }(commonjsGlobal, (function () {
  var namedColors = {
    aliceblue: 'f0f8ff',
    antiquewhite: 'faebd7',
    aqua: '00ffff',
    aquamarine: '7fffd4',
    azure: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '000000',
    blanchedalmond: 'ffebcd',
    blue: '0000ff',
    blueviolet: '8a2be2',
    brown: 'a52a2a',
    burlywood: 'deb887',
    cadetblue: '5f9ea0',
    chartreuse: '7fff00',
    chocolate: 'd2691e',
    coral: 'ff7f50',
    cornflowerblue: '6495ed',
    cornsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: '00ffff',
    darkblue: '00008b',
    darkcyan: '008b8b',
    darkgoldenrod: 'b8860b',
    darkgray: 'a9a9a9',
    darkgreen: '006400',
    darkkhaki: 'bdb76b',
    darkmagenta: '8b008b',
    darkolivegreen: '556b2f',
    darkorange: 'ff8c00',
    darkorchid: '9932cc',
    darkred: '8b0000',
    darksalmon: 'e9967a',
    darkseagreen: '8fbc8f',
    darkslateblue: '483d8b',
    darkslategray: '2f4f4f',
    darkturquoise: '00ced1',
    darkviolet: '9400d3',
    deeppink: 'ff1493',
    deepskyblue: '00bfff',
    dimgray: '696969',
    dodgerblue: '1e90ff',
    feldspar: 'd19275',
    firebrick: 'b22222',
    floralwhite: 'fffaf0',
    forestgreen: '228b22',
    fuchsia: 'ff00ff',
    gainsboro: 'dcdcdc',
    ghostwhite: 'f8f8ff',
    gold: 'ffd700',
    goldenrod: 'daa520',
    gray: '808080',
    green: '008000',
    greenyellow: 'adff2f',
    honeydew: 'f0fff0',
    hotpink: 'ff69b4',
    indianred: 'cd5c5c',
    indigo: '4b0082',
    ivory: 'fffff0',
    khaki: 'f0e68c',
    lavender: 'e6e6fa',
    lavenderblush: 'fff0f5',
    lawngreen: '7cfc00',
    lemonchiffon: 'fffacd',
    lightblue: 'add8e6',
    lightcoral: 'f08080',
    lightcyan: 'e0ffff',
    lightgoldenrodyellow: 'fafad2',
    lightgrey: 'd3d3d3',
    lightgreen: '90ee90',
    lightpink: 'ffb6c1',
    lightsalmon: 'ffa07a',
    lightseagreen: '20b2aa',
    lightskyblue: '87cefa',
    lightslateblue: '8470ff',
    lightslategray: '778899',
    lightsteelblue: 'b0c4de',
    lightyellow: 'ffffe0',
    lime: '00ff00',
    limegreen: '32cd32',
    linen: 'faf0e6',
    magenta: 'ff00ff',
    maroon: '800000',
    mediumaquamarine: '66cdaa',
    mediumblue: '0000cd',
    mediumorchid: 'ba55d3',
    mediumpurple: '9370d8',
    mediumseagreen: '3cb371',
    mediumslateblue: '7b68ee',
    mediumspringgreen: '00fa9a',
    mediumturquoise: '48d1cc',
    mediumvioletred: 'c71585',
    midnightblue: '191970',
    mintcream: 'f5fffa',
    mistyrose: 'ffe4e1',
    moccasin: 'ffe4b5',
    navajowhite: 'ffdead',
    navy: '000080',
    oldlace: 'fdf5e6',
    olive: '808000',
    olivedrab: '6b8e23',
    orange: 'ffa500',
    orangered: 'ff4500',
    orchid: 'da70d6',
    palegoldenrod: 'eee8aa',
    palegreen: '98fb98',
    paleturquoise: 'afeeee',
    palevioletred: 'd87093',
    papayawhip: 'ffefd5',
    peachpuff: 'ffdab9',
    peru: 'cd853f',
    pink: 'ffc0cb',
    plum: 'dda0dd',
    powderblue: 'b0e0e6',
    purple: '800080',
    red: 'ff0000',
    rosybrown: 'bc8f8f',
    royalblue: '4169e1',
    saddlebrown: '8b4513',
    salmon: 'fa8072',
    sandybrown: 'f4a460',
    seagreen: '2e8b57',
    seashell: 'fff5ee',
    sienna: 'a0522d',
    silver: 'c0c0c0',
    skyblue: '87ceeb',
    slateblue: '6a5acd',
    slategray: '708090',
    snow: 'fffafa',
    springgreen: '00ff7f',
    steelblue: '4682b4',
    tan: 'd2b48c',
    teal: '008080',
    thistle: 'd8bfd8',
    tomato: 'ff6347',
    turquoise: '40e0d0',
    violet: 'ee82ee',
    violetred: 'd02090',
    wheat: 'f5deb3',
    white: 'ffffff',
    whitesmoke: 'f5f5f5',
    yellow: 'ffff00',
    yellowgreen: '9acd32'
  };

  var colorDefs = [{
    re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
    example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
    process: function process(bits) {
      return [parseInt(bits[1], 10), parseInt(bits[2], 10), parseInt(bits[3], 10)];
    }
  }, {
    re: /^(\w{2})(\w{2})(\w{2})$/,
    example: ['#00ff00', '336699'],
    process: function process(bits) {
      return [parseInt(bits[1], 16), parseInt(bits[2], 16), parseInt(bits[3], 16)];
    }
  }, {
    re: /^(\w{1})(\w{1})(\w{1})$/,
    example: ['#fb0', 'f0f'],
    process: function process(bits) {
      return [parseInt(bits[1] + bits[1], 16), parseInt(bits[2] + bits[2], 16), parseInt(bits[3] + bits[3], 16)];
    }
  }];

  var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /**
   * RGBColor
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  var RGBColor = function () {
    function RGBColor(color) {
      _classCallCheck(this, RGBColor);

      var colorString = color;
      this.ok = false;

      // just accept strings
      if (!(typeof colorString === 'string')) {
        return;
      }

      // strip any leading #
      if (colorString.charAt(0) === '#') {
        // remove # if any
        colorString = colorString.substr(1, 6);
      }

      colorString = colorString.replace(/ /g, '').toLowerCase();

      // before getting into regexps, try simple matches
      // and overwrite the input
      if (Object.prototype.hasOwnProperty.call(namedColors, colorString)) {
        colorString = namedColors[colorString];
      }
      // emd of simple type-in colors

      // search through the definitions to find a match
      for (var i = 0; i < colorDefs.length; i += 1) {
        var def = colorDefs[i];
        var bits = def.re.exec(colorString);
        if (bits) {
          var _def$process = def.process(bits);

          var _def$process2 = _slicedToArray(_def$process, 3);

          this.r = _def$process2[0];
          this.g = _def$process2[1];
          this.b = _def$process2[2];

          this.ok = true;
        }
      }

      // validate/cleanup values
      if (this.r < 0 || Number.isNaN(this.r) || this.r === undefined) {
        this.r = 0;
      } else if (this.r > 255) {
        this.r = 255;
      }
      if (this.g < 0 || Number.isNaN(this.g) || this.g === undefined) {
        this.g = 0;
      } else if (this.g > 255) {
        this.g = 255;
      }
      if (this.b < 0 || Number.isNaN(this.b) || this.b === undefined) {
        this.b = 0;
      } else if (this.b > 255) {
        this.b = 255;
      }
    }

    _createClass(RGBColor, [{
      key: 'isValid',
      value: function isValid() {
        return this.ok;
      }
    }, {
      key: 'rgb',
      value: function rgb() {
        return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
      }
    }, {
      key: 'hex',
      value: function hex() {
        var r = this.r.toString(16);
        var g = this.g.toString(16);
        var b = this.b.toString(16);
        if (r.length === 1) r = '0' + r;
        if (g.length === 1) g = '0' + g;
        if (b.length === 1) b = '0' + b;
        return '#' + r + g + b;
      }
    }, {
      key: 'channels',
      value: function channels() {
        return { r: this.r, g: this.g, b: this.b };
      }
    }]);

    return RGBColor;
  }();

  function rgbcolor(color) {
    return new RGBColor(color);
  }

  return rgbcolor;

  })));

  });

  const getType = (o) => {
      const s = Object.prototype.toString.call(o);
      const match = s.match(/\[object (.*?)\]/);
      return match && match.length ? match[1].toLowerCase() : 'null';
  };
  function decimalsLength(number) {
      if (Math.floor(number.valueOf()) === number.valueOf())
          return 0;
      return number.toString().split('.')[1].length || 0;
  }
  function getTopHeight(el) {
      let { top, height } = el.getBoundingClientRect();
      top = top + window.scrollY;
      return {
          top,
          height
      };
  }
  // Judge the MapValue type
  /***
   * params: val
   * return: {
   *  type: MapValue Type,
   *  val: Format Value
   * }
   */
  function getMapTypeAndValue(val) {
      // number
      if (!isNaN(Number(val))) {
          return {
              type: 'number',
              val: +val
          };
      }
      else {
          const color = rgbColor(val);
          // 'isValid()' is true when the parsing was a success
          if (color.isValid()) {
              return {
                  type: 'color',
                  val: color.hex()
              };
          }
      }
      // unknown
      return {
          type: 'unknown',
          val
      };
  }
  class Debounced {
      /**
       *
       * @param fn 要执行的函数
       * @param awit  时间
       * @param immediate 是否在触发事件后 在时间段n开始，立即执行，否则是时间段n结束，才执行
       */
      static use(fn, awit = 1000, immediate = false) {
          let timer;
          return (...args) => {
              if (timer)
                  clearInterval(timer);
              if (immediate) {
                  if (!timer)
                      fn.apply(this, args);
                  timer = setTimeout(function () {
                      timer = null;
                  }, awit);
              }
              else {
                  timer = setTimeout(() => {
                      fn.apply(this, args);
                  }, awit);
              }
          };
      }
  }

  function cubicBezier(p1x, p1y, p2x, p2y) {
      const ZERO_LIMIT = 1e-6;
      // Calculate the polynomial coefficients,
      // implicit first and last control points are (0,0) and (1,1).
      const ax = 3 * p1x - 3 * p2x + 1;
      const bx = 3 * p2x - 6 * p1x;
      const cx = 3 * p1x;
      const ay = 3 * p1y - 3 * p2y + 1;
      const by = 3 * p2y - 6 * p1y;
      const cy = 3 * p1y;
      function sampleCurveDerivativeX(t) {
          // `ax t^3 + bx t^2 + cx t` expanded using Horner's rule
          return (3 * ax * t + 2 * bx) * t + cx;
      }
      function sampleCurveX(t) {
          return ((ax * t + bx) * t + cx) * t;
      }
      function sampleCurveY(t) {
          return ((ay * t + by) * t + cy) * t;
      }
      // Given an x value, find a parametric value it came from.
      function solveCurveX(x) {
          let t2 = x;
          let derivative;
          let x2;
          // https://trac.webkit.org/browser/trunk/Source/WebCore/platform/animation
          // first try a few iterations of Newton's method -- normally very fast.
          // http://en.wikipedia.org/wikiNewton's_method
          for (let i = 0; i < 8; i++) {
              // f(t) - x = 0
              x2 = sampleCurveX(t2) - x;
              if (Math.abs(x2) < ZERO_LIMIT) {
                  return t2;
              }
              derivative = sampleCurveDerivativeX(t2);
              // == 0, failure
              /* istanbul ignore if */
              if (Math.abs(derivative) < ZERO_LIMIT) {
                  break;
              }
              t2 -= x2 / derivative;
          }
          // Fall back to the bisection method for reliability.
          // bisection
          // http://en.wikipedia.org/wiki/Bisection_method
          let t1 = 1;
          /* istanbul ignore next */
          let t0 = 0;
          /* istanbul ignore next */
          t2 = x;
          /* istanbul ignore next */
          while (t1 > t0) {
              x2 = sampleCurveX(t2) - x;
              if (Math.abs(x2) < ZERO_LIMIT) {
                  return t2;
              }
              if (x2 > 0) {
                  t1 = t2;
              }
              else {
                  t0 = t2;
              }
              t2 = (t1 + t0) / 2;
          }
          // Failure
          return t2;
      }
      function solve(x) {
          return sampleCurveY(solveCurveX(x));
      }
      return solve;
  }
  //内置默认的贝塞尔曲线
  const defaultBezier = {
      ease: cubicBezier(0.25, 0.1, 0.25, 1),
      easeIn: cubicBezier(0.42, 0, 1, 1),
      easeOut: cubicBezier(0, 0, 0.58, 1),
      easeInOut: cubicBezier(0.42, 0, 0.58, 1)
  };

  const DEFAULT_TO = 1;
  const DEFAULT_FROM = 0;
  const DEFAULT_STEP = 1;
  const DEFAULT_STEPS = 100;
  const DEFAULT_EDGE = 'cover';
  const DEFAULT_MODE = 'retain';
  var formats = {
      to: (value) => {
          return value !== undefined ? Number(value) : DEFAULT_TO;
      },
      from: (value) => {
          return value !== undefined ? Number(value) : DEFAULT_FROM;
      },
      step: (value) => {
          return value !== undefined ? Number(value) : DEFAULT_STEP;
      },
      name: (value) => {
          if (!value) {
              console.warn(`name is not set`);
          }
          if (value.substring(0, 2) === `--`) {
              return value;
          }
          // Auto prepend -- for a CSS variable name
          return `--${value}`;
      },
      steps: (value) => {
          let result = value !== undefined ? Number(value) : DEFAULT_STEPS;
          // Should never be 0
          if (result === 0) {
              result = DEFAULT_STEPS;
          }
          return result;
      },
      mapping: (value, config) => {
          if (value === undefined) {
              return value;
          }
          let mapping = value;
          const keys = Object.keys(mapping);
          if (keys.length) {
              keys.forEach((item) => {
                  if (item.indexOf(',') > -1) {
                      // Multiple Values
                      item.split(',').forEach((key) => {
                          mapping[key.trim()] = mapping[item];
                      });
                      delete mapping[item];
                  }
                  else if (item.indexOf('...') > -1) {
                      let [from, to] = item
                          .split('...')
                          .map((val) => {
                          return +val;
                      })
                          .sort((a, b) => a - b);
                      let i = from;
                      while (i <= to) {
                          i = Number(i.toFixed((config && config.decimals) || 2));
                          mapping[i.toString()] = mapping[item];
                          i += (config && config.increment) || 0.01;
                      }
                      delete mapping[item];
                  }
              });
          }
          return mapping;
      },
      filter: (value) => {
          return value;
      },
      edge(value) {
          // only supports cover / inset for now
          if (!value || !['cover', 'inset'].includes(value)) {
              value = DEFAULT_EDGE;
          }
          return value;
      },
      bezier(value) {
          if (value === undefined) {
              return undefined;
          }
          if (getType(value) === 'array') {
              if (value.length !== 4) {
                  throw new Error('数组长度必须为4！');
              }
          }
          else if (!defaultBezier.hasOwnProperty(value)) {
              throw new Error('该bazier函数默认值不存在！');
          }
          return value || undefined;
      },
      mode(value) {
          return value === undefined ? DEFAULT_MODE : value;
      }
  };

  const formatValues = (config) => {
      for (const key of Object.keys(formats)) {
          let value = config[key];
          config[key] = formats[key](value, config);
      }
      const { to, from, step, steps } = config;
      const resOptions = calcOption(from, to, step, steps);
      for (const key of Object.keys(resOptions)) {
          config[key] = resOptions[key];
      }
      return config;
  };
  const calcOption = (from, to, step, steps) => {
      // 计算范围
      const range = Math.abs(to - from);
      // 计算步长
      const increment = step === 0 ? range / steps : step;
      // 计算步数
      const segments = range / increment;
      //
      const multiplier = from > to ? -1 : 1;
      //计算小数点位数，用于匹配mapping对象
      const decimals = decimalsLength(increment);
      return {
          range,
          increment,
          segments,
          multiplier,
          decimals
      };
  };

  // convert #hex notation to rgb array
  const parseColor = function (hexStr) {
      return hexStr.length === 4
          ? hexStr
              .substr(1)
              .split('')
              .map(function (s) {
              return 0x11 * parseInt(s, 16);
          })
          : [hexStr.substr(1, 2), hexStr.substr(3, 2), hexStr.substr(5, 2)].map(function (s) {
              return parseInt(s, 16);
          });
  };
  // zero-pad 1 digit to 2
  const pad = function (s) {
      return s.length === 1 ? '0' + s : s;
  };
  const gradientColors = function (startColor, endColor, steps, gamma) {
      let i, j, ms, me, output = [], so = [];
      gamma = gamma || 1;
      let normalize = function (channel) {
          return Math.pow(channel / 255, gamma);
      };
      const start = parseColor(startColor).map(normalize);
      const end = parseColor(endColor).map(normalize);
      for (i = 0; i < steps; i++) {
          ms = i / (steps - 1);
          me = 1 - ms;
          for (j = 0; j < 3; j++) {
              so[j] = pad(Math.round(Math.pow(start[j] * me + end[j] * ms, 1 / gamma) * 255).toString(16));
          }
          output.push('#' + so.join(''));
      }
      return output;
  };

  const parseAttr = (triggerEle) => {
      const el = triggerEle.$el;
      let { top, height } = getTopHeight(el);
      triggerEle.top = top;
      triggerEle.height = height;
      triggerEle.config.forEach((config) => {
          if (config.follow !== undefined) {
              let { top, height } = getTopHeight(config.follow);
              config.top = top;
              config.height = height;
          }
      });
  };
  const parseValue = (triggerEle) => {
      const scrolled = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const el = triggerEle.$el;
      const configs = triggerEle.config;
      // console.log(name, top, height)
      // 遍历每一个配置项
      configs.forEach((config) => {
          const { from, name, mapping, mode, range, multiplier, decimals } = config;
          // console.log(from)
          const percentage = calcPercentage(triggerEle, config, scrolled, clientHeight);
          config.percentage = percentage;
          // 计算最终值
          // 废弃 let mappingValue = (from + Math.floor((segments + 1) * percentage) * increment * multiplier).toFixed(decimals)
          let mappingValue = +(from + range * percentage * multiplier).toFixed(decimals);
          let value = mappingValue;
          if (mapping && Object.keys(mapping).length) {
              if (typeof mapping[mappingValue] !== 'undefined') {
                  value = mapping[mappingValue];
              }
              else if (mode === 'smooth') {
                  let region = calcKeyFrameRegion(mapping, mappingValue);
                  if (region.length) {
                      value = calcKeyFrameValue(mapping, mappingValue, region);
                  }
                  else {
                      return;
                  }
              }
              else {
                  if (mode === 'exact') {
                      el.style.removeProperty(name);
                  }
                  return;
              }
          }
          el.style.setProperty(name, value.toString());
          el.dispatchEvent(new CustomEvent('tg', {
              // @ts-ignore
              target: el,
              detail: {
                  name,
                  value,
                  percentage
              }
          }));
      });
  };
  // 计算百分比
  const calcPercentage = (triggerEle, config, scrolled, clientHeight) => {
      let { edge, follow, bezier } = config;
      let { top, height } = follow === undefined ? triggerEle : config;
      let percentage = edge === 'cover'
          ? Math.min(Math.max((scrolled + clientHeight - top) / (clientHeight + height), 0), 1)
          : Math.min(Math.max((scrolled - top) / (height - clientHeight), 0), 1);
      if (bezier !== undefined) {
          if (getType(bezier) === 'array') {
              let [p1x, p1y, p2x, p2y] = bezier;
              percentage = cubicBezier(p1x, p1y, p2x, p2y)(percentage);
          }
          else {
              percentage = defaultBezier[bezier](percentage);
          }
      }
      config.percentage = percentage;
      return percentage;
  };
  // Calculate the result value of the keyframe corresponding to the current value
  const calcKeyFrameValue = (mapping, value, region) => {
      const [lkey, rkey] = region;
      const lValue = getMapTypeAndValue(mapping[lkey]);
      const rValue = getMapTypeAndValue(mapping[rkey]);
      const curKeyRange = Math.abs(value - +lkey);
      const percentage = curKeyRange / (+rkey - +lkey);
      // If the value is a color value
      if (rValue.type === 'color' && lValue.type === 'color') {
          // TODO: Link the steps here with user settings……
          const steps = 100;
          const graColor = gradientColors(lValue.val, rValue.val, steps);
          const key = (percentage * steps).toFixed(0);
          return graColor[key];
      }
      else {
          const range = Math.abs(rValue.val - lValue.val);
          const multiplier = lValue.val > rValue.val ? -1 : 1;
          return lValue.val + range * percentage * multiplier;
      }
  };
  // 计算当前value在mapping的哪个区间
  const calcKeyFrameRegion = (mapping, value) => {
      if (Object.keys(mapping).length === 1) {
          return [];
      }
      else {
          let lastKey = '', currentKey = '';
          for (const key of Object.getOwnPropertyNames(mapping).sort((a, b) => {
              return +a - +b;
          })) {
              if (lastKey === null) {
                  lastKey = key;
                  continue;
              }
              else {
                  currentKey = key;
                  if ((value >= +lastKey && value <= +currentKey) || (value >= +currentKey && value <= +lastKey)) {
                      return [lastKey, currentKey];
                  }
              }
              lastKey = key;
          }
      }
      return [];
  };

  let triggerActiveNames = [];
  let triEles = new Map();
  const ob = observer((entries) => {
      entries.forEach((entry) => {
          let { target } = entry;
          // let triName = target.getAttribute('data-trigger-name') as string
          if (entry.isIntersecting) {
              triggerActiveNames.push(target);
          }
          else {
              // Remove element from array if not intersecting
              triggerActiveNames = triggerActiveNames.filter(function (el) {
                  return el !== target;
              });
          }
      });
  });
  const setEventListeners = () => {
      window.addEventListener('scroll', (e) => {
          triggerActiveNames.forEach((el) => {
              const triggerEle = triEles.get(el);
              parseValue(triggerEle);
          });
      });
      window.addEventListener('resize', Debounced.use(() => {
          triEles.forEach((el) => {
              parseAttr(el);
              parseValue(el);
          });
      }, 200));
  };
  var index = {
      install(app) {
          app.config.globalProperties.$trigger = {
              bind: triggerBind,
              destroy: triggerDestroy
          };
          app.directive('trigger', {
              mounted: (el, binding) => {
                  let config = binding.value;
                  triggerBind(el, config);
              },
              beforeUnmount: (el) => {
                  triggerDestroy(el);
              }
          });
          setEventListeners();
      }
  };
  const triggerBind = (el, config) => {
      let parseEl;
      if (typeof el === 'string') {
          // const temp = getEl(el)
          try {
              const temp = document.querySelectorAll(el);
              if (!temp.length) {
                  throw new Error('There is no node named ' + el);
              }
              else {
                  parseEl = temp;
              }
          }
          catch (e) {
              throw new Error(e);
          }
      }
      else {
          parseEl = el;
      }
      // 如果传来的配置为对象，将其封装为数组
      if (getType(config) === 'object') {
          config = [config];
      }
      //对配置文件进行预处理
      config = config.map((item) => {
          return formatValues(item);
      });
      if (getType(parseEl) === 'nodelist') {
          Array.from(parseEl).forEach((el) => {
              generTgEle(el, config);
          });
      }
      else {
          generTgEle(parseEl, config);
      }
      //生成tgElement对象，并缓存
      function generTgEle(el, config) {
          // let tgElement: TgElement = { $el: el, config }
          let tgElement = { $el: el, top: 0, height: 0, config };
          let name = stringRandom(16, { numbers: false });
          triEles.set(el, tgElement);
          //绑定IntersectionObserver事件
          bind(ob, el, name);
          //初始化属性
          parseAttr(triEles.get(el));
          parseValue(tgElement);
      }
  };
  const triggerDestroy = (el) => {
      let parseEl;
      if (typeof el === 'string') {
          // const temp = getEl(el)
          try {
              const temp = document.querySelectorAll(el);
              if (!temp.length) {
                  console.error(new Error('There is no node named ' + el));
                  return;
              }
              else {
                  parseEl = temp;
              }
          }
          catch (e) {
              throw new Error(e);
          }
      }
      else {
          parseEl = el;
      }
      if (getType(parseEl) === 'nodelist') {
          Array.from(parseEl).forEach((el) => {
              triEles.delete(el);
          });
      }
      else {
          triEles.delete(parseEl);
      }
  };

  return index;

}));
