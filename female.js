import { users } from "./data.js";
const userFemale = users
  .filter((users) => users.gender === "female")
  .map(
    (users) => users.name.title + " " + users.name.first + " " + users.name.last
  );

console.log(userFemale);
