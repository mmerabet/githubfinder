// Initialize class
const github = new GitHub();
const ui = new UI();
// Search input
const searchUser = document.getElementById("searchUser");

// Add event listener
searchUser.addEventListener("keyup", (event) => {
  // Get the input
  const userText = event.target.value;

  if (userText !== "") {
    github.getUser(userText).then((data) => {
      // Clear any remaining alert
      ui.clearAlert();
      if (data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
