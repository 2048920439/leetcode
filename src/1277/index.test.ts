import {describe, expect, it} from "vitest";
import {countSquares} from "./index.ts";


describe('countSquares', function () {
    const matrix = [
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 1, 1, 1],
        [1, 1, 1, 1],
    ]
    it('should', function () {
        expect(countSquares(matrix)).toBe(22)
    })
})
