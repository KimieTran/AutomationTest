import{a as Z}from"./chunk-LEECQOCO.js";import{a as $}from"./chunk-YCRZOZ2T.js";import{a as F}from"./chunk-NJJ6TOLX.js";import{a as G}from"./chunk-2WECCVZD.js";import{A as O,Ma as j,y as V}from"./chunk-FADT747G.js";import{k as U}from"./chunk-LTPMKRAS.js";import"./chunk-3JF2QXJE.js";import"./chunk-OLW3L37F.js";import"./chunk-CCUXU2GU.js";import"./chunk-PTZJLI7L.js";import"./chunk-QHN65AEO.js";import"./chunk-KS7RCTZG.js";import"./chunk-QEXGR5WT.js";import"./chunk-L4RFQ6RY.js";import"./chunk-SHAEZV7V.js";import"./chunk-S24UABH5.js";import"./chunk-ZE6HXUUA.js";import{a as x}from"./chunk-X3ESGVCB.js";import"./chunk-5UZO3TVF.js";import{g as z}from"./chunk-DERIAD33.js";import"./chunk-EGXLQXDH.js";import"./chunk-TSP4CJ7O.js";import{a as B}from"./chunk-CCQRCL2K.js";import"./chunk-ERPPDNZG.js";import"./chunk-INIFY56O.js";import{a as Q}from"./chunk-IVMV7P4T.js";import"./chunk-T6LDDI5K.js";import"./chunk-HPOS2V3B.js";import"./chunk-XYJX6G2K.js";import"./chunk-J6Y2BR3C.js";import"./chunk-B745CFYO.js";import{D as A,G as E,a as P,b as D}from"./chunk-AWKYXRT4.js";import"./chunk-H3FFS4GT.js";import"./chunk-GTBW7SFI.js";import"./chunk-TIFZOZS6.js";import"./chunk-PTZMRZUV.js";import"./chunk-VQVTLSDS.js";import{j as _}from"./chunk-OKP6DFCI.js";import{D as N,o as s,rb as w}from"./chunk-WIQ4WVKX.js";import"./chunk-CZNVQ2ZN.js";import"./chunk-GBDVRVXI.js";import"./chunk-UCBZOSRF.js";import{$ as v,T as W,ba as L,ca as k,j as M}from"./chunk-NV3TFZ4C.js";import"./chunk-B226KCTA.js";import"./chunk-GJU3JL4E.js";import"./chunk-QTIYKADD.js";import"./chunk-XFLX2RRO.js";import"./chunk-BCLUZY4R.js";import"./chunk-GQEPK4C4.js";import"./chunk-BTKBODVJ.js";import"./chunk-PFT3L2T6.js";import"./chunk-LVTCV2WT.js";import"./chunk-WFPABEAU.js";import"./chunk-775LAOS6.js";import"./chunk-LDMZMUWY.js";import"./chunk-X2SBUKU4.js";import"./chunk-OXFZHPMY.js";import"./chunk-HLHJEFRF.js";import"./chunk-S37W3WO2.js";import{Td as H}from"./chunk-6ZVJZYTQ.js";import"./chunk-DFKC7QAI.js";import{m as p}from"./chunk-56SJOU6P.js";import"./chunk-CBSQD5B4.js";import"./chunk-N7UFQNLW.js";import"./chunk-VNNHZNYI.js";import"./chunk-4P36KWOF.js";import{a as T}from"./chunk-7X4NV6OJ.js";import"./chunk-UNDMYLJW.js";import{f as y,h as S,n as I}from"./chunk-3KENBVE7.js";S();I();var t=y(T());S();I();var o=y(T());var K=P({marginLeft:4}),X=s(x).attrs({align:"center",padding:"10px"})`
  background-color: #2a2a2a;
  border-radius: 6px;
  height: 74px;
  margin: 4px 0;
`,Y=s.div`
  display: flex;
  align-items: center;
`,R=s(B)`
  flex: 1;
  min-width: 0;
  text-align: left;
  align-items: normal;
`,tt=s(w).attrs({size:16,weight:600,lineHeight:19,noWrap:!0,maxWidth:"175px",textAlign:"left"})``,et=s(w).attrs({color:"#777777",size:14,lineHeight:17,noWrap:!0})`
  text-align: left;
  margin-top: 5px;
`,ot=s.div`
  width: 55px;
  min-width: 55px;
  max-width: 55px;
  height: 55px;
  min-height: 55px;
  max-height: 55px;
  aspect-ratio: 1;
  margin-right: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,q=o.default.memo(e=>{let{t:n}=p(),{collection:i,unknownItem:m,isHidden:r,isSpam:a,onToggleHidden:d}=e,{name:c,id:h}=i,l=L(i),g=l?.chainData,f=k(i),u=v(l?.media,"image",!1,"small"),C=c||l?.name||m;return o.default.createElement(X,null,o.default.createElement(ot,null,a&&r?o.default.createElement(Z,{width:32}):u?o.default.createElement(O,{uri:u}):M(g)?o.default.createElement($,{...g.utxoDetails}):o.default.createElement(V,{type:"image",width:42})),o.default.createElement(x,null,o.default.createElement(R,null,o.default.createElement(Y,null,o.default.createElement(tt,null,C),a?o.default.createElement(N,{className:K,fill:D.colors.legacy.accentWarning,height:16,width:16}):null),o.default.createElement(et,null,n("collectiblesSearchNrOfItems",{nrOfItems:f})))),o.default.createElement(G,{id:h,label:`${c} visible`,checked:!r,onChange:b=>{d(b.target.checked?"show":"hide")}}))});var it=74,nt=10,lt=it+nt,st=20,rt=s.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,at=s.div`
  position: relative;
  width: 100%;
`,mt=()=>{let{handleHideModalVisibility:e}=j(),{data:n,isPending:i}=H(),{viewState:m,viewStateLoading:r}=W({account:n}),a=(0,t.useCallback)(()=>e("collectiblesVisibility"),[e]),d=(0,t.useMemo)(()=>({...m,handleCloseModal:a}),[a,m]),c=(0,t.useMemo)(()=>i||r,[i,r]);return{data:d,loading:c}},ct=t.default.memo(e=>{let{t:n}=p(),i=(0,t.useRef)(null);return(0,t.useEffect)(()=>{setTimeout(()=>i.current?.focus(),200)},[]),t.default.createElement(t.default.Fragment,null,t.default.createElement(at,null,t.default.createElement(z,{ref:i,tabIndex:0,placeholder:n("assetListSearch"),maxLength:50,onChange:e.handleSearch,value:e.searchQuery,name:"Search collectibles"})),t.default.createElement(U,null,t.default.createElement(A,null,({height:m,width:r})=>t.default.createElement(E,{style:{padding:`${st}px 0`},scrollToIndex:e.searchQuery!==e.debouncedSearchQuery?0:void 0,height:m,width:r,rowCount:e.listItems.length,rowHeight:lt,rowRenderer:a=>t.default.createElement(dt,{...a,data:e.listItems,unknownItem:n("assetListUnknownToken"),getIsHidden:e.getIsHidden,getIsSpam:e.getIsSpam,getSpamStatus:e.getSpamStatus,onToggleHidden:e.onToggleHidden})}))))}),dt=e=>{let{index:n,data:i,style:m,unknownItem:r,getIsHidden:a,getIsSpam:d,getSpamStatus:c,onToggleHidden:h}=e,l=i[n],g=a(l),f=d(l),u=c(l),C=(0,t.useCallback)(b=>h({item:l,status:b}),[h,l]);return t.default.createElement("div",{style:m},t.default.createElement(q,{collection:l,unknownItem:r,isHidden:g,isSpam:f,spamStatus:u,onToggleHidden:C}))},pt=()=>{let{data:e,loading:n}=mt(),{t:i}=p();return t.default.createElement(rt,null,n?t.default.createElement(F,null):t.default.createElement(ct,{...e}),t.default.createElement(Q,null,t.default.createElement(_,{onClick:e.handleCloseModal},i("commandClose"))))},Ut=pt;export{pt as CollectiblesVisibilityPage,Ut as default};
//# sourceMappingURL=CollectiblesVisibilityPage-6XYIQXI5.js.map
