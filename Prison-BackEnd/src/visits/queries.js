export const Query = {
    getVisits: "SELECT * FROM visits",
    getVisit: "SELECT * FROM visits WHERE id =$1",
    addVisit: "INSERT INTO visits (prisoner_id,visitor,staff_id,date,room) VALUES ($1,$2,$3,$4,$5) RETURNING id",
    deleteVisit: "DELETE FROM visits WHERE visits.id = $1",
    updateVisit:   `UPDATE visits
                     SET prisoner_id = $1,visitor = $2,staff_id = $3,date=$5,room=$6
                     WHERE id = $4`
}

