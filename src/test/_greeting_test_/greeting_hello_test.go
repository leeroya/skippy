package _greeting_test_

import (
	"testing"

	"../../internal/pkg/greeting"
)

func TestHello(t *testing.T) {

	emptyResult := greeting.Hello("Dude") //Should Return "Hello Dude!"

	if emptyResult != "Hello Dude!" {
		t.Errorf("hello(\"\") failed, expected %v got %v", "Hello Dude!", emptyResult)
	}
}
