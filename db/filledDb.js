module.exports = () => {
    const { faker } = require('@faker-js/faker');
    const _ = require('lodash');

    const lengthCourseTitle = 5

    return {
        curso: _.times(5, (n) => ({
            id: n + 1,
            idcurso: n + 122,
            ds_titulo: faker.lorem.word(lengthCourseTitle),
            ds_descricao: faker.lorem.sentence(),
        }))
    }
}