
	//数据
	var data_js = [
		{ view : 'lazyImg', title : '网页图片较多的时实现分批次加载图片' },
		{ view : 'JSON', title : '使用JavaScript解析JSON数据' },
		{ view : 'Mp3', title : 'HTML5版JavaScript实现的MP3播放器' },
		{ view : 'star', title : '等级星投票效果' },
		{ view : 'mobileType', title : '区分移动设备类型' },
		{ view : 'orientation', title : '区分设备横竖屏、设备方向变更执行对应的函数队列' },
		{ view : 'removeUrlArea' , title : '移除移动浏览器地址栏'},
		{ view : 'notouchmove' , title : '禁止触摸的行为，教学引导之类的需求'},
		{ view : 'baiduMap' , title : '调用百度地图'},
		{ view : 'geolocation' , title : '获取当前地理坐标'},
		{ view : 'treeMenu' , title : '树形菜单导航'},
		{ view : 'scrollFixed', title : '滚动时导航固定定位' }
	];
	var data_tool = [
		{ view : 'filterSpecialWord', title : '过滤特殊字符' },
		{ view : 'verifyDate', title : '日期合法性验证' },
		{ view : 'strDate', title : '字符串转化为日期格式' },
		{ view : 'setXDate', title : '对指定的日期进行加减' },
		{ view : 'getDateSize', title : '判断时间是否过时，比较日期大小' },
		{ view : 'getCountDown' , title : '倒计时'},
		{ view : 'getHowManyWeek' , title : '获取指定日期是第几周'},
		{ view : 'format' , title : '将日期格式化成字符串'},
		{ view : 'bindEvent' , title : '绑定、移除、触发事件'},
		{ view : 'delegate' , title : '事件委托/代理'},
		{ view : 'asyncJs' , title : '异步加载JS'},
		{ view : 'bind' , title : 'bind() 函数'},
		{ view : 'norepeat' , title : '数组去重'},
		{ view : 'throttle' , title : '函数节流'},
		{ view : 'classIn' , title : '类式继承'},
		{ view : 'prototypeA' , title : '原形对象的属性方法'},
		{ view : 'jsonp' , title : 'JSONP跨域'},
		{ view : 'Cookie' , title : '关于cookie'},
		{ view : 'Ajax' , title : '关于Ajax'},
		{ view : 'cloneObject' , title : '深度克隆对象'},
		{ view : 'calLength' , title : '获取字符串字节长度'},
		{ view : 'Trim' , title : '去掉前后空白'},
		{ view : 'tramf' , title : '转换成驼峰式'},
		{ view : 'realyArray' , title : '类数组转真数组'},
		{ view : 'getElementByClass' , title : '通过class获取元素 && 添加、移除class'},
		{ view : 'getPosition' , title : '获取offsetTop、offsetLeft'},
		{ view : 'getStyle' , title : '获取元素样式'},
		{ view : 'getXYBydeg' , title : '通过角度获取对应坐标值'},
		{ view : 'setCss' , title : 'setCss()函数'},
		{ view : 'scrollWheel' , title : '鼠标滚轮事件'},
		{ view : 'maxMin' , title : '获取最大的值 && 找出最短的那位'},
		{ view : 'LessConfig' , title : 'Less常用变量'}
	];
	var data_ng = [
		{ view : 'ng-app', title : 'ng-app_定义应用程序的根元素' },
		{ view : 'ng-bind', title : 'ng-bind_绑定 HTML 元素到应用程序数据 && ng-bind-html &&ng-bind-template' },
		{ view : 'ng-blur', title : 'ng-blur_规定 blur 事件的行为' },
		{ view : 'ng-change', title : 'ng-change_规定在内容改变时要执行的表达式' },
		{ view : 'ng-checked', title : 'ng-checked_规定元素是否被选中' },
		{ view : 'ng-class', title : 'ng-class_指定 HTML 元素使用的 CSS 类' },
		{ view : 'ng-cloak', title : 'ng-cloak_在应用正要加载时防止其闪烁' },
		{ view : 'g-dblclick', title : 'ng-dblclick_规定双击事件的行为' },
		{ view : 'ng-disabled', title : 'ng-disabled_规定一个元素是否被禁用' },
		{ view : 'ng-focus', title : 'ng-focus_规定聚焦事件的行为' },
		{ view : 'ng-hide', title : 'ng-hide_隐藏或显示 HTML 元素' },
		{ view : 'ng-href', title : 'ng-href_为 the &lt;a> 元素指定链接' },
		{ view : 'ng-if', title : 'ng-if _如果条件为 false 移除 HTML 元素' },
		{ view : 'ng-include', title : 'ng-include_在应用中包含 HTML 文件' },
		{ view : 'ng-init', title : 'ng-init_定义应用的初始化值' },
		{ view : 'ng-keydown', title : 'ng-keydown && ng-keypress && ng-keyup' },
		{ view : 'ng-model', title : 'ng-model_绑定 HTML 控制器的值到应用数据' },
		{ view : 'ng-mouseover', title : 'ng-mouseover && ng-mouseup &&  ng-mousemove' },
		{ view : 'ng-open', title : 'ng-open_指定元素的 open 属性' },
		{ view : 'ng-options', title : 'ng-options_在 &lt;select> 列表中指定 &lt;options>' },
		{ view : 'ng-readonly', title : 'ng-readonly_指定元素的 readonly 属性' },
		{ view : 'ng-repeat', title : 'ng-repeat_定义集合中每项数据的模板' },
		{ view : 'ng-selected', title : 'ng-selected_指定元素的 selected 属性' },
		{ view : 'ng-src', title : 'ng-src_指定&lt;img> 元素的 src 属性' },
		{ view : 'ng-style', title : 'ng-style_指定元素的 style 属性' },
		{ view : 'ng-submit', title : 'ng-submit_规定 onsubmit 事件发生时执行的表达式' },
		{ view : 'ng-switch', title : 'ng-switch_规定显示或隐藏子元素的条件' },
		{ view : 'ng-value', title : 'ng-value_规定 input 元素的值' }
	];
	var data_angular = [
		{ view : 'invalid', title : 'Angular表单验证' },
		{ view : '$filter', title : 'Angular_$filter' },
		{ view : '$route-service', title : 'Angular_$route-service' },
		{ view : '$anchoring', title : 'Angular_$anchoring' },
		{ view : '$date_input', title : 'Angular_$date_input' },
		{ view : '$email', title : 'Angular_$email' },
		{ view : 'directive', title : 'Angular_自定义指令' },
		{ view : 'debug', title : 'Angular_调试debug' },
		{ view : 'ngResource', title : 'ngResource' },
		{ view : 'ngAnimate', title : '运动_ngAnimate' },
		{ view : 'event', title : '事件内部传播方式' },
		{ view : 'register', title : '注册验证_自定义错误信息提示指令' },
		{ view : 'imgInvalid', title : '自定义图形验证指令' },
		{ view : 'searchFilter', title : '搜索框过滤功能' },
		{ view : 'ui-sref', title : '通过ui-sref指令构建链接' },
        { view : 'service', title : '自定义服务Provider' },
        { view : '$q', title : '$q延迟' },
        { view : 'config', title : '服务的供应商xxxProvider' },
        { view : 'ngcache', title : '缓存服务ngcache' },
        { view : '$interpolate', title : '插值服务$interpolate'},
        { view : '$location', title : '$location服务 && $anchorScroll锚点跳转服务'},
        { view : '$http', title : '$http服务'},
        { view : '$angularTool', title : 'AngularJs常用工具'},
        { view : '$directiveContact', title : '指令之间的通信'},
        { view : 'drag', title : '自定义拖拽指令'},
        { view : 'tab', title : '自定义选项卡指令'},
        { view : 'tab', title : '自定义选项卡指令'},
        { view : 'newValid', title : '表单验证新方式'},
        { view : 'Fn', title : '面向对象写法 as' },
        { view : 'angularPlug', title : 'Angular等插件'},
        { view : 'angularPCA', title : '省市区自定义指令的使用'},
        { view : 'angularPagination', title : '分页自定义指令的使用'},
        { view : 'angularLoading', title : 'angularLoading加载过程中的效果的实现'},
        { view : 'commobox', title : '自定义的下拉列表框标签指令commobox' },
        { view : 'decimal', title : '关于小数点精度插件' },
        { view : 'comboxtable', title : '下拉列表表格分页，标签指令使用' },
        { view : 'ui-tree', title : 'angular-ui-tree插件使用' }

	];
	var data_lodash = [
		{ view : 'lodash_array', title : '关于数组Array' }
	];
	var data = {
		data_js : data_js,
		data_tool : data_tool,
		data_ng : data_ng,
		data_angular : data_angular,
		data_lodash :data_lodash
	};
	var app = angular.module('myApp',['ui.router']);
	app.value('data',data); //服务
    	app.service('move',function(){

   	 });

	app.controller('myCtrl',[
		'$scope',
		'$filter',
		'$timeout',
		'data',
		'move',
	function($scope,$filter, $timeout,data,move){
	$scope.data_js = data.data_js;
	$scope.data_tool = data.data_tool;
	$scope.data_ng = data.data_ng;
	$scope.data_angular =data.data_angular;
	$scope.data_lodash = data.data_lodash;
	$scope.keyword = '';

	        $scope.timer = null;
	        $scope.timer2 = null;
	        var initMove = function(b){
	        		if( b ){
			       $timeout.cancel($scope.timer);
			        $scope.timer = $timeout(function(){
			            $scope.className = b;
			        },1000);
	        		}else{
	        		       $timeout.cancel($scope.timer2);
	        		       $scope.timer2 = $timeout(function(){
 				$scope.className = b;
	        		       },20)
	        		}
	        }
	        initMove(true);
	        

	        $scope.fnSelect = function(event, index, item){
	        		var target = event.currentTarget;
			$(target).siblings().find('a').removeClass('activeCur');
	        		$(target).find('a').addClass('activeCur');
	        		initMove(false);
	        		initMove(true);

	        }

	        $scope.classTitles = [
	        	{ id : 1 ,  value : 'JavaScript' , view : 'index' },
	        	{ id : 2 ,  value : 'AngularJS' , view : 'AngularJs' },
	        	{ id : 3 ,  value : 'jQuery' , view : 'jQuery' },
	        	{ id : 4 ,  value : 'Mobile' , view : 'Mobile' },
	        	{ id : 5 ,  value : 'Bootstrap' , view : 'Bootstrap' },
	        	{ id : 6 ,  value : 'Others' , view : 'Others' }
	        ]

}]);


/*===================*/
/*      config
/*===================*/
	app.config( function( $stateProvider, $urlRouterProvider ){
		$urlRouterProvider.otherwise('index');	
		$stateProvider
			.state('lazyImg',{
				url : '/lazyLoadImg',
				 templateUrl : 'lazyLoadImg.html' 
			})
			.state('JSON',{
				url : '/JSON.parse',
				templateUrl : 'JSON.parse.html'
			})
			.state('Mp3',{
				url : '/Mp3',
				templateUrl : 'Mp3.html'
			})
			.state('star',{
				url : '/star',
				templateUrl : 'star.html'
			})
			.state('filterSpecialWord',{
				url : '/filterSpecialWord',
				templateUrl : 'filterSpecialWord.html'
			})
			.state('mobileType',{
				url : '/mobileType',
				templateUrl : 'mobileType.html'
			})
			.state('orientation',{
				url : '/orientation',
				templateUrl : 'orientation.html'
			})
			.state('removeUrlArea',{
				url : '/removeUrlArea',
				templateUrl : 'removeUrlArea.html'
			})
			.state('notouchmove',{
				url : '/notouchmove',
				templateUrl : 'notouchmove.html'
			})
			.state('baiduMap',{
				url : '/baiduMap',
				templateUrl : 'baiduMap.html'
			})
			.state('geolocation',{
				url : '/geolocation',
				templateUrl : 'geolocation.html'
			})
			.state('treeMenu',{
				url : '/treeMenu',
				templateUrl : 'treeMenu.html'
			})
			.state('verifyDate',{
				url : '/verifyDate',
				templateUrl : 'verifyDate.html'
			})
			.state('angularPlug',{
				url : '/angularPlug',
				templateUrl : 'angularJs/angularPlug.html'
			})
			.state('angularPagination',{
				url : '/angularPagination',
				templateUrl : 'angularJs/angularPagination.html'
			})
			.state('strDate',{
				url : '/strDate',
				templateUrl : 'strDate.html'
			})
			.state('setXDate',{
				url : '/setXDate',
				templateUrl : 'setXDate.html'
			})
			.state('getDateSize',{
				url : '/getDateSize',
				templateUrl : 'getDateSize.html'
			})
			.state('getCountDown',{
				url : '/getCountDown',
				templateUrl : 'getCountDown.html'
			})
			.state('getHowManyWeek',{
				url : '/getHowManyWeek',
				templateUrl : 'getHowManyWeek.html'
			})
			.state('commobox',{
				url : '/commobox',
				templateUrl : 'angularJs/commobox.html'
			})
			.state('ui-tree',{
				url : '/ui-tree',
				templateUrl : 'angularJs/ui-tree.html'
			})
			.state('comboxtable',{
				url : '/comboxtable',
				templateUrl : 'angularJs/comboxtable.html'
			})
			.state('format',{
				url : '/format',
				templateUrl : 'format.html'
			})
			.state('AngularJs',{
				url : '/angularJs',
				templateUrl : 'angularJs/angular.index.html'
			})
			.state('ng-app',{
				url : '/ng-app',
				templateUrl : 'angularJs/ng-app.html'
			})
			.state('$directiveContact',{
				url : '/$directiveContact',
				templateUrl : 'angularJs/directiveContact.html'
			})
			.state('tab',{
				url : '/tab',
				templateUrl : 'angularJs/tab.html'
			})
			.state('Fn',{
				url : '/Fn',
				templateUrl : 'angularJs/Fn.html'
			})
			.state('angularLoading',{
				url : '/angularLoading',
				templateUrl : 'angularJs/angularLoading.html'
			})
			.state('drag',{
				url : '/drag',
				templateUrl : 'angularJs/drag.html'
			})
			.state('newValid',{
				url : '/newValid',
				templateUrl : 'angularJs/newValid.html'
			})
			.state('ng-bind',{
				url : '/ng-bind',
				templateUrl : 'angularJs/ng-bind.html'
			})
			.state('ng-blur',{
				url : '/ng-blur',
				templateUrl : 'angularJs/ng-blur.html'
			})
			.state('ng-change',{
				url : '/ng-change',
				templateUrl : 'angularJs/ng-change.html'
			})
			.state('ng-checked',{
				url : '/ng-checked',
				templateUrl : 'angularJs/ng-checked.html'
			})
			.state('ng-class',{
				url : '/ng-class',
				templateUrl : 'angularJs/ng-class.html'
			})
			.state('ng-cloak',{
				url : '/ng-cloak',
				templateUrl : 'angularJs/ng-cloak.html'
			})
			.state('ng-dblclick',{
				url : '/ng-dblclick',
				templateUrl : 'angularJs/ng-dblclick.html'
			})
			.state('ng-disabled',{
				url : '/ng-disabled',
				templateUrl : 'angularJs/ng-disabled.html'
			})
			.state('ng-focus',{
				url : '/ng-focus',
				templateUrl : 'angularJs/ng-focus.html'
			})
			.state('decimal',{
				url : '/decimal',
				templateUrl : 'angularJs/decimal.html'
			})
			.state('ng-hide',{
				url : '/ng-hide',
				templateUrl : 'angularJs/ng-hide.html'
			})
			.state('ng-href',{
				url : '/ng-href',
				templateUrl : 'angularJs/ng-href.html'
			})
			.state('ng-if',{
				url : '/ng-if',
				templateUrl : 'angularJs/ng-if.html'
			})
			.state('ng-include',{
				url : '/ng-include',
				templateUrl : 'angularJs/ng-include.html'
			})
			.state('ng-init',{
				url : '/ng-init',
				templateUrl : 'angularJs/ng-init.html'
			})
			.state('ng-keydown',{
				url : '/ng-keydown',
				templateUrl : 'angularJs/ng-keydown.html'
			})
			.state('ng-model',{
				url : '/ng-model',
				templateUrl : 'angularJs/ng-model.html'
			})
			.state('ng-mouseover',{
				url : '/ng-mouseover',
				templateUrl : 'angularJs/ng-mouseover.html'
			})
			.state('ng-open',{
				url : '/ng-open',
				templateUrl : 'angularJs/ng-open.html'
			})
			.state('ng-options',{
				url : '/ng-options',
				templateUrl : 'angularJs/ng-option.html'
			})
			.state('ng-readonly',{
				url : '/ng-readonly',
				templateUrl : 'angularJs/ng-readonly.html'
			})
			.state('ng-repeat',{
				url : '/ng-repeat',
				templateUrl : 'angularJs/ng-repeat.html'
			})
			.state('ng-selected',{
				url : '/ng-selected',
				templateUrl : 'angularJs/ng-selected.html'
			})
			.state('ng-src',{
				url : '/ng-src',
				templateUrl : 'angularJs/ng-src.html'
			})
			.state('ng-style',{
				url : '/ng-style',
				templateUrl : 'angularJs/ng-style.html'
			})
			.state('ng-submit',{
				url : '/ng-submit',
				templateUrl : 'angularJs/ng-submit.html'
			})
			.state('ng-switch',{
				url : '/ng-switch',
				templateUrl : 'angularJs/ng-switch.html'
			})
			.state('ng-value',{
				url : '/ng-value',
				templateUrl : 'angularJs/ng-value.html'
			})
			.state('angularPCA',{
				url : '/angularPCA',
				templateUrl : 'angularJs/angularPCA.html'
			})
			.state('invalid',{
				url : '/invalid',
				templateUrl : 'angularJs/invalid.html'
			})
			.state('$filter',{
			   url : '/$filter',
			   templateUrl : 'angularJs/$filter.html'
			})
			.state('$route-service',{
			   url : '/$route-service',
			   templateUrl : 'angularJs/$route-service.html'
		   	})
            .state('register',{
                url : '/register',
                templateUrl : 'angularJs/register.html'
            })
            .state('service',{
                       url : '/service',
                       templateUrl : 'angularJs/service.html'
                   })
            .state('$q',{
                       url : '/$q',
                       templateUrl : 'angularJs/$q.html'
                   })
            .state('config',{
                       url : '/config',
                       templateUrl : 'angularJs/config.html'
                   })
            .state('ngcache',{
                       url : '/ngcache',
                       templateUrl : 'angularJs/ngcache.html'
                   })
            .state('$interpolate',{
                       url : '/$interpolate',
                       templateUrl : 'angularJs/$interpolate.html'
                   })
            .state('$location',{
                       url : '/$location',
                       templateUrl : 'angularJs/$location.html'
                   })
            .state('$http',{
                       url : '/$http',
                       templateUrl : 'angularJs/$http.html'
                   })
			.state('$anchoring',{
			   url : '/$anchoring',
			   templateUrl : 'angularJs/$anchoring.html'
		 	  })
			.state('$angularTool',{
			   url : '/$angularTool',
			   templateUrl : 'angularJs/angularTool.html'
		   	})
			.state('$date_input',{
			   url : '/$date_input',
			   templateUrl : 'angularJs/date_input.html'
		   	})
			.state('$email',{
					   url : '/$email',
					   templateUrl : 'angularJs/email_input.html'
			})
			.state('directive',{
					   url : '/directive',
					   templateUrl : 'angularJs/directive.html'
				   })
			.state('debug',{
					   url : '/debug',
					   templateUrl : 'angularJs/debug.html'
				   })
			.state('bindEvent',{
				url : 'bindEvent',
				templateUrl : 'bindEvent.html'
			})
			.state('delegate',{
				url : 'delegate',
				templateUrl : 'delegate.html'
			})
			.state('asyncJs',{
				url : 'asyncJs',
				templateUrl : 'asyncJs.html'
			})
			.state('bind',{
				url : 'bind',
				templateUrl : 'bind.html'
			})
			.state('norepeat',{
				url : 'norepeat',
				templateUrl : 'norepeat.html'
			})
			.state('throttle',{
				url : 'throttle',
				templateUrl : 'throttle.html'
			})
			.state('classIn',{
				url : 'classIn',
				templateUrl : 'classIn.html'
			})
			.state('prototypeA',{
				url : 'prototypeA',
				templateUrl : 'prototypeA.html'
			})
			.state('jsonp',{
				url : 'jsonp',
				templateUrl : 'jsonp.html'
			})
			.state('Cookie',{
				url : 'Cookie',
				templateUrl : 'Cookie.html'
			})
			.state('Ajax',{
				url : 'Ajax',
				templateUrl : 'ajax.html'
			})
			.state('cloneObject',{
				url : 'cloneObject',
				templateUrl : 'cloneObject.html'
			})
			.state('calLength',{
				url : 'calLength',
				templateUrl : 'calLength.html'
			})
			.state('Trim',{
				url : 'Trim',
				templateUrl : 'Trim.html'
			})
			.state('tramf',{
				url : 'tramf',
				templateUrl : 'tramf.html'
			})
			.state('realyArray',{
				url : 'realyArray',
				templateUrl : 'realyArray.html'
			})
			.state('getElementByClass',{
				url : 'getElementByClass',
				templateUrl : 'getElementByClass.html'
			})
			.state('getPosition',{
				url : 'getPosition',
				templateUrl : 'getPosition.html'
			})
			.state('getStyle',{
				url : 'getStyle',
				templateUrl : 'getStyle.html'
			})
			.state('getXYBydeg',{
				url : 'getXYBydeg',
				templateUrl : 'getXYBydeg.html'
			})
			.state('setCss',{
				url : 'setCss',
				templateUrl : 'setCss.html'
			})
			.state('scrollWheel',{
				url : 'scrollWheel',
				templateUrl : 'scrollWheel.html'
			})
			.state('maxMin',{
				url : 'maxMin',
				templateUrl : 'maxMin.html'
			})
			.state('LessConfig',{
				url : 'LessConfig',
				templateUrl : 'LessConfig.html'
			})
			.state('scrollFixed',{
				url : 'scrollFixed',
				templateUrl : 'scrollFixed.html'
			})
			.state('ngResource',{
				url : 'ngResource',
				templateUrl : 'angularJs/ngResource.html'
			})
			.state('ngAnimate',{
				url : 'ngAnimate',
				templateUrl : 'angularJs/ngAnimate.html'
			})
			.state('event',{
				url : 'event',
				templateUrl : 'angularJs/event.html'
			})
			.state('imgInvalid',{
				url : 'imgInvalid',
				templateUrl : 'angularJs/imgInvalid.html'
			})
			.state('searchFilter',{
				url : 'searchFilter',
				templateUrl : 'angularJs/searchFilter.html'
			})
			.state('Others',{
				url : '/Others',
				templateUrl : 'others/others.index.html'
			})
			.state('lodash_array',{
				url : '/lodash_array',
				templateUrl : 'others/lodash_array.html'
			})
			.state('ui-sref',{
				url : '/ui-sref',
				templateUrl : 'angularJs/ui-sref.html'
			})
			.state('jQuery',{
				url : '/jQuery',
				templateUrl : 'jQuery/jQuery.html'
			})
			.state('Mobile',{
				url : '/Mobile',
				templateUrl : 'Mobile/Mobile.html'
			})
			.state('Bootstrap',{
				url : '/Bootstrap',
				templateUrl : 'Bootstrap/Bootstrap.html'
			})
			.state('index',{
				url : '',
				templateUrl : 'homeBack.html'
			})
	});

    app.directive('myDriective',function(){
        return{
            restrict : 'A',
            link : function(scope,element,attr){
                $(element).delegate('a','click',function(ev){
                    ev.preventDefault();
                    var target = ev.target;
                     $(target).parent().addClass('active2').siblings().removeClass('active2');
                     $('#content-wrap').hide().slideDown(1000);
                });
            }
        }
    });
