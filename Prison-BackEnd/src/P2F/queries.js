export const Query = {
    getAllP2F: "SELECT * FROM prisonerallowedfacilities",
    getP2FP: "SELECT * FROM prisonerallowedfacilities WHERE prisoner_id =$1",
    getP2FF: "SELECT * FROM prisonerallowedfacilities WHERE facility_id =$1",
    addP2F: "INSERT INTO prisonerallowedfacilities (prisoner_id, facility_id) VALUES ($1,$2) RETURNING prisoner_id, facility_id",
    deleteP2FP: "DELETE FROM prisonerallowedfacilities WHERE prisonerallowedfacilities.prisoner_id = $1",
    deleteP2FF: "DELETE FROM prisonerallowedfacilities WHERE prisonerallowedfacilities.facility_id = $1",
}

