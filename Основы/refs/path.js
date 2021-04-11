const path = require('path')

console.log('1) ' + __filename)
console.log('2) ' + path.basename(__filename))
console.log('3) ' + path.dirname(__filename))
console.log('4) ' + path.extname(__filename))

console.log(path.parse(__filename))

console.log(path.join(__dirname, 'test', 'test.html'))
console.log(path.resolve(__dirname, 'test', '/test.html'))