export function countSquares(matrix: number[][]): number {
    let ans = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i && j && matrix[i][j])
                matrix[i][j] = Math.min(matrix[i][j - 1], matrix[i - 1][j], matrix[i - 1][j - 1]) + 1;
            ans += matrix[i][j];
        }
    }

    return ans;
}
