const getUser = () => {
  axios
    .get("https://api.github.com/users/junkes00")
    .then((response) => {
      const users = response.data;
      console.log(response.data);
      populateData(users);
    })
    .catch((error) => {
      console.error("An error ocurred while searching for a user", error);
    });
};

const populateData = (data) => {
  const name = document.getElementById("name");
  const username = document.getElementById("username");
  const currentCompany = document.getElementById("company");
  const bio = document.getElementById("bio");

  name.textContent = data.name;
  username.textContent = data.login;
  currentCompany.textContent = data.company;
  bio.textContent = `Bio: ${data.bio}`;
};

const getRepos = () => {
  axios
    .get("https://api.github.com/users/junkes00/repos")
    .then((response) => {
      const repos = response.data.length;
      console.log(response.data);
      populateReposData(repos);
    })
    .catch((error) =>
      console.error("An error ocurred while searching for the repos", error)
    );
};

const populateReposData = (data) => {
  const publicRepos = document.getElementById("public-repos");
  publicRepos.textContent = `Public repos: ${data}`;
};

getUser();
getRepos();
