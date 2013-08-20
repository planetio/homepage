(function() {
  var $window = $(window);
  
    var increaseListFontSizes = function(list) {
        var listLength = list.length;
        for (var i = listLength+10, index = 0; index < listLength; i--) {
            var degree = (i*1.5);
            list[index].style.fontSize = degree+"px";
            list[index].style.lineHeight = (degree+8)+"px";
            index++;
        }
        
        $("#main-content").fadeIn();
    };
    
    var highlighter = function() {
        $("#main-content li").click(function() {
          var type = $(this).attr("id");

          $("#main-content li").removeClass("hover");
          $(this).addClass("hover");
          $("#side-content .job").removeClass("hover");
          $("#side-content .job."+type).addClass("hover");
        });
        
        $("#side-content .job").click(function() {
          $(".hover").removeClass("hover");
          
          $(this).addClass("hover");
          
          Array.prototype.slice.call(this.classList, 0)
          .forEach(function(className) {
            $("#"+className).addClass("hover");
          });
          
        });
    };
    
    function setHeight() {
      var $buckets = $(".content-buckets");
      $buckets.height( $window.height() - $buckets.offset().top - 40);
    }
    
    $(function() {
      increaseListFontSizes(document.querySelectorAll("#main-content li"));
      highlighter();
    
      $window.resize(function() {
        setHeight();
      });
    });
    
    $window.load(function() {
      setHeight();
    });  
})();