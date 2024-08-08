// Given a set of activities, each with a start time and end time, select the maximum number of activities that do not overlap.


const activitySelection = (activities)=> {
    activities.sort((a,b) => a[1] - b[1])
    let end = 0
    let result = []
    for(let i = 0; i < activities.length ; i ++ ){
        if(activities[i][0] >= end ){
            result.push(activities[i])
            end = activities[i][1]
        }
    }
    console.log(result)
    return result
 

}
const activities = [
    [1, 3], 
    [2, 3],
    [4, 7],
    [7, 9]
]
activitySelection(activities)