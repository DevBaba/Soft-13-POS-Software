const Datastore = require("nedb");
const path = require("path");

// Initialize the database
let usersDB = new Datastore({
    filename: path.join(process.env.APPDATA, "POS/server/databases/users.db"),
    autoload: true
});

// Function to retrieve the admin password
function getAdminPassword() {
    usersDB.findOne({ username: "admin" }, function (err, user) {
        if (err) {
            console.error("Error retrieving admin password:", err);
        } else if (user) {
            console.log("Admin password:", user.password);
        } else {
            console.log("Admin user not found.");
        }
    });
}

// Call the function to get the admin password
getAdminPassword();
