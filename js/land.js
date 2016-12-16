/**
 * Created by Administrator on 2016/10/18 0018.
 */
$(function(){
        var height=$(window).height();
        $(".content").css({height:height});
    //登陆验证
        var user=$("#user").attr("value");
        var pass=$("#pass").attr("value");
        $(".zhuce").click(function(){
                window.open("register.html")
        });
});
