<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Spec_v1.aspx.cs" Inherits="EsgSystem_Spec_v1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>ESG System SPEC_V1</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="css/W3School_w3.css" rel="stylesheet" />
    <link href="css/GoogleAPI_Raleway.css" rel="stylesheet" />
    <link href="css/Cloudlare_font-awesome.min.css" rel="stylesheet" />
    <link href="css/glyphicon.css" rel="stylesheet" />
    <script src="../Scripts/Chart.min.js"></script>
    <%--<script src="../Scripts/jquery-1.10.2.js"></script>
    <script src="../Scripts/Scripts/jquery-1.10.2.min.js"></script>
    <script src="../Scripts/Scripts/jquery-ui.js"></script>--%>

    <style>
        html, body, h1, h2, h3, h4, h5 {
            font-family: sans-serif;
        }

        .specLabel {
            color: #2196f3;
            font-weight: bold;
        }

        .subspecLabel {
            color: #9a9a9a;
            font-weight: bold;
        }

        .scenLabel {
            color: #49a010;
            font-weight: bold;
        }

        .scenTitle {
            color: #000000;
            font-weight: bold;
            font-size: larger;
        }



        /* Tree Node*/
        ul, #myUL {
            list-style-type: none;
        }

        #myUL {
            margin: 0;
            padding: 0;
        }

        .caret {
            cursor: pointer;
            -webkit-user-select: none; /* Safari 3.1+ */
            -moz-user-select: none; /* Firefox 2+ */
            -ms-user-select: none; /* IE 10+ */
            user-select: none;
        }

            .caret::before {
                content: "\25B6";
                color: black;
                display: inline-block;
                margin-right: 6px;
            }

        .caret-down::before {
            -ms-transform: rotate(90deg); /* IE 9 */
            -webkit-transform: rotate(90deg); /* Safari */
            transform: rotate(90deg);
        }

        .nested {
            display: none;
        }

        .active {
            display: block;
        }
    </style>

    <script>

        //Tree Node 展開
        var toggler = document.getElementsByClassName("caret");
        var i;

        for (i = 0; i < toggler.length; i++) {
            toggler[i].addEventListener("click", function () {
                this.parentElement.querySelector(".nested").classList.toggle("active");
                this.classList.toggle("caret-down");
            });
        }

        // Get the Sidebar
        var mySidebar = document.getElementById("mySidebar");

        // Get the DIV with overlay effect
        var overlayBg = document.getElementById("myOverlay");

        // Toggle between showing and hiding the sidebar, and add overlay effect
        function w3_open() {
            if (mySidebar.style.display === 'block') {
                mySidebar.style.display = 'none';
                overlayBg.style.display = "none";
            } else {
                mySidebar.style.display = 'block';
                overlayBg.style.display = "block";
            }
        }

        // Close the sidebar with the close button
        function w3_close() {
            mySidebar.style.display = "none";
            overlayBg.style.display = "none";
        }

        function closeAll() {
            var div_BoundrySetting = document.getElementById("div_BoundrySetting");
            var div_IndicatorSetting = document.getElementById("div_IndicatorSetting");
            var div_KpiBaseSetting = document.getElementById("div_KpiBaseSetting");
            var div_GroupSetting = document.getElementById("div_GroupSetting");
            var div_IntStdSetting = document.getElementById("div_IntStdSetting");
            var div_DashOverSetting = document.getElementById("div_DashOverSetting");
            var div_DashboardOverview = document.getElementById("div_DashboardOverview");
            var div_DashboardDetail = document.getElementById("div_DashboardDetail");



            div_BoundrySetting.style.display = "none";
            div_IndicatorSetting.style.display = "none";
            div_KpiBaseSetting.style.display = "none";
            div_GroupSetting.style.display = "none";
            div_IntStdSetting.style.display = "none";
            div_DashOverSetting.style.display = "none";
            div_DashboardOverview.style.display = "none";
            div_DashboardDetail.style.display = "none";
        }

        document.addEventListener("DOMContentLoaded", function (event) {
            closeAll();
        });

        function BoundrySetting_Click() {
            closeAll();
            var div_BoundrySetting = document.getElementById("div_BoundrySetting");
            div_BoundrySetting.style.display = "block";
        }

        function IndicatorSetting_Click() {
            closeAll();
            var div_IndicatorSetting = document.getElementById("div_IndicatorSetting");
            div_IndicatorSetting.style.display = "block";
        }

        function GroupSetting_Click() {
            closeAll();
            var div_GroupSetting = document.getElementById("div_GroupSetting");
            div_GroupSetting.style.display = "block";
        }

        function KpiBaseSetting_Click() {
            closeAll();
            var div_KpiBaseSetting = document.getElementById("div_KpiBaseSetting");
            div_KpiBaseSetting.style.display = "block";
        }

        function EsgiKpiSetting_Click() {
            closeAll();
            //var div_GroupSetting = document.getElementById("div_GroupSetting");
            //div_GroupSetting.style.display = "block";
        }

        function IntStdSetting_Click() {
            closeAll();
            var div_IntStdSetting = document.getElementById("div_IntStdSetting");
            div_IntStdSetting.style.display = "block";
        }

        function DashOverSetting_Click() {
            closeAll();
            var div_DashOverSetting = document.getElementById("div_DashOverSetting");
            div_DashOverSetting.style.display = "block";
        }

        function DashboardOverview_Click() {
            closeAll();
            var div_DashboardOverview = document.getElementById("div_DashboardOverview");
            div_DashboardOverview.style.display = "block";
        }

        function DashboardDetail_Click() {
            closeAll();
            var div_DashboardDetail = document.getElementById("div_DashboardDetail");
            div_DashboardDetail.style.display = "block";
            fShowChart();
        }

        function fShowBoundry(type) {
            var div_KpiBaseSiteGroup = document.getElementById("div_KpiBaseSiteGroup");
            var div_KpiBaseSite = document.getElementById("div_KpiBaseSite");

            div_KpiBaseSiteGroup.style.display = "none";
            div_KpiBaseSite.style.display = "none";

            if (type == "Site") {
                div_KpiBaseSite.style.display = "block";
            }
            else if (type == "Group") {
                div_KpiBaseSiteGroup.style.display = "block";
            }
        }

        function IndcatorList_Click() {
            var div_IndcatorList = document.getElementById("div_IndcatorList");

            if (div_IndcatorList.style.display == "block") {
                div_IndcatorList.style.display = "none";
            }
            else if (div_IndcatorList.style.display == "none") {
                div_IndcatorList.style.display = "block";
            }
        }

        function fDetailYM_Click() {
            var btn_Detail_YM = document.getElementById("btn_Detail_YM");
            var spn_Detail_Y = document.getElementById("spn_Detail_Y");
            var spn_Detail_M = document.getElementById("spn_Detail_M");

            if (btn_Detail_YM.innerText == "Yearly") {
                btn_Detail_YM.innerText = "Monthly";
                spn_Detail_Y.style.display = "none";
                spn_Detail_M.style.display = "block";
            }
            else {
                btn_Detail_YM.innerText = "Yearly";
                spn_Detail_Y.style.display = "block";
                spn_Detail_M.style.display = "none";
            }
            fShowChart();
        }

        function fDetailYtd_Click() {
            var btn_MthYtd = document.getElementById("btn_MthYtd");

            if (btn_MthYtd.innerText == "YTD") {
                btn_MthYtd.innerText = "MTH";
            }
            else {
                btn_MthYtd.innerText = "YTD";
            }
            fShowChart();
        }

        function fDetailBoSite_Click() {
            var btn_BoSite = document.getElementById("btn_BoSite");
            var div_Bo = document.getElementById("div_Bo");
            var div_Site = document.getElementById("div_Site");

            if (btn_BoSite.innerText == "Group") {
                btn_BoSite.innerText = "Site";
                div_Bo.style.display = "none";
                div_Site.style.display = "flex";
            }
            else {
                btn_BoSite.innerText = "Group";
                div_Bo.style.display = "flex";
                div_Site.style.display = "none";
            }

            fShowChart();
        }

        window.chartColors = {
            red: 'rgb(255, 99, 132)',
            orange: 'rgb(255, 159, 64)',
            yellow: 'rgb(255, 205, 86)',
            green: 'rgb(75, 192, 192)',
            blue: 'rgb(54, 162, 235)',
            purple: 'rgb(153, 102, 255)',
            grey: 'rgb(201, 203, 207)',
            cpink: 'rgb(224, 114, 164)',
            apple: 'rgb(176, 226, 152)',
            glau: 'rgb(104, 131, 186)',
            umber: 'rgb(94, 80, 63)',
        };


        function randomScalingFactor() {
            return (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 100);
        };


        function fShowChart() {
            div_Canvas = document.getElementById("div_Canvas");
            canvas = document.getElementById("canvas");
            canvas.remove();
            div_Canvas.innerHTML = "<canvas id='canvas' height='100'></canvas>";
            var ctx = document.getElementById("canvas").getContext("2d");

            div_CanvasChild = document.getElementById("div_CanvasChild");
            canvaschild = document.getElementById("canvaschild");
            canvaschild.remove();
            div_CanvasChild.innerHTML = "<canvas id='canvaschild' height='100'></canvas>";
            var ctxchild = document.getElementById("canvaschild").getContext("2d");

            var btn_Detail_YM = document.getElementById("btn_Detail_YM");
            var btn_MthYtd = document.getElementById("btn_MthYtd");
            var btn_BoSite = document.getElementById("btn_BoSite");

            //BY Group//
            //Monthly Group MTH
            if (btn_Detail_YM.innerText == "Monthly" && btn_BoSite.innerText == "Group" && btn_MthYtd.innerText == "MTH") {
                var chartData = {
                    type: 'bar',
                    data: {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        datasets: [{
                            label: 'Baseline',
                            borderColor: window.chartColors.grey,
                            pointBackgroundColor: window.chartColors.grey,
                            backgroundColor: window.chartColors.grey,
                            type: 'line',
                            fill: false,
                            data: [21, 23, 23, 34, 23, 23, 21, 12, 23, 34, 32, 23]
                        }, {
                            label: 'KPI',
                            borderColor: window.chartColors.orange,
                            pointBackgroundColor: window.chartColors.orange,
                            backgroundColor: window.chartColors.orange,
                            type: 'line',
                            fill: false,
                            data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]
                        }, {
                            label: 'WT',
                            backgroundColor: window.chartColors.red,
                            stack: 'Stack 0',
                            data: [24, 67, 32, 78, 43, 56, 76, 45, 65, 78, 21, 32]
                        }, {
                            label: 'WSD',
                            backgroundColor: window.chartColors.blue,
                            stack: 'Stack 1',
                            data: [12, 43, 56, 43, 23, 45, 67, 78, 89, 78, 56, 76]
                        }, {
                            label: 'WHQ',
                            backgroundColor: window.chartColors.green,
                            stack: 'Stack 2',
                            data: [12, 32, 34, 21, 32, 32, 34, 12, 32, 32, 34, 12]
                        }]
                    },
                    options: {
                        title: {
                            display: true,
                            text: "Monthly Group value"
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false
                        },
                        responsive: true,
                        scales: {
                            xAxes: [{
                                stacked: false,
                            }],
                            yAxes: [{
                                stacked: false
                            }]
                        }
                    }
                }
            }
                //Monthly Group YTD
            else if (btn_Detail_YM.innerText == "Monthly" && btn_BoSite.innerText == "Group" && btn_MthYtd.innerText == "YTD") {
                var chartData = {
                    type: 'bar',
                    data: {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        datasets: [{
                            label: 'Baseline',
                            borderColor: window.chartColors.grey,
                            pointBackgroundColor: window.chartColors.grey,
                            backgroundColor: window.chartColors.grey,
                            type: 'line',
                            fill: false,
                            data: [21, 44, 67, 101, 124, 147, 168, 180, 203, 237, 269, 292]
                        }, {
                            label: 'KPI',
                            borderColor: window.chartColors.orange,
                            pointBackgroundColor: window.chartColors.orange,
                            backgroundColor: window.chartColors.orange,
                            type: 'line',
                            fill: false,
                            data: [600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600]
                        }, {
                            label: 'WT',
                            backgroundColor: window.chartColors.red,
                            stack: 'Stack 0',
                            data: [24, 91, 123, 201, 244, 300, 376, 421, 486, 564, 585, 617]
                        }, {
                            label: 'WSD',
                            backgroundColor: window.chartColors.blue,
                            stack: 'Stack 1',
                            data: [12, 55, 111, 154, 177, 222, 289, 367, 456, 534, 590, 666]
                        }, {
                            label: 'WHQ',
                            backgroundColor: window.chartColors.green,
                            stack: 'Stack 2',
                            data: [12, 44, 78, 99, 131, 163, 197, 209, 241, 273, 307, 319]
                        }]
                    },
                    options: {
                        title: {
                            display: true,
                            text: "YTD Group value"
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false
                        },
                        responsive: true,
                        scales: {
                            xAxes: [{
                                stacked: false,
                            }],
                            yAxes: [{
                                stacked: false
                            }]
                        }
                    }
                }
            }
                // Yearly Group MTH
            else if (btn_Detail_YM.innerText == "Yearly" && btn_BoSite.innerText == "Group" && btn_MthYtd.innerText == "MTH") {
                var chartData = {
                    type: 'bar',
                    data: {
                        labels: ["2018", "2019", "2020", "2021"],
                        datasets: [{
                            label: 'Baseline',
                            borderColor: window.chartColors.grey,
                            pointBackgroundColor: window.chartColors.grey,
                            backgroundColor: window.chartColors.grey,
                            type: 'line',
                            fill: false,
                            data: [21, 23, 23, 34]
                        },
                            {
                                label: 'KPI',
                                borderColor: window.chartColors.orange,
                                pointBackgroundColor: window.chartColors.orange,
                                backgroundColor: window.chartColors.orange,
                                type: 'line',
                                fill: false,
                                data: [50, 50, 50, 50]
                            }, {
                                label: 'WT',
                                backgroundColor: window.chartColors.red,
                                stack: 'Stack 0',
                                data: [24, 67, 32, 78]
                            }, {
                                label: 'WSD',
                                backgroundColor: window.chartColors.blue,
                                stack: 'Stack 1',
                                data: [12, 43, 56, 43]
                            }, {
                                label: 'WHQ',
                                backgroundColor: window.chartColors.green,
                                stack: 'Stack 2',
                                data: [12, 32, 34, 21]
                            }]
                    },
                    options: {
                        title: {
                            display: true,
                            text: "Monthly Group value"
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false
                        },
                        responsive: true,
                        scales: {
                            xAxes: [{
                                stacked: false,
                            }],
                            yAxes: [{
                                stacked: false
                            }]
                        }
                    }
                }
            }
                // Yearly Group YTD
            else if (btn_Detail_YM.innerText == "Yearly" && btn_BoSite.innerText == "Group" && btn_MthYtd.innerText == "YTD") {
                var chartData = {
                    type: 'bar',
                    data: {
                        labels: ["2018", "2019", "2020", "2021"],
                        datasets: [{
                            label: 'Baseline',
                            borderColor: window.chartColors.grey,
                            pointBackgroundColor: window.chartColors.grey,
                            backgroundColor: window.chartColors.grey,
                            type: 'line',
                            fill: false,
                            data: [21, 44, 67, 101]
                        }, {
                            label: 'KPI',
                            borderColor: window.chartColors.orange,
                            pointBackgroundColor: window.chartColors.orange,
                            backgroundColor: window.chartColors.orange,
                            type: 'line',
                            fill: false,
                            data: [200, 200, 200, 200]
                        }, {
                            label: 'WT',
                            backgroundColor: window.chartColors.red,
                            stack: 'Stack 0',
                            data: [24, 91, 123, 201]
                        }, {
                            label: 'WSD',
                            backgroundColor: window.chartColors.blue,
                            stack: 'Stack 1',
                            data: [12, 55, 111, 154]
                        }, {
                            label: 'WHQ',
                            backgroundColor: window.chartColors.green,
                            stack: 'Stack 2',
                            data: [12, 44, 78, 99]
                        }]
                    },
                    options: {
                        title: {
                            display: true,
                            text: "YTD Group value"
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false
                        },
                        responsive: true,
                        scales: {
                            xAxes: [{
                                stacked: false,
                            }],
                            yAxes: [{
                                stacked: false
                            }]
                        }
                    }
                }
            }

                //BY SITE//
                //Monthly Site MTH
            else if (btn_Detail_YM.innerText == "Monthly" && btn_BoSite.innerText == "Site" && btn_MthYtd.innerText == "MTH") {
                var chartData = {
                    type: 'bar',
                    data: {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        datasets: [{
                            label: 'Baseline',
                            borderColor: window.chartColors.grey,
                            pointBackgroundColor: window.chartColors.grey,
                            backgroundColor: window.chartColors.grey,
                            type: 'line',
                            fill: false,
                            data: [21, 23, 23, 34, 23, 23, 21, 12, 23, 34, 32, 23]
                        },
                            {
                                label: 'KPI',
                                borderColor: window.chartColors.orange,
                                pointBackgroundColor: window.chartColors.orange,
                                backgroundColor: window.chartColors.orange,
                                type: 'line',
                                fill: false,
                                data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]
                            }, {
                                label: 'WCD',
                                backgroundColor: window.chartColors.cpink,
                                stack: 'Stack 0',
                                data: [24, 67, 32, 78, 43, 56, 76, 45, 65, 78, 21, 32]
                            }, {
                                label: 'WTZ',
                                backgroundColor: window.chartColors.glau,
                                stack: 'Stack 1',
                                data: [12, 43, 56, 43, 23, 45, 67, 78, 89, 78, 56, 76]
                            }, {
                                label: 'WKS',
                                backgroundColor: window.chartColors.apple,
                                stack: 'Stack 2',
                                data: [12, 32, 34, 21, 32, 32, 34, 12, 32, 32, 34, 12]
                            },
                            {
                                label: 'WMX',
                                backgroundColor: window.chartColors.umber,
                                stack: 'Stack 3',
                                data: [32, 32, 54, 65, 56, 43, 56, 23, 34, 23, 43, 23]
                            }]
                    },
                    options: {
                        title: {
                            display: true,
                            text: "Monthly Site value"
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false
                        },
                        responsive: true,
                        scales: {
                            xAxes: [{
                                stacked: false,
                            }],
                            yAxes: [{
                                stacked: false
                            }]
                        }
                    }
                }
            }
                //Monthly Site YTD
            else if (btn_Detail_YM.innerText == "Monthly" && btn_BoSite.innerText == "Site" && btn_MthYtd.innerText == "YTD") {
                var chartData = {
                    type: 'bar',
                    data: {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        datasets: [{
                            label: 'Baseline',
                            borderColor: window.chartColors.grey,
                            pointBackgroundColor: window.chartColors.grey,
                            backgroundColor: window.chartColors.grey,
                            type: 'line',
                            fill: false,
                            data: [21, 44, 67, 101, 124, 147, 168, 180, 203, 237, 269, 292]
                        }, {
                            label: 'KPI',
                            borderColor: window.chartColors.orange,
                            pointBackgroundColor: window.chartColors.orange,
                            backgroundColor: window.chartColors.orange,
                            type: 'line',
                            fill: false,
                            data: [600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600]
                        }, {
                            label: 'WCD',
                            backgroundColor: window.chartColors.cpink,
                            stack: 'Stack 0',
                            data: [24, 91, 123, 201, 244, 300, 376, 421, 486, 564, 585, 617]
                        }, {
                            label: 'WTZ',
                            backgroundColor: window.chartColors.glau,
                            stack: 'Stack 1',
                            data: [12, 55, 111, 154, 177, 222, 289, 367, 456, 534, 590, 666]
                        }, {
                            label: 'WKS',
                            backgroundColor: window.chartColors.apple,
                            stack: 'Stack 2',
                            data: [12, 44, 78, 99, 131, 163, 197, 209, 241, 273, 307, 319]
                        }, {
                            label: 'WMX',
                            backgroundColor: window.chartColors.umber,
                            stack: 'Stack 3',
                            data: [32, 64, 118, 183, 239, 282, 338, 361, 395, 418, 461, 484]
                        }]
                    },
                    options: {
                        title: {
                            display: true,
                            text: "YTD Site value"
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false
                        },
                        responsive: true,
                        scales: {
                            xAxes: [{
                                stacked: false,
                            }],
                            yAxes: [{
                                stacked: false
                            }]
                        }
                    }
                }
            }
                // Yearly Site MTH
            else if (btn_Detail_YM.innerText == "Yearly" && btn_BoSite.innerText == "Site" && btn_MthYtd.innerText == "MTH") {
                var chartData = {
                    type: 'bar',
                    data: {
                        labels: ["2018", "2019", "2020", "2021"],
                        datasets: [{
                            label: 'Baseline',
                            borderColor: window.chartColors.grey,
                            pointBackgroundColor: window.chartColors.grey,
                            backgroundColor: window.chartColors.grey,
                            type: 'line',
                            fill: false,
                            data: [21, 23, 23, 34]
                        },
                            {
                                label: 'KPI',
                                borderColor: window.chartColors.orange,
                                pointBackgroundColor: window.chartColors.orange,
                                backgroundColor: window.chartColors.orange,
                                type: 'line',
                                fill: false,
                                data: [50, 50, 50, 50]
                            }, {
                                label: 'WCD',
                                backgroundColor: window.chartColors.cpink,
                                stack: 'Stack 0',
                                data: [24, 67, 32, 78]
                            }, {
                                label: 'WTZ',
                                backgroundColor: window.chartColors.glau,
                                stack: 'Stack 1',
                                data: [12, 43, 56, 43]
                            }, {
                                label: 'WKS',
                                backgroundColor: window.chartColors.apple,
                                stack: 'Stack 2',
                                data: [12, 32, 34, 21]
                            },
                            {
                                label: 'WMX',
                                backgroundColor: window.chartColors.umber,
                                stack: 'Stack 3',
                                data: [32, 32, 54, 65]
                            }]
                    },
                    options: {
                        title: {
                            display: true,
                            text: "Monthly Site value"
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false
                        },
                        responsive: true,
                        scales: {
                            xAxes: [{
                                stacked: false,
                            }],
                            yAxes: [{
                                stacked: false
                            }]
                        }
                    }
                }
            }
                // Yearly Site YTD
            else if (btn_Detail_YM.innerText == "Yearly" && btn_BoSite.innerText == "Site" && btn_MthYtd.innerText == "YTD") {
                var chartData = {
                    type: 'bar',
                    data: {
                        labels: ["2018", "2019", "2020", "2021"],
                        datasets: [{
                            label: 'Baseline',
                            borderColor: window.chartColors.grey,
                            pointBackgroundColor: window.chartColors.grey,
                            backgroundColor: window.chartColors.grey,
                            type: 'line',
                            fill: false,
                            data: [21, 44, 67, 101]
                        }, {
                            label: 'KPI',
                            borderColor: window.chartColors.orange,
                            pointBackgroundColor: window.chartColors.orange,
                            backgroundColor: window.chartColors.orange,
                            type: 'line',
                            fill: false,
                            data: [200, 200, 200, 200]
                        }, {
                            label: 'WCD',
                            backgroundColor: window.chartColors.cpink,
                            stack: 'Stack 0',
                            data: [24, 91, 123, 201]
                        }, {
                            label: 'WTZ',
                            backgroundColor: window.chartColors.glau,
                            stack: 'Stack 1',
                            data: [12, 55, 111, 154]
                        }, {
                            label: 'WKS',
                            backgroundColor: window.chartColors.apple,
                            stack: 'Stack 2',
                            data: [12, 44, 78, 99]
                        }, {
                            label: 'WMX',
                            backgroundColor: window.chartColors.umber,
                            stack: 'Stack 3',
                            data: [32, 64, 118, 183]
                        }]
                    },
                    options: {
                        title: {
                            display: true,
                            text: "YTD Site value"
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false
                        },
                        responsive: true,
                        scales: {
                            xAxes: [{
                                stacked: false,
                            }],
                            yAxes: [{
                                stacked: false
                            }]
                        }
                    }
                }
            }

            myBar = new Chart(ctx, chartData);
            myBarChild = new Chart(ctxchild, chartData);

            myBar.update();
            myBarChild.update();
        }
    </script>

</head>
<body class="w3-light-grey">
    <form id="form1" runat="server">
        <div>

            <!-- Top container -->
            <div class="w3-bar w3-top w3-black w3-large" style="z-index: 4">
                <button class="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onclick="w3_open();"><i class="fa fa-bars"></i>Menu</button>
                <span class="w3-bar-item w3-right">ESG System SPEC_V1</span>
            </div>

            <!-- Sidebar/menu -->
            <nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style="z-index: 3; width: 300px;" id="mySidebar">
                <br>
                <div class="w3-container w3-row">
                    <div class="w3-col s4">
                        <img src="img/logo.png" class="w3-circle w3-margin-right" style="width: 50px" />
                    </div>
                    <div class="w3-col s8 w3-bar">
                        <span>Welcome, <strong>User</strong></span><br />
                        <%--<a href="#" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i></a>--%>
                    </div>
                </div>
                <hr>
                <div class="w3-container">
                    <h5>Admin Setting</h5>
                </div>
                <div class="w3-bar-block">
                    <a href="#" class="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onclick="w3_close()" title="close menu"><i class="fa fa-remove fa-fw"></i>Close Menu</a>
                    <a href="#" class="w3-bar-item w3-button w3-padding" onclick="BoundrySetting_Click()"><i>○</i> 邊界設定</a>
                    <a href="#" class="w3-bar-item w3-button w3-padding" onclick="IndicatorSetting_Click()"><i>○</i> 指標設定</a>
                    <a href="#" class="w3-bar-item w3-button w3-padding" onclick="KpiBaseSetting_Click()"><i>○</i> 年度KPI設定</a>
                    <%--<a href="#" class="w3-bar-item w3-button w3-padding" onclick="GroupSetting_Click()"><i>○</i> 群組設定</a>
                    <a href="#" class="w3-bar-item w3-button w3-padding" onclick="EsgiKpiSetting_Click()"><i>○</i> ESGI KPI 設定</a>--%>
                    <a href="#" class="w3-bar-item w3-button w3-padding" onclick="IntStdSetting_Click()"><i>○</i> 國際標準設定</a>
                    <a href="#" class="w3-bar-item w3-button w3-padding" onclick="DashOverSetting_Click()"><i>○</i> Dashboard 設定</a>

                    <br />
                    <br />
                </div>
                <div class="w3-container">
                    <h5>Dashboard</h5>
                </div>
                <div class="w3-bar-block">
                    <a href="#" class="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onclick="w3_close()" title="close menu"><i class="fa fa-remove fa-fw"></i>Close Menu</a>
                    <a href="#" class="w3-bar-item w3-button w3-padding" onclick="DashboardOverview_Click()"><i>○</i> 首頁</a>
                    <a href="#" class="w3-bar-item w3-button w3-padding" onclick="DashboardDetail_Click()"><i>○</i> Detail</a>
                    <br />
                    <br />
                </div>
            </nav>

            <!-- Overlay effect when opening sidebar on small screens -->
            <div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor: pointer" title="close side menu" id="myOverlay"></div>

            <!-- !PAGE CONTENT! -->
            <div class="w3-main" style="margin-left: 300px; margin-top: 43px;">

                <!-- 邊界設定 -->
                <div id="div_BoundrySetting">
                    <header class="w3-container" style="padding-top: 22px">
                        <h5><b>◆ ◆ ◆ 邊界設定 ◆ ◆ ◆</b></h5>
                        <label>每個年度包含不同的廠區, 子公司, 以及 GM 設定</label>
                        <br />
                        <br />
                        <label class="scenLabel">
                            使用情境:<br />
                            2021年包含廠區: WHC, WIH
                            <br />
                            2022年新增廠區: WMY, 子公司: KOE 
                        </label>

                        <br />
                        <br />
                    </header>
                    <div class="w3-container">
                        <span class="scenTitle">年份: </span>
                        <span>
                            <select name="Year">
                                <option>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                            </select>
                        </span>
                        <br />
                        <br />
                        <button onclick="document.getElementById('div_add_BoundryYear').style.display='block'; return false;">新增年份</button>
                        &nbsp&nbsp
                        <button onclick="return false;">刪除年份</button>
                        <span>
                            <label class="subspecLabel">刪除年份時須檢查無其他子設定(廠區/子公司，指標...)，刪除年份時自動刪除當年群組 </label>
                        </span>
                        <br />
                        <br />
                        <span class="scenTitle">群組: </span>
                        <span>
                            <select>
                                <option>WT</option>
                                <option>WSD</option>
                                <option>WHQ</option>
                                <option>子公司</option>
                                <option>Others</option>
                            </select>
                        </span>
                        <label class="specLabel">選擇年份後帶出當年群組</label>
                        <br />
                        <br />
                        <button onclick="document.getElementById('div_add_BoundryGroup').style.display='block'; return false;">新增群組</button>
                        &nbsp&nbsp
                        <button onclick="return false;">刪除群組</button>
                        <span>
                            <label class="subspecLabel"></label>
                        </span>
                        <br />
                        <br />
                    </div>

                    <div class="w3-container">
                        <span class="scenTitle">廠區/子公司: </span>
                        <label class="specLabel">選擇年份後帶出當年指標</label>
                        <br />
                        <br />
                        <button onclick="document.getElementById('div_add_BoundrySite').style.display='block'; return false;">編輯廠區/子公司</button>
                        &nbsp&nbsp
                            
                        <br />
                        <br />
                        <table class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
                            <tr>
                                <th>廠區/子公司</th>
                                <th>GM</th>
                                <th>Group</th>
                            </tr>
                            <tr>
                                <td>WHC</td>
                                <td>C.C. LEE</td>
                                <td>WHQ</td>
                            </tr>
                            <tr>
                                <td>WNH</td>
                                <td>C.C. LEE</td>
                                <td>WHQ</td>
                            </tr>
                            <tr>
                                <td>WCD</td>
                                <td>Steven Kuo</td>
                                <td>WT</td>
                            </tr>
                            <tr>
                                <td>WKS</td>
                                <td>Vincent Cheng</td>
                                <td>WSD</td>
                            </tr>
                            <tr>
                                <td>WZS</td>
                                <td>Dennis Tseng</td>
                                <td>WT</td>
                            </tr>
                            <tr>
                                <td>WMX</td>
                                <td>Vicente Martinez</td>
                                <td>WT</td>
                            </tr>
                            <tr>
                                <td>KOE</td>
                                <td>Someone</td>
                                <td>子公司</td>
                            </tr>

                        </table>
                        <br />
                    </div>

                    <!-- 邊界設定 新增年份 -->
                    <div id="div_add_BoundryYear" class="w3-modal">
                        <div class="w3-modal-content">
                            <header class="w3-container w3-light-grey">
                                <span onclick="document.getElementById('div_add_BoundryYear').style.display='none'"
                                    class="w3-button w3-display-topright">&times;</span>
                                <h5><b>新增年份</b></h5>
                                <label class="specLabel">新增年份時可沿用去年的設定 (含群組以及廠區/子公司，指標...)</label>
                            </header>
                            <div class="w3-container">
                                <br />
                                <table class="w3-table w3-hoverable w3-white">
                                    <tr>
                                        <td>年份</td>
                                        <td>
                                            <input type="text" placeholder="yyyy" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>是否沿用其他年份</td>
                                        <td>
                                            <select name="Std">
                                                <option>否</option>
                                                <option>2022</option>
                                                <option>2021</option>
                                                <option>2020</option>
                                                <option>2019</option>
                                            </select>
                                        </td>
                                    </tr>
                                </table>
                                <br />
                                <br />
                            </div>
                            <footer class="w3-container w3-light-grey w3-right-align">
                                <br />
                                <button onclick="document.getElementById('div_add_BoundryYear').style.display='none'; return false;">Cancel</button>
                                &nbsp&nbsp&nbsp
                                    <button onclick="document.getElementById('div_add_BoundryYear').style.display='none'; return false;">Confirm</button>
                                <br />
                                <br />
                            </footer>
                        </div>
                    </div>


                    <!-- 邊界設定 新增廠區 -->
                    <div id="div_add_BoundrySite" class="w3-modal">
                        <div class="w3-modal-content">
                            <header class="w3-container w3-light-grey">
                                <span onclick="document.getElementById('div_add_BoundrySite').style.display='none'"
                                    class="w3-button w3-display-topright">&times;</span>
                                <h5><b>編輯廠區/子公司</b></h5>
                                <label class="specLabel">廠區/子公司清單來源: WKC, 可勾選廠區/子公司並指派GM後儲存</label><br />
                                <label class="subspecLabel">移除廠區/子公司時須確保無其他子設定(當年指標)</label>
                            </header>
                            <div class="w3-container">
                                <br />
                                <table class="w3-table w3-hoverable w3-white">
                                    <tr>
                                        <td>
                                            <input type="checkbox" />WHC<br />
                                        </td>
                                        <td>
                                            <input type="text" placeholder="GM Name" />
                                        </td>
                                        <td>
                                            <select>
                                                <option>WT</option>
                                                <option>WSD</option>
                                                <option>WHQ</option>
                                                <option>子公司</option>
                                                <option>Others</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />WNH<br />
                                        </td>
                                        <td>
                                            <input type="text" placeholder="GM Name" />
                                        </td>
                                        <td>
                                            <select>
                                                <option>WT</option>
                                                <option>WSD</option>
                                                <option>WHQ</option>
                                                <option>子公司</option>
                                                <option>Others</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />WCD<br />
                                        </td>
                                        <td>
                                            <input type="text" placeholder="GM Name" />
                                        </td>
                                        <td>
                                            <select>
                                                <option>WT</option>
                                                <option>WSD</option>
                                                <option>WHQ</option>
                                                <option>子公司</option>
                                                <option>Others</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />WKS<br />
                                        </td>
                                        <td>
                                            <input type="text" placeholder="GM Name" />
                                        </td>
                                        <td>
                                            <select>
                                                <option>WT</option>
                                                <option>WSD</option>
                                                <option>WHQ</option>
                                                <option>子公司</option>
                                                <option>Others</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />WZS<br />
                                        </td>
                                        <td>
                                            <input type="text" placeholder="GM Name" />
                                        </td>
                                        <td>
                                            <select>
                                                <option>WT</option>
                                                <option>WSD</option>
                                                <option>WHQ</option>
                                                <option>子公司</option>
                                                <option>Others</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />WMX<br />
                                        </td>
                                        <td>
                                            <input type="text" placeholder="GM Name" />
                                        </td>
                                        <td>
                                            <select>
                                                <option>WT</option>
                                                <option>WSD</option>
                                                <option>WHQ</option>
                                                <option>子公司</option>
                                                <option>Others</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />KOE<br />
                                        </td>
                                        <td>
                                            <input type="text" placeholder="GM Name" />
                                        </td>
                                        <td>
                                            <select>
                                                <option>WT</option>
                                                <option>WSD</option>
                                                <option>WHQ</option>
                                                <option>子公司</option>
                                                <option>Others</option>
                                            </select>
                                        </td>
                                    </tr>
                                </table>
                                <br />
                                <br />
                            </div>
                            <footer class="w3-container w3-light-grey w3-right-align">
                                <br />
                                <button onclick="document.getElementById('div_add_BoundrySite').style.display='none'; return false;">Cancel</button>
                                &nbsp&nbsp&nbsp
                                    <button onclick="document.getElementById('div_add_BoundrySite').style.display='none'; return false;">Confirm</button>
                                <br />
                                <br />
                            </footer>
                        </div>
                    </div>

                    <!-- 群組設定 新增群組 -->
                    <div id="div_add_BoundryGroup" class="w3-modal">
                        <div class="w3-modal-content">
                            <header class="w3-container w3-light-grey">
                                <span onclick="document.getElementById('div_add_BoundryGroup').style.display='none'"
                                    class="w3-button w3-display-topright">&times;</span>
                                <h5><b>新增群組</b></h5>
                                <label class="specLabel">填寫群組名稱</label>
                            </header>
                            <div class="w3-container">
                                <br />
                                <table class="w3-table w3-hoverable w3-white">
                                    <tr>
                                        <td>名稱</td>
                                        <td>
                                            <input type="text" placeholder="代碼" /></td>
                                        <td>
                                            <input type="text" placeholder="說明" /></td>
                                    </tr>
                                </table>
                                <br />
                            </div>
                            <footer class="w3-container w3-light-grey w3-right-align">
                                <br />
                                <button onclick="document.getElementById('div_add_BoundryGroup').style.display='none'; return false;">Cancel</button>
                                &nbsp&nbsp&nbsp
                                    <button onclick="document.getElementById('div_add_BoundryGroup').style.display='none'; return false;">Confirm</button>
                                <br />
                                <br />
                            </footer>
                        </div>
                    </div>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>

                <!-- 指標設定 -->
                <div id="div_IndicatorSetting">
                    <header class="w3-container" style="padding-top: 22px">
                        <h5><b>◆ ◆ ◆ 指標設定 ◆ ◆ ◆</b></h5>
                        <label>依照各年度 & 廠區/子公司設定不同的指標</label>
                        <br />
                        <br />
                        <label class="scenLabel">
                            使用情境:<br />
                            2021年 廠區 WHC 含指標 Scope 1 & Scope 2
                            <br />
                            2022年 廠區 WHC 新增指標 Scope 3</label>
                        <br />
                        <br />
                    </header>
                    <div class="w3-container">
                        <span class="scenTitle">年份: </span>
                        <select name="Year">
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2021">2020</option>
                            <option value="2021">2019</option>
                            <option value="2021">2018</option>
                        </select>

                        <label class="specLabel">選擇設定年份時, 系統帶出此年份廠區/子公司</label>
                        <br />
                        <br />
                        <span class="scenTitle">廠區/子公司: </span>
                        <select name="Site">
                            <option>WHC</option>
                            <option>WNH</option>
                            <option>WCD</option>
                            <option>WKS</option>
                            <option>WZS</option>
                            <option>WMX</option>
                            <option>KOE</option>
                        </select>

                        <label class="specLabel">選擇廠區/子公司後開始新增/刪除指標</label>
                    </div>

                    <div class="w3-container">
                        <br />
                        <br />
                        <span class="scenTitle">指標項目: </span>
                        <br />
                        <br />
                        <button onclick="document.getElementById('div_add_Indicator').style.display='block'; return false;">編輯指標</button>
                        <br />
                        <br />
                        <table class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
                            <tr>
                                <th>指標名稱</th>
                                <th>Unit</th>
                                <th>Dashboard顯示</th>
                            </tr>
                            <tr>
                                <td>一般廢棄物總量</td>
                                <td>Tonne(s)</td>
                                <td>Y</td>
                            </tr>
                            <tr>
                                <td>總用水量</td>
                                <td>M3</td>
                                <td>Y</td>
                            </tr>
                            <tr>
                                <td>總用電量</td>
                                <td>KWH</td>
                                <td>Y</td>
                            </tr>
                            <tr>
                                <td>溫室氣體總排放量</td>
                                <td>Tonnes CO2e</td>
                                <td>Y</td>
                            </tr>
                            <tr>
                                <td>包裝材料使用量</td>
                                <td>Tonne(s)</td>
                                <td>N</td>
                            </tr>
                        </table>
                        <br />
                    </div>

                    <!-- 指標設定 編輯指標 -->
                    <div id="div_add_Indicator" class="w3-modal">
                        <div class="w3-modal-content">
                            <header class="w3-container w3-light-grey">
                                <span onclick="document.getElementById('div_add_Indicator').style.display='none'"
                                    class="w3-button w3-display-topright">&times;</span>
                                <h5><b>編輯指標</b></h5>
                                <label class="specLabel">指標資料來源:WKC, 可勾選指標後儲存</label><br />
                                <label class="specLabel">取消勾選指標時將刪除對應的 KPI & Baseline設定</label><br />
                            </header>
                            <br />
                            <div class="w3-container">
                                <table class="w3-table w3-hoverable w3-white">
                                    <tr>
                                        <td>
                                            <input type="checkbox" />全選/取消全選<br />
                                        </td>
                                        <td>Dashboard顯示</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />一般廢棄物總量<br />
                                        </td>
                                        <td>
                                            <label class="radio-inline">
                                                <input type="radio" name="optradio_Indicator_1" />Y
                                            </label>
                                            <label class="radio-inline">
                                                <input type="radio" name="optradio_Indicator_1" />N
                                            </label>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />總用水量<br />
                                        </td>
                                        <td>
                                            <label class="radio-inline">
                                                <input type="radio" name="optradio_Indicator_2" />Y
                                            </label>
                                            <label class="radio-inline">
                                                <input type="radio" name="optradio_Indicator_2" />N
                                            </label>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />總用電量<br />
                                        </td>
                                        <td>
                                            <label class="radio-inline">
                                                <input type="radio" name="optradio_Indicator_3" />Y
                                            </label>
                                            <label class="radio-inline">
                                                <input type="radio" name="optradio_Indicator_3" />N
                                            </label>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />溫室氣體總排放量<br />
                                        </td>
                                        <td>
                                            <label class="radio-inline">
                                                <input type="radio" name="optradio_Indicator_4" />Y
                                            </label>
                                            <label class="radio-inline">
                                                <input type="radio" name="optradio_Indicator_4" />N
                                            </label>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />包裝材料使用量<br />
                                        </td>
                                        <td>
                                            <label class="radio-inline">
                                                <input type="radio" name="optradio_Indicator_5" />Y
                                            </label>
                                            <label class="radio-inline">
                                                <input type="radio" name="optradio_Indicator_5" />N
                                            </label>

                                        </td>
                                    </tr>

                                </table>
                                <br />
                            </div>
                            <footer class="w3-container w3-light-grey w3-right-align">
                                <br />
                                <button onclick="document.getElementById('div_add_Indicator').style.display='none'; return false;">Cancel</button>
                                &nbsp&nbsp&nbsp
                                    <button onclick="document.getElementById('div_add_Indicator').style.display='none'; return false;">Confirm</button>
                                <br />
                                <br />
                            </footer>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                </div>

                <!-- Kpi & Baseline設定 -->
                <div id="div_KpiBaseSetting">
                    <header class="w3-container" style="padding-top: 22px">
                        <h5><b>◆ ◆ ◆ KPI & Baseline 設定 ◆ ◆ ◆</b></h5>
                        <label>依照各年度 & 廠區/子公司設定不同指標的的 KPI & Baseline</label>
                        <br />
                        <br />
                        <label class="scenLabel">
                            使用情境:<br />
                            1.<br />
                            2021年 Wistron GHG 指標 KPI: -3%, Baseline年度: 2018 
                            <br />
                            <br />
                            2.<br />
                            2022年 Wistron GHG 指標 KPI: -5%, Baseline年度: 2018<br />
                            2022年 廠區 WT GHG 指標 KPI: -3%, Baseline年度: 2018<br />
                        </label>
                        <br />
                        <br />
                    </header>
                    <div class="w3-container">
                        <span class="scenTitle">年份: </span>
                        <select name="Year">
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2021">2020</option>
                            <option value="2021">2019</option>
                            <option value="2021">2018</option>
                        </select>

                        <label class="specLabel">選擇設定年份時, 系統帶出此年份廠區/子公司</label>
                        <br />
                        <br />
                        <span class="scenTitle">廠區/子公司: </span>

                        <label class="radio-inline">
                            <input type="radio" name="optradio_boundry" onclick="fShowBoundry('Wistron'); " />Wistron
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="optradio_boundry" onclick="fShowBoundry('Group'); " />Group
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="optradio_boundry" onclick="fShowBoundry('Site'); " />Sites
                        </label>
                        <label class="specLabel">選擇廠區/子公司後開始設定各指標KPI, 若無設定則繼承父目標</label>
                        <br />
                        <br />
                        <div id="div_KpiBaseSiteGroup" style="display: none">
                            <select name="Site">
                                <option>WT</option>
                                <option>WSD</option>
                                <option>WHQ</option>
                                <option>Others</option>
                                <option>子公司</option>
                            </select>
                        </div>
                        <div id="div_KpiBaseSite" style="display: none">
                            <select name="Site">
                                <option>WHC</option>
                                <option>WNH</option>
                                <option>WCD</option>
                                <option>WKS</option>
                                <option>WZS</option>
                                <option>WMX</option>
                                <option>KOE</option>
                                <option>...</option>
                            </select>
                        </div>

                    </div>

                    <div class="w3-container">
                        <br />
                        <br />
                        <span class="scenTitle">指標項目: </span>
                        <label class="specLabel">選擇廠區/子公司後系統帶出相對指標</label>
                        <br />
                        <br />
                        <button onclick="document.getElementById('div_add_KpiBase').style.display='block'; return false;">編輯 KPI </button>
                        <br />
                        <br />
                        <table class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
                            <tr>
                                <th>指標名稱</th>
                                <th>去年</th>
                                <th>Unit</th>
                                <th>2022 KPI</th>
                                <th>Value</th>
                                <th>Baseline</th>
                            </tr>
                            <tr>
                                <td>一般廢棄物總量</td>
                                <td>39303</td>
                                <td>Tonnes</td>
                                <td>-5%</td>
                                <td>37338</td>
                                <td>2018</td>
                            </tr>
                            <tr>
                                <td>總用水量</td>
                                <td>4060045</td>
                                <td>M3</td>
                                <td>-10%</td>
                                <td>3654041</td>
                                <td>2019</td>
                            </tr>
                            <tr>
                                <td>總用電量</td>
                                <td>1420478</td>
                                <td>GJ</td>
                                <td>-7%</td>
                                <td>1321045</td>
                                <td>--</td>
                            </tr>
                            <tr>
                                <td>溫室氣體總排放量</td>
                                <td>315633</td>
                                <td>CO2E</td>
                                <td>-2%</td>
                                <td>309321</td>
                                <td>2018</td>
                            </tr>
                            <tr>
                                <td>包裝材料使用量</td>
                                <td>4344</td>
                                <td>Tonnes</td>
                                <td>-8%</td>
                                <td>3997</td>
                                <td>2020</td>
                            </tr>
                            <tr>
                                <td>離職率</td>
                                <td>7</td>
                                <td>%</td>
                                <td>-2%</td>
                                <td>5</td>
                                <td>2020</td>
                            </tr>
                            <tr>
                                <td>女性主管比例</td>
                                <td>12</td>
                                <td>%</td>
                                <td>+2%</td>
                                <td>14</td>
                                <td>2020</td>
                            </tr>
                            <tr>
                                <td>員工認同度</td>
                                <td>97</td>
                                <td>%</td>
                                <td>+2%</td>
                                <td>99</td>
                                <td>2020</td>
                            </tr>
                        </table>
                        <br />
                    </div>

                    <!-- 指標設定 編輯KPI-->
                    <div id="div_add_KpiBase" class="w3-modal">
                        <div class="w3-modal-content">
                            <header class="w3-container w3-light-grey">
                                <span onclick="document.getElementById('div_add_KpiBase').style.display='none'"
                                    class="w3-button w3-display-topright">&times;</span>
                                <h5><b>編輯 KPI</b></h5>
                                <label class="specLabel">KPI將以去年12月YTD值計算</label><br />
                                <label class="specLabel">未設定 KPI/Baseline 時將不顯示在Dashboard上</label><br />
                                <label class="specLabel">當Unit為%時, Value欄位直接計算</label><br />
                            </header>
                            <div class="w3-container">
                                <br />
                                <table class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
                                    <tr>
                                        <th>指標名稱</th>
                                        <th>去年</th>
                                        <th>Unit</th>
                                        <th>KPI (%)</th>
                                        <th>Value</th>
                                        <th>Baseline</th>
                                    </tr>
                                    <tr>
                                        <td>一般廢棄物總量</td>
                                        <td>39303</td>
                                        <td>Tonnes</td>
                                        <td>
                                            <input type="number" max="100" min="-100" /><br />
                                        </td>
                                        <td>填寫自動帶出數值
                                        </td>
                                        <td>
                                            <select name="Year">
                                                <option>--</option>
                                                <option>2022</option>
                                                <option>2021</option>
                                                <option>2020</option>
                                                <option>2019</option>
                                                <option>2018</option>
                                            </select></td>
                                    </tr>



                                    <tr>
                                        <td>總用水量</td>
                                        <td>4060045</td>
                                        <td>M3</td>
                                        <td>
                                            <input type="number" max="100" min="-100" /><br />
                                        </td>
                                        <td>填寫自動帶出數值
                                        </td>
                                        <td>
                                            <select name="Year">
                                                <option>--</option>
                                                <option>2022</option>
                                                <option>2021</option>
                                                <option>2020</option>
                                                <option>2019</option>
                                                <option>2018</option>
                                            </select></td>
                                    </tr>
                                    <tr>
                                        <td>總用電量</td>
                                        <td>1420478</td>
                                        <td>GJ</td>
                                        <td>
                                            <input type="number" max="100" min="-100" /><br />
                                        </td>
                                        <td>填寫自動帶出數值
                                        </td>
                                        <td>
                                            <select name="Year">
                                                <option>--</option>
                                                <option>2022</option>
                                                <option>2021</option>
                                                <option>2020</option>
                                                <option>2019</option>
                                                <option>2018</option>
                                            </select></td>
                                    </tr>
                                    <tr>
                                        <td>溫室氣體總排放量</td>
                                        <td>315633</td>
                                        <td>CO2E</td>
                                        <td>
                                            <input type="number" max="100" min="-100" /><br />
                                        </td>
                                        <td>填寫自動帶出數值
                                        </td>
                                        <td>
                                            <select name="Year">
                                                <option>--</option>
                                                <option>2022</option>
                                                <option>2021</option>
                                                <option>2020</option>
                                                <option>2019</option>
                                                <option>2018</option>
                                            </select></td>
                                    </tr>
                                    <tr>
                                        <td>包裝材料使用量</td>
                                        <td>4344</td>
                                        <td>Tonnes</td>
                                        <td>
                                            <input type="number" max="100" min="-100" /><br />
                                        </td>
                                        <td>填寫自動帶出數值
                                        </td>
                                        <td>
                                            <select name="Year">
                                                <option>--</option>
                                                <option>2022</option>
                                                <option>2021</option>
                                                <option>2020</option>
                                                <option>2019</option>
                                                <option>2018</option>
                                            </select></td>
                                    </tr>
                                    </tr>
									<tr>
                                        <td>離職率</td>
                                        <td>7</td>
                                        <td>%</td>
                                        <td>
                                            <input type="number" max="100" min="-100" /><br />
                                        </td>
                                        <td>填寫自動帶出數值
                                        </td>
                                        <td>
                                            <select name="Year">
                                                <option>--</option>
                                                <option>2022</option>
                                                <option>2021</option>
                                                <option>2020</option>
                                                <option>2019</option>
                                                <option>2018</option>
                                            </select></td>
                                    </tr>
                                    <tr>
                                        <td>女性主管比例</td>
                                        <td>12</td>
                                        <td>%</td>
                                        <td>
                                            <input type="number" max="100" min="-100" /><br />
                                        </td>
                                        <td>填寫自動帶出數值
                                        </td>
                                        <td>
                                            <select name="Year">
                                                <option>--</option>
                                                <option>2022</option>
                                                <option>2021</option>
                                                <option>2020</option>
                                                <option>2019</option>
                                                <option>2018</option>
                                            </select></td>
                                    </tr>
                                    <tr>
                                        <td>員工認同度</td>
                                        <td>97</td>
                                        <td>%</td>
                                        <td>
                                            <input type="number" max="100" min="-100" /><br />
                                        </td>
                                        <td>填寫自動帶出數值
                                        </td>
                                        <td>
                                            <select name="Year">
                                                <option>--</option>
                                                <option>2022</option>
                                                <option>2021</option>
                                                <option>2020</option>
                                                <option>2019</option>
                                                <option>2018</option>
                                            </select></td>
                                    </tr>
                                </table>

                                <br />
                            </div>
                            <footer class="w3-container w3-light-grey w3-right-align">
                                <br />
                                <button onclick="document.getElementById('div_add_KpiBase').style.display='none'; return false;">Cancel</button>
                                &nbsp&nbsp&nbsp
                                    <button onclick="document.getElementById('div_add_KpiBase').style.display='none'; return false;">Confirm</button>
                                <br />
                                <br />
                            </footer>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                </div>

                <!-- 群組設定 -->
                <div id="div_GroupSetting">
                    <header class="w3-container" style="padding-top: 22px">
                        <h5><b>◆ ◆ ◆ 群組設定 ◆ ◆ ◆</b></h5>
                        <label>建立 Working Group 群組</label>
                        <br />
                        <br />
                        <label class="scenLabel">
                            使用情境:<br />
                            各Initiative活動/ESGI績效指標/... 由不同人員負責回填定性資料,
                            <br />
                            當同樣的一群人員重複出現在很多負責項目時, 可藉由編輯群組人員, 同時調整多個項目
                        </label>
                        <br />
                        <br />
                    </header>
                    <div class="w3-container">
                        <span class="scenTitle">類別: </span>
                        <select name="GroupCategory">
                            <option value="Initiative">Initiative</option>
                            <option value="ESGI績效">ESGI績效</option>
                        </select>

                        <label class="specLabel">選擇類別時, 顯示對應群組</label>
                        &nbsp
                        <button onclick="document.getElementById('div_add_GroupCategory').style.display='block'; return false;">新增類別</button>

                        <br />
                        <br />
                        <span class="scenTitle">搜尋: </span>
                        <input type="search" />

                        <label class="specLabel">可搜尋項目</label>
                        <br />
                        <br />

                    </div>

                    <div class="w3-container">
                        <br />
                        <br />
                        <span class="scenTitle">群組: </span>
                        <br />
                        <br />
                        <button onclick="document.getElementById('div_add_Group').style.display='block'; return false;">新增群組</button>
                        &nbsp&nbsp
                        <button onclick="return false;">刪除群組</button>
                        <span>
                            <label class="subspecLabel">刪除前須確認目前群組並無指派至任何活動</label></span>
                        <br />
                        <br />
                        <br />
                        <table class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
                            <tr>
                                <th>群組名稱</th>
                                <th>人員</th>
                            </tr>
                            <tr>
                                <td>Green Product</td>
                                <td>Alston Tseng, Kevin JW Cheng</td>
                            </tr>
                            <tr>
                                <td>SCM</td>
                                <td>Benny Hu, C.M. Hsiao </td>
                            </tr>
                            <tr>
                                <td>Decarb</td>
                                <td>James Chou</td>
                            </tr>
                        </table>
                        <br />
                    </div>

                    <!-- 群組設定 新增類別 -->
                    <div id="div_add_GroupCategory" class="w3-modal">
                        <div class="w3-modal-content">
                            <header class="w3-container w3-light-grey">
                                <span onclick="document.getElementById('div_add_GroupCategory').style.display='none'"
                                    class="w3-button w3-display-topright">&times;</span>
                                <h5><b>新增類別</b></h5>
                                <label class="specLabel">填寫類別名稱</label>
                            </header>
                            <div class="w3-container">
                                <br />
                                <table class="w3-table w3-hoverable w3-white">
                                    <tr>
                                        <td>名稱</td>
                                        <td>
                                            <input type="text" placeholder="中文" /></td>
                                    </tr>
                                </table>
                                <br />
                            </div>
                            <footer class="w3-container w3-light-grey w3-right-align">
                                <br />
                                <button onclick="document.getElementById('div_add_GroupCategory').style.display='none'; return false;">Cancel</button>
                                &nbsp&nbsp&nbsp
                                    <button onclick="document.getElementById('div_add_GroupCategory').style.display='none'; return false;">Confirm</button>
                                <br />
                                <br />
                            </footer>
                        </div>
                    </div>

                    <!-- 群組設定 新增群組 -->
                    <div id="div_add_Group" class="w3-modal">
                        <div class="w3-modal-content">
                            <header class="w3-container w3-light-grey">
                                <span onclick="document.getElementById('div_add_Group').style.display='none'"
                                    class="w3-button w3-display-topright">&times;</span>
                                <h5><b>新增群組</b></h5>
                                <label class="specLabel">填寫群組名稱, 選擇人員(多個)</label>
                            </header>
                            <div class="w3-container">
                                <br />
                                <table class="w3-table w3-hoverable w3-white">
                                    <tr>
                                        <td>名稱</td>
                                        <td>
                                            <input type="text" /></td>
                                    </tr>
                                    <tr>
                                        <td>GM</td>
                                        <td>
                                            <input type="text" /><br />
                                            <br />
                                            <input type="text" /><br />
                                            <br />
                                            <input type="text" />
                                        </td>
                                    </tr>
                                </table>
                                <br />
                            </div>
                            <footer class="w3-container w3-light-grey w3-right-align">
                                <br />
                                <button onclick="document.getElementById('div_add_Group').style.display='none'; return false;">Cancel</button>
                                &nbsp&nbsp&nbsp
                                    <button onclick="document.getElementById('div_add_Group').style.display='none'; return false;">Confirm</button>
                                <br />
                                <br />
                            </footer>
                        </div>
                    </div>


                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                </div>

                <!-- 國際標準設定 -->
                <div id="div_IntStdSetting">
                    <header class="w3-container" style="padding-top: 22px">
                        <h5><b>◆ ◆ ◆ 國際標準設定 ◆ ◆ ◆</b></h5>
                        <label>可新增各項國際標準並對應到各項指標</label>
                        <br />
                        <br />
                        <label class="scenLabel">
                            使用情境:<br />
                            ● SDGs:
                            <br />
                            6. 潔淨水資源 →
                            6.3 改善水質、減少污染、使回收與安全再使用率提高<br />
                            對應至系統內指標:
                            <br />
                            用水量, 廢棄物總量
                            <br />
                            <br />
                            ● GRI:
                            <br />
                            303. 水與放流水 →
                            303-1 共享水資源之相互影響<br />
                            對應至系統內指標:
                            <br />
                            用水量
                            <br />
                        </label>

                        <br />
                        <br />

                    </header>
                    <div class="w3-container">
                        <span class="scenTitle">標準: </span>
                        <span>
                            <select name="Std">
                                <option value="SDGs">SDGs (2015)</option>
                                <option value="GRI">GRI (2016)</option>
                                <option value="CDP">CDP</option>
                                <option value="DJSI">DJSI</option>
                            </select>
                        </span>
                        <br />
                        <br />
                        <button onclick="document.getElementById('div_add_IntStd').style.display='block'; return false;">新增標準</button>
                        &nbsp&nbsp
                        <button onclick="return false;">刪除標準</button>
                        <span>
                            <label class="subspecLabel">可直接刪除</label></span>
                        <br />
                    </div>

                    <div class="w3-container">
                        <br />
                        <br />
                        <span class="scenTitle">項目: </span>
                        <br />
                        <br />
                        <button onclick="document.getElementById('div_add_IntStdItem').style.display='block'; return false;">新增項目</button>
                        &nbsp&nbsp
                        <button onclick="return false;">刪除項目</button>
                        <span>
                            <label class="subspecLabel">可直接刪除</label></span>
                        <br />
                        <br />
                        <ul id="myUL">
                            <li><span class="caret">SDGs (2015)</span>
                                <ul class="nested">
                                    <li>...</li>
                                    <li><span class="caret">6. 潔淨水資源</span>
                                        <ul class="nested">
                                            <li>6.1 取得安全且負擔的起的飲用水</li>
                                            <li>6.2 享有公平及妥善的衛生</li>
                                        </ul>
                                    </li>
                                    <li><span class="caret">7. 可負擔能源</span>
                                        <ul class="nested">
                                            <li>7.1 可取得現代的能源服務</li>
                                            <li>7.2 大幅提高全球再生能源的共享</li>
                                        </ul>
                                    </li>
                                    <li><span class="caret">8. 就業與經濟成長</span>
                                        <ul class="nested">
                                            <li>8.1 依據國情維持經濟成長</li>
                                            <li>8.2 創新整合軟硬體技術</li>
                                        </ul>
                                    </li>
                                    <li>...</li>
                                </ul>
                            </li>
                        </ul>
                        <br />

                        <!-- 國際標準設定 新增標準POPUP -->
                        <div id="div_add_IntStd" class="w3-modal">
                            <div class="w3-modal-content">
                                <header class="w3-container w3-light-grey">
                                    <span onclick="document.getElementById('div_add_IntStd').style.display='none'"
                                        class="w3-button w3-display-topright">&times;</span>
                                    <h5><b>新增標準</b></h5>
                                    <label class="specLabel">新增標準時可選擇沿用已存在的標準設定</label>
                                </header>
                                <div class="w3-container">
                                    <br />
                                    <table class="w3-table w3-hoverable w3-white">
                                        <tr>
                                            <td>名稱</td>
                                            <td>
                                                <input type="text" placeholder="中文" /></td>
                                            <td>
                                                <input type="text" placeholder="English" /></td>
                                        </tr>
                                        <tr>
                                            <td>是否沿用其他標準</td>
                                            <td colspan="2">
                                                <select name="Std">
                                                    <option>無</option>
                                                    <option value="SDGs">SDGs (2015)</option>
                                                    <option value="GRI">GRI (2016)</option>
                                                    <option value="CDP">CDP</option>
                                                    <option value="DJSI">DJSI</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </table>
                                    <br />
                                    <br />
                                </div>
                                <footer class="w3-container w3-light-grey w3-right-align">
                                    <br />
                                    <button onclick="document.getElementById('div_add_IntStd').style.display='none'; return false;">Cancel</button>
                                    &nbsp&nbsp&nbsp
                                    <button onclick="document.getElementById('div_add_IntStd').style.display='none'; return false;">Confirm</button>
                                    <br />
                                    <br />
                                </footer>
                            </div>
                        </div>

                        <!-- 國際標準設定 新增項目POPUP -->
                        <div id="div_add_IntStdItem" class="w3-modal">
                            <div class="w3-modal-content">
                                <header class="w3-container w3-light-grey">
                                    <span onclick="document.getElementById('div_add_IntStdItem').style.display='none'"
                                        class="w3-button w3-display-topright">&times;</span>
                                    <h5><b>新增標準項目</b></h5>
                                    <label class="specLabel">新增項目時需填寫 名稱, 說明, 摘要, ESGI對應，父子項目階層最多到 N 階</label>
                                </header>
                                <div class="w3-container">
                                    <br />
                                    <table class="w3-table w3-hoverable w3-white">
                                        <tr>
                                            <td>父項目</td>
                                            <td colspan="2">
                                                <select name="Std">
                                                    <option>6. 潔淨水資源</option>
                                                    <option>6.1 取得安全且負擔的起的飲用水</option>
                                                    <option>6.2 享有公平及妥善的衛生</option>
                                                    <option>7. 可負擔能源</option>
                                                    <option>...</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>名稱</td>
                                            <td>
                                                <input type="text" placeholder="中文" /></td>
                                            <td>
                                                <input type="text" placeholder="English" /></td>
                                        </tr>
                                        <tr>
                                            <td>說明</td>
                                            <td>
                                                <input type="text" /></td>
                                            <td>
                                                <input type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td>摘要</td>
                                            <td>
                                                <input type="text" /></td>
                                            <td>
                                                <input type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td>ESGI對應</td>
                                            <td colspan="2">
                                                <input type="checkbox" />
                                                E
                                                <input type="checkbox" />
                                                S
                                                <input type="checkbox" />
                                                G
                                                <input type="checkbox" />
                                                I </td>
                                        </tr>
                                        <tr>
                                            <td>指標對應</td>
                                            <td colspan="2">
                                                <input type="checkbox" />
                                                一般廢棄物總量
                                                <br />
                                                <input type="checkbox" />
                                                總用水量
                                                <br />
                                                <input type="checkbox" />
                                                總用電量
                                                <br />
                                                <input type="checkbox" />
                                                溫室氣體總排放量
                                                <br />
                                                <input type="checkbox" />
                                                包裝材料使用量
                                                <br />
                                            </td>
                                        </tr>
                                    </table>
                                    <br />
                                    <br />
                                </div>
                                <footer class="w3-container w3-light-grey w3-right-align">
                                    <br />
                                    <button onclick="document.getElementById('div_add_IntStdItem').style.display='none'; return false;">Cancel</button>
                                    &nbsp&nbsp&nbsp
                                    <button onclick="document.getElementById('div_add_IntStdItem').style.display='none'; return false;">Confirm</button>
                                    <br />
                                    <br />
                                </footer>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>

                <!-- Dashboard  設定 -->
                <div id="div_DashOverSetting">
                    <header class="w3-container" style="padding-top: 22px">
                        <h5><b>◆ ◆ ◆ Dashboard  設定 ◆ ◆ ◆</b></h5>
                        <label>選擇Dashboard主畫面要顯示的指標項目</label>
                        <br />
                        <br />
                        <label class="scenLabel">
                            使用情境:<br />
                            可隨時調整需要顯示的指標項目
                        </label>
                        <br />
                        <br />
                    </header>
                    <div class="w3-container">
                        <span class="scenTitle">顯示指標項目: </span>
                        <br />
                        <br />
                        <input type="checkbox" />
                        一般廢棄物總量<br />
                        <input type="checkbox" />
                        總用水量
                        <br />
                        <input type="checkbox" />
                        總用電量<br />
                        <input type="checkbox" />
                        溫室氣體總排放量<br />
                        <input type="checkbox" />
                        包裝材料使用量
                        <br />
                        <br />
                        <button onclick="return false;">Preview</button>
                        &nbsp&nbsp&nbsp
                        <button onclick="return false;">Cancel</button>
                        &nbsp&nbsp&nbsp
                        <button onclick="return false;">Confirm</button>
                        <br />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>


                <!-- Dashboard   -->
                <div id="div_DashboardOverview">
                    <header class="w3-container" style="padding-top: 22px">
                        <h5><b>◆ ◆ ◆ Overview ◆ ◆ ◆</b></h5>
                        <label>首頁畫面顯示</label>
                        <br />
                        <br />
                        <label class="scenLabel">
                            上半部:<br />
                            Dashboard 設定中勾選的指標<br />
                            下半部:<br />
                            展示SDG/GRI/CDP...等指標對應關係/內容<br />
                        </label>
                        <br />
                        <br />
                        <br />
                    </header>
                    <div class="w3-container">
                        <span class="scenTitle">Year:
                        <select>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                        </select>
                        </span>
                        &nbsp&nbsp<span class="scenTitle">Month:
                        <select>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                        </span>
                        &nbsp&nbsp&nbsp&nbsp&nbsp<span class="scenTitle">
                            <select>
                                <option>Wistron</option>
                                <option>WT</option>
                                <option>WSD</option>
                                <option>WHQ</option>
                                <option>子公司</option>
                                <option>Others</option>
                            </select>
                        </span>
                        &nbsp&nbsp<span class="scenTitle">
                            <select>
                                <option>Monthly</option>
                                <option>YTD</option>
                            </select>
                        </span>
                    </div>
                    <br />

                    <div class="w3-container">
                        <div class="w3-quarter" style="width: 250px; margin: 10px;">
                            <div class="w3-container w3-red w3-padding-16">
                                <div class="w3-left">
                                    <h1>GHG</h1>
                                </div>
                                <div class="w3-right">
                                    <button onclick="DashboardDetail_Click(); return false;">Detail</button>
                                </div>
                                <div class="w3-clear"></div>
                                <h2>305,748.43</h2>
                                &nbsp<h4>CO2e</h4>
                                <div style="display: flex;">
                                    <h4>YOY:　 ▼ 1% </h4>
                                    <h4>KPI: -2%</h4>
                                    <h4>Baseline: ▲ 2%</h4>
                                </div>
                            </div>
                        </div>

                        <div class="w3-quarter" style="width: 250px; margin: 10px;">
                            <div class="w3-container w3-blue w3-padding-16">
                                <div class="w3-left">
                                    <h1>Water</h1>
                                </div>
                                <div class="w3-right">
                                    <button onclick="DashboardDetail_Click(); return false;">Detail</button>
                                </div>
                                <div class="w3-clear"></div>
                                <h2>3,960,045.83</h2>
                                &nbsp<h4>M3</h4>
                                <div style="display: flex;">
                                    <h4>YOY:　 ▼ 1%</h4>
                                    <h4>KPI: -10%</h4>
                                    <h4>Baseline: ▲ 1%</h4>
                                </div>
                            </div>
                        </div>

                        <div class="w3-quarter" style="width: 250px; margin: 10px;">
                            <div class="w3-container w3-green w3-padding-16">
                                <div class="w3-left">
                                    <h1>Electricity</h1>
                                </div>
                                <div class="w3-right">
                                    <button onclick="DashboardDetail_Click(); return false;">Detail</button>
                                </div>
                                <div class="w3-clear"></div>
                                <h2>1,420,478.32</h2>
                                &nbsp<h4>GJ</h4>
                                <div style="display: flex;">
                                    <h4>YOY:　 ▲ 3%</h4>
                                    <h4>KPI: -7%</h4>
                                    <h4>Baseline: ▲ 5%</h4>
                                </div>
                            </div>
                        </div>

                        <div class="w3-quarter" style="width: 250px; margin: 10px;">
                            <div class="w3-container w3-brown w3-padding-16">
                                <div class="w3-left">
                                    <h1>Waste</h1>
                                </div>
                                <div class="w3-right">
                                    <button onclick="DashboardDetail_Click(); return false;">Detail</button>
                                </div>
                                <div class="w3-clear"></div>
                                <h2>33,303.65</h2>
                                &nbsp<h4>Tonnes</h4>
                                <div style="display: flex;">
                                    <h4>YOY:　 ▼ 4% </h4>
                                    <h4>KPI: 5%</h4>
                                    <h4>Baseline: ▲ 4%</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w3-container w3-padding-16">
                        <br />
                        <label class="specLabel">
                            以下SDG對應範例取自　<a href="https://www.foxconn.com/zh-tw/CSR">鴻海網頁 </a>
                        </label>
                        <div style="border: none; overflow: hidden; max-width: initial;">
                            <%--scrolling="no"--%>
                            <iframe scrolling="no" src="https://www.foxconn.com/zh-tw/CSR" style="border: 0px none; margin-left: 0px; height: 1700px; margin-top: -600px; width: 1300px;"></iframe>
                        </div>
                    </div>


                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>

                <!-- Dashboard Detail  -->
                <div id="div_DashboardDetail">
                    <header class="w3-container" style="padding-top: 22px">
                        <h5><b>◆ ◆ ◆ Detail ◆ ◆ ◆</b></h5>
                        <label>各Indicator項目圖表 (包含未在 Dashboard Overview 設定的指標項目)</label>
                        <label>popup?</label>
                        <br />
                        <br />
                    </header>
                    <br />
                    <br />
                    <div style="display: flex">
                        <div class="w3-bar-block">
                            <button class="w3-margin-left w3-margin-bottom" onclick="IndcatorList_Click(); return false;">≡</button>
                            <div id="div_IndcatorList" style="display: none;">
                                <a href="#" class="w3-bar-item w3-button w3-padding"><i>◆</i> 一般廢棄物總量</a>
                                <a href="#" class="w3-bar-item w3-button w3-padding"><i>◆</i> 總用水量</a>
                                <a href="#" class="w3-bar-item w3-button w3-padding"><i>◆</i> 總用電量</a>
                                <a href="#" class="w3-bar-item w3-button w3-padding"><i>◆</i> 溫室氣體總排放量</a>
                                <a href="#" class="w3-bar-item w3-button w3-padding"><i>◆</i> 包裝材料使用量</a>
                                <a href="#" class="w3-bar-item w3-button w3-padding"><i>◆</i> ...</a>
                            </div>
                        </div>

                        <div class="w3-container" style="width: 85%;">
                            <table class="w3-table w3-hoverable w3-white">
                                <tr>
                                    <td style="width: 15%;">時間區間: </td>
                                    <td style="width: 25%;">
                                        <button id="btn_Detail_YM" onclick="fDetailYM_Click(); return false;">Yearly</button>
                                    </td>
                                    <td style="width: 60%;">
                                        <div id="spn_Detail_Y">
                                            <span class="scenTitle">From:
                                            <select>
                                                <option>2022</option>
                                                <option>2021</option>
                                                <option>2020</option>
                                                <option>2019</option>
                                                <option>2018</option>
                                            </select>
                                                To:
                                            <select>
                                                <option>2022</option>
                                                <option>2021</option>
                                                <option>2020</option>
                                                <option>2019</option>
                                                <option>2018</option>
                                            </select>
                                            </span>
                                        </div>
                                        <div id="spn_Detail_M" style="display: none;">
                                            <span class="scenTitle">From:
                                            <select>
                                                <option>2022</option>
                                                <option>2021</option>
                                                <option>2020</option>
                                                <option>2019</option>
                                                <option>2018</option>
                                            </select>
                                                <select>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                    <option>04</option>
                                                    <option>05</option>
                                                    <option>06</option>
                                                    <option>07</option>
                                                    <option>08</option>
                                                    <option>09</option>
                                                    <option>10</option>
                                                    <option>11</option>
                                                    <option>12</option>
                                                </select>
                                                To:
                                            <select>
                                                <option>2022</option>
                                                <option>2021</option>
                                                <option>2020</option>
                                                <option>2019</option>
                                                <option>2018</option>
                                            </select>
                                                <select>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                    <option>04</option>
                                                    <option>05</option>
                                                    <option>06</option>
                                                    <option>07</option>
                                                    <option>08</option>
                                                    <option>09</option>
                                                    <option>10</option>
                                                    <option>11</option>
                                                    <option>12</option>
                                                </select>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>計算模式: </td>
                                    <td>
                                        <button id="btn_MthYtd" onclick="fDetailYtd_Click(); return false;">MTH</button>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>涵蓋範圍: </td>
                                    <td>
                                        <button id="btn_BoSite" onclick="fDetailBoSite_Click(); return false;">Group</button>
                                    </td>
                                    <td>
                                        <div id="div_Bo" style="display: flex; align-items: center;">
                                            <input type="checkbox" />Wistron　
                                            <br />
                                            <input type="checkbox" />WT　
                                            <br />
                                            <input type="checkbox" />WSD　
                                            <br />
                                            <input type="checkbox" />WHQ　
                                            <br />
                                            <input type="checkbox" />子公司　
                                            <br />
                                            <input type="checkbox" />Others　
                                            <br />
                                        </div>
                                        <div id="div_Site" style="display: none; align-items: center;">
                                            <input type="checkbox" />WNH　
                                            <br />
                                            <input type="checkbox" />WHC　
                                            <br />
                                            <input type="checkbox" />WCD　
                                            <br />
                                            <input type="checkbox" />WCQ　
                                            <br />
                                            <input type="checkbox" />WIH　
                                            <br />
                                            <input type="checkbox" />WZS　
                                            <br />
                                            <input type="checkbox" />WMX　
                                            <br />
                                            <input type="checkbox" />WCZ　
                                            <br />
                                            <input type="checkbox" />WKS　
                                            <br />
                                            <input type="checkbox" />WTZ　
                                            <br />
                                            <input type="checkbox" />WOK　
                                            <br />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <br />
                            <label class="specLabel">
                                父階指標項目:<br />
                                EG: GHG
                            </label>
                            <div id="div_Canvas">
                                <canvas id="canvas" height="100"></canvas>
                            </div>
                            <br />
                            <br />
                            <label class="specLabel">
                                子階指標項目:<br />
                                EG: Scope 1
                            </label>
                            <div id="div_CanvasChild">
                                <canvas id="canvaschild" height="100"></canvas>
                            </div>
                            <br />
                            <br />
                            <label class="specLabel">
                                子階指標項目:<br />
                                EG: Scope 2<br />
                                <br />
                                ...
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>

        <%--<div class="w3-row-padding w3-margin-bottom">
                    <div class="w3-quarter">
                        <div class="w3-container w3-red w3-padding-16">
                            <div class="w3-left"><i class="fa fa-comment w3-xxxlarge"></i></div>
                            <div class="w3-right">
                                <h3>52</h3>
                            </div>
                            <div class="w3-clear"></div>
                            <h4>Messages</h4>
                        </div>
                    </div>
                    <div class="w3-quarter">
                        <div class="w3-container w3-blue w3-padding-16">
                            <div class="w3-left"><i class="fa fa-eye w3-xxxlarge"></i></div>
                            <div class="w3-right">
                                <h3>99</h3>
                            </div>
                            <div class="w3-clear"></div>
                            <h4>Views</h4>
                        </div>
                    </div>
                    <div class="w3-quarter">
                        <div class="w3-container w3-teal w3-padding-16">
                            <div class="w3-left"><i class="fa fa-share-alt w3-xxxlarge"></i></div>
                            <div class="w3-right">
                                <h3>23</h3>
                            </div>
                            <div class="w3-clear"></div>
                            <h4>Shares</h4>
                        </div>
                    </div>
                    <div class="w3-quarter">
                        <div class="w3-container w3-orange w3-text-white w3-padding-16">
                            <div class="w3-left"><i class="fa fa-users w3-xxxlarge"></i></div>
                            <div class="w3-right">
                                <h3>50</h3>
                            </div>
                            <div class="w3-clear"></div>
                            <h4>Users</h4>
                        </div>
                    </div>
                </div>

                <div class="w3-panel">
                    <div class="w3-row-padding" style="margin: 0 -16px">
                        <div class="w3-third">
                            <h5>Regions</h5>
                            <img src="/w3images/region.jpg" style="width: 100%" alt="Google Regional Map">
                        </div>
                        <div class="w3-twothird">
                            <h5>Feeds</h5>
                            <table class="w3-table w3-striped w3-white">
                                <tr>
                                    <td><i class="fa fa-user w3-text-blue w3-large"></i></td>
                                    <td>New record, over 90 views.</td>
                                    <td><i>10 mins</i></td>
                                </tr>
                                <tr>
                                    <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
                                    <td>Database error.</td>
                                    <td><i>15 mins</i></td>
                                </tr>
                                <tr>
                                    <td><i class="fa fa-users w3-text-yellow w3-large"></i></td>
                                    <td>New record, over 40 users.</td>
                                    <td><i>17 mins</i></td>
                                </tr>
                                <tr>
                                    <td><i class="fa fa-comment w3-text-red w3-large"></i></td>
                                    <td>New comments.</td>
                                    <td><i>25 mins</i></td>
                                </tr>
                                <tr>
                                    <td><i class="fa fa-bookmark w3-text-blue w3-large"></i></td>
                                    <td>Check transactions.</td>
                                    <td><i>28 mins</i></td>
                                </tr>
                                <tr>
                                    <td><i class="fa fa-laptop w3-text-red w3-large"></i></td>
                                    <td>CPU overload.</td>
                                    <td><i>35 mins</i></td>
                                </tr>
                                <tr>
                                    <td><i class="fa fa-share-alt w3-text-green w3-large"></i></td>
                                    <td>New shares.</td>
                                    <td><i>39 mins</i></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="w3-container">
                    <h5>General Stats</h5>
                    <p>New Visitors</p>
                    <div class="w3-grey">
                        <div class="w3-container w3-center w3-padding w3-green" style="width: 25%">+25%</div>
                    </div>

                    <p>New Users</p>
                    <div class="w3-grey">
                        <div class="w3-container w3-center w3-padding w3-orange" style="width: 50%">50%</div>
                    </div>

                    <p>Bounce Rate</p>
                    <div class="w3-grey">
                        <div class="w3-container w3-center w3-padding w3-red" style="width: 75%">75%</div>
                    </div>
                </div>
                <hr>


                <hr>
                <div class="w3-container">
                    <h5>Recent Users</h5>
                    <ul class="w3-ul w3-card-4 w3-white">
                        <li class="w3-padding-16">
                            <img src="/w3images/avatar2.png" class="w3-left w3-circle w3-margin-right" style="width: 35px">
                            <span class="w3-xlarge">Mike</span><br>
                        </li>
                        <li class="w3-padding-16">
                            <img src="/w3images/avatar5.png" class="w3-left w3-circle w3-margin-right" style="width: 35px">
                            <span class="w3-xlarge">Jill</span><br>
                        </li>
                        <li class="w3-padding-16">
                            <img src="/w3images/avatar6.png" class="w3-left w3-circle w3-margin-right" style="width: 35px">
                            <span class="w3-xlarge">Jane</span><br>
                        </li>
                    </ul>
                </div>
                <hr>

                <div class="w3-container">
                    <h5>Recent Comments</h5>
                    <div class="w3-row">
                        <div class="w3-col m2 text-center">
                            <img class="w3-circle" src="/w3images/avatar3.png" style="width: 96px; height: 96px">
                        </div>
                        <div class="w3-col m10 w3-container">
                            <h4>John <span class="w3-opacity w3-medium">Sep 29, 2014, 9:12 PM</span></h4>
                            <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <br>
                        </div>
                    </div>

                    <div class="w3-row">
                        <div class="w3-col m2 text-center">
                            <img class="w3-circle" src="/w3images/avatar1.png" style="width: 96px; height: 96px">
                        </div>
                        <div class="w3-col m10 w3-container">
                            <h4>Bo <span class="w3-opacity w3-medium">Sep 28, 2014, 10:15 PM</span></h4>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <br>
                        </div>
                    </div>
                </div>
                <br>
                <div class="w3-container w3-dark-grey w3-padding-32">
                    <div class="w3-row">
                        <div class="w3-container w3-third">
                            <h5 class="w3-bottombar w3-border-green">Demographic</h5>
                            <p>Language</p>
                            <p>Country</p>
                            <p>City</p>
                        </div>
                        <div class="w3-container w3-third">
                            <h5 class="w3-bottombar w3-border-red">System</h5>
                            <p>Browser</p>
                            <p>OS</p>
                            <p>More</p>
                        </div>
                        <div class="w3-container w3-third">
                            <h5 class="w3-bottombar w3-border-orange">Target</h5>
                            <p>Users</p>
                            <p>Active</p>
                            <p>Geo</p>
                            <p>Interests</p>
                        </div>
                    </div>
                </div>--%>

        <!-- Footer -->
        <footer style="color: #b6e2e9 !important;" class="w3-container w3-padding-16 w3-light-grey">
            <h4>Wistron</h4>
            <p>Sustainability Office</p>
        </footer>

        <!-- End page content -->
        </div>


        </div>
    </form>
</body>

<script>

    //Tree Node 展開 放在元件loading完後才work
    var toggler = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function () {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
        });
    }
</script>

</html>



