export const Query = {
    getVisitors: "SELECT * FROM visitors",
    getVisitor: "SELECT * FROM visitors WHERE id = $1",
    addVisitor: "INSERT INTO visitors (fullname) VALUES ($1) RETURNING id",
    deleteVisitor: "DELETE FROM visitors WHERE visitors.id = $1",
    updateVisitor: `UPDATE visitors
                     SET fullname = $1
                     WHERE id = $2`
}

