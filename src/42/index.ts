export function trap(height: number[]): number {
    let sum: number = 0;

    let max_left: number = 0;
    let max_right: number = 0;

    let left: number = 1;
    let right: number = height.length - 2;

    for (let i = 1; i < height.length - 1; i++) {
        if (height[left - 1] < height[right + 1]) {
            max_left = Math.max(max_left, height[left - 1]);
            if (max_left > height[left]) {
                sum = sum + (max_left - height[left]);
            }
            left++;
        } else {
            max_right = Math.max(max_right, height[right + 1]);
            if (max_right > height[right]) {
                sum = sum + (max_right - height[right]);
            }
            right--;
        }
    }
    return sum;
}

/**
 * 运算过程
 *
 *
 * for  0   1   2   3   4   5   6   7   8   9   10
 *
 * num  0           1   1   2           3   5   6
 * L    1   2       3   4               5   6   7
 * R    10      9           8   7   4
 * maxL 0   0       1   1               2   2   2
 * maxR 10      9           8   7   6
 *
 * 如果左侧的墙低于右侧,并且当前高度小于左侧最高高度,则左侧最高高度-当前高度一定可以装水
 * 右侧同理
 */
