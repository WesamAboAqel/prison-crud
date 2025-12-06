export const Query = {
    getOffences: "SELECT * FROM inmateoffences",
    getOffence: "SELECT * FROM inmateoffences WHERE id =$1",
    addOffence: "INSERT INTO inmateoffences (prisoner_id, offencetype) VALUES ($1,$2) RETURNING id",
    deleteOffence: "DELETE FROM inmateoffences WHERE inmateoffences.id = $1",
    updateOffence: `UPDATE inmateoffences
                     SET prisoner_id = $1, offencetype = $2
                     WHERE id = $3`
}

