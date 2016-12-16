/**
 * Created by Administrator on 2016/10/17 0017.
 */
$(function(){
    (function(){
        var widthNav=$(window).width();
        $(".nav_con").width(widthNav);//给隐藏的盒子设置宽度；

        $(".nav_bax").hover(function(){
            var left =  $(this).offset().left;
            $(this).find(".nav_con").css({left:-left}).stop().slideDown(600,"elasticOut");
        },function(){
            $(this).find(".nav_con").stop().slideUp(0);
        });
        $(".nav_1").mouseenter(function(){
            $(".banner_con").addClass("mohu animated pulse");
        });
        $(".nav_1").mouseleave(function(){
            $(".banner_con").removeClass("mohu animated pulse");
        });

        //nav轮播图
        var index=0;
        function lunba(oimg,xd){
            var size = oimg.size();
            index++;
            if(index==size){
                index=0;
            }
            oimg.eq(index).css({display:"block"}).siblings(xd).css({display:"none"});
        };
        function shang(oimg,xd){
            var size = oimg.size();
            index--;
            if(index==-1){
                index=size-1;
            }
            oimg.eq(index).css({display:"block"}).siblings(xd).css({display:"none"});
        };

        $(".nav_lun").mouseenter(function(){
            clearInterval(gg);
            $(".nav_btnl").addClass("animated fadeInRight");
            $(".nav_btnr").addClass("animated fadeInLeft");
            $(".nav_btn").stop().animate({opacity:.5},300);
        });
        $(".nav_lun").mouseleave(function(){

            $(".nav_btnl").removeClass("animated fadeInRight");
            $(".nav_btnr").removeClass("animated fadeInLeft");
            $(".nav_btn").stop().animate({opacity:1},300);
        });
        $(".bbtt1").click(function(){

            shang($(".bbtt11"),".bbtt11");
        });
        $(".bbtt1r").click(function(){
            lunba($(".bbtt11"),".bbtt11");
        });
        $(".bbtt2").click(function(){
            shang($(".bbtt22"),".bbtt22");
        });
        $(".bbtt2r").click(function(){
            lunba($(".bbtt22"),".bbtt22");
        });
        $(".bbtt3").click(function(){
            shang($(".bbtt33"),".bbtt33");
        });
        $(".bbtt3r").click(function(){
            lunba($(".bbtt33"),".bbtt33");
        });
        //li移过动画
        $(".nav_p").mouseenter(function(){
            $(this).stop().animate({paddingLeft:30})
        })
        $(".nav_p").mouseleave(function(){
            $(this).stop().animate({paddingLeft:20})
        })
        $(".nav_yule").mouseenter(function(){
            $(".yl").addClass("fangunba").delay(300).fadeOut(0).siblings(".yr").fadeIn(0).addClass("huilaiba");
        });
        $(".nav_yule").mouseleave(function(){
            $(".yl").removeClass("fangunba").fadeIn(0).siblings(".yr").removeClass("huilaiba").fadeOut(0);
        });
        //时间查询
        var time=new Date();
        var year=time.getFullYear();//年份
        var yue=time.getMonth()+1;//月份
        var xingqo=time.getDay();//星期
        var day=time.getDate();//号
        var hour=time.getHours();
        var min=time.getMinutes();
        $(".nav_time").find("span").eq(0).html(year+"年"+yue+"月"+day+"日");
        $(".nav_time").find("p").html("星期"+xingqo);
        $(".nav_time").find("span").eq(1).html("现在是:"+hour+":"+min);
        $(".tq_time .nian").html(year+"年");
        $(".tq_time .yue").html(yue+"月");
        $(".tq_time .ri").html(day+"日");


    })();
    (function(){
        var name=$.cookie('the_cookie');
        if(!name==""){
            $("#land span").html("您好:"+name);
        }else {
            $("#land span").html("您好，请登录");
        }

    })();
});