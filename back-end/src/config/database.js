const { options } = require("./routes")

async function connect(){
  const { Sequelize } = require("sequelize")
  const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    "postgres",
    process.env.DATABASE_PASSWORD,
    {
      host: process.env.DATABASE_HOST,
      dialect: "postgres"
    }
  )
  return sequelize
}


async function initDatabase(){
  const { QueryTypes, DataTypes } = require("sequelize")
  let db = await connect()

  // Função que cria a tabela desejada
  async function creatTableBags(db, name){
    try {
      const queryInterface = db.getQueryInterface()
      let { bags, feedback, admin_users } = require("../schemes/tableScheme")
      let tableScheme = undefined
      switch (name){
        case 'bags': 
          tableScheme = bags
          break
        case 'feedback': 
          tableScheme = feedback
          break
        case 'admin_users': 
          tableScheme = admin_users
          break
      }
      results = await queryInterface.createTable(name, tableScheme, {logging: false})
      console.log(`>> Tabela ${name} criada com sucesso.\n`)

    } catch (error) {
      console.log(`\n!! Houve um error ao criar a tabela ${name} !!`)
      console.log(error)
    }
  }
  // Função que verificar a tabela desejada
  async function tableExists(table = ""){
    let queryText = `SELECT EXISTS(SELECT FROM information_schema.tables WHERE table_name = '${table}' )`
    let results = await db.query(queryText, { type: QueryTypes.SELECT, logging: false })
    if (!results[0].exists) {
      console.log(`!! Tabela '${table}' não existe, será criada agora !!`)
      return false
    } 

    return true
  }

  try {
    // Função propria sequelize que testa a conexão com o banco de dados
    await db.authenticate({logging: false})
    console.log(">> Conexão com o banco de dados estabelecida com sucesso.\n")
  } catch (error) {
    console.log("!! Error ao conectar com o banco de dados !!")
    console.log(error)
    return 
  }
  if (!await tableExists("bags")) await creatTableBags(db, 'bags')
  if (!await tableExists("feedbacks")) await creatTableBags(db, 'feedbacks')
  if (!await tableExists("admin_users")) await creatTableBags(db, 'admin_users')
}
module.exports = { connect, initDatabase }