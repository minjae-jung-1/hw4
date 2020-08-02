$(document).ready(function(){
    $(".saveBtn").on("click",function(){
       
        var value = $(this).siblings(".saveFile").val();
        var time = $(this).siblings(".time")[0].innerHTML;
        localStorage.setItem(time, value)
    })
    function updateColor(){
        var date;

        date = new Date();
        var hour = date.getHours();

        console.log(hour)


        $(".time").each(function() {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            // check if we've moved past this time
            if (blockHour < hour) {
              $(this).addClass("past");
            } 
            else if (blockHour === hour) {
              $(this).removeClass("past");
              $(this).addClass("present");
            } 
            else {
              $(this).removeClass("past");
              $(this).removeClass("present");
              $(this).addClass("future");
            }
          });
    }
    updateColor()
    
    console.log($("date .description"))
    
    
    var textArea = $(textArea).textContent
    
    $("#date-9 .description").val(localStorage.getItem("9AM"));
    $("#date-10 .description").val(localStorage.getItem("10AM"));
    $("#date-11 .description").val(localStorage.getItem("11AM"));
    $("#date-12 .description").val(localStorage.getItem("12PM"));
    $("#date-1 .description").val(localStorage.getItem("1PM"));
    $("#date-2 .description").val(localStorage.getItem("2PM"));
    $("#date-3 .description").val(localStorage.getItem("3PM"));
    $("#date-4 .description").val(localStorage.getItem("4PM"));
    $("#date-5 .description").val(localStorage.getItem("5PM"));
    console.log(    $("#date-9 .description").val(localStorage.getItem("9AM"))
    )
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

})
//time



