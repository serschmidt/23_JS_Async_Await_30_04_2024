const BASE_URL = "https://jsonplaceholder.typicode.com";

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
  users.forEach((user) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item", "list-group-item-action")
    li.textContent = user.name;
    usersList.appendChild(li);

    li.onclick = () => {
        //  new empty list 
        usersInfo.innerHTML = "";
        //  set new paragraf inside the second list field
        const p = document.createElement("p");
        p.classList.add("list-group");
        //  constansts 
        // const userName = user.name;
        // const userEmail = user.email;
        //  //  first part of array of the phonenumber
        // const userPhone = user.phone.trim().split(" ")[0];
        // const userWebsite = user.website;
        // const userStreet = user.address.street;
        // const userSuite = user.address.suite;
        // const userCity = user.address.city;
               
               
        p.innerHTML = `
        <li class="list-group-item list-group-item-action ">
            ${user.name}
        </li>
        <li class="list-group-item list-group-item-action ">
            ${user.email}
        </li>
        <li class="list-group-item list-group-item-action ">
            ${user.phone.trim().split(" ")[0]}
        </li>
        <li class="list-group-item list-group-item-action ">
            ${user.website}
        </li>
        <li class="list-group-item list-group-item-action ">
            ${user.company.name}
        </li>
        <li class="list-group-item list-group-item-action ">
           <h5>Adress:</h5>
           <p> ${user.address.street} ${user.address.suite} </p>
           <p> ${user.address.city}</p>
           </li>
           
           `;
           //   send the paragraph to the second list field
           userDetails.appendChild(p);
           /*
           
        */
    }
  });
}

const result = async () => {
  console.log(fetchUsers());
  const users = await fetchUsers();
  displayUsers(users);
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