const k_invert = require('./k_invert').k_invert

//VALIDI
var a = [1,2,3,4,5]

test('k è un numero >0 e <=a.length', () => {
	expect(k_invert(a,3)).toEqual([3,4,5,1,2]);
});

test('k=1 ok', () => {
	a = [1,2,3,4,5]
	expect(k_invert(a,1)).toEqual([5,1,2,3,4]);
});

test('a contiene 1 elemento e k=1 ok', () => {
	expect(k_invert([1],1)).toEqual([1]);
});

//NON VALIDI

test('k negativo', () => {
	expect(k_invert(a,-3)).toEqual('error');
});

test('k = 0', () => {
	expect(k_invert(a,0)).toEqual('error');
});

test('k > a.length', () => {
	expect(k_invert(a,6)).toEqual('error');
});

test('k null', () => {
	expect(k_invert(a,null)).toEqual('error');
});

test('k NaN', () => {
	expect(k_invert(a,'a')).toEqual('error');
});

test('k reale', () => {
	expect(k_invert(a,2.23)).toEqual('error');
});

test('Numero parametri < 2', () => {
	expect(k_invert(a)).toEqual('error');
});

test('Numero parametri > 2', () => {
	expect(k_invert(a,4,32)).toEqual('error');
});

test('a = [] array vuoto', () => {
	a = []
	expect(k_invert(a,2)).toEqual('error');
});

test('a null', () => {
	a = null
	expect(k_invert(a,2)).toEqual('error');
});

