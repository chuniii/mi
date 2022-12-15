
// header下拉選單
const ProductType = {
    XIAOMI_PHONE: 0,
    REDMI_PHONE: 1,
    POCO_PHONE: 2,
    SMART_FAMILY: 3,
    SMART_TECH: 4,
    XIAOMI_ACCESSORIES: 5,
}


// main_choose_list右側選單
const MainProductType = {
    cellphone: 0,
    entertainment: 1,
    smart_family_machine: 2,
    tour: 3,
    main_smart_tech: 4,
    threec_accessories: 5,
    earphone: 6,
    healthy_care: 7,
    life: 8,
}


// main圖片更換
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

// onmouseenter 顯示header下拉區域
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

// onmouseleave 隱藏header下拉區域
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


// onmouseenter 顯示main_choose_list下拉區域
function showMainProductMenu(type) {
    switch (type) {
        case MainProductType.cellphone:
            document.getElementById("dropMenu_cellphone").style.display = "block";
            break;
        case MainProductType.entertainment:
            document.getElementById("dropMenu_entertainment").style.display = "block";
            break;
        case MainProductType.smart_family_machine:
            document.getElementById("dropMenu_smart_family_machine").style.display = "block";
            break;
        case MainProductType.tour:
            document.getElementById("dropMenu_tour").style.display = "block";
            break;
        case MainProductType.main_smart_tech:
            document.getElementById("dropMenu_main_smart_tech").style.display = "block";
            break;
        case MainProductType.threec_accessories:
            document.getElementById("dropMenu_threec_accessories").style.display = "block";
            break;
        case MainProductType.earphone:
            document.getElementById("dropMenu_earphone").style.display = "block";
            break;
        case MainProductType.healthy_care:
            document.getElementById("dropMenu_healthy_care").style.display = "block";
            break;
        case MainProductType.life:
            document.getElementById("dropMenu_life").style.display = "block";
            break;
        default:
            break;
    }
}

// onmouseleave 隱藏main_choose_list下拉區域
function hideMainProductMenu(type) {
    switch (type) {
        case MainProductType.cellphone:
            document.getElementById("dropMenu_cellphone").style.display = "none";
            break;
        case MainProductType.entertainment:
            document.getElementById("dropMenu_entertainment").style.display = "none";
            break;
        case MainProductType.smart_family_machine:
            document.getElementById("dropMenu_smart_family_machine").style.display = "none";
            break;
        case MainProductType.tour:
            document.getElementById("dropMenu_tour").style.display = "none";
            break;
        case MainProductType.main_smart_tech:
            document.getElementById("dropMenu_main_smart_tech").style.display = "none";
            break;
        case MainProductType.threec_accessories:
            document.getElementById("dropMenu_threec_accessories").style.display = "none";
            break;
        case MainProductType.earphone:
            document.getElementById("dropMenu_earphone").style.display = "none";
            break;
        case MainProductType.healthy_care:
            document.getElementById("dropMenu_healthy_care").style.display = "none";
            break;
        case MainProductType.life:
            document.getElementById("dropMenu_life").style.display = "none";
            break;
        default:
            break;
    }
}



