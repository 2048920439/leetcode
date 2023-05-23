import {climbStairs, climbStairs1} from './index';

import {test, expect, describe} from "vitest";

describe('climbStairs', function () {
    test('climbStairs returns the correct number of ways to climb the stairs', () => {
        expect(climbStairs(0)).toBe(0);
        expect(climbStairs(1)).toBe(1);
        expect(climbStairs(2)).toBe(2);
        expect(climbStairs(3)).toBe(3);
        expect(climbStairs(4)).toBe(5);
        expect(climbStairs(5)).toBe(8);
        expect(climbStairs(15)).toBe(987);
        // Add more test cases as needed
    });
})

describe('climbStairs1', function () {
    test('climbStairs1 returns the correct number of ways to climb the stairs', () => {
        expect(climbStairs1(0)).toBe(0);
        expect(climbStairs1(1)).toBe(1);
        expect(climbStairs1(2)).toBe(2);
        expect(climbStairs1(3)).toBe(3);
        expect(climbStairs1(4)).toBe(5);
        expect(climbStairs1(5)).toBe(8);
        expect(climbStairs1(15)).toBe(987);
        // Add more test cases as needed
    });
})
