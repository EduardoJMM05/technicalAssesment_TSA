const db = require("./db");
const helper = require("../helper");

async function getModules() {
    const rows = await db.query("SELECT * FROM module;");

    const data = helper.emptyRows(rows);

    return { data };
}

async function createModule(modulo) {
    const resultado = await db.query(
        `INSERT INTO module(module_name, module_description) VALUES (\'${modulo.name}\', \'${modulo.description}\');`
    );

    let message = "Error al crear el registro";
    if (resultado.affectedRows) message = `Dato creado con exito`;
    return { message };
}

async function updateModule(id, modulo) {
    const resultado = await db.query(
        `UPDATE module SET module_name = '${modulo.name}', module_description = '${modulo.description}' WHERE module_id = ${id};`
    );

    let message = "Error al editar el registro";
    if (resultado.affectedRows) message = `Dato editado con exito`;
    return { message };
}

async function deleteModule(id) {
    const resultado = await db.query(
        `DELETE FROM module WHERE module_id = ${id};`
    );

    let message = "Error al eliminar el registro";
    if (resultado.affectedRows) message = `Dato eliminado con id = ${id}`;
    return { message };
}

module.exports = {
    getModules,
    createModule,
    updateModule,
    deleteModule,
};
