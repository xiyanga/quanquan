$(function(){
       //导航栏开始
    $(".header").load("header.html");
    $(".bottom").load("bottom.html")
       //导航栏结束
       // banner开始
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
    (function(){
        $(".btn").mouseenter(function(){
            $(".btn_zhong").addClass("animated bounceInDown");
            $("#ban_btnl").addClass("animated fadeInRight");
            $("#ban_btnr").addClass("animated fadeInLeft");
        });
        $(".btn").mouseleave(function(){
            $(".btn_zhong").removeClass("animated bounceInDown");
            $("#ban_btnl").removeClass("animated fadeInRight");
            $("#ban_btnr").removeClass("animated fadeInLeft");
        });
        $(".hh").mouseenter(function(){
            $(this).siblings(".hh").addClass("mohu");
        });
        $(".hh").mouseleave(function(){
            $(this).siblings(".hh").removeClass("mohu");
        });
        var colorBtn=[["rgba(86,137,31,.5)","rgb(64,75,104)"],["rgba(112,37,131,.5)","#8C241D"],["rgba(132,128,133,.5)","#5AAA6F"]];
        $(".btn_zhong").click(function(){
            var oIndex=$(this).index();
            index=oIndex;
            $(".btn_bian").css({background:colorBtn[oIndex][1]});
            $(".banner_con").eq(oIndex).css("display","block").siblings(".banner_con").css("display","none");
            $(".btn_zhong").eq(oIndex).find(".btn_bian").animate({left:0},function(){
                $(this).parent().siblings(".btn_zhong").find(".btn_bian").animate({left:-50});
            });
        });
        $("#ban_btnl").click(function(){
            next();
        });
        $("#ban_btnr").click(function(){
            previous();
        });
        var index=0;
        var banerImg=$(".banner_con").size()-1;
        //颜色二维数组
        function next(){
            index--;
            if(index==-1){
                index=banerImg;
            };
            //$(".btn").css({background:colorBtn[index][0]});
            $(".btn_bian").css({background:colorBtn[index][1]});
            $(".banner_con").eq(index).find(".zf").addClass("animated bounceInLeft").siblings(".banner_con").removeClass("animated bounceInLeft");
            $(".banner_con").eq(index).find(".yf").addClass("animated bounceInRight").siblings(".banner_con").removeClass("animated bounceInRight");
            $(".btn_zhong").eq(index).find(".btn_bian").animate({left:0},function(){
                $(this).parent().siblings(".btn_zhong").find(".btn_bian").animate({left:-50});
            });
            $(".banner_con").eq(index).css("display","block").siblings(".banner_con").css("display","none")

        };
        function  previous(){
            index++;
            if(index==banerImg+1){
                index=0;
            };
            //$(".btn").css({background:colorBtn[index][0]});
            $(".btn_bian").css({background:colorBtn[index][1]});

            $(".banner_con").eq(index).find(".zf").addClass("animated bounceInLeft").siblings(".banner_con").removeClass("animated bounceInLeft");
            $(".banner_con").eq(index).find(".yf").addClass("animated bounceInRight").siblings(".banner_con").removeClass("animated bounceInRight");
            $(".btn_zhong").eq(index).find(".btn_bian").animate({left:0},function(){
                $(this).parent().siblings(".btn_zhong").find(".btn_bian").animate({left:-50});
            });
            $(".banner_con").eq(index).css("display","block").siblings(".banner_con").css("display","none")

        };
    })();
    //banner结束
    //今日关注开始
    (function(){
        $(".today_ul").find("li").mouseenter(function(){
            $(this).addClass("animated flash");
            $(this).css({background: "rgb(35,154,248)",color: "#fff"}).siblings().css({background:"rgb(249,250,252)",color:""});
            var index = $(this).index();
            var top = index*388;
            $(".lb_con").stop().animate({top:-top});
        });
        $(".today_ul").find("li").mouseleave(function(){
            $(this).removeClass("animated flash");

        });
    })();
    //今日关注结束
    //我的空间开始
    (function(){
        var top =$(".space_con").offset().top-300;//1320
        var top1=$(".lift_con").offset().top-500;
        var zhifu=$(".lb_f").offset().top-500;
        $(window).scroll(function(){
            var scrollTop=$(window).scrollTop();
            if(scrollTop>450){
                $(".fanhuitop").fadeIn();
            }
            if(scrollTop>=top){
                $(".space_one").addClass("space_dong");
            }else {
                $(".space_one").removeClass("space_dong");
            };
            if(scrollTop>=top1){
                $(".kblogo").addClass(" animated bounceInLeft");
                $(".elm_logo").addClass("animated bounceInRight");
                $(".search").addClass(" animated bounceInDown");
            }else {
                $(".kblogo").removeClass(" animated bounceInLeft");
                $(".elm_logo").removeClass("animated bounceInRight");
                $(".search").removeClass(" animated bounceInDown");
            }
            if(scrollTop>=zhifu){
                $(".zhifuba").stop().animate({marginLeft:0},1000,function(){
                    $(".lb_ff").fadeIn(1000);
                });
            }else {
                $(".zhifuba").stop().animate({marginLeft:900},0,function(){
                    $(".lb_ff").fadeOut(0);
                });
            };
        });
        $(".space_one").mouseenter(function(){
            var index=$(this).index();
           $(".space_nei").eq(index).stop().animate({height:258}).addClass("animated wobble");
        });
        $(".space_one").mouseleave(function(){
            var index=$(this).index();
            $(".space_nei").eq(index).stop().animate({height:50}).removeClass("animated wobble");
        });
    })();
    //我的空间结束

    //我的生活开始
    (function(){
        var widthO=$(document).width();
        $(".ms_div").find("button").click(function(){
            $(".animat_q").css({display:"block"});
            $(".zdd").delay(1000).fadeIn(0).stop().animate({left:widthO},5000,function(){
            $(".animat_q").css({display:"none"});
            $(".zdd").css({left:100});
            });
        });
        $(".lb_ff").mouseenter(function(){
        $(this).css({background:'rgba(255,255,255,.1)'});
        $(".zhifuba").addClass("mohu");
        });
        $(".lb_ff").mouseleave(function(){
        $(this).css({background:'rgba(255,255,255,.9)'});
        $(".zhifuba").removeClass("mohu");
        });
    })();
    //我的生活结束
    (function(){
        $(".top").click(function () {
            var speed=100;//滑动的速度
            $('body,html').animate({ scrollTop: 0 }, 200);
            $(".fanhuitop").animate({bottom:2000,opacity:0},200,'easeIn',function () {
            $(".fanhuitop").css({bottom:200,opacity:1});
            $(this).fadeOut(0);
                return false;
            });

        });
    })();
    //登陆的名称

});

