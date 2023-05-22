// 2283. 判断一个数的数字计数是否等于数位的值
export function digitCount(num: number | string): boolean {
    num = num.toString()
    const len = num.length
    for (let i = 0; i < len; i++) {
        if (getTotal(i.toString(), num) !== num[i]) return false
    }
    return true
}

function getTotal(k: string, num: string): string {
    let i: number = 0
    for (let n of num) k === n && i++
    return i.toString()
}
