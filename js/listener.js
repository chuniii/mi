var checkFixedBar = false;

window.addEventListener('scroll', function () {
    var element = document.querySelector('.topbar');
    var position = element.getBoundingClientRect();

    // checking for partial visibility
    if (position.top < 0 && position.top < window.innerHeight && position.bottom >= 0) {
        console.log("partial visible");
        if (!checkFixedBar) {
            checkFixedBar = true;
            var element = document.getElementById("fixed_content");
            element.classList.add("fixed-active");
        }
    }

    // checking whether fully visible
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        console.log("fully visible");
        if (checkFixedBar) {
            checkFixedBar = false;
            var element = document.getElementById("fixed_content");
            element.classList.remove("fixed-active");
        }
    }
});