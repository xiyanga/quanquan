/**
 * Created by Administrator on 2016/10/17 0017.
 */
var GLOBAL=GLOBAL||{};
$(function(){

   //加载头部和底部
    (function(){
        $(".header").load("header.html");
        $(".bottom").load("bottom.html")
        //获取时间
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
    })();
    //加载更多
    (function(){
        function diao(){
            if(!GLOBAL.ii){
                $(".list_con").html("");
                GLOBAL.ii=0;
            }
            var newsData=news["newsData0"+GLOBAL.ii];
            var list=newsData.data.list;
            for(var i=0;i<list.length;i++){
                var itemHtml = $(".bbb").html()
                    .replace("$index$",list[i].sysId)
                    .replace("$newsimg$",list[i].coverImg)
                    .replace("$newstitle$",list[i].describe)
                    .replace("$newstxt$",list[i].txt)
                $(".list_con").append(itemHtml);
            }
            GLOBAL.ii++;
            GLOBAL.yeshu=Math.ceil(newsData.data.count/newsData.data.pageSize);


        };

        diao();

        $("#button").click(function(){
            if(GLOBAL.ii<GLOBAL.yeshu){
                diao();
            }else {
                $("#button").css({color:"#ccc"});
                $("#button").html("么有了");
            }
        });

    })();
    (function(){
        var name=$.cookie('cookieName');
        if(!name==""){
            $("#land span").html("您好:"+name);
        }else {
            $("#land span").html("您好，请登录");
        }

    })();
    (function(){
        $(".list_con").delegate(".news_text","click",function(){
            window.open("newstxt.html?type=newslist"+$(this).attr("indexs"));
        })
    })();
});