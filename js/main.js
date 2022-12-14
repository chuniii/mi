const ProductType = {
    XIAOMI_PHONE: 0,
    REDMI_PHONE: 1,
    POCO_PHONE: 2,
    SMART_FAMILY: 3,
    SMART_TECH: 4,
    XIAOMI_ACCESSORIES: 5,
    XIAOMI_SERVICE: 6
}

function change_pic1() {
    document.getElementsByClassName("test").innerHTML = "<img src='image/double12.png'>";
}

function change_pic2() {
    document.getElementById("carouselsLink").innerHTML = "<img src='image/main2.png'>";
}
function change_pic3() {
    document.getElementsByClassName("main_container_slider").innerHTML = "<img src='image/main3.jpg'>";
}
function change_pic4() {
    document.getElementsByClassName("main_container_slider").innerHTML = "<img src='image/main4.jpg'>";
}
function change_pic5() {
    document.getElementsByClassName("main_container_slider").innerHTML = "<img src='image/main5.jpg'>";
}
function change_pic6() {
    document.getElementsByClassName("main_container_slider").innerHTML = "<img src='image/main6.jpg'>";
}
function change_pic7() {
    document.getElementsByClassName("main_container_slider").innerHTML = "<img src='image/main7.png'>";
}
function change_pic8() {
    document.getElementsByClassName("main_container_slider").innerHTML = "<img src='image/main8.png'>";
}
function change_pic9() {
    document.getElementsByClassName("main_container_slider").innerHTML = "<img src='image/main9.png'>";
}
function change_pic10() {
    document.getElementsByClassName("main_container_slider").innerHTML = "<img src='image/main10.png'>";
}
function change_pic11() {
    document.getElementsByClassName("main_container_slider").innerHTML = "<img src='image/main11.jpg'>";
}
function change_pic12() {
    document.getElementsByClassName("main_container_slider").innerHTML = "<img src='image/main12.png'>";
}

function showProductMenu(type) {
    switch (type) {
        case ProductType.XIAOMI_PHONE:
            document.getElementById("dropMenu").style.display = "block";
            break;
        case ProductType.REDMI_PHONE:
            break;
        case ProductType.POCO_PHONE:
            break;
        case ProductType.SMART_FAMILY:
            break;
        case ProductType.SMART_TECH:
            break;
        case ProductType.XIAOMI_ACCESSORIES:
            break;
        default:
            break;
    }
}

function hideProductMenu(type) {
    switch (type) {
        case ProductType.XIAOMI_PHONE:
            document.getElementById("dropMenu").style.display = "none";
            break;
        case ProductType.REDMI_PHONE:
            break;
        case ProductType.POCO_PHONE:
            break;
        case ProductType.SMART_FAMILY:
            break;
        case ProductType.SMART_TECH:
            break;
        case ProductType.XIAOMI_ACCESSORIES:
            break;
        default:
            break;
    }
}