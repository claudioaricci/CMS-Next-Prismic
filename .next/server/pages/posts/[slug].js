(()=>{var t={};t.id=922,t.ids=[922,888,660],t.modules={9929:t=>{t.exports={container:"post_container__T4FyG",post:"post_post__G5oi6",postContent:"post_postContent__mJKBv"}},2477:(t,e,r)=>{"use strict";r.r(e),r.d(e,{config:()=>j,default:()=>P,getServerSideProps:()=>q,getStaticPaths:()=>f,getStaticProps:()=>b,reportWebVitals:()=>C,routeModule:()=>E,unstable_getServerProps:()=>B,unstable_getServerSideProps:()=>D,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>w,unstable_getStaticProps:()=>R});var s={};r.r(s),r.d(s,{default:()=>h,getServerSideProps:()=>_});var i=r(7093),a=r(5244),n=r(1323),o=r(1269),l=r(6218),c=r(997),u=r(9929),p=r.n(u),d=r(2211),g=r(9983),m=r(968),A=r.n(m),x=r(5675),S=r.n(x);function h({post:t}){return(0,c.jsxs)(c.Fragment,{children:[c.jsx(A(),{children:c.jsx("title",{children:t.title})}),c.jsx("main",{className:p().container,children:(0,c.jsxs)("article",{className:p().post,children:[c.jsx(S(),{quality:100,src:t.cover,width:720,height:410,alt:t.title,placeholder:"blur",blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0vQgAAWEBGHsgcxcAAAAASUVORK5CYII="}),c.jsx("h1",{children:t.title}),c.jsx("time",{children:t.updatedAt}),c.jsx("div",{className:p().postContent,dangerouslySetInnerHTML:{__html:t.description}})]})})]})}let _=async({req:t,params:e})=>{let{slug:r}=e,s=(0,d.e)(t),i=await s.getByUID("post",String(r),{});if(!i)return{redirect:{destination:"/posts",permanent:!1}};let a={slug:r,title:g.RichText.asText(i.data.title),description:g.RichText.asHtml(i.data.description),cover:i.data.cover.url,updatedAt:new Date(i.last_publication_date).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})};return{props:{post:a}}},v=i.PagesRouteModule,P=(0,n.l)(s,"default"),b=(0,n.l)(s,"getStaticProps"),f=(0,n.l)(s,"getStaticPaths"),q=(0,n.l)(s,"getServerSideProps"),j=(0,n.l)(s,"config"),C=(0,n.l)(s,"reportWebVitals"),R=(0,n.l)(s,"unstable_getStaticProps"),w=(0,n.l)(s,"unstable_getStaticPaths"),y=(0,n.l)(s,"unstable_getStaticParams"),B=(0,n.l)(s,"unstable_getServerProps"),D=(0,n.l)(s,"unstable_getServerSideProps"),E=new v({definition:{kind:a.x.PAGES,page:"/posts/[slug]",pathname:"/posts/[slug]",bundlePath:"",filename:""},components:{App:l.default,Document:o.default},userland:s})},2211:(t,e,r)=>{"use strict";r.d(e,{e:()=>a});var s=r(9715),i=r.n(s);function a(t){let e=i().client("https://claudioaricci.cdn.prismic.io/api/v2",{req:t});return e}},9715:t=>{"use strict";t.exports=require("@prismicio/client")},2785:t=>{"use strict";t.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:t=>{"use strict";t.exports=require("next/head")},9983:t=>{"use strict";t.exports=require("prismic-dom")},6689:t=>{"use strict";t.exports=require("react")},6405:t=>{"use strict";t.exports=require("react-dom")},997:t=>{"use strict";t.exports=require("react/jsx-runtime")},7147:t=>{"use strict";t.exports=require("fs")},1017:t=>{"use strict";t.exports=require("path")},2781:t=>{"use strict";t.exports=require("stream")},9796:t=>{"use strict";t.exports=require("zlib")}};var e=require("../../webpack-runtime.js");e.C(t);var r=t=>e(e.s=t),s=e.X(0,[966,640,859,450,218,269],()=>r(2477));module.exports=s})();