// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success");
//   }, 2000);
// });

//Very Tedious To write
const fetchResponse = fetch("./userName.json");

let resultFromApi;
fetchResponse
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    console.log("From Promise Version: ", result);
    resultFromApi = result;
  });

//Async Await

async function getUserName() {
  try {
    const response = await fetch("./userName.json");
    const userDetails = await response.json();
    return userDetails.userName;
  } catch (error) {
    console.log("In Get Username", error);
    throw new Error("Error State"); //Throws a new errors if catch block runs
  }
}

async function getUserProfile(userName) {
  const response = await fetch("./user.json");
  const userInfo = await response.json();
  return userInfo.userName == userName ? userInfo : null;
}

const fetchUserDetails = async () => {
  try {
    const userName = await getUserName();
    const userProfile = await getUserProfile(userName);
    if (!userProfile) {
      console.log("Profile Does Not Exist");
      return;
    }

    console.log(
      `Username: ${userProfile.userName} - Works as a ${userProfile.profession}`
    );
  } catch (error) {
    console.log("In Fetch UserDetails", error);
  }
};
fetchUserDetails();
