function t331_setHeight(recid){var el=$("#rec"+recid);var div=el.find(".t331__video-carier");var ratiowidth=div.attr("data-video-width");var ratioheight=div.attr("data-video-height");var ratio=ratioheight/ratiowidth;var height=div.width()*ratio;div.height(height);div.parent().height(height)}
function t331_initPopup(recid){$('#rec'+recid).attr('data-animationappear','off');$('#rec'+recid).css('opacity','1');var el=$('#rec'+recid).find('.t-popup'),hook=el.attr('data-tooltip-hook'),analitics=el.attr('data-track-popup');if(hook!==''){var obj=$('a[href="'+hook+'"]');obj.click(function(e){t331_showPopup(recid);t331_resizePopup(recid);e.preventDefault();if(analitics=='yes'){t331_sendPopupEventToStatistics(hook)}})}}
function t331_showPopup(recid){var el=$('#rec'+recid),popup=el.find('.t-popup');var youtubeid=el.find(".t331__youtube").attr('data-content-popup-video-url-youtube');var videourl='https://www.youtube.com/embed/'+youtubeid;el.find(".t331__video-carier").html("<iframe id=\"youtubeiframe"+recid+"\" class=\"t331__iframe\" width=\"100%\" height=\"100%\" src=\""+videourl+"?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>");popup.css('display','block');t331_setHeight(recid);setTimeout(function(){popup.find('.t-popup__container').addClass('t-popup__container-animated');popup.addClass('t-popup_show')},50);$('body').addClass('t-body_popupshowed');el.find('.t-popup').click(function(e){if(e.target==this){t331_popup_close(recid)}});el.find('.t-popup__close').click(function(e){t331_popup_close(recid)});$(document).keydown(function(e){if(e.keyCode==27){t331_popup_close(recid)}})}
function t331_popup_close(recid){$('body').removeClass('t-body_popupshowed');$('.t-popup').removeClass('t-popup_show');setTimeout(function(){$("#rec"+recid+" .t331__video-carier").html("");$('.t-popup').not('.t-popup_show').css('display','none')},300)}
function t331_resizePopup(recid){var el=$("#rec"+recid),div=el.find(".t-popup__container").height(),win=$(window).height(),popup=el.find(".t-popup__container");if(div>win){popup.addClass('t-popup__container-static')}else{popup.removeClass('t-popup__container-static')}}
function t331_sendPopupEventToStatistics(popupname){var virtPage='/tilda/popup/';var virtTitle='Popup: ';if(popupname.substring(0,7)=='#popup:'){popupname=popupname.substring(7)}
virtPage+=popupname;virtTitle+=popupname;if(ga){if(window.mainTracker!='tilda'){ga('send',{'hitType':'pageview','page':virtPage,'title':virtTitle})}}
if(window.mainMetrika>''&&window[window.mainMetrika]){window[window.mainMetrika].hit(virtPage,{title:virtTitle,referer:window.location.href})}}
function t400_init(recid){var el=$('#rec'+recid);el.find('.t400__submit').click(function(){var rec_ids=$(this).attr('data-hidden-rec-ids').split(',');rec_ids.forEach(function(rec_id,i,arr){var rec_el=$('#rec'+rec_id);rec_el.removeClass('t400__off');rec_el.css('opacity','')});$('.t599, .t570, .t554, .t650, .t351, .t353, .t341, .t385, .t226, .t404, .t412, .t552, .t279, .t384, .t229, .t456, .t268, .t334, .t121, .t517, .t545, .t518, .t744, .t778').trigger('displayChanged');setTimeout(function(){$('.t351, .t353, .t341, .t410, .t385').trigger('displayChanged')},50);el.addClass('t400__off').hide();if(window.lazy=='y'){t_lazyload_update()}});t400_alltabs_updateContent(recid);t400_checkSize(recid)}
function t400_alltabs_updateContent(recid){var el=$('#rec'+recid);el.find(".t400__submit").each(function(i){var rec_ids=$(this).attr('data-hidden-rec-ids').split(',');rec_ids.forEach(function(rec_id,i,arr){var rec_el=$('#rec'+rec_id);rec_el.attr('data-animationappear','off');rec_el.addClass('t400__off')})})}
function t400_checkSize(recid){var el=$("#rec"+recid).find(".t400__submit");if(el.length){var btnheight=el.height();var textheight=el[0].scrollHeight;if(btnheight<textheight){var btntext=el.text();el.addClass("t400__submit-overflowed");el.html("<span class=\"t400__text\">"+btntext+"</span>")}}}
function t450_showMenu(recid){var el=$('#rec'+recid);$('body').addClass('t450__body_menushowed');el.find('.t450').addClass('t450__menu_show');el.find('.t450__overlay').addClass('t450__menu_show');el.find('.t450__overlay, .t450__close, .t450__list_item, a[href*=#]').click(function(){var url=$(this).attr('href');if(!url||url.substring(0,7)!='#price:'){t450_closeMenu()}});$(document).keydown(function(e){if(e.keyCode==27){$('body').removeClass('t390__body_popupshowed');$('.t390').removeClass('t390__popup_show')}})}
function t450_closeMenu(){$('body').removeClass('t450__body_menushowed');$('.t450').removeClass('t450__menu_show');$('.t450__overlay').removeClass('t450__menu_show')}
function t450_checkSize(recid){var el=$('#rec'+recid).find('.t450');var windowheight=$(window).height()-80;var contentheight=el.find(".t450__top").height()+el.find(".t450__rightside").height();if(contentheight>windowheight){el.addClass('t450__overflowed');el.find(".t450__container").css('height','auto')}}
function t450_appearMenu(recid){var el=$('#rec'+recid);var burger=el.find(".t450__burger_container");burger.each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");var hideoffset=el.attr("data-hideoffset");if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.hasClass('t450__beforeready')){el.finish();el.removeClass("t450__beforeready")}}else{el.stop();el.addClass("t450__beforeready")}}
if(hideoffset!=""){if(hideoffset.indexOf('vh')>-1){hideoffset=Math.floor((window.innerHeight*(parseInt(hideoffset)/100)))}
hideoffset=parseInt(hideoffset,10);if($(window).scrollTop()+$(window).height()>=$(document).height()-hideoffset){if(!el.hasClass('t450__beforeready')){el.finish();el.addClass("t450__beforeready")}}else{if(appearoffset!=""){if($(window).scrollTop()>=appearoffset){el.stop();el.removeClass("t450__beforeready")}}else{el.stop();el.removeClass("t450__beforeready")}}}})}
function t450_initMenu(recid){var el=$('#rec'+recid).find('.t450');var hook=el.attr('data-tooltip-hook');if(hook!==''){var obj=$('a[href="'+hook+'"]');obj.click(function(e){t450_closeMenu();t450_showMenu(recid);t450_checkSize(recid);e.preventDefault()})}
$('#rec'+recid).find('.t450__burger_container').click(function(e){t450_closeMenu();t450_showMenu(recid);t450_checkSize(recid)})}
function t536_setWidth(recid){var el=$('#rec'+recid),topsection=el.find('.t536__topsection'),slidewidth=el.find('.t-slides__container').width();topsection.css('max-width',slidewidth)}
function t570_init(recid){if($(window).width()>750){t570_setMapHeight(recid);$(window).load(function(){t570_setMapHeight(recid)});$(window).resize(function(){t570_setMapHeight(recid)})}}
function t570_setMapHeight(recid){var t570__el=$('#rec'+recid),t570__map=t570__el.find('.t-map');var t570__textwrapper=t570__el.find('.t570__col_text').height();t570__map.css('height',t570__textwrapper)}
function t604_init(recid){t604_imageHeight(recid);t604_arrowWidth(recid);t604_show(recid);t604_hide(recid);$(window).bind('resize',t_throttle(function(){t604_arrowWidth(recid)},200))}
function t604_show(recid){var el=$("#rec"+recid),play=el.find('.t604__play');play.click(function(){if($(this).attr('data-slider-video-type')=='youtube'){var url=$(this).attr('data-slider-video-url');$(this).next().html("<iframe class=\"t604__iframe\" width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/"+url+"?autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>")}
if($(this).attr('data-slider-video-type')=='vimeo'){var url=$(this).attr('data-slider-video-url');$(this).next().html("<iframe class=\"t604__iframe\" width=\"100%\" height=\"100%\" src=\"https://player.vimeo.com/video/"+url+"?autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>")}
$(this).next().css('z-index','3')})}
function t604_hide(recid){var el=$("#rec"+recid),body=el.find('.t604__frame');el.on('updateSlider',function(){body.html('').css('z-index','')})}
function t604_imageHeight(recid){var el=$("#rec"+recid);var image=el.find(".t604__separator");image.each(function(){var width=$(this).attr("data-slider-image-width");var height=$(this).attr("data-slider-image-height");var ratio=height/width;var padding=ratio*100;$(this).css("padding-bottom",padding+"%")})}
function t604_arrowWidth(recid){var el=$("#rec"+recid),arrow=el.find('.t-slds__arrow_wrapper'),slideWidth=el.find('.t-slds__wrapper').width(),windowWidth=$(window).width(),arrowWidth=windowWidth-slideWidth;if(windowWidth>960){arrow.css('width',arrowWidth/2)}else{arrow.css('width','')}}
function t607_init(recid){t607_checkAnchorLinks(recid)}
function t607_checkAnchorLinks(recid){if($(window).width()>=960){var t607_navLinks=$("#rec"+recid+" .t607__list_item a:not(.tooltipstered)[href*='#']");if(t607_navLinks.length>0){t607_catchScroll(t607_navLinks)}}}
function t607_catchScroll(t607_navLinks){var t607_clickedSectionId=null,t607_sections=new Array(),t607_sectionIdTonavigationLink={},t607_interval=100,t607_lastCall,t607_timeoutId;t607_navLinks=$(t607_navLinks.get().reverse());t607_navLinks.each(function(){var t607_cursection=t607_getSectionByHref($(this));if(typeof t607_cursection.attr("id")!="undefined"){t607_sections.push(t607_cursection)}
t607_sectionIdTonavigationLink[t607_cursection.attr("id")]=$(this)});t607_highlightNavLinks(t607_navLinks,t607_sections,t607_sectionIdTonavigationLink,t607_clickedSectionId);setTimeout(function(){t607_highlightNavLinks(t607_navLinks,t607_sections,t607_sectionIdTonavigationLink,t607_clickedSectionId)},1000);$(document).keydown(function(e){var t607_direction="";switch(e.which){case 38:t607_direction="top";break;case 40:t607_direction="bottom";break;case 33:t607_direction="top";break;case 34:t607_direction="bottom";break;default:return}
if(t607_direction!=""){var t607_curActiveSectionId=t607_getSectionByHref(t607_navLinks.filter(".t-active")).attr("id"),t607_newActiveSectionIndex=$.map(t607_sections,function(obj,index){if(obj.attr("id")==t607_curActiveSectionId&&t607_direction=="top"){return index+1}
if(obj.attr("id")==t607_curActiveSectionId&&t607_direction=="bottom"){return index-1}});var t607_newActiveSection=t607_sections[t607_newActiveSectionIndex[0]];if(typeof t607_newActiveSection=="undefined"){return}
t607_navLinks.removeClass('t-active');var $root=$('html, body'),t607_offsetTop=$(".t607").attr("data-offset-top");t607_sectionIdTonavigationLink[t607_newActiveSection.attr("id")].addClass('t-active');t607_clickedSectionId=t607_newActiveSection.attr("id");if(typeof t607_offsetTop!="undefined"){$root.animate({scrollTop:t607_newActiveSection.offset().top-t607_offsetTop},500)}
else{$root.animate({scrollTop:t607_newActiveSection.offset().top},500)}}});t607_navLinks.click(function(){if(!$(this).hasClass("tooltipstered")){t607_navLinks.removeClass('t-active');var t607_clickedSection=t607_getSectionByHref($(this)),$root=$('html, body'),t607_offsetTop=$(".t607").attr("data-offset-top");if(!$(this).hasClass("t-active")){t607_clickedSectionId=t607_clickedSection.attr("id")}
t607_sectionIdTonavigationLink[t607_clickedSection.attr("id")].addClass('t-active');if(typeof t607_offsetTop!="undefined"){$root.animate({scrollTop:t607_clickedSection.offset().top-t607_offsetTop},500)}
else{$root.animate({scrollTop:t607_clickedSection.offset().top},500)}
return!1}});$(window).scroll(function(){var t607_now=new Date().getTime();if(t607_lastCall&&t607_now<(t607_lastCall+t607_interval)){clearTimeout(t607_timeoutId);t607_timeoutId=setTimeout(function(){t607_lastCall=t607_now;t607_clickedSectionId=t607_highlightNavLinks(t607_navLinks,t607_sections,t607_sectionIdTonavigationLink,t607_clickedSectionId)},t607_interval-(t607_now-t607_lastCall))}else{t607_lastCall=t607_now;t607_clickedSectionId=t607_highlightNavLinks(t607_navLinks,t607_sections,t607_sectionIdTonavigationLink,t607_clickedSectionId)}})}
function t607_getSectionByHref(curlink){var t651_curLinkValue=curlink.attr("href").replace(/\s+/g,'');if(curlink.is('[href*="#rec"]')){return $(".r[id='"+t651_curLinkValue.substring(1)+"']")}else{return $(".r[data-record-type='215']").has("a[name='"+t651_curLinkValue.substring(1)+"']")}}
function t607_highlightNavLinks(t607_navLinks,t607_sections,t607_sectionIdTonavigationLink,t607_clickedSectionId){var t607_scrollPosition=$(window).scrollTop(),t607_valueToReturn=t607_clickedSectionId;if(typeof t607_sections[t607_sections.length-2]!="undefined"&&t607_sections[t607_sections.length-2].offset().top<=$(window).height()/2&&t607_scrollPosition==0){t607_navLinks.removeClass('t-active');t607_navLink=t607_sectionIdTonavigationLink[t607_sections[t607_sections.length-1].attr("id")];t607_navLink.addClass('t-active');return null}
$(t607_sections).each(function(e){var t607_curSection=$(this),t607_sectionTop=t607_curSection.offset().top,t607_id=t607_curSection.attr('id'),t607_navLink=t607_sectionIdTonavigationLink[t607_id];if((t607_scrollPosition+$(window).height()/2)>=t607_sectionTop||(t607_sections[0].attr("id")==t607_id&&$(window).scrollTop()>=$(document).height()-$(window).height())){if(t607_clickedSectionId==null&&!t607_navLink.hasClass('t-active')){t607_navLinks.removeClass('t-active');t607_navLink.addClass('t-active');t607_valueToReturn=null}else{if(t607_clickedSectionId!=null&&t607_id==t607_clickedSectionId){t607_valueToReturn=null}}
return!1}});return t607_valueToReturn}
function t702_onSuccess(t702_form){var t702_inputsWrapper=t702_form.find('.t-form__inputsbox');var t702_inputsHeight=t702_inputsWrapper.height();var t702_inputsOffset=t702_inputsWrapper.offset().top;var t702_inputsBottom=t702_inputsHeight+t702_inputsOffset;var t702_targetOffset=t702_form.find('.t-form__successbox').offset().top;if($(window).width()>960){var t702_target=t702_targetOffset-200}else{var t702_target=t702_targetOffset-100}
if(t702_targetOffset>$(window).scrollTop()||($(document).height()-t702_inputsBottom)<($(window).height()-100)){t702_inputsWrapper.addClass('t702__inputsbox_hidden');setTimeout(function(){if($(window).height()>$('.t-body').height()){$('.t-tildalabel').animate({opacity:0},50)}},300)}else{$('html, body').animate({scrollTop:t702_target},400);setTimeout(function(){t702_inputsWrapper.addClass('t702__inputsbox_hidden')},400)}
var successurl=t702_form.data('success-url');if(successurl&&successurl.length>0){setTimeout(function(){window.location.href=successurl},500)}}
function t702_showPopup(recid){var el=$('#rec'+recid),popup=el.find('.t-popup');popup.css('display','block');setTimeout(function(){popup.find('.t-popup__container').addClass('t-popup__container-animated');popup.addClass('t-popup_show')},50);$('body').addClass('t-body_popupshowed t702__body_popupshowed');el.find('.t-popup').click(function(e){if(e.target==this){t702_closePopup()}});el.find('.t-popup__close').click(function(e){t702_closePopup()});el.find('a[href*=#]').click(function(e){var url=$(this).attr('href');if(!url||url.substring(0,7)!='#price:'){t702_closePopup();if(!url||url.substring(0,7)=='#popup:'){setTimeout(function(){$('body').addClass('t-body_popupshowed')},300)}}});$(document).keydown(function(e){if(e.keyCode==27){t702_closePopup()}})}
function t702_closePopup(){$('body').removeClass('t-body_popupshowed t702__body_popupshowed');$('.t-popup').removeClass('t-popup_show');setTimeout(function(){$('.t-popup').not('.t-popup_show').css('display','none')},300)}
function t702_resizePopup(recid){var el=$("#rec"+recid),div=el.find(".t-popup__container").height(),win=$(window).height()-120,popup=el.find(".t-popup__container");if(div>win){popup.addClass('t-popup__container-static')}else{popup.removeClass('t-popup__container-static')}}
function t702_sendPopupEventToStatistics(popupname){var virtPage='/tilda/popup/';var virtTitle='Popup: ';if(popupname.substring(0,7)=='#popup:'){popupname=popupname.substring(7)}
virtPage+=popupname;virtTitle+=popupname;if(window.Tilda&&typeof Tilda.sendEventToStatistics=='function'){Tilda.sendEventToStatistics(virtPage,virtTitle,'',0)}else{if(ga){if(window.mainTracker!='tilda'){ga('send',{'hitType':'pageview','page':virtPage,'title':virtTitle})}}
if(window.mainMetrika>''&&window[window.mainMetrika]){window[window.mainMetrika].hit(virtPage,{title:virtTitle,referer:window.location.href})}}}
function t702_initPopup(recid){$('#rec'+recid).attr('data-animationappear','off');$('#rec'+recid).css('opacity','1');var el=$('#rec'+recid).find('.t-popup'),hook=el.attr('data-tooltip-hook'),analitics=el.attr('data-track-popup');if(hook!==''){var obj=$('a[href="'+hook+'"]');obj.click(function(e){t702_showPopup(recid);t702_resizePopup(recid);e.preventDefault();if(window.lazy=='y'){t_lazyload_update()}
if(analitics=='yes'){t702_sendPopupEventToStatistics(hook)}})}}
function t750_init(recid){t_sldsInit(recid);setTimeout(function(){t_prod__init(recid);t750_initPopup(recid)},500)}
function t750_initPopup(recid){$('#rec'+recid).attr('data-animationappear','off');$('#rec'+recid).css('opacity','1');var el=$('#rec'+recid).find('.t-popup'),hook=el.attr('data-tooltip-hook'),analitics=el.attr('data-track-popup');if(hook!==''){var obj=$('a[href="'+hook+'"]');obj.click(function(e){t750_showPopup(recid);e.preventDefault();if(window.lazy=='y'){t_lazyload_update()}
if(analitics=='yes'){t750_sendPopupEventToStatistics(hook)}})}}
function t750_showPopup(recid){var el=$('#rec'+recid),popup=el.find('.t-popup'),sliderWrapper=el.find('.t-slds__items-wrapper'),sliderWidth=el.find('.t-slds__container').width(),pos=parseFloat(sliderWrapper.attr('data-slider-pos'));popup.css('display','block');setTimeout(function(){popup.find('.t-popup__container').addClass('t-popup__container-animated');popup.addClass('t-popup_show');t_slds_SliderWidth(recid);sliderWrapper=el.find('.t-slds__items-wrapper');sliderWidth=el.find('.t-slds__container').width();pos=parseFloat(sliderWrapper.attr('data-slider-pos'));sliderWrapper.css({transform:'translate3d(-'+(sliderWidth*pos)+'px, 0, 0)'});t_slds_UpdateSliderHeight(recid);t_slds_UpdateSliderArrowsHeight(recid);if(window.lazy=='y'){t_lazyload_update()}},50);$('body').addClass('t-body_popupshowed');el.find('.t-popup').click(function(e){if(e.target==this){t750_closePopup()}});el.find('.t-popup__close, .t750__close-text').click(function(e){t750_closePopup()});$(document).keydown(function(e){if(e.keyCode==27){t750_closePopup()}})}
function t750_closePopup(){$('body').removeClass('t-body_popupshowed');$('.t-popup').removeClass('t-popup_show');setTimeout(function(){$('.t-popup').not('.t-popup_show').css('display','none')},300)}
function t750_sendPopupEventToStatistics(popupname){var virtPage='/tilda/popup/';var virtTitle='Popup: ';if(popupname.substring(0,7)=='#popup:'){popupname=popupname.substring(7)}
virtPage+=popupname;virtTitle+=popupname;if(ga){if(window.mainTracker!='tilda'){ga('send',{'hitType':'pageview','page':virtPage,'title':virtTitle})}}
if(window.mainMetrika>''&&window[window.mainMetrika]){window[window.mainMetrika].hit(virtPage,{title:virtTitle,referer:window.location.href})}}
function t774_init(recid){t774_unifyHeights(recid);$(window).bind('resize',t_throttle(function(){t774_unifyHeights(recid)},200));$(".t774").bind("displayChanged",function(){t774_unifyHeights(recid)})}
function t774_unifyHeights(recid){var t774_el=$('#rec'+recid),t774_blocksPerRow=t774_el.find(".t774__container").attr("data-blocks-per-row"),t774_cols=t774_el.find(".t774__content"),t774_mobScroll=t774_el.find(".t774__scroll-icon-wrapper").length;if($(window).width()<=480&&t774_mobScroll==0){t774_cols.css("height","auto");return}
var t774_perRow=+t774_blocksPerRow;if($(window).width()<=960&&t774_mobScroll>0){var t774_perRow=t774_cols.length}
else{if($(window).width()<=960){var t774_perRow=2}}
for(var i=0;i<t774_cols.length;i+=t774_perRow){var t774_maxHeight=0,t774_row=t774_cols.slice(i,i+t774_perRow);t774_row.each(function(){var t774_curText=$(this).find(".t774__textwrapper"),t774_curBtns=$(this).find(".t774__btn-wrapper, .t774__btntext-wrapper"),t774_itemHeight=t774_curText.outerHeight()+t774_curBtns.outerHeight();if(t774_itemHeight>t774_maxHeight){t774_maxHeight=t774_itemHeight}});t774_row.css("height",t774_maxHeight)}}