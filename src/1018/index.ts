export function prefixesDivBy5(nums: number[]) {
    let n: number = 0;
    return nums.map((t) => (n = ((n << 1) + t) % 5) === 0);
}
