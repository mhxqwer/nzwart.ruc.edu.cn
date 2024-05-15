$(function(){
	var oDiv = $("#play");  //外部盒子
	var count = $("#play ul li").length;  //内部图片数量
	var countwidth = $("#play ul li").width();  //图片边框宽度
	var oUl = $("#play ul").css("width",count*countwidth);  //ul li总宽度
	var now = 0;
	var next = $("#next");
	var prev = $("#prev");
	//点击按钮数量
	for(var i = 0; i < count; i++){
		$("#play ol").append("<li>" + Number(i+1) + "</li>");
		$("#play ol li:first").addClass("active");
	}
	//左右点击图片获取
	var nI = $("#play ul li:nth-child(2)").find("img").attr("src");
	$(".nextImg img").attr("src",nI);
	var pI = $("#play ul li:last-child").find("img").attr("src");
	$(".prevImg img").attr("src",pI);
	//按钮点击事件
	var aBtn = $("#play ol li");
	aBtn.each(function(index){
		$(this).mouseenter(function(){
			clearInterval(timer);
			tab(index);
			nextImg();
			prevImg();
			timer=setInterval(autoRun,4000);
		});
	});
	//图片循环事件
	function tab(index){
		now = index;
		aBtn.removeClass("active");
		aBtn.eq(index).addClass("active");
		oUl.stop(true,false).animate({"left":-countwidth * now},1000);
	}
	//下一张按钮图片切换
	function nextImg(){
		var d = $("#play ul li").find("img").eq(now+1).attr("src");
		var nI = $("#play ul li:nth-child(1)").find("img").attr("src");
		$(".nextImg").find("img").attr("src",d);
		if(now==count-1){
			$(".nextImg").find("img").attr("src",nI);
		}
	}
	//上一张图片按钮切换
	function prevImg(){
		var f = $("#play ul li").find("img").eq(now-1).attr("src");
		$(".prevImg").find("img").attr("src",f);
	}
	
	//下一张点击事件
	next.mouseenter(function(){
		clearInterval(timer);
		now++;
		if(now==count){
			now=0;
		}
		tab(now);
		nextImg();
		prevImg();
		timer=setInterval(autoRun, 4000);
	});
	//上一张点击事件
	prev.mouseenter(function(){
		clearInterval(timer);
		now--;
		if(now==-1){
			now=count-1;
		}
		tab(now);
		nextImg();
		prevImg();
		timer=setInterval(autoRun, 4000);
	});
	//自动轮播定义
	function autoRun(){
		now++;
		if(now==count){
			now=0;
		}
		tab(now);
		nextImg();
		prevImg();
	};
	var timer=setInterval(autoRun, 4000);
});

// 7.27新增
$(function(){
	var oDiv = $("#play2");  //外部盒子
	var count = $("#play2 ul li").length;  //内部图片数量
	var countwidth = $("#play2 ul li").width();  //图片边框宽度
	var oUl = $("#play2 ul").css("width",count*countwidth);  //ul li总宽度
	var now = 0;
	var next = $("#next2");
	var prev = $("#prev2");
	//点击按钮数量
	for(var i = 0; i < count; i++){
		$("#play2 ol").append("<li>" + Number(i+1) + "</li>");
		$("#play2 ol li:first").addClass("active");
	}
	//左右点击图片获取
	var nI = $("#play2 ul li:nth-child(2)").find("img").attr("src");
	$(".nextImg img").attr("src",nI);
	var pI = $("#play2 ul li:last-child").find("img").attr("src");
	$(".prevImg img").attr("src",pI);
	//按钮点击事件
	var aBtn = $("#play2 ol li");
	aBtn.each(function(index){
		$(this).click(function(){
			clearInterval(timer);
			tab(index);
			nextImg();
			prevImg();
			timer=setInterval(autoRun,4000);
		});
	});
	//图片循环事件
	function tab(index){
		now = index;
		aBtn.removeClass("active");
		aBtn.eq(index).addClass("active");
		oUl.stop(true,false).animate({"left":-countwidth * now},1000);
	}
	//下一张按钮图片切换
	function nextImg(){
		var d = $("#play2 ul li").find("img").eq(now+1).attr("src");
		var nI = $("#play2 ul li:nth-child(1)").find("img").attr("src");
		$(".nextImg").find("img").attr("src",d);
		if(now==count-1){
			$(".nextImg").find("img").attr("src",nI);
		}
	}
	//上一张图片按钮切换
	function prevImg(){
		var f = $("#play2 ul li").find("img").eq(now-1).attr("src");
		$(".prevImg").find("img").attr("src",f);
	}

	//下一张点击事件
	next.click(function(){
		clearInterval(timer);
		now++;
		if(now==count){
			now=0;
		}
		tab(now);
		nextImg();
		prevImg();
		timer=setInterval(autoRun, 4000);
	});
	//上一张点击事件
	prev.click(function(){
		clearInterval(timer);
		now--;
		if(now==-1){
			now=count-1;
		}
		tab(now);
		nextImg();
		prevImg();
		timer=setInterval(autoRun, 4000);
	});
	//自动轮播定义
	function autoRun(){
		now++;
		if(now==count){
			now=0;
		}
		tab(now);
		nextImg();
		prevImg();
	}
	var timer=setInterval(autoRun, 4000);
});
// left
$(function(){
	$('.play').each(function(index, el) {
		var $playwid = $(this).width();
		var $playolwid = $(this).find('ol').width();
		var $playolleft = ($playwid - $playolwid + 12) / 2;
		$(this).find('ol').css('left', $playolleft+ 'px');
});
});
// 7.27新增 end

// 搜索框
;( function( window ) {
	
	'use strict';
	
	// EventListener | @jon_neal | //github.com/jonathantneal/EventListener
	!window.addEventListener && window.Element && (function () {
	   function addToPrototype(name, method) {
		  Window.prototype[name] = HTMLDocument.prototype[name] = Element.prototype[name] = method;
	   }
	 
	   var registry = [];
	 
	   addToPrototype("addEventListener", function (type, listener) {
		  var target = this;
	 
		  registry.unshift({
			 __listener: function (event) {
				event.currentTarget = target;
				event.pageX = event.clientX + document.documentElement.scrollLeft;
				event.pageY = event.clientY + document.documentElement.scrollTop;
				event.preventDefault = function () { event.returnValue = false };
				event.relatedTarget = event.fromElement || null;
				event.stopPropagation = function () { event.cancelBubble = true };
				event.relatedTarget = event.fromElement || null;
				event.target = event.srcElement || target;
				event.timeStamp = +new Date;
	 
				listener.call(target, event);
			 },
			 listener: listener,
			 target: target,
			 type: type
		  });
	 
		  this.attachEvent("on" + type, registry[0].__listener);
	   });
	 
	   addToPrototype("removeEventListener", function (type, listener) {
		  for (var index = 0, length = registry.length; index < length; ++index) {
			 if (registry[index].target == this && registry[index].type == type && registry[index].listener == listener) {
				return this.detachEvent("on" + type, registry.splice(index, 1)[0].__listener);
			 }
		  }
	   });
	 
	   addToPrototype("dispatchEvent", function (eventObject) {
		  try {
			 return this.fireEvent("on" + eventObject.type, eventObject);
		  } catch (error) {
			 for (var index = 0, length = registry.length; index < length; ++index) {
				if (registry[index].target == this && registry[index].type == eventObject.type) {
				   registry[index].call(this, eventObject);
				}
			 }
		  }
	   });
	})();


	function mobilecheck() {
		var check = false;
		(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}
	

	!String.prototype.trim && (String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, '');
	});

	function UISearch( el, options ) {	
		this.el = el;
		this.inputEl = el.querySelector( 'form > input.sb-search-input' );
		this._initEvents();
	}

	UISearch.prototype = {
		_initEvents : function() {
			var self = this,
				initSearchFn = function( ev ) {
					ev.stopPropagation();
					// trim its value
					self.inputEl.value = self.inputEl.value.trim();
					
					if( !classie.has( self.el, 'sb-search-open' ) ) { // open it
						ev.preventDefault();
						self.open();
					}
					else if( classie.has( self.el, 'sb-search-open' ) && /^\s*$/.test( self.inputEl.value ) ) { // close it
						ev.preventDefault();
						self.close();
					}
				}

			this.el.addEventListener( 'mouseenter', initSearchFn );
			this.el.addEventListener( 'touchstart', initSearchFn );
			this.inputEl.addEventListener( 'mouseenter', function( ev ) { ev.stopPropagation(); });
			this.inputEl.addEventListener( 'touchstart', function( ev ) { ev.stopPropagation(); } );
		},
		open : function() {
			var self = this;
			classie.add( this.el, 'sb-search-open' );
			// focus the input
			if( !mobilecheck() ) {
				this.inputEl.focus();
			}
			// close the search input if body is mouseentered
			var bodyFn = function( ev ) {
				self.close();
				this.removeEventListener( 'mouseenter', bodyFn );
				this.removeEventListener( 'touchstart', bodyFn );
			};
			document.addEventListener( 'mouseenter', bodyFn );
			document.addEventListener( 'touchstart', bodyFn );
		},
		close : function() {
			this.inputEl.blur();
			classie.remove( this.el, 'sb-search-open' );
		}
	}

	// add to global namespace
	window.UISearch = UISearch;

} )( window );
// 选择语言
jQuery.divselect=function(divselectid,inputselectid){
	var inputselect=$(inputselectid);
	$(divselectid+" cite").click(function(){
		var ul=$(divselectid+" ul");
		if(ul.css("display")=="none"){
			ul.slideDown("fast")}
			else{ul.slideUp("fast")}
		});
	$(divselectid+" ul li a").click(function(){
		var txt=$(this).text();
		$(divselectid+" cite").html(txt);
		var value=$(this).attr("selectid");
		inputselect.val(value);
		$(divselectid+" ul").hide()
	});
};
$(function(){$.divselect("#divselect","#inputselect")});
$(document).ready(function(){
		$(".nav>ul li").mouseover(function(){
			$(this).find("a").addClass("click").siblings(".dorp").show();
		});
		$(".nav>ul li").mouseout(function(){
			$(this).find("a").removeClass("click").siblings(".dorp").hide();
		});
		$(".box").mouseover(function(){
			$(this).siblings(".box").find(".red_cover").removeClass("chose");
			$(this).find(".red_cover").addClass("chose");
		});
		$(".bix").mouseover(function(){
			$(this).find(".name span,.name p").css("color","#a40000");
		});
		$(".bix").mouseout(function(){
			$(this).find(".name span").css("color","#333").siblings(".name p").css("color","#666");
		});
	});
    $(function(){
    /*tab标签切换*/

		var state = {
			lastInd:0,
			ind : 0,
			timer:null,
			delay:4000,//轮播间隔ms
			len:4//轮播个数
		};

		function tabs(tabTit, on, tabCon) {
			$(tabCon).each(function () {
				$(this).children().eq(state.ind).show();
			});
			$(tabTit).each(function () {
				$(this).children().eq(state.ind).addClass(on);
			});


			state.timer = setTimeout(function () {
				state.lastInd = state.ind;
				state.ind = 1;
				dochange();
			},state.delay);


			$(tabTit).children().mouseenter(function () {
				state.lastInd = state.ind;
				state.ind = $(tabTit).children().index(this);
				dochange();
			});


			function dochange() {
				var $thisT = $(tabTit).children().eq(state.ind);
				$thisT.addClass(on).siblings().removeClass(on);
				var $thisB = $(tabCon).children().eq(state.ind);
				var $thisBLast = $(tabCon).children().eq(state.lastInd);
				$thisBLast.fadeOut(function () {
					$thisB.fadeIn();
				});


				if(state.timer){
					clearTimeout(state.timer);
					state.timer = null;
				}
				state.timer = setTimeout(function (){
					state.timer = null;
					state.lastInd = state.ind;
					state.ind++;
					state.ind = (state.ind>=state.len)?0:state.ind;
					dochange();
				},state.delay);
			}

		}

	tabs(".investment_title","on",".investment_con");

 });
