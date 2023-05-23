import {climbStairs1, climbStairs2, climbStairs3} from './index';
import {bench, describe} from 'vitest';

describe('climbStairs', function () {
    const n = 1000
    bench('climbStairs1', function () {
        climbStairs1(n);
    })
    bench('climbStairs2', function () {
        climbStairs2(n);
    })
    bench('climbStairs3', function () {
        climbStairs3(n);
    })

});

