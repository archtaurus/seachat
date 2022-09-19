#!/usr/bin/env node
const { program } = require('commander')
const { server } = require('./server')
const { version, description } = require('./package.json')

program
    .version(version)
    .description(description)
    .option('-h, --host <host>', 'set server\'s host', process.env.host || 'localhost')
    .option('-p, --port <port>', 'set server\'s port', process.env.port || 8000)
    .parse()

const { host, port } = program.opts()
server.listen(port, host, console.log(`seachat server started at http://${host}:${port}/`))
