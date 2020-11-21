const  { assert } = require('chai');
const functions = require('../func.js');

describe('functions methods',() => {
    describe('resultWeek', () => {
        it('should return resultWeek(str)',() => {
            const num =  1 ;
            const expected = "Понедельник" ;

            const actual = functions.resultWeek(num);

            assert.deepEqual(actual,expected);

        });

        it('should return resultWeek(str)',() => {
            const num =  '' ;
            const expected = "Введите число " ;

            const actual = functions.resultWeek(num);

            assert.deepEqual(actual,expected);

        });

        it('should return resultWeek(str)',() => {
            const expected = "Введите число " ;

            const actual = functions.resultWeek();

            assert.deepEqual(actual,expected);

        });

        it('should return resultWeek(str)',() => {
            const str = 12 ;
            const expected = "Неверно введен день недели" ;

            const actual = functions.resultWeek(str);

            assert.strictEqual(actual,expected);

        });
    });
});