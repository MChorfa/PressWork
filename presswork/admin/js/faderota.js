(function($){$.fn.faderota=function(options){var defaults={speed:2000,timer:5000,text:false,slideshow:true,easing:'swing'};var options=$.extend(defaults,options);return this.each(function(){var obj,images,texts,first,last,imglimit,txtlimit,itemWidth,itemHeight,itemNum,totalWidth,totalHeight,txtTop,imgLeft,txtMove,imgMove;obj=$(this);images=obj.find("ul.images");itemWidth=obj.outerWidth();itemHeight=obj.outerHeight();images.css({height:itemHeight+"px"}).find("li").css({height:itemHeight+"px"}).end().find("li:first").addClass("selected").fadeIn('slow');if(options.text){texts=obj.find("ul.text");texts.css({height:itemHeight+"px"}).find("li:first").addClass("selected").fadeIn('slow');}
obj.append('<a href="javascript:void(0)" class="prev"></a> <a href="javascript:void(0)" class="next"></a>');var half=itemHeight/2-25;obj.find(".prev, .next").css({top:half+"px",opacity:0.7}).hover(function(){$(this).fadeTo('fast',0.9);},function(){$(this).fadeTo('fast',0.7);});if(options.slideshow){loop=setTimeout(function(){autoFade(1,1);},options.timer);obj.append('<a href="javascript:void(0)" class="play"></a>')
obj.find(".play").live("click",function(){loop=setTimeout(function(){autoFade(1,1);},options.timer);$(this).hide();});}
obj.find(".next, .prev").live("click",function(){if($(this).hasClass("next")){autoFade(1,0);}else{autoFade(0,0);}
if(options.slideshow){clearTimeout(loop);obj.find(".play").show();}});function autoFade(next,auto){var slide=images.find("li.selected");slide.removeClass("selected").fadeOut('slow');if(options.text){var box=texts.find("li.selected");box.removeClass("selected").fadeOut('slow');}
if(next){if(slide.next().length==0){nextslide=images.find("li:first");if(options.text)nexttext=texts.find("li:first");}else{nextslide=slide.next();if(options.text)nexttext=box.next();}}else{if(slide.prev().length==0){nextslide=images.find("li:last");if(options.text)nexttext=texts.find("li:last");}else{nextslide=slide.prev();if(options.text)nexttext=box.prev();}}
nextslide.addClass("selected").fadeIn("slow");if(options.text){nexttext.addClass("selected").fadeIn("slow");}
if(auto&&options.slideshow){loop=setTimeout(function(){autoFade(1,1);},options.timer);}}});};})(jQuery);

jQuery("#faderota").faderota({
  speed: 1200, 
  timer: 7000, 
  slideshow: true,
  text: true,
  easing: "swing"
}).css({visibility:'visible'});