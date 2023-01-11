const db = require("./db");
const helper = require("../helper");

async function getCertifications() {
    const rows = await db.query("SELECT * FROM certification;");

    const data = helper.emptyRows(rows);

    return { data };
}

async function createCertificaction(certificaction) {
    const resultado = await db.query(
        `INSERT INTO certification(module_module_id, certification_certification_id, certification_name, certification_description, certification_date_expired, certificaction_active, file_file_id, certification_type_certification_type_id) VALUES (${certification.module_id}, ${certification.certification_id},  \'${certification.name}\', \'${certification.description}\', \'${certification.expired}\', ${certification.active}, ${certification.file_id}, ${certification.type_id});`
    );

    let message = "Error al crear el registro";
    if (resultado.affectedRows) message = `Dato creado con exito`;
    return { message };
}

async function updateCertification(id, certification) {
    const resultado = await db.query(
        `UPDATE certification SET module_module_id = ${certification.module_id}, certification_certification_id = ${certification.certification_id}, certification_name = '${certification.name}', certification_description = '${certification.description}', certification_date_expired = '${certification.expired}', certificaction_active = ${certification.active}, file_file_id = ${certification.file_id}, certification_type_certification_type_id = ${certification.type_id} WHERE certification_id = ${id};`
    );

    let message = "Error al editar el registro";
    if (resultado.affectedRows) message = `Dato editado con exito`;
    return { message };
}

async function deleteCertification(id) {
    const resultado = await db.query(
        `DELETE FROM certification WHERE certification_id = ${id};`
    );

    let message = "Error al eliminar el registro";
    if (resultado.affectedRows) message = `Dato eliminado con id = ${id}`;
    return { message };
}

async function getCertificationTypes() {
    const rows = await db.query("SELECT * FROM certification_type");

    const data = helper.emptyRows(rows);

    return { data };
}

async function createCertificationType(certificationType) {
    const resultado = await db.query(
        `INSERT INTO certification_type(certification_type_name) VALUES (\'${certificationType.name}\');`
    );

    let message = "Error al crear el registro";
    if (resultado.affectedRows) message = `Dato creado con exito`;
    return { message };
}

async function updateCertificationType(id, certificationType) {
    const resultado = await db.query(
        `UPDATE certification_type SET certification_type_name = '${certificationType.name}' WHERE certification_type_id = ${id};`
    );

    let message = "Error al editar el registro";
    if (resultado.affectedRows) message = `Dato editado con exito`;
    return { message };
}

async function deleteCertificationType(id) {
    const resultado = await db.query(
        `DELETE FROM certification_type WHERE certification_type_id = ${id};`
    );

    let message = "Error al eliminar el registro";
    if (resultado.affectedRows) message = `Dato eliminado con id = ${id}`;
    return { message };
}

module.exports = {
    getCertifications,
    createCertificaction,
    updateCertification,
    deleteCertification,
    getCertificationTypes,
    createCertificationType,
    updateCertificationType,
    deleteCertificationType,
};
