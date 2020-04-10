package main

import (
	"fmt"

	. "../../internal/pkg/greeting"
)

func main() {
	greetMessage := Hello("Lee-Roy")

	fmt.Println(greetMessage)
}
