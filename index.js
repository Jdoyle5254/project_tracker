/*
Install dayjs
link js file w/ html 
create elemnt to add date and time
display date & time 
*/

//test your connectivity
console.log('hello world')

//function to display date and time
function displayDateTime() {
    var currentDateTimeElement = document.querySelector('#date-time')
    var currentDate= dayjs().format('MMMM D, YYYY h:m:ss A')
    currentDateTimeElement.innerHTML = currentDate

}

//calling the function and setting the interval runs the clock
displayDateTime()
setInterval(displayDateTime, 1000)




