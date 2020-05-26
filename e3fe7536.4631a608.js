(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{236:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(253)),c={id:"commands",title:"CLI commands"},i={id:"version-0.12.x/commands",title:"CLI commands",description:"Commands",source:"@site/versioned_docs/version-0.12.x/commands.md",permalink:"/docs/commands",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.12.x/commands.md",version:"0.12.x",sidebar:"version-0.12.x/docs",previous:{title:"Migrating from REST",permalink:"/docs/migrations/openapi"},next:{title:"Releases",permalink:"/docs/releases"}},l=[{value:"Commands",id:"commands",children:[{value:"Config",id:"config",children:[]},{value:"Generate",id:"generate",children:[]},{value:"Database",id:"database",children:[]}]},{value:"OpenAPI",id:"openapi",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"commands"},"Commands"),Object(o.b)("p",null,"CLI offers help prompt.\nExecute ",Object(o.b)("inlineCode",{parentName:"p"},"graphback")," in your shell for more information"),Object(o.b)("h3",{id:"config"},"Config"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"graphback config\n")),Object(o.b)("p",null,"Create sample configuration in existing project to support Graphback resolver and schema generation.\nConfig will allow you to generate existing configuration that uses default Graphback plugins and one of the\ndatabases we support out of the box. Additionally data migrations configuration will be initialized that will\nhelp you to manage data migrations by specifying GraphQL queries."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note")," When creating configuration please review all paths as they might not reflect your project stucture")),Object(o.b)("h3",{id:"generate"},"Generate"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"graphback generate\n")),Object(o.b)("p",null,"  Generate command will execute generation process that will gener GraphQL server based on your data model."),Object(o.b)("h3",{id:"database"},"Database"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"graphback db\n")),Object(o.b)("p",null,"  This command creates a database or updates an existing one, based on your data model. Currently supports PostgreSQL and sqlite3."),Object(o.b)("h2",{id:"openapi"},"OpenAPI"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"graphback openapi \n")),Object(o.b)("p",null," Generate GraphQL schema and resolvers based on OpenAPI spec."))}p.isMDXComponent=!0},253:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);