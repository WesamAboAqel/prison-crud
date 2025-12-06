export const Query = {
    getManagers: "SELECT * FROM managers",
    getManager: "SELECT * FROM managers WHERE id =$1",
    addManager: "INSERT INTO managers (name,staff_count,facility_id,address,phonenumber) VALUES ($1,$2,$3,$4,$5) RETURNING id",
    deleteManager: "DELETE FROM managers WHERE managers.id = $1",
    updateManager: `UPDATE managers
                    SET name = $1, staff_count = $2, facility_id = $3,address=$5,phonenumber=$6
                    WHERE id = $4`
}

