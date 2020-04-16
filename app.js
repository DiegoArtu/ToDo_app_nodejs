const argv = require('./config/yargs').argv;
const colors = require('colors');

const todo = require('./todo/todo');

let command = argv._[0];

switch (command) {
    case 'create':
        let network = todo.create( argv.description );
        console.log(network);
        break;

    case 'show':
        let list = todo.showToDo();

        for (let li of list) {
            console.log('========='.yellow);
            console.log(`${li.desc}`.green);
            console.log(`Status: ${li.completed}`.red);
            console.log('========='.yellow);
        }
        break;

    case 'update':
        let updated = todo.update( argv.description, argv.completed );
        console.log(updated);
        break;

    case 'delete' :
        let deleted = todo.deletetd( argv.description );
        console.log(deleted);
        break;

    default:
        break;
}