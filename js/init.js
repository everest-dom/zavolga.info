$(function(){
	//var windowWidth = $(window).width();
	//alert(windowWidth);
	$('#form').fancybox();
	var imagesS = ['img/130/foto-2.jpg','img/130/foto-3.jpg','img/130/foto-7.jpg'];
	var imagesM = ['img/130/foto-1.jpg','img/130/foto-2.jpg','img/130/foto-3.jpg'];
	var imagesL = ['img/200/200.jpg','img/200/foto-2.jpg','img/200/foto-3.jpg','img/200/200-2.jpg'];
	var imagesLX = ['img/210/200TK.jpg','img/210/210TS.jpg'];
	var imagesEmpty = ['img/emptybig.jpg'];
	var slider;
	var centrer = $('#container');
	var centrer1 = $('#center1');
	var centrer2 = $('#center2');
	var centrer3 = $('#center3');
	var centrer4 = $('#center4');
	var body_size=$('body');
	var head_foot_height = 370;

	function content_move(trgt) {
		var w=body_size.width();
		var h=body_size.height();
		var d=h/w;
		if(d>0.5625) {
			centrer.css({'width': Math.round(h/0.5625),'height':h,'top':0,'left':Math.round(-0.6*(h/0.5625-w))});			
			centrer1.css({'width':Math.round(h/0.5625),'height':h,'top':0,'left':Math.round(-0.6*(h/0.5625-w))});			
			centrer2.css({'width':Math.round(h/0.5625),'height':h,'top':0,'left':Math.round(-0.6*(h/0.5625-w))});			
			centrer3.css({'width':Math.round(h/0.5625),'height':h,'top':0,'left':Math.round(-0.6*(h/0.5625-w))});			
			centrer4.css({'width':Math.round(h/0.5625),'height':h,'top':0,'left':Math.round(-0.6*(h/0.5625-w))});			
		} else {
		
		if(h < 1081){
				var addt = 50;
			}else{
				var addt = 0;	
			}
			centrer.css({'width':w,'height':Math.round(w*0.5625),'top':Math.round(-0.5*(w*0.5625-h)+addt),'left':0});		
			centrer1.css({'width':w,'height':Math.round(w*0.5625),'top':Math.round(-0.5*(w*0.5625-h)+addt),'left':0});		
			centrer2.css({'width':w,'height':Math.round(w*0.5625),'top':Math.round(-0.5*(w*0.5625-h)+addt),'left':0});		
			centrer3.css({'width':w,'height':Math.round(w*0.5625),'top':Math.round(-0.5*(w*0.5625-h)+addt),'left':0});		
			centrer4.css({'width':w,'height':Math.round(w*0.5625),'top':Math.round(-0.5*(w*0.5625-h)+addt),'left':0});		
		};
		
		var cur=body_size.attr('class');
				
		if(r!=null) {
			var c_w=centrer.width();
			var c_h=centrer.height();			
			//console.log("c_w: "+w+" / c_h: "+h);
			//console.log("c_w: "+c_w+" / c_h: "+c_h);			
			r.changeSize(c_w, c_h, false, false);
			$('svg').attr({'width':c_w,'height':c_h}).css({'width':c_w,'height':c_h});					
		}		
		
		$("#cottageframe").css({"height":h-head_foot_height});
	};
	
	$(window).resize(function(){
		content_move();
	});
	
	content_move();
	setTimeout(function(){content_move();},50);
	setTimeout(function(){content_move();},500);
	setTimeout(function(){content_move();},1500);
	setTimeout(function(){content_move();},2500);
	
	var r = new ScaleRaphael('container', 1920, 1080),
		attributeR = {
            'opacity' : 0.15,
            fill: 'red',            
            'stroke-width': 1,
            'stroke-linejoin': 'round',
			'cursor': 'pointer',
        },
		attributeG = {
            'opacity' : 0.3,
            fill: 'green',            
            'stroke-width': 1,
            'stroke-linejoin': 'round',
			'cursor': 'pointer',
        },
		attributeY = {
            'opacity' : 0.15,
            fill: 'yellow',            
            'stroke-width': 1,
            'stroke-linejoin': 'round',
			'cursor': 'pointer',
        },
		arr = new Array();
		
	for (var country in paths) {
		
		var obj = r.path(paths[country].path);
		var color = paths[country].color;
		if (color == 'R'){
			obj.attr(attributeR);
		}
		else if(color == 'G'){
			obj.attr(attributeG);
		}
		else{
			obj.attr(attributeY);
		}
		
		arr[obj.id] = country;
		
		obj
		.hover(function(){
			document.location.hash = arr[this.id];
			
			var point = this.getBBox(0);
			var xhash = paths[arr[this.id]].sizetype;
			var scale=r.width/1920;
				var point_x=scale*point.x;
				var point_y=scale*(point.y+point.height)-100;
				var num=1;
				var wide=false;
				
				if(point_y-100<0){
					point_y = point_y + 0;
					point_x = point_x - 20;
				}
			// $('#container').next('.point').remove();
			// $('#container').prev('.map').remove();//Удаление блока map при наведений на патч
			
			$('#container').after($('<div />').addClass('point'));
			// $('#container').before($('<div />').addClass('map'));//Создание блока map при наведений на патч
			var nomber = paths[arr[this.id]].name;
			var css1 = {left: point_x+100,top: point_y+20}
			// if( nomber > 0 && nomber < 96){
			// 	var css1 = {left: point_x+100,top: point_y+20}
			// }else if(nomber > 95 && nomber < 163){
			// 	var css1 = {left: point_x-540,top: point_y-70}
			// }
			// // $('.map').css({left: point_x+15,top: point_y-20}).fadeIn();//Выставление кординат и открытие блока map при наведений
			// if (body_size.width() < 1124) {
			// $('.map').css({left: point_x-35,top: point_y + 10}).fadeIn();//Выставление кординат и открытие блока map при наведений
			// 	if (body_size.height() < 500) {
			// 		$('.map').css({left: point_x+ 45, top: point_y + 70}).fadeIn();//Выставление кординат и открытие блока map при наведений
			// 		}
			// 	else if (body_size.height() < 570 && body_size.height() > 500) {
			// 		$('.map').css({left: point_x+ 15,top: point_y + 60}).fadeIn();//Выставление кординат и открытие блока map при наведений
			// 		}
				
			// }
			if (xhash == '110M'){
			$('.point').html("<div class=\"wrapp-status\">"+
					"<div class=\"left\">"+
						"<img src=\"images/tild3863-3537-4134-a563-376463346261__11.jpg\" alt=\"foto\" />"+
						"<p class='coast'>"+paths[arr[this.id]].price+" млн. <i class='fa fa-rub'></i> - <span class='text--right'>Кирпич</span></p>"+
						"<p class='coast'>"+paths[arr[this.id]].priceSHT+" млн. <i class='fa fa-rub'></i> - <span class='text--right'>Штукатурка</span></p><p><span>(Дом, участок, коммуникации)<span></p>"+
					"</div>"+
					"<div class=\"right\">"+
						"<div class=\"status\"><p>Участок № "+paths[arr[this.id]].name+"</p>"+
							"<span>Статус<i class="+paths[arr[this.id]].color+">"+paths[arr[this.id]].status+"</i></span>"+
						"</div>"+
						"<div class=\"dom\">"+
							"<p>Площадь участка<span>8,2 соток</span></p>"+
							"<b>Коттедж</b>"+
						"</div>"+
						"<table>"+
							"<tr><td>Общая площадь</td><td>110 кв.м.</td></tr>"+
							"<tr><td>Материал</td><td>Газобетон</td></tr>"+
							"<tr><td>Габариты</td><td>11,0 х 8,3 м </td></tr>"+
							"<tr><td>Этажность</td><td>2 этажа</td></tr>"+
							"<tr><td>Высота 1 этажа</td><td>3,0 м.</td></tr>"+
							"<tr><td>Высота мансардного этажа</td><td>1,6-3,6 м.</td></tr>"+
						"</table>"+
					"</div>"+
				"</div>"
			).css(css1).fadeIn();}
			else if (xhash == '125M'){
			$('.point').html("<div class=\"wrapp-status\">"+
				"<div class=\"left\">"+
					"<img src=\"images/tild3630-3539-4332-b736-663437616335__KOT_0889.jpg\" alt=\"foto\" />"+
					"<p class='coast'>"+paths[arr[this.id]].price+" млн. <i class='fa fa-rub'></i> - <span class='text--right'>Кирпич</span></p>"+
					"<p class='coast'>"+paths[arr[this.id]].priceSHT+" млн. <i class='fa fa-rub'></i> - <span class='text--right'>Штукатурка</span></p><p><span>(Дом, участок, коммуникации)<span></p>"+
				"</div>"+
				"<div class=\"right\">"+
					"<div class=\"status\"><p>Участок № "+paths[arr[this.id]].name+"</p>"+
						"<span>Статус<i class="+paths[arr[this.id]].color+">"+paths[arr[this.id]].status+"</i></span>"+
					"</div>"+
					"<div class=\"dom\">"+
						"<p>Площадь участка<span>8,2 соток</span></p>"+
						"<b>Коттедж</b>"+
					"</div>"+
					"<table>"+
						"<tr><td>Общая площадь</td><td>125 кв.м.</td></tr>"+
						"<tr><td>Материал</td><td>Газобетон</td></tr>"+
						"<tr><td>Габариты</td><td>9,5 х 11,0 м </td></tr>"+
						"<tr><td>Этажность</td><td>2 этажа</td></tr>"+
						"<tr><td>Высота 1 этажа</td><td>3,0 м.</td></tr>"+
						"<tr><td>Высота мансардного этажа</td><td>1,6-3,6 м.</td></tr>"+
					"</table>"+
				"</div>"+
			"</div>"
			).css(css1).fadeIn();
			}
			else if (xhash == '125MG'){
			$('.point').html("<div class=\"wrapp-status\">"+
			"<div class=\"left\">"+
			"<img src=\"images/tild3165-3135-4464-b363-376538646434__KOT_0824.jpg\" alt=\"foto\" />"+
			"<p class='coast'>"+paths[arr[this.id]].price+" млн. <i class='fa fa-rub'></i> - <span class='text--right'>Кирпич</span></p>"+
			"<p class='coast'>"+paths[arr[this.id]].priceSHT+" млн. <i class='fa fa-rub'></i> - <span class='text--right'>Штукатурка</span></p><p><span>(Дом, участок, коммуникации)<span></p>"+
		"</div>"+
		"<div class=\"right\">"+
			"<div class=\"status\"><p>Участок № "+paths[arr[this.id]].name+"</p>"+
				"<span>Статус<i class="+paths[arr[this.id]].color+">"+paths[arr[this.id]].status+"</i></span>"+
			"</div>"+
			"<div class=\"dom\">"+
				"<p>Площадь участка<span>8,2 соток</span></p>"+
				"<b>Коттедж</b>"+
			"</div>"+
			"<table>"+
				"<tr><td>Общая площадь</td><td>125 кв.м.</td></tr>"+
				"<tr><td>Материал</td><td>Газобетон</td></tr>"+
				"<tr><td>Габариты</td><td>9,5 х 11,0 м </td></tr>"+
				"<tr><td>Этажность</td><td>2 этажа</td></tr>"+
				"<tr><td>Высота 1 этажа</td><td>3,0 м.</td></tr>"+
				"<tr><td>Высота мансардного этажа</td><td>1,6-3,6 м.</td></tr>"+
			"</table>"+
		"</div>"+
	"</div>"
			).css(css1).fadeIn();
			}
			else if (xhash == '125MF'){
			$('.point').html("<div class=\"wrapp-status\">"+
			"<div class=\"left\">"+
			"<img src=\"images/tild3834-3836-4738-a636-323231636334__55.jpg\" alt=\"foto\" />"+
			"<p class='coast'>"+paths[arr[this.id]].price+" млн. <i class='fa fa-rub'></i> - <span class='text--right'>Кирпич</span></p>"+
			"<p class='coast'>"+paths[arr[this.id]].priceSHT+" млн. <i class='fa fa-rub'></i> - <span class='text--right'>Штукатурка</span></p><p><span>(Дом, участок, коммуникации)<span></p>"+
		"</div>"+
		"<div class=\"right\">"+
			"<div class=\"status\"><p>Участок № "+paths[arr[this.id]].name+"</p>"+
				"<span>Статус<i class="+paths[arr[this.id]].color+">"+paths[arr[this.id]].status+"</i></span>"+
			"</div>"+
			"<div class=\"dom\">"+
				"<p>Площадь участка<span>8,2 соток</span></p>"+
				"<b>Коттедж</b>"+
			"</div>"+
			"<table>"+
				"<tr><td>Общая площадь</td><td>125 кв.м.</td></tr>"+
				"<tr><td>Материал</td><td>Газобетон</td></tr>"+
				"<tr><td>Габариты</td><td>11,5 х 11,0 м </td></tr>"+
				"<tr><td>Этажность</td><td>2 этажа</td></tr>"+
				"<tr><td>Высота 1 этажа</td><td>3,0 м.</td></tr>"+
				"<tr><td>Высота мансардного этажа</td><td>1,6-3,6 м.</td></tr>"+
			"</table>"+
		"</div>"+
	"</div>"
			).css(css1).fadeIn();
			}
			else if (xhash == '140M'){
			$('.point').html("<div class=\"wrapp-status\">"+
			"<div class=\"left\">"+
			"<img src=\"images/tild3162-3035-4432-a430-306436653536__KOT_0732.jpg\" alt=\"foto\" />"+
			"<p class='coast'>"+paths[arr[this.id]].price+" млн. <i class='fa fa-rub'></i> - <span class='text--right'>Кирпич</span></p>"+
			"<p class='coast'>"+paths[arr[this.id]].priceSHT+" млн. <i class='fa fa-rub'></i> - <span class='text--right'>Штукатурка</span></p><p><span>(Дом, участок, коммуникации)<span></p>"+
		"</div>"+
		"<div class=\"right\">"+
			"<div class=\"status\"><p>Участок № "+paths[arr[this.id]].name+"</p>"+
				"<span>Статус<i class="+paths[arr[this.id]].color+">"+paths[arr[this.id]].status+"</i></span>"+
			"</div>"+
			"<div class=\"dom\">"+
				"<p>Площадь участка<span>8,2 соток</span></p>"+
				"<b>Коттедж</b>"+
			"</div>"+
			"<table>"+
				"<tr><td>Общая площадь</td><td>140 кв.м.</td></tr>"+
				"<tr><td>Материал</td><td>Газобетон</td></tr>"+
				"<tr><td>Габариты</td><td>10,1 х 11,5 м </td></tr>"+
				"<tr><td>Этажность</td><td>2 этажа</td></tr>"+
				"<tr><td>Высота 1 этажа</td><td>3,0 м.</td></tr>"+
				"<tr><td>Высота мансардного этажа</td><td>1,6-3,6 м.</td></tr>"+
			"</table>"+
		"</div>"+
	"</div>"
			).css(css1).fadeIn();
			}
			else if (xhash == '160M'){
			$('.point').html("<div class=\"wrapp-status\">"+
			"<div class=\"left\">"+
			"<img src=\"images/tild6463-3337-4535-b233-626236363239__66.jpg\" alt=\"foto\" />"+
			"<p class='coast'>"+paths[arr[this.id]].price+" млн. <i class='fa fa-rub'></i> - <span class='text--right'>Кирпич</span></p>"+
			"<p class='coast'>"+paths[arr[this.id]].priceSHT+" млн. <i class='fa fa-rub'></i> - <span class='text--right'>Штукатурка</span></p><p><span>(Дом, участок, коммуникации)<span></p>"+
		"</div>"+
		"<div class=\"right\">"+
			"<div class=\"status\"><p>Участок № "+paths[arr[this.id]].name+"</p>"+
				"<span>Статус<i class="+paths[arr[this.id]].color+">"+paths[arr[this.id]].status+"</i></span>"+
			"</div>"+
			"<div class=\"dom\">"+
				"<p>Площадь участка<span>8,2 соток</span></p>"+
				"<b>Коттедж</b>"+
			"</div>"+
			"<table>"+
				"<tr><td>Общая площадь</td><td>160 кв.м.</td></tr>"+
				"<tr><td>Материал</td><td>Газобетон</td></tr>"+
				"<tr><td>Габариты</td><td>10,9 х 13,0 м </td></tr>"+
				"<tr><td>Этажность</td><td>2 этажа</td></tr>"+
				"<tr><td>Высота 1 этажа</td><td>3,0 м.</td></tr>"+
				"<tr><td>Высота мансардного этажа</td><td>1,6-3,6 м.</td></tr>"+
			"</table>"+
		"</div>"+
	"</div>"
			).css(css1).fadeIn();
			}
			else if (xhash == '70MT'){
			$('.point').html("<div class=\"wrapp-status\">"+
			"<div class=\"left\">"+
			"<img src=\"images/tild3363-3966-4530-b635-373230313935__KOT_0577.jpg\" alt=\"foto\" />"+
			"<p class='coast'>"+paths[arr[this.id]].price+" млн. <i class='fa fa-rub'></i> - <span class='text--right'>Кирпич</span></p>"+
			"<p class='coast'>"+paths[arr[this.id]].priceSHT+" млн. <i class='fa fa-rub'></i> - <span class='text--right'>Штукатурка</span></p><p><span>(Дом, участок, коммуникации)<span></p>"+
		"</div>"+
		"<div class=\"right\">"+
			"<div class=\"status\"><p>Участок № "+paths[arr[this.id]].name+"</p>"+
				"<span>Статус<i class="+paths[arr[this.id]].color+">"+paths[arr[this.id]].status+"</i></span>"+
			"</div>"+
			"<div class=\"dom\">"+
				"<p>Площадь участка<span>8,2 соток</span></p>"+
				"<b>1/2 ТАУНХАУС</b>"+
			"</div>"+
			"<table>"+
				"<tr><td>Общая площадь</td><td>140 кв.м.</td></tr>"+
				"<tr><td>Материал</td><td>Газобетон</td></tr>"+
				"<tr><td>Габариты</td><td>10,1 х 11,5 м </td></tr>"+
				"<tr><td>Этажность</td><td>2 этажа</td></tr>"+
				"<tr><td>Высота 1 этажа</td><td>3,0 м.</td></tr>"+
				"<tr><td>Высота мансардного этажа</td><td>1,6-3,6 м.</td></tr>"+
			"</table>"+
		"</div>"+
	"</div>"
			).css(css1).fadeIn();
			}
			else if (xhash == '100MT'){
			$('.point').html("<div class=\"wrapp-status\">"+
			"<div class=\"left\">"+
			"<img src=\"images/tild6332-3033-4230-a239-313537386239__KOT_0897.jpg\" alt=\"foto\" />"+
			"<p class='coast'>"+paths[arr[this.id]].price+" млн. <i class='fa fa-rub'></i> - <span class='text--right'>Кирпич</span></p>"+
			"<p class='coast'>"+paths[arr[this.id]].priceSHT+" млн. <i class='fa fa-rub'></i> - <span class='text--right'>Штукатурка</span></p><p><span>(Дом, участок, коммуникации)<span></p>"+
		"</div>"+
		"<div class=\"right\">"+
			"<div class=\"status\"><p>Участок № "+paths[arr[this.id]].name+"</p>"+
				"<span>Статус<i class="+paths[arr[this.id]].color+">"+paths[arr[this.id]].status+"</i></span>"+
			"</div>"+
			"<div class=\"dom\">"+
				"<p>Площадь участка<span>8,2 соток</span></p>"+
				"<b>1/2 ТАУНХАУС</b>"+
			"</div>"+
			"<table>"+
				"<tr><td>Общая площадь</td><td>200 кв.м.</td></tr>"+
				"<tr><td>Материал</td><td>Газобетон</td></tr>"+
				"<tr><td>Габариты</td><td>10,1 х 11,5 м </td></tr>"+
				"<tr><td>Этажность</td><td>2 этажа</td></tr>"+
				"<tr><td>Высота 1 этажа</td><td>3,0 м.</td></tr>"+
				"<tr><td>Высота мансардного этажа</td><td>1,6-3,6 м.</td></tr>"+
			"</table>"+
		"</div>"+
	"</div>"
			).css(css1).fadeIn();
			}
			else if (xhash == '105MT'){
			$('.point').html("<div class=\"wrapp-status\">"+
			"<div class=\"left\">"+
			"<img src=\"images/tild6332-6530-4566-b166-393763363065__KOT_0770.jpg\" alt=\"foto\" />"+
			"<p class='coast'>"+paths[arr[this.id]].price+" млн. <i class='fa fa-rub'></i> - <span class='text--right'>Кирпич</span></p>"+
			"<p class='coast'>"+paths[arr[this.id]].priceSHT+" млн. <i class='fa fa-rub'></i> - <span class='text--right'>Штукатурка</span></p><p><span>(Дом, участок, коммуникации)<span></p>"+
		"</div>"+
		"<div class=\"right\">"+
			"<div class=\"status\"><p>Участок № "+paths[arr[this.id]].name+"</p>"+
				"<span>Статус<i class="+paths[arr[this.id]].color+">"+paths[arr[this.id]].status+"</i></span>"+
			"</div>"+
			"<div class=\"dom\">"+
				"<p>Площадь участка<span>8,2 соток</span></p>"+
				"<b>1/2 ТАУНХАУС</b>"+
			"</div>"+
			"<table>"+
				"<tr><td>Общая площадь</td><td>210 кв.м.</td></tr>"+
				"<tr><td>Материал</td><td>Газобетон</td></tr>"+
				"<tr><td>Габариты</td><td>10,1 х 11,5 м </td></tr>"+
				"<tr><td>Этажность</td><td>2 этажа</td></tr>"+
				"<tr><td>Высота 1 этажа</td><td>3,0 м.</td></tr>"+
				"<tr><td>Высота мансардного этажа</td><td>1,6-3,6 м.</td></tr>"+
			"</table>"+
		"</div>"+
	"</div>"
			).css(css1).fadeIn();
			}
			else if (xhash == 'EMPTY'){
			$('.point').html("<div class=\"wrapp-status\">"+
			"<div class=\"left\">"+
			"<img src=\"img/emptygrid.jpg\" alt=\"foto\" />"+
			"<p class='coast'>"+paths[arr[this.id]].price+" млн. <i class='fa fa-rub'></i> - <span class='text--right'>Кирпич</span></p>"+
			"<p class='coast'>"+paths[arr[this.id]].priceSHT+" млн. <i class='fa fa-rub'></i> - <span class='text--right'>Штукатурка</span></p><p><span>(участок, коммуникации)<span></p>"+
		"</div>"+
		"<div class=\"right\">"+
			"<div class=\"status\"><p>Участок № "+paths[arr[this.id]].name+"</p>"+
				"<span>Статус<i class="+paths[arr[this.id]].color+">"+paths[arr[this.id]].status+"</i></span>"+
			"</div>"+
			"<div class=\"dom\">"+
				"<p>Площадь участка<span>8,2 соток</span></p>"+
				"<b>Коттедж</b>"+
			"</div>"+
			"<table>"+
				"<tr><td>Общая площадь</td><td>210 кв.м.</td></tr>"+
				"<tr><td>Материал</td><td>Газобетон</td></tr>"+
				"<tr><td>Габариты</td><td>10,1 х 11,5 м </td></tr>"+
				"<tr><td>Этажность</td><td>2 этажа</td></tr>"+
				"<tr><td>Высота 1 этажа</td><td>3,0 м.</td></tr>"+
				"<tr><td>Высота мансардного этажа</td><td>1,6-3,6 м.</td></tr>"+
			"</table>"+
		"</div>"+
	"</div>"
			).css(css1).fadeIn();
			}
			else{
				$('.point').html("<div class=\"wrapp-status\">"+
				"<div class=\"left\">"+
						"<img src=\"img/emptygrid.jpg\" alt=\"foto\" />"+
						"<p>"+paths[arr[this.id]].price+"  рублей<span>(Дом, участок, коммуникации)</span></p>"+
					"</div>"+
					"<div class=\"right\">"+
						"<div class=\"status\"><p>Участок № "+paths[arr[this.id]].name+"</p>"+
							"<span>Статус<i class="+paths[arr[this.id]].color+">"+paths[arr[this.id]].status+"</i></span>"+
						"</div>"+
						"<div class=\"dom\">"+
							"<p>Площадь участка<span>8,2 соток</span></p>"+
							"<b>Таунхаус</b>"+
						"</div>"+
						"<table>"+
							"<tr><td>Общая площадь</td><td>100 кв.м. </td></tr>"+
							"<tr><td>Материал</td><td>Газобетон</td></tr>"+
							"<tr><td>Габариты	</td><td>5,7х10,3 м</td></tr>"+
							"<tr><td>Жилая площадь</td><td>143,9 кв. м.</td></tr>"+
							"<tr><td>Этажность	</td><td>0 этажа</td></tr>"+
							"<tr><td>Высота 1 этажа	</td><td>	3,0 м.</td></tr>"+
							"<tr><td>Высота мансардного этажа</td><td>1,4 - 3,6 м.</td></tr>"+
						"</table>"+
					"</div>"+
				"</div>"
			).css(css1).fadeIn();
			}
		}, function(){
			$('.point').fadeOut(1);
			// $('.map').fadeOut(1);//Скрытие блока map после ухода курсора с патча
		})
		.click(function(){
			document.location.hash = paths[arr[this.id]].sizetype;
			
			var xhash = paths[arr[this.id]].sizetype;
			//alert(xhash);
			if (xhash == '110M'){
				$('#popup-img').attr('src','img/plan-popup/110.jpg');
				$('.popup-text').text('В таком доме спокойно поместится семья из 5-6 человек. Большой плюс – много дополнительного функционального пространства: тамбур, кладовая, гардероб. Мансардный этаж и ассиметричное расположение окон придает этому дому интересный, современный внешний облик. Со второго этажа есть выход на балкон. Дополнительной изюминкой по вашему желанию может стать узор на кирпичной кладке!');
				$('#center1').fadeIn(1,function(){
					var This = $('#center1'); 
					$('.loading').fadeIn();
					// $('#video').find('video').attr('src','img/M.mp4');
					$('#center4').fadeIn();
					// var myPlayer = videojs('fly_html5_api');
					$('.loading').fadeOut(1, function(){
					// 	$('#video').fadeIn();
					// 	myPlayer.play();			
					});
					setTimeout(function(){
					for(var i in imagesS){
						$("<li><img src="+imagesS[i]+" /></li>").appendTo('.sliderS ul');
					}
					$("<div class='propertys'><h2>Коттедж 110 кв.м.</h2><p>Участок земли от 8.2 сот. Газифицирован</p><p><b>На участке:</b><br>Вода - скважина. Канализация - септик.</p><p><b>Электричество:</b><br>Дом подключен к энергоснабжению 15 кВт</p><p><b>Фундамент:<br></b>Буронабивные сваи > лента > монолитная плита<br>Глубина залегания 2.4 м</p><p><b>Стены:</b><br>Газобетонные блоки. Облицовка - керамический<br> кирпич(или штукатурка).<br>Толщина стен - 510 мм.</p><p><b>Перекрытия:</b><br>Деревянная балка 100Х200 мм.<br>возможны ж/б перекрытия</p><p><b>Кровля:</b><br>Металлочерепица, утепленная базальтовой плитой 200 мм</p></div>").appendTo('.sliderS li:first-child');
					This.find('.slider').addClass('animate');
					slider = This.find('.sliderS ul').bxSlider({
						minSlides:1,
						maxSlides:1,
						mode:'fade',
						pager: false,
						prevText:'',
						nextText:'',
						prevSelector:'.prev',
						nextSelector:'.next',
						moveSlides:1,
					})},0);
				});	
				$('.slide-menu').delay(1000).fadeIn();
			}
			else if (xhash == '125M'){
				$('#popup-img').attr('src','img/plan-popup/125.jpg');
				$('.popup-text').text('Это поистине роскошный просторный дом, который соберет под сводами своей крыши многочисленную семью из 5-6 человек. Кстати о крыше, в этом проекте она представлена в нескольких вариантах. Выбор зависит только от Вас – поддаться современным архитектурным течениям или выбрать старую добрую классику…');
				$('#center1').fadeIn(1,function(){
					var This = $('#center1'); 
					$('.loading').fadeIn();
					// $('#video').find('video').attr('src','img/M.mp4');
					$('#center4').fadeIn();
					// var myPlayer = videojs('fly_html5_api');
					$('.loading').fadeOut(10, function(){
						// $('#video').fadeIn();
						// myPlayer.play();			
					});
					setTimeout(function(){
					for(var i in imagesS){
						$("<li><img src="+imagesS[i]+" /></li>").appendTo('.sliderS ul');
					}
					$("<div class='propertys'><h2>Коттедж 125 кв.м.</h2><p>Участок земли от 8.2 сот. Газифицирован</p><p><b>На участке:</b><br>Вода - скважина. Канализация - септик.</p><p><b>Электричество:</b><br>Дом подключен к энергоснабжению 15 кВт</p><p><b>Фундамент:<br></b>Буронабивные сваи > лента > монолитная плита<br>Глубина залегания 2.4 м</p><p><b>Стены:</b><br>Газобетонные блоки. Облицовка - керамический<br> кирпич(или штукатурка).<br>Толщина стен - 510 мм.</p><p><b>Перекрытия:</b><br>Деревянная балка 100Х200 мм.<br>возможны ж/б перекрытия</p><p><b>Кровля:</b><br>Металлочерепица, утепленная базальтовой плитой 200 мм</p></div>").appendTo('.sliderS li:first-child');
					This.find('.slider').addClass('animate');
					slider = This.find('.sliderS ul').bxSlider({
						minSlides:1,
						maxSlides:1,
						mode:'fade',
						pager: false,
						prevText:'',
						nextText:'',
						prevSelector:'.prev',
						nextSelector:'.next',
						moveSlides:1,
					})},0);
				});
				$('.slide-menu').delay(1000).fadeIn();
			}
			else if (xhash == 'EMPTY'){
				// $('#popup-img').attr('src','img/empty..jpg');
				$('.popup-text').text('Оставьте заявку и мы с вами свяжемся!');
				$('#center1').fadeIn(1,function(){
					var This = $('#center1'); 
					$('.loading').fadeIn();
					// $('#video').find('video').attr('src','img/M.mp4');
					$('#center4').fadeIn();
					// var myPlayer = videojs('fly_html5_api');
					$('.loading').fadeOut(0, function(){
						// $('#video').hide();
						// myPlayer.play();			
					});
					setTimeout(function(){
					for(var i in imagesS){
						$("<li><img src="+imagesEmpty[i]+" /></li>").appendTo('.sliderS ul');
					}
					$("<div class='propertys'><h2>Коттедж 125 кв.м.</h2><p>Участок земли от 8.2 сот. Газифицирован</p><p><b>На участке:</b><br>Вода - скважина. Канализация - септик.</p><p><b>Электричество:</b><br>Дом подключен к энергоснабжению 15 кВт</p><p><b>Фундамент:<br></b>Буронабивные сваи > лента > монолитная плита<br>Глубина залегания 2.4 м</p><p><b>Стены:</b><br>Газобетонные блоки. Облицовка - керамический<br> кирпич(или штукатурка).<br>Толщина стен - 510 мм.</p><p><b>Перекрытия:</b><br>Деревянная балка 100Х200 мм.<br>возможны ж/б перекрытия</p><p><b>Кровля:</b><br>Металлочерепица, утепленная базальтовой плитой 200 мм</p></div>").appendTo('.sliderS li:first-child');
					This.find('.slider').addClass('animate');
					slider = This.find('.sliderS ul').bxSlider({
						minSlides:1,
						maxSlides:1,
						mode:'fade',
						pager: false,
						prevText:false,
						nextText:false,
						prevSelector: false,
						nextSelector:false,
						moveSlides:1,
					
					})},0);
				});
				$('.slide-menu').delay(1000).fadeIn();
				// $('.slide-menu #form').text('Забронировать участок');
				// $('#popup .popup-text').css('text-align', 'center');
				// $('#WebToLeadForm h3').text('Забронировать участок');
				// $('#WebToLeadForm .button').attr('value','Забронировать');
				$('#popup img').css('display', 'none');
				
			}
			else if (xhash == '125MG'){
				$('#popup-img').attr('src','img/plan-popup/125.jpg');
				$('.popup-text').text('Этот большой и современный дом, в котором удобно разместятся как минимум 5 человек. Здесь есть гостевые спальня и санузел, ведь на выходные в загородном доме очень часто остаются гости. А какая же загородная жизнь без автомобиля? В этом проекте как раз предусмотрен теплый гараж, войти в который можно прямо из дома. Теперь зимой ваша машина не замерзнет, да и о ржавчине можно забыть!');
				$('#center1').fadeIn(1,function(){
					var This = $('#center1'); 
					$('.loading').fadeIn();
					// $('#video').find('video').attr('src','img/M.mp4');
					$('#center4').fadeIn();
					// var myPlayer = videojs('fly_html5_api');
					$('.loading').fadeOut(10, function(){
						// $('#video').fadeIn();
						// myPlayer.play();			
					});
					setTimeout(function(){
					for(var i in imagesS){
						$("<li><img src="+imagesS[i]+" /></li>").appendTo('.sliderS ul');
					}
					$("<div class='propertys'><h2>Коттедж 125 кв.м.<br>с гаражом</h2><p>Участок земли от 8.2 сот. Газифицирован</p><p><b>На участке:</b><br>Вода - скважина. Канализация - септик.</p><p><b>Электричество:</b><br>Дом подключен к энергоснабжению 15 кВт</p><p><b>Фундамент:<br></b>Буронабивные сваи > лента > монолитная плита<br>Глубина залегания 2.4 м</p><p><b>Стены:</b><br>Газобетонные блоки. Облицовка - керамический<br> кирпич(или штукатурка).<br>Толщина стен - 510 мм.</p><p><b>Перекрытия:</b><br>Деревянная балка 100Х200 мм.<br>возможны ж/б перекрытия</p><p><b>Кровля:</b><br>Металлочерепица, утепленная базальтовой плитой 200 мм</p></div>").appendTo('.sliderS li:first-child');
					This.find('.slider').addClass('animate');
					slider = This.find('.sliderS ul').bxSlider({
						minSlides:1,
						maxSlides:1,
						mode:'fade',
						pager: false,
						prevText:'',
						nextText:'',
						prevSelector:'.prev',
						nextSelector:'.next',
						moveSlides:1,
					})},0);
				});
				$('.slide-menu').delay(1000).fadeIn();
			}
			else if (xhash == '125MF'){
				$('#popup-img').attr('src','img/plan-popup/125.jpg');
				$('.popup-text').text('Просторный дом, специально для тех, кто не хочет жить под мансардной крышей. Это дом с полным этажом для семьи из 5-6 человек. Сам по себе он выглядит очень внушительно и надежно, а благородный цвет немецкого облицовочного кирпича только добавляет ему красоты. Здесь предусмотрены большие окна, которых нет в домах с мансардой. Хозяева этого дома будут любоваться панорамой лесного пейзажа прямо из окна своей спальни.');
				$('#center1').fadeIn(1,function(){
					var This = $('#center1'); 
					$('.loading').fadeIn();
					// $('#video').find('video').attr('src','img/M.mp4');
					$('#center4').fadeIn();
					// var myPlayer = videojs('fly_html5_api');
					$('.loading').fadeOut(10, function(){
						// $('#video').fadeIn();
						// myPlayer.play();			
					});
					setTimeout(function(){
					for(var i in imagesS){
						$("<li><img src="+imagesS[i]+" /></li>").appendTo('.sliderS ul');
					}
					$("<div class='propertys'><h2>Коттедж 125 кв.м.<br>полных два этажа</h2><p>Участок земли от 8.2 сот. Газифицирован</p><p><b>На участке:</b><br>Вода - скважина. Канализация - септик.</p><p><b>Электричество:</b><br>Дом подключен к энергоснабжению 15 кВт</p><p><b>Фундамент:<br></b>Буронабивные сваи > лента > монолитная плита<br>Глубина залегания 2.4 м</p><p><b>Стены:</b><br>Газобетонные блоки. Облицовка - керамический<br> кирпич(или штукатурка).<br>Толщина стен - 510 мм.</p><p><b>Перекрытия:</b><br>Деревянная балка 100Х200 мм.<br>возможны ж/б перекрытия</p><p><b>Кровля:</b><br>Металлочерепица, утепленная базальтовой плитой 200 мм</p></div>").appendTo('.sliderS li:first-child');
					This.find('.slider').addClass('animate');
					slider = This.find('.sliderS ul').bxSlider({
						minSlides:1,
						maxSlides:1,
						mode:'fade',
						pager: false,
						prevText:'',
						nextText:'',
						prevSelector:'.prev',
						nextSelector:'.next',
						moveSlides:1,
					})},0);
				});
				$('.slide-menu').delay(1000).fadeIn();
			}
			else if (xhash == '140M'){
				$('#popup-img').attr('src','img/plan-popup/140.jpg');
				$('.popup-text').text('В таком доме поместится семья из 6-8 человек, и все они будут чувствовать себя прекрасно, ведь в нем целых 4 спальни по 13-16 квадратных метров каждая! Кроме того здесь есть два больших санузла. Это идеальное загородное жилье для гостеприимных хозяев. Современная планировка этого дома не может не радовать, да и внешне он выглядит очень необычно и стильно. Форму крыши и любую отделку можно подобрать на Ваш вкус!');
				$('#center1').fadeIn(1,function(){
					var This = $('#center1'); 
					$('.loading').fadeIn();
					// $('#video').find('video').attr('src','img/M.mp4');
					$('#center4').fadeIn();
					// var myPlayer = videojs('fly_html5_api');
					$('.loading').fadeOut(10, function(){
						// $('#video').fadeIn();
						// myPlayer.play();			
					});
					setTimeout(function(){
					for(var i in imagesS){
						$("<li><img src="+imagesS[i]+" /></li>").appendTo('.sliderS ul');
					}
					$("<div class='propertys'><h2>Коттедж 140 кв.м.</h2><p>Участок земли от 8.2 сот. Газифицирован</p><p><b>На участке:</b><br>Вода - скважина. Канализация - септик.</p><p><b>Электричество:</b><br>Дом подключен к энергоснабжению 15 кВт</p><p><b>Фундамент:<br></b>Буронабивные сваи > лента > монолитная плита<br>Глубина залегания 2.4 м</p><p><b>Стены:</b><br>Газобетонные блоки. Облицовка - керамический<br> кирпич(или штукатурка).<br>Толщина стен - 510 мм.</p><p><b>Перекрытия:</b><br>Деревянная балка 100Х200 мм.<br>возможны ж/б перекрытия</p><p><b>Кровля:</b><br>Металлочерепица, утепленная базальтовой плитой 200 мм</p></div>").appendTo('.sliderS li:first-child');
					This.find('.slider').addClass('animate');
					slider = This.find('.sliderS ul').bxSlider({
						minSlides:1,
						maxSlides:1,
						mode:'fade',
						pager: false,
						prevText:'',
						nextText:'',
						prevSelector:'.prev',
						nextSelector:'.next',
						moveSlides:1,
					})},0);
				});
				$('.slide-menu').delay(1000).fadeIn();
			}
			else if (xhash == '160M'){
				$('#popup-img').attr('src','img/plan-popup/160.jpg');
				$('.popup-text').text('Очень современный и практичный дом для 5-6 человек и одной машины. Хранение машины в теплом, пристроенном к дому гараже позволит продлить срок ее эксплуатации. Кроме того, в гараже есть кладовая, где можно хранить разный садовый инвентарь, это же очень удобно! Изюминка дома – огромная спальня на 2 этаже, из которой можно выйти на балкон и полюбоваться на ночное небо…');
				$('#center1').fadeIn(1,function(){
					var This = $('#center1'); 
					$('.loading').fadeIn();
					// $('#video').find('video').attr('src','img/M.mp4');
					$('#center4').fadeIn();
					// var myPlayer = videojs('fly_html5_api');
					$('.loading').fadeOut(10, function(){
						// $('#video').fadeIn();
						// myPlayer.play();			
					});
					setTimeout(function(){
					for(var i in imagesS){
						$("<li><img src="+imagesS[i]+" /></li>").appendTo('.sliderS ul');
					}
					$("<div class='propertys'><h2>Коттедж 160 кв.м.</h2><p>Участок земли от 8.2 сот. Газифицирован</p><p><b>На участке:</b><br>Вода - скважина. Канализация - септик.</p><p><b>Электричество:</b><br>Дом подключен к энергоснабжению 15 кВт</p><p><b>Фундамент:<br></b>Буронабивные сваи > лента > монолитная плита<br>Глубина залегания 2.4 м</p><p><b>Стены:</b><br>Газобетонные блоки. Облицовка - керамический<br> кирпич(или штукатурка).<br>Толщина стен - 510 мм.</p><p><b>Перекрытия:</b><br>Деревянная балка 100Х200 мм.<br>возможны ж/б перекрытия</p><p><b>Кровля:</b><br>Металлочерепица, утепленная базальтовой плитой 200 мм</p></div>").appendTo('.sliderS li:first-child');
					This.find('.slider').addClass('animate');
					slider = This.find('.sliderS ul').bxSlider({
						minSlides:1,
						maxSlides:1,
						mode:'fade',
						pager: false,
						prevText:'',
						nextText:'',
						prevSelector:'.prev',
						nextSelector:'.next',
						moveSlides:1,
					})},0);
				});
				$('.slide-menu').delay(1000).fadeIn();
			}
			else if (xhash == '70MT'){
				$('#popup-img').attr('src','img/plan-popup/70.jpg');
				$('.popup-text').text('Фундамент - Бетонные буронабивные сваи на 2,6 метра с ленточным ростверком. Стены - Газосиликатные блоки толщиной 375мм. Кровля - Двускатная по деревянным стропилам с утеплением базальтовой плитой 200мм., подшивкой свесов, и водосточной системой. Покрытие кровли – металлочерепица.	Пол первого этажа - монолитная бетонная плита с гильзами для ввода инженерных коммуникаций Перекрытия - деревянная балка 150*200мм. Окна - Monblank Nord 70 мм с 5-камерным стеклопакетом. Двери - металлические TOREX. Отмостка - УЖЕ выполнена в базе');
				$('#center1').fadeIn(1,function(){
					var This = $('#center1'); 
					$('.loading').fadeIn();
					// $('#video').find('video').attr('src','img/L.mp4');
					$('#center4').fadeIn();
					// var myPlayer = videojs('fly_html5_api');
					$('.loading').fadeOut(10, function(){
						// $('#video').fadeIn();
						// myPlayer.play();			
					});
					setTimeout(function(){
					for(var i in imagesL){
						$("<li><img src="+imagesL[i]+" /></li>").appendTo('.sliderS ul');
					}
					$("<div class='propertys'><h2>Таунхаус 140 кв.м.</h2><p>Участок земли от 8.2 сот. Газифицирован</p><p><b>На участке:</b><br>Вода - скважина. Канализация - септик.</p><p><b>Электричество:</b><br>Дом подключен к энергоснабжению 15 кВт</p><p><b>Фундамент:<br></b>Буронабивные сваи > лента > монолитная плита<br>Глубина залегания 2.4 м</p><p><b>Стены:</b><br>Газобетонные блоки. Облицовка - керамический<br> кирпич(или штукатурка).<br>Толщина стен - 510 мм.</p><p><b>Перекрытия:</b><br>Деревянная балка 100Х200 мм.<br>возможны ж/б перекрытия</p><p><b>Кровля:</b><br>Металлочерепица, утепленная базальтовой плитой 200 мм</p></div>").appendTo('.sliderS li:first-child');
					This.find('.slider').addClass('animate');
					slider = This.find('.sliderS ul').bxSlider({
						minSlides:1,
						maxSlides:1,
						mode:'fade',
						pager: false,
						prevText:'',
						nextText:'',
						prevSelector:'.prev',
						nextSelector:'.next',
						moveSlides:1,
					})},0);
				});
				$('.slide-menu').delay(1000).fadeIn();
			}
			else if (xhash == '100MT'){
				$('#popup-img').attr('src','img/plan-popup/200.jpg');
				$('.popup-text').text('Альтернатива 3-х комнатной квартиры имеет 8,2 соток собственной земли. Вам больше не нужно будет платить коммунальные платежи. В проект входит скважина с паспортом, и септик с перерабатываемой мощностью 1 тонна в час. Мы ставим качественное оборудование и даем на него гарантию. Так же по проекту уже подведено электричество по 15 кв в каждую половинку и есть возможность подключения газа. На первом этаже расположились полноценная кухня, просторная гостиная, холл, гардеробная, санузел, а так же тамбур и кладовая. Второй этаж имеет полноценный сан. узел а так же 3 просторные спальные комнаты.');
				$('#center1').fadeIn(1,function(){
					var This = $('#center1'); 
					$('.loading').fadeIn();
					// $('#video').find('video').attr('src','img/L.mp4');
					$('#center4').fadeIn();
					// var myPlayer = videojs('fly_html5_api');
					$('.loading').fadeOut(10, function(){
						// $('#video').fadeIn();
						// myPlayer.play();			
					});
					setTimeout(function(){
					for(var i in imagesL){
						$("<li><img src="+imagesL[i]+" /></li>").appendTo('.sliderS ul');
					}
					$("<div class='propertys'><h2>Таунхаус 200 кв.м.</h2><p>Участок земли от 8.2 сот. Газифицирован</p><p><b>На участке:</b><br>Вода - скважина. Канализация - септик.</p><p><b>Электричество:</b><br>Дом подключен к энергоснабжению 15 кВт</p><p><b>Фундамент:<br></b>Буронабивные сваи > лента > монолитная плита<br>Глубина залегания 2.4 м</p><p><b>Стены:</b><br>Газобетонные блоки. Облицовка - керамический<br> кирпич(или штукатурка).<br>Толщина стен - 510 мм.</p><p><b>Перекрытия:</b><br>Деревянная балка 100Х200 мм.<br>возможны ж/б перекрытия</p><p><b>Кровля:</b><br>Металлочерепица, утепленная базальтовой плитой 200 мм</p></div>").appendTo('.sliderS li:first-child');
					This.find('.slider').addClass('animate');
					slider = This.find('.sliderS ul').bxSlider({
						minSlides:1,
						maxSlides:1,
						mode:'fade',
						pager: false,
						prevText:'',
						nextText:'',
						prevSelector:'.prev',
						nextSelector:'.next',
						moveSlides:1,
					})},0);
				});
				$('.slide-menu').delay(1000).fadeIn();
			}
			else if (xhash == '105MT'){
				$('#popup-img').attr('src','img/plan-popup/210.jpg');
				$('.popup-text').text('Доступный таунхаус альтернатива 3 комнатной квартиры. Вам больше не нужно будет платить за коммунальные платежи. В проект входит скважина с паспортом, и септик с перерабатываемой мощностью 1 тонна в час. Мы ставим качественное оборудование и даем на него гарантию. Так же по проекту уже подведено электричество по 15 кв и есть возможность подключения газа. На первом этаже расположились объемная кухня-гостиная, где вы можете устраивать семейные завтраки и ужины. Просторная комната для ваших гостей или родителей, холл и санузел. Второй этаж уютное место для отдыха. Имеет 2 спальные комнаты которые могут стать детскими и одну гостиную или комнату родителей. Так же на втором этаже для удобства есть второй сан. узел.');
				$('#center1').fadeIn(1,function(){
					var This = $('#center1'); 
					$('.loading').fadeIn();
					// $('#video').find('video').attr('src','img/L.mp4');
					$('#center4').fadeIn();
					// var myPlayer = videojs('fly_html5_api');
					$('.loading').fadeOut(10, function(){
						// $('#video').fadeIn();
						// myPlayer.play();			
					});
					setTimeout(function(){
					for(var i in imagesL){
						$("<li><img src="+imagesL[i]+" /></li>").appendTo('.sliderS ul');
					}
					$("<div class='propertys'><h2>Коттедж 210 кв.м.</h2><p>Участок земли от 8.2 сот. Газифицирован</p><p><b>На участке:</b><br>Вода - скважина. Канализация - септик.</p><p><b>Электричество:</b><br>Дом подключен к энергоснабжению 15 кВт</p><p><b>Фундамент:<br></b>Буронабивные сваи > лента > монолитная плита<br>Глубина залегания 2.4 м</p><p><b>Стены:</b><br>Газобетонные блоки. Облицовка - керамический<br> кирпич(или штукатурка).<br>Толщина стен - 510 мм.</p><p><b>Перекрытия:</b><br>Деревянная балка 100Х200 мм.<br>возможны ж/б перекрытия</p><p><b>Кровля:</b><br>Металлочерепица, утепленная базальтовой плитой 200 мм</p></div>").appendTo('.sliderS li:first-child');
					This.find('.slider').addClass('animate');
					slider = This.find('.sliderS ul').bxSlider({
						minSlides:1,
						maxSlides:1,
						mode:'fade',
						pager: false,
						prevText:'',
						nextText:'',
						prevSelector:'.prev',
						nextSelector:'.next',
						moveSlides:1,
					})},0);
				});
				$('.slide-menu').delay(1000).fadeIn();
			}
			else{
				$('#popup-img').attr('src','img/plan-popup/140.jpg');
				$('.popup-text').text('Двухэтажный дом на две семьи (дуплекс) в классическом стиле общей площадью 100 м2 с земельным участком площадью 8,2 соток. Планировка коттеджа включает в себя просторную гостиную-столовую на первом этаже, три спальни на втором этаже и просторную ванную комнату. Возможны индивидуальные планировки.');
				$('#center1').fadeIn(1,function(){
					var This = $('#center1');
					$('.loading').fadeIn();
					// $('#video').find('video').attr('src','img/M.mp4');
					// var myPlayer = videojs('fly_html5_api');
					$('#center4').fadeIn();
					$('.loading').fadeOut(10, function(){
						// $('#video').fadeIn();
						// myPlayer.play();			
					});
					setTimeout(function(){
						for(var i in imagesL){
							$("<li><img src="+imagesL[i]+" /></li>").appendTo('.sliderL ul');
						}
						This.find('.slider').addClass('animate');
						slider = This.find('.sliderL ul').bxSlider({
							minSlides:1,
							maxSlides:1,
							mode:'fade',
							pager: false,
							prevText:'',
							nextText:'',
							prevSelector:'.prev',
							nextSelector:'.next',
							moveSlides:1,
						})},0);
				});
				$('.slide-menu').delay(1000).fadeIn();
			}
		});		
	}
	$('#becap').click(function(){
		slider.destroySlider();
		$('.slide-menu').fadeOut();
		// $('#video').fadeOut();
		$('#popup-img').removeAttr('src');
		$('.wrapp-info').fadeOut();
		$('.slider ul li').remove();
		$('.slider').removeClass('animate');
		$('#popup img').css('display', 'block');
		
		return false;
	});			
});

