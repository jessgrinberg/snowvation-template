// $(function(){
//     $('#navbar').on('affixed', function () {
//         $('#navbar').addClass('navbar-fixed-top')
//     });

//     $('#navbar').on('unaffixed', function () {
//         $('#navbar').removeClass('navbar-fixed-top')
//     });
// });

      // $(function (){
      //       $(".navbar").affix ();
      //   });

//  $('.navbar').affix({
//   offset: {
//     top: 50
//   }
// });

// $('#nav').affix({
//     offset: { top: $('#nav').offset().top }
// });​

$('.navbar').affix({
	offset: {
		top: $('.navbar').offset().top
	}
});