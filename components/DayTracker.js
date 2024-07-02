const Tracker = (days) => {
    const wateringNum = Number(days);
    const date = Number(new Date().getDate());
    const month = Number(new Date().getMonth());
    let returnMonth = month;

    function isLeap(year) {
        return new Date(year, 1, 29).getDate() === 29;
    }
    let wateringDay = wateringNum + date;
    if ((wateringDay > date) == true) {
        returnMonth = month + 1;
        if (month == "1") {
            if (isLeap(new Date().getFullYear())) {
                wateringDay = wateringDay - 29;
            }
            wateringDay = wateringDay - 29;
        }
        else if (month == "3"||"5"||"8"||"10") {
            wateringDay = wateringDay - 30;
        }
        else {
            wateringDay = wateringDay - 31;
        }
    }
    return (wateringDay, returnMonth);
}

export default Tracker