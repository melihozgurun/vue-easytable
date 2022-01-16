(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d23d1d2"],{"421f":function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("tpl",{attrs:{desc:n.desc,anchor:n.anchor,"table-data":n.db.columnHiddenOption.data,columns:n.db.columnHiddenOption.columns}})],1)},l=[],c=t("3ef3"),i=t("d890"),a={components:{tpl:c["a"]},props:{anchor:{type:String,default:"列隐藏配置"},desc:{type:String,default:"columnHiddenOption"}},data:function(){return{db:i["a"]}}},d=a,r=t("2877"),s=Object(r["a"])(d,o,l,!1,null,null,null);e["a"]=s.exports},"78bb":function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h2",[n._v("列隐藏")]),t("Explain"),t("DefaultHiddenColumnKeys"),t("InstanceMethods"),t("API",{attrs:{title:"API",anchor:"API",desc:"columnHidden 列隐藏配置"}})],1)},l=[],c=function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},i=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[n._v("1、通过 "),t("code",[n._v("columnHiddenOption")]),n._v(" 实现列隐藏功能"),t("br"),n._v(" 2、你也可以通过实例方法控制列的隐藏与显示")])])])}],a=t("2877"),d={},r=Object(a["a"])(d,c,i,!1,null,null,null),s=r.exports,u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"默认隐藏列",fileName:"default-hidden-column.md"}}),t("p",[n._v("下面示例默认隐藏 hobby 和 name 列")]),t("demo-block",[t("div",[t("p",[n._v("通过 "),t("code",[n._v("defaultHiddenColumnKeys")]),n._v("属性设置默认隐藏的列")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<template>\n    <ve-table :columns="columns" :table-data="tableData" :columnHiddenOption="columnHiddenOption" />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columnHiddenOption: {\n                    // default hidden column keys\n                    defaultHiddenColumnKeys: ["hobby", "name"],\n                },\n                columns: [\n                    { field: "name", key: "name", title: "Name" },\n                    { field: "date", key: "date", title: "Date" },\n                    { field: "hobby", key: "hobby", title: "Hobby" },\n                    { field: "address", key: "address", title: "Address" },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},b=[];function m(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function h(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){f(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function f(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var p={name:"component-doc",components:{"element-demo0":function(){var n=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[[t("ve-table",{attrs:{columns:n.columns,"table-data":n.tableData,columnHiddenOption:n.columnHiddenOption}})]],2)},e=[],t={data:function(){return{columnHiddenOption:{defaultHiddenColumnKeys:["hobby","name"]},columns:[{field:"name",key:"name",title:"Name"},{field:"date",key:"date",title:"Date"},{field:"hobby",key:"hobby",title:"Hobby"},{field:"address",key:"address",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return h({render:n,staticRenderFns:e},t)}()}},y=p,v=Object(a["a"])(y,u,b,!1,null,null,null),k=v.exports,C=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"实例方法",fileName:"instance-methods.md"}}),t("demo-block",[t("div",[t("p",[n._v("1、通过实例方法 "),t("code",[n._v("hideColumnsByKeys(keys)")]),n._v("将列隐藏 "),t("br"),n._v("2、通过实例方法 "),t("code",[n._v("showColumnsByKeys(keys)")]),n._v("将隐藏的列显示")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<template>\n    <div>\n        <button class="button-demo" @click="hideColumns([\'col1\'])">隐藏 col1 列</button>\n        <button class="button-demo" @click="hideColumns([\'col2\'])">隐藏 col2 列</button>\n        <button class="button-demo" @click="hideColumns([\'col3\'])">隐藏 col3 列</button>\n        <button class="button-demo" @click="hideColumns([\'col1\',\'col2\',\'col3\'])">\n            隐藏 col1、col2、col3 列\n        </button>\n        <br />\n        <br />\n        <button class="button-demo" @click="showColumns([\'col1\'])">显示 col1 列</button>\n        <button class="button-demo" @click="showColumns([\'col2\'])">显示 col2 列</button>\n        <button class="button-demo" @click="showColumns([\'col3\'])">显示 col3 列</button>\n        <button class="button-demo" @click="showColumns([\'col1\',\'col2\',\'col3\'])">\n            显示 col1、col2、col3 列\n        </button>\n        <br />\n        <br />\n        <ve-table\n            ref="tableRef"\n            border-y\n            :columns="columns"\n            :table-data="tableData"\n            :columnHiddenOption="columnHiddenOption"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columnHiddenOption: {\n                    // default hidden column keys\n                    defaultHiddenColumnKeys: ["col8"],\n                },\n                columns: [\n                    { field: "col1", key: "col1", title: "col1", width: "10%" },\n                    {\n                        title: "col2-col3",\n                        children: [\n                            {\n                                field: "col2",\n                                key: "col2",\n                                title: "col2",\n                                width: 100,\n                            },\n                            {\n                                field: "col3",\n                                key: "col3",\n                                title: "col3",\n                                width: 110,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col4-col5-col6",\n                        children: [\n                            {\n                                title: "col4-col5",\n                                children: [\n                                    {\n                                        field: "col4",\n                                        key: "col4",\n                                        title: "col4",\n                                        width: 130,\n                                    },\n                                    {\n                                        field: "col5",\n                                        key: "col5",\n                                        title: "col5",\n                                        width: 140,\n                                    },\n                                ],\n                            },\n                            {\n                                title: "col6",\n                                field: "col6",\n                                key: "col6",\n                                width: 140,\n                            },\n                        ],\n                    },\n                    { field: "col7", key: "col7", title: "col7", width: 150 },\n                    { field: "col8", key: "col8", title: "col8", width: 160 },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            // hidden columns\n            hideColumns(keys) {\n                this.$refs["tableRef"].hideColumnsByKeys(keys);\n            },\n            // show cloumns\n            showColumns(keys) {\n                this.$refs["tableRef"].showColumnsByKeys(keys);\n            },\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 3; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: "col1-" + i,\n                        col2: "col2-" + i,\n                        col3: "col3-" + i,\n                        col4: "col4-" + i,\n                        col5: "col5-" + i,\n                        col6: "col6-" + i,\n                        col7: "col7-" + i,\n                        col8: "col8-" + i,\n                    });\n                }\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},O=[];function _(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function w(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?_(Object(t),!0).forEach((function(e){g(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function g(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var j={name:"component-doc",components:{"element-demo0":function(){var n=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[[t("div",[t("button",{staticClass:"button-demo",on:{click:function(e){return n.hideColumns(["col1"])}}},[n._v("隐藏 col1 列")]),n._v(" "),t("button",{staticClass:"button-demo",on:{click:function(e){return n.hideColumns(["col2"])}}},[n._v("隐藏 col2 列")]),n._v(" "),t("button",{staticClass:"button-demo",on:{click:function(e){return n.hideColumns(["col3"])}}},[n._v("隐藏 col3 列")]),n._v(" "),t("button",{staticClass:"button-demo",on:{click:function(e){return n.hideColumns(["col1","col2","col3"])}}},[n._v("\n            隐藏 col1、col2、col3 列\n        ")]),n._v(" "),t("br"),n._v(" "),t("br"),n._v(" "),t("button",{staticClass:"button-demo",on:{click:function(e){return n.showColumns(["col1"])}}},[n._v("显示 col1 列")]),n._v(" "),t("button",{staticClass:"button-demo",on:{click:function(e){return n.showColumns(["col2"])}}},[n._v("显示 col2 列")]),n._v(" "),t("button",{staticClass:"button-demo",on:{click:function(e){return n.showColumns(["col3"])}}},[n._v("显示 col3 列")]),n._v(" "),t("button",{staticClass:"button-demo",on:{click:function(e){return n.showColumns(["col1","col2","col3"])}}},[n._v("\n            显示 col1、col2、col3 列\n        ")]),n._v(" "),t("br"),n._v(" "),t("br"),n._v(" "),t("ve-table",{ref:"tableRef",attrs:{"border-y":"",columns:n.columns,"table-data":n.tableData,columnHiddenOption:n.columnHiddenOption}})],1)]],2)},e=[],t={data:function(){return{columnHiddenOption:{defaultHiddenColumnKeys:["col8"]},columns:[{field:"col1",key:"col1",title:"col1",width:"10%"},{title:"col2-col3",children:[{field:"col2",key:"col2",title:"col2",width:100},{field:"col3",key:"col3",title:"col3",width:110}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"col4",title:"col4",width:130},{field:"col5",key:"col5",title:"col5",width:140}]},{title:"col6",field:"col6",key:"col6",width:140}]},{field:"col7",key:"col7",title:"col7",width:150},{field:"col8",key:"col8",title:"col8",width:160}],tableData:[]}},methods:{hideColumns:function(n){this.$refs["tableRef"].hideColumnsByKeys(n)},showColumns:function(n){this.$refs["tableRef"].showColumnsByKeys(n)},initTableData:function(){for(var n=[],e=0;e<3;e++)n.push({rowKey:e,col1:"col1-"+e,col2:"col2-"+e,col3:"col3-"+e,col4:"col4-"+e,col5:"col5-"+e,col6:"col6-"+e,col7:"col7-"+e,col8:"col8-"+e});this.tableData=n}},created:function(){this.initTableData()}};return w({render:n,staticRenderFns:e},t)}()}},D=j,H=Object(a["a"])(D,C,O,!1,null,null,null),P=H.exports,A=t("421f"),K={name:"basic-main",components:{Explain:s,DefaultHiddenColumnKeys:k,InstanceMethods:P,API:A["a"]}},E=K,N=Object(a["a"])(E,o,l,!1,null,null,null);e["default"]=N.exports}}]);
//# sourceMappingURL=chunk-4d23d1d2.302a3820.js.map