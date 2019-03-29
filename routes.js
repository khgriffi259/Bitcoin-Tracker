
const axios = require('axios');

module.exports = (app) => {
    
app.get('/express_backend', (req,res) => {
    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=10a393dc-cb84-4880-8e1e-1858329ac6a9&limit=5')
    .then(resp => res.send({express: resp.data}))
    .catch(error => console.log(error))
});


}