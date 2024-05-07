"use strict";(self.webpackChunkfoody=self.webpackChunkfoody||[]).push([[231],{3231:(j,m,a)=>{a.r(m),a.d(m,{CategoriesModule:()=>J});var s=a(6814),_=a(3403),c=a(6223),d=a(7700),t=a(5879);let u=(()=>{class i{constructor(e,n){this.dialogRef=e,this.data=n,this.userName="",this.addEditForm=new c.cw({name:new c.NI(null,[c.kI.required])})}onNoClick(){this.dialogRef.close()}ngOnInit(){this.userName=localStorage.getItem("userName")??""}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(d.so),t.Y36(d.WI))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-add-edit-category"]],decls:13,vars:6,consts:[[1,"d-flex","justify-content-center","align-items-center","bg-black","bg-opacity-25","vh-100"],[1,"category","bg-white","p-5","d-flex","flex-column","gap-5","rounded-3"],[1,"d-flex","justify-content-between","align-items-center"],["role","button",1,"fa-solid","fa-xmark-circle","fa-2x","text-danger",3,"click"],[1,"d-flex","flex-column","gap-5",3,"formGroup"],["type","text","formControlName","name","placeholder","Category Name",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"danger-outline","px-2","py-1",3,"click"],[1,"primary-outline","px-2","py-1",3,"mat-dialog-close","disabled"]],template:function(n,o){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"h3"),t._uU(4),t.qZA(),t.TgZ(5,"i",3),t.NdJ("click",function(){return o.onNoClick()}),t.qZA()(),t.TgZ(6,"form",4)(7,"input",5),t.NdJ("ngModelChange",function(g){return o.data.name=g}),t.qZA(),t.TgZ(8,"div",2)(9,"button",6),t.NdJ("click",function(){return o.onNoClick()}),t._uU(10,"Cancel"),t.qZA(),t.TgZ(11,"button",7),t._uU(12),t.qZA()()()()()),2&n&&(t.xp6(4),t.hij("",o.data.edit?"Edit":"Add"," Category"),t.xp6(2),t.Q6J("formGroup",o.addEditForm),t.xp6(1),t.Q6J("ngModel",o.data.name),t.xp6(4),t.Q6J("mat-dialog-close",o.addEditForm.value)("disabled",o.addEditForm.invalid),t.xp6(1),t.Oqu(o.data.edit?"Edit":"Add"))},dependencies:[c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,d.ZT],styles:["button[_ngcontent-%COMP%]{font-size:1rem}@media screen and (max-width: 768px){.category[_ngcontent-%COMP%]{width:90%;padding:20px}}@media screen and (min-width: 769px) and (max-width: 992px){.category[_ngcontent-%COMP%]{width:40%}}@media screen and (min-width: 1024px){.category[_ngcontent-%COMP%]{width:30%}}"]})}return i})();var h=a(7921),f=a(7398);let M=(()=>{class i{constructor(e,n){this.dialogRef=e,this.data=n,this.userName=""}onNoClick(){this.dialogRef.close()}ngOnInit(){this.userName=localStorage.getItem("userName")??""}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(d.so),t.Y36(d.WI))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-view-category"]],decls:17,vars:3,consts:[[1,"ag-format-container","d-flex","justify-content-center","align-content-center","vh-100"],[1,"category_box"],[1,"category_item"],[1,"category-item_link"],[1,"category-item_bg"],[1,"d-flex","justify-content-between","align-items-baseline"],[1,"category-item_title"],["role","button",1,"fa-solid","fa-xmark-circle","text-white","position-relative","fa-2x","z-3",3,"click"],[1,"category-item_date-box"],[1,"category-item_date"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"div",4),t.TgZ(5,"div",5)(6,"div",6),t._uU(7),t.qZA(),t.TgZ(8,"i",7),t.NdJ("click",function(){return o.onNoClick()}),t.qZA()(),t.TgZ(9,"div",8),t._uU(10," Created At: "),t.TgZ(11,"span",9),t._uU(12),t.qZA()(),t.TgZ(13,"div",8),t._uU(14," Modified At: "),t.TgZ(15,"span",9),t._uU(16),t.qZA()()()()()()),2&n&&(t.xp6(7),t.hij(" ",o.data.categoryData.name,"\xa0 "),t.xp6(5),t.hij(" ",o.data.categoryData.creationDate," "),t.xp6(4),t.hij(" ",o.data.categoryData.modificationDate," "))},styles:[".category_box[_ngcontent-%COMP%]{display:-ms-flexbox;width:100%;display:flex;justify-content:center;align-items:center}.category_item[_ngcontent-%COMP%]{flex-basis:calc(33.33333% - 30px);margin:0 15px 30px;overflow:hidden;border-radius:28px}.category-item_link[_ngcontent-%COMP%]{display:block;padding:30px 20px;background-color:#131c24;overflow:hidden;position:relative}.category-item_link[_ngcontent-%COMP%]:hover, .category-item_link[_ngcontent-%COMP%]:hover   .category-item_date[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.category-item_link[_ngcontent-%COMP%]:hover   .category-item_bg[_ngcontent-%COMP%]{transform:scale(10)}.category-item_title[_ngcontent-%COMP%]{min-height:87px;margin:0 0 25px;overflow:hidden;font-weight:700;font-size:30px;color:#fff;z-index:2;position:relative}.category-item_date-box[_ngcontent-%COMP%]{font-size:18px;color:#fff;z-index:2;position:relative}.category-item_date[_ngcontent-%COMP%]{font-weight:700;color:#f9b234;transition:color .5s ease}.category-item_bg[_ngcontent-%COMP%]{height:128px;width:128px;background-color:#3ecd5e;z-index:1;position:absolute;top:-75px;right:-75px;border-radius:50%;transition:all .5s ease}.category_item[_ngcontent-%COMP%]   .category-item_bg[_ngcontent-%COMP%]{background-color:#3ecd5e}@media only screen and (max-width: 979px){.category_item[_ngcontent-%COMP%]{flex-basis:calc(50% - 30px)}.category-item_title[_ngcontent-%COMP%]{font-size:24px}}@media only screen and (max-width: 767px){.ag-format-container[_ngcontent-%COMP%]{width:96%}}@media only screen and (max-width: 639px){.category_item[_ngcontent-%COMP%]{flex-basis:100%}.category-item_title[_ngcontent-%COMP%]{min-height:72px;line-height:1;font-size:24px}.category-item_link[_ngcontent-%COMP%]{padding:22px 40px}.category-item_date-box[_ngcontent-%COMP%]{font-size:16px}}@media screen and (max-width: 768px){.category[_ngcontent-%COMP%]{width:60%;padding:20px}}@media screen and (min-width: 769px) and (max-width: 992px){.category[_ngcontent-%COMP%]{width:25%}}@media screen and (min-width: 1024px){.category[_ngcontent-%COMP%]{width:18%}}"]})}return i})();var y=a(9862);let O=(()=>{class i{constructor(e){this._HttpClient=e}createCategory(e){return this._HttpClient.post("Category",e)}getOrFilterCategories(e){return this._HttpClient.get("Category",{params:e})}getSingleCategory(e){return this._HttpClient.get(`Category/${e}`)}deleteCategory(e){return this._HttpClient.delete(`Category/${e}`)}updateCategory(e,n){return this._HttpClient.put(`Category/${e}`,n)}static#t=this.\u0275fac=function(n){return new(n||i)(t.LFG(y.eN))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var P=a(2425),x=a(2296),b=a(2032),C=a(9157);let v=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-main-shared"]],inputs:{mainHeader:"mainHeader",mainTextHeader:"mainTextHeader",mainTextContent:"mainTextContent"},decls:12,vars:3,consts:[[1,"mt-5","text-center","bg-main","py-3","ps-sm-5","rounded-4"],[1,"row","justify-content-around","align-items-center"],[1,"col-md-6","col-12"],[1,"d-flex","align-items-end","gap-2","text-white"],[1,"mb-0","mt-3","text-start","text-white"],[1,"col-md-6","col-12","imgBx","d-flex","justify-content-end"],[1,"mb-0"],["src","../../../../assets/images/menu.svg","alt","vegan",1,"w-100"]],template:function(n,o){1&n&&(t.TgZ(0,"section",0)(1,"article",1)(2,"div",2)(3,"h2",3),t._uU(4),t.TgZ(5,"span"),t._uU(6),t.qZA()(),t.TgZ(7,"p",4),t._uU(8),t.qZA()(),t.TgZ(9,"div",5)(10,"figure",6),t._UZ(11,"img",7),t.qZA()()()()),2&n&&(t.xp6(4),t.hij(" ",o.mainHeader," "),t.xp6(2),t.hij(" ",o.mainTextHeader,""),t.xp6(2),t.hij(" ",o.mainTextContent," "))},styles:["section[_ngcontent-%COMP%]{background-image:url(header-bg.e7cd2c7a9e952177.svg);background-size:cover;background-repeat:no-repeat;background-position:center center}@media (max-width: 576px){section[_ngcontent-%COMP%]{padding-top:var(--small-screen-padding-top);padding-left:var(--small-screen-padding-left-right);padding-right:var(--small-screen-padding-left-right);font-size:var(--small-screen-font-size)}}@media (min-width: 577px) and (max-width: 992px){section[_ngcontent-%COMP%]{padding-top:var(--medium-screen-padding-top);padding-left:var(--medium-screen-padding-left-right);padding-right:var(--medium-screen-padding-left-right);font-size:var(--medium-screen-font-size)}}@media (min-width: 993px) and (max-width: 1200px){section[_ngcontent-%COMP%]{padding-top:var(--large-screen-padding-top);padding-left:var(--large-screen-padding-left-right);padding-right:var(--large-screen-padding-left-right);font-size:var(--large-screen-font-size)}}@media (min-width: 1201px){section[_ngcontent-%COMP%]{padding-top:var(--extra-large-screen-padding-top);padding-left:var(--extra-large-screen-padding-left-right);padding-right:var(--extra-large-screen-padding-left-right);font-size:var(--extra-large-screen-font-size)}}section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.3rem}@media (max-width: 576px){section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.9rem}}@media (max-width: 767px){section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.9rem}}"]})}return i})();var w=a(824),p=a(7988),k=a(617),Z=a(4740);function T(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return o.categoryFiltrationValue="",t.KtG(o.onGetCategories())}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}function A(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"span",14),t.O4$(),t.TgZ(3,"svg",15),t._UZ(4,"path",16)(5,"path",17)(6,"path",18)(7,"path",19),t.qZA()(),t.kcU(),t.TgZ(8,"div",20)(9,"h3"),t._uU(10),t.qZA(),t.TgZ(11,"div")(12,"button",21)(13,"mat-icon"),t._uU(14,"more_vert"),t.qZA()(),t.TgZ(15,"mat-menu",null,22)(17,"button",23),t.NdJ("click",function(){const r=t.CHM(e).$implicit,g=t.oxw();return t.KtG(g.onOpenViewCategoryDialog(r.id))}),t.TgZ(18,"mat-icon"),t._uU(19,"visibility"),t.qZA(),t.TgZ(20,"span"),t._uU(21,"View"),t.qZA()(),t.TgZ(22,"button",24),t.NdJ("click",function(){const r=t.CHM(e).$implicit,g=t.oxw();return t.KtG(g.openEditCategoryDialog(r.id))}),t.TgZ(23,"mat-icon"),t._uU(24,"edit_square"),t.qZA(),t.TgZ(25,"span"),t._uU(26,"Edit"),t.qZA()(),t.TgZ(27,"button",24),t.NdJ("click",function(){const r=t.CHM(e).$implicit,g=t.oxw();return t.KtG(g.onDeleteCategory(r.id))}),t.TgZ(28,"mat-icon"),t._uU(29,"delete"),t.qZA(),t.TgZ(30,"span"),t._uU(31,"Delete"),t.qZA()()()()(),t.TgZ(32,"div",20)(33,"p",25),t._uU(34),t.ALo(35,"date"),t.qZA(),t.TgZ(36,"p",25),t._uU(37),t.ALo(38,"date"),t.qZA()(),t.TgZ(39,"div",26)(40,"div",27),t._UZ(41,"div",28)(42,"div",29)(43,"div",30)(44,"div",31)(45,"div",32)(46,"div",33)(47,"div",34)(48,"div",35)(49,"div",36)(50,"div",37),t.qZA(),t._UZ(51,"div",38)(52,"div",39)(53,"div",40),t.qZA()()()}if(2&i){const e=l.$implicit,n=t.MAs(16);t.xp6(10),t.Oqu(e.name),t.xp6(2),t.Q6J("matMenuTriggerFor",n),t.xp6(22),t.hij(" ",t.xi3(35,4,e.creationDate,"dd-mm h:m a")," "),t.xp6(3),t.hij(" ",t.xi3(38,7,e.modificationDate,"dd-mm h:m a")," ")}}function N(i,l){1&i&&t._UZ(0,"app-not-found")}const U=function(){return[10,20,30]};function z(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"div",41)(1,"p-paginator",42),t.NdJ("onPageChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.onPageChange(o))}),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("showFirstLastIcon",!1)("first",e.first)("rows",e.rows)("totalRecords",e.categoryList.totalNumberOfRecords)("rowsPerPageOptions",t.DdM(5,U))}}const S=[{path:"",component:(()=>{class i{constructor(e,n,o){this._CategoriesService=e,this._ToastrService=n,this.dialog=o,this.first=1,this.rows=10,this.categoryFiltrationValue="",this.myControl=new c.NI,this.filteredCategories=[],this.categories=[],this.headerText="Categories",this.headerTextContent="Item",this.textContent="You can now add your items that any user can order it from the Application and you can edit",this.categoryList={pageNumber:0,pageSize:0,data:[],totalNumberOfPages:0,totalNumberOfRecords:0}}ngOnInit(){this.onGetCategories(),this.filteredCategories=this.categories,this.myControl.valueChanges.pipe((0,h.O)(""),(0,f.U)(e=>this._filter(e))).subscribe(e=>{this.filteredCategories=e})}_filter(e){const n=e.toLowerCase();return this.categoryList.data.filter(o=>o.name.toLowerCase().includes(n))}onGetCategories(){this._CategoriesService.getOrFilterCategories({name:this.categoryFiltrationValue,pageSize:this.rows,pageNumber:this.first/this.rows+1}).subscribe({next:n=>this.categoryList=n,error:n=>this._ToastrService.error(n.error.message,"Error"),complete:()=>this._ToastrService.success("The items were successfully retrieved.","Success")})}openAddCategoryDialog(){this.dialog.open(u,{width:"100%",height:"100%",maxHeight:"100%",maxWidth:"100%",data:{edit:!1}}).afterClosed().subscribe(n=>{n&&this.onCreateCategory(n)})}onCreateCategory(e){this._CategoriesService.createCategory(e).subscribe({next:()=>{},error:n=>this._ToastrService.error(n.error.message,"Error"),complete:()=>{this._ToastrService.success("Category Created Successfully","Success"),this.onGetCategories()}})}onDeleteCategory(e){this._CategoriesService.deleteCategory(e).subscribe({next:n=>{},error:n=>this._ToastrService.error(n.error.message,"Error"),complete:()=>{this._ToastrService.success("Item Deleted Successfully","Success"),this.onGetCategories()}})}openEditCategoryDialog(e){this._CategoriesService.getSingleCategory(e).subscribe({next:n=>{this.dialog.open(u,{width:"100%",height:"100%",maxHeight:"100%",maxWidth:"100%",data:{name:n.name,edit:!0}}).afterClosed().subscribe(r=>{r&&this.onUpdateCategory(e,r)})}})}onUpdateCategory(e,n){this._CategoriesService.updateCategory(e,n).subscribe({next:()=>{},error:o=>this._ToastrService.error(o.error.message,"Error"),complete:()=>{this._ToastrService.success("Category Updated Successfully","Success"),this.onGetCategories()}})}onPageChange(e){this.first=e.first,this.rows=e.rows,this.onGetCategories()}onOpenViewCategoryDialog(e){this._CategoriesService.getSingleCategory(e).subscribe({next:n=>{this.dialog.open(M,{height:"100%",width:"100%",maxWidth:"100%",maxHeight:"100%",data:{categoryData:n}}).afterClosed().subscribe(r=>{console.log(r)})}})}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(O),t.Y36(P._W),t.Y36(d.uw))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-categories"]],decls:20,vars:8,consts:[[3,"mainHeader","mainTextHeader","mainTextContent"],[1,"d-flex","justify-content-between","align-items-center","my-5"],[1,"content"],[1,"primary",3,"click"],["appearance","outline",1,"w-100","text-white"],["matInput","","type","text",3,"ngModel","ngModelChange","keyup.enter"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"row","gy-2"],["class","grid-item col-xl-3 col-lg-4 col-md-6 col-12",4,"ngFor","ngForOf"],[4,"ngIf"],["class","d-flex d-flex justify-content-center mt-5 py-5",4,"ngIf"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],[1,"grid-item","col-xl-3","col-lg-4","col-md-6","col-12"],[1,"category-card","w-100"],[1,"category-icon"],["viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","1.2","stroke-linecap","round","stroke-linejoin","round","xmlns","http://www.w3.org/2000/svg"],["d","M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z"],["d","M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z"],["d","M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z"],["d","M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z"],[1,"d-flex","justify-content-between","align-items-center"],["mat-icon-button","","aria-label","Example icon-button with a menu",1,"text-white","position-relative","z-3",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],["mat-menu-item","","type","button",3,"click"],[1,"time-text"],[1,"background"],[1,"tiles"],[1,"tile","tile-1"],[1,"tile","tile-2"],[1,"tile","tile-3"],[1,"tile","tile-4"],[1,"tile","tile-5"],[1,"tile","tile-6"],[1,"tile","tile-7"],[1,"tile","tile-8"],[1,"tile","tile-9"],[1,"tile","tile-10"],[1,"line","line-1"],[1,"line","line-2"],[1,"line","line-3"],[1,"d-flex","d-flex","justify-content-center","mt-5","py-5"],[3,"showFirstLastIcon","first","rows","totalRecords","rowsPerPageOptions","onPageChange"]],template:function(n,o){1&n&&(t.TgZ(0,"section"),t._UZ(1,"app-main-shared",0),t.TgZ(2,"article",1)(3,"div",2)(4,"h3"),t._uU(5,"Categories Details"),t.qZA(),t.TgZ(6,"p"),t._uU(7,"You can check all details"),t.qZA()(),t.TgZ(8,"button",3),t.NdJ("click",function(){return o.openAddCategoryDialog()}),t._uU(9,"Add New Category"),t.qZA()(),t.TgZ(10,"article")(11,"mat-form-field",4)(12,"mat-label"),t._uU(13,"search by Name"),t.qZA(),t.TgZ(14,"input",5),t.NdJ("ngModelChange",function(g){return o.categoryFiltrationValue=g})("keyup.enter",function(){return o.onGetCategories()}),t.qZA(),t.YNc(15,T,3,0,"button",6),t.qZA(),t.TgZ(16,"div",7),t.YNc(17,A,54,10,"div",8),t.qZA(),t.YNc(18,N,1,0,"app-not-found",9),t.qZA(),t.YNc(19,z,2,6,"div",10),t.qZA()),2&n&&(t.xp6(1),t.Q6J("mainHeader",o.headerText)("mainTextHeader",o.headerTextContent)("mainTextContent",o.textContent),t.xp6(13),t.Q6J("ngModel",o.categoryFiltrationValue),t.xp6(1),t.Q6J("ngIf",o.categoryFiltrationValue),t.xp6(2),t.Q6J("ngForOf",o.categoryList.data),t.xp6(1),t.Q6J("ngIf",0==o.categoryList.data.length),t.xp6(1),t.Q6J("ngIf",o.categoryList.data.length>0))},dependencies:[s.sg,s.O5,c.Fj,c.JJ,c.On,x.RK,b.Nt,C.KE,C.hX,C.R9,v,w.D,p.VK,p.OP,p.p6,k.Hw,Z.w,s.uU],styles:['.grid-item[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(1,auto);position:relative;z-index:1}.category-card[_ngcontent-%COMP%]{background-color:var(--background-color);box-shadow:0 var(--card-box-shadow-1-y) var(--card-box-shadow-1-blur) var(--card-box-shadow-1),0 var(--card-box-shadow-2-y) var(--card-box-shadow-2-blur) var(--card-box-shadow-2),0 0 0 1px var(--card-border-color);padding:56px 16px 16px;border-radius:15px;cursor:pointer;position:relative;transition:box-shadow .5s}.category-card[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;border-radius:15px;background-color:var(--card-background-color)}.category-card[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%]{z-index:2;position:relative;display:table;padding:8px}.category-card[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:4.5px;border-radius:50%;background-color:var(--card-icon-background-color);border:1px solid var(--card-icon-border-color);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);transition:background-color .25s,border-color .25s}.category-card[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:relative;z-index:1;display:block;width:24px;height:24px;transform:translateZ(0);color:var(--card-icon-color);transition:color .25s}.category-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{z-index:2;position:relative;margin:12px 0 4px;font-family:inherit;font-weight:600;font-size:18px;line-height:2;color:var(--card-label-color)}.category-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{z-index:2;position:relative;margin:0;font-size:14px;line-height:1.7;color:var(--text-color)}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{border-radius:inherit;position:absolute;inset:0;overflow:hidden;-webkit-mask-image:radial-gradient(circle at 60% 5%,black 0%,black 15%,transparent 60%);mask-image:radial-gradient(circle at 60% 5%,black 0%,black 15%,transparent 60%)}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]{opacity:0;transition:opacity .25s}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]{position:absolute;background-color:var(--card-tile-color);animation-duration:8s;animation-iteration-count:infinite;opacity:0}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]   .tile.tile-4[_ngcontent-%COMP%], .category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]   .tile.tile-6[_ngcontent-%COMP%], .category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]   .tile.tile-10[_ngcontent-%COMP%]{animation-delay:-2s}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]   .tile.tile-3[_ngcontent-%COMP%], .category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]   .tile.tile-5[_ngcontent-%COMP%], .category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]   .tile.tile-8[_ngcontent-%COMP%]{animation-delay:-4s}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]   .tile.tile-2[_ngcontent-%COMP%], .category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]   .tile.tile-9[_ngcontent-%COMP%]{animation-delay:-6s}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]   .tile.tile-1[_ngcontent-%COMP%]{top:0;left:0;height:10%;width:22.5%}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]   .tile.tile-2[_ngcontent-%COMP%]{top:0;left:22.5%;height:10%;width:27.5%}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]   .tile.tile-3[_ngcontent-%COMP%]{top:0;left:50%;height:10%;width:27.5%}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]   .tile.tile-4[_ngcontent-%COMP%]{top:0;left:77.5%;height:10%;width:22.5%}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]   .tile.tile-5[_ngcontent-%COMP%]{top:10%;left:0;height:22.5%;width:22.5%}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]   .tile.tile-6[_ngcontent-%COMP%]{top:10%;left:22.5%;height:22.5%;width:27.5%}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]   .tile.tile-7[_ngcontent-%COMP%]{top:10%;left:50%;height:22.5%;width:27.5%}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]   .tile.tile-8[_ngcontent-%COMP%]{top:10%;left:77.5%;height:22.5%;width:22.5%}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]   .tile.tile-9[_ngcontent-%COMP%]{top:32.5%;left:50%;height:22.5%;width:27.5%}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]   .tile.tile-10[_ngcontent-%COMP%]{top:32.5%;left:77.5%;height:22.5%;width:22.5%}@keyframes _ngcontent-%COMP%_tile{0%,12.5%,to{opacity:1}25%,82.5%{opacity:0}}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{position:absolute;inset:0;opacity:0;transition:opacity .35s}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:before, .category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:after{content:"";position:absolute;background-color:var(--card-line-color);transition:transform .35s}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:before{left:0;right:0;height:1px;transform-origin:0 50%;transform:scaleX(0)}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:after{top:0;bottom:0;width:1px;transform-origin:50% 0;transform:scaleY(0)}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .line.line-1[_ngcontent-%COMP%]:before{top:10%}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .line.line-1[_ngcontent-%COMP%]:after{left:22.5%}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .line.line-1[_ngcontent-%COMP%]:before, .category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .line.line-1[_ngcontent-%COMP%]:after{transition-delay:.3s}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .line.line-2[_ngcontent-%COMP%]:before{top:32.5%}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .line.line-2[_ngcontent-%COMP%]:after{left:50%}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .line.line-2[_ngcontent-%COMP%]:before, .category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .line.line-2[_ngcontent-%COMP%]:after{transition-delay:.15s}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .line.line-3[_ngcontent-%COMP%]:before{top:55%}.category-card[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .line.line-3[_ngcontent-%COMP%]:after{right:22.5%}.category-card[_ngcontent-%COMP%]:hover{box-shadow:0 3px 6px var(--card-hover-box-shadow-1),0 var(--card-hover-box-shadow-2-y) var(--card-hover-box-shadow-2-blur) var(--card-hover-box-shadow-2),0 0 0 1px var(--card-hover-border-color)}.category-card[_ngcontent-%COMP%]:hover   .category-icon[_ngcontent-%COMP%]:after{background-color:var(--card-hover-icon-background-color);border-color:var(--card-hover-icon-border-color)}.category-card[_ngcontent-%COMP%]:hover   .category-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:var(--card-hover-icon-color)}.category-card[_ngcontent-%COMP%]:hover   .shine[_ngcontent-%COMP%]{opacity:1;transition-duration:.5s;transition-delay:0s}.category-card[_ngcontent-%COMP%]:hover   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]{opacity:1;transition-delay:.25s}.category-card[_ngcontent-%COMP%]:hover   .background[_ngcontent-%COMP%]   .tiles[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_tile}.category-card[_ngcontent-%COMP%]:hover   .background[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{opacity:1;transition-duration:.15s}.category-card[_ngcontent-%COMP%]:hover   .background[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:before{transform:scaleX(1)}.category-card[_ngcontent-%COMP%]:hover   .background[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:after{transform:scaleY(1)}.category-card[_ngcontent-%COMP%]:hover   .background[_ngcontent-%COMP%]   .line.line-1[_ngcontent-%COMP%]:before, .category-card[_ngcontent-%COMP%]:hover   .background[_ngcontent-%COMP%]   .line.line-1[_ngcontent-%COMP%]:after{transition-delay:0s}.category-card[_ngcontent-%COMP%]:hover   .background[_ngcontent-%COMP%]   .line.line-2[_ngcontent-%COMP%]:before, .category-card[_ngcontent-%COMP%]:hover   .background[_ngcontent-%COMP%]   .line.line-2[_ngcontent-%COMP%]:after{transition-delay:.15s}.category-card[_ngcontent-%COMP%]:hover   .background[_ngcontent-%COMP%]   .line.line-3[_ngcontent-%COMP%]:before, .category-card[_ngcontent-%COMP%]:hover   .background[_ngcontent-%COMP%]   .line.line-3[_ngcontent-%COMP%]:after{transition-delay:.3s}.mat-mdc-menu-panel[_ngcontent-%COMP%]{background-color:#fff!important}mat-form-field[_ngcontent-%COMP%]{width:100%}']})}return i})()}];let F=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[_.Bz.forChild(S),_.Bz]})}return i})();var H=a(1325);let J=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[s.ez,F,H.m]})}return i})()}}]);