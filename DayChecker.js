//This File Was Written By Amin Arjmand | Email: aminarj2000@gmail.com | Site: aminarjmand.com | Github Profile : https://github.com/sibche2013
//Print Function
    function myPrint(string) {
        document.write(string + "<br>")
    }
    //Get Date From User System
    var userSystemDate = new Date(), message;
    //Save Hours Of User System
    hour = userSystemDate.getHours();
    //Check What Is The Time?
    if (hour >= 0 && hour < 6) {
        message = "Have A Good MidNight !";
    } else if (hour >= 6 && hour < 11) {
        message = "Have A Good Morning !";
    } else if (hour >= 11 && hour < 15) {
        message = "Have A Good Noon !";
    } else if (hour >= 15 && hour < 20) {
        message = "Have A Good Afternoon !";
    } else if (hour >= 20 && hour < 23) {
        message = "Have A Good Night !";
    } else {
        message = "Your System Time Is Wrong!!!";
    }
    //Print The Time:
    myPrint(message);

    //Save Days Of Week
    day = userSystemDate.getDay();
    //Check What Is The Name Of Day?
    switch (day) {
        case 0:
            message = "Sunday";
            break;
        case 1:
            message = "Monday";
            break;
        case 2:
            message = "Saturday";
            break;
        case 3:
            message = "Wednesday";
            break;
        case 4:
            message = "Thursday";
            break;
        case 5:
            message = "Friday";
            break;
        case 6:
            message = "Saturday";
            break;
        default:
            message = "Your System Date Is Wrong!";
    }
    //Print The Name Of Day
    myPrint("Today Is "+message);

    //Check The Holidays
    switch (day) {
        case 4:
        case 5:
            message = "Today Is Holiday!";
            break;
        default:
            message = "Today Is Not Holiday!";
    }
    //Print Holiday Message
    myPrint(message);
