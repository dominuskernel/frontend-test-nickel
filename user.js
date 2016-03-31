class User{
  constructor(){
    this.senData();
  }

  senData(){
    $("form").submit((event) =>{
      event.preventDefault();
      var userAccount = {
        userName: $("#username").value,
        password: $("#password").value
      }
      $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:6767/user/login',
        data: userAccount,
        dataType: 'text',
        success: (data) =>{
          $(".answer").append(data);
        },
        error: (error) => {
          $(".answer").append(error);
        }
      })
    })
  }
}

$(document).ready(() => {
  var user = new User();
});
