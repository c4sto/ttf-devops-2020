import {convert} from '../service/Service';
import {Express} from 'express';
import { TtfCmyk , TtfHex } from "../../../commons/src/model/Color"


class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const color = JSON.parse(req.query.color) as TtfHex;
            const convertito: TtfCmyk  = convert(color);

            res.send(convertito);
        });
    }
}

export default HttpController;
