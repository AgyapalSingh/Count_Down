const endDate = "2 August 2040 10:00 PM"
document.getElementById("end-date").innerHTML = endDate;


const inputs = document.querySelectorAll("input");
// const clock = () => {
// It is arrow function
// }

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if (diff < 0) {
        return;
    }

    // Convert into days ;
    inputs[0].value = Math.floor(diff / 3600 / 24);

    // Convert into hours
    inputs[1].value = Math.floor(diff / 3600) % 24;

    // Convert into minutes
    inputs[2].value = Math.floor(diff / 60) % 60;

    // Convert into Seconds
    inputs[3].value = Math.floor(diff) % 60;

}

// Initial call

clock();

setInterval(
    () => {
        clock()
    },
    1000
)