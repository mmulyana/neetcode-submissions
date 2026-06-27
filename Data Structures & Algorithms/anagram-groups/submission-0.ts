class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const mapData = new Map<string, number[]>();
        for (let i = 0; i < strs.length; i++) {
            let sortStr = this.sortString(strs[i]);
            if (mapData.has(sortStr)) {
                mapData.get(sortStr)!.push(i);
            } else {
                mapData.set(sortStr, [i]);
            }
        }
        let res: string[][] = []
        let i = 0;
        mapData.forEach((value, key) => {
            let result = value.map(i => strs[i])
            res[i] = [...result]
            i++
        });
        return res
    }

    sortString(str: string) {
        return str.split("").sort().join("")
    }
}
