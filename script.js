function homepage() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => {
      const contentElement = document.getElementById("content");
      contentElement.innerHTML = "";
      let row;

      data.forEach((comment, index) => {
        if (index % 2 === 0) {
          row = document.createElement("div");
          row.className = "row";
          contentElement.appendChild(row);
        }

        const box = createBox(comment);
        row.appendChild(box);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function createBox(comment) {
  const box = document.createElement("div");
  box.className = "box col-md-4";
  const boxContent = document.createElement("div");
  boxContent.className = "box-content";

  const title = document.createElement("h3");
  title.textContent = comment.name;

  const email = document.createElement("p");
  email.textContent = "Email: " + comment.email;

  const body = document.createElement("p");
  body.textContent = comment.body;

  boxContent.appendChild(title);
  boxContent.appendChild(email);
  boxContent.appendChild(body);

  box.appendChild(boxContent);
  return box;
}

function signupform() {
  const contentElement = document.getElementById("content");
  contentElement.innerHTML = `
      <div class="container-fluid">
          <form id="signupForm" onsubmit="return signup()">
              <div class="mb-3">
                  <label for="username" class="form-label">Username:</label>
                  <input type="text" class="form-control" id="username" required>
              </div>
              <div class="mb-3">
                  <label for="email" class="form-label">Email:</label>
                  <input type="email" class="form-control" id="email" required>
              </div>
              <div class="mb-3">
                  <label for="password" class="form-label">Create Password:</label>
                  <input type="password" class="form-control" id="password" required>
              </div>
              <div class="mb-3">
                  <label for="confirmPassword" class="form-label">Confirm Password:</label>
                  <input type="password" class="form-control" id="confirmPassword" required>
              </div><br>
              <button type="submit" class="btn btn-primary">Sign Up</button>
          </form><br>
          <a onclick="loginform()">Already have an account? Login</a>
      </div>
  `;
}

function signup() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return false;
  }

  alert("Signup successful");
  loginform();
  return false;
}
//col-md-6 offset-md-3 box
function loginform() {
  const contentElement = document.getElementById("content");
  contentElement.innerHTML = `
      <div class="container-fluid mt-6">
          <form id="loginForm" onsubmit="return login()">
              <div class="mb-3">
                  <label for="loginUsername" class="form-label">Username:</label>
                  <input type="text" class="form-control" id="loginUsername" required>
              </div>
              <div class="mb-3">
                  <label for="loginPassword" class="form-label">Password:</label>
                  <input type="password" class="form-control" id="loginPassword" required>
              </div><br>
              <button type="submit" class="btn btn-primary">Login</button>
          </form><br>
          <a onclick="signupform()">Need an account? Sign Up</a>
      </div>
  `;
}

function login() {
  const loginUsername = document.getElementById("loginUsername").value;
  const loginPassword = document.getElementById("loginPassword").value;

  if (loginUsername && loginPassword) {
    alert("Login successful");
    homepage();
  } else {
    alert("Invalid username or password");
  }

  return false;
}

homepage();
