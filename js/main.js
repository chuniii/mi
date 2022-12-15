const ProductType = {
    XIAOMI_PHONE: 0,
    REDMI_PHONE: 1,
    POCO_PHONE: 2,
    SMART_FAMILY: 3,
    SMART_TECH: 4,
    XIAOMI_ACCESSORIES: 5,
}

function change_pic1() {
    document.getElementById("carouselsLink").innerHTML = "<img src='image/double12.png'>";
}

function change_pic2() {
    document.getElementById("carouselsLink").innerHTML = "<img src='image/main2.png'>";
}
function change_pic3() {
    document.getElementById("carouselsLink").innerHTML = "<img src='image/main3.jpg'>";
}
function change_pic4() {
    document.getElementById("carouselsLink").innerHTML = "<img src='image/main4.jpg'>";
}
function change_pic5() {
    document.getElementById("carouselsLink").innerHTML = "<img src='image/main5.jpg'>";
}
function change_pic6() {
    document.getElementsByClassName("carouselsLink").innerHTML = "<img src='image/main6.jpg'>";
}
function change_pic7() {
    document.getElementsByClassName("carouselsLink").innerHTML = "<img src='image/main7.png'>";
}
function change_pic8() {
    document.getElementById("carouselsLink").innerHTML = "<img src='image/main8.png'>";
}
function change_pic9() {
    document.getElementById("carouselsLink").innerHTML = "<img src='image/main9.png'>";
}
function change_pic10() {
    document.getElementById("carouselsLink").innerHTML = "<img src='image/main10.png'>";
}
function change_pic11() {
    document.getElementById("carouselsLink").innerHTML = "<img src='image/main11.jpg'>";
}
function change_pic12() {
    document.getElementById("carouselsLink").innerHTML = "<img src='image/main12.png'>";
}

function showProductMenu(type) {
    switch (type) {
        case ProductType.XIAOMI_PHONE:
            document.getElementById("dropMenu_xiaomi").style.display = "block";
            break;
        case ProductType.REDMI_PHONE:
             document.getElementById("dropMenu_redmi").style.display = "block";
            break;
        case ProductType.POCO_PHONE:
             document.getElementById("dropMenu_poco").style.display = "block";
            break;
        case ProductType.SMART_FAMILY:
             document.getElementById("dropMenu_family").style.display = "block";
            break;
        case ProductType.SMART_TECH:
             document.getElementById("dropMenu_tech").style.display = "block";
            break;
        case ProductType.XIAOMI_ACCESSORIES:
             document.getElementById("dropMenu_accessories").style.display = "block";
            break;
        default:
            break;
    }
}

function hideProductMenu(type) {
    switch (type) {
        case ProductType.XIAOMI_PHONE:
            document.getElementById("dropMenu_xiaomi").style.display = "none";
            break;
        case ProductType.REDMI_PHONE:
             document.getElementById("dropMenu_redmi").style.display = "none";
            break;
        case ProductType.POCO_PHONE:
             document.getElementById("dropMenu_poco").style.display = "none";
            break;
        case ProductType.SMART_FAMILY:
             document.getElementById("dropMenu_family").style.display = "none";
            break;
        case ProductType.SMART_TECH:
             document.getElementById("dropMenu_tech").style.display = "none";
            break;
        case ProductType.XIAOMI_ACCESSORIES:
             document.getElementById("dropMenu_accessories").style.display = "none";
            break;
        default:
            break;
    }
}