export const Query = {
    getShifts: "SELECT * FROM shifts",
    getShift: "SELECT * FROM shifts WHERE shifts.id = $1"
}

