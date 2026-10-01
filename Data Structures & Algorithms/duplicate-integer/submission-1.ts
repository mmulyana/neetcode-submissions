class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const data = new Set<number>()
        let hasDuplicate = false
        nums.forEach(item => {
            if (data.has(item)) {
                hasDuplicate = true
            }
            data.add(item)
        })
        return hasDuplicate
    }
}
