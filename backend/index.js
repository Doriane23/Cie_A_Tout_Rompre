const app = require("./src/app");

const PORT = 3310;

app.listen(PORT, () => {
  console.info(`Example app listening on PORT http://localhost:${PORT}`);
});
