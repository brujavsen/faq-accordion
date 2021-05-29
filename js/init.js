const accordionCnt = document.querySelectorAll(".accordion");

for(let i = 0; i < accordionCnt.length; i++) {

    //clicking on one of the accordions collapse the info
    accordionCnt[i].addEventListener('click', function() {

        // Text change to Bold
        this.classList.toggle("text-select");
        // Arrow rotate 180deg
        this.classList.toggle("arrow");

        let accorInfo = this.nextElementSibling;

        // Display:block - Info accordion
        accorInfo.classList.toggle("info-active");
    });
}
