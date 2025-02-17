import{a as F,c as L,d as N,g as D}from"./chunk-Z3T7IT5N.js";import{a as g}from"./chunk-BP3ADB4R.js";import"./chunk-DYIE7UTS.js";import"./chunk-B7D6E7MG.js";import"./chunk-PQSEBVON.js";import"./chunk-IKHULP2P.js";import{a as _}from"./chunk-T27XGMXK.js";import"./chunk-5DG6WSA2.js";import"./chunk-XJWRT6N6.js";import"./chunk-FADT747G.js";import"./chunk-LTPMKRAS.js";import"./chunk-3JF2QXJE.js";import"./chunk-OLW3L37F.js";import"./chunk-CCUXU2GU.js";import"./chunk-PTZJLI7L.js";import"./chunk-QHN65AEO.js";import"./chunk-KS7RCTZG.js";import"./chunk-QEXGR5WT.js";import"./chunk-L4RFQ6RY.js";import"./chunk-SHAEZV7V.js";import"./chunk-S24UABH5.js";import"./chunk-ZE6HXUUA.js";import{a as T}from"./chunk-X3ESGVCB.js";import"./chunk-5UZO3TVF.js";import"./chunk-DERIAD33.js";import"./chunk-EGXLQXDH.js";import{e as $}from"./chunk-TSP4CJ7O.js";import"./chunk-CCQRCL2K.js";import{a as m}from"./chunk-ERPPDNZG.js";import"./chunk-INIFY56O.js";import"./chunk-IVMV7P4T.js";import"./chunk-EGXKEBKM.js";import{a as f}from"./chunk-DEQQGOVJ.js";import"./chunk-T6LDDI5K.js";import"./chunk-HPOS2V3B.js";import"./chunk-XYJX6G2K.js";import"./chunk-J6Y2BR3C.js";import"./chunk-B745CFYO.js";import"./chunk-AWKYXRT4.js";import"./chunk-H3FFS4GT.js";import"./chunk-GTBW7SFI.js";import"./chunk-TIFZOZS6.js";import"./chunk-PTZMRZUV.js";import"./chunk-VQVTLSDS.js";import{a as E,b as P}from"./chunk-OKP6DFCI.js";import{o as c,v as O}from"./chunk-WIQ4WVKX.js";import"./chunk-CZNVQ2ZN.js";import"./chunk-GBDVRVXI.js";import"./chunk-UCBZOSRF.js";import"./chunk-NV3TFZ4C.js";import"./chunk-B226KCTA.js";import"./chunk-GJU3JL4E.js";import"./chunk-QTIYKADD.js";import"./chunk-XFLX2RRO.js";import"./chunk-BCLUZY4R.js";import"./chunk-GQEPK4C4.js";import"./chunk-BTKBODVJ.js";import"./chunk-PFT3L2T6.js";import"./chunk-LVTCV2WT.js";import"./chunk-WFPABEAU.js";import"./chunk-775LAOS6.js";import"./chunk-LDMZMUWY.js";import"./chunk-X2SBUKU4.js";import"./chunk-OXFZHPMY.js";import"./chunk-HLHJEFRF.js";import"./chunk-S37W3WO2.js";import{Cd as v,Kd as B}from"./chunk-6ZVJZYTQ.js";import"./chunk-DFKC7QAI.js";import"./chunk-56SJOU6P.js";import{g as y}from"./chunk-CBSQD5B4.js";import"./chunk-N7UFQNLW.js";import"./chunk-VNNHZNYI.js";import"./chunk-4P36KWOF.js";import{a as H}from"./chunk-7X4NV6OJ.js";import"./chunk-UNDMYLJW.js";import{f as b,h as r,n}from"./chunk-3KENBVE7.js";r();n();var o=b(H());r();n();var i=b(H());r();n();var G=c(m)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: background-color 200ms ease;
  background-color: ${t=>t.$isExpanded?"#000":"#333"} !important;
  :hover {
    background-color: #444444;
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${t=>t.$isExpanded?"white":"#666666"};
    transition: fill 200ms ease;
    position: relative;
    ${t=>t.top?`top: ${t.top}px;`:""}
    ${t=>t.right?`right: ${t.right}px;`:""}
  }
`;var U=c(T).attrs({justify:"space-between"})`
  background-color: #222222;
  padding: 10px 16px;
  border-bottom: 1px solid #323232;
  height: 46px;
  opacity: ${t=>t.opacity??"1"};
`,V=c.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,I=c.div`
  width: 24px;
  height: 24px;
`,M=({onBackClick:t,totalSteps:a,currentStepIndex:p,isHidden:l,showBackButtonOnFirstStep:e,showBackButton:u=!0})=>i.default.createElement(U,{opacity:l?0:1},u&&(e||p!==0)?i.default.createElement(G,{right:1,onClick:t},i.default.createElement(O,null)):i.default.createElement(I,null),i.default.createElement(V,null,y(a).map(s=>{let d=s<=p?"#AB9FF2":"#333";return i.default.createElement(m,{key:s,diameter:12,color:d})})),i.default.createElement(I,null));r();n();var z=()=>{let{mutateAsync:t}=B(),{hardwareStepStack:a,pushStep:p,popStep:l,currentStep:e,setOnConnectHardwareAccounts:u,setOnConnectHardwareDone:w,setExistingAccounts:s}=F(),{data:d=[],isFetched:x,isError:k}=v(),C=$(a,(h,J)=>h?.length===J.length),W=a.length>(C??[]).length,A=C?.length===0,X={initial:{x:A?0:W?150:-150,opacity:A?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}},j=(0,o.useCallback)(()=>{e()?.props.preventBack||(e()?.props.onBackCallback&&e()?.props.onBackCallback?.(),l())},[e,l]);return _(()=>{u(async h=>{await t(h),await f.set(g,!await f.get(g))}),w(()=>self.close()),p(o.default.createElement(D,null))},a.length===0),(0,o.useEffect)(()=>{s({data:d,isFetched:x,isError:k})},[d,x,k,s]),o.default.createElement(L,null,o.default.createElement(M,{totalSteps:3,onBackClick:j,showBackButton:!e()?.props.preventBack,currentStepIndex:a.length-1}),o.default.createElement(P,{mode:"wait"},o.default.createElement(E.div,{style:{display:"flex",flexGrow:1},key:`${a.length}_${C?.length}`,...X},o.default.createElement(N,null,e()))))},yt=z;export{yt as default};
//# sourceMappingURL=SettingsConnectHardware-U5QXL764.js.map
