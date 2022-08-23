$().ready(function(){

    $("#menu img").click(function(){
        var t = $(this).attr("src");
        var src, price;
        if(t=="./images/spotlight/g01_thumbnail.jpg")
        {
            $("#show").css("backgroundPosition", "right");
            src="./images/spotlight/g01.jpg";
            price = "FREE"
            $("#price").css("color", "gray");
        }
        else if(t=="./images/spotlight/g02_thumbnail.jpg")
        {
            $("#show").css("backgroundPosition", "center");
            src="./images/spotlight/g02.jpg"
            price = "1.139.000 VNĐ"
            $("#price").css("color", "white");
            $("#button").attr("href","./spiderman.html");
        }
        else if(t=="./images/spotlight/g03_thumbnail.jpg")
        {
            $("#show").css("backgroundPosition", "left");
            src="./images/spotlight/g03.jpg"
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
        $("#paid a:first-child").css("marginLeft",t+"px");
    });

    $("#left").click(function(){
        t=t+200;
        if(t>0) t=10;
        $("#paid a:first-child").css("marginLeft",t+"px");
    });

    d = 10;
    $("#right1").click(function(){
        d=d-200;
        $("#popular a:first-child").css("marginLeft",d+"px");
    });

    $("#left1").click(function(){
        d=d+200;
        if(d>0) d=10;
        $("#popular a:first-child").css("marginLeft",d+"px");
    });

    //kiem tra trang thai login
    var login = JSON.parse(localStorage.getItem("login"));
    if(login.active == "yes")
    {
        $("#login a").text(login.name);
        $("#login a").attr("href","./home.html  ")
        $("#login a").mouseover(function(){
            $(this).text("Đăng xuất")
            $("#login").css("backgroundColor", "red")
        });
        $("#login a").mouseout(function(){
            $(this).text(login.name)
            $("#login").css("backgroundColor", "rgba(255, 255, 255, 0)")
        });
        $("#login a").click(function(){
            var log ={
                "active": "no",
                "name": "null"
            }
            localStorage.setItem("login",JSON.stringify(log));
        })
        //trong cac muc game an hien so tien của user
        $(".afford p:nth-of-type(2)").css("display","block")
    }

    //trang cart
    if(login.active == "yes")
    $(".container>a:nth-of-type(2)").attr("href", "./cart.html")
    else
    $(".container>a:nth-of-type(2)").attr("href", "./login.html")

//code search
    $(".rec").hide();
    $(document).click(e => {
        e.target == $("#search")[0] ? $(".rec").show() : $(".rec").hide()
    })
});
//search, filter
function search(){
    var input = document.getElementById("search");
    var key = input.value.toUpperCase();
    var recommend = document.getElementsByClassName("rec")[0];
    var game = recommend.getElementsByTagName('a');
    var text, p, title;
    for(var i =0; i<game.length; i++)
    {
        p = game[i].getElementsByTagName("div")[0];
        title = p.getElementsByTagName('p')[0];
        text = title.innerHTML;
        if(text.toUpperCase().indexOf(key) > -1)
            game[i].style.display = "block";
        if(key=="" || text.toUpperCase().indexOf(key) == -1)
            game[i].style.display = "none";
    }
}