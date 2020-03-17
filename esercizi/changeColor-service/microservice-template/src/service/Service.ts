import colorConverter from 'color-convert'
import { TtfRgb, TtfHex } from "../../../commons/src/model/Color"


//TODO
export function convert(color: TtfHex): TtfRgb {
    const daConvertire: TtfHex = color;
    const convertito = colorConverter.hex.rgb(daConvertire.hex);
    return { red:convertito[0] ,green:convertito[1] , blue:convertito[2] } as TtfRgb;
}
