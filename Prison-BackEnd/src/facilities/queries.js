export const Query = {
    getFacilities: "SELECT * FROM facilities",
    getFacility: "SELECT * FROM facilities WHERE id =$1",
    addFacility: "INSERT INTO facilities (name,manager_id,location,state,capacity,type) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id",
    deleteFacility: "DELETE FROM facilities WHERE facilities.id = $1",
    updateFacility:   `UPDATE facilities
                       SET name = $1,manager_id = $2,location = $3,state = $4,capacity = $5,type = $7
                       WHERE id = $6`
}

