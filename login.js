
$().ready(function(){
    //ẨN HIỆN HAI KHUNG ĐĂNG NHẬP VÀ ĐĂNG KÝ
    $("#reg").hide();
    $("#Dk").click(function(){
        $("#in").hide(2000);
        $("#reg").show(2000);
    });

    $("#Dn").click(function(){
        $("#reg").hide(2000);
        $("#in").show(2000);
    });

    //LƯU SỐ NGƯỜI ĐĂNG KÍ
    var index = localStorage.getItem("index")
    if(index == null)
    localStorage.setItem("index","1");
    else
    localStorage.setItem("index",index);


    //ĐĂNG NHẬP
    $("#in button").click(function(){
        var text = "";
        var user = $("#username").val();
        var pass = $("#pass").val()

        
        if(user == "" || pass=="" || check(user)==0 || check(user).password!=pass){
            if(user == "")
            text += "Tên đăng nhập chưa nhập <br>"
            else if(check(user)==0)
            text +="Không tìm thấy tài khoản<br>"
            if(pass == "")
            text += " Mật khẩu chưa nhập <br>"
            else if(check(user).password != pass)
            text+= "Mật khẩu không đúng!<br>";

        }
        else{
            var login = {
                "active": "yes",
                "name": user
            }
            localStorage.setItem("login",JSON.stringify(login));
            $("#Goto").attr("href","./home.html")
            text = "";}
        $(".wrong").html(text);
    });

    //ĐĂNG KÍ
    $("#reg button").click(function(){
        var text = "";
        var user = $("#usernameR").val();
        var pass = $("#passR").val();
        var confirm = $("#confirmR").val();
        
        if(check(user)!=0 ||user == "" || pass=="" || confirm == "" || confirm!=pass){
            if(user == "")
            text += "Tên đăng nhập chưa nhập <br>"
            else if(check(user)!=0)
            text += "Tên đăng nhập đã tồn tại"
            if(pass == "")
            text += "Mật khẩu chưa nhập <br>"
            if(confirm =="" || confirm != pass)
            text += "Không thể xác nhận mật khẩu"
        }
        else {
            var i=parseInt(localStorage.getItem("index"));
            var data = {
                "name": user,
                "password": pass
            };
            localStorage.setItem("user"+i,JSON.stringify(data));
            i=i+1;
            localStorage.setItem("index",i);
            $("#GotoR").attr("href", "./home.html")
            text = "";
            var login = {
                "active": "yes",
                "name": user
            }
            localStorage.setItem("login",JSON.stringify(login));
    }
        $(".wrong").html(text);
    });
    
    //KIỂM TRA USERNAME TRONG LOCALPLACE
    function check(username){
        var i=parseInt(localStorage.getItem("index"));
        var A = new Array;
        A[0] = "null";
        for(var j = 1; j<i; j++)
        {
            A[j]=localStorage.getItem("user"+j);
        }  

        for(var j = 1; j<A.length; j++)
        {
            var temp = JSON.parse(A[j]);
            if(temp.name == username)
            return temp;
        }

        return 0;
    }
});