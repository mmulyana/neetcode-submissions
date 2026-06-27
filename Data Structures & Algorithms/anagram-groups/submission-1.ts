class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const mapData = new Map<string, string[]>();
        for (let i = 0; i < strs.length; i++) {
            let sortStr = this.sortString(strs[i]);
            if (mapData.has(sortStr)) {
                mapData.get(sortStr)!.push(strs[i]);
            } else {
                mapData.set(sortStr, [strs[i]]);
            }
        }
        let res: string[][] = []
        let i = 0;
        mapData.forEach((value) => {
            res[i] = value
            i++
        });
        return res
    }

    sortString(str: string) {
        return str.split("").sort().join("")
    }
}
