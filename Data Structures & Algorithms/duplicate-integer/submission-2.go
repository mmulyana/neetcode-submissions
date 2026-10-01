func hasDuplicate(nums []int) bool {
    data := make(map[int]struct{})

    for _, item := range nums {
        if _, exist := data[item]; exist {
            return true
        }
        data[item] = struct{}{}
    }

    return false
}
