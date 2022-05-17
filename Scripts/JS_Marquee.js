function ShowMarquee() {
    var _options = {
        direction: 'scrollUp', // 捲動方向: scrollUp向上, scrollDown向下
        scrollNum: 1, // 一次捲動幾個<li>
        scrollSpeed: 800, // 捲動速度(ms)
        pause: 3200  // 停頓時間(ms)
    };

    var objSlider = $(".slideText");

    var timer;  // 計時器
    var $sliderUl = objSlider.children('ul');  // 容器物件裡面的<ul>
    var numLi = $sliderUl.children().length;  // 一開始有幾個<li>項目
    var $sliderLi = $sliderUl.append($sliderUl.html()).children();  // 把<ul>中的內容再重覆加入<ul>中，讓裡面有兩組內容
    var _scrollHeight = $sliderLi.height() * _options.scrollNum;  // 捲動的高度 = 一個<li>的高度 * 一次捲動幾個<li>
    var _pause = _options.pause = _options.pause + _options.scrollSpeed; // 計時器的總時間，應該要再加上捲動的時間

    

    // 捲動方向: scrollUp向上, scrollDown向下
    switch (_options.direction) {
        default:
        case 'scrollUp':
            _scrollHeight = _scrollHeight * -1;  // 向上捲動，css的top屬性要設成負值            
            break;

        case 'scrollDown':
            _scrollHeight = _scrollHeight * 1; // 向下捲動，css的top屬性要設成正值
            $sliderUl.css({ 'top': numLi * $sliderLi.height() * -1 });  // 先把 $sliderUl 的位置往上拉一半，這樣捲下來的時候才會有內容
            break;
    }

    // 滑鼠移入時停止計時器，移開再度啟動
    $sliderUl.hover(function () {
        clearTimeout(timer);
    }, function () {
        timer = setTimeout(startSlide, _pause);
    });

    //自訂義上下按鈕 shinyi 20170629
    var imgPrevious = $(".scrollUp");
    imgPrevious.hover(function () {
        clearTimeout(timer);
    }, function () {
        timer = setTimeout(startSlide, _pause);
    });

    imgPrevious.click(function () {
        SlideOne('scrollUp');
    }
    );

    //自訂義上下按鈕 shinyi 20170629
    var imgNext = $(".scrollDown");
    imgNext.hover(function () {
        clearTimeout(timer);
    }, function () {
        timer = setTimeout(startSlide, _pause);
    });

    imgNext.click(function () {
        SlideOne('scrollDown');
    }
    );

    // 控制捲動的函數
    function startSlide() {
        //alert(_scrollHeight);
        // 計算現在$sliderUl的位置是第幾次的捲動
        var _now = $sliderUl.position().top / _scrollHeight;
        _now = (_now + 1) % ($sliderLi.length / _options.scrollNum);

        // 捲動
        $sliderUl.animate({
            top: _now * _scrollHeight  // 要捲動到下一個<li>的位置
        },
        _options.scrollSpeed, // 捲動速度
        function () {  // 捲完後的callback
            switch (_options.direction) {
                default:
                case 'scrollUp':                    
                    _now = Math.round(_now); //shinyi 20190221
                   
                    //if (_now.toString().indexOf('.') > 0)
                    //    alert('aa');

                    // 如果 $sliderUl 已經捲到第二組，馬上把 top 設 0 回到第一組                           
                    if (_now == ($sliderLi.length / _options.scrollNum) / 2) {                        
                        $sliderUl.css('top', 0);
                        //('bb');
                    }
                    break;

                case 'scrollDown':                    
                    //alert($sliderUl.position().top);
                    // 如果 $sliderUl 已經捲動到 top=0 的位置時，馬上再把位置往上拉一半
                    if ($sliderUl.position().top == 0) {
                        $sliderUl.css({ 'top': numLi * $sliderLi.height() * -1 });
                    }
                    break;
            }
        });

        // 再重啟計時器
        timer = setTimeout(startSlide, _pause);
    }

    // 自訂上下捲動 shinyi 
    function SlideOne(sildeDirection) {
        // 計算現在$sliderUl的位置是第幾次的捲動

        var li_Height = $sliderLi.height(); //取li的高度       
        var _scrollHeightOne;
        if (sildeDirection == 'scrollUp')
            _scrollHeightOne = -li_Height;
        else
            _scrollHeightOne = li_Height;
        var _now = $sliderUl.position().top / _scrollHeightOne;
        _now = (_now + 1) % ($sliderLi.length / _options.scrollNum);
        _now = Math.round(_now);  //shinyi 20190221

        if (_now.toString().indexOf('.') > 0)
            alert('bb');

        //USER按的按鈕若與設定的_options.direction相反，會有問題，因此要處理一下 shinyi 20170630
        if (_options.direction == 'scrollUp') {
            //alert(_now);
            if (sildeDirection == 'scrollDown' && _now > 0) {                
                _now = 0;                
            }
        }
        else if (_options.direction == 'scrollDown') {
            if (sildeDirection == 'scrollUp') {
                //alert(numLi);
                if (_now > (numLi))
                    _now = 1;
            }
        }

        // 捲動
        $sliderUl.animate({
            top: _now * _scrollHeightOne  // 要捲動到下一個<li>的位置
        },
        100, // 捲動速度
        function () {  // 捲完後的callback
            switch (sildeDirection) {
                default:
                case 'scrollUp':
                    // 如果 $sliderUl 已經捲到第二組，馬上把 top 設 0 回到第一組
                    //alert(_now);
                    //alert(($sliderLi.length / _options.scrollNum) / 2);
                    if (_now >= ($sliderLi.length / _options.scrollNum) / 2) {
                        $sliderUl.css('top', 0);
                    }
                    break;

                case 'scrollDown':
                    //alert($sliderUl.position().top);
                    // 如果 $sliderUl 已經捲動到 top=0 的位置時，馬上再把位置往上拉一半
                    if ($sliderUl.position().top == 0) {
                        $sliderUl.css({ 'top': numLi * $sliderLi.height() * -1 });
                    }
                    break;
            }
        });
    }

    // 啟動計時器
    timer = setTimeout(startSlide, _pause);
}