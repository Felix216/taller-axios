const axios = require('axios')

const url = document.getElementById('url');

const fetchPost = async () => {
    const response = await axios.get(url.value);
    console.log(response.data);
}

fetchPost();