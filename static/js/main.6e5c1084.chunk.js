(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);n(20);var a=n(1),r=n.n(a),c=n(17),s=n.n(c),o=n(3),l=n(4),i=n(6),u=n(5),h=n(7),d=n.n(h),j=n(18),m=n.n(j),b=function(){return m.a.get("https://randomuser.me/api/?results=55&nat=us")};function p(e,t,n){var a=(t-1)*n;return d()(e).slice(a).take(n).value()}var f=n(0),g=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.sortedList;return Object(f.jsx)("tbody",{children:e.map((function(e){var t="".concat(e.location.city,", ").concat(e.location.state);return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{className:"text-center",children:Object(f.jsx)("img",{src:e.picture.thumbnail,alt:""})}),Object(f.jsx)("td",{className:"text-center",children:e.name.first}),Object(f.jsx)("td",{className:"text-center",children:e.name.last}),Object(f.jsx)("td",{className:"text-center",children:e.email}),Object(f.jsx)("td",{className:"text-center",children:t}),Object(f.jsx)("td",{className:"text-center",children:e.cell})]},e.id.value)}))})}}]),n}(a.Component),O=n(19),x=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).sortColumn=function(t){var n=Object(O.a)({},e.props.sortedColumn);n.path===t&&void 0!==n.path?(console.log("true"),n.order="up"===n.order?"down":"up"):(n.path=t,n.order="up"),e.props.onSort(n)},e.renderSortIcon=function(t){var n=e.props.sortedColumn;return t.path!==n.path?null:"up"===n.order?Object(f.jsx)("i",{className:"fa fa-sort-up"}):Object(f.jsx)("i",{className:"fa fa-sort-down"})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.columns;return Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{className:"tableHeader",children:[Object(f.jsx)("th",{className:"text-center",children:"Image"}),t.map((function(t){return Object(f.jsxs)("th",{className:"clickable text-center",onClick:function(){return e.sortColumn(t.path)},children:[t.label," ",e.renderSortIcon(t)]},t.label)}))]})})}}]),n}(a.Component),v=function(e){var t=e.columns,n=e.onSort,a=e.sortedColumn,r=e.sortedList;return Object(f.jsxs)("table",{className:"table table-responsive",children:[Object(f.jsx)(x,{columns:t,onSort:n,sortedColumn:a}),Object(f.jsx)(g,{sortedList:r})]})},C=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).columns=[{path:"name.first",label:"First Name"},{path:"name.last",label:"Last Name"},{path:"email",label:"Email"},{path:"location",label:"Location"},{path:"cell",label:"Cell"}],e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onSort,n=e.sortedColumn,a=e.sortedList;return Object(f.jsx)(v,{columns:this.columns,onSort:t,sortedColumn:n,sortedList:a})}}]),n}(a.Component),y=function(e){var t=e.employeeCount,n=e.pageSize,a=e.onPageChange,r=e.currentPage,c=Math.ceil(t/n);if(1===c)return null;var s=d.a.range(1,c+1);return Object(f.jsx)("nav",{className:"d-flex justify-content-center",children:Object(f.jsx)("ul",{className:"pagination",children:s.map((function(e){return Object(f.jsx)("li",{className:e===r?"page-item m-1 active":"page-item m-1",children:Object(f.jsx)("a",{className:"page-link clickable",onClick:function(){return a(e)},children:e})},e)}))})})},N=function(e){var t=e.onChange;return Object(f.jsx)("form",{action:"",className:"d-flex m-auto my-4 col-md-6",children:Object(f.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search by first or last name",onChange:t})})},S=function(e){var t=e.onChange;return Object(f.jsx)(N,{onChange:t})},k=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={result:[],sortedColumn:{path:"name.first",order:"asc"},searchQuery:"",currentPage:1,pageSize:10},e.getEmployee=function(){b().then((function(t){return e.setState({result:t.data.results})})).catch((function(e){return console.log(e.message)}))},e.handlePageChange=function(t){e.setState({currentPage:t})},e.handleSort=function(t){e.setState({sortedColumn:t})},e.handleSearch=function(t){e.setState({searchQuery:t.target.value})},e.getTableData=function(){var t=e.state,n=t.result,a=t.sortedColumn,r=t.searchQuery,c=t.currentPage,s=t.pageSize,o=n.filter((function(e){return""===r||e.name.first.toLowerCase().includes(r.toLowerCase())||e.name.last.toLowerCase().includes(r.toLowerCase())?e:void 0})),l=p(o,c,s);return console.log(l),{sortedList:d.a.orderBy(l,[a.path],[a.order]),filtered:o}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getEmployee()}},{key:"render",value:function(){var e=this.state,t=e.sortedColumn,n=e.pageSize,a=e.currentPage,c=this.getTableData(),s=c.sortedList,o=c.filtered;return Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsx)(S,{onChange:this.handleSearch}),Object(f.jsx)(y,{employeeCount:o.length,pageSize:n,currentPage:a,onPageChange:this.handlePageChange}),Object(f.jsx)(C,{onSort:this.handleSort,sortedList:s,sortedColumn:t}),Object(f.jsx)(y,{employeeCount:o.length,pageSize:n,currentPage:a,onPageChange:this.handlePageChange})]})}}]),n}(a.Component),L=function(){return Object(f.jsx)("nav",{className:"navbar navbar-dark p-3 employeeNav",children:Object(f.jsx)("div",{className:"container-fluid d-flex justify-content-center",children:Object(f.jsx)("span",{className:"navbar-brand mb-0 h1",children:"Employee Directory"})})})},P=function(){return Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsx)(L,{}),Object(f.jsx)("main",{className:"container",children:Object(f.jsx)(k,{})})]})};n(46);s.a.render(Object(f.jsx)(P,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.6e5c1084.chunk.js.map