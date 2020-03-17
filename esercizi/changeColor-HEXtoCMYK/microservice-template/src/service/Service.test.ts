import chai from 'chai';
import {convert} from './Service';
import   { hex2cmykTestData }  from '../../../commons/src/test-data/colors';

chai.config.includeStack = true;
const should = chai.should();

describe('test HEX to CMYK', () => {
    hex2cmykTestData.forEach((test) => {
        it(`conversione da HEX a CMYK`, () => {
            convert(test.hexValue).should.deep.equal(test.cmykValue);
        });
    });
});
