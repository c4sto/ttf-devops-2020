"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const color_convert_1 = __importDefault(require("color-convert"));
//TODO
function convert(color) {
    const daConvertire = color;
    const convertito = color_convert_1.default.hex.rgb(daConvertire.hex);
    return { red: convertito[0], green: convertito[1], blue: convertito[2] };
}
exports.convert = convert;
//# sourceMappingURL=Service.js.map