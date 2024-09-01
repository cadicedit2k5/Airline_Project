$(window).ready(function () {
    const findFligt = $(".manager-find-flight");
    const myFlight = $(".manager-my-flight");
    const flightCode = $("#flight-code");
    const firstName = $("#firstname");
    const lastName = $("#lastname");


    //Tải dữ liệu phù hợp với nội dung tìm kiếm
    fetch('../static/data/data.json').then(res => res.json()).then(data => {
        const flightDatas = data.flights;

        $(".manager-btn button").on('click', function () {
            const flightData = flightDatas.find(function (item) {
                return (item["flight-code"] === flightCode.val()) && (item["last-name"] === lastName.val()) && (item["first-name"] === firstName.val());
            });

            if (!flightData) {
                alert("Thông tin không chính xác!");
            }
            else {
                findFligt.find(".right").html(`
                    <div class="top">
                    <h2>Thông tin chuyến bay</h2>
                    <div class="top-container">
                        
                    </div>
                </div>
                <div class="container">
                    <h2>Thông tin hành khách</h2>
                    <div class="container-contents">
                        <div class="container-content">
                            <div class="btn">
                                <i class="fas fa-male"></i>
                                <h3>${flightData.passenger}: ${flightData["last-name"]} ${flightData["first-name"]}</h3>
                            </div>
                            <div class="infos">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="bottom-container">
                        <h2>Chi tiết giá vé</h2>
                        <div class="btn">
                            <h3>${flightData.passenger}: ${flightData["last-name"]} ${flightData["first-name"]}</h3>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                        <div class="bottom-contents">
                            
                        </div>
                    </div>
                </div>
                `);
                for (let i = 0; i < flightData.flight.length; i++) {
                    //Thêm nội dung cho Thông tin chuyến bay
                    $(".top-container").append(`
                        <div class="top-content">
                            <h3>${flightData.flight[i]["type"]}</h3>
                            <div class="ticket">
                                <div class="ticket-top">${flightData.flight[i]["day"]}</div>
                                <div class="ticket-container">
                                    <div>
                                        <h1>${flightData.flight[i]["from"]}</h1>
                                        <span>${flightData.flight[i]["time-to-go"]}</span>
                                    </div>
                                    <div class="mid">
                                        <span>1 giờ 55 phút</span>
                                        <div class="img">
                                            <img src="https://www.vietjetair.com/static/media/vietjet.36ac4568.svg">
                                        </div>
                                        <span>Bay thẳng</span>
                                    </div>
                                    <div>
                                        <h1>${flightData.flight[i]["to"]}</h1>
                                        <span>${flightData.flight[i]["time-arrive"]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `);
                    //Thêm nọi dung cho Thông tin hành khách
                    $(".container-content .infos").append(`
                        <div class="info">
                            <span>${flightData.flight[i]["from"]}</span>
                            <img src="https://www.vietjetair.com/static/media/vietjet.36ac4568.svg">
                            <span>${flightData.flight[i]["to"]}</span>
                            <p>Số ghế: ${flightData["flight-code"]}-${flightData.flight[i]["seat"]}</p>
                            <p>Hành lý ký gửi: Gói 20kg</p>
                            <p>Dịch vụ miễn phí: Hành lý xách tay 7Kg</p>
                        </div>
                        `);
                    //Thêm nội dung cho Chi tiết giá vé
                    $(".bottom-contents").append(`
                        <div class="bottom-content">
                            <div class="title">
                                <h4>Chi tiết ${flightData.flight[i]["type"]}</h4>
                                <div class="info">
                                    <span>${flightData.flight[i]["from"]}</span>
                                    <img src="https://www.vietjetair.com/static/media/vietjet.36ac4568.svg">
                                    <span>${flightData.flight[i]["to"]}</span>
                                </div>
                            </div>
                            <div class="sum-cost">
                                <h4>Giá vé</h4>
                                <h4>${flightData.flight[i].prices.rank + flightData.flight[i].prices.VAT} VND</h4>
                            </div>
                            <div class="cost">
                                <p>U1_ECO - Eco1</p>
                                <p>${flightData.flight[i].prices.rank}</p>
                            </div>
                            <div class="cost">
                                <p>Thuế VAT</p>
                                <p>${flightData.flight[i].prices.VAT}</p>
                            </div>
                            <div class="sum-cost">
                                <h4>Dịch vụ hành khách</h4>
                                <h4>${flightData.flight[i].prices.service + flightData.flight[i].prices.sercurity} VND</h4>
                            </div>
                             <div class="cost">
                                <p>Dịch vụ hệ thống</p>
                                <p>${flightData.flight[i].prices.service}</p>
                            </div>
                             <div class="cost">
                                <p>Dịch vụ an ninh</p>
                                <p>${flightData.flight[i].prices.sercurity}</p>
                            </div>
                            <div class="sum-cost">
                                <h4>Dịch vụ khác</h4>
                                <h4>${flightData.flight[i].prices.bag} VND</h4>
                            </div>
                             <div class="cost">
                                <p>Hành lý ký gửi</p>
                                <p>${flightData.flight[i].prices.bag}</p>
                            </div>
                            <div class="total-cost">
                                <p>Tổng tiền</p>
                                <p>${flightData.flight[i].prices.rank + flightData.flight[i].prices.VAT + flightData.flight[i].prices.service + flightData.flight[i].prices.sercurity + flightData.flight[i].prices.bag} VND</p>
                            </div>
                        </div>  
                        `)
                }
            }


            //Xử lý ẩn hiện chi tiết giá vé
            const priceBtn = $(".bottom-container .btn");
            const priceIcon = $(".bottom-container .btn i");
            const prices = $(".bottom-contents");

            priceBtn.on('click', function () {
                prices.toggleClass("active");
                priceIcon.toggleClass("active");
            });


        })
    });

    //Xử lý chuyển đổi qua lại giữa tìm kiếm và chuyến bay của bạn
    const managerNavItem = $(".manager-nav-item");
    managerNavItem.on('click', function () {
        managerNavItem.removeClass("active");
        $(this).addClass("active");
        if ($(this).attr('rel') === 'find') {
            myFlight.removeClass("active");
            findFligt.addClass("active");
        }
        if ($(this).attr('rel') === 'my') {
            findFligt.removeClass("active");
            myFlight.addClass("active");
        }
    });
})