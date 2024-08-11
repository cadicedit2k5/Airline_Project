// Nơi này dùng để chứa những file JavaScript dùng chung 
$(document).ready(function () {
    // Ẩn hiện menu con
    $(".menu-btn").click(function () {
        // Hiển thị menu khi responsive
        $("div.drop-menu").toggleClass("active")
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

    $(window).scroll(function () {
        // Fixed navbar khi scroll
        if ($(this).scrollTop() > 100) {
            $("nav").css({
                "position": "fixed",
                "top": 0,
                "background-color": "rgba(0,0,0,0.6)",
                "border": "none",
                "animation": "move .3s"
            })
            // $(".drop-menu").css({
            //     "background-color": "rgba(0,0,0,0.8)",
            // })
            $(".navbar").css({
                "border-bottom": "none",
            })
        } else {
            $("nav").css({
                "position": "relative",
                "background-color": "transparent",
                "backdrop-filter": "none",
                "animation": "none"
            })
        }
        // // Hiện nút gototop khi kéo xuống
        // if ($(this).scrollTop() > 100) {
        //     $("#gototop").css({
        //         "transform": "translateY(-70%)"
        //     })
        // }
        // else {
        //     $("#gototop").css({
        //         "transform": "translateY(100%)"
        //     })
        // }
    })
})