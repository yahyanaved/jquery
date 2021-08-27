// $("#sub").click( function(){
//     $.post($("#form1").attr("action"), $("#form1:input").serializeArray(),function(info1){$("#result").html(info1); });

// });
// $("#form1").submit ( function()
// {
//     return false;
// }
// );
      $(function () {

        $('form').on('submit', function (e) {

          e.preventDefault();

          $.ajax({
            type: 'post',
            url: 'code.php',
            data: $('form').serialize(),
            success: function () {
              alert('form was submitted');
            }
          });

        });

      });
 