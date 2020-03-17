import colorConverter from 'color-convert'
import { TtfRgb, TtfHsl } from "../../../commons/src/model/Color"


export function convert(color: TtfHsl): TtfRgb {
    const daConvertire: TtfHsl = color;
    const convertito = colorConverter.hsl.rgb([daConvertire.hue, daConvertire.saturation, daConvertire.lightness]);
    return { red:convertito[0] ,green:convertito[1] , blue:convertito[2] } as TtfRgb;
}
