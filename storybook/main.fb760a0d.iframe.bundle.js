(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[179],{"./.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});var es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),i18next=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),esm=__webpack_require__("./node_modules/i18next-http-backend/esm/index.js"),i18nextBrowserLanguageDetector=__webpack_require__("./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var ns=["common"],supportedLngs=["en","ru"],resources=ns.reduce((function(acc,n){return supportedLngs.forEach((function(lng){acc[lng]||(acc[lng]={}),acc[lng]=_objectSpread(_objectSpread({},acc[lng]),{},_defineProperty({},n,__webpack_require__("./src/translations sync recursive ^\\.\\/.*\\.json$")("./".concat(lng,"/").concat(n,".json"))))})),acc}),{});i18next.ZP.use(es.Db).use(i18nextBrowserLanguageDetector.Z).use(esm.Z).init({lng:"en",fallbackLng:"en",defaultNS:"common",ns,interpolation:{escapeValue:!1},supportedLngs,resources});const _storybook_preview={parameters:{i18n:i18next.ZP,actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},globals:{locale:"ru",locales:{en:{title:"English",left:"🇺🇸"},ru:{title:"Russian",left:"🇷🇺"}}}}},"./src/translations sync recursive ^\\.\\/.*\\.json$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./en/common.json":"./src/translations/en/common.json","./ru/common.json":"./src/translations/ru/common.json"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src/translations sync recursive ^\\.\\/.*\\.json$"},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":module=>{function webpackEmptyAsyncContext(req){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=()=>[],webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackEmptyAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/button/Button.stories":["./src/components/button/Button.stories.jsx",389],"./components/button/Button.stories.jsx":["./src/components/button/Button.stories.jsx",389],"./components/card/Card.stories":["./src/components/card/Card.stories.jsx",771],"./components/card/Card.stories.jsx":["./src/components/card/Card.stories.jsx",771],"./components/cart-button/CartButton.stories":["./src/components/cart-button/CartButton.stories.jsx",574],"./components/cart-button/CartButton.stories.jsx":["./src/components/cart-button/CartButton.stories.jsx",574],"./components/cart-item/CartItem.stories":["./src/components/cart-item/CartItem.stories.jsx",422],"./components/cart-item/CartItem.stories.jsx":["./src/components/cart-item/CartItem.stories.jsx",422],"./components/form/form-edit/FormEdit.stories":["./src/components/form/form-edit/FormEdit.stories.tsx",642,717,563],"./components/form/form-edit/FormEdit.stories.tsx":["./src/components/form/form-edit/FormEdit.stories.tsx",642,717,563],"./components/form/form-login/FormLogin.stories":["./src/components/form/form-login/FormLogin.stories.tsx",642,717,622],"./components/form/form-login/FormLogin.stories.tsx":["./src/components/form/form-login/FormLogin.stories.tsx",642,717,622],"./components/form/form-profile/FormProfile.stories":["./src/components/form/form-profile/FormProfile.stories.tsx",642,717,704],"./components/form/form-profile/FormProfile.stories.tsx":["./src/components/form/form-profile/FormProfile.stories.tsx",642,717,704],"./components/form/form-signup/FormSignup.stories":["./src/components/form/form-signup/FormSignup.stories.tsx",642,717,475],"./components/form/form-signup/FormSignup.stories.tsx":["./src/components/form/form-signup/FormSignup.stories.tsx",642,717,475],"./components/header/Header.stories":["./src/components/header/Header.stories.jsx",32],"./components/header/Header.stories.jsx":["./src/components/header/Header.stories.jsx",32],"./components/input/Input.stories":["./src/components/input/Input.stories.tsx",642,677],"./components/input/Input.stories.tsx":["./src/components/input/Input.stories.tsx",642,677],"./components/layout/Layout.stories":["./src/components/layout/Layout.stories.jsx",2],"./components/layout/Layout.stories.jsx":["./src/components/layout/Layout.stories.jsx",2],"./components/logo/Logo.stories":["./src/components/logo/Logo.stories.jsx",698],"./components/logo/Logo.stories.jsx":["./src/components/logo/Logo.stories.jsx",698],"./components/modal-wrapper/ModalWrapper.stories":["./src/components/modal-wrapper/ModalWrapper.stories.tsx",642,356],"./components/modal-wrapper/ModalWrapper.stories.tsx":["./src/components/modal-wrapper/ModalWrapper.stories.tsx",642,356],"./components/modal/Modal.stories":["./src/components/modal/Modal.stories.jsx",707],"./components/modal/Modal.stories.jsx":["./src/components/modal/Modal.stories.jsx",707],"./components/page/Page.stories":["./src/components/page/Page.stories.jsx",279],"./components/page/Page.stories.jsx":["./src/components/page/Page.stories.jsx",279],"./components/select/Select.stories":["./src/components/select/Select.stories.tsx",642,993],"./components/select/Select.stories.tsx":["./src/components/select/Select.stories.tsx",642,993],"./components/switch/Switch.stories":["./src/components/switch/Switch.stories.jsx",143],"./components/switch/Switch.stories.jsx":["./src/components/switch/Switch.stories.jsx",143]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/preview.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./node_modules/storybook-react-i18next/dist/preview.mjs"),__webpack_require__("./.storybook/preview.ts")])})},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__},"?4f7e":()=>{},"./src/translations/en/common.json":module=>{"use strict";module.exports=JSON.parse('{"open-modal":"Open modal","type-modal-text":"Type modal text","add-to-cart":"Add to cart","rub":"rub.","ru":"Ru","en":"En","form":{"name":"Name","surname":"Surname","age":"Age","gender":"Gender","phone":"Phone","email":"E-mail","category":"Category","cake-name":"Cake name","priceOld":"Old price","price":"New price","description":"Description","imageUrl":"Image URL","password":"Password","password2":"Repeat password","save":"Save","send":"Send","login":"Login","singup":"Sign Up","validation":{"is_required":"is required","is_not_valid":"is not valid","the_min_age_is_18":"The min age is 18","password_missmatch":"Passwords must match","phone_invalid":"Phone number is not valid","email_invalid":"Email must be valid"}}}')},"./src/translations/ru/common.json":module=>{"use strict";module.exports=JSON.parse('{"open-modal":"Открыть модальное окно","type-modal-text":"Текст для модального окна","add-to-cart":"В корзину","rub":"руб.","ru":"Рус.","en":"Англ.","form":{"name":"Имя","surname":"Фамилия","age":"Возраст","gender":"Пол","phone":"Телефон","email":"Эл. почта","category":"Категория","cake-name":"Название","priceOld":"Старая цена","price":"Новая цена","description":"Описание","imageUrl":"Ссылка на изображение","password":"Пароль","password2":"Пароль ещё раз","save":"Сохранить","send":"Отправить","login":"Войти","singup":"Регистрация","validation":{"is_required":"является обязательным","is_not_valid":"не валидно","the_min_age_is_18":"Минимальный возраст - 18 лет","password_missmatch":"Пароли должны совпадать","phone_invalid":"Номер телефона неверный","email_invalid":"Неверный адрес почты"}}}')}},__webpack_require__=>{__webpack_require__.O(0,[269],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);