/***********************
*  Site Specific JS   *
************************/

//Javascripts
$(document).ready(function(){ 
  $.favicon('http://cdn.myld.com.au/2/1735/airlie-beach-hot-water-service-pty-ltd_3639b0fecf.png');
	
	menu.contactDetails({
		
		phone: null, //optional, can have multiple values[array] 
		mobile: '0429468608', //optional, can have multiple values[array]
		email: 'admin@airliebeachhotwaterservice.com.au', //optional, can have multiple values[array] 
		address: 'PO Box 607, Airlie Beach, QLD 4802', //optional, single value
		hours: [['Mon-Fri','9:00am-5:00pm'],['24 hour','Emergency Repairs']] //optional
		
	});
    
    
    // View section_1
    $('#view_section_1').insertBefore('.footer');

    // View error div
    $('#error').insertBefore('.footer');
    
    
    // FB
    function jqUpdateSize(){
        // Get the dimensions of the viewport
        var container_width = $('#fbFeed').width(),
            iframe_width = container_width;

        $('#fbFeed').html('<iframe src="http://www.facebook.com/plugins/likebox.php?id=229691864216175&amp;width='+ iframe_width +'&amp;connections=4&amp;stream=true&amp;header=false&amp;height="300" scrolling="no" frameborder="0" style="background: #fff;float:left; border:none; overflow:hidden; width:'+ container_width +'px; height:300px;"></iframe>');
        FB.XFBML.parse(); 


        //$('#jqHeight').html(height);
    };
    $(document).ready(jqUpdateSize);    // When the page first loads
    $(window).resize(jqUpdateSize);     // When the browser changes size   
    
    
    // FAQ
    if ( $("body#faq").is("*") ) {
        $('.faq-list').goFaq ();
    }
    
    // Galery
    if ( $("body#gallery").is("*") ) {
        if(Modernizr.touch && $(".fancybox").length > 0 )
        {
           var myPhotoSwipe = $(".fancybox").photoSwipe({ enableMouseWheel: false , enableKeyboard: false });
        }
        else
        {
        /* Apply to single image */
            $("a.fancybox").fancybox();

        /* Apply fancybox to multiple items */
            $("a.fancybox[rel='gallery_group']").fancybox({
                'transitionIn'    :    'elastic',
                'transitionOut'    :    'elastic',
                'speedIn'        :    600,
                'speedOut'        :    200
            });

        }    
        
    }
    
    
    // CONTACT
    if ( $("body#contact-us").is("*") ) {

        // Contact Form
        $('#contact_form').smartCaptcha({
            validateText: ["name","phone","message"],
            validateEmail: ["email"],
            redirectLink: null,
            validateStyle: "default"
        });

        // Remove Slider
        //$('#slider').remove();

        // Insert Map
        function map() {
          var myLatlng = new google.maps.LatLng(-20.26750, 148.71694);
          var image = 'http://cdn.myld.com.au/2/1735/airlie-beach-hot-water-service-pty-ltd_859ed46d2c.png';
          var mapOptions = {
            scrollwheel: false,
            zoom: 13,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }

          if ($('#map').length > 0) {
              var map = new google.maps.Map(document.getElementById('map'), mapOptions);

              var marker = new google.maps.Marker({
                  position: myLatlng,
                  map: map,
                  icon: image
              });

              google.maps.event.addDomListener(window, 'resize', function() {
                    map.setCenter(myLatlng);
              });         
              google.maps.event.addDomListener(window, 'orientationchange', function() {
                    map.setCenter(myLatlng);
              });   
            }
        }
        $(window).load(function(){
            map();
        });        
        
        
        
    } else {
        
    }
    
    
     
}); 
