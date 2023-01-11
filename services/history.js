const db = require("./db");
const helper = require("../helper");

async function getAllHistory() {
    const rows = await db.query("SELECT * FROM history_control;");

    const data = helper.emptyRows(rows);

    return { data };
}

async function createHistory(history) {
    const resultado = await db.query(
        `INSERT INTO history_control(history_control_type_history_control_type_id, module_module_id, history_control_name, history_control_history_control_id, history_control_description, history_control_version, history_control_active, file_file_id) VALUES (${history.type_id}, ${history.module_id}, \'${history.name}\', ${history.history_control_id}, \'${history.description}\', \'${history.version}\', ${history.active}, ${history.file_id});`
    );

    let message = "Error al crear el registro";
    if (resultado.affectedRows) message = `Dato creado con exito`;
    return { message };
}

async function updateHistory(id, history) {
    const resultado = await db.query(
        `UPDATE history_control SET history_control_type_history_control_type_id = ${history.type_id}, module_module_id = ${history.module_id}, history_control_name = '${history.name}', history_control_history_control_id = ${history.history_control_id}, history_control_description = '${history.description}', history_control_version = '${history.version}', history_control_active = ${history.active}, file_file_id = ${history.file_id} WHERE history_control_id = ${id};`
    );

    let message = "Error al editar el registro";
    if (resultado.affectedRows) message = `Dato editado con exito`;
    return { message };
}

async function deleteHistory(id) {
    const resultado = await db.query(
        `DELETE FROM history_control WHERE history_control_id = ${id};`
    );

    let message = "Error al eliminar el registro";
    if (resultado.affectedRows) message = `Dato eliminado con id = ${id}`;
    return { message };
}

async function getAllHistoryType() {
    const rows = await db.query("SELECT * FROM history_control_type");

    const data = helper.emptyRows(rows);

    return { data };
}

async function createHistoryType(historyType) {
    const resultado = await db.query(
        `INSERT INTO history_control_type(history_control_type_name) VALUES (\'${historyType.name}\');`
    );

    let message = "Error al crear el registro";
    if (resultado.affectedRows) message = `Dato creado con exito`;
    return { message };
}

async function updateHistoryType(id, historyType) {
    const resultado = await db.query(
        `UPDATE history_control_type SET history_control_type_name = '${historyType.name}' WHERE history_control_type_id = ${id};`
    );

    let message = "Error al editar el registro";
    if (resultado.affectedRows) message = `Dato editado con exito`;
    return { message };
}

async function deleteHistoryType(id) {
    const resultado = await db.query(
        `DELETE FROM history_control_type WHERE history_control_type_id = ${id};`
    );

    let message = "Error al eliminar el registro";
    if (resultado.affectedRows) message = `Dato eliminado con id = ${id}`;
    return { message };
}

module.exports = {
    getAllHistory,
    createHistory,
    updateHistory,
    deleteHistory,
    getAllHistoryType,
    createHistoryType,
    updateHistoryType,
    deleteHistoryType,
};
