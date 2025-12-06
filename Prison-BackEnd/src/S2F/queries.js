export const Query = {
    getAllS2F: "SELECT * FROM staffallowedfacilities",
    getS2FS: "SELECT * FROM staffallowedfacilities WHERE staff_id =$1",
    getS2FF: "SELECT * FROM staffallowedfacilities WHERE facility_id =$1",
    addS2F: "INSERT INTO staffallowedfacilities (staff_id, facility_id) VALUES ($1,$2) RETURNING staff_id, facility_id",
    deleteS2FS: "DELETE FROM staffallowedfacilities WHERE staffallowedfacilities.staff_id = $1",
    deleteS2FF: "DELETE FROM staffallowedfacilities WHERE staffallowedfacilities.facility_id = $1",
}

