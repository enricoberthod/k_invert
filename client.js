var https = require('http');
const fetch = require("node-fetch");

const url = 'http://localhost:8000'

async function get(url) {
	console.log('\n\ngetting ' + url + '\n')
    try {
	const response = await fetch(url);
        const json = await response.json();
        console.log(json)
    } catch (error) {
        console.log(error);
    }
};

var k = 2;

get(url+'/k_invert?k='+k);