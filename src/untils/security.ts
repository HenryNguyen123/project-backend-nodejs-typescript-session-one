const bcrypt = require("bcryptjs")

const hashUserPassword = async (password: string) => {
  const salt = await bcrypt.genSaltSync(10);
  const hash: string = await bcrypt.hashSync(password, salt);
  return hash
}

const isConvertPassword = async (inputPass: string, hashPass: string) => {
  return bcrypt.compareSync(inputPass, hashPass)
}

module.exports = {hashUserPassword, isConvertPassword}