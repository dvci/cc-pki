"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,f=u["".concat(l,".").concat(p)]||u[p]||h[p]||r;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:0,slug:"/"},o="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"In response to COVID-19, Governments and organizations across the world have developed and adopted standards and technologies to create, present, and verify digital vaccination credentials. However, a global technical framework to enable convenient use and interoperability of these credentials between systems \u2013 while also allowing domestic autonomy over their use \u2013 does not exist and is critically needed.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/cc-pki/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Workflows",permalink:"/cc-pki/workflows"}},l={},d=[{value:"Background &amp; Purpose",id:"background--purpose",level:2},{value:"Audience",id:"audience",level:3},{value:"Exchanging Trusted Health Documents",id:"exchanging-trusted-health-documents",level:2},{value:"Health content\u200b interoperability",id:"health-content-interoperability",level:3},{value:"Trust interoperability and trust networks\u200b",id:"trust-interoperability-and-trust-networks",level:3},{value:"Identity authentication and identity binding",id:"identity-authentication-and-identity-binding",level:3}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In response to COVID-19, Governments and organizations across the world have developed and adopted standards and technologies to create, present, and verify digital vaccination credentials. However, a global technical framework to enable convenient use and interoperability of these credentials between systems \u2013 while also allowing domestic autonomy over their use \u2013 does not exist and is critically needed."),(0,a.kt)("p",null,"This guide describes establishment of a federated mechanism between existing trust networks to allow exchange of trusted health data, including COVID-19 certificates, routine immunization data, and home-based records consistent with International Patient Summary standards. This mechanism provides means of harmonizing global health protocol standards and establishing a system for recognition of digital certificates at point of entry."),(0,a.kt)("p",null,"In addition to verifying and validating COVID-19 certificates, a global digital health trust network can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Establish trust of digitally signed clinical algorithms published by WHO through the SMART Guidelines work."),(0,a.kt)("li",{parentName:"ul"},"Allow for a global product catalogue of trusted medical products and devices.\u200b"),(0,a.kt)("li",{parentName:"ul"},"Ensure information about a patient can be accessed and trusted regardless of where you are in the world.\u200b"),(0,a.kt)("li",{parentName:"ul"},"Support health systems resiliency to address future outbreaks in a globalized economy.\u200b"),(0,a.kt)("li",{parentName:"ul"},"Empower individuals to manage their own health and well-being.\u200b"),(0,a.kt)("li",{parentName:"ul"},"Prevent the digital divide from increasing")),(0,a.kt)("h2",{id:"background--purpose"},"Background & Purpose"),(0,a.kt)("p",null,"The interoperable exchange of health information in a trusted environment is a complex task with an increasingly large number of stakeholders (e.g. public health agencies, accredited labs, border control organizations, institutions authorized to verify) that need to ensure that data is transferred safely and securely, that the health content is interoperable, and that information is understandable and actionable. This guide details how to utilize a global technical framework to allow interoperability of health credentials between\nsystems, while preserving domestic autonomy over their use. "),(0,a.kt)("p",null,"Achieving global interoperability of health certificates does not require that all jurisdictions used the same standard. Interoperability can also be achieved when there are pre-arranged mechanisms in place so that certificates issued by one jurisdiction are accepted in another. A number of services and technical artifacts have been developed that address particular criteria for establishing interoperability and a system of trust including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Data models, transformations and vocabulary definitions that allow exchange of health data between various standards formats, preserving a jurisdiction's autonomy regarding domestic processes while allowing reissuance and mutual recognition of credentials between jurisdictions"),(0,a.kt)("li",{parentName:"ul"},"Standard specifications for exchanging public keys between various networks for verifying digital signatures on health credentials"),(0,a.kt)("li",{parentName:"ul"},"A global trust registry and federated public key infrastructure solution that provides technical interoperability and technical governance between regional trust networks"),(0,a.kt)("li",{parentName:"ul"},"Workflows for creating, sharing and executing business rules that evaluate public health policies against health data for cross-border or port of entry requirements"),(0,a.kt)("li",{parentName:"ul"},"Open source tools and technical guidance to reduce the burden of implementing the technical infrastructure to participate in the federated trust network, including open source trust network infrastructure for jurisdictions to implement their own regional trust networks")),(0,a.kt)("h3",{id:"audience"},"Audience"),(0,a.kt)("p",null,"This guide describes expected workflows for potential actors in a trust ecosystem:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Issuers that provide verifiable health credentials to individuals"),(0,a.kt)("li",{parentName:"ul"},"Verifiers that consume verifiable health credentials provided by individuals"),(0,a.kt)("li",{parentName:"ul"},"Trust Networks that establish trust relationships and policies between issuers and verifiers")),(0,a.kt)("p",null,"The audience for this guide includes decision makers, analysts and technical assets at potential individual issuers,\nexisting trust networks or potential verifiers who may participate in the federated trust network. Stakeholders include member states, regional networks, and standards development organizations."),(0,a.kt)("h2",{id:"exchanging-trusted-health-documents"},"Exchanging Trusted Health Documents"),(0,a.kt)("p",null,"There are a number of requirements that must be met in the process of exchanging trusted health documents."),(0,a.kt)("h3",{id:"health-content-interoperability"},"Health content\u200b interoperability"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Is the correct content included in the certificate/credential or health document?\u200b")),(0,a.kt)("p",null,"Consensus data models, controlled vocabularies and data transformations allow consumers of health documents to understand content of a health document in a computable manner. Shared formats for expressing health policies in executable business rule libraries further allow consumers to validate the content against their own public health policies. Here these artifacts are defined using healthcare data specifications aligned with ",(0,a.kt)("a",{parentName:"p",href:"https://www.hl7.org/"},"Health Level Seven International (HL7)"),". HL7 is a not-for-profit, ANSI-accredited standards developing organization dedicated to providing a comprehensive framework and related standards for the exchange, integration, sharing and retrieval of electronic health information."),(0,a.kt)("h3",{id:"trust-interoperability-and-trust-networks"},"Trust interoperability and trust networks\u200b"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Is the vaccine credential, COVID certificate or other trusted health document verifiably from the purported issuer?\u200b"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"Has the certificate remained unaltered since it was issued?\u200b")),(0,a.kt)("p",null,"Existing health data certificate standards use various well-defined methods of providing digital signatures in health documents based on public key crytopgraphy methods. Public key distribution within the federated registry is standardized to allow actors across networks to retrieve and process public keys, metadata, business rules, revocation data from any other actor. Universal verifier applications can use the content shared within the federated registry to extract digital signatures from health documents and verify issuer and integrity of the document content according to the specifications established by the credential standard."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Is the certificate issuer trusted by the verifier?\u200b")),(0,a.kt)("p",null,"The federated registry facilitates determination of trust through services for verifiers to discover issuers from within other networks and access governance policies for those networks. It provides infrastructure for technical governance of participating networks."),(0,a.kt)("h3",{id:"identity-authentication-and-identity-binding"},"Identity authentication and identity binding"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Is the individual person who they purport to be?\u200b"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"Is the certificate about this person?\u200b")),(0,a.kt)("p",null,"Identity authentication and identity binding is out of scope for this framework and is determined by policies established at the individual verifier level."))}u.isMDXComponent=!0}}]);