(()=>{var e={};e.id=312,e.ids=[312],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},7330:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>h,tree:()=>d});var l=r(482),a=r(9108),n=r(2563),s=r.n(n),o=r(8300),i={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);r.d(t,i);let d=["",{children:["products",{children:["list",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9418)),"/home/christopher/Desktop/Nalmart work repo/nalmart-vendor-hub/src/app/products/list/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1342)),"/home/christopher/Desktop/Nalmart work repo/nalmart-vendor-hub/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/home/christopher/Desktop/Nalmart work repo/nalmart-vendor-hub/src/app/products/list/page.tsx"],c="/products/list/page",p={require:r,loadChunk:()=>Promise.resolve()},h=new l.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/products/list/page",pathname:"/products/list",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1632:(e,t,r)=>{Promise.resolve().then(r.bind(r,1515))},1515:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>O});var l=r(5344),a=r(703);r(6196);var n=r(5588),s=r(2080),o=r(4146),i=r(3729),d=r(1779),u=r.n(d),c=r(1133),p=r(4502),h=r(4721),m=r(6652),v=r(3556),x=r(6260),g=r(9999),b=r(8296),y=r(8929);let f=({onChange:e,value:t,name:r,label:a,error:n,categoryId:s})=>{let[o,d]=(0,i.useState)([]),c=()=>{console.log(s),u().get(`categories/${s}`).then(e=>{200===e.status&&d(e.data)}).catch(e=>{console.log(e.message)})};return(0,i.useEffect)(()=>{c()},[s]),(0,l.jsxs)(l.Fragment,{children:[l.jsx("div",{children:a}),l.jsx("div",{children:l.jsx(y.L,{value:t,options:o,name:r,onChange:e,optionLabel:"name",optionValue:"id",placeholder:"Select Subcategory",className:"w-full"})}),l.jsx("div",{className:"text-danger ",style:{fontSize:"small"},children:n})]})};var j=r(3165),N=r(402),C=r(5953),E=r(9478);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var w=C.V.extend({defaultProps:{__TYPE:"Editor",id:null,value:null,style:null,className:null,placeholder:null,readOnly:!1,modules:null,formats:null,theme:"snow",showHeader:!0,headerTemplate:null,onTextChange:null,onSelectionChange:null,onLoad:null,maxLength:null,children:void 0}});function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,l)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach(function(t){!function(e,t,r){var l;l=function(e,t){if("object"!==q(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var l=r.call(e,t||"default");if("object"!==q(l))return l;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===q(l)?l:String(l))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var k=function(){try{return Quill}catch(e){return null}}(),B=i.memo(i.forwardRef(function(e,t){var l=i.useContext(E.Ou),a=w.getProps(e,l),n=w.setMetaData({props:a}).ptm,s=i.useRef(null),o=i.useRef(null),d=i.useRef(null),u=i.useRef(null),c=i.useRef(!1);(0,j.nw)(function(){if(!c.current){var e={modules:P({toolbar:!!a.showHeader&&d.current},a.modules),placeholder:a.placeholder,readOnly:a.readOnly,theme:a.theme,formats:a.formats};k?(u.current=new Quill(o.current,e),p(),u.current&&u.current.getModule("toolbar")&&a.onLoad&&a.onLoad(u.current)):r.e(16).then(r.t.bind(r,5016,23)).then(function(t){t&&N.p7.isExist(o.current)&&(t.default?u.current=new t.default(o.current,e):u.current=new t(o.current,e),p())}).then(function(){u.current&&u.current.getModule("toolbar")&&a.onLoad&&a.onLoad(u.current)}),c.current=!0}});var p=function(){a.value&&u.current.setContents(u.current.clipboard.convert(a.value)),u.current.on("text-change",function(e,t,r){var l=o.current.children[0],n=l?l.innerHTML:null,s=u.current.getText();if("<p><br></p>"===n&&(n=null),"api"===r){var i=o.current.children[0],d=document.createElement("div");if(d.innerHTML=a.value||"",N.p7.isEqualElement(i,d))return}if(a.maxLength){var c=u.current.getLength();c>a.maxLength&&u.current.deleteText(a.maxLength,c)}a.onTextChange&&a.onTextChange({htmlValue:n,textValue:s,delta:e,source:r})}),u.current.on("selection-change",function(e,t,r){a.onSelectionChange&&a.onSelectionChange({range:e,oldRange:t,source:r})})};(0,j.rf)(function(){u.current&&!u.current.hasFocus()&&(a.value?u.current.setContents(u.current.clipboard.convert(a.value)):u.current.setText(""))},[a.value]),i.useImperativeHandle(t,function(){return{props:a,getQuill:function(){return u.current},getElement:function(){return s.current},getContent:function(){return o.current},getToolbar:function(){return d.current}}});var h=(0,N.AK)("p-component p-editor-container",a.className),m=function(){var e=(0,N.dG)({ref:d,className:"p-editor-toolbar"},n("toolbar"));if(!1===a.showHeader)return null;if(a.headerTemplate)return i.createElement("div",e,a.headerTemplate);var t=function(e,t){return(0,N.dG)(e&&P({},e),n(t))},r=(0,N.dG)({className:"ql-formats"},n("formats"));return i.createElement("div",e,i.createElement("span",r,i.createElement("select",t({className:"ql-header",defaultValue:"0"},"select"),i.createElement("option",t({value:"1"},"option"),"Heading"),i.createElement("option",t({value:"2"},"option"),"Subheading"),i.createElement("option",t({value:"0"},"option"),"Normal")),i.createElement("select",t({className:"ql-font"},"select"),i.createElement("option",t(void 0,"option")),i.createElement("option",t({value:"serif"},"option")),i.createElement("option",t({value:"monospace"},"option")))),i.createElement("span",r,i.createElement("button",t({type:"button",className:"ql-bold","aria-label":"Bold"},"button")),i.createElement("button",t({type:"button",className:"ql-italic","aria-label":"Italic"},"button")),i.createElement("button",t({type:"button",className:"ql-underline","aria-label":"Underline"},"button"))),i.createElement("span",r,i.createElement("select",t({className:"ql-color"},"select")),i.createElement("select",t({className:"ql-background"},"select"))),i.createElement("span",r,i.createElement("button",t({type:"button",className:"ql-list",value:"ordered","aria-label":"Ordered List"},"button")),i.createElement("button",t({type:"button",className:"ql-list",value:"bullet","aria-label":"Unordered List"},"button")),i.createElement("select",t({className:"ql-align"},"select"),i.createElement("option",t({defaultValue:!0},"option")),i.createElement("option",t({value:"center"},"option")),i.createElement("option",t({value:"right"},"option")),i.createElement("option",t({value:"justify"},"option")))),i.createElement("span",r,i.createElement("button",t({type:"button",className:"ql-link","aria-label":"Insert Link"},"button")),i.createElement("button",t({type:"button",className:"ql-image","aria-label":"Insert Image"},"button")),i.createElement("button",t({type:"button",className:"ql-code-block","aria-label":"Insert Code Block"},"button"))),i.createElement("span",r,i.createElement("button",t({type:"button",className:"ql-clean","aria-label":"Remove Styles"},"button"))))}(),v=(0,N.dG)({ref:o,className:"p-editor-content",style:a.style},n("content")),x=i.createElement("div",v),g=(0,N.dG)({id:a.id,ref:s,className:h},w.getOtherProps(a),n("root"));return i.createElement("div",g,m,x)}));B.displayName="Editor";let D=p.Ry({name:p.Z_().required("Name is required"),displayName:p.Z_().required("Display name is required"),brand:p.Z_().required(),description:p.Z_().required(),globalPrice:p.Rx().required("Global price is required"),price:p.Rx().required(),qty:p.Z_().required(),serialNumber:p.Z_().required(),vendorID:p.Rx().integer().required()}),I=({show:e,toggle:t})=>{let{showSuccess:r,showError:a}=(0,g.p)(),[s,o]=(0,i.useState)(!1),[d,p]=(0,i.useState)({ads:[],approved:!1,brand:"",category:"",coverPhoto:{url:""},description:"",details:[],discount:"",freeDelivery:!1,globalPrice:null,name:"",displayName:"",original:"",photos:[],price:null,qty:"",serialNumber:"",stockCount:null,store:"",subCategory:"",type:"",vendorID:456,whatIsInTheBox:""});return l.jsx(l.Fragment,{children:(0,l.jsxs)(v.V,{header:"New Product",position:"right",visible:e,style:{width:"60vw"},onHide:()=>{t(!1)},children:[l.jsx(h.J9,{validationSchema:D,initialValues:d,onSubmit:e=>{o(!0),console.log(e),u().post("items/item",e,{headers:{"Content-Type":"application/json"}}).then(e=>{if(200!==e.statusCode)return a(e.message);r(e.message),o(!1),t(!1)}).catch(e=>{a(e.message),o(!1)})},children:e=>(0,l.jsxs)(h.l0,{children:[(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-1 gap-4",children:[(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsx("div",{children:l.jsx(x.Z,{label:"Name",name:"name",placeHolder:"Enter product name",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.name,error:e.touched.name&&e.errors.name})}),l.jsx("div",{children:l.jsx(x.Z,{label:"Display Name",name:"displayName",placeHolder:"Enter display name",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.displayName,error:e.touched.displayName&&e.errors.displayName})}),l.jsx("div",{children:l.jsx(b.Z,{label:"Category",name:"category",onChange:e.handleChange,value:e.values.category,error:e.touched.category&&e.errors.category})}),l.jsx("div",{children:l.jsx(f,{label:"Sub Category",name:"subCategory",categoryId:e.values.category,onChange:e.handleChange,value:e.values.subCategory,error:e.touched.subCategory&&e.errors.subCategory})}),(0,l.jsxs)("div",{children:["Free delivery",l.jsx("div",{children:l.jsx(y.L,{value:e.values.freeDelivery,options:[{id:"Free Delivery",value:!0},{id:"Paid Delivery",value:!1}],name:"Free delivery",onChange:t=>e.setFieldValue("freeDelivery",t.value),optionLabel:"id",optionValue:"value",placeholder:"Select Delivery Option",className:"w-full"})}),l.jsx("div",{className:"text-danger",style:{fontSize:"small"},children:e.touched.freeDelivery&&e.errors.freeDelivery})]}),(0,l.jsxs)("div",{children:["Type ( New or Second hand)",l.jsx("div",{children:l.jsx(y.L,{value:e.values.type,options:[{id:"Boxed ( Brand New )",value:"NEW"},{id:"Second Hand",value:"USED"}],name:"Free delivery",onChange:t=>e.setFieldValue("type",t.value),optionLabel:"id",optionValue:"value",placeholder:"Select type",className:"w-full"})}),l.jsx("div",{className:"text-danger",style:{fontSize:"small"},children:e.touched.type&&e.errors.type})]}),l.jsx("div",{children:l.jsx(x.Z,{label:"Global Price",name:"globalPrice",placeHolder:"Enter global price",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.globalPrice,error:e.touched.globalPrice&&e.errors.globalPrice})}),l.jsx("div",{children:l.jsx(x.Z,{label:"Selling price",name:"price",placeHolder:"Enter selling price",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.price,error:e.touched.price&&e.errors.price})}),l.jsx("div",{children:l.jsx(x.Z,{label:"Discount",onChange:e.handleChange,onBlur:e.handleBlur,disabled:!0,placeHolder:(e.values.globalPrice-e.values.price).toString(),value:e.values.discount,error:e.touched.discount&&e.errors.discount})}),l.jsx("div",{children:l.jsx(x.Z,{label:"Quantity",name:"qty",placeHolder:"Enter quantity of package",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.qty,error:e.touched.qty&&e.errors.qty})}),l.jsx("div",{children:l.jsx(x.Z,{label:"Stock Count",name:"stockCount",placeHolder:"Enter amount in stock",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.stockCount,error:e.touched.stockCount&&e.errors.stockCount})}),l.jsx("div",{children:l.jsx(x.Z,{label:"Supply Store",name:"store",placeHolder:"Enter supply store",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.store,error:e.touched.store&&e.errors.store})}),l.jsx("div",{children:l.jsx(x.Z,{label:"Serial Number",name:"serialNumber",placeHolder:"Enter serial number or ID",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.serialNumber,error:e.touched.serialNumber&&e.errors.serialNumber})}),l.jsx("div",{children:l.jsx(x.Z,{label:"Brand",name:"brand",placeHolder:"Enter product brand",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.brand,error:e.touched.brand&&e.errors.brand})}),l.jsx("div",{children:l.jsx(x.Z,{label:"Vendor ID",name:"vendorID",placeHolder:"Enter vendorID",onChange:e.handleChange,onBlur:e.handleBlur,disabled:!0,value:e.values.vendorID,error:e.touched.vendorID&&e.errors.vendorID})})]}),(0,l.jsxs)("div",{children:[l.jsx("label",{children:"Description"}),l.jsx(B,{value:e.values.description,id:"description",onTextChange:t=>e.setFieldValue("description",t.htmlValue),style:{height:"300px"}}),l.jsx("input",{type:"hidden",name:"description",value:e.values.description})]}),(0,l.jsxs)("div",{children:[l.jsx("label",{children:"What Is In The Box"}),l.jsx(B,{value:e.values.whatIsInTheBox,id:"description",onTextChange:t=>e.setFieldValue("whatIsInTheBox",t.htmlValue),style:{height:"300px"}}),l.jsx("input",{type:"hidden",name:"whatIsInTheBox",value:e.values.whatIsInTheBox})]})]}),l.jsx(m.i,{type:"dashed"}),l.jsx("div",{className:"float-right my-4",children:l.jsx(n.z,{label:"Save",type:"submit",severity:"secondary",size:"small"})}),l.jsx(m.i,{type:"dashed"})]})}),l.jsx(c.Z,{loading:s})]})})};var T=r(2621);let O=()=>{let[e,t]=(0,i.useState)(!1),[r,d]=(0,i.useState)([]),[p,h]=(0,i.useState)(!1),m=()=>{h(!0),u().get("items").then(e=>{200===e.status&&(d(e.data),console.log(e.message)),h(!1)}).catch(e=>{h(!1),console.log(e.message)})};(0,i.useEffect)(()=>{m(),document.title="Manage Nalmart Inventory"},[]);let v=e=>{console.log(r)};return l.jsx(l.Fragment,{children:l.jsx(T.Z,{children:(0,l.jsxs)(a.default,{children:[(0,l.jsxs)("div",{className:"rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1",children:[(0,l.jsxs)("div",{className:"flex justify-between mb-7",children:[(0,l.jsxs)("section",{className:"",children:[l.jsx("div",{className:"mb-6 text-xl font-semibold text-black dark:text-white",children:"Products"}),l.jsx("h6",{className:"text-black dark:text-white",children:"Nalmart Inventory"})]}),(0,l.jsxs)("div",{className:"h-10 gap-3  flex",children:[l.jsx(n.z,{label:"Add Product",outlined:!0,severity:"info",size:"small",icon:"pi pi-plus",onClick:()=>{t(!0)}}),l.jsx(n.z,{label:"Excel",outlined:!0,severity:"success",size:"small",icon:"pi pi-file-excel"}),l.jsx(n.z,{label:"Pdf",outlined:!0,severity:"danger",size:"small",icon:"pi pi-file-pdf"})]})]}),l.jsx(I,{show:e,toggle:t}),l.jsx("div",{className:"flex flex-col",children:(0,l.jsxs)(o.w,{value:r,dataKey:"id",resizableColumns:!0,emptyMessage:"No products found",stripedRows:!0,paginator:!0,rows:10,rowsPerPageOptions:[5,10,25,50,100,200],tableStyle:{minWidth:"80rem",maxWidth:"100px"},children:[l.jsx(s.s,{field:"sku",header:"Item Sku",sortable:!0,filter:!0}),l.jsx(s.s,{header:"Photo",body:e=>l.jsx("img",{src:`${e?.coverPhoto?.url}`,alt:"No Image",className:"w-2rem h-3rem shadow-2 border-round",style:{width:40,height:40}})}),l.jsx(s.s,{field:"globalPrice",header:"Global price",dataType:"numeric",sortable:!0,filter:!0}),l.jsx(s.s,{field:"price",header:"Price",dataType:"numeric",sortable:!0,filter:!0}),l.jsx(s.s,{field:"discount",header:"Discount",body:e=>l.jsx("div",{children:e.discount.toFixed(1)+"%"}),dataType:"numeric",sortable:!0,filter:!0}),l.jsx(s.s,{field:"freeDelivery",header:"Delivery",filter:!0}),l.jsx(s.s,{field:"approved",header:"Approved status",filter:!0}),l.jsx(s.s,{field:"stockCount",header:"Amount in stock",filter:!0}),l.jsx(s.s,{field:"brand",header:"Brand",filter:!0}),l.jsx(s.s,{field:"serialNumber",header:"Serial Number",filter:!0}),l.jsx(s.s,{field:"store",header:"Supply Store",filter:!0}),l.jsx(s.s,{field:"category",header:"Category",filter:!0}),l.jsx(s.s,{field:"subCategory",header:"SubCategory",filter:!0}),l.jsx(s.s,{field:"type",header:"Item state",filter:!0}),l.jsx(s.s,{header:"Actions",body:e=>(0,l.jsxs)("div",{className:"flex gap-3 h-8",children:[l.jsx(n.z,{outlined:!0,severity:"secondary",size:"small",icon:"pi pi-eye",style:{padding:3}}),l.jsx(n.z,{outlined:!0,severity:"info",size:"small",icon:"pi pi-user-edit",style:{padding:3}}),l.jsx(n.z,{outlined:!0,severity:"danger",size:"small",icon:"pi pi-trash",style:{padding:3},onClick:v})]})})]})})]}),l.jsx(c.Z,{loading:p})]})})})}},6260:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var l=r(5344);r(3729);var a=r(685);let n=({onChange:e,onBlur:t,label:r,value:n,name:s,id:o,placeHolder:i,error:d,disabled:u})=>(0,l.jsxs)(l.Fragment,{children:[l.jsx("div",{children:l.jsx("label",{style:{fontSize:"small"},htmlFor:o,children:r})}),l.jsx("div",{children:l.jsx(a.o,{id:o,name:s,placeholder:i,onChange:e,onBlur:t,disabled:u,value:n,className:"w-full"})}),l.jsx("div",{className:"text-danger",style:{fontSize:"x-small"},children:d&&"string"==typeof d&&l.jsx("div",{children:d})})]})},8296:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var l=r(5344),a=r(8929),n=r(3729),s=r(1779),o=r.n(s);let i=({onChange:e,value:t,name:r,label:s,error:i})=>{let[d,u]=(0,n.useState)([]),c=()=>{o().get("categories").then(e=>{200===e.status&&(console.log("Categories are"+e.data),u(e.data))}).catch(e=>{console.log(e.message)})};return(0,n.useEffect)(()=>{c()},[]),(0,l.jsxs)(l.Fragment,{children:[l.jsx("div",{children:s}),l.jsx("div",{children:l.jsx(a.L,{value:t,options:d,name:r,onChange:e,optionLabel:"name",optionValue:"categoryID",placeholder:"Select Category",className:"w-full"})}),l.jsx("div",{className:"text-danger",style:{fontSize:"small"},children:i})]})}},9418:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>a,default:()=>s});let l=(0,r(6843).createProxy)(String.raw`/home/christopher/Desktop/Nalmart work repo/nalmart-vendor-hub/src/app/products/list/page.tsx`),{__esModule:a,$$typeof:n}=l,s=l.default}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),l=t.X(0,[638,577,919,947,1,821],()=>r(7330));module.exports=l})();