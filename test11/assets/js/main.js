/* Navbar menu Start js  */
$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();

});
/* Navbar menu End js  */

/* owlCarousel Start js  */
$(function() {
    $('.owl-1').owlCarousel({
        /*animateOut: 'slideOutDown',
        animateIn: 'slideInUp',*/
        items:1,
        loop: true,
        nav:true,
        margin:0,
		autoplay:true,
        stagePadding:0,
        smartSpeed:450,
        navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
    });
})
/* owlCarousel End js  */

/* owlCarousel Start js  */
$(function() {
$('.owl-2').owlCarousel({
	/*animateOut: 'slideOutDown',
	animateIn: 'slideInUp',*/
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1030:{
            items:3,
            nav:true,
            loop:true
        },
		1170:{
            items:4,
            nav:true,
            loop:true
        },
	
    	},
	autoplay:true,
	stagePadding:0,
	smartSpeed:450,
	/*navText: ["<i class="fa-solid fa-chevron-left"></i>","<img src='assets/images/right-arrow.png'>"]*/
	navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
})
})
/* owlCarousel End js  */

/* owlCarousel Start js  */
$(function() {
$('.owl-3').owlCarousel({
	/*animateOut: 'slideOutDown',
	animateIn: 'slideInUp',*/
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1030:{
            items:3,
            nav:true,
            loop:true
        },
		1170:{
            items:3,
            nav:true,
            loop:true
        },
	
    	},
	autoplay:true,
	stagePadding:0,
	smartSpeed:450,
	/*navText: ["<i class="fa-solid fa-chevron-left"></i>","<img src='assets/images/right-arrow.png'>"]*/
	navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
})
})
/* owlCarousel End js  */





/*  Start of Back to TOP Js  */
const main = document.querySelector('main');
const toTopButton = document.querySelector('.btt-button');
function obCallback(payload) {
  if (payload[0].isIntersecting === true) {
    toTopButton.classList.add('is-visible');
  } else {
    toTopButton.classList.remove('is-visible');
  }
}
if (main && toTopButton) {
  const ob = new IntersectionObserver(obCallback, {
    threshold: 0.2 });
  ob.observe(main);
}
/*  End of Back to TOP Js  */



/*  Start of WOW Js  */
 wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();

/*  End of WOW Js  */

/*----------------------------------------------------*/
/*  language eng to guj - Start  */
		var url = window.location.href;
		var newurl = url.replace("/guj/", "/en/");
		//alert (newurl);

/*  language eng to guj - end  */




/*----------------------------------------------------*/
	/*	Back Top Link
	/*----------------------------------------------------*/
	
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(400);
        } else {
            $('.back-to-top').fadeOut(400);
        }
    });
    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    })
	
	//end back to top





/*ACCRODIAN PLUS MINUS*/

$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this)
      .prev(".card-header")
      .find(".fa")
      .addClass("fa-minus")
      .removeClass("fa-plus");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-plus")
        .addClass("fa-minus");
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    });
});



/* model popup start */

        $(window).on('load',function(){
        $('#modal-popup').modal('show');
        });

        $(window).on('load',function(){
        $('#modal-popup01').modal('show');
        });

        $(window).on('load',function(){
        $('#modal-popup02').modal('show');
        });

        //setTimeout(function() { $('#defaultModal').modal('hide'); },7000);

/* model popup end */

/****** start font + - change  *****/

    var section;
    var factor = 0.9;
    var count = 0;
    function getFontSize(el)
    {
      var fs = $(el).css('font-size');
      if (!el.originalFontSize)
        el.originalFontSize = fs; //set dynamic property for later reset
      return  parseFloat(fs);
    }
    function setFontSize(fact) {
      if (section == null)
        section = $('body').not('.font-size-change').find('*')
            .filter(
                function () {
                  return  $(this).clone()
                      .children()
                      .remove()
                      .end()
                      .text().trim().length > 0;
                }); //filter -> exclude all elements without text

      section.each(function () {
        var newsize = fact ? getFontSize(this) * fact : this.originalFontSize;
        if (newsize)
          $(this).css('font-size', newsize);
      });
    }

    function resetFont() {
      setFontSize();
      count = 0;
    }

    function increaseFont() {
      if (count < 1)
      {
        setFontSize(1 / factor);
        count++
      }
    }

    function decreaseFont() {
      if (count > -1)
      {
        setFontSize(factor);
        count--
      }
    }

/****** end font + - change  *****/


/****** start color change  *****/

$(function () {
    

let darkMode = localStorage.getItem("dark-mode");
    function style_change(stylename) {
    }

     $(document).ready(function(){
        $("#aBlack").click(function(){
            document.getElementById('aStyleLink').href='assets/css/black-theme.css';
            localStorage.setItem("dark-mode", "black");
        });
    
        $("#aNormal").click(function(){
            document.getElementById('aStyleLink').href='#';
            localStorage.setItem("dark-mode", "white");
        });
    

        if (darkMode === "black") {
          document.getElementById('aStyleLink').href='assets/css/black-theme.css'; // set state of darkMode on page load
        }
         
         else if (darkMode === "white") {
          document.getElementById('aStyleLink').href='#';
        }

    });    
    
})

/****** End color change  *****/

