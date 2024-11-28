const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/posts/3')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
