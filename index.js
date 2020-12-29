require('http').Server((req, res) => {
  const author = 'itmo287653'

  res.setHeader('X-Author', author)
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'x-test,Content-Type,Accept,Access-Control-Allow-Headers')

  if (req.url === '/result4/') {
    let body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();

      return res.end(JSON.stringify({
        message: author,
        'x-result': req.headers['x-test'],
        'x-body': body,
      }))
    })
  } else {
    res.end(author)
  }
}).listen(process.env.PORT)
