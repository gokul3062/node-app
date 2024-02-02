process.env.UV_THREADPOOL_SIZE = 8;
const crypto = require('crypto');
const s = Date.now();
crypto.pbkdf2('a', 'b', 100000, 512, 'sha256', (res) => {
    console.log('1:', Date.now() - s, res);
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha256', () => {
    console.log('2:', Date.now() - s);
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha256', () => {
    console.log('3:', Date.now() - s);
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha256', () => {
    console.log('4:', Date.now() - s);
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha256', () => {
    console.log('5:', Date.now() - s);
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha256', () => {
    console.log('6:', Date.now() - s);
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha256', () => {
    console.log('7:', Date.now() - s);
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha256', () => {
    console.log('8:', Date.now() - s);
})

// crypto.pbkdf2('a', 'b', 100000, 512, 'sha256', () => {
//     console.log('9:', Date.now() - s);
// })
