// Nơi này dùng để chứa những file JavaScript dùng chung 
$(document).ready(function () {
    //Loading page
    $(".main-page").fadeOut();
    //Khi xử lý nhận ra là page sẽ load từ dưới lên
    $(window).scrollTop();
    setTimeout(function () {
        $(".circle-loading").addClass("hide");
        $(".main-page").fadeIn();
    }, 1000);

    // Ẩn hiện menu con
    $(".menu-btn").click(function () {
        // Hiển thị menu khi responsive
        $("div.drop-menu").toggleClass("active")
        $(".overlay").toggleClass("active")
        // Thay đổi icon menu
        $(".menu-btn i").toggleClass("ri-menu-3-fill")
        $(".menu-btn i").toggleClass("ri-close-large-line")
    })
    // Xử lý sự kiện khi nhấn nút search
    $("#search").click(function () {
        $(".nav-info .search").toggleClass("show")
        $(".nav-menu").toggleClass("hide");
        // Thay dổi icon search
        $("#search i").toggleClass("ri-search-line")
        $("#search i").toggleClass("ri-close-large-line")
    })

    //Lấy biến isLogin và firstname đã được lưu bên kia ra sử dụng
    let isLogin = localStorage.getItem("isLogin");
    let firstname = localStorage.getItem("firstname") ? localStorage.getItem("firstname") : "Admin";
    if (isLogin === "true") { //Nếu true có nghĩa là đã đăng nhập rồi
        $(".user, .bell").show();
        $(".sign-in-btn").hide();
        $(".user-top span").text(firstname);
    } else {
        $(".user, .bell").hide();
        $(".sign-in-btn").show();
    }

    //Khi người dùng nhấn vào nút đăng xuất
    $("#sign-out-btn").click(function () {
        localStorage.setItem("isLogin", "false");
        //Nhận thấy khi thay đổi không tự reset về lại nên dùng window reload lun
        window.location.reload();
    })

    // Xử lý sự kiện khi nhấn vào user profile
    $(".user").click(function () {
        $(".user-drop").toggleClass("drop")
    })
    // Xử lý sự kiện khi nhấn vào nút thông báo
    $(".bell").click(function () {
        $(".noti-drop").toggleClass("drop")
        $(".user-drop .user-bottom").toggleClass("drop")
    })

    $(window).scroll(function () {
        // Fixed navbar khi scroll
        if ($(this).scrollTop() > 100) {
            $("nav").css({
                "position": "fixed",
                "top": 0,
                "background-color": "rgba(25, 35, 45, 0.8) !important !important",
                "border": "none",
                "animation": "move .3s"
            })
        } else {
            $("nav").css({
                "position": "relative",
                "background-color": "#19232d",
                "backdrop-filter": "none",
                "animation": "none"
            })
        }
    })
})