// build by owo frame!
// Wed May 22 2019 13:10:30 GMT+0800 (GMT+08:00)

"use strict";

window.owo = {
  // 页面数据和方法
  script: {
    "home": {
      "data": {},
      "template": {
        "SVZSnmecHrAhzur1": {
          "created": function created() {
            setTimeout(function () {
              new Swiper('.swiper-container', {
                autoplay: 3000,
                pagination: '.pagination-pPX8XxuUyIehAAEu',
                paginationClickable: true
              });
              setTimeout(function () {
                var dom = document.getElementsByClassName('pagination-pPX8XxuUyIehAAEu')[0];
                dom.style.width = dom.children.length * 22 + 'px';
              }, 100);
            }, 0);
          },
          "prop": {
            "name": "SVZSnmecHrAhzur1",
            "src": "https://owo.ink/public/1bdad6c9364ab389a7a4c47c0815d1f4.page"
          }
        },
        "newsList": {
          "data": {
            "newsList": [{
              "url": "#",
              "text": "驻村手记：村第一书记是顶“责任帽”"
            }, {
              "url": "#",
              "text": "驻村手记：产业扶贫需要找准支点"
            }, {
              "url": "#",
              "text": "调研采访：塔木村牧民搬迁后怎么办"
            }, {
              "url": "#",
              "text": "驻村手记：脱贫要“实字为先”"
            }, {
              "url": "#",
              "text": "梓树村迎来好风景 靠政策脱了贫 致富路自己闯"
            }, {
              "url": "#",
              "text": "驻村蹲点话脱贫：“老大难”变小老板"
            }, {
              "url": "#",
              "text": "造福世界的中国工程：港口连接海上新丝路"
            }, {
              "url": "#",
              "text": "中国新名片：三十而立，中国核电厚积薄发"
            }]
          },
          "prop": {
            "name": "newsList",
            "src": "https://owo.ink/public/13067c6679e5d6e65fe157947309bec1.page"
          }
        },
        "swiper": {
          "created": function created() {
            setTimeout(function () {
              // 待修复 如果一个页面存在两个就会出问题
              $('.swiper-zBLJxURsOhhagFAH ul').roundabout({
                easing: 'easeOutInCirc',
                duration: 600,
                btnNext: ".next",
                btnPrev: ".prev"
              });
            }, 0);
          },
          "prop": {
            "name": "swiper",
            "src": "https://owo.ink/public/4b9c6a969cd51fd593af8a7bbbce7ff6.page"
          }
        },
        "ranking": {
          "data": {
          },
          "created": function created() {
            var _this2 = this;

            // 获取投票信息
            $.getJSON("http://littlepoll1.people.com.cn/json.php?type=571&callback=?", function (data) {
              // 由大到小排序
              data = data.sort(function (a, b) {
                return parseInt(b['bnum']) - parseInt(a['bnum']);
              }); // console.log(data)

              var tempHtml = '';

              for (var ind = 0; ind < data.length; ind++) {
                var element = data[ind];
                var indexText = ind < 10 ? '0' + (ind + 1) : ind + 1;
                tempHtml += "<li><i class=\"left fl\">".concat(indexText, "</i><div class=\"right fl\"><p class=\"name\">").concat(cityList[element.vid], "</p><p class=\"clear add\" id=\"").concat(element.vid, "\" title=\"\u4E3A ").concat(cityList[element.vid], " \u70B9\u8D5E\"><span class=\"support\"></span><span class=\"number\">").concat(element.bnum, "</span></p></div></li>");
              }

              _this2.$el.getElementsByClassName('list-box')[0].innerHTML = tempHtml;
              setTimeout(function () {
                var domList = _this2.$el.getElementsByClassName('add');

                var _loop = function _loop(_ind) {
                  var element = domList[_ind];
                  var _this = _this2;

                  element.onclick = function () {
                    // 点赞请求
                    var voteId = this.getAttribute('id'); // console.log(this.getAttribute('id'))

                    $.ajax({
                      type: "get",
                      voteId: voteId,
                      url: "http://littlepoll1.people.com.cn/button/index.php/cip/button/571/" + voteId,
                      //每一个投票对应一个type的值
                      dataType: "json",
                      data: "jsonCallback=?",
                      cache: false,
                      success: function success(data) {
                        if (data.b == 1) {
                          alert("投票成功，感谢您的支持！");

                          _this.created();
                        } else if (data.b == 2) {
                          alert("一个IP一天只能投10票！");
                        } else if (data.b == 3) {
                          alert("您已经投过此选项！");
                        } else if (data.b == 8) {
                          alert("投票未开始！");
                        } else if (data.b == 9) {
                          alert("投票已结束！");
                        } else if (data.b == 0) {
                          alert("没有此投票！");
                        }
                      }
                    });
                  };
                };

                for (var _ind = 0; _ind < domList.length; _ind++) {
                  _loop(_ind);
                }
              }, 0);
            });
          },
          "prop": {
            "name": "ranking",
            "src": "./src/module/ranking.owo"
          }
        }
      }
    },
    "newsList": {
      "prop": {
        "name": "newsList",
        "src": "./src/module/path.owo"
      }
    },
    "editorNote": {
      "prop": {
        "name": "editorNote",
        "text": "2018年是贯彻党的十九大精神的开局之年，是改革开放40周年，是决胜全面建成小康社会、实施“十三五”规划承上启下的关键一年。“2018年中观察”系列报道，为您盘点上半年的“中国答卷”，触摸新时代中国发展的强劲脉搏。",
        "src": "https://owo.ink/public/b637832ea1e1bab8b12eb15919c7d13c.page"
      }
    },
    "t7tueUOSnJGcyGcc": {
      "prop": {
        "name": "t7tueUOSnJGcyGcc",
        "src": "https://owo.ink/public/05a67f8232f2fdf172fe501704339b98.page"
      }
    },
    "imageBar": {
      "prop": {
        "name": "imageBar",
        "src": "https://owo.ink/public/4998c15b221f1d3b0912353e970aef42.page"
      }
    },
    "copyrightInfo": {
      "prop": {
        "name": "copyrightInfo",
        "src": "https://owo.ink/public/283b7350329b974de11dd6df845c732e.page"
      }
    }
  },
  // 页面默认入口
  entry: "home"
};

"use strict";function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}if(!owo){console.error('没有找到owo核心!');}// 注册owo默认变量
// 框架状态变量
owo.state={};// 框架全局变量
owo.global={};// 全局方法变量
owo.tool={};// 便捷的获取工具方法
var $tool=owo.tool;var $data={};// 框架核心函数
var _owo={};// 对象合并方法
_owo.assign=function(a,b){var newObj={};for(var key in a){newObj[key]=a[key];}for(var key in b){newObj[key]=b[key];}return newObj;};// 针对低版本IE浏览器做兼容处理
if(!document.getElementsByClassName){document.getElementsByClassName=function(className,element){var children=(element||document).getElementsByTagName('*');var elements=new Array();for(var i=0;i<children.length;i++){var child=children[i];var classNames=child.className.split(' ');for(var j=0;j<classNames.length;j++){if(classNames[j]==className){elements.push(child);break;}}}return elements;};}// 运行页面所属的方法
_owo.handlePage=function(pageName,entryDom){_owo.handleEvent(entryDom);// 判断页面是否有自己的方法
var newPageFunction=window.owo.script[pageName];if(!newPageFunction)return;// console.log(newPageFunction)
// 如果有created方法则执行
if(newPageFunction.created){// 注入运行环境
newPageFunction.created.apply(_owo.assign(newPageFunction,{$el:entryDom,data:newPageFunction.data,activePage:window.owo.activePage}));}// 判断页面是否有下属模板,如果有运行所有模板的初始化方法
for(var key in newPageFunction.template){var templateScript=newPageFunction.template[key];if(templateScript.created){// 获取到当前配置页的DOM
// 待修复,临时获取方式,这种方式获取到的dom不准确
var domList=document.querySelectorAll('[template="'+key+'"]');// 有时候在更改html时会将某些块进行删除
if(domList.length==0){console.info('无法找到页面组件:'+key);}// console.log(domList.length)
for(var ind=0;ind<domList.length;ind++){// 为模板注入运行环境
templateScript.created.apply(_owo.assign(newPageFunction.template[key],{$el:domList[ind],data:templateScript.data,activePage:window.owo.activePage}));}}}};// owo-name处理
_owo.handleEvent=function(tempDom,templateName){// console.log(templateName)
var activePage=window.owo.script[owo.activePage];if(tempDom.attributes){for(var ind=0;ind<tempDom.attributes.length;ind++){var attribute=tempDom.attributes[ind];// 判断是否为owo的事件
// ie不支持startsWith
if(attribute.name[0]=='@'){var eventName=attribute.name.slice(1);var eventFor=attribute.textContent;switch(eventName){case'show':{// 初步先简单处理吧
var temp=eventFor.replace(/ /g,'');// 取出条件
var condition=temp.split("==");if(activePage.data[condition[0]]!=condition[1]){tempDom.style.display='none';}break;}default:{tempDom["on"+eventName]=function(event){// 因为后面会对eventFor进行修改所以使用拷贝的
var eventForCopy=eventFor;// 判断页面是否有自己的方法
var newPageFunction=window.owo.script[window.owo.activePage];// console.log(this.attributes)
if(templateName){// 如果模板注册到newPageFunction中，那么证明模板没有script那么直接使用eval执行
if(newPageFunction.template){newPageFunction=newPageFunction.template[templateName];}else{eval(eventForCopy);return;}}// 待优化可以单独提出来
// 取出参数
var parameterArr=[];var parameterList=eventForCopy.match(/[^\(\)]+(?=\))/g);if(parameterList&&parameterList.length>0){// 参数列表
parameterArr=parameterList[0].split(',');// 进一步处理参数
for(var i=0;i<parameterArr.length;i++){var parameterValue=parameterArr[i].replace(/(^\s*)|(\s*$)/g,"");// console.log(parameterValue)
// 判断参数是否为一个字符串
if(parameterValue.charAt(0)==='"'&&parameterValue.charAt(parameterValue.length-1)==='"'){parameterArr[i]=parameterValue.substring(1,parameterValue.length-1);}if(parameterValue.charAt(0)==="'"&&parameterValue.charAt(parameterValue.length-1)==="'"){parameterArr[i]=parameterValue.substring(1,parameterValue.length-1);}// console.log(parameterArr[i])
}eventForCopy=eventForCopy.replace('('+parameterList+')','');}else{// 解决 @click="xxx()"会造成的问题
eventForCopy=eventForCopy.replace('()','');}// console.log(newPageFunction)
// 如果有方法,则运行它
if(newPageFunction[eventForCopy]){// 绑定window.owo对象
// console.log(tempDom)
// 待测试不知道这样合并会不会对其它地方造成影响
newPageFunction.$el=this;newPageFunction.$event=event;newPageFunction[eventForCopy].apply(newPageFunction,parameterArr);}else{// 如果没有此方法则交给浏览器引擎尝试运行
eval(eventForCopy);}};}}}}}// 递归处理所有子Dom结点
for(var i=0;i<tempDom.children.length;i++){var childrenDom=tempDom.children[i];// console.log(childrenDom)
var newTemplateName=templateName;if(tempDom.attributes['template']&&tempDom.attributes['template'].textContent){newTemplateName=tempDom.attributes['template'].textContent;}// console.log(newTemplateName)
_owo.handleEvent(childrenDom,newTemplateName);}};// 便捷选择器
if(window.jQuery==undefined){window.$=function(query){var type=_typeof(query);switch(type){// 如果是一个函数,那么代表这个函数需要在页面加载完毕后运行
case'function':{setTimeout(function(){// 将需要运行的函数添加到待运行队列中
if(window.owo.state.created==undefined)window.owo.state.created=[];window.owo.state.created.push(query);// 如果页面已经处于准备就绪状态,那么直接运行代码
if(window.owo.state.isRrady){query();}},1000);break;}case'string':{var domList=document.querySelectorAll(query);return domList?domList:[];}}};}else{// 因为jquery没有foreach方法 所以需要给他加上
jQuery.fn.forEach=function(objec){for(var index=0;index<this.length;index++){var element=this[index];objec(element);}};}// 跳转到指定页面
function $go(pageName,inAnimation,outAnimation,param){owo.state.animation={"in":inAnimation,"out":outAnimation};var paramString='';if(param&&_typeof(param)=='object'){paramString+='?';// 生成URL参数
for(var paramKey in param){paramString+=paramKey+'='+param[paramKey]+'&';}// 去掉尾端的&
paramString=paramString.slice(0,-1);}window.location.href=paramString+"#"+pageName;}function $change(key,value){// 更改对应的data
owo.script[owo.activePage].data[key]=value;// 当前页面下@show元素列表
var showList=document.getElementById('o-'+owo.activePage).querySelectorAll('[\\@show]');showList.forEach(function(element){// console.log(element)
var order=element.attributes['@show'].textContent;// console.log(order)
// 去掉空格
order=order.replace(/ /g,'');if(order==key+'=='+value){element.style.display='';}else{element.style.display='none';}});}// 页面资源加载完毕事件
_owo.ready=function(){var page=owo.entry;window.owo.activePage=page;// 更改$data链接
$data=owo.script[page].data;var entryDom=document.getElementById('o-'+page);if(entryDom){_owo.handlePage(page,entryDom);}else{console.error('找不到页面入口! 设置的入口为: '+page);}// 设置状态为dom准备完毕
window.owo.state.isRrady=true;// 判断是否有需要运行的其他方法
if(window.owo.state.created!=undefined){window.owo.state.created.forEach(function(element){// 运行对应的方法
element();});}};/*
 * 传递函数给whenReady()
 * 当文档解析完毕且为操作准备就绪时，函数作为document的方法调用
 */_owo.whenReady=function(){//这个函数返回whenReady()函数
var funcs=[];//当获得事件时，要运行的函数
var ready=false;//当触发事件处理程序时,切换为true
//当文档就绪时,调用事件处理程序
function handler(e){if(ready)return;//确保事件处理程序只完整运行一次
//如果发生onreadystatechange事件，但其状态不是complete的话,那么文档尚未准备好
if(e.type==='onreadystatechange'&&document.readyState!=='complete'){return;}//运行所有注册函数
//注意每次都要计算funcs.length
//以防这些函数的调用可能会导致注册更多的函数
for(var i=0;i<funcs.length;i++){funcs[i].call(document);}//事件处理函数完整执行,切换ready状态, 并移除所有函数
ready=true;funcs=null;}//为接收到的任何事件注册处理程序
if(document.addEventListener){document.addEventListener('DOMContentLoaded',handler,false);document.addEventListener('readystatechange',handler,false);//IE9+
window.addEventListener('load',handler,false);}else if(document.attachEvent){document.attachEvent('onreadystatechange',handler);window.attachEvent('onload',handler);}//返回whenReady()函数
return function whenReady(fn){if(ready){fn.call(document);}else{funcs.push(fn);}};}();_owo.whenReady(_owo.ready);function switchPage(oldUrlParam,newUrlParam){var oldPage=oldUrlParam.split('&')[0];var newPage=newUrlParam.split('&')[0];// 查找页面跳转前的page页(dom节点)
// console.log(oldUrlParam)
// 如果源地址获取不到 那么一般是因为源页面为首页
if(oldPage===undefined){oldPage=owo.entry;}var oldDom=document.getElementById('o-'+oldPage);if(oldDom){// 隐藏掉旧的节点
oldDom.style.display='none';}// 查找页面跳转后的page
var newDom=document.getElementById('o-'+newPage);// console.log(newDom)
if(newDom){// 隐藏掉旧的节点
newDom.style.display='block';}else{console.error('页面不存在!');return;}window.owo.activePage=newPage;// 更改$data链接
$data=owo.script[newPage].data;_owo.handlePage(newPage,newDom);}