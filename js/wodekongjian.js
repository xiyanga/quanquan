/**
 * Created by Administrator on 2016/10/13 0013.
 */
$(function(){
    //导航事件开始
    (function(){
        $(".header_ul li").click(function(){
            $(this).addClass("active").siblings("li").removeClass("active");
        });
    })();
    //导航事件结束
    var heightOdiv=$(window).height()-43;//获取浏览器高度，减去了nav高度；
    $(".plate3_con,.yh,.wc").height(heightOdiv);

    (function(){
        var widghtOdiv=$(window).width();
        $(".plate2_one").width(widghtOdiv);
        $(".content,.plate1,.plate2,.plate3,.plate4,.plate5").css({height:heightOdiv});
        $(".hao").addClass("ziactive").fadeIn(0,function(){
            $(".hao1").delay(1000).addClass("ziactive").fadeIn(200,function(){
                $(".xue").delay(1000).addClass("ziactive").fadeIn(200,function(){
                    $(".xi").delay(1000).addClass("ziactive").fadeIn(200,function(){
                        $(".dou").delay(1000).addClass("ziactive").fadeIn(200,function(){
                            $(".tian").delay(1000).addClass("ziactive").fadeIn(200,function(){
                                $(".tian1").delay(1000).addClass("ziactive").fadeIn(200,function(){
                                    $(".xiang").delay(1000).addClass("ziactive").fadeIn(200,function(){
                                        $(".shang").delay(1000).addClass("ziactive").fadeIn(200,function(){
                                            $(".dong1,.dong2").css({display:"block"}).addClass(" animated fadeInUp");
                                            //$(".dong2").delay().css({display:"block"}).addClass(" animated fadeInUp");

                                        })
                                    })
                                })

                            })
                        })
                    })
                })
            })
        })
    })();
    (function(){
        $(".one_top").hover(function(){
           var index=$(this).index();
            $(this).css({background: "rgb(35, 154, 248)"}).addClass("animated flash").siblings().css({background:"rgb(230,210,132)"}).removeClass("animated  flash");
            $(".one_gg").stop().animate({top:-index*360});
        });
        var i=0;
        $(".plate_right ").click(function(){
            next();
        });
        $(".plate_left ").click(function(){
            shang();
        });
        var widghtOdiv=$(window).width();

        function next(){
            $(".plate_left").removeClass("animated flash");
                var size=$(".plate2_one").size();
                i--;
                if(i==-size){
                    $(".plate_left").addClass("animated flash");
                    i=-size+1;
                }else {
                    $(".plate2_c").animate({left:i*widghtOdiv});
                }
            }
            function shang(){
                $(".plate_right").removeClass("animated flash");

                var size=$(".plate2_one").size();
                i++;
                if(i==1){
                    $(".plate_right").addClass("animated flash");
                    i=0;
                }else {
                    $(".plate2_c").animate({left:i*widghtOdiv});
                }
            }
    })();

    //地图加载
    (function(){
        var map = new BMap.Map("map");            // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        var local = new BMap.LocalSearch(map, {
            renderOptions:{map: map, autoViewport:true}
        });
        local.searchNearby("北京", "北京圈圈乐网络有限公司");// 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

        //创建和初始化地图函数：
        function initMap() {
            addMapControl();//向地图添加控件
        }
        //地图控件添加函数：
        function addMapControl() {
            //向地图中添加缩放控件
            var ctrl_nav = new BMap.NavigationControl({
                anchor : BMAP_ANCHOR_TOP_LEFT,
                type : BMAP_NAVIGATION_CONTROL_LARGE
            });
            map.addControl(ctrl_nav);
            //向地图中添加缩略图控件
            var ctrl_ove = new BMap.OverviewMapControl({
                anchor : BMAP_ANCHOR_BOTTOM_RIGHT,
                isOpen : 1
            });
            map.addControl(ctrl_ove);
            //向地图中添加比例尺控件
            var ctrl_sca = new BMap.ScaleControl({
                anchor : BMAP_ANCHOR_BOTTOM_LEFT
            });
            map.addControl(ctrl_sca);
        }


    })();
    (function(){
        var id=setInterval(move,3000);
        move();
        function move(){
            var size=$(".pic").size();
            for(var i=0;i<size;i++){
                var leftgg=Math.random()*900; //left随机数
                var topgg=Math.random()*300; //left随机数
                $(".pic").eq(i).animate({top:topgg,left:leftgg},3000);

            }
        }
        $(".pic").mouseenter(function(){
            var index=$(this).index();
            $(".pic").eq(index).css({display:"none"}).siblings(".pic").css({display:"block"});
            $(".king").eq(index).fadeIn(0).siblings(".king").fadeOut(0);
            $(".plate5_nav li").eq(index).addClass("active").siblings().removeClass("active");
        });
        $(".king").mouseleave(function(){
            $(this).fadeOut(0);
            $(".pic").css({display:"block"});
            $(".plate5_nav li").removeClass("active");

        });

        $(".plate5_nav li").hover(function(){
            var indexImg=$(this).index();
            $(".pic").eq(indexImg).css({display:"none"}).siblings(".pic").css({display:"block"});
            $(".king").eq(indexImg).fadeIn().siblings(".king").fadeOut(0);

        },function(){
            $(".king").fadeOut(0);
            $(".pic").css({display:"block"});

        })

    })();
    //滚屏
    (function(){
        var fatru=false;
        var scrollFunc=function (event) {
            // IE和Chrome
            event=event||window.event;
            if(event.wheelDelta){
                if(event.wheelDelta>0){
                    topGun();
                }
                else if(event.wheelDelta<0){
                    bottomGun();
                }}
            else if(event.detail){
                if(event.detail>0){
                    bottomGun();
                }
                else if(event.detail<0){
                    topGun();
                }
            }
        }
        if(document.addEventListener){document.addEventListener("DOMMouseScroll",scrollFunc,false);}
        window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome
        var index=0;
        function topGun(){
            if(!fatru){
                fatru=true;
                index--;
                if(index<0){
                    index=0
                }
                if(index==2){
                    $(".jsg").stop().animate({marginLeft:0},2000);
                    $(".skj").stop().animate({marginRight:0},2000);
                }  else {
                    $(".jsg").stop().animate({marginLeft:150},2000);
                    $(".skj").stop().animate({marginRight:150},2000);
                }
                    $(".banner").animate({top:index*-heightOdiv},function(){
                        fatru=false;
                    });
                var index1=index-1;
                if(index1==-1){
                    index1=0
                }
                $(".header_ul li").eq().addClass("active").siblings("li").removeClass("active");


            }


        }
        function bottomGun(){
            if(!fatru){
                fatru=true;
                index++;
                if(index>4){
                    index=4
                }
                if(index==2){
                    $(".jsg").stop().animate({marginLeft:0},2000);
                    $(".skj").stop().animate({marginRight:0},2000);
                }
                else {
                    $(".jsg").stop().animate({marginLeft:150},2000);
                    $(".skj").stop().animate({marginRight:150},2000);
                }
                    $(".banner").animate({top:index*-heightOdiv},function(){
                        fatru=false;
                    });
                $(".header_ul li").eq(index-1).addClass("active").siblings("li").removeClass("active");


            }


        }

    })();
    //、、导航点击滚动
    (function(){
        $(".header_ul li").click(function(){

            var index=$(this).index()+1;
            var size=$(".header_ul li").size();

            if(index==2){
                $(".jsg").stop().animate({marginLeft:0},2000);
                $(".skj").stop().animate({marginRight:0},2000);
            }  else {
                $(".jsg").stop().animate({marginLeft:150},2000);
                $(".skj").stop().animate({marginRight:150},2000);
            }
            if(index==size){
                //alert(1)
            }else {
                $(".banner").animate({top:index*-heightOdiv})
            }


        });
    })();
});