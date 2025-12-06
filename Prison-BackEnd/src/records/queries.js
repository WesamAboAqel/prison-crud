export const Query = {
    getRecords: "SELECT * FROM medicalrecords",
    getRecord: "SELECT * FROM medicalrecords WHERE id =$1",
    addRecord: "INSERT INTO medicalrecords (prison_id,offencetype) VALUES ($1,$2) RETURNING id",
    deleteRecord: "DELETE FROM medicalrecords WHERE medicalrecords.id = $1",
    updateRecord: `UPDATE medicalrecords
                     SET prisoner_id = $1, offencetype = $2
                     WHERE id = $3`
}

