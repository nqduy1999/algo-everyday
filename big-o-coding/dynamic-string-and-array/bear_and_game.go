package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	for scanner.Scan() {
		// Read n
		n, _ := strconv.Atoi(scanner.Text())

		// Read array a
		scanner.Scan()
		input := scanner.Text()
		parts := strings.Split(input, " ")
		a := make([]int, n)
		for i := 0; i < n; i++ {
			a[i], _ = strconv.Atoi(parts[i])
		}
		
		fmt.Println(parts)

		var ans int
		if a[0] > 15 {
			ans = 15
		} else {
			f := false
			pos := 0
			for i := 1; i < n; i++ {
				if a[i]-a[i-1] > 15 {
					pos = i - 1
					f = true
					break
				}
			}
			if f {
				ans = a[pos] + 15
			} else {
				ans = a[n-1] + 15
			}
		}

		if ans > 90 {
			fmt.Println(90)
		} else {
			fmt.Println(ans)
		}
	}
}
