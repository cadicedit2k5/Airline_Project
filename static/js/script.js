$(document).ready(function () {
    $(".menu-btn").click(function () {
        // Hiển thị menu khi responsive
        $("div.drop-menu").toggleClass("active")
        // Thay đổi icon menu
        $(".menu-btn i").toggleClass("ri-menu-3-fill")
        $(".menu-btn i").toggleClass("ri-close-large-line")
    })
    // Xử lý sự kiện khi nhấn nút search
    $("#search").click(function () {
        $(".nav-info .search").toggleClass("active")
        // Thay dổi icon search
        $("#search i").toggleClass("ri-search-line")
        $("#search i").toggleClass("ri-close-large-line")
    })
})