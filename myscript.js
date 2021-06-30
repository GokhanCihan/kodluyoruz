
function askUserName() {
    let userName = prompt("Adınızı yazınız.")
    let userNameElement = document.getElementById('userNameId');

    userNameElement.innerHTML = `${userName}!`;     
}

function myDateFunction() {
    let date = new Date();
    let [month, mDay, wDay] = [date.getMonth(), date.getDate(), date.getDay()];
    let [hours, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()]
    
    let reachClock = document.getElementById('saat')
    let reachDate = document.getElementById('tarih')
    
    if (mDay<10) (mDay = `0${mDay}`) 
   
    
    let months = ['Ocak','Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
    
    let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
    reachDate.innerHTML = `${mDay} ${months[month]} ${days[wDay]}`
    
    if (hours<10) (hours = `0${hours}`)
    if (minutes<10) (minutes = `0${minutes}`)
    if (seconds<10) (seconds = `0${seconds}`)
    reachClock.innerHTML = `Saat: ${hours}:${minutes}:${seconds}`
}

askUserName();
setInterval(myDateFunction, 1000)