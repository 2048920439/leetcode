import {describe, bench} from "vitest";
import {prefixesDivBy5} from './index'

describe('prefixesDivBy5', function () {
    const arr = new Array(60)
        .fill(undefined)
        .map(() => Math.random() > .5 ? 1 : 0)

    bench.skip('should return the correct array of boolean values', function () {
        prefixesDivBy5(arr)
    })
});


