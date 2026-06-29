class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let result = []
        for (let i = 0; i < nums.length; i++) {
            let res = 1
            for (let j = 0; j < nums.length; j++) {
                if (j === i) continue;
                    
                res = res * nums[j]
            }
            console.log("index -> "+i+" res -> "+res)
            result.push(res)
        }
        return result
    }
}
