"use strict";(self.webpackChunkpico_mazing=self.webpackChunkpico_mazing||[]).push([[937],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=p(n),c=a,k=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return n?r.createElement(k,o(o({ref:e},s),{},{components:n})):r.createElement(k,o({ref:e},s))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[d]="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9880:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1},o="Introduction",i={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Contexte",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/introduction",permalink:"/PICO_MAZING/docs/introduction",draft:!1,editUrl:"https://github.com/PICO-MAZING/PICO_MAZING/tree/main/docs/introduction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Guide de d\xe9marrage rapide",permalink:"/PICO_MAZING/docs/guide de demarrage"}},u={},p=[{value:"Contexte",id:"contexte",level:2},{value:"Acteurs",id:"acteurs",level:2},{value:"Caract\xe9ristiques techniques",id:"caract\xe9ristiques-techniques",level:2},{value:"Mat\xe9riel",id:"mat\xe9riel",level:3},{value:"Composants",id:"composants",level:3}],s={toc:p},d="wrapper";function m(t){let{components:e,...l}=t;return(0,a.kt)(d,(0,r.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/iVADLfJCMGI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h2",{id:"contexte"},"Contexte"),(0,a.kt)("p",null,"Chaque ann\xe9e, 3iL propose \xe0 ses \xe9l\xe8ves de 2\xe8me ann\xe9e de cycle ing\xe9nieur un projet leur permettant de d\xe9velopper leur savoir-faire, en r\xe9alisant un projet d\u2019application professionnelle en compl\xe9ment de leur parcours technologique du semestre 7."),(0,a.kt)("p",null,"Dans ce contexte, les \xe9l\xe8ves ont - sous certaines conditions - l\u2019opportunit\xe9 de soumettre leurs id\xe9es de projet. C\u2019est de cette fa\xe7on qu\u2019est n\xe9 le projet ",(0,a.kt)("strong",{parentName:"p"},"PICO-MAZING")," dont l\u2019objet \xe9tait de construire un labyrinthe modulable et des robots capables de le r\xe9soudre en coop\xe9ration."),(0,a.kt)("p",null,"3il, notre client - incarn\xe9 par Monsieur Romain MARIE - souhaiterait un nouvel outil p\xe9dagogique et de communication permettant d\u2019exposer certaines comp\xe9tences acquises au cours de notre formation.\nIl s\u2019agissait donc de produire un support de communication exposant bri\xe8vement notre projet, support qui pourrait \xeatre utilis\xe9 lors de salons, JPO\u2026"),(0,a.kt)("p",null,"\xc0 minima, nous devions donc proposer une solution de r\xe9solution de labyrinthe \xe0 partir d\u2019un robot fonctionnant sous ROS, une plateforme de robotique enseign\xe9e \xe0 l\u2019\xe9cole."),(0,a.kt)("p",null,"Ce projet couvre un champ \xe9tendu de domaines: syst\xe8mes embarqu\xe9s, robotique, conception 3D et \xe9lectronique, et infrastructures syst\xe8mes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Picobot",src:n(5758).Z,width:"6165",height:"4624"})),(0,a.kt)("h2",{id:"acteurs"},"Acteurs"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Client externe")," : Romain MARIE / 3iL"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Agile master")," : GAND Valentin"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Lead tech")," : PICOT Beno\xeet"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D\xe9veloppeurs")," : TARCY Allan / DELILLE Henri"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Enseignant technique")," : Romain MARIE / Jesus FRANCO ROBLES"),(0,a.kt)("h1",{id:"fonctionnalit\xe9s"},"Fonctionnalit\xe9s"),(0,a.kt)("h2",{id:"caract\xe9ristiques-techniques"},"Caract\xe9ristiques techniques"),(0,a.kt)("h3",{id:"mat\xe9riel"},"Mat\xe9riel"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Composant"),(0,a.kt)("th",{parentName:"tr",align:null},"Quantit\xe9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Microcontr\xf4leur Raspberry Pi")),(0,a.kt)("td",{parentName:"tr",align:null},"W")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Capteurs D\xe9tecteurs d\u2019obstacles")),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Capteurs de ligne")),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Bouton programmable")),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Led programmable")),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Batterie Pile 9V")),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Autonomie")),(0,a.kt)("td",{parentName:"tr",align:null},"Environ 1h")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Connectique PC")),(0,a.kt)("td",{parentName:"tr",align:null},"Micro USB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Mise \xe0 jour logiciel")),(0,a.kt)("td",{parentName:"tr",align:null},"Micro USB")))),(0,a.kt)("h3",{id:"composants"},"Composants"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Pi\xe8ce"),(0,a.kt)("th",{parentName:"tr",align:null},"Quantit\xe9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Ch\xe2ssis")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Circuit imprim\xe9"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Roue"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Roue folle"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Support moteurs"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Moteurs")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Moteur \xe0 courant continu (N20)"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Contr\xf4leurs")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Raspberry Pi Pico W"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Module moteurs (TB6612FNG)"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Capteurs")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Capteur de distance infrarouge"),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Module suiveur de ligne KY-033"),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Autres")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"R\xe9gulateur de tension (buck-boost)"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Connecteur pile 9V"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Pile 9V (rechargeable)"),(0,a.kt)("td",{parentName:"tr",align:null},"1")))),(0,a.kt)("h1",{id:"mat\xe9riel-open-source"},"Mat\xe9riel Open Source"),(0,a.kt)("p",null,"Le Picobot est construit autour des composants suivants: ch\xe2ssis, moteurs, roues, microcontr\xf4leur, capteurs, batterie. Le ch\xe2ssis du Picobot est un circuit imprim\xe9 sur lequel sont soud\xe9es des fiches permettant d\u2019accueillir les diff\xe9rents composants du robot. Ce syst\xe8me permet de remplacer les composants d\xe9fectueux, et d\u2019utiliser le robot sous diff\xe9rentes configurations. Certaines parties du Picobot ont \xe9t\xe9 r\xe9alis\xe9es par impression 3D. L\u2019ensemble des fichiers de conception sont disponibles sur le r\xe9pertoire du projet."))}m.isMDXComponent=!0},5758:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/pico-main-show-abe8c821fbc6d9041482cd2a7badc968.png"}}]);