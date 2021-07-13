const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // Leer el token del Header
  const token = req.header("x-auth-token");

  // Revisar si no hay token
  if (!token) {
    return res.status(401).json({ msg: "There's no token, acces not allowed" });
  }

  // Validar el token
  try {
    const cifrado = jwt.verify(token, process.env.SECRETA);
    req.usuario = cifrado.usuario;
    next();
  } catch (error) {
    res.status(401).json({ msg: "No valid Token" });
  }
};
