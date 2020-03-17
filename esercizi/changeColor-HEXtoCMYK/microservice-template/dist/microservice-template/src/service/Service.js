"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const color_convert_1 = __importDefault(require("color-convert"));
function convert(color) {
    const daConvertire = color;
    const convertito = color_convert_1.default.hex.cmyk(daConvertire.hex);
    return { cyan: convertito[0], magenta: convertito[1], yellow: convertito[2], black: convertito[3] };
}
exports.convert = convert;
//# sourceMappingURL=Service.js.map