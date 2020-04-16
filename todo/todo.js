const fs = require('fs');

let listToDo = [];

const saveDB =  () => {

    let data = JSON.stringify( listToDo );

    fs.writeFile( 'database/data.json', data, (e) => {

        if (e) {
            throw new Error( e );
        }else {
            console.log('TODO SAVED!!! GOOD!!!');
        }

    })
}

const create = (desc) => {
    

    loadDB();

    let todo = {
        desc,
        completed: false
    }

    listToDo.push( todo );

    saveDB();

    return todo;

}

const loadDB = () => {

    try {
        listToDo = require('../database/data.json');
    } catch (e) {
        listToDo = [];
    }


    console.log(listToDo);

}

const showToDo = () => {

    listToDo = require('../database/data.json');

    return listToDo;

}

const update = (desc, completed = true) => {

    loadDB();

    let index = listToDo.findIndex( net => net.desc === desc );

    if (index >= 0) {
        listToDo[index].completed = completed;
        saveDB();
        return true;
    } else {
        return false
    }

}

const deletetd = ( desc ) => {
    loadDB();

    let newList = listToDo.filter( net => net.desc !== desc );

    if (listToDo.length === newList.length) {
        return false;
    } else {
        listToDo = newList;
        saveDB();
        return true;
    }
}

module.exports = {
    create,
    loadDB,
    showToDo,
    update,
    deletetd
}