$(function() {
  $(".form-control").on("keyup", function() {
    let input = $(".form-control").val();
    console.log(input);
    $.ajax({
      type: "GET",
      url: "/",
      data: { keyword: input },
      dataType: "json"
    })
      .done(function(machines) {
        $("ul.list-group").empty();
  
        if (machines.length !== 0) {
          machines.forEach(function(machine) {
            addmachine(machine);
          });
        } else if (input.length == 0) {
          return false;
        } else {
          addNomachine();
        }
      })
      // .fail(function() {
      //   alert("通信エラーです。ユーザーが表示できません。");
      // });
  });
})