export const Query = {
    getCases: "SELECT * FROM prisonercases",
    getCase: "SELECT * FROM prisonercases WHERE id = $1",
    addCase: "INSERT INTO prisonercases (description) VALUES ($1) RETURNING id",
    deleteCase: "DELETE FROM prisonercases WHERE prisonercases.id = $1",
    updateCase: `UPDATE prisonercases
                     SET description = $1
                     WHERE id = $2`
}

