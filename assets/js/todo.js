// strike through effect should appear after clicking on any li

$("ul").on("click","li",(function(){
    	$(this).toggleClass("completed")
}));
// Click on X to delete To Do
// $("span").click(function(event){
//     	$(this).parent().fadeOut("slow",function(){
//     		$(this).remove();

//     	});
//     	event.stopPropagation();
// });
$("ul").on("click","span",function(event){
    	$(this).parent().fadeOut("slow",function(){
    		$(this).remove();

    	});
    	event.stopPropagation();
});


//Add new To do

$("input[type='text']").keypress(function(event){
 
 if (event.which===13)
  {
  	var input=$(this).val();
  	$(this).val("")
  	$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>"+input+"</li>");

  }
})
$('#toggle-form').click(function(){
	$("input[type='text']").fadeToggle();
})
