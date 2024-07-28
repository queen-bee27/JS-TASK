var getVisitorReport = function (visitorArray, dayInWeek) {
    var days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    var index = dayInWeek - 1;
    var visitorReport;

    visitorReport = "There were ";
    visitorReport += visitorArray[index];
    visitorReport += " visitors ";
    visitorReport += "on " + days[index];

    return visitorReport;
};

var visitors = [354, 132, 210, 221, 481, 150, 200];

var report = getVisitorReport(visitors, 2);
console.log(report);

var reportFriday = getVisitorReport(visitors, 5);
console.log(reportFriday);

var getMonthlyVisitorReport = function (monthArray, week, day) {
    var days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    var visitorArray = monthArray[week - 1];
    var index = day - 1;
    var visitorReport;

    visitorReport = "There were ";
    visitorReport += visitorArray[index];
    visitorReport += " visitors ";
    visitorReport += "on " + days[index];

    return visitorReport;
};

var week1 = [354, 132, 210, 221, 481, 150, 200];
var week2 = [300, 100, 250, 230, 470, 160, 190];
var week3 = [310, 120, 260, 240, 460, 170, 180];
var week4 = [320, 110, 270, 250, 450, 180, 170];

var month = [week1, week2, week3, week4];

var monthlyReport = getMonthlyVisitorReport(month, 2, 5); // Week 2, Friday
console.log(monthlyReport);

var reportWeek1Monday = getMonthlyVisitorReport(month, 1, 1); // Week 1, Monday
var reportWeek3Sunday = getMonthlyVisitorReport(month, 3, 7); // Week 3, Sunday
var reportWeek4Thursday = getMonthlyVisitorReport(month, 4, 4); // Week 4, Thursday

console.log(reportWeek1Monday);
console.log(reportWeek3Sunday);
console.log(reportWeek4Thursday);
