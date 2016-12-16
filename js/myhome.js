/**
 * Created by Administrator on 2016/12/13.
 */
//调整字体
function font() {
    var w = document.documentElement.clientWidth;
    if (w > 640) {
        document.documentElement.style.fontSize = 640 / 10 + "px";
    } else {
        document.documentElement.style.fontSize = w / 10 + "px";
    }
}
font();
window.onresize = function () {
    font();
};
//整屏滚动
$(function () {
    var oBox = $(".box");
    var oUl = $(".slide_ul");
    var arrLi = $(".slide_li");
    var len = arrLi.length;
    var i = 1;
    var ks = 0;
    var js = 0;
    var cha = 0;
    var isTrue = true;

    function top() {
        isTrue = false;
        i++;
        one();
        two();
        three();
        four();
        five();
        six();
        oUl.css({"transition": 0.5 + "s ease", "transform": "translateY(" + (-i * 12.5) + "%)"})
        oUl.css({"webkitTransition": 0.5 + "s ease", "webkitTransform": "translateY(" + (-i * 12.5) + "%)"})
    }
    function bottom() {
        isTrue = false;
        i--;
        one();
        two();
        three();
        four();
        five();
        six();
        oUl.css({"transition": 0.5 + "s ease", "transform": "translateY(" + (-i * 12.5) + "%)"})
        oUl.css({"webkitTransition": 0.5 + "s ease", "webkitTransform": "translateY(" + (-i * 12.5) + "%)"})
    }

    //事件监听
    oUl[0].addEventListener("transitionend", function () {
        if (i > len - 2) {
            i = 1;
        } else if (i < 1) {
            i = len - 2;
        }
        oUl.css({"transition": "none", "transform": "translateY(" + (-i * 12.5) + "%)"})
        oUl.css({"webkitTransition": "none", "webkitTransform": "translateY(" + (-i * 12.5) + "%)"})
        isTrue = true;
    });
    //兼容谷歌
    oUl[0].addEventListener("webkitTransitionEnd", function () {
        if (i > len - 2) {
            i = 1;
        } else if (i < 1) {
            i = len - 2;
        }
        oUl.css({"transition": "none", "transform": "translateY(" + (-i * 12.5) + "%)"})
        oUl.css({"webkitTransition": "none", "webkitTransform": "translateY(" + (-i * 12.5) + "%)"})
        isTrue = true;
    });
    //手机滑动事件
    oBox[0].addEventListener("touchstart", function (ev) {
        ks = ev.touches[0].clientY;
    });
    oBox[0].addEventListener("touchmove", function (ev) {
        js = ev.touches[0].clientY;
    });
    window.addEventListener("touchend", function () {
        cha = js - ks;
        if (js != 0) {
            if (cha < -100 && isTrue == true) {
                top();
            } else if (cha > 100 && isTrue == true) {
                bottom();
            }
            js = 0;
        }
    });

    one();
    function one() {
        if (i == 1 || i == len-1) {
            setTimeout(function () {
                $(".img_bk").addClass("animated fadeInLeft");
            }, 100);
            setTimeout(function () {
                $(".touxiang").css({"opacity": 1}).addClass("animated zoomIn");
            }, 1200);
            setTimeout(function () {
                $(".p1").css({"opacity": 1}).addClass("animated fadeInDown");
            }, 1300);
            setTimeout(function () {
                $(".p2").css({"opacity": 1}).addClass("animated fadeInUp");
            }, 1500);
            setTimeout(function () {
                $(".line1").css({"opacity": 1}).addClass("animated fadeInLeft");
            }, 1800);
            setTimeout(function () {
                $(".line2").css({"opacity": 1}).addClass("animated fadeInRight");
            }, 1800);
        } else {
            $(".img_bk").removeClass("animated fadeInLeft");
            $(".touxiang").css({"opacity": 0}).removeClass("animated zoomIn");
            $(".p1").css({"opacity": 0}).removeClass("animated fadeInDown");
            $(".p2").css({"opacity": 0}).removeClass("animated fadeInUp");
            $(".line1").css({"opacity": 0}).removeClass("animated fadeInLeft");
            $(".line2").css({"opacity": 0}).removeClass("animated fadeInRight");
        }
    }
    function two() {
        if (i == 2){
            $(".two_img1").addClass("animated zoomIn");
            $(".two_li").each(function (i) {
                var a = $(this);
                setTimeout(function () {
                    a.css({"opacity":1}).addClass("animated zoomInLeft")
                },300*i);
            });
            setTimeout(function () {
                $(".two_p1").css({"opacity":1}).addClass("animated bounceInLeft");
            },2500);
        }else {
            $(".two_img1").removeClass("animated zoomIn");
            $(".two_li").css({"opacity":0}).removeClass("animated zoomInLeft");
            $(".two_p1").css({"opacity":0}).removeClass("animated bounceInLeft");
        }
    }
    function three() {
        if (i == 3){
            $(".three_li").each(function (i) {
                var a = $(this);
                setTimeout(function () {
                    a.css({"opacity":1}).addClass("animated rollIn");
                },300*i);
            });
            setTimeout(function () {
                $(".three_span").each(function (i) {
                    var a = $(this);
                    setTimeout(function () {
                        a.css({"opacity":1}).addClass("animated bounceInLeft");
                    },300*i);
                })
            },2800);
            setTimeout(function () {
                $(".two_p1").css({"opacity":1}).addClass("animated bounceIn");
            },2500);
        }else {
            $(".three_li").css({"opacity":0}).removeClass("animated rollIn");
            $(".two_p1").css({"opacity":0}).removeClass("animated bounceIn");
            $(".three_span").css({"opacity":0}).removeClass("animated bounceInLeft");
        }
    }
    function four() {
        if (i == 4){
            setTimeout(function () {
                $(".two_p1").css({"opacity":1}).addClass("animated flipInX");
            },3000);
            $(".four_img1").css({"opacity":1}).addClass("animated slideInLeft");
            $(".four_img2").each(function (i) {
                var a = $(this);
                setTimeout(function () {
                    a.css({"opacity":1}).addClass("animated bounceInDown");
                },500*i);
            });
            setTimeout(function () {
                $(".four_p").each(function (i) {
                    var a = $(this);
                    setTimeout(function () {
                        a.css({"opacity":1}).addClass("animated fadeInRight");
                    },500*i);
                });
            },1500);
        }else {
            $(".two_p1").css({"opacity":0}).removeClass("animated flipInX");
            $(".four_img1").css({"opacity":0}).removeClass("animated slideInLeft");
            $(".four_img2").css({"opacity":0}).removeClass("animated bounceInDown");
            $(".four_p").css({"opacity":0}).removeClass("animated fadeInRight");
        }
    }
    function five() {
        if (i == 5){
            $(".five_img1").addClass("active");
        }else {
            $(".five_img1").removeClass("active");
        }
    }
    function six() {
        if (i == 6 || i == 0){
            $(".two_p1").css({"opacity":1}).addClass("animated tada");
            setTimeout(function () {
                $(".six_img1").css({"opacity":1}).addClass("animated flipInY");
            },1000);
            setTimeout(function () {
                $(".six_p").each(function (i) {
                    var a = $(this);
                    setTimeout(function () {
                        a.css({"opacity":1}).addClass("animated bounceIn");
                    },200*i)
                });
            },2000);
        }else {
            $(".two_p1").css({"opacity":0}).removeClass("animated tada");
            $(".six_img1").css({"opacity":0}).removeClass("animated flipInY");
            $(".six_p").css({"opacity":0}).removeClass("animated bounceIn");
        }
    }
    //音乐
    $("#musicBox").click(function () {
        var a = $(this);
        if(a.attr("class")=="rotate"){
            a.removeClass("rotate");
            $("#music")[0].pause();
        }else if (a.attr("class")!=="rotate"){
            a.addClass("rotate");
            $("#music")[0].play();
        }
    });
});


