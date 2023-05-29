import {describe, expect, test} from 'vitest';
import {majorityElement_has, majorityElement_MooreVoting} from './index.ts';


describe('majorityElement_has', () => t(majorityElement_has));
describe('majorityElement_MooreVoting', () => t(majorityElement_MooreVoting));

function t(majorityElement: (nums: number[]) => number[]) {
    test('returns majority elements in the array', () => {
        const nums: number[] = [1, 2, 2, 3, 2, 1, 1, 2, 3];
        expect(majorityElement(nums)).toEqual([2]);
    });

    test('returns majority elements when multiple majority elements exist', () => {
        const nums: number[] = [1, 2, 2, 3, 2, 1, 1, 2, 3, 3, 3];
        expect(majorityElement(nums).sort()).toEqual([2, 3]);
    });

    test('returns empty array when no majority element', () => {
        const nums: number[] = [1, 2, 3, 4, 5, 6];
        expect(majorityElement(nums)).toEqual([]);
    });

    test('returns empty array when input array is empty', () => {
        const nums: number[] = [];
        expect(majorityElement(nums)).toEqual([]);
    });

    test('returns the single element when input array has length 1', () => {
        const nums: number[] = [5];
        expect(majorityElement(nums)).toEqual([5]);
    });
}
