$(window).ready(function () {
    //Hàm thêm nội dung vé khứ hồi
    function roundTrip() {
        $(".booking-form").html(`
            <div class="input">
                <span>Nơi khởi hành: </span>
                <div class="input-field select">
                    <div class="select-btn">
                        <span class="from">Chọn điểm đi</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <ul class="options">
                        <li class="option">Đà Lạt</li>
                        <li class="option">Phú Quốc</li>
                        <li class="option">London</li>
                        <li class="option">Bangkok</li>
                        <li class="option">Tokyo</li>
                        <li class="option">Điện Biên</li>
                    </ul>
                </div>
            </div>
            <div class="input">
                <span>Nơi đến: </span>
                <div class="input-field select">
                    <div class="select-btn">
                        <span class="to">Chọn điểm đến</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <ul class="options">
                        <li class="option">Đà Lạt</li>
                        <li class="option">Phú Quốc</li>
                        <li class="option">London</li>
                        <li class="option">Bangkok</li>
                        <li class="option">Tokyo</li>
                        <li class="option">Điện Biên</li>
                    </ul>
                </div>
            </div>
            <div class="input">
                <span>Ngày khởi hành</span>
                <div class="input-field calendar-btn">
                    <div class="calendar-views">
                        <span class="day">dd-mm-yyyy</span>
                        <i class="fa-regular fa-calendar"></i>
                    </div>
                    <div class="calendar-container">
                        <div class="calendar-header">
                            <span>September 2024</span>
                            <div class="calendar-icons">
                                <i id="calendar-prev" class="fa-solid fa-chevron-left"></i>
                                <i id="calendar-next" class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                        <ul class="calendar-week">
                            <li>Sun</li>
                            <li>Mon</li>
                            <li>Tue</li>
                            <li>Wed</li>
                            <li>Thu</li>
                            <li>Fri</li>
                            <li>Sat</li>
                        </ul>
                        <ul class="calendar-days">

                        </ul>
                    </div>
                </div>
            </div>
            <div class="input">
                <span>Ngày về</span>
                <div class="input-field calendar-btn">
                    <div class="calendar-views">
                        <span class="day">dd-mm-yyyy</span>
                        <i class="fa-regular fa-calendar"></i>
                    </div>
                    <div class="calendar-container">
                        <div class="calendar-header">
                            <span>September 2024</span>
                            <div class="calendar-icons">
                                <i id="calendar-prev" class="fa-solid fa-chevron-left"></i>
                                <i id="calendar-next" class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                        <ul class="calendar-week">
                            <li>Sun</li>
                            <li>Mon</li>
                            <li>Tue</li>
                            <li>Wed</li>
                            <li>Thu</li>
                            <li>Fri</li>
                            <li>Sat</li>
                        </ul>
                        <ul class="calendar-days">

                        </ul>
                    </div>
                </div>
            </div>
            <div class="input">
                <span>Số hành khách</span>
                <div class="input-field select">
                    <div class="select-btn">
                        <span>1</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <ul class="options">
                        <li class="option">1</li>
                        <li class="option">2</li>
                        <li class="option">3</li>
                        <li class="option">4</li>
                        <li class="option">5</li>
                    </ul>
                </div>
            </div>
            <div class="input">
                <span>Hạng vé</span>
                <div class="input-field select">
                    <div class="select-btn">
                        <span>Chọn hạng vé</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <ul class="options">
                        <li class="option">Hạng thương gia</li>
                        <li class="option">Hạng phổ thông</li>
                        <li class="option">Hạng nhất</li>
                    </ul>
                </div>
            </div>
            <div class="btn">
                <button>Kiểm tra</button>
            </div>
            <div class="display">

            </div>
            `);
    }

    //Hàm thêm nội dung vé một chiều
    function oneWay() {
        $(".booking-form").html(`
            <div class="input">
                <span>Nơi khởi hành: </span>
                <div class="input-field select">
                    <div class="select-btn">
                        <span class="from">Chọn điểm đi</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <ul class="options">
                        <li class="option">Đà Lạt</li>
                        <li class="option">Phú Quốc</li>
                        <li class="option">London</li>
                        <li class="option">Bangkok</li>
                        <li class="option">Tokyo</li>
                        <li class="option">Điện Biên</li>
                    </ul>
                </div>
            </div>
            <div class="input">
                <span>Nơi đến: </span>
                <div class="input-field select">
                    <div class="select-btn">
                        <span class="to">Chọn điểm đến</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <ul class="options">
                        <li class="option">Đà Lạt</li>
                        <li class="option">Phú Quốc</li>
                        <li class="option">London</li>
                        <li class="option">Bangkok</li>
                        <li class="option">Tokyo</li>
                        <li class="option">Điện Biên</li>
                    </ul>
                </div>
            </div>
            <div class="input">
                <span>Ngày khởi hành</span>
                <div class="input-field calendar-btn">
                    <div class="calendar-views">
                        <span class="day">dd-mm-yyyy</span>
                        <i class="fa-regular fa-calendar"></i>
                    </div>
                    <div class="calendar-container">
                        <div class="calendar-header">
                            <span>September 2024</span>
                            <div class="calendar-icons">
                                <i id="calendar-prev" class="fa-solid fa-chevron-left"></i>
                                <i id="calendar-next" class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                        <ul class="calendar-week">
                            <li>Sun</li>
                            <li>Mon</li>
                            <li>Tue</li>
                            <li>Wed</li>
                            <li>Thu</li>
                            <li>Fri</li>
                            <li>Sat</li>
                        </ul>
                        <ul class="calendar-days">

                        </ul>
                    </div>
                </div>
            </div>
            <div class="input">
                <span>Số hành khách</span>
                <div class="input-field select">
                    <div class="select-btn">
                        <span>1</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <ul class="options">
                        <li class="option">1</li>
                        <li class="option">2</li>
                        <li class="option">3</li>
                        <li class="option">4</li>
                        <li class="option">5</li>
                    </ul>
                </div>
            </div>
            <div class="input">
                <span>Hạng vé</span>
                <div class="input-field select">
                    <div class="select-btn">
                        <span>Chọn hạng vé</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <ul class="options">
                        <li class="option">Hạng thương gia</li>
                        <li class="option">Hạng phổ thông</li>
                        <li class="option">Hạng nhất</li>
                    </ul>
                </div>
            </div>
            <div class="btn">
                <button>Kiểm tra</button>
            </div>
            <div class="display">

            </div>
        </div>
            `)
    }
    //Hàm dùng cho select box
    function selectFunction() {
        //Xử lý cho ô select
        $(".select-btn").click(function () {
            $(this).closest(".select").find(".options").toggleClass("active");
            $(this).find("i").toggleClass("active");
        });

        $(".option").click(function () {
            $(this).closest(".options").closest(".select").find("span").text($(this).text());
            $(".select-btn i").removeClass("active");
            $(".options").removeClass("active");
        });
    }

    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    //Tạo dynamic calendar
    function renderCalendar(calendarHeader, daysContainer, currentDate, currentYear, currentMonth) {
        let lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
        let firstDayOfNextMonth = new Date(currentYear, currentMonth + 1, 1).getDay();
        calendarHeader.text(`${months[currentMonth]} ${currentYear}`);
        liTag = "";

        for (let i = firstDayOfMonth; i > 0; i--) {
            liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
        }

        for (let i = 1; i <= lastDayOfMonth; i++) {
            let isToday = currentDate.getDate() === i && new Date().getMonth() === currentMonth && new Date().getFullYear() === currentYear ? "active" : "";
            liTag += `<li class="${isToday}">${i}</li>`;
        }

        for (let i = firstDayOfNextMonth - 1; i < 6; i++) {
            liTag += `<li class="inactive">${firstDayOfNextMonth + i + 1}</li>`
        }

        daysContainer.html(liTag);
        //Lấy nội dung nhấp vào bỏ lên calendar-btn 
        $(".calendar-days li").on("click", function () {
            let year = new Date(currentYear, currentMonth).getFullYear();
            let month = new Date(currentYear, currentMonth).getMonth();
            //Nếu có class là inactive
            if ($(this).attr("class") === "inactive") {
                if ($(this).text() > 25) {
                    year = new Date(currentYear, currentMonth - 1).getFullYear();
                    month = new Date(currentYear, currentMonth - 1).getMonth();
                } else {
                    year = new Date(currentYear, currentMonth + 1).getFullYear();
                    month = new Date(currentYear, currentMonth + 1).getMonth();
                }
            }
            $(this).closest(".calendar-days").closest(".calendar-container").closest(".calendar-btn").find(".calendar-views span").text(`${$(this).text()}/${month + 1}/${year}`);
            $(".calendar-container").removeClass("down");
        });
    }

    //Hàm dùng cho calendar
    function calendarFunc() {

        //Biến của calendar
        let calendarBtn = $(".calendar-btn");
        let calendarViews = $(".calendar-views");
        let calendarHeader = $(".calendar-container span");
        let daysContainer = $(".calendar-days");
        let calendarIcons = $(".calendar-icons i");

        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth();

        //Hiển thị calendar khi nhấn vào calendar button
        calendarViews.on("click", function () {
            $(this).closest(".calendar-btn").find(".calendar-container").toggleClass("down");
        });

        renderCalendar(calendarHeader, daysContainer, currentDate, currentYear, currentMonth);

        //Thay đổi calendar khi  nhấn vào next hoặc prev
        calendarIcons.on("click", function () {
            currentMonth = $(this).attr('id') === "calendar-prev" ? currentMonth - 1 : currentMonth + 1;

            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            } else if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }

            renderCalendar(calendarHeader, daysContainer, currentDate, currentYear, currentMonth);
        });
    }

    //Hàm tìm kiếm thông tin
    function findFlight() {
        //Xử lý tìm kiếm theo thông tin đã nhập
        $(".booking-form button").click(function () {
            const from = $(".from").text();
            const to = $(".to").text();
            const depatureDay = $($(".day")[0]).text();
            const returnDay = $($(".day")[1]).text();

            places = {
                "Đà Lạt": "DLI",
                "Điện Biên": "DIN",
                "Hà Nội": "HAN",
                "Sài Gòn": "SGN",
            }

            fetch('../static/data/data.json').then(res => res.json()).then(data => {
                $(".display").empty();
                for (let i = 0; i < data.bookings.length; i++) {
                    if (data.bookings[i].from === places[from] && data.bookings[i].to === places[to] && (data.bookings[i].day === depatureDay)) {
                        const bookingData = data.bookings[i];
                        $(".display").append(`
                            <div class="content">
                                 <p>${from} &rightarrow; ${to}</p>
                            </div>
                            <div class="content">
                                <p>Ngày khởi hành: </p>
                                <p>${bookingData["day"]}</p>
                            </div>
                            <div class="content">
                                <p>Giờ khởi hành: </p>
                                <p>${bookingData["time-to-go"]}</p>
                            </div>
                            <div class="content">
                                <p>Giờ đến: </p>
                                <p>${bookingData["time-arrive"]}</p>
                            </div>
                            <div class="content">
                                <p>Giá vé: </p>
                                <p>${bookingData["rank"]}</p>
                            </div>
                            <div class="btn">
                                <a href="#">Đặt ngay</a>
                            </div>
                        `)
                    }
                    else if (data.bookings[i].to === places[from] && data.bookings[i].from === places[to] && data.bookings[i].day === returnDay) {
                        const bookingData = data.bookings[i];
                        $(".display").append(`
                            <div class="content">
                                <p>${to} &rightarrow; ${from}</p>
                            </div>
                            <div class="content">
                                <p>Ngày khởi hành: </p>
                                <p>${bookingData["day"]}</p>
                            </div>
                            <div class="content">
                                <p>Giờ khởi hành: </p>
                                <p>${bookingData["time-to-go"]}</p>
                            </div>
                            <div class="content">
                                <p>Giờ đến: </p>
                                <p>${bookingData["time-arrive"]}</p>
                            </div>
                            <div class="content">
                                <p>Giá vé: </p>
                                <p>${bookingData["rank"]}</p>
                            </div>
                            <div class="btn">
                                <a href="#">Đặt ngay</a>
                            </div>
                        `)
                    }
                }
                $(".display .btn a").click(function () {
                    $(".booking-find-flight").hide();
                    $(".booking-fill-info").html(`
                         <span class="booking-item active">Thông tin hành khách</span>
                        <div class="booking-form active">
                            <div class="input">
                                <span>Họ và tên: </span>
                                <input class="input-field" type="text" placeholder="Nhập tên đầy đủ">
                            </div>
                            <div class="input">
                                <span>Số căn cước: </span>
                                <input class="input-field" type="text" placeholder="Số CCCD">
                            </div>
                            <div class="input">
                                <span>Ngày sinh: </span>
                                <input class="input-field" type="text" placeholder="Ngày/Tháng/Năm sinh">
                            </div>
                            <div class="input">
                                <span>Số điện thoại: </span>
                                <input class="input-field" type="text" placeholder="Số điện thoại">
                            </div>
                            <div class="input">
                                <span>Email: </span>
                                <input class="input-field" type="email" placeholder="Email">
                            </div>
                            <div class="btn">
                                <button>Xác nhận</button>
                            </div>
                        </div>
                        `);
                })
            });
        });
    }

    findFlight();
    selectFunction();
    calendarFunc();

    //Khi nhấn vào cách thức đặt vé bất kỳ thì form liên quan sẽ hiện ra
    $(".booking-item").click(function () {
        //Thay đổi nav
        $(".booking-item").removeClass("active");
        $(this).addClass("active");

        //Thay đổi content
        $(".booking-form").empty();
        if ($(this).attr('rel') == 'round-trip') {
            roundTrip();
        } else {
            oneWay();
        }
        findFlight();
        selectFunction();
        calendarFunc();
    });


});