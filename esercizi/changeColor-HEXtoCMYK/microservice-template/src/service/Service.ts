import colorConverter from 'color-convert'
import { TtfCmyk, TtfHex } from "../../../commons/src/model/Color"


export function convert(color: TtfHex): TtfCmyk {
    const daConvertire: TtfHex = color;
    const convertito = colorConverter.hex.cmyk(daConvertire.hex);
    return { cyan:convertito[0] ,magenta:convertito[1] , yellow:convertito[2], black:convertito[3] } as TtfCmyk;
}
