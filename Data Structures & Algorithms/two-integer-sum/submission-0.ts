class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let data = new Map()
        for (let i = 0; i < nums.length; i++) {
            let res = target - nums[i]
            if (data.has(res)) {
                return [data.get(res), i]
            }
            data.set(nums[i], i)
        }
    }
}
