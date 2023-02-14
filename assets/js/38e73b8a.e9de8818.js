"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[826],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3021:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:3},a="Trust Registry Network",s={unversionedId:"trust-reg-network",id:"trust-reg-network",title:"Trust Registry Network",description:"Background",source:"@site/docs/trust-reg-network.md",sourceDirName:".",slug:"/trust-reg-network",permalink:"/cc-pki/trust-reg-network",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/trust-reg-network.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Workflows",permalink:"/cc-pki/workflows"},next:{title:"Trust List Specification",permalink:"/cc-pki/trust-list-specification"}},c={},l=[{value:"Background",id:"background",level:2},{value:"Proof of Concept",id:"proof-of-concept",level:2},{value:"Implementation Toolkit and Technical Specification",id:"implementation-toolkit-and-technical-specification",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"trust-registry-network"},"Trust Registry Network"),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,'The Digital TRUST Infrastructure for Discovery and Validation (Regi-TRUST) is a decentralized trust management infrastructure that bridges the gap between different certificate ecosystems and enables trust interoperability. It is a suite of endpoints that comprises a "network of networks" of trusted digital services operated by various stakeholders, collated with their independent governance policies, with support for root of trust architectures to allow interoperable verifications. Implementers of Regi-Trust can leverage tools provided to create purpose-sized networks of trusted digital services operated by all types of entities, using lightweight infrastucture and technical governance due to the decentralized federation approach. Regi-TRUST was originally started by the Linux Foundation in 2021 as the Global COVID-19 Certificate Network (GCCN), and is now sponsored and hosted by the United Nation Development Programme (UNDP). '),(0,i.kt)("p",null,"Within the health certificate context, verifiers can use this discovery mechanism to build a customized trust list based on their own entry policies, check health certificates from issuers participating in disparate trust networks against that list and access the issuer's public key for signature verification. The registry participants submit  service metadata, public keys, business rules and revocation data to the registry in a standardized format via trusted endpoints."),(0,i.kt)("p",null,"Regi-TRUST is built on the open-source ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.grnet.gr/essif-lab/infrastructure/fraunhofer/train_project_summary"},"Trust mAnagement INfrastructure (TRAIN)"),", developed by the Fraunhofer IAO as a part of the European Self-Sovereign Identity Framework (ESSIF) Lab. TRAIN uses/supports several established standards and is flexible with existing architectures, providing technical accessibility and inclusivity for implementors. "),(0,i.kt)("h2",{id:"proof-of-concept"},"Proof of Concept"),(0,i.kt)("p",null,"The original proof of concept involved 1) onboarding members to the network and 2) the verification of COVID certificates using the network. For more detail on execution of this proof of concept and results, ",(0,i.kt)("a",{parentName:"p",href:"https://www.lfph.io/2022/04/19/lfph-completes-the-proof-of-concept-of-its-gccn-trust-registry-network/"},"please follow this link.")),(0,i.kt)("h2",{id:"implementation-toolkit-and-technical-specification"},"Implementation Toolkit and Technical Specification"),(0,i.kt)("p",null,"The UNDP project intends to develop and provide an implementation toolkit including an open source reference implementation for the specification, a governance and policy guideline for Regi-TRUST implementers, and technical and functional specifications. ",(0,i.kt)("a",{parentName:"p",href:"https://www.lfph.io/2021/06/08/gccn/"},"Contents of the original implementation toolkit is stated here")," ahead of completion of the pilot. Full technical specifications, implementation guides, and more are forthcoming."))}u.isMDXComponent=!0}}]);