/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}


api.dados = function(req, res) {

    res.json([
        { usuario:"AntonioPGR", senha:"8Xgmwo67rwt", website:"amazon", cdr:"5hFG89", dia:"2022-08-24 00:00:00" },
        { usuario:"Antonio Pacheco", senha:"uwPsHyckmgg", website:"Kabum!", cdr:"387Aea", dia:"2020-04-22 00:00:00" },
        { usuario:"CripeerExtreme", senha:"}$2Z-cs89pr", website:"Xbox", cdr:"BUd47e", dia:"2019-07-13 00:00:00" },
        { usuario:"Cripeer_Extreme", senha:"sdHphcrDjjj", website:"Roblox", cdr:"81tuV4", dia:"2021-09-08 00:00:00" },
        { usuario:"lucianapacheco24@gmail.com", senha:"i-8mD]imown", website:"alura", cdr:"24RGV5", dia:"2022-01-08 00:00:00" },
    ]);
    
};


module.exports = api;