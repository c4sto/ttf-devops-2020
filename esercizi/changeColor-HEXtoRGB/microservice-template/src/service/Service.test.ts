import chai from 'chai';
import {convert} from './Service';
import   { hex2rgbTestData }  from '../../../commons/src/test-data/colors';

chai.config.includeStack = true;
const should = chai.should();

describe('test HEX to RGB', () => {
    hex2rgbTestData.forEach((test) => {
        it(`conversione da HEX a RGB`, () => {
            convert(test.hexValue).should.deep.equal(test.rgbValue);
        });
    });
});
