$(document).ready(function () {
    $(window).scroll(function () {
        // Hiện nút gototop khi kéo xuống
        if ($(this).scrollTop() > 100) {
            $("#gototop").css({
                "transform": "translateY(-70%)"
            })
        }
        else {
            $("#gototop").css({
                "transform": "translateY(100%)"
            })
        }
    })
    // Trượt về đàu trang khi click vào nút scroll top
    $("#gototop").click(function () {
        $("html").animate({
            scrollTop: 0
        }, 1000)
    })

    //Hàm này trượt đến phần tử truyền vào
    function slideX(contents, i) {
        // Lấy width của container ra để trượt vì width của content không phải 100% 
        // hoặc dùng outWidth lấy width của content cũng được
        contents.css({
            "transition": "1s",
            "transform": `translateX(${-(i * (contents.outerWidth(true)))}px)`
        })
    }

    // Xử lý việc tự động trượt
    // Hàm này dùng để tự động click vào nút next
    function autoSlide(next) {
        next.click()
    }

    //Xử lý sự kiện trượt trang Ưu đãi
    function dealSlider(conatainerClass, contentClass, prevId, nextId) {
        let isSliding = false;
        let index = 0;
        const container = $(conatainerClass);
        const contents = $(contentClass);
        const slideLenght = contents.length - 1;
        const next = $(nextId);
        const prev = $(prevId);

        // Hàm này dùng để tính số lượng phần contents trên một hàng
        function countDivInOneRow(container, contents) {
            return Math.floor(container.outerWidth(true) / contents.width());
        }

        // Khi click vào nút next
        next.click(function () {
            if (isSliding) {
                return;
            }
            isSliding = true;

            // Kiểm tra vị trí hiện tại
            if (index + countDivInOneRow(container, contents) > slideLenght) {
                alert('Bên này không còn gì');
            }
            else {
                index += 1;
            }

            slideX(contents, index);

            // Reset lại trạng thái trượt
            setTimeout(function () {
                isSliding = false;
            }, 1000)
        })

        // Khi click vào nút prev
        prev.click(function () {
            if (isSliding) {
                return;
            }
            isSliding = true;

            // Kiểm tra vị trí hiện tại
            if (index - 1 < 0) {
                alert('Bên này không còn gì!');
            }
            else {
                index -= 1;
            }

            slideX(contents, index);
            // Reset lại trạng thái trượt
            setTimeout(function () {
                isSliding = false;
            }, 1000)
        })
    }
    // Xử lý sự kiện trượt trang đánh giá
    function rateSlider(conatainerClass, contentClass, prevId, nextId) {
        let isSliding = false;
        let index = 0;
        const container = $(conatainerClass);
        const contents = $(contentClass);
        const slideLenght = contents.length - 2;
        const next = $(nextId);
        const prev = $(prevId);

        //Thực thi khi click vào nút next
        next.click(function () {
            if (isSliding) {
                return;
            } // Ngăn không cho nhấn khi đang trượt
            // Hủy hiệu ứng trượt tự động
            clearInterval(autoSlideInterval);
            //để biết có đang trượt hay không
            isSliding = true;
            if (index + 1 == slideLenght + 1) {
                // Thay đổi content không có hiệu ứng để đánh lừa rằng content vô hạn=))
                setTimeout(function () {
                    $($(".rate-content").css({
                        "transition": "none",
                        "transform": `translateX(${-(1 * (contents.outerWidth(true)))}px)`
                    }))
                }, 1000)//set thời gian bằng với thời gian hiệu ứng để khi slide sau chạy xong thì slide này sẽ được nạp lên thay thế
                slideX(contents, index + 1);
                index = 0;
            } else {
                index += 1;
                slideX(contents, index);
            }

            setTimeout(() => {
                isSliding = false;
            }, 1000);

            //Reset lại hiệu ứng trượt tụ động
            autoSlideInterval = setInterval(function () {
                autoSlide(next);
            }, 5000);
        })

        //Hàm thực thi khi click vào prev
        prev.click(function () {
            //Hủy hiệu ứng trượt tự động
            if (isSliding) return;
            clearInterval(autoSlideInterval);
            isSliding = true;
            if (index == 0) {
                setTimeout(function () {
                    // Thay đổi content không có hiệu ứng để đánh lừa rằng content vô hạn=))
                    $($(".rate-content").css({
                        "transition": "none",
                        "transform": `translateX(${-(slideLenght * (contents.outerWidth(true)))}px)`
                    }))
                }, 1000)//set thời gian bằng với thời gian hiệu ứng để khi slide sau chạy xong thì slide này sẽ được nạp lên thay thế
                slideX(contents, index);
                index = slideLenght;
            } else {
                index -= 1;
                slideX(contents, index);
            }
            autoSlideInterval = setInterval(function () {
                autoSlide(next);
            }, 5000);
        })
        setTimeout(() => {
            isSliding = false;
        }, 1000);

        //Kích hoạt hiệu ứng trượt tự động
        autoSlideInterval = setInterval(function () {
            autoSlide(next);
        }, 5000);
    }

    //Áp dụng hiệu ứng trượt lên rate-container
    rateSlider(".rate-container", ".rate-content", "#rate-prev", "#rate-next");
    dealSlider(".deal-list", ".deal-item", "#deal-prev", "#deal-next");

    //Xử lý để hiển thị nội dung câu hỏi
    $(".question-content").click(function () {
        $(this).next().toggleClass("show")
        //Thay đổi nút cộng trừ
        $(this).children("span").toggleClass("active");
    })
})