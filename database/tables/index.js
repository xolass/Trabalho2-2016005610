const { tables } = require('../index');

const createAll = (tableName) => {
    console.log(tables);

};

const dropAll = () => {

}

const drop = (tableName) => {

}

module.exports = {
    createAll,
    dropAll,
    drop,
}

setTimeout(createAll, 1000);