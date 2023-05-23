import {climbStairs1, climbStairs2, climbStairs3} from './index';

import {test, expect, describe} from "vitest";

describe('climbStairs', function () {
    test('climbStairs1', () => {
        expect(climbStairs1(1)).toBe(1);
        expect(climbStairs1(2)).toBe(2);
        expect(climbStairs1(3)).toBe(3);
        expect(climbStairs1(4)).toBe(5);
        expect(climbStairs1(5)).toBe(8);
        expect(climbStairs1(15)).toBe(987);
    });
    test('climbStairs2', () => {
        expect(climbStairs2(1)).toBe(1);
        expect(climbStairs2(2)).toBe(2);
        expect(climbStairs2(3)).toBe(3);
        expect(climbStairs2(4)).toBe(5);
        expect(climbStairs2(5)).toBe(8);
        expect(climbStairs2(15)).toBe(987);
    });
    test('climbStairs3', () => {
        expect(climbStairs3(1)).toBe(1);
        expect(climbStairs3(2)).toBe(2);
        expect(climbStairs3(3)).toBe(3);
        expect(climbStairs3(4)).toBe(5);
        expect(climbStairs3(5)).toBe(8);
        expect(climbStairs3(15)).toBe(987);
    });
})

