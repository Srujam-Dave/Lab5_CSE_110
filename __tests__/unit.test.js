// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('check phone with dashes', () => {
  expect(isPhoneNumber('747-230-9122')).toBe(true);
});

test('check phone with parentheses', () => {
  expect(isPhoneNumber('(747)230-9122')).toBe(true);
});

test('wrong length phone num', () =>{
  expect(isPhoneNumber('111111')).toBe(false);
})

test('wrong punctuation', () => {
  expect(isPhoneNumber('11-(1111-1)111')).toBe(false);
})

test('good email', () => {
  expect(isEmail('srujamdave@gmail.com')).toBe(true);
});

test('with nums', () => {
  expect(isEmail('111@gmail.com')).toBe(true);
});

test('bad domain', () => {
  expect(isEmail('srujamdave@gmail.c!m')).toBe(false);
});

test('too many @s', () => {
  expect(isEmail('srujam@dave@gmail@com')).toBe(false);
});

test('generic good pass', () => {
  expect(isStrongPassword('a123456')).toBe(true);
});

test('underscores', () => {
  expect(isStrongPassword('a_1_2_3_4')).toBe(true);
});

test('no starting letter', () => {
  expect(isStrongPassword('1234567')).toBe(false);
});

test('bad characters', () => {
  expect(isStrongPassword('!!!!!!!!!!!!!!')).toBe(false);
});


test('2 digit month and day', () => {
  expect(isDate('01/01/0001')).toBe(true);
});

test('1 digit month and day', () => {
  expect(isDate('1/1/0001')).toBe(true);
});

test('bad month and day', () => {
  expect(isDate('111/111/0001')).toBe(false);
});

test('bad year', () => {
  expect(isDate('01/01/01')).toBe(false);
});


test('3 digit', () => {
  expect(isHexColor('777')).toBe(true);
});

test('6 digit', () => {
  expect(isHexColor('777777')).toBe(true);
});

test('4 digit', () => {
  expect(isHexColor('2222')).toBe(false);
});

test('5 digit', () => {
  expect(isHexColor('33333')).toBe(false);
});
