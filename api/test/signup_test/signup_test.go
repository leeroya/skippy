package signUp_test

import (
	"fmt"
	"testing"

	. "../../config"
	"../../internal/pkg/signUp"
	"github.com/spf13/viper"
)

func GetConfig() Configurations {

	viper.SetConfigName("config")

	viper.AddConfigPath("../../config")

	viper.AutomaticEnv()

	viper.SetConfigType("yml")

	var configuration Configurations

	if err := viper.ReadInConfig(); err != nil {
		fmt.Printf("Error reading config file, %s", err)
	}

	err := viper.Unmarshal(&configuration)
	if err != nil {
		fmt.Printf("Unable to decode into struct, %v", err)
	}

	return configuration
}

func Test_UseCase_signUp_Register_GivenEmptyUserNameAndPassword_ShouldReturnModelConditionFalse(t *testing.T) {
	var config = GetConfig()
	signUp.ValidUser = "ValidUser"
	signUp.ValidPassword = "ValidPassword"
	result := signUp.Register("", "", config)

	if result.Condition != false {
		t.Errorf("Register(\"\") failed, expected %v got %v", false, result)
	}
}

func Test_UseCase_signUp_Register_GivenEmptyUserName_ShouldReturnModelConditionFalse(t *testing.T) {
	var config = GetConfig()
	signUp.ValidUser = "ValidUser"
	signUp.ValidPassword = "ValidPassword"
	result := signUp.Register("", "foo", config)

	if result.Condition != false {
		t.Errorf("Register(\"\") failed, expected %v got %v", false, result)
	}
}

func Test_UseCase_signUp_Register_GivenEmptyPassword_ShouldReturnModelConditionFalse(t *testing.T) {
	var config = GetConfig()
	signUp.ValidUser = "ValidUser"
	signUp.ValidPassword = "ValidPassword"
	result := signUp.Register("foo", "", config)

	if result.Condition != false {
		t.Errorf("Register(\"\") failed, expected %v got %v", false, result)
	}
}

func Test_UseCase_signUp_Register_GivenInvalidUsernameAndInvalidPassword_ShouldReturnModelConditionFalse(t *testing.T) {
	var config = GetConfig()
	signUp.ValidUser = "ValidUser"
	signUp.ValidPassword = "ValidPassword"
	result := signUp.Register("foo", "foo", config)

	if result.Condition != false {
		t.Errorf("Register(\"\") failed, expected %v got %v", true, result)
	}
}

func Test_UseCase_signUp_Register_GivenUsernameAndPassword_ShouldReturnModelConditionTrue(t *testing.T) {
	var config = GetConfig()
	signUp.ValidUser = "ValidUser"
	signUp.ValidPassword = "ValidPassword"
	result := signUp.Register("ValidUser", "ValidPassword", config)

	if result.Condition != true {
		t.Errorf("Register(\"\") failed, expected %v got %v", true, result)
	}
}
