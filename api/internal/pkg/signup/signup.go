package signUp

import . "../../../config"

var ValidUser string

var ValidPassword string

func Register(username string, password string, configurations Configurations) Model {
	if len(username) < 1 {
		return Model{Code: 400, Condition: false, Message: "Unsatisfactory input variables"}
	}
	if len(password) < 1 {
		return Model{Code: 400, Condition: false, Message: "Unsatisfactory input variables"}
	}

	if username != ValidUser {
		return Model{Code: 400, Condition: false, Message: "Unsatisfactory input variables"}
	}

	if password != ValidPassword {
		return Model{Code: 400, Condition: false, Message: "Unsatisfactory input variables"}
	}

	return Model{Code: 200, Condition: true, Message: "Success"}
}
