$(function(){
  // 鼠标经过
  var oddClass = ""
  $(".mainwrap span.dot").bind({
    mouseover: function() {
      var $this = $(this)
      var bgc = $this.css("background-color")
      var cstring =$this.attr("class");
      cstring = cstring.replace(/\s+/g,"");
      cstring = cstring.substr(3, 2)
      var activeClass = "." + cstring;
      $(activeClass).addClass("pulse");
      var x = parseInt($this.css("left"));
      var y = parseInt($this.css("top"));
      
      // 气泡
      var $modelBox = $("#modelBox");
      $modelBox.removeClass("hide");
      var oactiveClass = "o" + cstring;
      var otitle = proData[cstring]["title"];
      var odec = proData[cstring]["dec"];
      var ohref = proData[cstring]["href"];
      $modelBox.find("h3").html(otitle);
      $modelBox.find("p").html(odec);
      $modelBox.find("a").attr({"href":ohref});

      var ow = $modelBox.width()+80;
      var oh = $modelBox.height()+55;
      var ox = x -70;
      var oy = y -oh;
      var obgc = ":after:border-color: "+bgc+" transparent transparent " + bgc+";";
      $modelBox.removeClass(oddClass);
      $modelBox.addClass(oactiveClass);
      oddClass = oactiveClass
      $modelBox.css({
        "left":ox,
        "top":oy,
        "background":bgc
      })
    },
    mouseout:function(){
      $(".mainwrap span").removeClass("pulse")
    }
  })

  // 几秒后显示小的logo图片
  setTimeout(() => {
    $('.logo-mini')[0].style.opacity = 1
    $('.ranking-list')[0].style.display = 'block'
  }, 4000)
  
  // 详细
  var proData = {
    "bj": {
      "title": "北京市援建",
      "dec": "和田地区和田市、和田县、墨玉县、洛浦县和兵团第十四师。",
      "href": "http://xj.people.com.cn/GB/188750/378283/379213/index.html"
    },
    "tj": {
      "title": "天津市援建",
      "dec": "和田地区策勒、于田、民丰三县。",
      "href": "http://xj.people.com.cn/GB/188750/378283/379222/index.html"
    },
    "hb": {
      "title": "河北省援建",
      "dec": "巴音郭楞州和兵团第二师。",
      "href": "http://xj.people.com.cn/GB/188750/378283/379870/index.html"
    },
    "sx": {
      "title": "山西省援建",
      "dec": "昌吉州阜康市和兵团第六师。",
      "href": "http://xj.people.com.cn/GB/188750/378283/379214/index.html"
    },
    "ln": {
      "title": "辽宁省援建",
      "dec": "塔城地区及兵团第八师、第九师。",
      "href": "http://xj.people.com.cn/GB/188750/378283/378516/index.html"
    },
    "jl": {
      "title": "吉林省援建",
      "dec": "阿勒泰地区阿勒泰市、哈巴河县、布尔津县、吉木乃县。",
      "href": "http://xj.people.com.cn/GB/188750/378283/378574/index.html"
    },
    "hl": {
      "title": "黑龙江省援建",
      "dec": "阿勒泰地区青河县、富蕴县、福海县及兵团第十师。",
      "href": "http://xj.people.com.cn/GB/188750/378283/379872/380459/index.html"
    },
    "sh": {
      "title": "上海市援建",
      "dec": "喀什地区莎车县、泽普县、叶城县、巴楚县。",
      "href": "http://xj.people.com.cn/GB/188750/378283/379156/index.html"
    },
    "js": {
      "title": "江苏省援建",
      "dec": "伊犁州直和兵团第四师、第七师。",
      "href": "http://xj.people.com.cn/GB/188750/378283/378686/index.html"
    },
    "zj": {
      "title": "浙江省援建",
      "dec": "阿克苏地区及兵团第一师阿拉尔市。",
      "href": "http://xj.people.com.cn/GB/188750/378283/379592/index.html"
    },
    "ah": {
      "title": "安徽省援建",
      "dec": "和田地区皮山县。",
      "href": "http://xj.people.com.cn/GB/188750/378283/379218/index.html"
    },
    "fj": {
      "title": "福建省援建",
      "dec": "昌吉州昌吉市、玛纳斯县、呼图壁县、奇台县、吉木萨尔县、木垒县。",
      "href": "http://xj.people.com.cn/GB/188750/378283/379867/index.html"
    },
    "jx": {
      "title": "江西省援建",
      "dec": "克孜勒苏州阿克陶县。",
      "href": "http://xj.people.com.cn/GB/188750/378283/379194/index.html"
    },
    "sd": {
      "title": "山东省援建",
      "dec": "喀什地区麦盖提县、疏勒县、岳普湖县、英吉沙县。",
      "href": "http://xj.people.com.cn/GB/188750/378283/379868/index.html"
    },
    "hn": {
      "title": "河南省援建",
      "dec": "哈密地区及兵团第十三师。",
      "href": "http://xj.people.com.cn/GB/188750/378283/379869/index.html"
    },
    "bh": {
      "title": "湖北省援建",
      "dec": "博尔塔拉州及兵团第五师。",
      "href": "http://xj.people.com.cn/GB/188750/378283/379729/index.html"
    },
    "nh": {
      "title": "湖南省援建",
      "dec": "吐鲁番地区。",
      "href": "http://xj.people.com.cn/GB/188750/378283/379871/index.html"
    },
    "gd": {
      "title": "广东省援建",
      "dec": "喀什地区疏附县、伽师县及兵团第三师图木舒克市。",
      "href": "http://xj.people.com.cn/GB/188750/378283/379732/index.html"
    },
    "sz": {
      "title": "深圳市援建",
      "dec": "喀什地区喀什市、塔什库尔干塔吉克自治县。",
      "href": "http://xj.people.com.cn/GB/188750/378283/379212/index.html"
    }
  }
})