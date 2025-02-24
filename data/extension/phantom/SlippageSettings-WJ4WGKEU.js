import{H as v,Ma as T}from"./chunk-FADT747G.js";import"./chunk-LTPMKRAS.js";import"./chunk-3JF2QXJE.js";import"./chunk-OLW3L37F.js";import"./chunk-CCUXU2GU.js";import"./chunk-PTZJLI7L.js";import"./chunk-QHN65AEO.js";import"./chunk-KS7RCTZG.js";import"./chunk-QEXGR5WT.js";import"./chunk-L4RFQ6RY.js";import"./chunk-SHAEZV7V.js";import"./chunk-S24UABH5.js";import"./chunk-ZE6HXUUA.js";import"./chunk-X3ESGVCB.js";import"./chunk-5UZO3TVF.js";import"./chunk-DERIAD33.js";import"./chunk-EGXLQXDH.js";import"./chunk-TSP4CJ7O.js";import"./chunk-CCQRCL2K.js";import{a as b}from"./chunk-ERPPDNZG.js";import"./chunk-INIFY56O.js";import"./chunk-IVMV7P4T.js";import"./chunk-T6LDDI5K.js";import"./chunk-HPOS2V3B.js";import"./chunk-XYJX6G2K.js";import"./chunk-J6Y2BR3C.js";import"./chunk-B745CFYO.js";import{S as H,b as g,d,e as m,f as O,n as V}from"./chunk-AWKYXRT4.js";import"./chunk-H3FFS4GT.js";import"./chunk-GTBW7SFI.js";import"./chunk-TIFZOZS6.js";import"./chunk-PTZMRZUV.js";import"./chunk-VQVTLSDS.js";import{j as $}from"./chunk-OKP6DFCI.js";import{o as s,ra as w,rb as S}from"./chunk-WIQ4WVKX.js";import{xa as C}from"./chunk-CZNVQ2ZN.js";import"./chunk-GBDVRVXI.js";import"./chunk-UCBZOSRF.js";import"./chunk-NV3TFZ4C.js";import"./chunk-B226KCTA.js";import"./chunk-GJU3JL4E.js";import"./chunk-QTIYKADD.js";import"./chunk-XFLX2RRO.js";import"./chunk-BCLUZY4R.js";import"./chunk-GQEPK4C4.js";import"./chunk-BTKBODVJ.js";import"./chunk-PFT3L2T6.js";import"./chunk-LVTCV2WT.js";import"./chunk-WFPABEAU.js";import"./chunk-775LAOS6.js";import"./chunk-LDMZMUWY.js";import"./chunk-X2SBUKU4.js";import"./chunk-OXFZHPMY.js";import"./chunk-HLHJEFRF.js";import"./chunk-S37W3WO2.js";import"./chunk-6ZVJZYTQ.js";import"./chunk-DFKC7QAI.js";import"./chunk-56SJOU6P.js";import"./chunk-CBSQD5B4.js";import"./chunk-N7UFQNLW.js";import{_a as I}from"./chunk-VNNHZNYI.js";import"./chunk-4P36KWOF.js";import{a as F}from"./chunk-7X4NV6OJ.js";import"./chunk-UNDMYLJW.js";import{f as k,h,n as x}from"./chunk-3KENBVE7.js";h();x();var P=k(F());h();x();var o=k(F());var E=s.div`
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
`,W=s.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 16px;
  width: 100%;
`,M=s(S).attrs({size:28,lineHeight:32,weight:600,color:"#fff"})`
  margin: 20px 0 12px;
`,U=s(S).attrs({size:16,lineHeight:18,weight:400,color:"#777777"})`
  margin-bottom: 32px;
`,Y=s.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 2px;
  width: 100%;
  background-color: ${t=>t.theme.backgroundDark};
`,X=s.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 10px 8px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${t=>t.selected?"#AB9FF2":"transparent"};
  cursor: pointer;
`,B=s(S).attrs(t=>({size:14,lineHeight:18,weight:t.selected?600:500,color:t.selected?"#222":"#fff"}))`
  text-align: center;
`,_=s(S).attrs(t=>({size:14,lineHeight:18,weight:500,color:t.severity==="critical"?"#EB3742":"#FFDC62"}))`
  align-self: stretch;
  margin-top: 8px;
  text-align: left;
`,q=s.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`,G=s.input`
  background: transparent;
  color: #222;
  ::placeholder {
    color: #22222299;
  }
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-align: right;
  border: none;
  padding: 0;
`,J=()=>{let{handleHideModalVisibility:t}=T(),r=(0,o.useCallback)(()=>{t("slippageSettings")},[t]);return C({onDismiss:r})},K=({options:t,selectedIndex:r,customSlippageValue:n,i18nStrings:i,error:c,submitDisabled:u,onConfirm:a,onSelectOption:l,onChangeCustomSlippage:p,onDismiss:f})=>o.default.createElement(E,null,o.default.createElement(v,{leftButton:{type:"close",onClick:f},titleSize:"small"},i.title),o.default.createElement(W,null,o.default.createElement(b,{diameter:96,color:"#181818"},o.default.createElement(w,{width:38,fill:"#181818"})),o.default.createElement(M,null,i.title),o.default.createElement(U,null,i.subtitle),o.default.createElement(Z,{options:t,selectedIndex:r,customOptionLabel:i.custom,customOptionValue:n,onSelectOption:l,onCustomOptionChange:p}),c?o.default.createElement(_,{severity:c.severity},c.message):null),o.default.createElement($,{disabled:u,theme:"primary",onClick:a},i.button)),N=()=>{let t=J();return o.default.createElement(K,{...t})},z=N,Q=({value:t,onChangeText:r})=>{let n=i=>{i.target.validity.valid?r(i.target.value):i.preventDefault()};return o.default.createElement(q,null,o.default.createElement(G,{autoFocus:!t,placeholder:"0.00%",value:t??"",style:t?{width:`${t.length*10}px`,textAlign:"right"}:{width:"100%",textAlign:"center"},onChange:n}),o.default.createElement(B,{selected:!0},t?"%":""))},Z=({options:t,selectedIndex:r,customOptionLabel:n,customOptionValue:i,onSelectOption:c,onCustomOptionChange:u})=>o.default.createElement(Y,null,t.map((a,l)=>{let p=l===r,f=l===t.length-1&&p,y=()=>c(l);return o.default.createElement(X,{key:`segment-control-option-${l}`,selected:p,onClick:y},f?o.default.createElement(Q,{value:i,onChangeText:u}):o.default.createElement(B,{selected:p},a==="custom"?n:a))}));h();x();var e=k(F());var R=s.input`
  background: transparent;
  text-align: center;
  border: none;
  padding: 0;
  font-style: ${g.typography.font.bodySemibold.letterSpacing};
  font-size: ${g.typography.font.bodySemibold.fontSize};
  font-weight: ${g.typography.font.bodySemibold.fontWeight};
  line-height: ${g.typography.font.bodySemibold.lineHeight};
  color: ${g.colors.legacy.textPrimary};
  ::placeholder {
    color: ${g.colors.legacy.textTertiary};
  }
`,tt=({value:t,onChangeText:r})=>{let n=i=>{i.target.validity.valid?r(i.target.value):i.preventDefault()};return e.default.createElement(d,{display:"flex",direction:"row",alignItems:"center",justifyContent:"center",width:"100%"},e.default.createElement(R,{autoFocus:!t,placeholder:"0.00%",value:t??"",style:t?{width:`${t.length*10}px`,textAlign:"right"}:{width:"100%",textAlign:"center",minWidth:g.space.positive[48]},onChange:n}),t&&e.default.createElement(m,{font:"bodySemibold",color:"textPrimary"},"%"))},et=({options:t,selectedIndex:r,customOptionLabel:n,customOptionValue:i,onSelectOption:c,onCustomOptionChange:u})=>e.default.createElement(d,{display:"flex",direction:"row",alignItems:"center",justifyContent:"center",borderRadius:"row",width:"100%"},t.map((a,l)=>{let p=l===r,f=l===t.length-1&&p,y=()=>c(l);return e.default.createElement(d,{key:`segment-control-option-${l}`,display:"flex",flex:1,direction:"row",paddingX:20,paddingY:14,alignItems:"center",justifyContent:"center",borderRadius:"row",backgroundColor:p?"bgRow":void 0,onPress:y,minWidth:24},f?e.default.createElement(tt,{value:i,onChangeText:u}):e.default.createElement(m,{font:"bodySemibold",color:p?"textPrimary":"textSecondary",align:"center"},a==="custom"?n:a))})),ot=({customSlippageValue:t,error:r,i18nStrings:n,options:i,selectedIndex:c,submitDisabled:u,isAutoEnabled:a,autoLearnMoreUrl:l,onSelectOption:p,onChangeCustomSlippage:f,onConfirm:y,onToggleAutoSlippage:j,onDismiss:D})=>e.default.createElement(d,{height:"100%",overflowY:"auto",display:"flex",direction:"column",justifyContent:"space-between",padding:"screen"},e.default.createElement("div",null,e.default.createElement(v,{leftButton:{type:"close",onClick:D},titleSize:"small"},n.title),e.default.createElement(d,{display:"flex",gap:24,direction:"column",alignItems:"center",width:"100%"},e.default.createElement(d,{display:"flex",direction:"column",alignItems:"center"},e.default.createElement(b,{diameter:96,color:"#181818"},e.default.createElement(w,{width:38,fill:"#181818"})),e.default.createElement(m,{font:"heading2Semibold",color:"textPrimary",marginTop:20},n.title)),e.default.createElement(d,{width:"100%"},e.default.createElement(O,{rounded:!0,topLeft:n.auto,end:e.default.createElement(H,{id:"auto-slippage-switch",checked:a,onChange:j})}),e.default.createElement(m,{marginTop:8,font:"caption",color:"textSecondary"},n.autoSubtitle," ",e.default.createElement(m,{font:"caption",color:"accentPrimary",onPress:()=>self.open(l,"_blank")},n.learnMore))),!a&&e.default.createElement(d,{gap:8,display:"flex",direction:"column",alignItems:"center"},e.default.createElement(et,{options:i,selectedIndex:c,customOptionLabel:n.custom,customOptionValue:t,onSelectOption:p,onCustomOptionChange:f}),e.default.createElement(m,{font:"caption",color:"textSecondary"},n.subtitle),r&&e.default.createElement(m,{font:"caption",color:r.severity==="critical"?"accentAlert":"accentWarning",alignSelf:"stretch"},r.message)))),e.default.createElement(V,{disabled:u,theme:"primary",onClick:y},n.button)),nt=()=>{let{handleHideModalVisibility:t}=T(),r=(0,e.useCallback)(()=>{t("slippageSettings")},[t]);return C({onDismiss:r})},L=()=>{let t=nt();return e.default.createElement(ot,{...t})};var it=()=>{let{data:[t]}=I(["enable-auto-slippage"]);return t?P.default.createElement(L,null):P.default.createElement(z,null)},Ot=it;export{it as SlippageSettings,Ot as default};
//# sourceMappingURL=SlippageSettings-WJ4WGKEU.js.map
