(self["webpackChunkquestions_game"] = self["webpackChunkquestions_game"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_answers_answers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/answers/answers.component */ 4780);
/* harmony import */ var _components_dahsboard_dahsboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dahsboard/dahsboard.component */ 9588);
/* harmony import */ var _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/questions/questions.component */ 8801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);






const routes = [
    { path: 'dashboard', component: _components_dahsboard_dahsboard_component__WEBPACK_IMPORTED_MODULE_1__.DahsboardComponent },
    { path: 'question', component: _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_2__.QuestionsComponent },
    { path: 'answer', component: _components_answers_answers_component__WEBPACK_IMPORTED_MODULE_0__.AnswersComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class AppComponent {
    constructor() {
        this.title = 'questions-game';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "container", "mt-5"], [1, "card", "text-center", "shadow-sm"], [1, "card-body"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components.module */ 5642);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material/material.module */ 898);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ 2249);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);










class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
            _material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__.ServiceWorkerModule] }); })();


/***/ }),

/***/ 4780:
/*!*********************************************************!*\
  !*** ./src/app/components/answers/answers.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnswersComponent": () => (/* binding */ AnswersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/question.service */ 2773);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6627);





function AnswersComponent_div_6_ng_container_4_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " check_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AnswersComponent_div_6_ng_container_4_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
const _c0 = function (a0, a1) { return { "list-group-item-success": a0, "list-group-item-danger": a1 }; };
function AnswersComponent_div_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, AnswersComponent_div_6_ng_container_4_mat_icon_3_Template, 2, 0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, AnswersComponent_div_6_ng_container_4_mat_icon_4_Template, 2, 0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
} if (rf & 2) {
    const answer_r4 = ctx.$implicit;
    const j_r5 = ctx.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction2"](4, _c0, answer_r4.isCorrect === 1 && ctx_r3.answerList[i_r2] == j_r5, answer_r4.isCorrect === 0 && ctx_r3.answerList[i_r2] == j_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", answer_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", answer_r4.isCorrect === 1 && ctx_r3.answerList[i_r2] == j_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", answer_r4.isCorrect === 0 && ctx_r3.answerList[i_r2] == j_r5);
} }
function AnswersComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, AnswersComponent_div_6_ng_container_4_Template, 5, 7, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const question_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](question_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r0.questionList[i_r2].answers);
} }
class AnswersComponent {
    constructor(questionService, router) {
        this.questionService = questionService;
        this.router = router;
        this.questionList = this.questionService.questions;
        this.answerList = this.questionService.userAnswers;
    }
    return() {
        this.questionService.userAnswers = [];
        this.router.navigate(['/dashboard']);
    }
}
AnswersComponent.??fac = function AnswersComponent_Factory(t) { return new (t || AnswersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AnswersComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AnswersComponent, selectors: [["app-answers"]], decls: 12, vars: 1, consts: [[1, "card-title"], [1, "card-text"], [4, "ngFor", "ngForOf"], [1, "row", "mt-3"], [1, "col-lg-4", "offset-lg-4"], [1, "btn", "btn-info", "w-100", "shadow-sm", 3, "click"], [1, "card-title", "mt-3"], [1, "list-group"], [1, "list-group-item", 3, "ngClass"], ["aria-hidden", "false", "class", "correct", 4, "ngIf"], ["aria-hidden", "false", "class", "incorrect", 4, "ngIf"], ["aria-hidden", "false", 1, "correct"], ["aria-hidden", "false", 1, "incorrect"]], template: function AnswersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Resultado");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Este es el resultado del cuestionario!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, AnswersComponent_div_6_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AnswersComponent_Template_button_click_10_listener() { return ctx.return(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, " Volver ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.questionList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon], styles: [".list-group-item[_ngcontent-%COMP%] {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\n.correct[_ngcontent-%COMP%] {\n  color: #17ab2b;\n  position: absolute;\n  right: 1rem;\n}\n\n.incorrect[_ngcontent-%COMP%] {\n  color: #da2d2d;\n  position: absolute;\n  right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuc3dlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUVGIiwiZmlsZSI6ImFuc3dlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1ncm91cC1pdGVtIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvcnJlY3Qge1xyXG4gIGNvbG9yOiAjMTdhYjJiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMXJlbTtcclxufVxyXG4uaW5jb3JyZWN0IHtcclxuICBjb2xvcjogI2RhMmQyZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDFyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8852:
/*!******************************************************!*\
  !*** ./src/app/components/answers/answers.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnswersModule": () => (/* binding */ AnswersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _answers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./answers.component */ 4780);
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/material/material.module */ 898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




class AnswersModule {
}
AnswersModule.??fac = function AnswersModule_Factory(t) { return new (t || AnswersModule)(); };
AnswersModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: AnswersModule });
AnswersModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, src_app_material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](AnswersModule, { declarations: [_answers_component__WEBPACK_IMPORTED_MODULE_0__.AnswersComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, src_app_material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule], exports: [_answers_component__WEBPACK_IMPORTED_MODULE_0__.AnswersComponent] }); })();


/***/ }),

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _dahsboard_dahsboard_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dahsboard/dahsboard.module */ 5019);
/* harmony import */ var _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.module */ 7947);
/* harmony import */ var _questions_questions_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions/questions.module */ 5010);
/* harmony import */ var _answers_answers_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./answers/answers.module */ 8852);
/* harmony import */ var _keypad_keypad_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keypad/keypad.module */ 6898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);







class ComponentsModule {
}
ComponentsModule.??fac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: ComponentsModule });
ComponentsModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _dahsboard_dahsboard_module__WEBPACK_IMPORTED_MODULE_0__.DahsboardModule,
            _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_1__.NavbarModule,
            _questions_questions_module__WEBPACK_IMPORTED_MODULE_2__.QuestionsModule,
            _answers_answers_module__WEBPACK_IMPORTED_MODULE_3__.AnswersModule,
            _keypad_keypad_module__WEBPACK_IMPORTED_MODULE_4__.KeypadModule,
        ], _dahsboard_dahsboard_module__WEBPACK_IMPORTED_MODULE_0__.DahsboardModule,
        _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_1__.NavbarModule,
        _questions_questions_module__WEBPACK_IMPORTED_MODULE_2__.QuestionsModule,
        _answers_answers_module__WEBPACK_IMPORTED_MODULE_3__.AnswersModule,
        _keypad_keypad_module__WEBPACK_IMPORTED_MODULE_4__.KeypadModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](ComponentsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _dahsboard_dahsboard_module__WEBPACK_IMPORTED_MODULE_0__.DahsboardModule,
        _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_1__.NavbarModule,
        _questions_questions_module__WEBPACK_IMPORTED_MODULE_2__.QuestionsModule,
        _answers_answers_module__WEBPACK_IMPORTED_MODULE_3__.AnswersModule,
        _keypad_keypad_module__WEBPACK_IMPORTED_MODULE_4__.KeypadModule], exports: [_dahsboard_dahsboard_module__WEBPACK_IMPORTED_MODULE_0__.DahsboardModule,
        _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_1__.NavbarModule,
        _questions_questions_module__WEBPACK_IMPORTED_MODULE_2__.QuestionsModule,
        _answers_answers_module__WEBPACK_IMPORTED_MODULE_3__.AnswersModule,
        _keypad_keypad_module__WEBPACK_IMPORTED_MODULE_4__.KeypadModule] }); })();


/***/ }),

/***/ 9588:
/*!*************************************************************!*\
  !*** ./src/app/components/dahsboard/dahsboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DahsboardComponent": () => (/* binding */ DahsboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



class DahsboardComponent {
}
DahsboardComponent.??fac = function DahsboardComponent_Factory(t) { return new (t || DahsboardComponent)(); };
DahsboardComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DahsboardComponent, selectors: [["app-dahsboard"]], decls: 9, vars: 3, consts: [[1, "card-title"], [1, "card-text"], [1, "row"], [1, "col-lg-4", "offset-lg-4"], ["routerLink", "/question", 1, "btn", "btn-info", "w-100", "shadow-sm"]], template: function DahsboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Bienvenido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Seleccione el boton comenzar para realizar el cuestionario.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](8, 1, "Comenzar"), " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe], styles: [".btn[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhaHNib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6ImRhaHNib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 5019:
/*!**********************************************************!*\
  !*** ./src/app/components/dahsboard/dahsboard.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DahsboardModule": () => (/* binding */ DahsboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _dahsboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dahsboard.component */ 9588);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




class DahsboardModule {
}
DahsboardModule.??fac = function DahsboardModule_Factory(t) { return new (t || DahsboardModule)(); };
DahsboardModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: DahsboardModule });
DahsboardModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](DahsboardModule, { declarations: [_dahsboard_component__WEBPACK_IMPORTED_MODULE_0__.DahsboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_dahsboard_component__WEBPACK_IMPORTED_MODULE_0__.DahsboardComponent] }); })();


/***/ }),

/***/ 3322:
/*!*******************************************************!*\
  !*** ./src/app/components/keypad/keypad.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeypadComponent": () => (/* binding */ KeypadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/question.service */ 2773);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class KeypadComponent {
    constructor(questionService, router) {
        this.questionService = questionService;
        this.router = router;
        this.btnString = 'Aceptar';
    }
    ngOnInit() { }
    next() {
        switch (this.btnString) {
            case 'Aceptar': {
                this.questionService.confirmedAnswer = true;
                this.btnString = 'Siguiente';
                if (this.questionService.questions.length - 1 ===
                    this.questionService.questionIndex) {
                    this.btnString = 'Finalizar';
                }
                break;
            }
            case 'Siguiente': {
                this.questionService.questionIndex++;
                this.questionService.userAnswers.push(this.questionService.answerIndex);
                this.questionService.btnDisabled = true;
                this.questionService.confirmedAnswer = false;
                this.btnString = 'Aceptar';
                break;
            }
            case 'Finalizar': {
                this.questionService.userAnswers.push(this.questionService.answerIndex);
                this.questionService.answerSelected = null;
                this.questionService.confirmedAnswer = false;
                this.questionService.questionIndex = 0;
                this.router.navigate(['/answer']);
            }
        }
    }
}
KeypadComponent.??fac = function KeypadComponent_Factory(t) { return new (t || KeypadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
KeypadComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: KeypadComponent, selectors: [["app-keypad"]], decls: 4, vars: 2, consts: [[1, "row", "mt-3"], [1, "col-lg-4", "offset-lg-4"], [1, "btn", "btn-info", "w-100", "shadow-sm", 3, "disabled", "click"]], template: function KeypadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function KeypadComponent_Template_button_click_2_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", ctx.questionService.btnDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.btnString, " ");
    } }, styles: [".btn[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXBhZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJrZXlwYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6898:
/*!****************************************************!*\
  !*** ./src/app/components/keypad/keypad.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeypadModule": () => (/* binding */ KeypadModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _keypad_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keypad.component */ 3322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



class KeypadModule {
}
KeypadModule.??fac = function KeypadModule_Factory(t) { return new (t || KeypadModule)(); };
KeypadModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: KeypadModule });
KeypadModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](KeypadModule, { declarations: [_keypad_component__WEBPACK_IMPORTED_MODULE_0__.KeypadComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_keypad_component__WEBPACK_IMPORTED_MODULE_0__.KeypadComponent] }); })();


/***/ }),

/***/ 3252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


class NavbarComponent {
}
NavbarComponent.??fac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 4, vars: 3, consts: [[1, "navbar", "navbar-light", "shadow-sm"], [1, "navbar-brand", "mb-0", "mx-auto", "h1"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "Preguntas y respuestas"));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.UpperCasePipe], styles: [".navbar[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 7947:
/*!****************************************************!*\
  !*** ./src/app/components/navbar/navbar.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarModule": () => (/* binding */ NavbarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.component */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



class NavbarModule {
}
NavbarModule.??fac = function NavbarModule_Factory(t) { return new (t || NavbarModule)(); };
NavbarModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: NavbarModule });
NavbarModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](NavbarModule, { declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent] }); })();


/***/ }),

/***/ 8801:
/*!*************************************************************!*\
  !*** ./src/app/components/questions/questions.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsComponent": () => (/* binding */ QuestionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/question.service */ 2773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _keypad_keypad_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../keypad/keypad.component */ 3322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6627);





function QuestionsComponent_li_3_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " check_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function QuestionsComponent_li_3_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function QuestionsComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function QuestionsComponent_li_3_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r6); const answer_r1 = restoredCtx.$implicit; const i_r2 = restoredCtx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r5.selectedQuestion(answer_r1, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, QuestionsComponent_li_3_mat_icon_2_Template, 2, 0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, QuestionsComponent_li_3_mat_icon_3_Template, 2, 0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const answer_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", ctx_r0.addClassOption(answer_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", answer_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.iconCorrect(answer_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.iconIncorrect(answer_r1));
} }
class QuestionsComponent {
    constructor(questionService) {
        this.questionService = questionService;
        this.questions = this.questionService.getQuestions();
    }
    getQuestion() {
        return this.questions[this.questionService.questionIndex].description;
    }
    selectedQuestion(answer, index) {
        if (this.questionService.confirmedAnswer === true) {
            return;
        }
        this.questionService.answerSelected = answer;
        this.questionService.btnDisabled = false;
        this.questionService.answerIndex = index;
    }
    addClassOption(answer) {
        if (answer === this.questionService.answerSelected &&
            !this.questionService.confirmedAnswer) {
            return 'active text-light';
        }
        else if (answer === this.questionService.answerSelected &&
            this.questionService.confirmedAnswer &&
            this.questionService.answerSelected.isCorrect === 1) {
            return 'list-group-item-success';
        }
        else if (answer === this.questionService.answerSelected &&
            this.questionService.confirmedAnswer &&
            this.questionService.answerSelected.isCorrect === 0) {
            return 'list-group-item-danger';
        }
    }
    iconCorrect(answer) {
        if (answer === this.questionService.answerSelected &&
            this.questionService.confirmedAnswer &&
            this.questionService.answerSelected.isCorrect === 1) {
            return true;
        }
        else {
            return false;
        }
    }
    iconIncorrect(answer) {
        if (answer === this.questionService.answerSelected &&
            this.questionService.confirmedAnswer &&
            this.questionService.answerSelected.isCorrect === 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
QuestionsComponent.??fac = function QuestionsComponent_Factory(t) { return new (t || QuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionService)); };
QuestionsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: QuestionsComponent, selectors: [["app-questions"]], decls: 5, vars: 2, consts: [[1, "card-title"], [1, "list-group"], ["class", "list-group-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", 3, "ngClass", "click"], ["aria-hidden", "false", "class", "correct", 4, "ngIf"], ["aria-hidden", "false", "class", "incorrect", 4, "ngIf"], ["aria-hidden", "false", 1, "correct"], ["aria-hidden", "false", 1, "incorrect"]], template: function QuestionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, QuestionsComponent_li_3_Template, 4, 4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "app-keypad");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.getQuestion());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.questions[ctx.questionService.questionIndex].answers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _keypad_keypad_component__WEBPACK_IMPORTED_MODULE_1__.KeypadComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon], styles: [".list-group-item[_ngcontent-%COMP%] {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\n.correct[_ngcontent-%COMP%] {\n  color: #17ab2b;\n  position: absolute;\n  right: 1rem;\n}\n\n.incorrect[_ngcontent-%COMP%] {\n  color: #da2d2d;\n  position: absolute;\n  right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRUYiLCJmaWxlIjoicXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb3JyZWN0IHtcclxuICBjb2xvcjogIzE3YWIyYjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDFyZW07XHJcbn1cclxuLmluY29ycmVjdCB7XHJcbiAgY29sb3I6ICNkYTJkMmQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxcmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 5010:
/*!**********************************************************!*\
  !*** ./src/app/components/questions/questions.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsModule": () => (/* binding */ QuestionsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _questions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions.component */ 8801);
/* harmony import */ var _keypad_keypad_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../keypad/keypad.module */ 6898);
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material/material.module */ 898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);





class QuestionsModule {
}
QuestionsModule.??fac = function QuestionsModule_Factory(t) { return new (t || QuestionsModule)(); };
QuestionsModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: QuestionsModule });
QuestionsModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _keypad_keypad_module__WEBPACK_IMPORTED_MODULE_1__.KeypadModule, src_app_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](QuestionsModule, { declarations: [_questions_component__WEBPACK_IMPORTED_MODULE_0__.QuestionsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _keypad_keypad_module__WEBPACK_IMPORTED_MODULE_1__.KeypadModule, src_app_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule], exports: [_questions_component__WEBPACK_IMPORTED_MODULE_0__.QuestionsComponent] }); })();


/***/ }),

/***/ 898:
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);



class MaterialModule {
}
MaterialModule.??fac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: MaterialModule });
MaterialModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule], exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule] }); })();


/***/ }),

/***/ 2773:
/*!**********************************************!*\
  !*** ./src/app/services/question.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionService": () => (/* binding */ QuestionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class QuestionService {
    constructor() {
        this.questionIndex = 0;
        this.btnDisabled = true;
        this.confirmedAnswer = false;
        this.userAnswers = [];
        this.questions = [
            {
                description: '??Cual es la capital de Argentina?',
                answers: [
                    { name: 'Buenos Aires', isCorrect: 1 },
                    { name: 'Mar del Plata', isCorrect: 0 },
                    { name: 'Lima', isCorrect: 0 },
                    { name: 'Montevideo', isCorrect: 0 },
                ],
            },
            {
                description: '??Cual es la capital de Francia?',
                answers: [
                    { name: 'Roma', isCorrect: 0 },
                    { name: 'Paris', isCorrect: 1 },
                    { name: 'Dublin', isCorrect: 0 },
                    { name: 'Atenas', isCorrect: 0 },
                ],
            },
            {
                description: '??Cual es la capital de Egipto?',
                answers: [
                    { name: 'Londres', isCorrect: 0 },
                    { name: 'Berlin', isCorrect: 0 },
                    { name: 'El Cairo', isCorrect: 1 },
                    { name: 'Casablanca', isCorrect: 0 },
                ],
            },
        ];
    }
    getQuestions() {
        return this.questions.slice();
    }
}
QuestionService.??fac = function QuestionService_Factory(t) { return new (t || QuestionService)(); };
QuestionService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: QuestionService, factory: QuestionService.??fac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map