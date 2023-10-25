const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10 , 11 , 30 , 0);
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();

month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();

giveaway.textContent = `Giveway ends on ${weekday}, ${date}, ${month}, ${year}, ${hour}: ${minutes}`;

const futureTime = futureDate.getTime();

function RetRemaingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    const oneday = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60* 1000;

    let days = t / oneday;
    days = Math.floor(days);
    
    let hours = Math.floor((t % oneday) / oneHour);
    let minutes = Math.floor((t %oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    const values = [days,hours,minutes,seconds];

    function format(item){
        if(item < 10){
            return (item = `0${item}`);
        }
        return item;
    }

    items.forEach( function(item, index){
        item.innerHTML = format(values[index])
    });

    if( t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`;
    }

}

let countdown = setInterval(RetRemaingTime, 1000);
RetRemaingTime();

