package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func findMinimalSegment(n, k int, a []int) (int, int) {
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	// Read the first line: n and k
	line1, _ := reader.ReadString('\n')
	line1 = strings.TrimSpace(line1)
	parts := strings.Split(line1, " ")
	n, _ := strconv.Atoi(parts[0])
	k, _ := strconv.Atoi(parts[1])

	// Read the second line: array elements
	line2, _ := reader.ReadString('\n')
	line2 = strings.TrimSpace(line2)
	parts = strings.Split(line2, " ")
	a := make([]int, n)
	for i := 0; i < n; i++ {
		a[i], _ = strconv.Atoi(parts[i])
	}

	// Find the minimal segment
	resultL, resultR := findMinimalSegment(n, k, a)
	fmt.Println(resultL, resultR)
	if resultL == -1 && resultR == -1 {
		fmt.Println("-1 -1")
	} else {
		fmt.Println(resultL, resultR)
	}
}
