import database from "/infra/database.js";

async function status(request, response) {
  const result = await database.query("Select 1 + 1 as sum;");
  response.status(200).json({ chave: "valor" });
}

export default status;
