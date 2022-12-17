
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

// 右邊箭頭換圖片
var n=1,total=0;
function plus_pic(n) {
    total+=n;
    if(total<=12) {
        switch(total) {
            case 2:
                document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalweb/picture/30qumian-pc.jpg?width=1226&height=460'>"; 
                document.getElementById("circle2").style.color="#b0b0b0"; 
                break;
            case 3:
                document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalweb/picture/saotuo-pcc.jpg?width=1226&height=460'>";  
                document.getElementById("circle3").style.color="#b0b0b0";
                break;
            case 4:
                document.getElementById("carouselsLink").innerHTML = "<img src='image/main4.jpg'>";  
                document.getElementById("circle4").style.color="#b0b0b0";
                break;
            case 5:
                document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalimg/yanganna/weiya-banner-pc.jpg?width=1226&height=460'>";
                document.getElementById("circle5").style.color="#b0b0b0";
                break;
            case 6:
                document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalweb/picture/20221208-153001.jpg?width=1226&height=460'>"; 
                document.getElementById("circle6").style.color="#b0b0b0"; 
                break;
            case 7:
                document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalimg/summer-1/Banner/12t-pc-1111.png?width=1226&height=460'>"; 
                document.getElementById("circle7").style.color="#b0b0b0";
                break;
            case 8:
                document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalweb/picture/w10pro-pc.jpg?width=1226&height=460'>"; 
                document.getElementById("circle8").style.color="#b0b0b0"; 
                break;
            case 9:
                document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalweb/picture/wuxian-pc.jpg?width=1226&height=460'>"; 
                document.getElementById("circle9").style.color="#b0b0b0"; 
                break;
            case 10:
                document.getElementById("carouselsLink").innerHTML = "<img src='image/main11.jpg'>";
                document.getElementById("circle10").style.color="#b0b0b0";
                break;
            case 11:
                document.getElementById("carouselsLink").innerHTML = "<img src='image/main12.png'>"; 
                document.getElementById("circle11").style.color="#b0b0b0"; 
                break;
            case 12:
                document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalweb/picture/shengdanjie-pc2022.jpg?width=1226&height=460'>";
                document.getElementById("circle1").style.color="#b0b0b0";  
                break;
        
        }
    }else {
        total=0;
    }

}

// 左邊箭頭換圖片

/* var n=1,total=0;
function minus_pic(p) {
    total+=n;
    if(total<=12) {
        switch(total) {
            case 2:
                document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalweb/picture/30qumian-pc.jpg?width=1226&height=460'>";  
                break;
            case 3:
                document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalweb/picture/saotuo-pcc.jpg?width=1226&height=460'>";  
                break;
            case 4:
                document.getElementById("carouselsLink").innerHTML = "<img src='image/main4.jpg'>";  
                break;
            case 5:
                document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalimg/yanganna/weiya-banner-pc.jpg?width=1226&height=460'>";
                break;
            case 6:
                document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalweb/picture/20221208-153001.jpg?width=1226&height=460'>";  
                break;
            case 7:
                document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalimg/summer-1/Banner/12t-pc-1111.png?width=1226&height=460'>";  
                break;
            case 8:
                document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalweb/picture/w10pro-pc.jpg?width=1226&height=460'>";  
                break;
            case 9:
                document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalweb/picture/wuxian-pc.jpg?width=1226&height=460'>";  
                break;
            case 10:
                document.getElementById("carouselsLink").innerHTML = "<img src='image/main11.jpg'>";  
                break;
            case 11:
                document.getElementById("carouselsLink").innerHTML = "<img src='image/main12.png'>";  
                break;
            case 12:
                document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalweb/picture/shengdanjie-pc2022.jpg?width=1226&height=460'>";  
                break;
        
        }
    }else {
        total=0;
    }
    console.log(total);
  }*/




// main左下圓圈更換圖片
function change_pic1() {
    document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalweb/picture/shengdanjie-pc2022.jpg?width=1226&height=460'>";
    document.getElementById("circle1").style.color="#b0b0b0";
}
function change_pic2() {
    document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalweb/picture/30qumian-pc.jpg?width=1226&height=460'>";
    document.getElementById("circle2").style.color="#b0b0b0";
}
function change_pic3() {
    document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalweb/picture/saotuo-pcc.jpg?width=1226&height=460'>";
    document.getElementById("circle3").style.color="#b0b0b0";
}
function change_pic4() {
    document.getElementById("carouselsLink").innerHTML = "<img src='image/main4.jpg'>";
    document.getElementById("circle4").style.color="#b0b0b0";
}
function change_pic5() {
    document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalimg/yanganna/weiya-banner-pc.jpg?width=1226&height=460'>";
    document.getElementById("circle5").style.color="#b0b0b0";
}
function change_pic6() {
    document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalweb/picture/20221208-153001.jpg?width=1226&height=460'>";
    document.getElementById("circle6").style.color="#b0b0b0";
}
function change_pic7() {
    document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalimg/summer-1/Banner/12t-pc-1111.png?width=1226&height=460'>";
    document.getElementById("circle7").style.color="#b0b0b0";
}
function change_pic8() {
    document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalweb/picture/w10pro-pc.jpg?width=1226&height=460'>";
    document.getElementById("circle8").style.color="#b0b0b0";
}
function change_pic9() {
    document.getElementById("carouselsLink").innerHTML = "<img src='https://i01.appmifile.com/webfile/globalweb/picture/wuxian-pc.jpg?width=1226&height=460'>";
    document.getElementById("circle9").style.color="#b0b0b0";
}
function change_pic10() {
    document.getElementById("carouselsLink").innerHTML = "<img src='image/main11.jpg'>";
    document.getElementById("circle10").style.color="#b0b0b0";
}
function change_pic11() {
    document.getElementById("carouselsLink").innerHTML = "<img src='image/main12.png'>";
    document.getElementById("circle11").style.color="#b0b0b0";
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



