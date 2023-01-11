const db = require("./db");
const helper = require("../helper");

async function getFiles() {
    const rows = await db.query("SELECT * FROM files;");

    const data = helper.emptyRows(rows);

    return { data };
}

async function createFile(file) {
    const resultado = await db.query(
        `INSERT INTO file(file_name, file_extension, file_full_path) VALUES (\'${file.name}\', \'${file.extension}\', \'${file.full_path}\');`
    );

    let message = "Error al crear el registro";
    if (resultado.affectedRows) message = `Dato creado con exito`;
    return { message };
}

async function updateFile(id, file) {
    const resultado = await db.query(
        `UPDATE file SET file_name = '${file.name}', file_extension = '${file.extension}', file_full_path = '${file.full_path}' WHERE file_id = ${id};`
    );

    let message = "Error al editar el registro";
    if (resultado.affectedRows) message = `Dato editado con exito`;
    return { message };
}

async function deleteFile(id) {
    const resultado = await db.query(`DELETE FROM file WHERE file_id = ${id};`);

    let message = "Error al eliminar el registro";
    if (resultado.affectedRows) message = `Dato eliminado con id = ${id}`;
    return { message };
}

module.exports = {
    getFiles,
    createFile,
    updateFile,
    deleteFile,
};
