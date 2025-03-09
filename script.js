const dot = document.getElementById("cursorDot");

document.addEventListener("mousemove", (event) => {
    dot.style.left = `${event.pageX}px`;  // pageX accounts for scroll position
    dot.style.top = `${event.pageY}px`;   // pageY accounts for scroll position
});

function openLinkedIn() {
    window.open("https://www.linkedin.com/in/naveen-prabhu-926159190");
}
document.addEventListener("DOMContentLoaded", function () {
    let javaProficiency = 75; // Percentage of proficiency
    let progressBar = document.getElementById("info__language__java--progress");
    let percentageText = document.getElementById("info__language__java--percentage");

    // Animate progress bar
    setTimeout(() => {
        progressBar.style.width = javaProficiency + "%";
        percentageText.textContent = javaProficiency + "%";
    }, 500);
});
document.addEventListener("DOMContentLoaded", function () {
    let CProficiency = 70; // Percentage of proficiency
    let progressBar = document.getElementById("info__language__C#--progress");
    let percentageText = document.getElementById("info__language__C#--percentage");

    // Animate progress bar
    setTimeout(() => {
        progressBar.style.width = CProficiency + "%";
        percentageText.textContent = CProficiency + "%";
    }, 500);
});
document.addEventListener("DOMContentLoaded",function(){
    let HTMLProficiency = 85; // Percentage of proficiency
    let progressBar = document.getElementById("info__language__HTML--progress");
    let percentageText = document.getElementById("info__language__HTML--percentage");
    setTimeout(()=>{
        progressBar.style.width=HTMLProficiency +"%";
        percentageText.textContent=HTMLProficiency + "%";
    })
}) 
// <!-- BEM : Block Element Modifier B__E--M -->