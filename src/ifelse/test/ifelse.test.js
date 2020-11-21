const  { assert } = require('chai');
const functions = require('../ifelse.js');

describe('ifelse methods',() => {
    describe('getResult',() => {
        it('should return getResult(num)',()=> {
            const num = '';
            const expected = "Ввелите число" ;

            const actual = arrays.getResult(num);

            assert.deepEqual(actual,expected);
        });

        it('should return getResult(num) ',()=> {

            const expected = "Введите все данные " ;

            const actual = arrays.getResult();

            assert.deepEqual(actual,expected);
        });

        it('should return getResult(num)',()=> {
            const num = 3, 5;
            const expected = 8 ;

            const actual = arrays.getResult(num);

            assert.deepEqual(actual,expected);
         });

        it('should return getResult(num)',()=> {
            const num = 4, 2;
            const expected =  8 ;

            const actual = arrays.getResult(num);

            assert.deepEqual(actual,expected);
        });
    });
    describe('getQuadrant',() => {
        it('should return getQuadrant(num)',()=> {
            const num = '';
            const expected = 'Введите число ' ;

            const actual = arrays.getQuadrant(num);

            assert.deepEqual(actual,expected);
        });

        it('should return getQuadrant(num) ',()=> {

            const expected = "Введите все данные " ;

            const actual = arrays.getQuadrant();

            assert.deepEqual(actual,expected);
        });

        it('should return getQuadrant(num)',()=> {
            const num = 4, 2;
            const expected = 'Первая четверть (I) ' ;

            const actual = arrays.getQuadrant(num);

            assert.deepEqual(actual,expected);
        });

        it('should return getQuadrant(num)',()=> {
            const num = 1, -5;
            const expected =  'Четвертая  четверть (IV) ' ;

            const actual = arrays.getQuadrant(num);

            assert.deepEqual(actual,expected);
        });
    });
    describe('getPositive',() => {
        it('should return getPositive(num)',()=> {
            const num = '';
            const expected = "Ввелите число " ;

            const actual = arrays.getPositive(num);

            assert.deepEqual(actual,expected);
        });

        it('should return getPositive(num) ',()=> {

            const expected = "Введите все данные " ;

            const actual = arrays.getPositive();

            assert.deepEqual(actual,expected);
        });

        it('should return getPositive(num)',()=> {
            const num = 4 , 5, -6;
            const expected = 9 ;

            const actual = arrays.getPositive(num);

            assert.deepEqual(actual,expected);
        });

        it('should return getPositive(num)',()=> {
            const num = 0;
            const expected =  0 ;

            const actual = arrays.getPositive(num);

            assert.deepEqual(actual,expected);
        });
    });
    describe('getMax',() => {
        it('should return getMax(num)',()=> {
            const num = '';
            const expected = "Ввелите число " ;

            const actual = arrays.getMax(num);

            assert.deepEqual(actual,expected);
        });

        it('should return getMax(num) ',()=> {

            const expected = "Введите все данные " ;

            const actual = arrays.getMax();

            assert.deepEqual(actual,expected);
        });

        it('should return getMax(num)',()=> {
            const num = 1 , 3, 7;
            const expected = 24 ;

            const actual = arrays.getMax(num);

            assert.deepEqual(actual,expected);
        });

        it('should return getMax(num)',()=> {
            const num = 0;
            const expected =  0 ;

            const actual = arrays.getMax(num);

            assert.deepEqual(actual,expected);
        });
    });
describe('getGrade',() => {
        it('should return getGrade(num)',()=> {
            const num = '';
            const expected = "Ввелите число " ;

            const actual = arrays.getGrade(num);

            assert.deepEqual(actual,expected);
        });

        it('should return getGrade(num) ',()=> {

            const expected = "Введите все данные " ;

            const actual = arrays.getGrade();

            assert.deepEqual(actual,expected);
        });

        it('should return getGrade(num)',()=> {
            const num = 77;
            const expected = 'Ваша оценка "A" ' ;

            const actual = arrays.getGrade(num);

            assert.deepEqual(actual,expected);
        });

        it('should return getGrade(num)',()=> {
            const num = 45;
            const expected =  'Ваша оценка "D" ' ;

            const actual = arrays.getGrade(num);

            assert.deepEqual(actual,expected);
        });
    });
});