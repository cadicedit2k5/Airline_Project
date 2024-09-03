$(document).ready(function () {
    const userEmail = "admin@nnl.dtt.com";
    const passWord = "Abc123";
    const loginEmail = $("#login-email");
    const loginPassword = $("#login-password");
    const registerFirstname = $("#register-firstname");
    const registerLastname = $("#register-lastname");
    const registerEmail = $("#register-email");
    const registerPassword = $("#register-password");
    const confirmPassword = $("#confirm-password");

    const adminUser = {
        'email': "admin@nnl.dtt.com",
        'password': "Abc123",
        'firstname': "Admin",
        'lastname': "Nguyen",
    }

    //Kiểm tra xem có người dùng nào trong LocalStorage chưa
    let storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers == null) {
        localStorage.setItem('users', JSON.stringify(adminUser));
    }
    if (!Array.isArray(storedUsers)) {
        storedUsers = [storedUsers];
    }
    //Xử lý đăng ký tài khoản
    function register() {
        if (registerFirstname.val() === '') {
            setTimeout(function () {
                alert("Tên người dùng không được để trống!");
            }, 200)
        }
        else if (registerLastname.val() === '') {
            setTimeout(function () {
                alert("Họ người dùng không được để trống!");
            }, 200)
        }
        else if (registerEmail.val() === '') {
            setTimeout(function () {
                alert("Email không được để trống!");
            }, 200)
        } else if (registerEmail.val() !== '') {
            //Kiểm tra sự tồn tại của email
            if (storedUsers != null) {
                const user = storedUsers.find(function (user) {
                    return user.email === registerEmail.val()
                });
                console.log(user);
                if (user) {
                    setTimeout(function () {
                        alert("Email đã tồn tại!");
                    }, 200)
                }
                else if (registerPassword.val() === '') {
                    setTimeout(function () {
                        alert("Mật khẩu không được để trống!");
                    }, 200)
                } else {
                    if (confirmPassword.val() !== registerPassword.val()) {
                        alert("Xác nhận mật khẩu phải giống với mật khẩu ban đầu!");
                    } else {
                        storedUsers.push({
                            email: registerEmail.val(),
                            password: registerPassword.val(),
                            firstname: registerFirstname.val(),
                            lastname: registerLastname.val()
                        })
                        localStorage.setItem('users', JSON.stringify(storedUsers));
                        alert("Đăng ký thành công");
                        $(".registerToLogin").click();
                    }
                }
            }

        }


    }

    // Khi nhấn vào Đăng Nhập nếu đã có tài khoản
    $(".registerToLogin").click(function () {
        $('#register').css({
            "transform": `translateX(100%)`,
            "opacity": "0"
        })
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
        $('#login').css({
            "transform": "translateX(-100%)",
            "opacity": "0"
        })
    })

    //Hàm dùng chung cho đăng nhập
    function login() {
        // Nếu email trong ô được lấy ra khác với email đã được set sẵn
        // sẽ xảy ra 2 trường hợp
        const user = storedUsers.find(function (user) {
            return user.email === loginEmail.val();
        }
        );

        if (!user) {
            // Xóa password trước
            loginPassword.val("")
            // Set border đỏ để báo hiệu nội dung có lỗi
            loginEmail.css({
                "border": "2px solid red"
            })
            setTimeout(function () {
                alert("Email không hợp lệ!");
            }, 200)
        }
        else {
            if (loginPassword.val() !== user.password) {
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
                localStorage.setItem("isLogin", true); // Tạo một biến lưu trên local có thể đồng bộ hóa giữa nhiều file
                localStorage.setItem("firstname", user.firstname); //Tạo một biến lưu tên người dùng
                setTimeout(function () {
                    window.history.back();
                }, 100);
            }
        }
    }

    // Đăng nhập
    // Reset border khi kích vào để nhập nội dung
    $(".input-field").click(function () {
        $(this).css({
            "border": "1px solid #f39c12"
        })
    })

    // Nếu nhấn vào đăng nhập thì sẽ kiểm tra các điều kiện
    $("#login-btn").click(function () {
        login();
    })

    //Khi nhấn phím enter thì giả lập nút đăng nhập
    $(window).keypress(function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            $("#login-btn").click();
        }
    })

    //Khi nhấn vào nút đăng ký
    $("#register-btn").click(function () {
        register();
    })
})