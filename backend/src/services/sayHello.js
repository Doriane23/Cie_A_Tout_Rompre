const sayHello = (req, res, next) => {
  console.info(
    "Hello toi ! Installe toi, notre ouvreuse va te guider jusqu'à ton siège"
  );

  next();
};

module.exports = sayHello;
