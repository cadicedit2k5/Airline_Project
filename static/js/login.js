$(document).ready(function () {
    let userEmail = "admin@nnl.dtt.com";
    let passWord = "Abc123";
    let loginEmail = $("#login-email");
    let loginPassword = $("#login-password");

    if (window.scrollTop() <= 100) {
        $("nav").css({
            "background-color": "#19232d !important",
        })
    }

    // Khi nhấn vào Đăng Nhập nếu đã có tài khoản
    $(".registerToLogin").click(function () {
        $('#register').css({
            "transform": `translateX(100%)`,
            "opacity": "0"
        })
        console.log($('.login-container'))
        $('#login').css({
            "transform": "translateX(0)",
            "opacity": "1"
        })
    })
    // Khi nhấn vào Đăng ký nếu chưa có tài khoản
    $(".loginToRegister").click(function () {
        $('#register').css({
            "transform": `translateX(0)`,
            "opacity": "1"
        })
        console.log($('.login-container'))
        $('#login').css({
            "transform": "translateX(-100%)",
            "opacity": "0"
        })
    })


    // Đăng nhập
    // Reset border khi kích vào để nhập nội dung
    $(".input-field").click(function () {
        $(this).css({
            "border": "1px solid #f39c12"
        })
    })
    // Nếu nhấn vào đăng nhập thì sẽ kiểm tra các điều kiện
    $("#login-btn").click(function () {
        // Nếu email trong ô được lấy ra khác với email đã được set sẵn
        // sẽ xảy ra 2 trường hợp
        if (loginEmail.val() !== userEmail) {
            // Xóa password trước
            loginPassword.val("")
            // Set border đỏ để báo hiệu nội dung có lỗi
            loginEmail.css({
                "border": "2px solid red"
            })
            // Email trống
            if (loginEmail === null) {
                setTimeout(function () {
                    alert("Email không được để trống!");
                }, 200)
            }
            // Email không đúng
            else {
                setTimeout(function () {
                    alert("Email không hợp lệ!");
                }, 200)
            }
        }
        else {
            if (loginPassword.val() !== passWord) {
                // Xóa password trước
                loginPassword.val("")
                // Set border đỏ để báo hiệu nội dung có lỗi
                loginPassword.css({
                    "border": "2px solid red"
                })
                setTimeout(function () {
                    alert("Sai mật khẩu!");
                }, 200)
            } else {
                alert("Đăng nhập thành công!");
            }
        }
    })
})