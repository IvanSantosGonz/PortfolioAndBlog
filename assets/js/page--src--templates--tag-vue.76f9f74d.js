(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2qYH":function(t,e,a){"use strict";a.r(e);var s={metaInfo(){return{title:"Tag: "+this.$page.tag.title}},components:{PaginationPosts:a("N9yt").a}},n=a("KHd+"),r=null,o=Object(n.a)(s,(function(){var t=this,e=t._self._c;return e("Layout",[e("div",{staticClass:"container-inner mx-auto my-16"},[e("h2",{staticClass:"text-4xl font-bold mb-8 border-b"},[t._v("Tag: "+t._s(t.$page.tag.title))]),t._l(t.$page.tag.belongsTo.edges,(function(a){return e("div",{key:a.node.id,staticClass:"post border-gray-400 border-b mb-12"},[e("h2",{staticClass:"text-3xl font-bold"},[e("g-link",{staticClass:"text-copy-primary",attrs:{to:a.node.path}},[t._v(t._s(a.node.title))])],1),e("div",{staticClass:"text-copy-secondary mb-4"},[e("span",[t._v(t._s(a.node.date))]),e("span",[t._v(" · ")]),e("span",[t._v(t._s(a.node.timeToRead)+" mins de lectura")])]),e("div",{staticClass:"text-lg mb-4"},[t._v("\n        "+t._s(a.node.summary)+"\n      ")]),e("div",{staticClass:"mb-8"},[e("g-link",{staticClass:"font-bold uppercase",attrs:{to:a.node.path}},[t._v("Read More")])],1)])})),t.$page.tag.belongsTo.pageInfo.totalPages>1?e("pagination-posts",{attrs:{base:"/tag/"+t.$page.tag.title,totalPages:t.$page.tag.belongsTo.pageInfo.totalPages,currentPage:t.$page.tag.belongsTo.pageInfo.currentPage}}):t._e()],2)])}),[],!1,null,null,null);"function"==typeof r&&r(o);e.default=o.exports},N9yt:function(t,e,a){"use strict";var s={props:["base","totalPages","currentPage"],computed:{showPreviousPage(){return 1!==this.currentPage},previousPage(){return[0,1].includes(this.currentPage-1)?this.base:`${this.base}/${this.currentPage-1}`},showNextPage(){return this.currentPage!==this.totalPages},nextPage(t,e){return this.totalPages>this.currentPage?`${this.base}/${this.currentPage+1}`:`${this.base}/${this.currentPage}`}}},n=a("KHd+"),r=Object(n.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between text-xl items-center"},[e("g-link",{class:{"text-gray-400 hover:text-gray-400 cursor-not-allowed":!t.showPreviousPage},attrs:{to:t.previousPage,"data-cypress":"prev"}},[t._v("← Prev")]),e("div",{staticClass:"text-base"},[t._v("Page "+t._s(t.currentPage)+" of "+t._s(t.totalPages))]),e("g-link",{class:{"text-gray-400 hover:text-gray-400 cursor-not-allowed":!t.showNextPage},attrs:{to:t.nextPage,"data-cypress":"next"}},[t._v("Next →")])],1)}),[],!1,null,null,null);e.a=r.exports}}]);