const BASE_URL = "https://jsonplaceholder.typicode.com";
const usersList = document.getElementById("usersList");
const userDetails = document.getElementById("userDetails");
const search = document.getElementById("search");

//  reading Website and set an Objekt
async function fetchUsers() {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    const users = await response.json();
    return users;
  } catch (error) {
    console.log(error);
  }
}

//
function displayUsers(users) {
  usersList.innerText = "";
  users.forEach((user) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item", "list-group-item-action");

    //  displayUserDetail   displayUserDetail(user) () => displayUserDetail(user)
    li.onclick = () => displayUserDetails(user);

    li.textContent = user.name;
    usersList.appendChild(li);
  });
}

function displayUserDetails({
  name,
  email,
  phone,
  website,
  company: { name: brand },
  address: { city, street, suite },
}) {
  userDetails.innerHTML = `
  <h2> ${name} </h2>
  <p> <strong>Email: </strong> ${email} </p>
  <p> <strong>Phone: </strong> ${phone.split(" ")[0]} </p>
  <p> <strong>Website: </strong> ${website} </p>
  <p> <strong>Name of Company: </strong>${brand} </p>
  <p> <strong>Address: </strong>${city}, ${street}, ${suite}</p>
  `;
}

const result = async () => {
  console.log(fetchUsers());
  const users = await fetchUsers();

  // search.addEventListener("input", (e) => {
  //   console.log(e.target.value);
  //   const filter = e.target.value.toLowerCase();
  //   const filteredUsers = users.filter(user => user.name.toLowerCase().includes(filter));
  //   displayUsers(filteredUsers);
  // });

  search.oninput = (e) => {
    console.log(e.target.value);
    const filter = e.target.value.toLowerCase();
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(filter));
    displayUsers(filteredUsers);
  }

  if (users) {
    displayUsers(users);
  }
};

result();

//  HW:
//  eine Box erstellen, die bei Klick entsteht:
//  1.  name
//  2.  email
//  3.  phone (nur Nummer, ohne Stadt Gebiet)
//  4.  website
//  5.  companyName
//  6   adress: (street, suite, city)
