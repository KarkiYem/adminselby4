(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{1124:function(t,e,r){"use strict";r.r(e);var o=r(444),n=r(441),c={name:"doughnut-chart",extends:o.b,mixins:[o.e.reactiveProp,n.a],props:{extraOptions:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}},l=r(586),d=r(587),h=r(594),f=r(445),m=r(115),j=r(130),C=r(116);function v(){return Math.round(100*Math.random())}var y={layout:"DashboardLayout",components:{DoughnutChart:c,LineChart:l.a,BarChart:d.a,PieChart:h.a,StatsCard:C.a,BaseHeader:j.a,RouteBreadCrumb:m.a},data:function(){return{salesChart:{chartData:{labels:["May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Performance",data:[0,20,10,30,15,40,20,60,60]}]},extraOptions:f.b},ordersChart:{chartData:{labels:["Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales",data:[25,20,30,22,17,29]}]}},dotsChart:{chartData:{labels:["May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Performance",data:[10,18,28,23,28,40,36,46,52],pointRadius:10,pointHoverRadius:15,showLine:!1}]},extraOptions:{scales:{yAxes:[{gridLines:{color:f.a.colors.gray[200],zeroLineColor:f.a.colors.gray[200]}}]}}},doughnutChart:{chartData:{labels:["Danger","Warning","Success","Primary","Info"],datasets:[{data:[v(),v(),v(),v(),v()],backgroundColor:[f.a.colors.theme.danger,f.a.colors.theme.warning,f.a.colors.theme.success,f.a.colors.theme.primary,f.a.colors.theme.info],label:"Dataset 1"}]},extraOptions:{responsive:!0,legend:{position:"top"},animation:{animateScale:!0,animateRotate:!0}}},pieChart:{chartData:{labels:["Danger","Warning","Success","Primary","Info"],datasets:[{data:[v(),v(),v(),v(),v()],backgroundColor:[f.a.colors.theme.danger,f.a.colors.theme.warning,f.a.colors.theme.success,f.a.colors.theme.primary,f.a.colors.theme.info],label:"Dataset 1"}]},extraOptions:{responsive:!0,legend:{position:"top"},animation:{animateScale:!0,animateRotate:!0}}},barChartStacked:{chartData:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Dataset 1",backgroundColor:f.a.colors.theme.danger,data:[v(),v(),v(),v(),v(),v(),v()]},{label:"Dataset 2",backgroundColor:f.a.colors.theme.primary,data:[v(),v(),v(),v(),v(),v(),v()]},{label:"Dataset 3",backgroundColor:f.a.colors.theme.success,data:[v(),v(),v(),v(),v(),v(),v()]}]},extraOptions:{tooltips:{mode:"index",intersect:!1},responsive:!0,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}}}}},x=r(7),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;return e("div",[e("base-header",{staticClass:"pb-6"},[e("div",{staticClass:"row align-items-center py-4"},[e("div",{staticClass:"col-lg-6 col-7"},[e("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[t._v("Charts")]),t._v(" "),e("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[e("route-bread-crumb")],1)]),t._v(" "),e("div",{staticClass:"col-lg-6 col-5 text-right"},[e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("New")]),t._v(" "),e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("Filters")])],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",{attrs:{title:"Total traffic",type:"gradient-red","sub-title":"350,897",icon:"ni ni-active-40"}},[e("template",{slot:"footer"},[e("span",{staticClass:"text-success mr-2"},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" 3.48%")]),t._v(" "),e("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",{attrs:{title:"Total traffic",type:"gradient-orange","sub-title":"2,356",icon:"ni ni-chart-pie-35"}},[e("template",{slot:"footer"},[e("span",{staticClass:"text-success mr-2"},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" 12.18%")]),t._v(" "),e("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",{attrs:{title:"Sales",type:"gradient-green","sub-title":"924",icon:"ni ni-money-coins"}},[e("template",{slot:"footer"},[e("span",{staticClass:"text-danger mr-2"},[e("i",{staticClass:"fa fa-arrow-down"}),t._v(" 5.72%")]),t._v(" "),e("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",{attrs:{title:"Performance",type:"gradient-info","sub-title":"49,65%",icon:"ni ni-chart-bar-32"}},[e("template",{slot:"footer"},[e("span",{staticClass:"text-success mr-2"},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" 54.8%")]),t._v(" "),e("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1)])]),t._v(" "),e("div",{staticClass:"container-fluid mt--6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Overview")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Total sales")])]),t._v(" "),e("div",{staticClass:"chart"},[e("line-chart",{attrs:{height:350,"chart-data":t.salesChart.chartData}})],1)],2)],1),t._v(" "),e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Performance")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Total orders")])]),t._v(" "),e("div",{staticClass:"chart"},[e("bar-chart",{attrs:{"chart-data":t.ordersChart.chartData,height:350}})],1)],2)],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Growth")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Sales value")])]),t._v(" "),e("div",{staticClass:"chart"},[e("line-chart",{attrs:{height:350,"chart-data":t.dotsChart.chartData,"extra-options":t.dotsChart.extraOptions}})],1)],2)],1),t._v(" "),e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Users")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Audience overview")])]),t._v(" "),e("div",{staticClass:"chart-area"},[e("doughnut-chart",{attrs:{height:350,"chart-data":t.doughnutChart.chartData,"extra-options":t.doughnutChart.extraOptions}})],1)],2)],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Partners")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Affiliate traffic")])]),t._v(" "),e("div",{staticClass:"chart"},[e("pie-chart",{attrs:{height:350,"chart-data":t.pieChart.chartData,"extra-options":t.pieChart.extraOptions}})],1)],2)],1),t._v(" "),e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Overview")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Product comparison")])]),t._v(" "),e("div",{staticClass:"chart-area"},[e("bar-chart",{attrs:{height:350,"chart-data":t.barChartStacked.chartData,"extra-options":t.barChartStacked.extraOptions}})],1)],2)],1)])])],1)}),[],!1,null,null,null);e.default=component.exports},441:function(t,e,r){"use strict";r(447);var o=r(445);e.a={mounted:function(){Object(o.d)()}}},445:function(t,e,r){"use strict";r.d(e,"a",(function(){return m})),r.d(e,"d",(function(){return C})),r.d(e,"b",(function(){return y})),r.d(e,"c",(function(){return x}));r(32),r(21),r(26),r(38),r(39);var o=r(9),n=r(29);function c(t,e){for(var r in e)"object"!==Object(n.a)(e[r])?t[r]=e[r]:c(t[r],e[r])}var l=r(447),d=r.n(l);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={mode:"light",fonts:{base:"Open Sans"},colors:{gray:{100:"#f6f9fc",200:"#e9ecef",300:"#dee2e6",400:"#ced4da",500:"#adb5bd",600:"#8898aa",700:"#525f7f",800:"#32325d",900:"#212529"},theme:{default:"#172b4d",primary:"#002fa7",secondary:"#f4f5f7",info:"#11cdef",success:"#2dce89",danger:"#f5365c",warning:"#fb6340"},black:"#12263F",white:"#FFFFFF",transparent:"transparent"}};var j=!1;function C(){var t,e,r,o;j||(c(d.a,(t=m.colors,e=m.mode,r=m.fonts,o={defaults:{global:{responsive:!0,maintainAspectRatio:!1,defaultColor:"dark"===e?t.gray[700]:t.gray[600],defaultFontColor:"dark"===e?t.gray[700]:t.gray[600],defaultFontFamily:r.base,defaultFontSize:13,layout:{padding:0},legend:{display:!1,position:"bottom",labels:{usePointStyle:!0,padding:16}},elements:{point:{radius:0,backgroundColor:t.theme.primary},line:{tension:.4,borderWidth:4,borderColor:t.theme.primary,backgroundColor:t.transparent,borderCapStyle:"rounded"},rectangle:{backgroundColor:t.theme.primary},arc:{backgroundColor:t.theme.primary,borderColor:"dark"==e?t.gray[800]:t.white,borderWidth:4}},tooltips:{enabled:!0,mode:"index",intersect:!1}},pie:{tooltips:{mode:"point"}},doughnut:{tooltips:{mode:"point"},cutoutPercentage:83,legendCallback:function(t){var data=t.data,content="";return data.labels.forEach((function(label,t){var e=data.datasets[0].backgroundColor[t];content+='<span class="chart-legend-item">',content+='<i class="chart-legend-indicator" style="background-color: '+e+'"></i>',content+=label,content+="</span>"})),content}}}},d.a.scaleService.updateScaleDefaults("linear",{gridLines:{borderDash:[2],borderDashOffset:[2],color:"dark"===e?t.gray[900]:t.gray[200],drawBorder:!1,drawTicks:!0,zeroLineWidth:1,zeroLineColor:"dark"===e?t.gray[900]:t.gray[200],zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]},ticks:{beginAtZero:!0,padding:10,callback:function(t){if(!(t%10))return t}}}),d.a.scaleService.updateScaleDefaults("category",{gridLines:{drawBorder:!1,drawOnChartArea:!1,drawTicks:!1,lineWidth:1,zeroLineWidth:1},ticks:{padding:20},maxBarThickness:10}),o)),j=!0)}var v={maintainAspectRatio:!1,legend:{display:!1},responsive:!0},y={scales:{yAxes:[{gridLines:{color:m.colors.gray[700],zeroLineColor:m.colors.gray[700]}}]}},x=(f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}),f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(253,93,147,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(253,93,147,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}),f(f({},v),{},{cutoutPercentage:70,tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{display:0,ticks:{display:!1},gridLines:{drawBorder:!1,zeroLineColor:"transparent",color:"rgba(255,255,255,0.05)"}}],xAxes:[{display:0,barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(255,255,255,0.1)",zeroLineColor:"transparent"},ticks:{display:!1}}]}}),f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}}),f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:110,padding:20,fontColor:"#ff8a76"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(220,53,69,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#ff8a76"}}]}}),f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(0,242,195,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}));f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:120,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}})},586:function(t,e,r){"use strict";var o=r(444),n=r(441);e.a={name:"line-chart",extends:o.c,mixins:[o.e.reactiveProp,n.a],props:{extraOptions:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}}},587:function(t,e,r){"use strict";var o=r(444),n=r(441);e.a={name:"bar-chart",extends:o.a,mixins:[o.e.reactiveProp,n.a],props:{extraOptions:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}}},591:function(t,e,r){var map={"./af":451,"./af.js":451,"./ar":452,"./ar-dz":453,"./ar-dz.js":453,"./ar-kw":454,"./ar-kw.js":454,"./ar-ly":455,"./ar-ly.js":455,"./ar-ma":456,"./ar-ma.js":456,"./ar-sa":457,"./ar-sa.js":457,"./ar-tn":458,"./ar-tn.js":458,"./ar.js":452,"./az":459,"./az.js":459,"./be":460,"./be.js":460,"./bg":461,"./bg.js":461,"./bm":462,"./bm.js":462,"./bn":463,"./bn-bd":464,"./bn-bd.js":464,"./bn.js":463,"./bo":465,"./bo.js":465,"./br":466,"./br.js":466,"./bs":467,"./bs.js":467,"./ca":468,"./ca.js":468,"./cs":469,"./cs.js":469,"./cv":470,"./cv.js":470,"./cy":471,"./cy.js":471,"./da":472,"./da.js":472,"./de":473,"./de-at":474,"./de-at.js":474,"./de-ch":475,"./de-ch.js":475,"./de.js":473,"./dv":476,"./dv.js":476,"./el":477,"./el.js":477,"./en-au":478,"./en-au.js":478,"./en-ca":479,"./en-ca.js":479,"./en-gb":480,"./en-gb.js":480,"./en-ie":481,"./en-ie.js":481,"./en-il":482,"./en-il.js":482,"./en-in":483,"./en-in.js":483,"./en-nz":484,"./en-nz.js":484,"./en-sg":485,"./en-sg.js":485,"./eo":486,"./eo.js":486,"./es":487,"./es-do":488,"./es-do.js":488,"./es-mx":489,"./es-mx.js":489,"./es-us":490,"./es-us.js":490,"./es.js":487,"./et":491,"./et.js":491,"./eu":492,"./eu.js":492,"./fa":493,"./fa.js":493,"./fi":494,"./fi.js":494,"./fil":495,"./fil.js":495,"./fo":496,"./fo.js":496,"./fr":497,"./fr-ca":498,"./fr-ca.js":498,"./fr-ch":499,"./fr-ch.js":499,"./fr.js":497,"./fy":500,"./fy.js":500,"./ga":501,"./ga.js":501,"./gd":502,"./gd.js":502,"./gl":503,"./gl.js":503,"./gom-deva":504,"./gom-deva.js":504,"./gom-latn":505,"./gom-latn.js":505,"./gu":506,"./gu.js":506,"./he":507,"./he.js":507,"./hi":508,"./hi.js":508,"./hr":509,"./hr.js":509,"./hu":510,"./hu.js":510,"./hy-am":511,"./hy-am.js":511,"./id":512,"./id.js":512,"./is":513,"./is.js":513,"./it":514,"./it-ch":515,"./it-ch.js":515,"./it.js":514,"./ja":516,"./ja.js":516,"./jv":517,"./jv.js":517,"./ka":518,"./ka.js":518,"./kk":519,"./kk.js":519,"./km":520,"./km.js":520,"./kn":521,"./kn.js":521,"./ko":522,"./ko.js":522,"./ku":523,"./ku.js":523,"./ky":524,"./ky.js":524,"./lb":525,"./lb.js":525,"./lo":526,"./lo.js":526,"./lt":527,"./lt.js":527,"./lv":528,"./lv.js":528,"./me":529,"./me.js":529,"./mi":530,"./mi.js":530,"./mk":531,"./mk.js":531,"./ml":532,"./ml.js":532,"./mn":533,"./mn.js":533,"./mr":534,"./mr.js":534,"./ms":535,"./ms-my":536,"./ms-my.js":536,"./ms.js":535,"./mt":537,"./mt.js":537,"./my":538,"./my.js":538,"./nb":539,"./nb.js":539,"./ne":540,"./ne.js":540,"./nl":541,"./nl-be":542,"./nl-be.js":542,"./nl.js":541,"./nn":543,"./nn.js":543,"./oc-lnc":544,"./oc-lnc.js":544,"./pa-in":545,"./pa-in.js":545,"./pl":546,"./pl.js":546,"./pt":547,"./pt-br":548,"./pt-br.js":548,"./pt.js":547,"./ro":549,"./ro.js":549,"./ru":550,"./ru.js":550,"./sd":551,"./sd.js":551,"./se":552,"./se.js":552,"./si":553,"./si.js":553,"./sk":554,"./sk.js":554,"./sl":555,"./sl.js":555,"./sq":556,"./sq.js":556,"./sr":557,"./sr-cyrl":558,"./sr-cyrl.js":558,"./sr.js":557,"./ss":559,"./ss.js":559,"./sv":560,"./sv.js":560,"./sw":561,"./sw.js":561,"./ta":562,"./ta.js":562,"./te":563,"./te.js":563,"./tet":564,"./tet.js":564,"./tg":565,"./tg.js":565,"./th":566,"./th.js":566,"./tk":567,"./tk.js":567,"./tl-ph":568,"./tl-ph.js":568,"./tlh":569,"./tlh.js":569,"./tr":570,"./tr.js":570,"./tzl":571,"./tzl.js":571,"./tzm":572,"./tzm-latn":573,"./tzm-latn.js":573,"./tzm.js":572,"./ug-cn":574,"./ug-cn.js":574,"./uk":575,"./uk.js":575,"./ur":576,"./ur.js":576,"./uz":577,"./uz-latn":578,"./uz-latn.js":578,"./uz.js":577,"./vi":579,"./vi.js":579,"./x-pseudo":580,"./x-pseudo.js":580,"./yo":581,"./yo.js":581,"./zh-cn":582,"./zh-cn.js":582,"./zh-hk":583,"./zh-hk.js":583,"./zh-mo":584,"./zh-mo.js":584,"./zh-tw":585,"./zh-tw.js":585};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=591},594:function(t,e,r){"use strict";var o=r(444),n=r(441);e.a={name:"pie-chart",extends:o.d,mixins:[o.e.reactiveProp,n.a],props:{extraOptions:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}}}}]);