class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false
        let dataS = new Map()
        let dataT = new Map()

        for (let i = 0; i < s.length; i++) {
            if (dataS.has(s[i])) {
                let prev = dataS.get(s[i])
                dataS.set(s[i], prev + 1)
            } else {
                dataS.set(s[i], 1)
            }
            if (dataT.has(t[i])) {
                let prev = dataT.get(t[i])
                dataT.set(t[i], prev + 1)
            } else {
                dataT.set(t[i], 1)
            }
        }
        console.log("dataS", dataS)
        console.log("dataT", dataT)

        let valid = true;
        dataS.forEach((value, key) => {
            if (dataT.get(key) !== value) valid = false 
        })
        return valid
    }
}
