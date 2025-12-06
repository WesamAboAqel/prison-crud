export const Query = {
    getPrisoners: "SELECT * FROM prisoners",
    getPrisoner: "SELECT * FROM prisoners WHERE id =$1",
    addPrisoner: "INSERT INTO prisoners (fullname,prisonercase,nationality,gender,dob,location) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id",
    deletePrisoner: "DELETE FROM prisoners WHERE prisoners.id = $1",
    updatePrisoner: `UPDATE prisoners
                     SET fullname = $1, prisonercase = $2, nationality = $3, gender = $4, dob = $5, location = $6
                     WHERE id = $7`
}

