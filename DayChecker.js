<script>
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
            message = "Today Is Sunday!";
            break;
        case 1:
            message = "Today Is Monday!";
            break;
        case 2:
            message = "Today Is Saturday!";
            break;
        case 3:
            message = "Today Is Wednesday!";
            break;
        case 4:
            message = "Today Is Thursday!";
            break;
        case 5:
            message = "Today Is Friday!";
            break;
        case 6:
            message = "Today Is Saturday!";
            break;
        default:
            message = "Your System Date Is Wrong!";
    }
    //Print The Name Of Day
    myPrint(message);

    //Check The Holidays
    switch (day) {
        case 5:
            message = "Today Is Holiday!";
            break;
        case 6:
            message = "Today Is Holiday!";
            break;
        default:
            message = "Today Is Not Holiday!";
    }
    //Print Holiday Message
    myPrint(message);
</script>