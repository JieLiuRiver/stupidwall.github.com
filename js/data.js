var T1 = 'E';
var D1 = '绑定、移除、触发事件';
var C1 = "E = {<br>add : function( e,type,fn ){<br> if( e.addEventListener ){ <br> e.addEventListener(type,fn,false);<br>}else if(e.attachEvent){<br>e.attachEvent('on'+type,function(){fn.call(e);});<br>}else{<br>e['on'+type] = fn;<br>}}, <br>remove : function(e,type,fn){ <br>if( e.removeEventListener ){<br>e.removeEventListener(e,type,false)<br>}else if(e.detachEvent){<br>e.detachEvent('on'+type,function(){<br>fn.call(e);<br>})}else{ <br>e['on'+type] = null;<br>}}, <br>dispatch : function(e, type){<br>if( e.addEventListener ){<br>try{var event = document.createEvent('Event');<br>event.initEvent(type,ture,ture);<br>e.dispatchEvent(event);}catch(e){console.log(e);<br>}}else{<br>try{e.fileEvent('on'+type);<br>}catch(e){<br>console.log(e);<br>}}}}";

// ==========================================================================//
var T2 = "Delegate()";
var D2 = '事件委托';
var C2 = "function delegate( obj, sel, type, fn ){<br>if( obj.addEventlistener ){<br>obj.addEventListener(type,fnEvent,false);<br>}else{<br>obj.attach(on+'type',fnEvent);<br>}<br>function fnEvent(ev){<br>var ev = ev || window.event;<br>var target = ev.target || ev.srcElement;<br>if( machSel(target, sel) ){<br>if( fn ){<br>fn.call(target);<br>}<br>}<br>}<br>function machSel(e, sel){<br>if( sel.charAt(0) === '#' ){<br>return e.id === sel.slice(1)<br>}<br>if( sel.charAt(0) == '.' ){<br>var sel = sel.slice(1);<br>var classN = e.className;<br>return classN.indexOf('sel') != -1<br>}<br>var tagN = e.tagName.toLowerCase();<br>var sel  = sel.toLowerCase();<br>return tagN === sel;<br>}<br>}<br>";


// ==========================================================================//
var T3 = "Async JS";
var D3 = '异步加载JS';
var C3 = "(function(path){<br>var _script = document.createElement('script');<br>var _script2 = document.getElementsByTagName('script')[0];<br>_script.type= 'text/javascript';<br>_script.async = true;<br>_script.src =path;<br>_script2.parentNode.insertBefore(_script, _script2);<br>})('./index.js')";


// ==========================================================================//
var T4 = "Bind()";
var D4 = '上下文指向';
var C4 = " if( !Function.prototype.bind ){<br>Function.prototype.bind = function(obj){<br>var _this = this;<br>var args = arguments;<br>return function(){<br>var args2 = [];<br>for(var i=0;i<args.length;i++){<br>args2.psh( args[i] );<br>}<br>for(var i=0; i<arguments.length;i++){<br>args2.push(arguments[i]);<br>}<br>return _this.apply(obj,args2);<br>}<br> }<br>}";


// ==========================================================================//
var T5 = "ClearRepeat()";
var D5 = '数组去重';
var C5= "function clearRepeat( arr ){<br>var json = {},<br>len = arr.length,<br> result = [];<br>for(var i=0;i<len; i++){<br>if( !json[ arr[i] ] ){   <br>json[ arr[i] ] = true;<br>result.push( a[i] );<br>}<br>}<br>return result;<br> }";


// ==========================================================================//
var T6 = "Throttle()";
var D6 = '函数节流';
var C6= "window.onresize = function(){<br>handerWork();<br>}<br>function work(){<br>document.title++;<br>}<br>var handerWork = throttle(work,200);<br>function throttle(fn, delay){<br>var timer = null;<br>return function(){<br>var context = this;<br>args = arguments;<br>clearTimeout(timer);<br>timer = setTimeout(function(){<br>fn.apply(context, args);<br>},delay)<br>}<br>}";

// ==========================================================================//
var T7 = "Class inherited ";
var D7 = '类似继承';
var C7= "function Fn_Parent(){<br>this.str = 'HelloWord';<br> }<br>Fn_Parent.prototype.show = function(){<br>alert( this.str );<br> }<br> function Fn_Child(){<br>Fn_Parent.call( this );<br> }<br>var  Fn = function(){};<br>Fn.prototype = Fn_Parent.prototype;<br>Fn_Child.prototype = new Fn();<br>Fn_Child.prototype.constructor = Fn_Child;";

// ==========================================================================//
var T8 = " Object-oriented props";
var D8 = '面向对象属性';
var C8= "a、判断私有属性<br> arr.hasOwnProperty('x');  true--x是arr下的私有属性； false--x不是arr下的私有属性<br> b、arr.constructor == Array  //true ---实例对象arr的构造函数是Array<br>c、arr1.instanceof Array;  // 实例对象arr1与Array，true -原形链上有关系<br>d、 var x;<br>  if( Object.prototype.toString.call(x) == '[object Array]' ){<br>alert('x是数组')<br> }";


// ==========================================================================//
var T9= " JSONP";
var D9 = '跨域请求';
var C9= "var oScript = document.createElement('script');<br>   oScript.src ='data.php?callback=fn2';<br> document.body.appendChild(oScript);<br> function fn2( data ){<br> for( var i=0; i<data.length; i++ ){<br> xxxx<br>}<br> }<br> data.php:<br> $arr = array('1','2','3','4');<br> $callback = isset( $_GET['callback'] ) ? $_GET['callback'] :  'fn';<br> echo '$callback('. json_encode($arr) .')';}";

// ==========================================================================//
var T10= " Cookie";
var D10 = '关于Cookie';
var C10= "<br> function setCookie(key,value,t){<br>var  date = new Date();<br>date.setDate( date.getDate() + t );<br>document.cookie = key + '='+ value+';expires=' + date.toGMTString();<br> }<br><br> function getCookie( key ){<br>var arr = document.cookie.split(';');<br>for(var i=0;i<arr.length;i++){<br>var _arr = arr[i].split('=');<br>if( _arr[0] == key ){<br>return  decodeURI( _arr[1] );<br>}<br>}<br>}<br><br>function removeCookie( key ){<br>setCookie(key, '', -1);<br>}";

// ==========================================================================//
var T11= " Ajax()";
var D11 = '异步无刷新更新';
var C11= "var Ajax = function( url, opt){ <br>return function request( url, opt ){<br>var opts = {<br>async : true,<br>method : 'GET',<br>data : null,<br>success : function(){},<br>failure : function(){}<br>}<br><br>extend( opts, opt );<br>var method = opts.method.toUpperCase();<br>if( method == 'GET' && opts.data ){<br>url += (url.indexOf('?') == -1 ?  '?' : '&' )  + opts.data;<br>opts.data = null;<br>}<br>var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');<br>xhr.onreadystatechange = function(){<br>if(xhr.readyState == 4){<br> var s = xhr.status;<br>if(s>= 200 && s < 300){<br> opts. success(xhr);<br>  }else{<br> opts. failure(xhr);<br> }<br> }else{}<br>}<br>xhr.open( method, url, opts.async );<br>if( method == 'POST' ){<br>xhr.setRequestHeader( 'Content-type', 'application/x-www/form-urlencoded' );<br>}<br>xhr.send( opts.data );<br>return xhr;<br>}<br>function extend(obj1, obj2){<br>for( var attr in obj2 ){<br>obj1[attr] = obj2[attr]<br>}<br>}<br>}();<br>==================================<br>jQuery:<br><br>load()<br><br>var option = {<br>name : $(''#txtName').val()<br> };<br>$('#content').load('server.php',option);<br><br><br>$.get()<br><br>var option = { name :$('#txtName').val() };<br>$.get('server.php', option, fnBack, 'html');<br>function fnBack(data){<br> console.log(data);<br>$('#content').html(data);<br>}<br><br><br>$.ajax()<br><br>$.ajax({<br>url : 'server.php',<br>type : 'post',<br>dataType : 'json',<br> data : { name : $('#txtName').val() },<br>success : function(data){<br>console.log( data );<br> },<br>error : function(msg){<br>console.error( msg );<br> }<br>});";


// ==========================================================================//
var T12= " Clone()";
var D12 = '深度克隆对象';
var C12= "function clone( obj ){<br>var objNeed;<br>if( obj instanceof Array ){<br>objNeed  = [];<br>var len = obj.length;<br>for( var i=0;i<len;i++ ){<br>objNeed[i] = clone( obj[i] );<br>}<br>return objNeed;<br>}else if( obj instanceof Object ){<br>objNeed = {};<br>for( var attr in obj ){<br>objNeed[attr] = clone( obj[attr] );<br>}<br>return objNeed;<br>}else {<br>return obj;<br>}<br>}";


// ==========================================================================//
var T13= " CalLen";
var D13 = '获取字符串字节长度';
var C13= "var calLen = function(str){<br>returnreturn str.replace(/[^x00-xFF]/g,'**').length;<br>};";

// ==========================================================================//
var T14= " Trim";
var D14= '去掉前后空格';
var C14= "function trim(str){ <br>if( str && typeof str === 'string' ){<br>return str.replace( /(^\s*)|(\s*)$/g,'' );<br>}<br>}";


// ==========================================================================//
var T15= " TransF";
var D15= '驼峰';
var C15= "String.prototype.transform = function(){ <br>var re=/-(\w)/g; <br>return this.replace(re,function(){ <br>var args=arguments; <br>return args[1].toUpperCase(); <br>}) <br>} <br><br>alert('hello-world'.transform()); ";


// ==========================================================================//
var T16= " Class array";
var D16= '类数组转数组';
var C16= "var newArr = Array.prototype.slice.call( arguments );<br>newArr.unshift(test); ";

// ==========================================================================//
var T17= " GetByClass";
var D17= 'class获取元素';
var C17= "var getByClass = function( Parent, Class ){ <br>var aE = Parent.getELementsByTagName('*');<br>var arrNeed = [];<br>for( var i=0; i<aE.length; i++ ){<br>if( aE[i].className == Class ){<br>arrNeed.push( aE[i] );<br>}<br>}<br>return arrNeed;<br>}";

// ==========================================================================//
var T18= " Add/Remove Class";
var D18= '添加/移除class';
var C18= "var AddClass = function (obj, sClass) { <br>var aClass = obj.className.split(' ');<br>if (!obj.className) {<br> obj.className = sClass;<br> return;<br>  }<br> for (var i = 0; i < aClass.length; i++) {<br> if (aClass[i] === sClass) return;<br>  }<br> obj.className += ' ' + sClass;<br>  }<br><br>  var  removeClass = function (obj, sClass) {<br> var aClass = obj.className.split(' ');<br>  if (!obj.className) return;<br> for (var i = 0; i < aClass.length; i++) {<br> if (aClass[i] === sClass) {<br>  aClass.splice(i, 1);<br>obj.className = aClass.join(' ');<br> break;<br>  }<br>  }<br> }";


// ==========================================================================//
var T19= " getPos";
var D19= '获取绝对offset';
var C19= " var getPos = function( obj ){ <br> var pos = 	{ left:0,top:0 }<br> while( obj ){<br> pos.left += obj.offsetLeft;<br>  pos.top += obj.offsetTop;<br> obj = obj.offsetParent;<br> }<br> return pos;<br> }";

// ==========================================================================//
var T20= " getStyle";
var D20= '获取元素样式';
var C20= "var  getStyle = function( obj,attr ){   <br>if( obj.currentStyle ){<br> return obj.currentStyle[attr]  <br> }else{<br> return getComputedStyle(obj )[attr]<br> }<br>   }";

// ==========================================================================//
var T21= " getXYByDeg";
var D21= '根据角度、半径，获取对应的xy值';
var C21= "var  getXYByDeg = function(iDeg,iRadius){ <br> if(iDeg==0)<br> {<br> return {x:0,y:iRadius};<br>   }<br> else if(iDeg==90)<br>  {<br> return {x:iRadius,y:0};<br>  }<br>  return {x:Math.sin(iDeg*Math.PI/180)*iRadius,y:Math.cos(iDeg*Math.PI/180)*iRadius};<br>  }";

// ==========================================================================//
var T22= " SetCss";
var D22= '解决内核前缀兼容';
var C22= "var setCss = function(obj,oAttr){ <br>  var sName=''; <br>  var aName=['Webkit','Moz,'O']; <br> for(sName in oAttr) <br>   { <br>  if(sName.charAt(0)==='$') <br> { <br>  for(var i=0;i<aName.length;i++) <br>   { <br>  obj.style[aName[i]+sName.substring(1)]=oAttr[sName]; <br>   } <br> obj.style[sName.substring(1)]=oAttr[sName]; <br>   } <br>  else <br>  { <br> obj.style[sName]=oAttr[sName]; <br> } <br> }<br>}";

// ==========================================================================//
var T23= " MouseWheel";
var D23= '鼠标滚轮事件';
var C23= "var   mouseWheel = function(obj, wheelUp, wheelDown){ <br>  obj.onmousewheel = work; <br>  if(obj.addEventListener){ <br> obj.addEventListener('DOMMouseScroll',work,false) <br>  }<br>  function work( ev ){<br> var ev = ev || event;<br> var b = true;  <br>  if( ev.wheelDelta ){   <br> b = ev.wheelDelta > 0 ? true : false;<br> } else {       <br>  b = ev.detail < 0 ? true : false;<br>  }    <br><br>  if( b ){  <br>      wheelUp && wheelUp();<br>  } else {<br>  wheelDown && wheelDown();<br>  }<br>   if( ev.preventDefault ){  <br>  ev.preventDefault();<br> }<br> return false;<br> }<br> }";

// ==========================================================================//
var T24= " GetMax";
var D24= '获取最大的值';
var C24= "var  getMax = function(arr){  <br> var max =0; <br> for( var i=0; i<arr.length; i++){ <br>  if( arr[i] > max ){ <br> max = arr[i];   <br>  } <br>  } <br> if(max){ <br>return max; <br>  }else{ <br>return false;<br>   }<br> }";

// ==========================================================================//
var T25= " GetShort";
var D25= '找到最短的那个';
var C25= "var getShort = function (aLi){  <br> var index = 0; <br>   var ih = aLi[index].offsetHeight; <br>for( var i=1; i<aLi.length; i++ ) {  <br> if( ih > aLi[i].offsetHeight ) {  <br>  index = i; <br> ih = aLi[i].offsetHeight; <br>  } <br> } <br> return index; <br> }";


// ==========================================================================//
var T26= " GeoLocation";
var D26= '获取用户位置';
var C26= "<br>var x=document.getElementById('demo'); <br>function getLocation() <br> {  <br> if (navigator.geolocation) <br>  { <br>navigator.geolocation.getCurrentPosition(showPosition,showError); <br>  } <br> else{x.innerHTML='Geolocation is not supported by this browser.';} <br>  }  <br>function showPosition(position) <br> { <br> x.innerHTML='纬度: ' + position.coords.latitude +   '<br>经度: ' + position.coords.longitude;	<br>  } <br> function showError(error) <br>  { <br> switch(error.code)  <br> { <br>   case error.PERMISSION_DENIED: <br>x.innerHTML='用户拒绝对获取地理位置的请求。' <br>  break; <br>  case error.POSITION_UNAVAILABLE: <br>   x.innerHTML='位置信息是不可用的。' <br>  break; <br>  case error.TIMEOUT:   <br>   x.innerHTML='请求用户地理位置超时。'  <br>  break;  <br>   case error.UNKNOWN_ERROR: <br>  x.innerHTML='未知错误。' <br> break; <br>   } <br>}<br><br>function showPosition(position){<br>var latlon=position.coords.latitude+','+position.coords.longitude;<br>var img_url='http://maps.googleapis.com/maps/api/staticmap?center=' <br>+latlon+'&zoom=14&size=400x300&sensor=false';<br>document.getElementById('mapholder').innerHTML='<img src='+img_url+'>';<br>}";

// ==========================================================================//
var T27= " Reset.css";
var D27= '样式重置';

// ==========================================================================//

var T28= "Config.less";
var D28= 'Less常用配置';

// ==========================================================================//

var data = {
	title : [
	T1, 
	T2,
	T3,
	T4,
	T5,
	T6,
	T7,
	T8,
	T9,
	T10,
	T11,
	T12,
	T13,
	T14,
	T15,
	T16,
	T17,
	T18,
	T19,
	T20, 
	T21,
	T22,
	T23,
	T24,
	T25,
	T26,
	T27,
	T28
	],
	description : [
	D1,
	D2,
	D3,
	D4,
	D5,
	D6,
	D7,
	D8,
	D9,
	D10,
	D11,
	D12,
	D13,
	D14,
	D15,
	D16,
	D17,
	D18,
	D19,
	D20,
	D21,
	D22,
	D23,
	D24,
	D25,
	D26,
	D27,
	D28
	],
	content :[
	C1,
	C2,
	C3,
	C4,
	C5,
	C6,
	C7,
	C8,
	C9,
	C10,
	C11,
	C12,
	C13,
	C14,
	C15,
	C16,
	C17,
	C18,
	C19,
	C20,
	C21,
	C22,
	C23,
	C24,
	C25,
	C26
	]
}

