const  { assert } = require('chai');
const functions = require('../cycles.js');

describe('cycles methods',() => {
    describe('showSimpleNum',() => {
        it('should return showSimpleNum(num)',()=> {
            const num = '';
            const expected = "некорректные данные" ;

            const actual = arrays.showSimpleNum(num);

            assert.deepEqual(actual,expected);
        });

        it('should return showSimpleNum(num) ',()=> {

            const expected = "некорректные данные" ;

            const actual = arrays.showSimpleNum();

            assert.deepEqual(actual,expected);
        });

        it('should return showSimpleNum(num)',()=> {
            const num = 3;
            const expected = "является простым числом" ;

            const actual = arrays.showSimpleNum(num);

            assert.deepEqual(actual,expected);
         });

        it('should return showSimpleNum(num)',()=> {
            const num = 4;
            const expected =  "не является простым числом" ;

            const actual = arrays.showSimpleNum(num);

            assert.deepEqual(actual,expected);
        });
    });
    describe('getRoot',() => {
        it('should return getRoot(num)',()=> {
            const num = '';
            const expected = "Введите корректное число" ;

            const actual = arrays.getRoot(num);

            assert.deepEqual(actual,expected);
        });

        it('should return getRoot(num) ',()=> {

            const expected = "Введите корректное число" ;

            const actual = arrays.getRoot();

            assert.deepEqual(actual,expected);
        });

        it('should return getRoot(num)',()=> {
            const num = 4;
            const expected = 2 ;

            const actual = arrays.getRoot(num);

            assert.deepEqual(actual,expected);
        });

        it('should return getRoot(num)',()=> {
            const num = 3;
            const expected =  1 ;

            const actual = arrays.getRoot(num);

            assert.deepEqual(actual,expected);
        });
    });
    describe('factorial',() => {
        it('should return factorial(num)',()=> {
            const num = '';
            const expected = "Введите корректное число" ;

            const actual = arrays.factorial(num);

            assert.deepEqual(actual,expected);
        });

        it('should return factorial(num) ',()=> {

            const expected = 'Введите верные данные' ;

            const actual = arrays.factorial();

            assert.deepEqual(actual,expected);
        });

        it('should return factorial(num)',()=> {
            const num = 4;
            const expected = 24 ;

            const actual = arrays.factorial(num);

            assert.deepEqual(actual,expected);
        });

        it('should return factorial(num)',()=> {
            const num = 0;
            const expected =  1 ;

            const actual = arrays.factorial(num);

            assert.deepEqual(actual,expected);
        });
    });
    describe('sumNum',() => {
        it('should return sumNum(num)',()=> {
            const num = '';
            const expected = "Введите корректное число" ;

            const actual = arrays.sumNum(num);

            assert.deepEqual(actual,expected);
        });

        it('should return sumNum(num) ',()=> {

            const expected = 'Введите верные данные' ;

            const actual = arrays.sumNum();

            assert.deepEqual(actual,expected);
        });

        it('should return sumNum(num)',()=> {
            const num = 45;
            const expected = 9 ;

            const actual = arrays.sumNum(num);

            assert.deepEqual(actual,expected);
        });

        it('should return sumNum(num)',()=> {
            const num = 0;
            const expected =  0 ;

            const actual = arrays.sumNum(num);

            assert.deepEqual(actual,expected);
        });
    });
    describe('showReverse',() => {
        it('should return showReverse(num)',()=> {
            const num = '';
            const expected = "Введите корректное число" ;

            const actual = arrays.showReverse(num);

            assert.deepEqual(actual,expected);
        });

        it('should return showReverse(num) ',()=> {

            const expected = 'Введите верные данные' ;

            const actual = arrays.showReverse();

            assert.deepEqual(actual,expected);
        });

        it('should return showReverse(num)',()=> {
            const num = 45;
            const expected = 54 ;

            const actual = arrays.showReverse(num);

            assert.deepEqual(actual,expected);
        });

        it('should return showReverse(num)',()=> {
            const num = 7596;
            const expected =  6957 ;

            const actual = arrays.showReverse(num);

            assert.deepEqual(actual,expected);
        });
    });
});