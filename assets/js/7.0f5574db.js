(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{197:function(t,e,n){"use strict";n.r(e);var i={name:"GithubPull",props:{id:{required:!0},user:{default:"noties"},repo:{default:"Markwon"}},computed:{githubPullHref:function(){return"https://github.com/"+this.user+"/"+this.repo+"/pull/"+this.id},linkContent:function(){return"#"+this.id}}},u=n(0),r=Object(u.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:this.githubPullHref,target:"_blank",rel:"noopener noreferrer"}},[this._v(this._s(this.linkContent)),e("OutboundLink")],1)},[],!1,null,null,null);r.options.__file="GithubPull.vue";e.default=r.exports}}]);