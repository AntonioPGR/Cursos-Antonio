console.clear()

const request_url = "https://www.youtube.com/cwatch?v=UtF6Jej8yb4&list=RDUtF6Jej8yb4&start_radio=1&t=44s&ab_channel=AviciiOfficialVEVO"
const url = require("url");

const request_url_module = new URL(request_url);

const protocol = request_url_module.protocol;
const hostname = request_url_module.hostname;
const pathname = request_url_module.pathname;
const searchParams = request_url_module.searchParams;

console.log(protocol);
console.log(hostname);
console.log(pathname);
console.log(searchParams);