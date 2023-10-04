"use strict";(self.webpackChunkgitexplorer=self.webpackChunkgitexplorer||[]).push([[674],{8674:(te,E,o)=>{o.r(E),o.d(E,{default:()=>W,routes:()=>w});var F=o(9671),A=o(6814),t=o(5879),L=o(1993),l=o(6223),v=o(2296),M=o(1175),p=o(2495),g=o(2831),T=o(6232),y=o(8645);const I=(0,g.i$)({passive:!0});let P=(()=>{var n;class a{constructor(e,i){this._platform=e,this._ngZone=i,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return T.E;const i=(0,p.fI)(e),r=this._monitoredElements.get(i);if(r)return r.subject;const u=new y.x,c="cdk-text-field-autofilled",d=f=>{"cdk-text-field-autofill-start"!==f.animationName||i.classList.contains(c)?"cdk-text-field-autofill-end"===f.animationName&&i.classList.contains(c)&&(i.classList.remove(c),this._ngZone.run(()=>u.next({target:f.target,isAutofilled:!1}))):(i.classList.add(c),this._ngZone.run(()=>u.next({target:f.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{i.addEventListener("animationstart",d,I),i.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(i,{subject:u,unlisten:()=>{i.removeEventListener("animationstart",d,I)}}),u}stopMonitoring(e){const i=(0,p.fI)(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}}return(n=a).\u0275fac=function(e){return new(e||n)(t.LFG(g.t4),t.LFG(t.R0b))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),a})(),O=(()=>{var n;class a{}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),a})();var x=o(3680),h=o(9157);const N=new t.OlP("MAT_INPUT_VALUE_ACCESSOR"),D=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let Z=0;const B=(0,x.FD)(class{constructor(n,a,s,e){this._defaultErrorStateMatcher=n,this._parentForm=a,this._parentFormGroup=s,this.ngControl=e,this.stateChanges=new y.x}});let V=(()=>{var n;class a extends B{get disabled(){return this._disabled}set disabled(e){this._disabled=(0,p.Ig)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(l.kI.required)??!1}set required(e){this._required=(0,p.Ig)(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&(0,g.qK)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=(0,p.Ig)(e)}constructor(e,i,r,u,c,d,f,X,ee,S){super(d,u,c,r),this._elementRef=e,this._platform=i,this._autofillMonitor=X,this._formField=S,this._uid="mat-input-"+Z++,this.focused=!1,this.stateChanges=new y.x,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(b=>(0,g.qK)().has(b)),this._iOSKeyupListener=b=>{const _=b.target;!_.value&&0===_.selectionStart&&0===_.selectionEnd&&(_.setSelectionRange(1,1),_.setSelectionRange(0,0))};const C=this._elementRef.nativeElement,k=C.nodeName.toLowerCase();this._inputValueAccessor=f||C,this._previousNativeValue=this.value,this.id=this.id,i.IOS&&ee.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",this._iOSKeyupListener)}),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===k,this._isTextarea="textarea"===k,this._isInFormField=!!S,this._isNativeSelect&&(this.controlType=C.multiple?"mat-native-select-multiple":"mat-native-select")}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._platform.IOS&&this._elementRef.nativeElement.removeEventListener("keyup",this._iOSKeyupListener)}ngDoCheck(){this.ngControl&&(this.updateErrorState(),null!==this.ngControl.disabled&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}_focusChanged(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckNativeValue(){const e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){const e=this._getPlaceholder();if(e!==this._previousPlaceholder){const i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){D.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){const e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}}return(n=a).\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(g.t4),t.Y36(l.a5,10),t.Y36(l.F,8),t.Y36(l.sg,8),t.Y36(x.rD),t.Y36(N,10),t.Y36(P),t.Y36(t.R0b),t.Y36(h.G_,8))},n.\u0275dir=t.lG2({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:18,hostBindings:function(e,i){1&e&&t.NdJ("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),2&e&&(t.Ikx("id",i.id)("disabled",i.disabled)("required",i.required),t.uIk("name",i.name||null)("readonly",i.readonly&&!i._isNativeSelect||null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),t.ekj("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],features:[t._Bn([{provide:h.Eo,useExisting:n}]),t.qOj,t.TTD]}),a})(),z=(()=>{var n;class a{}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[x.BQ,h.lN,h.lN,O,x.BQ]}),a})();var H=o(5940),R=o(2596),Y=o(7921),j=o(7398),G=o(4716),U=o(6306),m=o(5671),J=o(4581);function K(n,a){1&n&&t._UZ(0,"mat-spinner")}function $(n,a){if(1&n){const s=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(s);const i=t.oxw(2);return t.KtG(i.clear())}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}function q(n,a){1&n&&(t.TgZ(0,"div",14)(1,"h4",15),t._uU(2," The token you provided is invalid. Please follow these instructions to generate a new Token "),t.qZA(),t.TgZ(3,"a",16),t._uU(4," Go to GitHub "),t.qZA()())}function Q(n,a){if(1&n){const s=t.EpF();t.TgZ(0,"h3",5),t._uU(1," Paste your personal access token "),t._UZ(2,"mat-icon",6),t.qZA(),t.TgZ(3,"form",7)(4,"mat-form-field",8)(5,"mat-label"),t._uU(6,"Personal access key"),t.qZA(),t._UZ(7,"input",9),t.YNc(8,$,3,0,"button",10),t.qZA()(),t.TgZ(9,"button",11),t.NdJ("click",function(){t.CHM(s);const i=t.oxw();return t.KtG(i.submit())}),t.ALo(10,"async"),t._uU(11," Submit "),t.qZA(),t.YNc(12,q,5,0,"div",12)}if(2&n){const s=t.oxw();t.xp6(3),t.Q6J("formGroup",s.form),t.xp6(5),t.Q6J("ngIf",s.form.controls.input.value),t.xp6(1),t.Q6J("disabled",t.lcZ(10,4,s.disabled$)),t.xp6(3),t.Q6J("ngIf",s.isGoToGitHubPersonalTokenCreationVisible())}}const w=[{path:"",component:(()=>{var n;class a{constructor(e,i,r,u,c){this.octokitGeneralService=e,this.authService=i,this.fb=r,this.router=u,this.errorService=c,this.isLoading=(0,t.tdS)(!1),this.isGoToGitHubPersonalTokenCreationVisible=(0,t.tdS)(!1),this.destroyRef=(0,t.f3M)(t.ktI),this.form=this.fb.group({input:this.fb.control("",l.kI.required)}),this.disabled$=this.form.statusChanges.pipe((0,Y.O)(this.form.status),(0,j.U)(d=>"VALID"!==d))}submit(){this.isLoading.set(!0),this.octokitGeneralService.auth(this.form.controls.input.value).pipe((0,G.x)(()=>this.isLoading.set(!1)),(0,U.K)(e=>(this.errorService.setError(e.message),this.isGoToGitHubPersonalTokenCreationVisible.set(!0),this.form.controls.input.reset(),this.authService.setLoggedIn(!1),T.E)),(0,L.sL)(this.destroyRef)).subscribe(e=>{e.status===m.WE.Ok&&(this.isGoToGitHubPersonalTokenCreationVisible.set(!1),this.successAuthActions())})}clear(){this.form.controls.input.reset()}successAuthActions(){var e=this;return(0,F.Z)(function*(){yield e.router.navigate([m.Xv.Home]),e.authService.setLoggedIn(!0)})()}}return(n=a).\u0275fac=function(e){return new(e||n)(t.Y36(m.Z4),t.Y36(m.e8),t.Y36(l.j3),t.Y36(J.F0),t.Y36(m.T_))},n.\u0275cmp=t.Xpm({type:n,selectors:[["lib-auth"]],standalone:!0,features:[t.jDz],decls:8,vars:2,consts:[[1,"auth-page"],[1,"main-title"],[1,"form-container"],[4,"ngIf","ngIfElse"],["content",""],[1,"secondary-title"],["matTooltipShowDelay","500","matTooltip","We don't store your personal access key locally.\n            You'll need to enter your token every time you revisit the webpage.","matTooltipPosition","above","aria-label","Personal access key description","fontIcon","info",1,"tooltip-icon"],[1,"auth-form",3,"formGroup"],["e2e","Auth-Form-Input"],["matInput","","type","password","formControlName","input"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["e2e","Auth-Submit-Btn","mat-raised-button","","color","primary",1,"submit-btn",3,"disabled","click"],["class","go-to-git-hub-section",4,"ngIf"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],[1,"go-to-git-hub-section"],["e2e","Auth-Error-Text",1,"error-text"],["mat-raised-button","","color","primary","target","_blank","href","https://docs.github.com/en/authentication/\n            keeping-your-account-and-data-secure/managing-your-personal-access-tokens"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0)(1,"div")(2,"h1",1),t._uU(3,"Log In"),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,K,1,0,"mat-spinner",3),t.qZA()()(),t.YNc(6,Q,13,6,"ng-template",null,4,t.W1O)),2&e){const r=t.MAs(7);t.xp6(5),t.Q6J("ngIf",i.isLoading())("ngIfElse",r)}},dependencies:[H.Cq,H.Ou,A.O5,A.Ov,z,V,h.KE,h.hX,h.R9,M.Ps,M.Hw,v.ot,v.zs,v.lW,v.RK,l.UX,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,R.AV,R.gM,m.uE],styles:[".auth-page[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;height:70%}.form-container[_ngcontent-%COMP%]{padding:40px;border-radius:10px;border:1px solid var(--primary-text-color);width:500px;display:flex;justify-content:center;flex-direction:column;margin-top:20px;align-items:center}.auth-form[_ngcontent-%COMP%], .submit-btn[_ngcontent-%COMP%]{width:100%}.go-to-git-hub-section[_ngcontent-%COMP%]{text-align:center;margin-top:50px}.error-text[_ngcontent-%COMP%]{color:var(--error-color)}.main-title[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px;color:var(--primary-text-color)}.secondary-title[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:20px;color:var(--primary-text-color)}.tooltip-icon[_ngcontent-%COMP%]{margin-left:4px;cursor:pointer}mat-form-field[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),a})(),title:"Auth"}],W=w}}]);