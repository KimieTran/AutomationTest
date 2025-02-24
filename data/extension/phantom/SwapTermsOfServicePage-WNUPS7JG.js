import{Ma as C}from"./chunk-FADT747G.js";import"./chunk-LTPMKRAS.js";import"./chunk-3JF2QXJE.js";import"./chunk-OLW3L37F.js";import"./chunk-CCUXU2GU.js";import"./chunk-PTZJLI7L.js";import"./chunk-QHN65AEO.js";import"./chunk-KS7RCTZG.js";import"./chunk-QEXGR5WT.js";import"./chunk-L4RFQ6RY.js";import"./chunk-SHAEZV7V.js";import"./chunk-S24UABH5.js";import"./chunk-ZE6HXUUA.js";import"./chunk-X3ESGVCB.js";import"./chunk-5UZO3TVF.js";import"./chunk-DERIAD33.js";import"./chunk-EGXLQXDH.js";import"./chunk-TSP4CJ7O.js";import"./chunk-CCQRCL2K.js";import"./chunk-ERPPDNZG.js";import"./chunk-INIFY56O.js";import"./chunk-IVMV7P4T.js";import"./chunk-T6LDDI5K.js";import"./chunk-HPOS2V3B.js";import"./chunk-XYJX6G2K.js";import"./chunk-J6Y2BR3C.js";import"./chunk-B745CFYO.js";import"./chunk-AWKYXRT4.js";import"./chunk-H3FFS4GT.js";import{a as y}from"./chunk-GTBW7SFI.js";import"./chunk-TIFZOZS6.js";import"./chunk-PTZMRZUV.js";import"./chunk-VQVTLSDS.js";import{k as v}from"./chunk-OKP6DFCI.js";import{na as T,o,rb as s}from"./chunk-WIQ4WVKX.js";import{Pa as w,ta as u}from"./chunk-CZNVQ2ZN.js";import"./chunk-GBDVRVXI.js";import"./chunk-UCBZOSRF.js";import"./chunk-NV3TFZ4C.js";import"./chunk-B226KCTA.js";import"./chunk-GJU3JL4E.js";import"./chunk-QTIYKADD.js";import"./chunk-XFLX2RRO.js";import"./chunk-BCLUZY4R.js";import"./chunk-GQEPK4C4.js";import"./chunk-BTKBODVJ.js";import"./chunk-PFT3L2T6.js";import"./chunk-LVTCV2WT.js";import"./chunk-WFPABEAU.js";import"./chunk-775LAOS6.js";import"./chunk-LDMZMUWY.js";import"./chunk-X2SBUKU4.js";import"./chunk-OXFZHPMY.js";import"./chunk-HLHJEFRF.js";import"./chunk-S37W3WO2.js";import"./chunk-6ZVJZYTQ.js";import"./chunk-DFKC7QAI.js";import{m as S}from"./chunk-56SJOU6P.js";import"./chunk-CBSQD5B4.js";import"./chunk-N7UFQNLW.js";import{C as p,D as f,_a as d}from"./chunk-VNNHZNYI.js";import"./chunk-4P36KWOF.js";import{a as k}from"./chunk-7X4NV6OJ.js";import"./chunk-UNDMYLJW.js";import{f as O,h as l,n as m}from"./chunk-3KENBVE7.js";l();m();var e=O(k());var b=o.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding: 16px;
`,x=o.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -20px;
`,h=o(s).attrs({size:28,weight:500,color:"#FFFFFF"})`
  margin-top: 24px;
`,F=o(s).attrs({size:16,weight:500,color:"#777777"})`
  padding: 0px 5px;
  margin-top: 9px;
  span {
    color: #ffffff;
  }
  label {
    color: #ab9ff2;
    cursor: pointer;
  }
`,P=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
`,A=o.div`
  margin-top: auto;
  width: 100%;
`,B=()=>{let{t:i}=S(),{mutateAsync:n}=w(),{handleHideModalVisibility:r,handleShowModalVisibility:t}=C(),{data:[a]}=d(["enable-swapper-skip-review"]),g=(0,e.useCallback)(()=>{t("swapConfirmation"),r("swapTermsOfService")},[t,r]),c=u({goToConfirmation:g});return{onAgreeClick:(0,e.useCallback)(()=>{n(!0),a?c():(t("swapReview"),r("swapTermsOfService"))},[t,n,r,a,c]),onCancelClick:()=>{r("swapTermsOfService")},t:i}},L=()=>{self.open(p,"_blank")},M=()=>{self.open(f,"_blank")},_=e.default.memo(({onAgreeClick:i,onCancelClick:n,t:r})=>e.default.createElement(b,null,e.default.createElement(x,null,e.default.createElement(P,null,e.default.createElement(T,null),e.default.createElement(h,null,r("termsOfServicePrimaryText")),e.default.createElement(F,null,e.default.createElement(y,{i18nKey:"termsOfServiceDiscliamerFeesEnabledInterpolated"},"We have revised our Terms of Service. By clicking ",e.default.createElement("span",null,'"I Agree"')," you agree to our new",e.default.createElement("label",{onClick:L},"Terms of Service"),".",e.default.createElement("br",null),e.default.createElement("br",null),"Our new Terms of Service include a new ",e.default.createElement("label",{onClick:M},"fee structure")," for certain products.")))),e.default.createElement(A,null,e.default.createElement(v,{primaryText:r("termsOfServiceActionButtonAgree"),secondaryText:r("commandCancel"),onPrimaryClicked:i,onSecondaryClicked:n})))),V=()=>{let i=B();return e.default.createElement(_,{...i})},X=V;export{V as SwapTermsOfServicePage,X as default};
//# sourceMappingURL=SwapTermsOfServicePage-WNUPS7JG.js.map
