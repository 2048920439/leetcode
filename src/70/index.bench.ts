
import {climbStairs, climbStairs1} from './index';
import {bench, describe} from 'vitest';

describe('climbStairs', function () {
    bench('climbStairs performance test', function () {
        climbStairs(30);
    })
});
describe('climbStairs1', function () {
    bench('climbStairs performance1 test', function () {
        climbStairs1(30);
    })
});
