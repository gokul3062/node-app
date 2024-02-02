const https = require('https');

const s = Date.now()


async function c() {
    https.request('https://www.google.com', (res) => {
        res.on('data', (res1) => {
        }) 
        res.on('end', (res2) => {
            console.log(Date.now() - s)
        })
    })
        .on('error', (err) => {
            console.log(err)
        })
        .end()
}


c()
c()
c()
c()
c()
c()
c()
c()
