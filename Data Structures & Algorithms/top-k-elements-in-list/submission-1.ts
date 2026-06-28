class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const dataMap = new Map<number, number>()
        for (let i = 0; i < nums.length; i++) {
            if (dataMap.has(nums[i])) {
                let prev = dataMap.get(nums[i])
                dataMap.set(nums[i], prev+1)
            } else {
                dataMap.set(nums[i], 1)
            }
        }
        const sortedKeys = [...dataMap.entries()]
            .sort((a, b) => b[1] - a[1])
            .map(([key]) => key);
        
        return sortedKeys.slice(0, k)
    }
}
