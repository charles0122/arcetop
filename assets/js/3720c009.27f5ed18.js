"use strict";(self.webpackChunkarce_top=self.webpackChunkarce_top||[]).push([[4787],{74845:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});a(79474);var s=a(28923),r=a(75576),l=a(77891),n=a(95400),c=a(16849),i=a(21650),o=a(2601),g=a(13274);function u(t){let{title:e}=t;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.be,{title:e}),(0,g.jsx)(i.A,{tag:"doc_tags_list"})]})}function h(t){let{tags:e,title:a}=t;return(0,g.jsx)(r.e3,{className:(0,s.A)(l.G.page.docsTagsListPage),children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsx)("div",{className:"row",children:(0,g.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,g.jsx)(o.A,{as:"h1",children:a}),(0,g.jsx)(c.A,{tags:e})]})})})})}function d(t){const e=(0,n.b)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u,{...t,title:e}),(0,g.jsx)(h,{...t,title:e})]})}},75567:(t,e,a)=>{a.d(e,{A:()=>c});a(79474);var s=a(28923),r=a(48692);const l={tag:"tag_iTWv",tagRegular:"tagRegular_cfQa",tagWithCount:"tagWithCount_bGkg"};var n=a(13274);function c(t){let{permalink:e,label:a,count:c}=t;return(0,n.jsxs)(r.A,{href:e,className:(0,s.A)(l.tag,c?l.tagWithCount:l.tagRegular),children:[a,c&&(0,n.jsx)("span",{children:c})]})}},16849:(t,e,a)=>{a.d(e,{A:()=>o});a(79474);var s=a(95400),r=a(75567),l=a(2601);const n={tag:"tag_kFTi"};var c=a(13274);function i(t){let{letterEntry:e}=t;return(0,c.jsxs)("article",{children:[(0,c.jsx)(l.A,{as:"h2",id:e.letter,children:e.letter}),(0,c.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,c.jsx)("li",{className:n.tag,children:(0,c.jsx)(r.A,{...t})},t.permalink)))}),(0,c.jsx)("hr",{})]})}function o(t){let{tags:e}=t;const a=(0,s.Q)(e);return(0,c.jsx)("section",{className:"margin-vert--lg",children:a.map((t=>(0,c.jsx)(i,{letterEntry:t},t.letter)))})}},95400:(t,e,a)=>{a.d(e,{Q:()=>l,b:()=>r});var s=a(96396);const r=()=>(0,s.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function l(t){const e={};return Object.values(t).forEach((t=>{const a=function(t){return t[0].toUpperCase()}(t.label);e[a]??=[],e[a].push(t)})),Object.entries(e).sort(((t,e)=>{let[a]=t,[s]=e;return a.localeCompare(s)})).map((t=>{let[e,a]=t;return{letter:e,tags:a.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}}}]);