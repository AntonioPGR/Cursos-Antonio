console.clear();

const http = require('http')

const handleGetMethod = (req, res) => {
   res.statusCode = 200
   res.end(JSON.stringify({ 
      user1: { 
         nickname: 'CripeerExtreme',
         NofFriends: 15,
         Status: 'Playing life is strange',
      },
      user2: { 
         nickname: 'CripeerExtreme',
         NofFriends: 15,
         Status: 'Playing life is strange',
      }
    }))
}

const handleMethodError = (req, res) => {
   res.statusCode = 501;
   res.end(`Unsuported request method: ${req.method}`)
}

http.createServer((req, res) => {
   const method = req.method

   switch (method) {
      case 'GET':
         handleGetMethod(req, res);
      break;
      default:
         handleMethodError(req, res);
   }
}).listen(8080);