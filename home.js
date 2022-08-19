$().ready(function(){

    $("#menu img").click(function(){
        var t = $(this).attr("src");
        var src, price;
        if(t=="images/spotlight/g01_thumbnail.jpg")
        {
            $("#show").css("backgroundPosition", "right");
            src="images/spotlight/g01.jpg";
            price = "FREE"
            $("#price").css("color", "gray");
        }
        else if(t=="images/spotlight/g02_thumbnail.jpg")
        {
            $("#show").css("backgroundPosition", "center");
            src="images/spotlight/g02.jpg"
            price = "1.139.000 VNĐ"
            $("#price").css("color", "white");
        }
        else if(t=="images/spotlight/g03_thumbnail.jpg")
        {
            $("#show").css("backgroundPosition", "left");
            src="images/spotlight/g03.jpg"
            price = "1.090.000 VNĐ"
            $("#price").css("color", "rgb(89,151,228)");
        }
     $("#show").css("backgroundImage", "url("+src+")");
     $("#price").text(price);
    });

    

    $("#roblox").click(function(){
        $("#info").css("height", "300px");
        $("#info div").css("display", "block");
        $("#info div:first-child").css("animation", "roblox 15s infinite");
        $("#info div h3").text("ROBLOX");
        $("#info div p").text("Roblox là một trò chơi điện tử nhiều người chơi và có một hệ thống để người dùng sáng tạo trò chơi cho riêng họ và nó dành cho độ tuổi trẻ em và thiếu niên, được phát triển bởi Roblox Corporation.");
        $("#info div a").attr("href", "https://www.roblox.com/home");
    });

    $("#Idv").click(function(){
        $("#info").css("height", "300px");
        $("#info div").css("display", "block");
        $("#info div:first-child").css("animation", "identity 15s infinite");
        $("#info div h3").text("IDENTITY V");
        $("#info div p").text("Identity V là một trò chơi điện tử thuộc thể loại kinh dị bất đối xứng được phát triển và xuất bản bởi NetEase Games.");
        $("#info div a").attr("href", "https://idv.163.com/");
    });

    $("#genshin").click(function(){
        $("#info").css("height", "300px");
        $("#info div").css("display", "block");
        $("#info div:first-child").css("animation", "genshin 15s infinite");
        $("#info div h3").text("GENSHIN IMPACT");
        $("#info div p").text("Genshin Impact là một trò chơi hành động nhập vai do miHoYo của Trung Quốc phát triển và được xuất bản lần đầu vào năm 2020. Genshin Impact là IP được miHoYo phát triển tiếp nối sau sản phẩm trước là series Honkai");
        $("#info div a").attr("href", "https://genshin.hoyoverse.com/");
    })

    t = 10;
    $("#right").click(function(){
        t=t-200;
        $("#first").css("marginLeft",t+"px");
    });

    $("#left").click(function(){
        t=t+200;
        if(t>0) t=10;
        $("#first").css("marginLeft",t+"px");
    });

    d = 10;
    $("#right1").click(function(){
        d=d-200;
        $("#first1").css("marginLeft",d+"px");
    });

    $("#left1").click(function(){
        d=d+200;
        if(d>0) d=10;
        $("#first1").css("marginLeft",d+"px");
    });
});