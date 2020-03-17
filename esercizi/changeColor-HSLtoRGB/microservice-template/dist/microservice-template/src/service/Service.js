"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const color_convert_1 = __importDefault(require("color-convert"));
function convert(color) {
    const daConvertire = color;
    const convertito = color_convert_1.default.hsl.rgb([daConvertire.hue, daConvertire.saturation, daConvertire.lightness]);
    return { red: convertito[0], green: convertito[1], blue: convertito[2] };
}
exports.convert = convert;
//# sourceMappingURL=Service.js.map