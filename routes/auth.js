// rutas para autenticar usuarios
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

//Iniciar sesión
// api/auth
router.post(
  "/",
  [
    check("email", "Give a valid e-mail").isEmail(),
    check(
      "password",
      "The Password must contain minimum 6 characters"
    ).isLength({
      min: 6,
    }),
  ],
  authController.autenticarUsuario
);

//Obtiene el usuario autenticado
router.get("/", auth, authController.usuarioAutenticado);
module.exports = router;
