"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = require("../service/Service");
//TODO
class HttpController {
    constructor(server) {
        server.get('/', (req, res) => {
            const color = JSON.parse(req.query.color);
            const convertito = Service_1.convert(color);
            res.send(convertito);
        });
    }
}
exports.default = HttpController;
//# sourceMappingURL=HttpController.js.map