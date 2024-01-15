"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[622],{"./src/components/form/form-login/FormLogin.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FormLogin_stories});__webpack_require__("./node_modules/react/index.js");var index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),yup_index_esm=__webpack_require__("./node_modules/yup/index.esm.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),yup=__webpack_require__("./node_modules/@hookform/resolvers/yup/dist/yup.mjs"),Input=__webpack_require__("./src/components/input/Input.tsx"),form_styled_components=__webpack_require__("./src/components/form/form-styled-components.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}yup_index_esm.i_({mixed:{required:"form.validation.is_required",default:"form.validation.is_not_valid"},string:{email:"form.validation.email_invalid"}});var schema=yup_index_esm.Ry({email:yup_index_esm.Z_().required().email(),password:yup_index_esm.Z_().required()}).required(),FormLoginTranslated=function FormLoginTranslated(_ref){var _errors$email,_errors$password,onSubmitHandler=_ref.onSubmitHandler,t=(0,es.$G)().t,_useForm=(0,index_esm.cI)({mode:"onChange",defaultValues:{email:"",password:""},resolver:(0,yup.X)(schema)}),handleSubmit=_useForm.handleSubmit,reset=_useForm.reset,control=_useForm.control,errors=_useForm.formState.errors;return(0,jsx_runtime.jsxs)(form_styled_components.tN,{onSubmit:handleSubmit((function customHandleSubmit(values){onSubmitHandler(values),console.log("values: ",values),reset()})),children:[(0,jsx_runtime.jsxs)(form_styled_components.lQ,{className:"form--item",children:[(0,jsx_runtime.jsx)(index_esm.Qr,{name:"email",control,render:function render(_ref2){var field=_ref2.field;return(0,jsx_runtime.jsx)(Input.Z,_objectSpread({placeholder:t("form.email")},field))}}),errors.email&&(0,jsx_runtime.jsx)(form_styled_components.ot,{className:"form--error",children:t(null===(_errors$email=errors.email)||void 0===_errors$email?void 0:_errors$email.message)})]}),(0,jsx_runtime.jsxs)(form_styled_components.lQ,{className:"form--item",children:[(0,jsx_runtime.jsx)(index_esm.Qr,{name:"password",control,render:function render(_ref3){var field=_ref3.field;return(0,jsx_runtime.jsx)(Input.Z,_objectSpread({placeholder:t("form.password")},field))}}),errors.password&&(0,jsx_runtime.jsx)(form_styled_components.ot,{className:"form--error",children:t(null===(_errors$password=errors.password)||void 0===_errors$password?void 0:_errors$password.message)})]}),(0,jsx_runtime.jsx)("input",{className:"button button--primary button--medium",type:"submit",value:t("form.login")})]})};FormLoginTranslated.displayName="FormLoginTranslated";var _Default$parameters,_Default$parameters2;function FormLogin_stories_typeof(o){return FormLogin_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},FormLogin_stories_typeof(o)}function FormLogin_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function FormLogin_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?FormLogin_stories_ownKeys(Object(t),!0).forEach((function(r){FormLogin_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):FormLogin_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function FormLogin_stories_defineProperty(obj,key,value){return(key=function FormLogin_stories_toPropertyKey(arg){var key=function FormLogin_stories_toPrimitive(input,hint){if("object"!==FormLogin_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==FormLogin_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===FormLogin_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const FormLogin_stories={title:"Forms/Login form",component:(0,es.Zh)()(FormLoginTranslated),argTypes:{onSubmitHandler:{action:"submited"}}};var Default={args:{}};Default.parameters=FormLogin_stories_objectSpread(FormLogin_stories_objectSpread({},Default.parameters),{},{docs:FormLogin_stories_objectSpread(FormLogin_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:FormLogin_stories_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});var __namedExportsOrder=["Default"]},"./src/components/form/form-styled-components.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{lQ:()=>FormItemStyled,ot:()=>FormErrorStyled,tN:()=>FormStyled});var _templateObject,_templateObject2,_templateObject3,styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var FormStyled=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.form(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  display: grid;\n  row-gap: 2em;\n  justify-content: center;\n"]))),FormItemStyled=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  position: relative;\n  width: 280px;\n"]))),FormErrorStyled=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  position: absolute;\n  top: 44px;\n  left: 12px;\n  color: red;\n  font-size: x-small;\n"])))},"./src/components/input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");var InputStyled=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.input(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  width: ",";\n  padding: ",";\n  outline: none;\n  background: transparent;\n  border: 1px solid var(--active-color);\n  border-radius: 2px;\n  color: grey;\n  max-width: 280px;\n  font-size: ",";\n"])),(function(_ref){return"radio"===_ref.$type?"auto":"100%"}),(function(_ref2){var $size=_ref2.$size;return"small"===$size?"10px 16px":"large"===$size?"12px 24px":"11px 20px"}),(function(_ref3){var $size=_ref3.$size;return"small"===$size?"12px":"large"===$size?"16px":"14px"})),Input=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref4,ref){var _ref4$type=_ref4.type,type=void 0===_ref4$type?"search":_ref4$type,_ref4$id=_ref4.id,id=void 0===_ref4$id?"":_ref4$id,_ref4$name=_ref4.name,name=void 0===_ref4$name?"":_ref4$name,_ref4$className=_ref4.className,className=void 0===_ref4$className?"":_ref4$className,_ref4$placeholder=_ref4.placeholder,placeholder=void 0===_ref4$placeholder?"type model text":_ref4$placeholder,_ref4$value=_ref4.value,value=void 0===_ref4$value?"":_ref4$value,_ref4$size=_ref4.size,size=void 0===_ref4$size?"medium":_ref4$size,_ref4$disabled=_ref4.disabled,disabled=void 0!==_ref4$disabled&&_ref4$disabled,_ref4$required=_ref4.required,required=void 0!==_ref4$required&&_ref4$required,_ref4$checked=_ref4.checked,checked=void 0!==_ref4$checked&&_ref4$checked,_onChange=_ref4.onChange,onFocus=_ref4.onFocus,onBlur=_ref4.onBlur;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(InputStyled,{$type:type,$size:size,id,className:"input ".concat(className," input--").concat(size),name,type,value,disabled,required,checked,placeholder,onChange:function onChange(e){return _onChange(e)},onFocus,onBlur})}));Input.displayName="Input";const __WEBPACK_DEFAULT_EXPORT__=Input;try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{type:{defaultValue:{value:"search"},description:"",name:"type",required:!1,type:{name:"string"}},id:{defaultValue:{value:""},description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"type model text"},description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"TCustomValue"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: ChangeEvent<HTMLInputElement>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}}}]);