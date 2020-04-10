package greeting

import "fmt"

func Hello(user string) string {
	return fmt.Sprintf("Hello %v!", user)
}
