signs= ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"]
horoscopes= [
    "You are a capricorn! This week you will have great luck.",
    "You are an aquarius! Be careful tomorrow because you will get really bad news.",
    "You are a pisces! Make sure that you remember to lock your car.",
    "You are an aries! You have had a really rough week, but it will get way better tomorrow.",
    "You are a taurus! Next week you will save someone's life and find a 100 dollar bill on the ground.",
    "You are a gemini! Don't procrastinate this week or it will make next week hell.",
    "You are a cancer! Its important that you eat healthy today.",
    "You are a leo! Remember to floss.",
    "You are a virgo! That essay isn't going to write itself.",
    "You are a libra! Today is your lucky day. Make sure that you enjoy it.",
    "You are a scorpio! Appreciate your surroundings today.",
    "You are a sagittarius! You will pass all of your classes."
]

pics= ["images/capricorn.jpg", "images/aquarius.jpg", "images/pisces.jpeg", "images/aries.jpg", "images/taurus.jpeg", "images/gemini.jpeg", "images/cancer.jpeg", "images/leo.jpeg", "images/virgo.jpeg", "images/libra.jpeg", "images/scorpio.jpeg", "images/sagittarius.jpeg" ]

function onSubmit(){
    var month= document.getElementById("month").value;
    var day= document.getElementById("day").value;
    var name= document.getElementById("firstName").value;
    var sign= determineSign(month, day);
    var horoscope= determineHoroscope(sign);
    var bday= determineBday(month, day);
    var image= determineImage(sign);

    document.getElementById('sign').innerHTML = sign;

    if(name.length >= 1){
        document.getElementById('future').innerHTML = bday + name + ", " + horoscope;
    }else{
        document.getElementById('future').innerHTML =  bday + horoscope;
    }

    document.getElementById('img').src = image;
}

function determineSign(month, day){

    if(month==0){
        if(day <=19) {
            return signs[0];
        }else{
            return signs[1];
        }
    }


    if(month==1){
        if(day<=19) {
            return signs[1];
        }else{
            return signs[2];
        }
    }


    if(month==2){
        if(day<=20){
            return signs[2];
        }else{
            return signs[3];
        }
    }


    if(month==3){
        if(day<=19){
            return signs[3];
        }else{
            return signs[4];
        }
    }

    if(month==4){
        if(day<=20){
            return signs[4];
        }else{
            return signs[5];
        }
    }

    if(month==5){
        if(day<=21){
            return signs[5];
        }else{
            return signs[6];
        }
    }

    if(month==6){
        if(day<=23){
            return signs[6];
        }else{
            return signs[7];
        }
    }

    if(month==7){
        if(day<=23){
            return signs[7];
        }else{
            return signs[8];
        }
    }

    if(month==8){
        if(day<=22){
            return signs[8];
        }else{
            return signs[9];
        }
    }

    if(month==9){
        if(day<=22){
            return signs[9];
        }else{
            return signs[10];
        }
    }

    if(month==10){
        if(day<=22){
            return signs[10];
        }else{
            return signs[11];
        }
    }

    if(month==11){
        if(day<=20){
            return signs[11];
        }else{
            return signs[0];
        }
    }
}


function determineHoroscope(sign){
    if(sign== "Capricorn"){
        return horoscopes[0];
    }

    if(sign== "Aquarius"){
        return horoscopes[1];
    }

    if(sign== "Pisces"){
        return horoscopes[2];
    }

    if(sign== "Aries"){
        return horoscopes[3];
    }

    if(sign== "Taurus"){
        return horoscopes[4];
    }

    if(sign== "Gemini"){
        return horoscopes[5];
    }

    if(sign== "Cancer"){
        return horoscopes[6];
    }

    if(sign== "Leo"){
        return horoscopes[7];
    }

    if(sign== "Virgo"){
        return horoscopes[8];
    }

    if(sign== "Libra"){
        return horoscopes[9];
    }

    if(sign== "Scorpio"){
        return horoscopes[10];
    }

    if(sign== "Sagitarius"){
        return horoscopes[11];
    }
}



function determineBday(month, day){
    var bday= "";
    var newDate= new Date();
    var currentMonth= newDate.getMonth();
    var currentDay= newDate.getDate();
    if(month== currentMonth && currentDay== date){
        bday= "Happy Birthday !!";
    }

    return bday;
}

function determineImage(sign){
    if(sign== "Capricorn"){
        return pics[0];
    }

    if(sign== "Aquarius"){
        return pics[1];
    }

    if(sign== "Pisces"){
        return pics[2];
    }

    if(sign== "Aries"){
        return pics[3];
    }

    if(sign== "Taurus"){
        return pics[4];
    }

    if(sign== "Gemini"){
        return pics[5];
    }

    if(sign== "Cancer"){
        return pics[6];
    }

    if(sign== "Leo"){
        return pics[7];
    }

    if(sign== "Virgo"){
        return pics[8];
    }

    if(sign== "Libra"){
        return pics[9];
    }

    if(sign== "Scorpio"){
        return pics[10];
    }

    if(sign== "Sagittarius"){
        return pics[11];
    }
}