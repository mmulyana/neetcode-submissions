func maxArea(heights []int) int {
	heighest := 0
	left := 0
	right := len(heights) - 1

	for i := 0; i < len(heights); i++ {
		lowest := 0
		if heights[left] < heights[right] {
			lowest = heights[left]
		} else {
			lowest = heights[right]
		}
		width := right - left
		
		if (lowest * width > heighest) {
			heighest = lowest * width
		}

		if heights[left] < heights[right] {
			left++
		} else if (heights[right] < heights[left]) {
			right--
		} else if (heights[right] == heights[left]) {
			left++
		}
	}

	return heighest
}
