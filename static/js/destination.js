$(window).ready(function () {
    //Xử lý việc thay đổi nội dung phù hợp với id
    const path = new URLSearchParams(window.location.search);
    const findId = path.get('id');

    //Hàm xử lý việc thay load đúng dữ liệu lên
    function displayContent(destination) {
        $(".main-destination").html(`
            <div class="destination-header">
                <div class="banner">
                    <img src="../${destination.banner}" alt="Điện Biên">
                </div>
                <!-- Header - Giới thiệu -->
                <div class="header-section">
                    <h1 class="title">${destination["header-title"]}</h1>
                    <p class="discr">${destination["header-discription"]}
                    </p>
                    <a class="read-more" href="#">Thêm thông tin</a>
                </div>
            </div>
            <!-- Main desination -->
            <div class="destination-container">
                <div class="destination-left">
                    <!-- Cảnh đẹp -->
                    <div class="destination-content" id="scene">
                        <h1 class="content-title">
                            Cảnh đẹp
                        </h1>
                        <div class="content-image">
                            <img src="../${destination["scene-img"]}">
                        </div>
                        <p class="content-discr">${destination["scene-discription"]}
                        </p>
                    </div>
                    <!-- Ẩm thực -->
                    <div class="destination-content" id="food">
                        <h1 class="content-title">
                            Ẩm thực
                        </h1>
                        <div class="content-image">
                            <img src="../${destination["food-img"]}">
                        </div>
                        <p class="content-discr">
                        ${destination["food-discription"]}
                        </p>
                    </div>
                    <!-- Hoạt động -->
                    <div class="destination-content" id="activities">
                        <h1 class="content-title">
                            Hoạt động
                        </h1>
                        <div class="content-image">
                            <img src="../${destination["activities-img"]}">
                        </div>
                        <p class="content-discr">
                            ${destination["activities-discription"]}
                        </p>
                    </div>
                    <!-- Related detination -->
                    <div class="destination-content" id="related-destination">
                        <h1 class="content-title">Những điểm đến liên quan</h1>
                        <div class="tours-contents">
                        </div>
                    </div>
                    <!-- Comment -->
                    <div class="destination-content" id="comment">
                        <h1 class="content-title">Viết Bình Luận</h1>
                        <div class="comment-form">
                            <div class="comment-field">
                                <p>Tên của bạn</p>
                                <input type="text">
                            </div>
                            <div class="comment-field">
                                <p>Email</p>
                                <input type="email">
                            </div>
                            <div class="comment-field">
                                <p>Nội dung bình luận</p>
                                <textarea placeholder="Nhập gì đó..."></textarea>
                            </div>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <button type="submit">Gửi</button>
                        </div>
                    </div>
                    <div class="destination-content">
                        <h1 class="content-title">2 Bình luận</h1>
                        <div class="comment-posts">
                            <div class="comment-post">
                                <div class="avatar">
                                    <img src="../static/images/avatar1.avif">
                                </div>
                                <div class="comment-info">
                                    <h3>Admin</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laudantium delectus
                                        libero deleniti repellendus dolore, cupiditate nesciunt illum quaerat tempora sunt,
                                        quidem est vitae quibusdam beatae cum ad earum rerum?</p>
                                    <div class="rating">
                                        <div class="stars">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="comment-post">
                                <div class="avatar">
                                    <img src="../static/images/avatar1.avif">
                                </div>
                                <div class="comment-info">
                                    <h3>Admin</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laudantium delectus
                                        libero deleniti repellendus dolore, cupiditate nesciunt illum quaerat tempora sunt,
                                        quidem est vitae quibusdam beatae cum ad earum rerum?</p>
                                    <div class="rating">
                                        <div class="stars">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Thanh side bar bên phải -->
                <div class="destination-right">
                    <div class="right-content">
                        <div class="overview">
                            <h3>Tổng quan</h3>
                            <ul>
                                <li><a href="#scene">Cảnh đẹp</a></li>
                                <li><a href="#food">Ẩm thực</a></li>
                                <li><a href="#activities">Hoạt động</a></li>
                                <li><a href="#related-destination">Những địa điểm liên quan</a></li>
                                <li><a href="#comment">Bình luận</a></li>
                            </ul>
                        </div>
                        <div class="booking">
                            <div class="content">
                                <div class="sale">
                                    <span>20% off</span>
                                    <span>New</span>
                                </div>
                                <div class="info">
                                    <div class="rating">
                                        <div class="stars">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div class="reviews">
                                            (2 Reviews)
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="book">
                                <div class="price">
                                    <b>${destination["price"]}</b>
                                    <span>${destination["old-price"]}</span>
                                </div>
                                <a href="#" class="book-btn">Đặt ngay</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `)
    }

    //Hàm tạo ngẫu nhiên relate destination
    function randomRelated(data) {
        let lenElement = 2;
        let arr = [];
        for (let i = 0; i < data.length; i++) {
            arr[i] = 0;
        }
        let i = 0;
        while (i < lenElement) {
            let randomOrder = Math.floor(Math.random() * (data.length - 1));
            if (arr[randomOrder] == 1) {
                i--;
                continue;
            } else {
                $(".tours-contents").append(`
                    <a href="destination.html?id=${data[randomOrder].id}" class="tours-content">
                            <div class="tours-info">
                                <div class="rating">
                                    <div class="stars">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <div class="reviews">
                                        (2 Reviews)
                                    </div>
                                </div>

                                <h3 class="tours-title">${data[randomOrder]["place"]} | from ${data[randomOrder]["price"]}</h3>
                                <div class="tours-days">
                                    <i class="fa-regular fa-clock"></i>
                                    <span>7 days</span>
                                </div>
                            </div>
                        </a>
                    `);
                $(`.tours-content:nth-child(${i + 1})`).css({
                    "background-image": `url(../${data[randomOrder]["scene-img"]})`
                })
            }
            i++;
        }
    }

    //Lấy dữ liệu từ file data.json
    fetch("../static/data/data.json").then(res => res.json()).then(data => {
        if (findId) {
            const destination = data.destinations.find(item => item.id.toString() === findId.toString());
            displayContent(destination);
            randomRelated(data.destinations);
        }


        //Đặt sự kiện này ở đây để sau khi thay đổi html thì sự kiên mởi đượt kích hoạt
        //Lý do là vì sau khi thay đổi html thì nội dung sẽ bị thay đổi dẫn tới không select được
        //Xử lý fix side bar
        const sideBar = $(".right-content");
        const sideBarTop = sideBar.offset().top;
        $(window).on('scroll', (function () {
            let footerTop = document.querySelector("footer").getBoundingClientRect().top;
            if ($(window).scrollTop() + 250 > sideBarTop && footerTop > $(window).height()) {
                sideBar.removeClass("absolute");
                sideBar.addClass("fixed");
            }
            else if (footerTop < $(window).height()) {
                sideBar.removeClass("fixed");
                sideBar.addClass("absolute");
            }
            else {
                sideBar.removeClass("fixed");
                sideBar.removeClass("absolute");
            }
        }));
    });
});