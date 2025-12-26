(async function () {
    const countDownTimmer = null

    const timmerControllerButton = document.querySelector(".start")
    let hour = document.querySelector(".hour")
    let min = document.querySelector(".minute")
    let sec = document.querySelector(".second")

    timmerControllerButton.addEventListener("click", (e) => {

        timmerControllerButton = setInterval(() => {
            timmer()
        }, 1000)

    })

    function stopInterval() {
        clearInterval(countDownTimmer)
    }

    function timmer() {

        if (hour.value == 0 && min.value == 0 && sec.value == 0) {
            hour.value = "";
            min.value = "";
            sec.value = "";
            stopInterval();
        } else if (sec.value != 0) {
            sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
        } else if (min.value != 0 && sec.value == 0) {
            sec.value = 59;
            min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`;
        } else if (hour.value != 0 && min.value == 0) {
            min.value = 60;
            hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
        }
        return;

    }

})()