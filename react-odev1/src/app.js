import getData from "./lib/service.js";

getData(1)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
