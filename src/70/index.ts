export function climbStairs1(n: number): number {
    let p: number = 0, q: number = 0, r: number = 1;
    for (let i = 1; i <= n; ++i) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
}

export function climbStairs2(n: number): number {
    const sqrt5: number = Math.sqrt(5);
    const fibn: number = Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);
    return Math.round(fibn / sqrt5);
}

export function climbStairs3(n: number): number {
    const q = [[1, 1], [1, 0]];
    const res = pow(q, n);
    return res[0][0];

    function multiply(a: any, b: any): any {
        const c = new Array(2).fill(0).map(() => new Array(2).fill(0));
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j];
            }
        }
        return c;
    }

    function pow(a: any, n: any): any {
        let ret = [[1, 0], [0, 1]];
        while (n > 0) {
            if ((n & 1) === 1) {
                ret = multiply(ret, a);
            }
            n >>= 1;
            a = multiply(a, a);
        }
        return ret;
    }
}



