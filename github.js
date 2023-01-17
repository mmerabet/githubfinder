class GitHub {
  constructor() {
    this.client_id = '2b98ae8015ede7fd020c';
    this.client_secret = '20504e967de1f56e097dacedeb544122e096c01c';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}