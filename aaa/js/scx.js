       	 $("#email").blur(
        	function(){
        		var Email  = $("#email").val();
        		if (Email === "" ){
                        alert("邮箱不能为空");
                        return Email;
                    }
            	$.post('http://manager.zsm-ubuntu.dev/user-exists',
                {email: email.value},
                function (result) {
                    if (result.code === true){
                        alert("用户已存在，可以登录。");
                    } else {
                        /*alert("对不起，暂无该用户邮箱");*/
                    }
                }, 'json')
        	}
        );
       	$(".btn_login").click(
       	  function(){
       		var Email = $("#email").val();
            var Password = $("#password").val();
            if (Password === ""){
                alert("邮箱和密码不能为空");
                return Password;
            }
            $.post('http://manager.zsm-ubuntu.dev/login',
                {email:email.value,password:password.value},
                function (result) {
                if (result.code === false){
                    alert("密码错误");
                    Password = "";
                }else {
                    alert("登录成功");
                    window.location.assign('http://manager.zsm-ubuntu.dev/');
                }
            },'json')
       		 }
       	);
       	$(".log_rega").click(
       		function() {
            window.location.href="ajax2.html";
        }
       	);