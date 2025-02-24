import{a as h,b as c,d as s,e as T}from"./chunk-7ZFVAV4G.js";import{a as I}from"./chunk-DYIE7UTS.js";import{Ma as b,ga as g}from"./chunk-FADT747G.js";import"./chunk-LTPMKRAS.js";import"./chunk-3JF2QXJE.js";import"./chunk-OLW3L37F.js";import"./chunk-CCUXU2GU.js";import"./chunk-PTZJLI7L.js";import"./chunk-QHN65AEO.js";import"./chunk-KS7RCTZG.js";import"./chunk-QEXGR5WT.js";import"./chunk-L4RFQ6RY.js";import"./chunk-SHAEZV7V.js";import"./chunk-S24UABH5.js";import"./chunk-ZE6HXUUA.js";import"./chunk-X3ESGVCB.js";import"./chunk-5UZO3TVF.js";import"./chunk-DERIAD33.js";import"./chunk-EGXLQXDH.js";import"./chunk-TSP4CJ7O.js";import"./chunk-CCQRCL2K.js";import"./chunk-ERPPDNZG.js";import"./chunk-INIFY56O.js";import"./chunk-IVMV7P4T.js";import"./chunk-T6LDDI5K.js";import"./chunk-HPOS2V3B.js";import"./chunk-XYJX6G2K.js";import"./chunk-J6Y2BR3C.js";import"./chunk-B745CFYO.js";import"./chunk-AWKYXRT4.js";import"./chunk-H3FFS4GT.js";import"./chunk-GTBW7SFI.js";import"./chunk-TIFZOZS6.js";import"./chunk-PTZMRZUV.js";import"./chunk-VQVTLSDS.js";import{j as x,k as C}from"./chunk-OKP6DFCI.js";import{o,rb as l}from"./chunk-WIQ4WVKX.js";import"./chunk-CZNVQ2ZN.js";import"./chunk-GBDVRVXI.js";import"./chunk-UCBZOSRF.js";import"./chunk-NV3TFZ4C.js";import"./chunk-B226KCTA.js";import"./chunk-GJU3JL4E.js";import"./chunk-QTIYKADD.js";import"./chunk-XFLX2RRO.js";import"./chunk-BCLUZY4R.js";import"./chunk-GQEPK4C4.js";import"./chunk-BTKBODVJ.js";import"./chunk-PFT3L2T6.js";import"./chunk-LVTCV2WT.js";import"./chunk-WFPABEAU.js";import"./chunk-775LAOS6.js";import"./chunk-LDMZMUWY.js";import"./chunk-X2SBUKU4.js";import"./chunk-OXFZHPMY.js";import"./chunk-HLHJEFRF.js";import"./chunk-S37W3WO2.js";import{Na as r,Va as y,hb as B}from"./chunk-6ZVJZYTQ.js";import"./chunk-DFKC7QAI.js";import{m as d}from"./chunk-56SJOU6P.js";import"./chunk-CBSQD5B4.js";import"./chunk-N7UFQNLW.js";import"./chunk-VNNHZNYI.js";import"./chunk-4P36KWOF.js";import{a as v}from"./chunk-7X4NV6OJ.js";import"./chunk-UNDMYLJW.js";import{f as S,h as p,n as u}from"./chunk-3KENBVE7.js";p();u();var n=S(v());var M=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
`,D=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
`,P=o(l).attrs({size:28,weight:500,color:"#FFF"})`
  margin: 16px;
`,V=o(l).attrs({size:14,weight:400,lineHeight:17,color:"#999"})`
  max-width: 275px;

  span {
    color: white;
  }
`,$=o(h)`
  width: 100%;
  margin-top: 32px;
`,q=({networkId:t,token:a})=>{let{t:i}=d(),{handleHideModalVisibility:f}=b(),m=(0,n.useCallback)(()=>{f("insufficientBalance")},[f]),w=t&&y(B(r.getChainID(t))),{canBuy:F,openBuy:k}=g(w||"","modal","fiatOnrampFromInsufficientBalance"),e=t?r.getTokenSymbol(t):i("tokens");return n.default.createElement(M,null,n.default.createElement("div",null,n.default.createElement(D,null,n.default.createElement(I,{type:"failure",backgroundWidth:75}),n.default.createElement(P,null,i("insufficientBalancePrimaryText",{tokenSymbol:e})),n.default.createElement(V,null,i("insufficientBalanceSecondaryText",{tokenSymbol:e})),a?n.default.createElement($,{roundedTop:!0,roundedBottom:!0},n.default.createElement(c,{label:i("insufficientBalanceRemaining")},n.default.createElement(s,{color:"#EB3742"},`${a.balance} ${e}`)),n.default.createElement(T,{gap:1}),n.default.createElement(c,{label:i("insufficientBalanceRequired")},n.default.createElement(s,null,`${a.required} ${e}`))):null)),F?n.default.createElement(C,{primaryText:i("buyAssetInterpolated",{tokenSymbol:e}),onPrimaryClicked:k,secondaryText:i("commandCancel"),onSecondaryClicked:m}):n.default.createElement(x,{onClick:m},i("commandCancel")))},Q=q;export{q as InsufficientBalance,Q as default};
//# sourceMappingURL=InsufficientBalance-A7FNSOXK.js.map
