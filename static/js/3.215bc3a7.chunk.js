(this.webpackJsonpreact_first_project=this.webpackJsonpreact_first_project||[]).push([[3],{294:function(e,t,a){"use strict";var n=a(28);t.a=n.a},296:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(33),r=a(34),o=a(36),s=a(35),u=a(0),i=a.n(u),c=a(294),l=a(12),p=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var t=function(t){Object(o.a)(u,t);var a=Object(s.a)(u);function u(){return Object(n.a)(this,u),a.apply(this,arguments)}return Object(r.a)(u,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(c.a,{to:"/login"})}}]),u}(i.a.Component);return Object(l.b)(p)(t)}},297:function(e,t,a){e.exports={content:"ProfileInfo_content__3h0ow",top_cont:"ProfileInfo_top_cont__23mri",banner_image:"ProfileInfo_banner_image__BJjpn",body_post:"ProfileInfo_body_post__2Uaux"}},298:function(e,t,a){e.exports={posts:"posts_posts__1Cl-H"}},299:function(e,t,a){e.exports={item:"post_item__37YMH",active:"post_active__H2Rth"}},300:function(e,t,a){"use strict";a.r(t);var n=a(33),r=a(34),o=a(36),s=a(35),u=a(0),i=a.n(u),c=a(297),l=a.n(c),p=a(38),m=(i.a.Component,a(127)),f=function(e){var t=Object(u.useState)(!1),a=Object(m.a)(t,2),n=a[0],r=a[1],o=Object(u.useState)(e.status),s=Object(m.a)(o,2),c=s[0],l=s[1];return Object(u.useEffect)((function(){l(e.status)}),[e.status]),i.a.createElement(i.a.Fragment,null,!n&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"---------")),n&&i.a.createElement("div",null,i.a.createElement("input",{onBlur:function(){r(!1),e.updateStatus(c)},autoFocus:!0,onChange:function(e){l(e.currentTarget.value)},value:c})))},d=function(e){return e.profile?i.a.createElement("div",null,i.a.createElement("div",{className:l.a.banner_image}),i.a.createElement("div",{className:l.a.body_post},i.a.createElement("img",{src:e.profile.photos.large,alt:""}),i.a.createElement(f,{status:e.status,updateStatus:e.updateStatus}),i.a.createElement("div",null,"\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442: ",e.profile.fullName),i.a.createElement("div",null,"\u041d\u0435\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u043e \u043c\u043d\u0435: ",e.profile.aboutMe),i.a.createElement("div",null,"\u043f\u043e\u0438\u0441\u043a \u0440\u0430\u0431\u043e\u0442\u044b: ",e.profile.lookingForAJobDescription),i.a.createElement("div",null,"ava + descr"))):i.a.createElement(p.a,null)},b=a(94),h=a(12),v=a(27),E=a(298),_=a.n(E),g=a(299),j=a.n(g),O=function(e){return i.a.createElement("div",{className:j.a.item},i.a.createElement("img",{src:"https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg",alt:"ava"}),i.a.createElement("div",null,i.a.createElement("div",{className:"text"},e.message),i.a.createElement("span",null,"like ",e.like)))},P=a(87),S=a(126),k=a(56),y=a(31),w=i.a.memo((function(e){console.log(322223);var t=Object(v.a)(e.posts).map((function(e){return i.a.createElement(O,{like:e.like,key:e.id,message:e.message})}));i.a.createRef();return i.a.createElement("div",{className:_.a.posts},i.a.createElement("div",null,"my posts"),i.a.createElement(I,{onSubmit:function(t){e.onAddPost(t.newPost)}}),i.a.createElement("div",{className:_.a.posts},t))})),A=Object(k.a)(10),I=Object(S.a)({form:"dialogAddPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement(P.a,{component:y.b,name:"newPost",placeholder:"enter your post",validate:[k.b,A]}),i.a.createElement("button",null,"Send"))})),x=w,N=Object(h.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{onAddPost:function(t){e(Object(b.a)(t))}}}))(x),C=function(e){return i.a.createElement("div",null,i.a.createElement(d,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),i.a.createElement(N,null))},F=a(28),J=(a(296),a(7)),D=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return i.a.createElement(C,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(i.a.Component);t.default=Object(J.d)(Object(h.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getProfile:b.c,getStatus:b.d,updateStatus:b.e}),F.f)(D)}}]);
//# sourceMappingURL=3.215bc3a7.chunk.js.map