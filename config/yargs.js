const description = {
    demand: true,
    alias: 'd',
    desc: 'TODO description'
};

const completed = {
    demand: true,
    alias: 'c',
    desc: 'Mark as completed your TODO'
}

const argv = require('yargs')
    .command( 'create', 'create a TODO', {
        description,
    })
    .command( 'update', 'Update a TODO', {
        description,
        complete
    })
    .command( 'show', 'Shows all yours TODO', {

    })
    .command( 'delete', 'delete a TODO', {
        description
    })
    .help()
    .argv;

    module.exports = {
        argv
    }