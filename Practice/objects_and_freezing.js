var user = {
        username: "sudeep",
        age: 21,
        isLoggedIn: true,
    }
    //displays username
console.log("Username: " + user['username'])

//updating age
user['age'] = 25;
console.log("Updated age: " + user['age']);

Object.freeze(user)

user['isLoggedIn'] = false;
console.log("Freezed objects cannot be modified: " + user['isLoggedIn']);