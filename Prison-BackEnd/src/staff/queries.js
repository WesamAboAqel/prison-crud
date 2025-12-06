export const Query = {
    getAllStaff: "SELECT * FROM staff",
    getStaff: "SELECT * FROM staff WHERE id =$1",
    addStaff: "INSERT INTO staff (fullname,facility_id,rank,shift,manager_id) VALUES ($1,$2,$3,$4,$5) RETURNING id",
    deleteStaff: "DELETE FROM staff WHERE staff.id = $1",
    updateStaff:`UPDATE staff
                 SET fullname = $1, facility_id = $2, rank = $3, shift = $4, manager_id = $5
                 WHERE id = $6`
}

