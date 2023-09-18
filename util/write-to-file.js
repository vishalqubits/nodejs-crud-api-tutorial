const fs = require("fs");

module.exports = (data) => {
  let filePath = "./data/";
  let fileName = "movies.json";

  try {
    fs.writeFileSync(filePath + fileName, JSON.stringify(data), "utf-8");
  } catch (err) {
    console.log(err);
  }
};
