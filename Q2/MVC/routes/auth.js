const express = require("express")
const { registerCtrl, loginCtrl, updateUser } = require("../controllers/auth")
const {validatorRegister, validatorLogin} = require("../validators/auth")
const router = express.Router()
const authMiddleware = require("../middleware/session")
const checkRol = require("../middleware/rol")
const { getItems } = require("../controllers/users")

/*** @openapi
* /api/auth/register:
*  post:
*      tags:
*      - User
*      summary: "User registter"
*      description: Register a new user
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: "#/components/schemas/user"
*      responses:
*          '200':
*              description: Returns the inserted object
*          '401':
*              description: Validation error
*      security:
*          - bearerAuth: []
*/

//POST http://localhost:3000/api/auth/register
router.post("/register", validatorRegister, registerCtrl)

/*** @openapi
* /api/auth/login:
*  post:
*      tags:
*      - User
*      summary: "Login user"
*      description: login user
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: "#/components/schemas/login"
*      responses:
*          '200':
*              description: Returns the inserted object
*          '401':
*              description: Validation error
*/
//POST http://localhost:3000/api/auth/login

router.post("/login", validatorLogin, loginCtrl) 


/*** @openapi
* /api/auth/update/{id}:
*  post:
*      tags:
*      - User
*      summary: Update user
*      description: Update a user by an admin
*      parameters:
*          -   name : id
*              in : path
*              description: id that need to be updated
*              required : true
*              schema:
*                  type: string
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: "#/components/schemas/user"
*      responses:
*          '200':
*              description: Returns the inserted object
*          '401':
*              description: Validation error
*      security:
*          - bearerAuth: []
*/
//PUT  http://localhost:3000/api/auth/:id
router.put("/update/:email",authMiddleware,checkRol(["admin"]), updateUser) 
//router.put("/:id",authMiddleware,checkRol(["admin"]), updateUser) 


module.exports = router
