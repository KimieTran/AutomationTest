import{a as k}from"./chunk-PQSEBVON.js";import{g as h}from"./chunk-B745CFYO.js";import{o as r}from"./chunk-WIQ4WVKX.js";import{a as b,b as v}from"./chunk-UCBZOSRF.js";import{a as N}from"./chunk-BTKBODVJ.js";import{ka as q,u as w}from"./chunk-CBSQD5B4.js";import{_a as C}from"./chunk-VNNHZNYI.js";import{a as L}from"./chunk-7X4NV6OJ.js";import{f as R,h as c,n as d}from"./chunk-3KENBVE7.js";c();d();var o=R(L()),l=R(N());var S={isConnected:!1,lastMessage:null,postMessage:q},M=o.default.createContext(S),W=({children:e})=>{let[n,i,u]=A();return o.default.createElement(M.Provider,{value:{isConnected:n,lastMessage:i,postMessage:u}},e)};function A(){let[e,n]=(0,o.useState)(null),[i,u]=(0,o.useState)(null),{isSidebarOpen:p}=k(),{data:[g],isLoading:m}=C(["enable-sidepanel-tx-notifications"]),f=t=>{let s=v(t);!s||typeof s.url!="string"||!s.url||!s.req||typeof s.req.method!="string"||!s.req.method||u({...s,url:w(s.url.toString())})};(0,o.useEffect)(()=>{},[]),(0,o.useEffect)(()=>{let t;return m||(async()=>{if(g===!0&&p){let x=a=>{a.name==="popup/sidepanel"&&(n(a),a.onMessage.addListener(f),a.onDisconnect.addListener(()=>{n(null),u(null)}))};l.default.runtime.onConnect.addListener(x)}else{let a=`notification/${(await h()).id}`;t=l.default.runtime.connect({name:a}),n(t),t.onMessage.addListener(f),t.onDisconnect.addListener(()=>{self.close(),n(null),u(null)})}})(),()=>{t?.disconnect()}},[m,g,p]);let P=(0,o.useCallback)(t=>{e&&e.postMessage(b(t))},[e]);return[!!e,i,P]}function y(){let e=(0,o.useContext)(M);if(!e)throw new Error("Missing background connection context");return e}function F(){let{lastMessage:e}=y();return e}function G(){let e=F(),{postMessage:n}=y();return(0,o.useCallback)(i=>{if(e){if(e.req.id!==i.id)throw new Error(`Request id: ${e.req.id} does not match response id: ${i.id}`);n(i)}else throw new Error("No request received from the background yet")},[e,n])}c();d();c();d();var I=r.div`
  ${e=>!e.plain&&`
    background-color: ${e.theme?.footer?.backgroundColor??"#2b2b2b"};
    border-top: ${e.theme?.footer?.borderTop??"1px solid #323232"};
    box-shadow: ${e.theme?.footer?.boxShadow??"0px -6px 10px rgba(0, 0, 0, 0.25)"};
  `}
`;var Y=r.div`
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  > * {
    margin-top: 27px;
  }
`,Z=r.div`
  flex: 1;
  overflow: auto;
  padding: 0px 16px;
`,ee=r.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  left: 0;
  bottom: 0;
  background: #222222;
`,oe=r(I)`
  flex: none;
  padding: 14px 20px;
`,ne=r.div`
  padding: 20px;
  height: 100%;
`;export{W as a,F as b,G as c,I as d,Y as e,Z as f,ee as g,oe as h,ne as i};
//# sourceMappingURL=chunk-CPE7FT6D.js.map
