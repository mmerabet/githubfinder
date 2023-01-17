// Initialize class
const github = new GitHub();
// Search input
const searchUser = document.getElementById('searchUser');

// Add event listener
searchUser.addEventListener('keyup', (event) => {
  // Get the input
  const userText = event.target.value;

  if (userText !== '') {
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert

        } else {
          // Show profile
        }
      })
  } else {
    // Clear profile
  }
})