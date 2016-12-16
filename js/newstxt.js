/**
 * Created by Administrator on 2016/10/17 0017.
 */
$(function(){
    //加载头部和底部
    $(".header").load("header.html");
    $(".bottom").load("bottom.html")

    var time=new Date();
    var year=time.getFullYear();//年份
    var yue=time.getMonth()+1;//月份
    var xingqo=time.getDay();//星期

    var day=time.getDate();//号
    var hour=time.getHours();
    var min=time.getMinutes();
    var week=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    $("#year").html(year+"年"+yue+"月"+day+"日");
    $("#week").html(week[xingqo]);
    (function(){
        var jsonArry=newstxtData[getUrlParams("type")];

        if(getUrlParams("type")){
            $(".txt h3").text(jsonArry.data.title);
            $(".txt>.zhengwen>#imgi").attr("src",jsonArry.data.img);
            $(".txt>.zhengwen>p").text(jsonArry.data.txt);
            $(".txt>.new_hr>#word").text(jsonArry.data.name);
        }
        function getUrlParams(name){
            var reg=new RegExp("(^|&)"+name+"=([^&]*)($|$)");
            var r=window.location.search.substr(1).match(reg);
            console.log(r);
            if(r!=null){
                return r[2];
            }else {
                return "";
            }
        };
    })();
    (function(){
        var name=$.cookie('cookieName');
        if(!name==""){
            $("#land span").html("您好:"+name);
        }else {
            $("#land span").html("您好，请登录");
        }

    })();
});