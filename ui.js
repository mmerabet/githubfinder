class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
      <div class="col-md-3">
        <img class="img-fluid mb-2"src="${user.avatar_url}" alt="" />
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mt-3 mb-2">View profile</a>
      </div>
      <div class="col-md-9">
        <span class="badge badge-primary mt-1">Public repos: ${user.public_repos}</span>
        <span class="badge badge-secondary mt-1">Public gists: ${user.public_gists}</span>
        <span class="badge badge-success mt-1">Followers: ${user.followers}</span>
        <span class="badge badge-primary mt-1">Following: ${user.following}</span>
        <br><br>
        <ul class="list-group">
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Website/Blog: ${user.blog}</li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Member since: ${user.created_at}</li>
        </ul>
      </div>
    </div>
  </div>
  <h3 class="page-heading mb-3">Latest Repos</h3>
  <div id="repos"></div>
    `;
  }

  clearProfile(){
    this.profile.innerHTML = '';
  }

  clearAlert(){
    const alert = document.querySelector('.alert');
    if (alert) {
      alert.remove();
    }
  }

  showAlert(message, alertType){
    const div = document.createElement('div');
    div.classList = alertType;
    div.appendChild(document.createTextNode(message));
    const searchContainer = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    searchContainer.insertBefore(div, search);
    setTimeout(() => this.clearAlert(), 3000);
  }

  showRepos(repos){
    let output = '';
    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_black">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary mt-1">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary mt-1">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success mt-1">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });
    document.getElementById('repos').innerHTML = output;
  }
}
