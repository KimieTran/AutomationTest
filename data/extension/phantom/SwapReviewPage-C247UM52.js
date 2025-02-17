import{a as F}from"./chunk-YM6B3STJ.js";import{a as b}from"./chunk-MIHHSTWX.js";import{a as w}from"./chunk-WREOXBEP.js";import"./chunk-7ZFVAV4G.js";import"./chunk-DYIE7UTS.js";import"./chunk-2WECCVZD.js";import"./chunk-E5R3LR47.js";import"./chunk-5DG6WSA2.js";import"./chunk-XJWRT6N6.js";import{H as g,Ma as T}from"./chunk-FADT747G.js";import"./chunk-LTPMKRAS.js";import"./chunk-3JF2QXJE.js";import"./chunk-OLW3L37F.js";import"./chunk-CCUXU2GU.js";import"./chunk-PTZJLI7L.js";import"./chunk-QHN65AEO.js";import"./chunk-KS7RCTZG.js";import"./chunk-QEXGR5WT.js";import"./chunk-L4RFQ6RY.js";import"./chunk-SHAEZV7V.js";import"./chunk-S24UABH5.js";import"./chunk-ZE6HXUUA.js";import"./chunk-X3ESGVCB.js";import"./chunk-5UZO3TVF.js";import"./chunk-DERIAD33.js";import"./chunk-EGXLQXDH.js";import{h as y}from"./chunk-TSP4CJ7O.js";import"./chunk-CCQRCL2K.js";import"./chunk-ERPPDNZG.js";import"./chunk-INIFY56O.js";import{a as x}from"./chunk-IVMV7P4T.js";import"./chunk-T6LDDI5K.js";import"./chunk-HPOS2V3B.js";import"./chunk-XYJX6G2K.js";import"./chunk-J6Y2BR3C.js";import"./chunk-B745CFYO.js";import"./chunk-AWKYXRT4.js";import"./chunk-H3FFS4GT.js";import"./chunk-GTBW7SFI.js";import"./chunk-TIFZOZS6.js";import"./chunk-PTZMRZUV.js";import"./chunk-VQVTLSDS.js";import{j as P}from"./chunk-OKP6DFCI.js";import{o as i}from"./chunk-WIQ4WVKX.js";import{Ja as R,Xa as h,Ya as C,ga as f,ma as v,ua as S}from"./chunk-CZNVQ2ZN.js";import"./chunk-GBDVRVXI.js";import"./chunk-UCBZOSRF.js";import"./chunk-NV3TFZ4C.js";import"./chunk-B226KCTA.js";import{v as c}from"./chunk-GJU3JL4E.js";import"./chunk-QTIYKADD.js";import"./chunk-XFLX2RRO.js";import"./chunk-BCLUZY4R.js";import"./chunk-GQEPK4C4.js";import"./chunk-BTKBODVJ.js";import"./chunk-PFT3L2T6.js";import"./chunk-LVTCV2WT.js";import"./chunk-WFPABEAU.js";import"./chunk-775LAOS6.js";import"./chunk-LDMZMUWY.js";import"./chunk-X2SBUKU4.js";import"./chunk-OXFZHPMY.js";import"./chunk-HLHJEFRF.js";import"./chunk-S37W3WO2.js";import{Td as u}from"./chunk-6ZVJZYTQ.js";import"./chunk-DFKC7QAI.js";import{m as d}from"./chunk-56SJOU6P.js";import"./chunk-CBSQD5B4.js";import"./chunk-N7UFQNLW.js";import"./chunk-VNNHZNYI.js";import"./chunk-4P36KWOF.js";import{a as M}from"./chunk-7X4NV6OJ.js";import"./chunk-UNDMYLJW.js";import{f as I,h as l,n as m}from"./chunk-3KENBVE7.js";l();m();var e=I(M());var D=i.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: scroll;
  padding: 16px 16px ${78}px; // footer height + padding
`,E=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,H=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  position: absolute;
  bottom: 0;
`,Q=i.div`
  background-color: #2a2a2a;
  border-radius: 6px;
  width: 100%;

  > *:first-child {
    border-bottom: 1px solid #222222;
  }
`,W=()=>{let{t}=d(),{handleHideModalVisibility:r}=T(),{pushDetailView:n}=y(),{resume:p}=v(),o=f(a=>a.quoteResponse),{data:s}=u(),V=(0,e.useMemo)(()=>s?.addresses.find(a=>a.networkID===o?.sellToken.chainId),[s,o]);(0,e.useEffect)(()=>{R()},[]),c(V,"SWAP_FUNGIBLE");let B=(0,e.useCallback)(()=>n(e.default.createElement(b,null)),[n]),k=S({goToConfirmation:B}),A=(0,e.useCallback)(()=>{p(),r("swapReview")},[r,p]);return{...k,hideSwapReview:A,t}},q=e.default.memo(({buyToken:t,sellToken:r,hideSwapReview:n,onSwap:p,t:o})=>{let{infoRowDisplayStrategy:s}=C();return e.default.createElement(D,null,e.default.createElement(E,null,e.default.createElement(g,{leftButton:{type:"close",onClick:n}},o("swapReviewFlowPrimaryText")),e.default.createElement(Q,null,e.default.createElement(w,{...r,title:o("swapReviewFlowYouPay")}),e.default.createElement(w,{...t,title:o("swapReviewFlowYouReceive")})),e.default.createElement(F,{isSwapReview:!0,rowDisplayStrategy:s})),e.default.createElement(H,null,e.default.createElement(x,{removeFooterExpansion:!0,removeShadowFooter:!0},e.default.createElement(P,{theme:"primary",onClick:p},o("swapReviewFlowActionButtonPrimary")))))}),N=()=>{let t=W();return e.default.createElement(h,null,e.default.createElement(q,{...t}))},Y=()=>e.default.createElement(N,null),ne=Y;export{Y as SwapReviewPage,ne as default};
//# sourceMappingURL=SwapReviewPage-C247UM52.js.map
