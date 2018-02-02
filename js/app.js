MENU = {
	bindMenu: function () {

		$(document).ready(function(){
			$("#demosMenu").change(function(){
				window.location.href = $(this).find("option:selected").attr("id") + '.html';
			});
		});
		
			
	}
};



PARALLAX = {
    bindParralax: function () {
        $(document).ready(function() {
            $('#fullpage').fullpage({
              sectionsColor: ['#000', '#000', '#171717', '#000'],
              anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5fifthpage'],
              menu: '#menu',
              scrollBar: true,       
              responsiveWidth: 900,
              scrollOverflow: true           
            });
        });
        
    },
  
};


SNOW = {
    bindSnow: function () {
   
        $(document).ready( function(){
            $.fn.snow();
        });
        
    }
};





var onLoad = function () {
	
	PARALLAX.bindParralax();
	MENU.bindMenu();
	SNOW.bindSnow();


};


$(document).foundation();
window.onload = onLoad();