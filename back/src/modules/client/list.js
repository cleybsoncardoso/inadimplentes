const client = require('./../../schemas/Client')
const { formatResponse } = require('./../../utils');

module.exports = async (req, res) => {
  try {
    const clientList = await client.aggregate([
      { $match: { 'billets.paid': false } },
      {
        $group: {
          "_id": "$_id",
          "name": { "$first": "$name" },
          "since": { "$first": { "$min":  '$billets.date' }},
          "total": { "$first": { "$sum":  '$billets.value' }},
        }
      },
    ]);
    return formatResponse(res, clientList)
  } catch (err) {
    console.log(err);
    return formatResponse(res, null, "Erro para obter a lista de clientes", 500);
  }
}