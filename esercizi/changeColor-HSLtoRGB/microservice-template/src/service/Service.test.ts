import chai from 'chai';
import {convert} from './Service';
import   { hsl2rgbTestData }  from '../../../commons/src/test-data/colors';

chai.config.includeStack = true;
const should = chai.should();

describe('test HSL to RGB', () => {
    hsl2rgbTestData.forEach((test) => {
        it(`conversione da HSL a RGB`, () => {
            convert(test.hslValue).should.deep.equal(test.rgbValue);
        });
    });
});
