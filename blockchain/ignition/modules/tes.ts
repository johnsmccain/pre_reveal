const fs = require("fs");
const contractsDir =`${__dirname}/../../../frontend/contractsData`;

if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }
