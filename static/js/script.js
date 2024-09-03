$(document).ready(function () {
    //Loading page
    //Xử lý sự kiện load đầu trang
    function loading() {
        let element = $(".loading");
        let count = 50;
        let i = 0;
        while (i < count) {
            //Tạo thẻ i cho hiệu ứng bay
            let cloud = $("<i></i>")
            let l = Math.floor(Math.random() * window.innerWidth);
            let duration = Math.random() * 2 + 1;
            let h = Math.random() * 100 + 20;

            cloud.css({
                "left": `${l}px`,
                "height": `${h}px`,
                "width": "1px",
                "animation-duration": `${duration}s`
            })

            element.append(cloud);
            i++;
        }

        //Hàm để thay đổi % đẹp mắt hơn
        function animateProgress(current, target, duration) {
            //Tạo một vòng lặp sau một khoảng thời gian nhanh hơn 40ms để tăng giá trị % lên
            let interval = setInterval(function () {
                current += 1;
                $(".progress-bar span").text(`${current}%`)
                if (current >= target) {
                    clearInterval(interval);
                }
            }, duration);
        }

        //Hiển thị thay đổi % load
        per = 0;
        //Thay đổi phần trăm dựa trên % trên keyframe progress
        setTimeout(function () {
            animateProgress(0, 17, 20);
        }, 255 - (17 - 0) * 20);
        setTimeout(function () {
            animateProgress(17, 28, 20);
        }, 420 - (28 - 17) * 20);
        setTimeout(function () {
            animateProgress(28, 51, 20);
        }, 780 - (51 - 28) * 20);
        setTimeout(function () {
            animateProgress(51, 92, 20);
        }, 1380 - (92 - 51) * 20);
        setTimeout(function () {
            animateProgress(92, 100, 20);
        }, 1500);
        //Sau khi load xong 4s
        setTimeout(function () {
            $(".loading>div:first-child").css({
                "animation": "flyUp 2s"
            });
            $(".loading-bar-text").text("Completed");
        }, 1000)
    }
    $(".main").hide();
    loading();
    setTimeout(function () {
        $(".loading").addClass("hide");
        $(".main").show();
    }, 2300);
    // End loading
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
        }, 0)
    })

    // console.log($(".menu-item").attr('href'))

    //Khi nhấn vào navbar
    $(".menu-item a").click(function () {
        $($(this).attr('href')).animate({
            scrollTop: 0
        }, 1000)
    })

    //Hàm này trượt đến phần tử truyền vào
    //Dùng cho các phần cần carousel
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

    // Hàm này dùng để tính số lượng phần contents trên một hàng
    function countDivInOneRow(container, contents) {
        return Math.floor(container.outerWidth(true) / contents.width());
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

        // Khi click vào nút next
        next.click(function () {
            if (isSliding) {
                return;
            }
            isSliding = true;

            // Kiểm tra vị trí hiện tại
            if (index + countDivInOneRow(container, contents) > slideLenght) {
                index = 0;
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
                index = slideLenght - countDivInOneRow(container, contents) + 1;
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
        let index = 1;
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
            if (index === slideLenght) {
                // Thay đổi content không có hiệu ứng để đánh lừa rằng content vô hạn=))
                setTimeout(function () {
                    $($(".rate-content").css({
                        "transition": "none",
                        "transform": `translateX(${-(1 * (contents.outerWidth(true)))}px)`
                    }))
                }, 1000)//set thời gian bằng với thời gian hiệu ứng để khi slide sau chạy xong thì slide này sẽ được nạp lên thay thế
                slideX(contents, index + 1);
                index = 1;
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
            if (index <= 1) {
                slideX(contents, index - 1);
                index = slideLenght;
                setTimeout(function () {
                    // Thay đổi content không có hiệu ứng để đánh lừa rằng content vô hạn=))
                    $($(".rate-content").css({
                        "transition": "none",
                        "transform": `translateX(${-((index) * (contents.outerWidth(true)))}px)`
                    }))
                }, 1000)//set thời gian bằng với thời gian hiệu ứng để khi slide sau chạy xong thì slide này sẽ được nạp lên thay thế
            } else {
                index -= 1;
                slideX(contents, index);
            }
            setTimeout(() => {
                isSliding = false;
            }, 1000);
            autoSlideInterval = setInterval(function () {
                autoSlide(next);
            }, 5000);
        })

        //Kích hoạt hiệu ứng trượt tự động
        autoSlideInterval = setInterval(function () {
            autoSlide(next);
        }, 5000);
    }

    //Xử lý sự kiện trượt trang Ưu đãi
    function suggestSlider(conatainerClass, contentClass, prevId, nextId) {
        let isSliding = false;
        const container = $(conatainerClass);
        const contents = $(contentClass);
        let index = countDivInOneRow(container, contents);
        const cnt = countDivInOneRow(container, contents);
        const slideLenght = contents.length - 4; // Trừ mấy thằng clone
        const next = $(nextId);
        const prev = $(prevId);

        //Cho phần tử trượt trước
        contents.css({
            "transition": "none",
            "transform": `translateX(${-(index * (contents.outerWidth(true)))}px)`
        })

        // Khi click vào nút next
        next.click(function () {
            if (isSliding) {
                return;
            }
            isSliding = true;
            // Kiểm tra vị trí hiện tại
            if (index == slideLenght + cnt - 1) {
                slideX(contents, index + 1);
                index = cnt;
                setTimeout(function () {
                    // Thay đổi content không có hiệu ứng để đánh lừa rằng content vô hạn=))
                    $(contents.css({
                        "transition": "none",
                        "transform": `translateX(${-(index * (contents.outerWidth(true)))}px)`
                    }))
                }, 1000)//set thời gian bằng với thời gian hiệu ứng để khi slide sau chạy xong thì slide này sẽ được nạp lên thay thế
            }
            else {
                index += 1;
                slideX(contents, index);
            }

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
            if (index == cnt) {
                slideX(contents, index - 1);
                index = slideLenght + cnt - 1;
                setTimeout(function () {
                    // Thay đổi content không có hiệu ứng để đánh lừa rằng content vô hạn=))
                    $(contents.css({
                        "transition": "none",
                        "transform": `translateX(${-index * (contents.outerWidth(true))}px)`
                    }))
                }, 1000)//set thời gian bằng với thời gian hiệu ứng để khi slide sau chạy xong thì slide này sẽ được nạp lên thay thế
            }
            else {
                index -= 1;
                slideX(contents, index);
            }
            // Reset lại trạng thái trượt
            setTimeout(function () {
                isSliding = false;
            }, 1000)
        })
    }

    //Áp dụng hiệu ứng trượt lên rate-container
    rateSlider(".rate-container", ".rate-content", "#rate-prev", "#rate-next");
    suggestSlider(".suggest-list", ".suggest-item", "#suggest-prev", "#suggest-next");
    dealSlider(".deal-list", ".deal-item", "#deal-prev", "#deal-next");

    //Xử lý để hiển thị nội dung câu hỏi
    $(".question-content").click(function () {
        $(this).next().toggleClass("show")
        //Thay đổi nút cộng trừ
        $(this).children("span").toggleClass("active");
    })

    //Hàm dùng chung cho sự kiện Reval scroll
    function revalScroll(e) {
        //Lấy top của phần tử hiện tại
        let rect = document.querySelector(e).getBoundingClientRect().top;
        let windowHeight = $(window).height();

        if (windowHeight > rect - 100) {
            $(e).addClass("reval");
        } else {
            $(e).removeClass("reval");
        }
    }

    //Gọi thực thi tất cả sự kiện reval Scroll
    $(window).scroll(function () {
        revalScroll(".suggest-intro");
        revalScroll(".deal-title");
        revalScroll(".deal-list");
        revalScroll(".benefit-title");
        revalScroll(".benefit-discription");
        revalScroll(".benefit-banner");
        revalScroll(".benefit-content:nth-child(odd)");
        revalScroll(".benefit-content:nth-child(even)");
        revalScroll(".question-title");
        revalScroll(".rate-header");
        revalScroll(".blog-title");
        revalScroll(".blog-vision:first-child");
        revalScroll(".blog-vision:nth-child(2)");
        revalScroll(".blog-right");
    })
})