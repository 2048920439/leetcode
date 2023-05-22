import {describe, expect, it} from "vitest";
import {digitCount} from './index.ts'

describe('digitCount', function () {
    it('should return true if the digit count matches the binary representation of each digit', function () {
        expect(digitCount("1210")).toBe(true);
        expect(digitCount("030")).toBe(false);
        expect(digitCount("123")).toBe(false);
        expect(digitCount("4444")).toBe(false);
        expect(digitCount("0")).toBe(false);
        expect(digitCount("777777")).toBe(false);
        expect(digitCount("12345")).toBe(false);
        expect(digitCount("1010")).toBe(false);
        expect(digitCount("999")).toBe(false);
        expect(digitCount("20202")).toBe(false);
        expect(digitCount("555555555555")).toBe(false);
        expect(digitCount("111111111")).toBe(false);
    });
});


