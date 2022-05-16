(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ffa18aee"],{"2c77":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.columns.ellipsisProps.data,columns:e.db.columns.ellipsisProps.columns}})],1)},i=[],o=t("3ef3"),s=t("d890"),l={components:{tpl:o["a"]},props:{anchor:{type:String,default:"单元格省略"},desc:{type:String,default:"ellipsis"}},data:function(){return{db:s["a"]}}},r=l,d=t("2877"),c=Object(d["a"])(r,a,i,!1,null,null,null);n["a"]=c.exports},"3bdf":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("单元格省略")]),t("Explain"),t("Base"),t("Ellipsis"),t("EllipsisLine"),t("API",{attrs:{title:"API",anchor:"API",desc:"ellipsis 单元格省略配置"}})],1)},i=[],o=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、通过 "),t("code",[e._v("column")]),e._v(" 的 "),t("code",[e._v("ellipsis")]),e._v(" 属性设置超出显示省略"),t("br"),e._v(" 2、通过 "),t("code",[e._v("lineClamp")]),e._v("内容超出多少行开始出现省略")])])])}],l=t("2877"),r={},d=Object(l["a"])(r,o,s,!1,null,null,null),c=d.exports,h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"超出换行",fileName:"base.md"}}),t("p",[e._v("默认单元格内的文本超出宽度时，换行显示")]),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        rowKeyFieldName="rowKey"\n        :fixed-header="true"\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        align: "center",\n                        width: "30%",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        align: "left",\n                        width: "40%",\n                    },\n                ],\n                // table data\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text",\n                        rowKey: 0,\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",\n                        rowKey: 1,\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text",\n                        rowKey: 2,\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Xiamen,this is a long text,this is a long text",\n                        rowKey: 3,\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                        rowKey: 4,\n                    },\n                ],\n            };\n        },\n        methods: {},\n    };\n<\/script>\n')])])])],2)],1)},g=[];function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){m(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var y={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{rowKeyFieldName:"rowKey","fixed-header":!0,columns:e.columns,"table-data":e.tableData}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%"},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen,this is a long text,this is a long text",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{}};return b({render:e,staticRenderFns:n},t)}()}},p=y,f=Object(l["a"])(p,h,g,!1,null,null,null),x=f.exports,v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"超出省略",fileName:"ellipsis.md"}}),t("demo-block",[t("div",[t("p",[e._v("通过 "),t("code",[e._v("column")]),e._v(" 的 "),t("code",[e._v("ellipsis")]),e._v(" 属性设置超出显示省略。默认单行省略")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        rowKeyFieldName="rowKey"\n        :fixed-header="true"\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        align: "center",\n                        width: "30%",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        align: "left",\n                        width: "40%",\n                        ellipsis: {\n                            showTitle: true,\n                        },\n                    },\n                ],\n                // table data\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text",\n                        rowKey: 0,\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",\n                        rowKey: 1,\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text",\n                        rowKey: 2,\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Xiamen,this is a long text,this is a long text",\n                        rowKey: 3,\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                        rowKey: 4,\n                    },\n                ],\n            };\n        },\n        methods: {},\n    };\n<\/script>\n')])])])],2)],1)},w=[];function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){_(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var C={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{rowKeyFieldName:"rowKey","fixed-header":!0,columns:e.columns,"table-data":e.tableData}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%"},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%",ellipsis:{showTitle:!0}}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen,this is a long text,this is a long text",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{}};return j({render:e,staticRenderFns:n},t)}()}},N=C,K=Object(l["a"])(N,v,w,!1,null,null,null),k=K.exports,A=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"多行省略",fileName:"ellipsis-line.md"}}),e._m(0),t("demo-block",[t("div",[t("p",[e._v("通过 "),t("code",[e._v("lineClamp")]),e._v("设置超过多少行省略")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        rowKeyFieldName="rowKey"\n        :fixed-header="true"\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        align: "center",\n                        width: "30%",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        align: "left",\n                        width: "40%",\n                        ellipsis: {\n                            showTitle: true,\n                            lineClamp: 2,\n                        },\n                    },\n                ],\n                // table data\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text",\n                        rowKey: 0,\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",\n                        rowKey: 1,\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text",\n                        rowKey: 2,\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Xiamen,this is a long text,this is a long text",\n                        rowKey: 3,\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                        rowKey: 4,\n                    },\n                ],\n            };\n        },\n        methods: {},\n    };\n<\/script>\n')])])])],2)],1)},D=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("此功能目前只支持 "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-line-clamp"}},[e._v("-webkit-line-clamp 属性")]),e._v(" 的浏览器")])}];function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){S(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var J={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{rowKeyFieldName:"rowKey","fixed-header":!0,columns:e.columns,"table-data":e.tableData}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%"},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%",ellipsis:{showTitle:!0,lineClamp:2}}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen,this is a long text,this is a long text",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{}};return E({render:e,staticRenderFns:n},t)}()}},$=J,F=Object(l["a"])($,A,D,!1,null,null,null),z=F.exports,B=t("2c77"),L={name:"basic-main",components:{Explain:c,Base:x,Ellipsis:k,EllipsisLine:z,API:B["a"]}},q=L,G=Object(l["a"])(q,a,i,!1,null,null,null);n["default"]=G.exports}}]);
//# sourceMappingURL=chunk-ffa18aee.154f8c8b.js.map