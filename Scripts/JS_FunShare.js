// JScript 檔
$(document).ready(function () {
    $('.modal').attr('data-backdrop', 'static');
    $('.modal').attr('data-keyboard', 'false');
    hoverNav(); //hover and show navbar Lily 20210615
})

//SweetAlert Lily 20190515
function fConfirm(ctl, content, type) {
    var defaultAction = $(ctl).attr("name");
    event.preventDefault(); //終止預設行為 postback

    var text = content;
    var type = type;

    if (type == "confirm") {
        var deleteAction = $(ctl).prop("href");
        Swal.fire({
            title: "Are you sure？",
            icon: "warning",
            showCancelButton: true,
            buttonsStyling: false,
            customClass: {
                confirmButton: "btn btn-danger btn-lg mr-3",
                cancelButton: "btn btn-lg"
            },
            allowOutsideClick: false, //dismiss the modal by clicking outside
            allowEscapeKey: false, //dismiss the modal by pressing the Esc key
            html: text
        }).then(function (res) {
            if (res.isConfirmed) {
                if (typeof (deleteAction) === "undefined")
                    __doPostBack(defaultAction, '');
                else
                    eval(deleteAction);
                return true;
            }
            else {
                return false;
            }
        });
    }
    else if (type == "error") {
        Swal.fire({
            title: "Error Message",
            icon: type,
            buttonsStyling: false,
            customClass: {
                confirmButton: "btn btn-danger btn-lg"
            },
            allowOutsideClick: false, //dismiss the modal by clicking outside
            allowEscapeKey: false, //dismiss the modal by pressing the Esc key
            html: text
        });
        return false;
    }
    else if (type == "success") {
        Swal.fire({
            title: "Successfully",
            icon: type,
            buttonsStyling: false,
            customClass: {
                confirmButton: "btn btn-info btn-lg"
            },
            allowOutsideClick: false, //dismiss the modal by clicking outside
            allowEscapeKey: false, //dismiss the modal by pressing the Esc key
            html: text
        });
        return false;
    }
    else {
        Swal.fire({
            title: "System Information",
            icon: type,
            buttonsStyling: false,
            customClass: {
                confirmButton: "btn btn-info btn-lg"
            },
            allowOutsideClick: false, //dismiss the modal by clicking outside
            allowEscapeKey: false, //dismiss the modal by pressing the Esc key
            html: text
        });
        return false;
    }
    return false;
}

//JS 呼叫 Bootstrap Modal
function show_modal(ctl) {
    var pnlid = $(ctl).attr('id');
    //Reset Modal 位置 - Center
    $('#' + pnlid).modal('show');
    if (!$(".modal.in").length) {
        $(".modal-dialog").css({
            top: 0,
            left: 0
        });
    }
    $('#' + pnlid).on("shown.bs.modal", function () {
        $(ctl).find(":text, textarea").filter(":visible:enabled").first().focus();
    })
}

//JS 關閉 Bootstrap Modal
function hide_modal(ctl) {
    var pnlid = $(ctl).attr('id');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    $('#' + pnlid).modal('hide');
}

/* setup file upload  20190618
 * uploadAsync: "false":同步上傳/"true":非同步上傳
 * e.g. 同步上傳: filebatchpreupload- 方法
        非同步上傳:filepreupload- 方法 */
function setupFileUploadBox(fileSelect, maxFileCount) {
    var $Inputfile = $("#" + $(fileSelect).attr("id"));
    $Inputfile.fileinput({
        language: 'zh-TW', //支援中文       
        showUpload: true,
        showPreview: true,
        showAjaxErrorDetails: false,
        browseOnZoneClick: true, //允許點擊拖曳區上傳檔案
        //dropZoneEnabled: false, //不允許拖曳上傳
        preferIconicPreview: true,
        uploadAsync: false, //"false":同步上傳/"true":非同步上傳
        maxFileCount: maxFileCount,
        minFileSize: null,
        maxFileSize: 102400, //單位：KB，每個檔案不可超過 100 MB (102400 KB = 100 MB)
        browseLabel: 'Browse',
        fileActionSettings: {
            showRemove: true,  //顯示上傳預覽中的刪除圖標
            showUpload: false,  //不顯示上傳預覽中的上傳圖標
            showZoom: false,  //不顯示上傳預覽中的預覽
        },
        previewFileIcon: '<span class="glyphicon glyphicon-file"></span>',
        previewFileIconSettings: {
            'zip': '<span class="glyphicon glyphicon-floppy-disk"></span>',
            'htm': '<span class="glyphicon glyphicon-file"></span>',
            'txt': '<span class="glyphicon glyphicon-file"></span>',
            'mov': '<span class="glyphicon glyphicon-film"></span>',
            'mp3': '<span class="glyphicon glyphicon-music"></span>',
        },
        previewFileExtSettings: {
            'zip': function (ext) {
                return ext.match(/(zip|rar|tar|gzip|gz|7z)$/i);
            },
            'htm': function (ext) {
                return ext.match(/(cs|aspx|php|js|css|map|htm|html)$/i);
            },
            'txt': function (ext) {
                return ext.match(/(ppt|pptx|doc|docx|csv|xls|xlsx|pdf|mui|json|bat|txt|ini|md|log|lnk)$/i);
            },
            'mov': function (ext) {
                return ext.match(/(avi|mpg|mkv|mov|mp4|3gp|webm|wmv)$/i);
            },
            'mp3': function (ext) {
                return ext.match(/(mp3|wav)$/i);
            },
        },
        uploadUrl: self.location.href //must set a valid URL here else you will get an error
    }).on('filebatchpreupload', filebatchpreupload);
    $Inputfile.on('filebatchselected', filebatchselected);
    $Inputfile.on('filebatchuploadsuccess ', filebatchuploadsuccess).on('filebatchuploaderror', filebatchuploaderror);
    $('.file-preview-status').css("display", "none");
}

//當選擇一個或多個檔案時，判斷每個檔案是否超過 100 MB
function filebatchselected(event, files) {
    $('.fileinput-upload-button').css("display", "");
    var rmvbtn = document.getElementsByClassName('kv-file-remove');
    var selectedNodeID = $("#" + window[$(".tree")[0].id + "_Data"].selectedNodeID.value)[0];
    var selectedNodeValue = selectedNodeID.href.substring(selectedNodeID.href.indexOf(",") + 3, selectedNodeID.href.length - 2).split("\\").pop();
    var $errorContainer = $('.file-preview').find('.kv-fileinput-error');
    $errorContainer.fadeIn(800);

    var FileList = [], list = [];
    for (i = 0; i < rmvbtn.length; i++) {
        var $previewContainer = $('.file-preview-thumbnails').find('.kv-preview-thumb')[i];
        var name = $previewContainer.title == "" ? $('.file-preview-thumbnails').find('.file-footer-caption')[i].title : $previewContainer.title;

        if (list.indexOf(name.toLowerCase()) < 0) {
            if (name.split('.').pop() == "exe") {
                var msg = "File <b class='text-danger'>" + name + "</b> contains unallowed file types, please <b class='text-danger'>Zip</b> it and upload again.";
                e = '<li data-file-id="' + $previewContainer.id + '">' + msg + '</li>';
                $(rmvbtn[i]).click();
                $errorContainer.html(function () {
                    if ($(this).find('ul').length === 0)
                        return "<span class='close kv-error-close'>&times;</span>" + "<ul>" + e + "</ul>";
                    else
                        $(this).find('ul').append(e);
                });
            }
            else {
                var tempsize = parseInt($("[id*=hdf_TempSize]").val());
                for (j = 0; j < files.length; j++) {
                    var filename = files[j].name.replace("-", "_");
                    var size = files[j].size;
                    if (name == filename) {
                        tempsize = tempsize + size;
                        break;
                    }
                }
                //限制個人在每個 Node 下的暫存空間為 500 MB
                if (tempsize > 524288000) {
                    tempsize = tempsize - size;
                    var msg = "File \"" + name + "\" (<b class='text-danger'>" + formatBytes(size, 2) + "</b>) exceeds maximum allowed temp size of <b class='text-danger'>500 MB</b>.";
                    e = '<li data-file-id="' + $previewContainer.id + '">' + msg + '</li>';
                    $(rmvbtn[i]).click();
                    $errorContainer.html(function () {
                        if ($(this).find('ul').length === 0)
                            return "<span class='close kv-error-close'>&times;</span>" + "<ul>" + e + "</ul>";
                        else
                            $(this).find('ul').append(e);
                    });
                }
                else {
                    list.push(name.toLowerCase());
                    FileList.push({
                        name: name,
                        selectedNodeValue: selectedNodeValue
                    });
                }
            }
        }
        else {
            $(rmvbtn[i]).click();
        }
    }
    if ($(".kv-fileinput-error").find('ul').length === 0)
        $(".kv-fileinput-error").css("display", "none");

    $errorContainer.find('.kv-error-close').click(function () {
        $errorContainer.fadeOut('slow');
    });

    var jsonData = JSON.stringify({ JsonFile: FileList });
    //使用 WebService 驗證檔案是否已在 Server 存在
    $.ajax({
        type: "POST",
        url: "../WebService/WS_FileUpload.asmx/fCheckUploadFile",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var data = response.d, files = data[0], msg = data[1];
            if (typeof (msg) !== "undefined") {
                Swal.fire({
                    title: "Files already exist",
                    icon: "warning",
                    buttonsStyling: false,
                    customClass: {
                        confirmButton: "btn btn-danger btn-lg mr-3"
                    },
                    allowOutsideClick: false, //dismiss the modal by clicking outside
                    allowEscapeKey: false, //dismiss the modal by pressing the Esc key
                    html: msg
                }).then(function (res) {
                    if (res.isConfirmed) {
                        var filename = files[0], editdata = [];
                        //將重複且須編輯的檔案存入 session，在上傳時再傳入後端
                        for (i = 0; i < filename.length; i++) {
                            var editfilename = filename[i], actions = $("input:radio[name='" + filename[i] + "']:checked").val();
                            editdata.push({
                                editfilename: editfilename,
                                actions: actions
                            });
                        }
                        sessionStorage.setItem("editdata", JSON.stringify(editdata));
                    }
                });
            }
        },
        error: function (res) {
            fConfirm(this, "<b class='text-info'>Ooops! " + res.status + " " + res.statusText + "</b>", "error");
        }
    });
}

//上傳時，按下上傳按鈕後，所有檔案同步上傳僅上傳一次，filepreupload 會上傳多次
function filebatchpreupload(event, data) {
    var form = data.form, files = data.files, totalfilesize = 0;
    for (i = 0; i < files.length; i++) {
        if (typeof (files[i]) !== "undefined") {
            var timeStamp = new Date($.now()).localeFormat("yyyy-MM-dd hh:mm:ss") + "." + new Date().getMilliseconds();
            var name = files[i].name
            totalfilesize += files[i].size;
            form.append("uploadtime", timeStamp.toString());
            form.append("name", name.toString());
        }
    };
    form.append("totalfilesize", totalfilesize.toString());
    if (sessionStorage.getItem("editdata") != null) {
        var editdata = JSON.parse(sessionStorage.editdata);
        for (i = 0; i < editdata.length; i++) {
            var editfilename = editdata[i].editfilename, actions = editdata[i].actions;
            form.append("editfilename", editfilename.toString());
            form.append("actions", actions.toString());
        }
        sessionStorage.removeItem("editdata");
    }
}

//成功回傳 Json Response
function filebatchuploadsuccess(event, data) {
    var files = data.files, response = data.response, filescount = data.filescount;
    var selectedMapID = ($("#" + $(".filemap")[0].id)).find("span:last-child>div").children()[1];

    if (response.indexOf("success") != -1) {
        var fileStr = filescount == 1 ? "file has" : "files have";
        filesuccessremove();  //成功上傳檔案後移除 Preview
        eval(selectedMapID.href); //PostBack After UploadFile
        fConfirm(this, "<b class='text-danger'>" + filescount + "</b>" + " " + fileStr + " " + " been uploaded success.", "success");
    }
    else {
        //失敗上傳檔案後移除 Preview，並重新上傳
        $(".fileinput-remove-button").click();
        fConfirm(this, response, "error");
    }
}

//上傳檔案時發生錯誤，無法正確回傳 Json Response
function filebatchuploaderror(event, data, msg) {
    if (data.jqXHR.responseText == "") {
        msg = "File not found.";
    }
    $(".fileinput-remove-button").click();

    //移除 error 的 class
    setTimeout(function () {
        $('.file-error-message').css("display", "none");
        $(".file-input").removeClass("has-error");
    }, 50);

    fConfirm(this, msg, "error");
}

//成功上傳檔案後移除 Preview
function filesuccessremove() {
    $("#pnl_fileupload").removeClass('in');
    $("#btn_AddFile").addClass('collapsed');
    $("#pnl_fileupload").attr('aria-expanded', false);
    $("#btn_AddFile").attr('aria-expanded', false);
    $('#btn_AddFile').css("display", "");
    $('#btn_CancelAddFile').css("display", "none")
    $(".fileinput-remove-button").click();
    $(".fileinput-remove-button").trigger("click");
}

function windowsResize() {
    var winw = $(window).width(), winh = $(window).height(), header = $(".main-nav").height() + $(".sub-nav").height() + parseInt($(".sub-nav").css('border-top-width'), 10), footer = $("footer")[0].offsetHeight,
        nav = $(".navbar-collapse.in").outerHeight() == null ? 0 : $(".navbar-collapse.in").outerHeight();
    $(".main-section").css("height", winh - (header + footer));
    var element = document.querySelectorAll('.main-nav.navbar .nav-item');
    var elementArr = Array.prototype.slice.call(element); //foreach() only works on Array
    elementArr.forEach(function (everyitem) {
        var el_link = everyitem.querySelector('a');
        var nextEl = el_link.nextElementSibling;

        if (nextEl != null) {
            if (winw < 768) {
                el_link.removeAttribute('data-bs-toggle');
                el_link.setAttribute('data-toggle', 'dropdown');
            }
            else {
                el_link.setAttribute('data-bs-toggle', 'dropdown');
                el_link.removeAttribute('data-toggle');
            }
        }
    });

    $(window).resize(function () {
        var winw = $(window).width(), winh = $(window).height(), header = $(".main-nav").height() + $(".sub-nav").height() + parseInt($(".sub-nav").css('border-top-width'), 10), footer = $("footer")[0].offsetHeight,
            nav = $(".navbar-collapse.in").outerHeight() == null ? 0 : $(".navbar-collapse.in").outerHeight();

        if (winw < 768)
            header = header - nav;

        var element = document.querySelectorAll('.main-nav.navbar .nav-item');
        var elementArr = Array.prototype.slice.call(element); //foreach() only works on Array
        elementArr.forEach(function (everyitem) {
            var el_link = everyitem.querySelector('a');
            var nextEl = el_link.nextElementSibling;

            if (nextEl != null) {
                if (winw < 768) {
                    el_link.removeAttribute('data-bs-toggle');
                    el_link.setAttribute('data-toggle', 'dropdown');
                }
                else {
                    el_link.setAttribute('data-bs-toggle', 'dropdown');
                    el_link.removeAttribute('data-toggle');
                }
            }
        });
        hoverNav(); //hover and show navbar

        $(".main-header").css("height", header);
        $(".main-section").css("height", winh - (header + footer));
    });
}

//hover and show navbar Lily 20210615
function hoverNav() {
    var winw = $(window).width();
    var element = document.querySelectorAll('.main-nav.navbar .nav-item');
    var elementArr = Array.prototype.slice.call(element); //foreach() only works on Array

    // make it as accordion for smaller screens
    if (winw > 768) {
        elementArr.forEach(function (everyitem) {
            everyitem.addEventListener('mouseover', function (e) {
                var el_link = this.querySelector('a[data-bs-toggle]');
                if (el_link != null) {
                    var nextEl = el_link.nextElementSibling;
                    everyitem.classList.add('show');
                    el_link.setAttribute('aria-expanded', true);

                    if (nextEl != null)
                        nextEl.classList.add('show');
                }
            });
            everyitem.addEventListener('mouseleave', function (e) {
                var el_link = this.querySelector('a[data-bs-toggle]');
                if (el_link != null) {
                    var nextEl = el_link.nextElementSibling;
                    everyitem.classList.remove('show');
                    el_link.setAttribute('aria-expanded', false);
                    if (nextEl != null)
                        nextEl.classList.remove('show');
                }
            })
        });
    }
}

//轉換檔案大小單位
function formatBytes(bytes, decimals) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

//Get SelectedTab After PostBack
function getTab(selectedTab) {
    var tabID = selectedTab.val() != "" ? selectedTab.val() : "filelist";
    $("div[id='" + tabID + "']").addClass("in active");
    $('.nav-tabs a[href="#' + tabID + '"]').tab('show');
    $(".nav-tabs a").click(function () {
        selectedTab.val($(this).attr("href").replace("#", ""));
    });
}

//ShowTimeOut Dialog Lily 20190705
function setupDialogTimer() {
    var counter = 60;
    var logoutPath = location.protocol + "//" + location.host + "/TQMISO/Index.aspx";
    var text = "Your page will be refreshed in <span id='timeout-countdown' class='text-danger'></span> seconds.<br/>" + "Do you want to keep using?";
    Swal.fire({
        title: "Your session is about to expire!",
        icon: "info",
        //showCancelButton: true,
        confirmButtonText: "Keep Using",
        //cancelButtonText: "Sign Out",
        buttonsStyling: false,
        customClass: {
            confirmButton: "btn btn-info btn-lg mr-3",
            //cancelButton: "btn btn-lg"
        },
        allowOutsideClick: false, //dismiss the modal by clicking outside
        allowEscapeKey: false, //dismiss the modal by pressing the Esc key
        html: text
    }).then(function (res) {
        if (res.isConfirmed) { window.location = window.location.href; }
        //else { window.location = logoutPath }
    });

    var Countdown = setInterval(function () {
        $("#timeout-countdown").html(counter);
        counter -= 1;
        if (counter <= 0) {
            clearInterval(Countdown);
            window.location = window.location.href;
        }
    }, 1000);
}

//Add draggable image element Lily 20210525
function DragElement(id) {
    const element = document.getElementById(id);
    const panzoom = Panzoom(element, {
        animate: false,
        canvas: false,
        cursor: 'move',
    });
    const parent = element.parentElement;
    parent.addEventListener('wheel', panzoom.zoomWithWheel);
}

//Control image element Lily 20210525
var angle = 0, scale = 1;
function fControlImage(ctrl) {
    var control = $(ctrl).data("control"), displayImg = $("#" + $(ctrl).data("controlid"));
    if (control.indexOf("rotate") != -1) {
        if (control == "rotate-right")
            angle += 90;
        else if (control == "rotate-left")
            angle -= 90;
    }
    else if (control.indexOf("zoom") != -1) {
        if (control == "zoom-in")
            scale = scale * 1.5;
        else if (control == "zoom-out")
            scale = scale / 1.5;
    }
    displayImg.css('transform', 'rotate(' + angle + 'deg) scale(' + scale + ')');
}

//Random RGB Color Lily 20190808
function dynamicColors() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgba(" + r + "," + g + "," + b + ", 0.5)";
}

//顯示訊息
function showmessage(message) {
    setTimeout("alert('" + message + "')", 30)
}

//全選、取消全選********************************
function jsCheckAll(checkAllBox) {
    for (i = 0; i < document.form1.length; i++) {
        e = document.form1.elements[i];
        if (e.type == 'checkbox')
            e.checked = true;
    }
    document.form1.uncheckall.checked = false;
    document.getElementById("btn_Yes").style.visibility = "visible";
}

function jsUnCheckAll() {
    //alert('begin');
    for (i = 0; i < document.form1.length; i++) {
        if (document.form1.elements[i].type == 'checkbox') {
            document.form1.elements[i].checked = false;
            document.getElementById("btn_Yes").style.visibility = "hidden";
        }

    }
    document.form1.uncheckall.checked = true;
}

function jsUnCheckOne(newvalue) {
    document.form1.checkall.checked = false;
    document.form1.uncheckall.checked = false;

    var chkint = 0;
    for (i = 0; i < document.form1.length; i++) {
        e = document.form1.elements[i];

        if (e.type == 'checkbox')
            if (e.checked == true) {
                chkint += 1;
            }
    }

    if (chkint > 0) {
        document.getElementById("btn_Yes").style.visibility = "visible";
    }
    else {
        document.getElementById("btn_Yes").style.visibility = "Hidden";
    }
}

//判斷輸入是否為數字**************************************************************************
//onkeyup="Check_Number(this);"
//搭配Validate_Number()一起用
function Check_Number(obj_fsorganizeid) {
    if (obj_fsorganizeid.value.substr(0, 1) == "-") {
        //do nothing
    }
    else {
        if (isNaN(obj_fsorganizeid.value) == true) {
            obj_fsorganizeid.focus();
            //showmessage("輸入錯誤 -- 需為數字格式!!");
            jAlert('Input error -- pleae enter number!!', 'System Information')
            obj_fsorganizeid.value = "";
        }
    }
}

//onblur="Validate_Number(this);"
function Validate_Number(obj_fsorganizeid) {
    if (isNaN(obj_fsorganizeid.value) == true) {
        obj_fsorganizeid.focus();
        //showmessage("輸入錯誤 -- 需為數字格式!!");
        jAlert('Input error -- pleae enter number!!', 'System Information')
        obj_fsorganizeid.value = "";
    }
}

//只能輸入特定字元
//IE10以後版本不能使用document.selection.createRange(). shinyi 20160305
function regInput(obj, reg, inputStr) {

    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
    (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
    (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
    (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

    //if (Sys.ie) document.write('IE: ' + Sys.ie);
    //if (Sys.firefox) document.write('Firefox: ' + Sys.firefox);
    //if (Sys.chrome) document.write('Chrome: ' + Sys.chrome);
    //if (Sys.opera) document.write('Opera: ' + Sys.opera);
    //if (Sys.safari) document.write('Safari: ' + Sys.safari);

    if (Sys.ie && Sys.ie < 11.0) //IE11以下版本
    {
        //數字 /^[0-9]*$/
        //小數點2碼數字 /^\d*\.?\d{0,2}$/
        //日期格式 /^\d{1,4}([-\/](\d{1,2}([-\/](\d{1,2})?)?)?)?$/
        var docSel = document.selection.createRange();
        if (docSel.parentElement().tagName != "INPUT") return false
        oSel = docSel.duplicate()
        oSel.text = ""
        var srcRange = obj.createTextRange()
        oSel.setEndPoint("StartToStart", srcRange)
        //alert(oSel.text);
        //alert(srcRange.text);
        var str = oSel.text + inputStr + srcRange.text.substr(oSel.text.length)
        return reg.test(str)
    }
    else {
        if (document.getSelection()) //IE11或其他Browser
        {
            if (obj.tagName.toLowerCase() == "textarea" || obj.tagName.toLowerCase() == "input") {
                var startPos = obj.selectionStart; //取得鼠標位置
                var srcRange = obj.value.substr(0, startPos); //取得鼠標位置前的字串
                //alert(srcRange);
                //alert(obj.value);

                //obj.value --> srcRange.text
                //srcRange -- >oSel.text             

                var text = obj.value; //取得目前在文字方塊內的文字
                //inputStr為USER當下KEY的文字

                //if (text == "" && inputStr == ".") //避免第一個字是小數點
                //    return false;
                //else
                //{
                //    var str = srcRange + inputStr + text.substr(srcRange.length);
                //    return reg.test(str)
                //}
                var str = srcRange + inputStr + text.substr(srcRange.length);
                return reg.test(str)
            }
        }
    }
}

//只能輸入數字(整數)
function IsIntText() {
    var charkeycode = window.event.keyCode;
    if (charkeycode > 47 && charkeycode < 58) {
        return true;
    }
    return false;
}

//只能輸入數字(可有小數)
/*
    digilength:取到小數點幾位，傳入NULL則不限制 ex: onKeyPress="return IsFloatText(this, String.fromCharCode(event.keyCode), null);"  
*/
function IsFloatText(e, inputStr, digilength) //digilength
{
    var charkc = window.event.keyCode;
    if (charkc == 46 || (charkc >= 48 && charkc <= 57)) {
        if (e.value == "" && inputStr == ".") //第一個字不能為小數點
        {
            return false;
        }
        else {
            var idx = e.value.indexOf('.');

            if (idx > 0) {
                if (inputStr == ".") //不能有一個以上的小數點                        
                    return false;
                else {
                    if (digilength != null) //傳入NULL則不限制
                    {
                        if ((e.value.length - idx) > digilength)
                            return false;
                    }
                }
            }
            return true;
        }
    }
    return false;
}