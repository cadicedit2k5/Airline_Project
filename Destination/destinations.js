$(window).ready(function () {
    let destinations = $(".destinations-left");
    let lastestTours = $(".tours-list");
    let selectBtn = $(".select-btn");
    let selectOptions = $(".select-options");
    let selectOption = $(".select-option");
    let selectIcon = $(".select-btn i");
    let calendarBtn = $(".calendar-btn");
    let calendarViews = $(".calendar-views");
    let calendarHeader = $(".calendar-container span");
    let daysContainer = $(".calendar-days");
    let calendarIcons = $(".calendar-icons i");

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();


    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    //Sự kiện khi nhấn vào select input
    selectBtn.on('click', function () {
        //Giới hạn phạm vi phần tử được chọn
        let options = $(this).find(".select-options");
        let icon = $(this).find("i");

        options.toggleClass("down");
        icon.toggleClass("down");
    });

    //Thay đổi nội dung khi nhấn vào option bất kỳ
    selectOption.on("click", function () {
        //Lấy từ option -> options -> btn gần nhất xong tìm span ngay trong đó
        $(this).closest(".select-options").closest(".select-btn").find("span").text($(this).text());
    });

    //Hiển thị calendar khi nhấn vào calendar button
    calendarViews.on("click", function () {
        $(this).closest(".calendar-btn").find(".calendar-container").toggleClass("down");
    });

    //Tạo dynamic calendar
    function renderCalendar() {
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

    renderCalendar();

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

        renderCalendar();
    });


    //Hàm thực thi khi nhấn vào pagination
    function paginationClicked(data, number) {
        $(".destinations-pagination ul li").on('click', function () {
            //Khi nhấn vào prev
            if ($(this).is(":first-child")) {
                if (number <= 2) {
                    number = 2;
                }
                else {
                    number = number - 1;
                }
                console.log(number);
                displayItem(data, number - 1);
            }
            //Khi nhấn vào next
            else if ($(this).is(":nth-child(6)")) {
                console.log(number);
                if (number > 5) {
                    number = 5;
                } else {
                    number = number + 1;
                }
                displayItem(data, number - 1);
            } else {
                displayItem(data, Number($(this).text()));
            }
        });
    }

    //Hàm thay đổi cấu trúc 
    function displayItem(data, number) {
        let i = (number - 1) * 4;
        //Xóa hết cấu trúc cũ
        destinations.empty();
        //Cho hiển thị 4 nội dung
        while (i < number * 4) {
            if (data[i]) {
                destinations.append(`
                    <a href="destination.html?id=${data[i].id}" class="destinations-content">
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
    
                    <h3 class="content-title">${data[i].place} | from ${data[i].price}</h3>
                    <p class="content-discr">6 excursions to the main cities of the country, admire the beautiful autumn
                        gardens</p>
                    <div class="content-days">
                        <i class="fa-regular fa-clock"></i>
                        <span>7 days</span>
                    </div>
                </a>
                `);
                $(`.destinations-content:nth-child(${data[i].id - 4 * (number - 1)})`).css({
                    "background": `url(../${data[i].banner})`
                })
                i++;
            } else {
                //Xử lý tạo nội dung trống (chưa làm)
                break;
            }
        }
        //Thêm pagination vào
        destinations.append(`
            <div class="destinations-pagination">
                <ul>
                    <li class="prev"><i class="fa-solid fa-arrow-left"></i></li>
                    <li class="current">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li class="next"><i class="fa-solid fa-arrow-right"></i></li>
                </ul>
            </div>
            `);

        //Xử lý cho nút hiện tại
        $(".destinations-pagination ul li").removeClass("current");
        setTimeout(function () {
            $(`.destinations-pagination ul li:nth-child(${Number(number) + 1})`).addClass("current");
        }, 100);
        //Gọi lại hàm để thực thi sau mỗi lần thay đổi cấu trúc
        paginationClicked(data, number + 1);
    }

    function displayTour(data) {
        let arr = [];
        let n = data.length;

        //Xóa hết nội dung lastest tour hiện tại
        lastestTours.empty();

        //Khởi tạo mạng để lưu trạng thái các phần tử
        for (let i = 0; i < n - 1; i++) {
            arr[i] = 0;
        }

        for (let i = 0; i < 4; i++) {
            let randomOrder = Math.floor(Math.random() * (n - 1));
            if (arr[randomOrder] === 0) {
                lastestTours.append(`
                   <a href="destination.html?id=${data[randomOrder].id}" class="tours-item">
                            <div class="tours-img">
                                <img src="../${data[randomOrder]["scene-img"]}">
                            </div>
                            <div class="tours-info">
                                <div class="title">${data[randomOrder]["place"]} - ${data[randomOrder]["country"]}</div>
                                <div class="cost">
                                    <b>${data[randomOrder]["price"]}</b>
                                    <span class="old-cost">${data[randomOrder]["old-price"]}</span>
                                </div>
                                <div class="days">
                                    <i class="fa-regular fa-clock"></i>
                                    <span>7 days</span>
                                </div>
                            </div>
                        </a> 
                    `);
                arr[randomOrder] = 1;
            } else {
                i--;
                continue;
            }
        }

    }

    //Đọc dữ liệu từ data.json ra
    fetch("../static/data/data.json").then(res => res.json()).then(jsonData => {
        data = jsonData.destinations;
        //Hiển thị trang đầu tiên trước
        displayItem(data, 1);

        //Xử lý cho bên lastest tour
        displayTour(data);
    });
});