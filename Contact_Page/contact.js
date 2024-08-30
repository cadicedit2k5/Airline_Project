//Xử lý cho phần select form
$(document).ready(function () {
    let quickBtn = $(".contact-btn a");
    let closeForm = $(".contact-form .close-form");
    let contactForm = $(".contact-form");
    let selectBtn = $(".select-btn");
    let selectBtnText = $(".select-btn span");
    let selectBtnIcon = $(".select-btn i");
    let options = $(".select-option");

    //Khi nhấn vào liên hệ nhanh thì hiện form ra
    quickBtn.click(function () {
        contactForm.fadeIn();
        //Sử dụng overlay đã xây dựng sẵn để làm tối nền
        $(".overlay").addClass("active");
    })

    //Khi nhấn vào dấu x thì đòng form
    closeForm.click(function () {
        contactForm.fadeOut();
        //cho nền sáng trở lại
        $(".overlay").removeClass("active");
    })
    //Khi nhấn vào select btn thì ẩn/ hiện form
    selectBtn.click(function () {
        selectBtn.toggleClass("down");
    });

    //Khi nhấn vào một option bất kỳ thì thay đổi nội dung trên select btn
    options.click(function () {
        selectBtnText.text($(this).text());
    });

})