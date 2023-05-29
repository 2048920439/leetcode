// has表解法  时间复杂度O(n) 空间复杂度O(n)
export function majorityElement_has(nums: number[]): number[] {
    const h = new Map<number, number>();

    for (let num of nums)
        h.set(num, (h.get(num) || 0) + 1);

    const result: number[] = [];

    const size = nums.length / 3;
    for (const [num, total] of h)
        if (total > size) result.push(num);

    return result;
}

export function majorityElement_MooreVoting(nums: number[]): number[] {
    let element1: number = 0,
        element2: number = 0,
        vote1: number = 0,
        vote2: number = 0;

    for (const num of nums) {
        switch (true) {
            case vote1 > 0 && num === element1:
                vote1++;
                break;
            case vote2 > 0 && num === element2:
                vote2++;
                break;
            case vote1 === 0:
                element1 = num;
                vote1++;
                break;
            case vote2 === 0:
                element2 = num;
                vote2++;
                break;
            default:
                vote1--;
                vote2--;

        }
    }

    let cnt1: number = 0,
        cnt2: number = 0;
    for (const num of nums) {
        vote1 > 0 && num === element1 && cnt1++;
        vote2 > 0 && num === element2 && cnt2++;
    }

    // 检测元素出现的次数是否满足要求
    const ans: number[] = [],
        size = Math.floor(nums.length / 3);
    vote1 > 0 && cnt1 > size && ans.push(element1);
    vote2 > 0 && cnt2 > size && ans.push(element2);
    return ans;
}
