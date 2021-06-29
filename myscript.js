
function askUserName() {
    let userName = prompt("Adınızı yazınız.")
    let userNameElement = document.getElementById('userNameId');

    userNameElement.innerHTML = `${userName}!`;     
}

function myDateFunction() {
    let date = new Date();
    let [month, mDay, wDay] = [date.getMonth(), date.getDate(), date.getDay()];
    let [hours, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()]
    
    let reachDayOfMonth = document.getElementById('gunSayi')
    let reachMonth = document.getElementById('ay')
    let reachClock = document.getElementById('saat')
    let reachDayOfWeek = document.getElementById('gunIsim')
    document.getElementById('place').innerHTML = `Saat:`
    if (mDay<10) (mDay = `0${mDay}`) 
    reachDayOfMonth.innerHTML = `${mDay}`
    
    let months = ['Ocak','Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
    reachMonth.innerHTML = `${months[month]}`;
    
    let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
    reachDayOfWeek.innerHTML = `${days[wDay]}`
    
    if (hours<10) (hours = `0${hours}`)
    if (minutes<10) (minutes = `0${minutes}`)
    if (seconds<10) (seconds = `0${seconds}`)
    reachClock.innerHTML = `${hours}:${minutes}:${seconds}`
}

askUserName();
setInterval(myDateFunction, 1000)