export function climbStairs(n: number): number {
    if (n === 1) return 1
    if (n === 2) return 2

    const dp: number[] = [0, 1, 2]
    for (let i = 3; i <= n; i++)
        dp.push(dp[i - 2] + dp[i - 1])
    return dp[n]
}

export function climbStairs1(n: number): number {
    let p: number = 0, q: number = 0, r: number = 1;
    for (let i = 1; i <= n; ++i) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
}
