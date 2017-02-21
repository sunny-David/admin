/**
 * Created by Administrator on 2016/12/26.
 */
$(function(){

    //var on_off=true;

    var tab_item=$(".nav-content>.tab-item");

    //tab_item.attr("on_off",true);

    /*主菜单*/
    $(".z-nav").find(".nav-item").each(function(index){
        tab_item.attr("on_off",true);
        $(this).click(function(){
            $(this).addClass("ckecked").siblings().removeClass("ckecked");
            tab_item.eq(index).removeClass("hide").addClass("choose").siblings().addClass("hide").removeClass("choose");

        });
        tab_item.eq(index).find(".second-slib-icon").click(function(){
            if(tab_item.eq(index).attr("on_off")=="true"){
                $(this).parents(".tab-item").addClass("collapse");
                tab_item.eq(index).attr("on_off","false");
            }else{
                $(this).parents(".tab-item").removeClass("collapse");
                tab_item.eq(index).attr("on_off","true");
            };
        });

    });





    /*右侧菜单-左侧内容高度*/
    var H=$(window).height();
    var second_nav_H=H-75;
    var tab_content_wrap_H=H-75-21;
    $(".second-nav").css("height",second_nav_H+"px");
    $(".tab-content-wrap").css("height",tab_content_wrap_H+"px");


    /*二级菜单*/

    $(".menu-item>.menu-title").click(function(){

        var arrow=$(this).find(".fa");
        if(arrow.hasClass("fa-angle-down")){
            arrow.removeClass("fa-angle-down");
            arrow.addClass("fa-angle-up");
        }else if(arrow.hasClass("fa-angle-up")){
            arrow.removeClass("fa-angle-up");
            arrow.addClass("fa-angle-down");
        };

        $(this).parent().find("ul.menu").slideToggle();

    });

    //alert($(".item").length)


/*
    $(".nav-content").find(".tab-item").each(function(){
        if($(this).hasClass("show")){
            $(this).find(".item").click(function(){
                console.log($(this).find(".tab-nav-item").length);
            });
        };
    });
*/

    /*三级菜单*/
    $(".menu .item").click(function(){

        var _this=$(".nav-content").find(".choose");

        var tab_nav_list=_this.find(".tab-nav-list");/*动态菜单UL*/
        var tab_nav_bar=_this.find(".tab-nav-bar");
        var arrow_left=_this.find(".arrow-left");
        var arrow_right=_this.find(".arrow-right");
        var tab_nav_title=$(this).find("em").text();
        var URL=$(this).attr("title");

        //console.log(URL);

        _this.find(".menu-item-selected").removeClass("menu-item-selected");
        $(this).addClass("menu-item-selected");

        var nav_item=$(
            '<li class="tab-nav-item tab-nav-active">'+
                '<div class="left"></div>'+
                    '<div class="tab-nav-item-inner">'+
                        '<span class="tab-nav-title">'+tab_nav_title+'</span>'+
                        '<div class="tab-item-close"></div>'+
                    '</div>'+
                '<div class="right"></div>'+
            '</li>'
        );


        tab_nav_list.find(".tab-nav-item").removeClass("tab-nav-active").end().append(nav_item);
        //console.log(_this.find(".tab-nav-item").length)


        /*动态菜单 UL的宽度*/
        var W=$(window).width();

        //console.log(_this.find(".tab-nav-item").length);

        var tab_nav_list_W=140*_this.find(".tab-nav-item").length;
        var tab_nav_list_L=W-215-tab_nav_list_W;
        tab_nav_list.css("width",tab_nav_list_W+"px");

        /*UL左右调节*/

        if(tab_nav_list_W>(W-215)){
            tab_nav_list.css("left",(tab_nav_list_L)+"px");
            tab_nav_bar.addClass("arrow-active-right");

            $(".arrow-active-right").find(arrow_right).click(function(){
                tab_nav_list.animate({left:"0px"});
                tab_nav_bar.removeClass("arrow-active-right").addClass("arrow-active-left");
            });
            tab_nav_bar.find(arrow_left).click(function(){
                var tab_nav_list_l=W-215-(140*_this.find(".tab-nav-item").length);
                tab_nav_list.animate({left:tab_nav_list_l+"px"});
                tab_nav_bar.removeClass("arrow-active-left").addClass("arrow-active-right");
            });
        };


        /*切换URL地址*/
        var iframe_content=$(
            '<iframe frameborder="0" width="100%" height="100%" src="views/'+URL+'"></iframe>'
        );
        //console.log(_this.find(".tab-content").children().length)
        _this.find(".tab-content").children().addClass("hide").end().append(iframe_content);





        //var tab_item_close=$(".tab-item-close");
        //tab_nav_list.find(".tab-item-close").each(function(index){
/*
        tab_nav_list.find(".tab-item-close").on("mouseover mouseout click",function(e){
                e.stopPropagation();
                if(e.type=="mouseover"){
                    $(this).addClass("tab-item-close-hover");
                }else if(e.type=="mouseout"){
                    $(this).removeClass("tab-item-close-hover");
                }else if(e.type=="click"){
                    e.stopPropagation();
                    var item=$(this).parents(".tab-nav-item");
                    var i=item.index();
                    console.log(i);
                    _this.find(".tab-content").children().eq(i).remove();

                    item.remove();


/!*
                    if($(this).parents(".tab-nav-item").hasClass("tab-nav-active")){
                         $(this).parents(".tab-nav-item").prev(".tab-nav-item").addClass("tab-nav-active");
                         $(this).parents(".tab-nav-item").remove();
                         _this.find(".tab-content").children().eq(index-1).removeClass("hide").addClass("show");
                         console.log("true");
                         }else {
                            $(this).parents(".tab-nav-item").remove();
                            console.log(index);
                            _this.find(".tab-content").children().eq(index).remove();
                            console.log("false");
                         };
*!/
                };
            });
*/
        });
    //});


    /*close*/
    $(".tab-nav-list").on("click",".tab-item-close",function(){
        var _this=$(".nav-content").find(".choose");
        var item=$(this).parents(".tab-nav-item");
        var i=item.index();
        var n=$(this).parents(".tab-nav-list").children().length-1;
        console.log(i);
        console.log($(this).parents(".tab-nav-list").children().length-1);

        if($(this).parents(".tab-nav-item").hasClass("tab-nav-active") && i==n){
            item.prev(".tab-nav-item").addClass("tab-nav-active");
            //console.log(i);
            //_this.find(".tab-content").children().eq(i-1).prev("iframe").removeClass("hide").addClass("show");
            //_this.find(".tab-content").children().removeClass("show").addClass("hide").eq(i).addClass("show");
            console.log("true");
        } else if($(this).parents(".tab-nav-item").hasClass("tab-nav-active") && i<n){
            $(this).parents(".tab-nav-list").children().eq(n).addClass("tab-nav-active");
        };

        _this.find(".tab-content").children().eq(i).remove();
        item.remove();

    });

    /*选中的菜单项*/
    $(".tab-nav-list").on("click",".tab-nav-item",function(){
        var _this=$(".nav-content").find(".choose");
        var i=$(this).index();
        $(this).addClass("tab-nav-active").siblings().removeClass("tab-nav-active");
        _this.find(".tab-content").children().removeClass("show").addClass("hide").eq(i).removeClass("hide").addClass("show");
    });
/*
    tab_nav_list.find(".tab-nav-item").each(function(index){
        $(this).click(function(){
            $(this).addClass("tab-nav-active").siblings().removeClass("tab-nav-active");
        });
    });
*/


});















