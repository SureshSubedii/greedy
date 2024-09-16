// Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.

var findMinDifference = function (timePoints) {
    let diff = Infinity
    timePoints.sort((a, b) => {
        const [aHour, aMinute] = a.split(':').map(Number);
        const [bHour, bMinute] = b.split(':').map(Number);
        return aHour !== bHour ? aHour - bHour : aMinute - bMinute;
    });

    let last = timePoints.length - 1
    for (let i = 0; i < timePoints.length; i++) {
        let j = i + 1
        if (i === last) j = 0
        
        let [hours, minutes] = timePoints[i].split(':').map(Number);
        let [hrs, mins] = timePoints[j].split(':').map(Number);

        if (hours > 12 && i === last) {
            hours = hours - 12
            if (hrs < 13) hrs = hrs + 12 
        }
        let totalMinutes = hours * 60 + minutes
        let secondTotal = hrs * 60 + mins
        diff = Math.min(diff, Math.abs(secondTotal - totalMinutes))
    }
    return diff

};