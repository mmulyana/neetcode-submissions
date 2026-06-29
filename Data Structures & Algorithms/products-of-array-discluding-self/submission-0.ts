class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let result = []
        for (let i = 0; i < nums.length; i++) {
            let res = 0
            for (let j = 0; j < nums.length; j++) {
                let leftArr = [...nums]
                leftArr.splice(i, 1)
                res = leftArr.reduce((acc, curr) => acc * curr, 1)
                leftArr = []
            }
            result.push(res)
        }
        return result
    }
}
