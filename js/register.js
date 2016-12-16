/**
 * Created by Administrator on 2016/10/19 0019.
 */
/**
 * Created by Administrator on 2016/10/18 0018.
 */
$(function(){
    var height=$(window).height();
    $(".register").css({height:height});
    //登陆验证
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;//手机号验证
    var email=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;//手机号验证
    var pssword=/^[a-zA-Z]\w{5,17}$/;//密码验证以字母开头，长度在6~18之间，只能包含字母、数字和下划线
    var user =/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;//字母开头，允许5-16字节，允许字母数字下划线

    $("#btn").click(function(){
        if(!email.test($("#email").val()))
        {
            alert('请输入有效的邮箱！');

        }
       if(!myreg.test($("#number").val()))
        {
            alert('请输入有效的手机号码！');

        }
      if(!user.test($("#name").val()))
        {
            alert('请输入有效用户名！');
            return false;
        }
       if(!pssword.test($("#password").val()))
        {
            alert('请输入有效密码！');

        }
        else{
            alert("注册成功");
           window.open("land.html")
        }





    });

});
