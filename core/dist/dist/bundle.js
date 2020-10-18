(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Core"] = factory();
	else
		root["Core"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Controllers/QuestionnaireController.ts":
/*!************************************************!*\
  !*** ./Controllers/QuestionnaireController.ts ***!
  \************************************************/
/*! exports provided: getById, getAll, add, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _Services_QuestionnaireService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/QuestionnaireService */ "./Services/QuestionnaireService.ts");

async function getById(request) {
    return _Services_QuestionnaireService__WEBPACK_IMPORTED_MODULE_0__["getById"](parseInt(request.queryStringParameters.id));
}
async function getAll() {
    return _Services_QuestionnaireService__WEBPACK_IMPORTED_MODULE_0__["getAll"]();
}
async function add(request) {
    let body = request.body;
    return _Services_QuestionnaireService__WEBPACK_IMPORTED_MODULE_0__["add"](body.priority, body.title, body.description);
}
async function remove(request) {
    return _Services_QuestionnaireService__WEBPACK_IMPORTED_MODULE_0__["remove"](parseInt(request.queryStringParameters.id));
}


/***/ }),

/***/ "./Repository/AnswerRepository.ts":
/*!****************************************!*\
  !*** ./Repository/AnswerRepository.ts ***!
  \****************************************/
/*! exports provided: getById, getAllByQuestionId, add, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllByQuestionId", function() { return getAllByQuestionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Database/DatabaseService */ "./Services/Database/DatabaseService.ts");
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");


async function getById(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].ANSWER.GET_BY_ID(id));
}
async function getAllByQuestionId(questionId) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].ANSWER.GET_ALL_BY_QUESTION_ID(questionId));
}
async function add(question_id, priority, scale_value, text, image_url) {
    const query = _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].ANSWER.ADD(question_id, priority, scale_value, text, image_url);
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](query);
}
async function remove(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].ANSWER.DELETE(id));
}


/***/ }),

/***/ "./Repository/CategoryRepository.ts":
/*!******************************************!*\
  !*** ./Repository/CategoryRepository.ts ***!
  \******************************************/
/*! exports provided: add, remove, getAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony import */ var _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Database/DatabaseService */ "./Services/Database/DatabaseService.ts");
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");


async function add(text) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].CATEGORY.ADD(text));
}
async function remove(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].CATEGORY.DELETE(id));
}
async function getAll() {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].CATEGORY.GET_ALL());
}


/***/ }),

/***/ "./Repository/CommentRepository.ts":
/*!*****************************************!*\
  !*** ./Repository/CommentRepository.ts ***!
  \*****************************************/
/*! exports provided: getById, getUnapprovedComments, approveComment, getAllByPostId, add, remove, getActivityOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnapprovedComments", function() { return getUnapprovedComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approveComment", function() { return approveComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllByPostId", function() { return getAllByPostId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityOf", function() { return getActivityOf; });
/* harmony import */ var _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Database/DatabaseService */ "./Services/Database/DatabaseService.ts");
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");


async function getById(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].COMMENT.GET_BY_ID(id));
}
async function getUnapprovedComments() {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].COMMENT.GET_UNAPPROVED_COMMENTS());
}
async function approveComment(commentId) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].COMMENT.APPROVE_COMMENT(commentId));
}
async function getAllByPostId(post_id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].COMMENT.GET_BY_POST_ID(post_id));
}
async function add(user_internal_id, post_id, text) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].COMMENT.ADD(user_internal_id, post_id, text));
}
async function remove(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].COMMENT.DELETE(id));
}
async function getActivityOf(user_internal_id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].COMMENT.GET_ACTIVITY_OF(user_internal_id));
}


/***/ }),

/***/ "./Repository/NotificationsRepository.ts":
/*!***********************************************!*\
  !*** ./Repository/NotificationsRepository.ts ***!
  \***********************************************/
/*! exports provided: getForUserId, addNotificationForUserWithId, addAlertForAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getForUserId", function() { return getForUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNotificationForUserWithId", function() { return addNotificationForUserWithId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAlertForAll", function() { return addAlertForAll; });
/* harmony import */ var _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Database/DatabaseService */ "./Services/Database/DatabaseService.ts");
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");


async function getForUserId(userInternalId) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].NOTIFICATION.GET_FOR_USER_ID(userInternalId));
}
async function addNotificationForUserWithId(userInternalId, message, type, info) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].NOTIFICATION.ADD_FOR_USER(userInternalId, message, type, info));
}
async function addAlertForAll(message, info) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].NOTIFICATION.ADD_ALERT_FOR_ALL(message, info));
}


/***/ }),

/***/ "./Repository/PostRepository.ts":
/*!**************************************!*\
  !*** ./Repository/PostRepository.ts ***!
  \**************************************/
/*! exports provided: getById, add, remove, getPostsBySubscriptionAndOrdered, getAll, getAllByCategoryId, count, getActivityOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsBySubscriptionAndOrdered", function() { return getPostsBySubscriptionAndOrdered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllByCategoryId", function() { return getAllByCategoryId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count", function() { return count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityOf", function() { return getActivityOf; });
/* harmony import */ var _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Database/DatabaseService */ "./Services/Database/DatabaseService.ts");
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");


async function getById(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].POST.GET_BY_ID(id));
}
async function add(user_internal_id, post_category_id, text, priority) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].POST.ADD(user_internal_id, post_category_id, text, priority));
}
async function remove(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].POST.DELETE(id));
}
async function getPostsBySubscriptionAndOrdered(email) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].POST.GET_ALL_BY_SUBSCRIPTION_AND_ORDERED(email));
}
async function getAll() {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].POST.GET_ALL());
}
async function getAllByCategoryId(category_id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].POST.GET_ALL_BY_CATEGORY_ID(category_id));
}
async function count() {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].POST.COUNT());
}
async function getActivityOf(user_internal_id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].POST.GET_ACTIVITY_OF(user_internal_id));
}


/***/ }),

/***/ "./Repository/PostTagRepository.ts":
/*!*****************************************!*\
  !*** ./Repository/PostTagRepository.ts ***!
  \*****************************************/
/*! exports provided: getById, add, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Database/DatabaseService */ "./Services/Database/DatabaseService.ts");
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");


async function getById(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].POST_TAG.GET_BY_ID(id));
}
async function add(tag_id, post_id, interest) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].POST_TAG.ADD(tag_id, post_id, interest));
}
async function remove(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].POST_TAG.DELETE(id));
}


/***/ }),

/***/ "./Repository/QuestionRepository.ts":
/*!******************************************!*\
  !*** ./Repository/QuestionRepository.ts ***!
  \******************************************/
/*! exports provided: getById, getAllByQuestionnaireId, add, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllByQuestionnaireId", function() { return getAllByQuestionnaireId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Database/DatabaseService */ "./Services/Database/DatabaseService.ts");
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");


async function getById(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].QUESTION.GET_BY_ID(id));
}
async function getAllByQuestionnaireId(questionnaireId) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].QUESTION.GET_BY_QUESTIONNAIRE_ID(questionnaireId));
}
async function add(questionnaire_id, question_type, multiple_answers, title, description) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].QUESTION.ADD(questionnaire_id, question_type, multiple_answers, title, description));
}
async function remove(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].QUESTION.DELETE(id));
}


/***/ }),

/***/ "./Repository/QuestionTagRepository.ts":
/*!*********************************************!*\
  !*** ./Repository/QuestionTagRepository.ts ***!
  \*********************************************/
/*! exports provided: getById, add, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Database/DatabaseService */ "./Services/Database/DatabaseService.ts");
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");


async function getById(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].QUESTION_TAG.GET_BY_ID(id));
}
async function add(tag_id, question_id, interest) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].QUESTION_TAG.ADD(tag_id, question_id, interest));
}
async function remove(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].QUESTION_TAG.DELETE(id));
}


/***/ }),

/***/ "./Repository/QuestionnaireRepository.ts":
/*!***********************************************!*\
  !*** ./Repository/QuestionnaireRepository.ts ***!
  \***********************************************/
/*! exports provided: getById, getAll, getComputedQuestionnaireList, getAnsweredQuestionnaireList, add, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedQuestionnaireList", function() { return getComputedQuestionnaireList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnsweredQuestionnaireList", function() { return getAnsweredQuestionnaireList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Database/DatabaseService */ "./Services/Database/DatabaseService.ts");
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");


async function getById(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].QUESTIONNAIRE.GET_BY_ID(id));
}
async function getAll() {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].QUESTIONNAIRE.GET_ALL());
}
async function getComputedQuestionnaireList(email) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].QUESTIONNAIRE.GET_ALL_QUESTIONNAIRES_BY_USER_AND_ORDERED(email));
}
async function getAnsweredQuestionnaireList(email) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].QUESTIONNAIRE.GET_ANSWERED_QUESTIONNAIRE_LIST(email));
}
async function add(priority, title, description) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].QUESTIONNAIRE.ADD(priority, title, description));
}
async function remove(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].QUESTIONNAIRE.DELETE(id));
}


/***/ }),

/***/ "./Repository/QuestionnaireTagRepository.ts":
/*!**************************************************!*\
  !*** ./Repository/QuestionnaireTagRepository.ts ***!
  \**************************************************/
/*! exports provided: getById, add, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Database/DatabaseService */ "./Services/Database/DatabaseService.ts");
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");


async function getById(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].QUESTIONNAIRE_TAG.GET_BY_ID(id));
}
async function add(tag_id, questionnaire_id, interest) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].QUESTIONNAIRE_TAG.ADD(tag_id, questionnaire_id, interest));
}
async function remove(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].QUESTIONNAIRE_TAG.DELETE(id));
}


/***/ }),

/***/ "./Repository/ReactionRepository.ts":
/*!******************************************!*\
  !*** ./Repository/ReactionRepository.ts ***!
  \******************************************/
/*! exports provided: getById, getAllByPostId, add, remove, getActivityOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllByPostId", function() { return getAllByPostId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityOf", function() { return getActivityOf; });
/* harmony import */ var _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Database/DatabaseService */ "./Services/Database/DatabaseService.ts");
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");


async function getById(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].REACTION.GET_BY_ID(id));
}
async function getAllByPostId(post_id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].REACTION.GET_BY_POST_ID(post_id));
}
async function add(user_internal_id, post_id, reaction) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].REACTION.ADD(user_internal_id, post_id, reaction));
}
async function remove(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].REACTION.DELETE(id));
}
async function getActivityOf(user_internal_id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].REACTION.GET_ACTIVITY_OF(user_internal_id));
}


/***/ }),

/***/ "./Repository/ResourceRepository.ts":
/*!******************************************!*\
  !*** ./Repository/ResourceRepository.ts ***!
  \******************************************/
/*! exports provided: getById, getAllByPostId, add, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllByPostId", function() { return getAllByPostId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Database/DatabaseService */ "./Services/Database/DatabaseService.ts");
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");


async function getById(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].RESOURCE.GET_BY_ID(id));
}
async function getAllByPostId(post_id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].RESOURCE.GET_BY_POST_ID(post_id));
}
async function add(post_id, resource, type) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].RESOURCE.ADD(post_id, resource, type));
}
async function remove(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].RESOURCE.DELETE(id));
}


/***/ }),

/***/ "./Repository/SubscriptionRepository.ts":
/*!**********************************************!*\
  !*** ./Repository/SubscriptionRepository.ts ***!
  \**********************************************/
/*! exports provided: getAll, getById, add, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Database/DatabaseService */ "./Services/Database/DatabaseService.ts");
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");


async function getAll() {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].SUBSCRIPTION.GET_ALL());
}
async function getById(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].SUBSCRIPTION.GET_BY_ID(id));
}
async function add(name, description, post_limit, questionnaire_limit, comments_active, reactions_active, support, price) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].SUBSCRIPTION.ADD(name, description, post_limit, questionnaire_limit, comments_active, reactions_active, support, price));
}
async function remove(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].SUBSCRIPTION.DELETE(id));
}


/***/ }),

/***/ "./Repository/TagRepository.ts":
/*!*************************************!*\
  !*** ./Repository/TagRepository.ts ***!
  \*************************************/
/*! exports provided: getById, getAll, add, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Database/DatabaseService */ "./Services/Database/DatabaseService.ts");
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");


async function getById(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].TAG.GET_BY_ID(id));
}
async function getAll() {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].TAG.GET_ALL());
}
async function add(name) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].TAG.ADD(name));
}
async function remove(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].TAG.DELETE(id));
}


/***/ }),

/***/ "./Repository/UserAnswerRepository.ts":
/*!********************************************!*\
  !*** ./Repository/UserAnswerRepository.ts ***!
  \********************************************/
/*! exports provided: getById, add, remove, getActivityOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityOf", function() { return getActivityOf; });
/* harmony import */ var _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Database/DatabaseService */ "./Services/Database/DatabaseService.ts");
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");


async function getById(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].USER_ANSWER.GET_BY_ID(id));
}
async function add(user_internal_id, question_id, answer_id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].USER_ANSWER.ADD(user_internal_id, question_id, answer_id));
}
async function remove(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].USER_ANSWER.DELETE(id));
}
async function getActivityOf(user_internal_id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].USER_ANSWER.GET_ACTIVITY_OF(user_internal_id));
}


/***/ }),

/***/ "./Repository/UserRepository.ts":
/*!**************************************!*\
  !*** ./Repository/UserRepository.ts ***!
  \**************************************/
/*! exports provided: getById, getByUserInternalId, getByEmail, changeActiveStatus, changeSubscription, add, editDetails, remove, getShallowUsersByIds, getAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getByUserInternalId", function() { return getByUserInternalId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getByEmail", function() { return getByEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeActiveStatus", function() { return changeActiveStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSubscription", function() { return changeSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editDetails", function() { return editDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShallowUsersByIds", function() { return getShallowUsersByIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony import */ var _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Database/DatabaseService */ "./Services/Database/DatabaseService.ts");
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");


async function getById(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].USER.GET_BY_ID(id));
}
async function getByUserInternalId(user_internal_id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].USER.GET_BY_USER_INTERNAL_ID(user_internal_id));
}
async function getByEmail(email) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].USER.GET_BY_EMAIL(email));
}
async function changeActiveStatus(user_internal_id, active_status) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].USER.CHANGE_ACTIVE_STATUS(user_internal_id, active_status));
}
async function changeSubscription(subscription_id, user_email) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].USER.CHANGE_SUBSCRIPTION(subscription_id, user_email));
}
async function add(subscription_id, type, email, username, first_name, last_name, address, city, country, zip_code, theme) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].USER.ADD(subscription_id, type, email, username, first_name, last_name, address, city, country, zip_code, theme));
}
async function editDetails(email, new_email, first_name, last_name, city, country, zip_code) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].USER.EDIT_DETAILS(email, new_email, first_name, last_name, city, country, zip_code));
}
async function remove(id) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].USER.DELETE(id));
}
async function getShallowUsersByIds(ids) {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].USER.GET_SHALLOW_USERS_BY_IDS(ids));
}
async function getAll() {
    return _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_0__["executeQuery"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES"].USER.GET_ALL());
}


/***/ }),

/***/ "./Services/Database/DatabaseCreatorService.ts":
/*!*****************************************************!*\
  !*** ./Services/Database/DatabaseCreatorService.ts ***!
  \*****************************************************/
/*! exports provided: checkIfSchemaExists, createSchemaIfMissing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIfSchemaExists", function() { return checkIfSchemaExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSchemaIfMissing", function() { return createSchemaIfMissing; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DatabaseService */ "./Services/Database/DatabaseService.ts");



const filePath = path__WEBPACK_IMPORTED_MODULE_1__["resolve"](path__WEBPACK_IMPORTED_MODULE_1__["join"](__dirname, '../../sql/create_social_media_db.sql'));
const SCHEMA_EXISTS_QUERY = 'SELECT schema_name FROM information_schema.schemata WHERE schema_name = \'social_media_db\';';
let SCHEMA_EXISTS = false;
async function checkIfSchemaExists() {
    if (SCHEMA_EXISTS) {
        return SCHEMA_EXISTS;
    }
    await _DatabaseService__WEBPACK_IMPORTED_MODULE_2__["executeQuery"](SCHEMA_EXISTS_QUERY);
    SCHEMA_EXISTS = true;
    return true;
}
async function createSchemaIfMissing() {
    if (await checkIfSchemaExists()) {
        return;
    }
    let data = await fs__WEBPACK_IMPORTED_MODULE_0__["promises"].readFile(filePath, { encoding: 'utf8' });
    await _DatabaseService__WEBPACK_IMPORTED_MODULE_2__["executeQuery"](data);
}

/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./Services/Database/DatabaseService.ts":
/*!**********************************************!*\
  !*** ./Services/Database/DatabaseService.ts ***!
  \**********************************************/
/*! exports provided: executeQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeQuery", function() { return executeQuery; });
/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ "./node_modules/pg/lib/index.js");
/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);

const client = new pg__WEBPACK_IMPORTED_MODULE_0__["Client"]({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'postgres',
    password: process.env.DB_PASS || '1234',
    port: 5432
});
client.connect(function (err) {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});
function executeQuery(query) {
    return new Promise(((resolve, reject) => {
        client.query(query)
            .then(resolve)
            .catch((error) => {
            console.error(query, error);
            resolve(error);
            //reject(error);
        });
    }));
}


/***/ }),

/***/ "./Services/NotificationsService.ts":
/*!******************************************!*\
  !*** ./Services/NotificationsService.ts ***!
  \******************************************/
/*! exports provided: NotificationError, getForUserWithId, addNotification, addAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationError", function() { return NotificationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getForUserWithId", function() { return getForUserWithId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNotification", function() { return addNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAlert", function() { return addAlert; });
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");
/* harmony import */ var _Repository_NotificationsRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Repository/NotificationsRepository */ "./Repository/NotificationsRepository.ts");


class NotificationError extends Error {
    constructor(status, error) {
        super(error);
        this.status = status;
        this.error = error;
    }
}
async function getForUserWithId(userInternalId) {
    const response = await _Repository_NotificationsRepository__WEBPACK_IMPORTED_MODULE_1__["getForUserId"](userInternalId);
    if (response.rowCount === 0) {
        throw new NotificationError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGES"].NOT_FOUND.NOTIFICATION);
    }
    return response.rows;
}
async function addNotification(userInternalId, message, type, info) {
    await _Repository_NotificationsRepository__WEBPACK_IMPORTED_MODULE_1__["addNotificationForUserWithId"](userInternalId, message, type, info);
}
async function addAlert(message, info) {
    await _Repository_NotificationsRepository__WEBPACK_IMPORTED_MODULE_1__["addAlertForAll"](message, info);
}


/***/ }),

/***/ "./Services/PostService.ts":
/*!*********************************!*\
  !*** ./Services/PostService.ts ***!
  \*********************************/
/*! exports provided: PostError, getById, getAllByCategoryId, getComputedPostList, createPost, getUnapprovedComments, approveComment, deleteComment, getCategories, getTags, createCategory, reactionAddHandle, reactionDeleteHandle, commentAddHandle, commentDeleteHandle, add, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostError", function() { return PostError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllByCategoryId", function() { return getAllByCategoryId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedPostList", function() { return getComputedPostList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPost", function() { return createPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnapprovedComments", function() { return getUnapprovedComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approveComment", function() { return approveComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteComment", function() { return deleteComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTags", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCategory", function() { return createCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactionAddHandle", function() { return reactionAddHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactionDeleteHandle", function() { return reactionDeleteHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentAddHandle", function() { return commentAddHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentDeleteHandle", function() { return commentDeleteHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _Repository_PostRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Repository/PostRepository */ "./Repository/PostRepository.ts");
/* harmony import */ var _Repository_PostTagRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Repository/PostTagRepository */ "./Repository/PostTagRepository.ts");
/* harmony import */ var _Repository_TagRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Repository/TagRepository */ "./Repository/TagRepository.ts");
/* harmony import */ var _Repository_CategoryRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Repository/CategoryRepository */ "./Repository/CategoryRepository.ts");
/* harmony import */ var _Repository_ResourceRepository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Repository/ResourceRepository */ "./Repository/ResourceRepository.ts");
/* harmony import */ var _Repository_CommentRepository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Repository/CommentRepository */ "./Repository/CommentRepository.ts");
/* harmony import */ var _Repository_ReactionRepository__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Repository/ReactionRepository */ "./Repository/ReactionRepository.ts");
/* harmony import */ var _Repository_UserRepository__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Repository/UserRepository */ "./Repository/UserRepository.ts");
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UserService */ "./Services/UserService.ts");










class PostError extends Error {
    constructor(status, error) {
        super(error);
        this.status = status;
        this.error = error;
    }
}
async function getById(id) {
    const response = await _Repository_PostRepository__WEBPACK_IMPORTED_MODULE_0__["getById"](id);
    let rowCount = response.rowCount;
    if (rowCount === 0) {
        throw new PostError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_8__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_8__["MESSAGES"].NOT_FOUND.QUESTIONNAIRE);
    }
    return response.rows[0];
}
async function getAllByCategoryId(userEmail, categoryId) {
    const posts = await _Repository_PostRepository__WEBPACK_IMPORTED_MODULE_0__["getPostsBySubscriptionAndOrdered"](userEmail);
    let rowCount = posts.rowCount;
    if (rowCount === 0) {
        throw new PostError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_8__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_8__["MESSAGES"].NOT_FOUND.POST);
    }
    let validPosts = posts.rows.filter((post) => post.post_category_id == categoryId);
    let user_internal_id = await Object(_UserService__WEBPACK_IMPORTED_MODULE_9__["getUserInternalIdBy"])(userEmail);
    return computePostDetails(validPosts, user_internal_id);
}
async function getComputedPostList(userEmail) {
    const posts = await _Repository_PostRepository__WEBPACK_IMPORTED_MODULE_0__["getPostsBySubscriptionAndOrdered"](userEmail);
    let rowCount = posts.rowCount;
    if (rowCount === 0) {
        throw new PostError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_8__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_8__["MESSAGES"].NOT_FOUND.POST);
    }
    let user_internal_id = await Object(_UserService__WEBPACK_IMPORTED_MODULE_9__["getUserInternalIdBy"])(userEmail);
    return computePostDetails(posts.rows, user_internal_id);
}
async function createPost(userEmail, body) {
    if (!(await Object(_UserService__WEBPACK_IMPORTED_MODULE_9__["currentUserIsAdmin"])(userEmail))) {
        return {
            statusCode: 403,
            body: "User has no right to call this API."
        };
    }
    let user_internal_id = await Object(_UserService__WEBPACK_IMPORTED_MODULE_9__["getUserInternalIdBy"])(userEmail);
    let category_id = body.category_id;
    let text = body.text;
    let priority = body.priority;
    let response = await _Repository_PostRepository__WEBPACK_IMPORTED_MODULE_0__["add"](user_internal_id, category_id, text, priority);
    if (response.rowCount === 0) {
        throw new PostError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_8__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_8__["MESSAGES"].NOT_FOUND.COMMENT);
    }
    let postId = response.rows[0].id;
    let tags = body.tags;
    for (const tag of tags) {
        await _Repository_PostTagRepository__WEBPACK_IMPORTED_MODULE_1__["add"](tag.id, postId, tag.interest);
    }
    let innerHTML = body.innerHTML;
    let image = body.image;
    if (innerHTML && !image) {
        await _Repository_ResourceRepository__WEBPACK_IMPORTED_MODULE_4__["add"](postId, innerHTML, 'HTML');
    }
    else if (!innerHTML && image) {
        // SEND image to S3 and put the url into this
        await _Repository_ResourceRepository__WEBPACK_IMPORTED_MODULE_4__["add"](postId, 'https://www.vets4pets.com/siteassets/species/cat/close-up-of-cat-looking-up.jpg', 'IMAGE');
    }
    let postToBeReturned = await _Repository_PostRepository__WEBPACK_IMPORTED_MODULE_0__["getById"](postId);
    if (postToBeReturned.rowCount === 0) {
        throw new PostError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_8__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_8__["MESSAGES"].NOT_FOUND.COMMENT);
    }
    return postToBeReturned.rows[0];
}
async function getUnapprovedComments(userEmail) {
    if (!(await Object(_UserService__WEBPACK_IMPORTED_MODULE_9__["currentUserIsAdmin"])(userEmail))) {
        return {
            statusCode: 403,
            body: "User has no right to call this API."
        };
    }
    const comments = (await _Repository_CommentRepository__WEBPACK_IMPORTED_MODULE_5__["getUnapprovedComments"]()).rows;
    let userIds = Array.from(new Set(comments.map((comment) => comment.user_internal_id)));
    let shallowUsers = (await _Repository_UserRepository__WEBPACK_IMPORTED_MODULE_7__["getShallowUsersByIds"](userIds)).rows
        .map((user) => {
        return {
            ...user,
            user_internal_id: user.user_internal_id.toString()
        };
    });
    return {
        users: shallowUsers,
        comments: comments
    };
}
async function approveComment(userEmail, commentId) {
    if (!(await Object(_UserService__WEBPACK_IMPORTED_MODULE_9__["currentUserIsAdmin"])(userEmail))) {
        return {
            statusCode: 403,
            body: "User has no right to call this API."
        };
    }
    const response = await _Repository_CommentRepository__WEBPACK_IMPORTED_MODULE_5__["approveComment"](commentId);
    return {
        message: response.rowCount > 0 ? "Comment approved successfully" : "Comment couldn't be approved.",
        severity: response.rowCount > 0 ? "success" : "error"
    };
}
async function deleteComment(userEmail, commentId) {
    if (!(await Object(_UserService__WEBPACK_IMPORTED_MODULE_9__["currentUserIsAdmin"])(userEmail))) {
        return {
            statusCode: 403,
            body: "User has no right to call this API."
        };
    }
    const response = await _Repository_CommentRepository__WEBPACK_IMPORTED_MODULE_5__["remove"](commentId);
    return {
        message: response.rowCount > 0 ? "Comment deleted successfully" : "Comment couldn't be deleted.",
        severity: response.rowCount > 0 ? "success" : "error"
    };
}
async function computePostDetails(posts, user_internal_id) {
    let response = [];
    let postLength = posts.length;
    if (postLength === 0) {
        return {
            posts: [],
            totalPostCount: 0,
            users: []
        };
    }
    for (const post of posts) {
        let postId = post.id;
        let resources = (await _Repository_ResourceRepository__WEBPACK_IMPORTED_MODULE_4__["getAllByPostId"](postId)).rows;
        let comments = (await _Repository_CommentRepository__WEBPACK_IMPORTED_MODULE_5__["getAllByPostId"](postId)).rows;
        let reactions = (await _Repository_ReactionRepository__WEBPACK_IMPORTED_MODULE_6__["getAllByPostId"](postId)).rows;
        comments = comments.filter((comment) => comment.user_internal_id == user_internal_id || comment.visible);
        response.push({
            ...post,
            resources: resources,
            comments: comments,
            reactions: reactions
        });
    }
    let userIds = getUniqueUserInternalIdsFromPosts(response);
    let shallowUsers = (await _Repository_UserRepository__WEBPACK_IMPORTED_MODULE_7__["getShallowUsersByIds"](userIds)).rows
        .map((user) => {
        return {
            ...user,
            user_internal_id: user.user_internal_id.toString()
        };
    });
    const postCountResponse = await _Repository_PostRepository__WEBPACK_IMPORTED_MODULE_0__["count"]();
    if (postCountResponse.rowCount > 0) {
        postLength = postCountResponse.rows[0].count;
    }
    return {
        posts: response,
        totalPostCount: postLength,
        users: shallowUsers
    };
}
async function getCategories(userEmail) {
    const categories = await _Repository_CategoryRepository__WEBPACK_IMPORTED_MODULE_3__["getAll"]();
    let rowCount = categories.rowCount;
    return {
        categories: categories.rows
    };
}
async function getTags(userEmail) {
    const tags = await _Repository_TagRepository__WEBPACK_IMPORTED_MODULE_2__["getAll"]();
    let rowCount = tags.rowCount;
    return {
        tags: tags.rows
    };
}
async function createCategory(userEmail, categoryText) {
    if (!(await Object(_UserService__WEBPACK_IMPORTED_MODULE_9__["currentUserIsAdmin"])(userEmail))) {
        return {
            statusCode: 403,
            body: "User has no right to call this API."
        };
    }
    const categories = await _Repository_CategoryRepository__WEBPACK_IMPORTED_MODULE_3__["add"](categoryText);
    let rowCount = categories.rowCount;
    return {
        message: rowCount > 0 ? "Category added successfully!" : "Category adding failed!"
    };
}
async function reactionAddHandle(postId, body, userEmail) {
    let user_internal_id = await Object(_UserService__WEBPACK_IMPORTED_MODULE_9__["getUserInternalIdBy"])(userEmail);
    const response = await _Repository_ReactionRepository__WEBPACK_IMPORTED_MODULE_6__["add"](user_internal_id, body.post_id, body.reaction);
    if (response.code && response.code == 23505) {
        const reactionsByPost = await _Repository_ReactionRepository__WEBPACK_IMPORTED_MODULE_6__["getAllByPostId"](body.post_id);
        let reaction = reactionsByPost.rows.find((row) => row.user_internal_id == user_internal_id);
        return {
            reactionId: reaction.id
        };
    }
    return {
        reactionId: response.rows[0].id
    };
}
async function reactionDeleteHandle(post_id, reactionId) {
    const response = await _Repository_ReactionRepository__WEBPACK_IMPORTED_MODULE_6__["remove"](reactionId);
    return {
        deletedReactionsCount: response.rowCount
    };
}
async function commentAddHandle(postId, body, userEmail) {
    let user_internal_id = await Object(_UserService__WEBPACK_IMPORTED_MODULE_9__["getUserInternalIdBy"])(userEmail);
    const response = await _Repository_CommentRepository__WEBPACK_IMPORTED_MODULE_5__["add"](user_internal_id, body.post_id, body.comment);
    if (response.rowCount === 0) {
        throw new PostError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_8__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_8__["MESSAGES"].NOT_FOUND.COMMENT);
    }
    return {
        commentId: response.rows[0].id
    };
}
async function commentDeleteHandle(post_id, commentId) {
    const response = await _Repository_CommentRepository__WEBPACK_IMPORTED_MODULE_5__["remove"](commentId);
    return {
        deletedCommentsCount: response.rowCount
    };
}
function getUniqueUserInternalIdsFromPosts(posts) {
    let ids = [];
    posts.forEach((post) => {
        ids.push(post.user_internal_id);
        post.comments.map((comment) => comment.user_internal_id).forEach((id) => ids.push(id));
        post.reactions.map((reaction) => reaction.user_internal_id).forEach((id) => ids.push(id));
    });
    return Array.from(new Set(ids));
}
async function add(user_internal_id, post_category_id, text, priority) {
    let response = await _Repository_PostRepository__WEBPACK_IMPORTED_MODULE_0__["add"](user_internal_id, post_category_id, text, priority);
    return response.rows[0];
}
async function remove(id) {
    const response = await _Repository_PostRepository__WEBPACK_IMPORTED_MODULE_0__["remove"](id);
    if (response.rowCount === 0) {
        throw new PostError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_8__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_8__["MESSAGES"].NOT_FOUND.QUESTIONNAIRE);
    }
    return response.rows;
}


/***/ }),

/***/ "./Services/QuestionnaireService.ts":
/*!******************************************!*\
  !*** ./Services/QuestionnaireService.ts ***!
  \******************************************/
/*! exports provided: QuestionnaireError, getById, getAll, getComputedQuestionnaireList, createQuestionnaire, addUserAnswers, deleteQuestionnaire, add, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireError", function() { return QuestionnaireError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedQuestionnaireList", function() { return getComputedQuestionnaireList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQuestionnaire", function() { return createQuestionnaire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUserAnswers", function() { return addUserAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteQuestionnaire", function() { return deleteQuestionnaire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");
/* harmony import */ var _Repository_AnswerRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Repository/AnswerRepository */ "./Repository/AnswerRepository.ts");
/* harmony import */ var _Repository_QuestionRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Repository/QuestionRepository */ "./Repository/QuestionRepository.ts");
/* harmony import */ var _Repository_QuestionnaireRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Repository/QuestionnaireRepository */ "./Repository/QuestionnaireRepository.ts");
/* harmony import */ var _Repository_QuestionnaireTagRepository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Repository/QuestionnaireTagRepository */ "./Repository/QuestionnaireTagRepository.ts");
/* harmony import */ var _Repository_QuestionTagRepository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Repository/QuestionTagRepository */ "./Repository/QuestionTagRepository.ts");
/* harmony import */ var _Repository_UserAnswerRepository__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Repository/UserAnswerRepository */ "./Repository/UserAnswerRepository.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UserService */ "./Services/UserService.ts");








class QuestionnaireError extends Error {
    constructor(status, error) {
        super(error);
        this.status = status;
        this.error = error;
    }
}
async function getById(id) {
    const response = await _Repository_QuestionnaireRepository__WEBPACK_IMPORTED_MODULE_3__["getById"](id);
    let rowCount = response.rowCount;
    if (rowCount === 0) {
        throw new QuestionnaireError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGES"].NOT_FOUND.QUESTIONNAIRE);
    }
    return response.rows[0];
}
async function getAll() {
    const response = await _Repository_QuestionnaireRepository__WEBPACK_IMPORTED_MODULE_3__["getAll"]();
    let rowCount = response.rowCount;
    if (rowCount === 0) {
        throw new QuestionnaireError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGES"].NOT_FOUND.QUESTIONNAIRE);
    }
    return response.rows;
}
async function getComputedQuestionnaireList(email) {
    const questionnaires = await _Repository_QuestionnaireRepository__WEBPACK_IMPORTED_MODULE_3__["getComputedQuestionnaireList"](email);
    let rowCount = questionnaires.rowCount;
    if (rowCount === 0) {
        throw new QuestionnaireError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGES"].NOT_FOUND.QUESTIONNAIRE);
    }
    let questionnairesResponse = [];
    for (const questionnaire of questionnaires.rows) {
        let questionnaireId = questionnaire.id;
        let questions = await _Repository_QuestionRepository__WEBPACK_IMPORTED_MODULE_2__["getAllByQuestionnaireId"](questionnaireId);
        let questionsResponse = [];
        for (const question of questions.rows) {
            let questionId = question.id;
            let answers = (await _Repository_AnswerRepository__WEBPACK_IMPORTED_MODULE_1__["getAllByQuestionId"](questionId)).rows;
            questionsResponse.push({
                ...question,
                possibleAnswers: answers
            });
        }
        questionnairesResponse.push({
            ...questionnaire,
            questions: questionsResponse
        });
    }
    let answeredQuestionnaireListResponse = await _Repository_QuestionnaireRepository__WEBPACK_IMPORTED_MODULE_3__["getAnsweredQuestionnaireList"](email);
    return {
        answeredQuestionnaireNumber: answeredQuestionnaireListResponse.rowCount,
        questionnaires: questionnairesResponse
    };
}
async function createQuestionnaire(userEmail, body) {
    if (!(await Object(_UserService__WEBPACK_IMPORTED_MODULE_7__["currentUserIsAdmin"])(userEmail))) {
        return {
            statusCode: 403,
            body: "User has no right to call this API."
        };
    }
    let questionnaireResult = await _Repository_QuestionnaireRepository__WEBPACK_IMPORTED_MODULE_3__["add"](body.priority, body.title, body.description);
    if (questionnaireResult.rowCount === 0) {
        throw new QuestionnaireError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGES"].NOT_FOUND.QUESTIONNAIRE);
    }
    let questionnaireId = questionnaireResult.rows[0].id;
    for (const tag of body.tags) {
        await _Repository_QuestionnaireTagRepository__WEBPACK_IMPORTED_MODULE_4__["add"](tag.id, questionnaireId, tag.interest);
    }
    for (const question of body.questions) {
        let questionResult = await _Repository_QuestionRepository__WEBPACK_IMPORTED_MODULE_2__["add"](questionnaireId, question.type, question.multiple_answers, question.title, question.description);
        if (questionResult.rowCount === 0) {
            throw new QuestionnaireError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGES"].NOT_FOUND.QUESTIONNAIRE);
        }
        let questionId = questionResult.rows[0].id;
        for (const tag of question.tags) {
            await _Repository_QuestionTagRepository__WEBPACK_IMPORTED_MODULE_5__["add"](tag.id, questionId, tag.interest);
        }
        for (const answer of question.answers) {
            await _Repository_AnswerRepository__WEBPACK_IMPORTED_MODULE_1__["add"](questionId, question.answers.indexOf(answer), answer.scale_value, answer.text, answer.image_url);
        }
    }
    return {
        message: "Questionnaire created succesfully."
    };
}
async function addUserAnswers(questionnaireId, body, email) {
    let userAnswers = body.userAnswers;
    console.log(userAnswers);
    let user_internal_id = await Object(_UserService__WEBPACK_IMPORTED_MODULE_7__["getUserInternalIdBy"])(email);
    userAnswers.forEach((obj) => {
        obj.answers.forEach((answerId) => {
            _Repository_UserAnswerRepository__WEBPACK_IMPORTED_MODULE_6__["add"](user_internal_id, Number(obj.questionId), answerId);
        });
    });
    return {
        statusCode: 200,
        body: "User answers registered successfully."
    };
}
async function deleteQuestionnaire(questionnaireId, email) {
    if (!(await Object(_UserService__WEBPACK_IMPORTED_MODULE_7__["currentUserIsAdmin"])(email))) {
        return {
            statusCode: 403,
            body: "User has no right to call this API."
        };
    }
    const questionnaires = await _Repository_QuestionnaireRepository__WEBPACK_IMPORTED_MODULE_3__["remove"](questionnaireId);
    let rowCount = questionnaires.rowCount;
    if (rowCount === 0) {
        throw new QuestionnaireError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGES"].NOT_FOUND.QUESTIONNAIRE);
    }
    return {
        statusCode: 200,
        body: "Questionnaire deleted successfully."
    };
}
async function add(priority, title, description) {
    let response = await _Repository_QuestionnaireRepository__WEBPACK_IMPORTED_MODULE_3__["add"](priority, title, description);
    return response.rows[0];
}
async function remove(id) {
    const response = await _Repository_QuestionnaireRepository__WEBPACK_IMPORTED_MODULE_3__["remove"](id);
    if (response.rowCount === 0) {
        throw new QuestionnaireError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGES"].NOT_FOUND.QUESTIONNAIRE);
    }
    return response.rows;
}


/***/ }),

/***/ "./Services/SubscriptionService.ts":
/*!*****************************************!*\
  !*** ./Services/SubscriptionService.ts ***!
  \*****************************************/
/*! exports provided: SubscriptionError, getAll, getById, add, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionError", function() { return SubscriptionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _Repository_SubscriptionRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Repository/SubscriptionRepository */ "./Repository/SubscriptionRepository.ts");
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");


class SubscriptionError extends Error {
    constructor(status, error) {
        super(error);
        this.status = status;
        this.error = error;
    }
}
async function getAll() {
    const response = await _Repository_SubscriptionRepository__WEBPACK_IMPORTED_MODULE_0__["getAll"]();
    let rowCount = response.rowCount;
    if (rowCount === 0) {
        throw new SubscriptionError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["MESSAGES"].NOT_FOUND.QUESTIONNAIRE);
    }
    return response.rows;
}
async function getById(id) {
    const response = await _Repository_SubscriptionRepository__WEBPACK_IMPORTED_MODULE_0__["getById"](id);
    let rowCount = response.rowCount;
    if (rowCount === 0) {
        throw new SubscriptionError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["MESSAGES"].NOT_FOUND.QUESTIONNAIRE);
    }
    return response.rows[0];
}
async function add(name, description, post_limit, questionnaire_limit, comments_active, reactions_active, support, price) {
    const response = await _Repository_SubscriptionRepository__WEBPACK_IMPORTED_MODULE_0__["add"](name, description, post_limit, questionnaire_limit, comments_active, reactions_active, support, price);
    let rowCount = response.rowCount;
    if (rowCount === 0) {
        throw new SubscriptionError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["MESSAGES"].NOT_FOUND.USER);
    }
    return response.rows[0];
}
async function remove(id) {
    const response = await _Repository_SubscriptionRepository__WEBPACK_IMPORTED_MODULE_0__["remove"](id);
    if (response.rowCount === 0) {
        throw new SubscriptionError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_1__["MESSAGES"].NOT_FOUND.QUESTIONNAIRE);
    }
    return response.rows;
}


/***/ }),

/***/ "./Services/UserService.ts":
/*!*********************************!*\
  !*** ./Services/UserService.ts ***!
  \*********************************/
/*! exports provided: UserError, getById, getUserInternalIdBy, getCurrentUser, changeActiveStatus, getUserActivity, currentUserIsAdmin, getAllUsersInShallowForm, changeUserDetails, changeSubscription, add, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserError", function() { return UserError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInternalIdBy", function() { return getUserInternalIdBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeActiveStatus", function() { return changeActiveStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserActivity", function() { return getUserActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentUserIsAdmin", function() { return currentUserIsAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsersInShallowForm", function() { return getAllUsersInShallowForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeUserDetails", function() { return changeUserDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSubscription", function() { return changeSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _Repository_UserRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Repository/UserRepository */ "./Repository/UserRepository.ts");
/* harmony import */ var _Repository_PostRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Repository/PostRepository */ "./Repository/PostRepository.ts");
/* harmony import */ var _Repository_CommentRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Repository/CommentRepository */ "./Repository/CommentRepository.ts");
/* harmony import */ var _Repository_ReactionRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Repository/ReactionRepository */ "./Repository/ReactionRepository.ts");
/* harmony import */ var _Repository_UserAnswerRepository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Repository/UserAnswerRepository */ "./Repository/UserAnswerRepository.ts");
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");






class UserError extends Error {
    constructor(status, error) {
        super(error);
        this.status = status;
        this.error = error;
    }
}
async function getById(id) {
    const response = await _Repository_UserRepository__WEBPACK_IMPORTED_MODULE_0__["getById"](id);
    let rowCount = response.rowCount;
    if (rowCount === 0) {
        throw new UserError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NOT_FOUND.USER);
    }
    return response.rows[0];
}
async function getUserInternalIdBy(email) {
    const currentUserQueryResponse = await _Repository_UserRepository__WEBPACK_IMPORTED_MODULE_0__["getByEmail"](email);
    let rowCount = currentUserQueryResponse.rowCount;
    if (rowCount === 0) {
        throw new UserError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NOT_FOUND.USER);
    }
    return currentUserQueryResponse.rows[0].user_internal_id;
}
async function getCurrentUser(email) {
    const response = await _Repository_UserRepository__WEBPACK_IMPORTED_MODULE_0__["getByEmail"](email);
    let rowCount = response.rowCount;
    if (rowCount === 0) {
        throw new UserError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NOT_FOUND.USER);
    }
    return response.rows[0];
}
async function changeActiveStatus(email, user_internal_id) {
    if (!(await currentUserIsAdmin(email))) {
        return {
            statusCode: 403,
            body: "User has no right to call this API."
        };
    }
    const response = await _Repository_UserRepository__WEBPACK_IMPORTED_MODULE_0__["getByUserInternalId"](user_internal_id);
    let rowCount = response.rowCount;
    if (rowCount === 0) {
        throw new UserError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NOT_FOUND.USER);
    }
    let nextStatus = !response.rows[0].active;
    const updateResponse = await _Repository_UserRepository__WEBPACK_IMPORTED_MODULE_0__["changeActiveStatus"](user_internal_id, nextStatus);
    return updateResponse.rowCount > 0 ? "Active status changed successfully." : "Active status change failed.";
}
async function getUserActivity(email, user_internal_id) {
    if (!(await currentUserIsAdmin(email))) {
        return {
            statusCode: 403,
            body: "User has no right to call this API."
        };
    }
    let posts = (await _Repository_PostRepository__WEBPACK_IMPORTED_MODULE_1__["getActivityOf"](user_internal_id)).rows;
    let comments = (await _Repository_CommentRepository__WEBPACK_IMPORTED_MODULE_2__["getActivityOf"](user_internal_id)).rows;
    let reactions = (await _Repository_ReactionRepository__WEBPACK_IMPORTED_MODULE_3__["getActivityOf"](user_internal_id)).rows;
    let answers = (await _Repository_UserAnswerRepository__WEBPACK_IMPORTED_MODULE_4__["getActivityOf"](user_internal_id)).rows;
    return {
        statusCode: 200,
        body: {
            posts: posts,
            comments: comments,
            reactions: reactions,
            answers: answers
        }
    };
}
async function currentUserIsAdmin(email) {
    const currentUser = await getCurrentUser(email);
    return currentUser.type == 'ADMIN';
}
async function getAllUsersInShallowForm(email) {
    if (!(await currentUserIsAdmin(email))) {
        return {
            statusCode: 403,
            body: "User has no right to call this API."
        };
    }
    return (await _Repository_UserRepository__WEBPACK_IMPORTED_MODULE_0__["getAll"]()).rows;
}
async function doAddUserDetails(email, body) {
    const response = await _Repository_UserRepository__WEBPACK_IMPORTED_MODULE_0__["add"](1, 'USER', email, email, body.first_name, body.last_name, 'address', body.city, body.country, body.zip_code, 'LIGHT');
    let rowCount = response.rowCount;
    if (rowCount === 0) {
        throw new UserError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NOT_FOUND.USER);
    }
    return getCurrentUser(email);
}
async function doEditUserDetails(email, body) {
    const response = await _Repository_UserRepository__WEBPACK_IMPORTED_MODULE_0__["editDetails"](email, body.email, body.first_name, body.last_name, body.city, body.country, body.zip_code);
    let rowCount = response.rowCount;
    if (rowCount === 0) {
        throw new UserError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NOT_FOUND.USER);
    }
    return getCurrentUser(body.email);
}
async function changeUserDetails(email, body) {
    if (body.email === undefined || body.email === null) {
        return await doAddUserDetails(email, body);
    }
    return await doEditUserDetails(email, body);
}
async function changeSubscription(subscription_id, user_email) {
    const response = await _Repository_UserRepository__WEBPACK_IMPORTED_MODULE_0__["changeSubscription"](subscription_id, user_email);
    let rowCount = response.rowCount;
    if (rowCount === undefined || rowCount === 0) {
        throw new UserError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NOT_FOUND.SUBSCRIPTION);
    }
    return _Utils_Constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].SUCCESS.SUBSCRIPTION_UPDATED;
}
async function add(subscription_id, type, email, username, first_name, last_name, address, city, country, zip_code, theme) {
    const response = await _Repository_UserRepository__WEBPACK_IMPORTED_MODULE_0__["add"](subscription_id, type, email, username, first_name, last_name, address, city, country, zip_code, theme);
    let rowCount = response.rowCount;
    if (rowCount === 0) {
        throw new UserError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NOT_FOUND.USER);
    }
    return response.rows[0];
}
async function remove(id) {
    const response = await _Repository_UserRepository__WEBPACK_IMPORTED_MODULE_0__["remove"](id);
    if (response.rowCount === 0) {
        throw new UserError(_Utils_Constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NOT_FOUND.QUESTIONNAIRE);
    }
    return response.rows;
}


/***/ }),

/***/ "./Utils/Constants.ts":
/*!****************************!*\
  !*** ./Utils/Constants.ts ***!
  \****************************/
/*! exports provided: QUERIES, MESSAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERIES", function() { return QUERIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES", function() { return MESSAGES; });
const SCHEMAS = {
    SOCIAL_MEDIA_DB: {
        NAME: 'social_media_db',
        TABLES: {
            QUESTIONNAIRE: {
                NAME: 'questionnaire',
                COLUMNS: [
                    'priority', 'title', 'description'
                ]
            },
            QUESTION: {
                NAME: 'question',
                COLUMNS: [
                    'questionnaire_id', 'question_type', 'multiple_answers', 'title', 'description'
                ]
            },
            LINKAGE: {
                NAME: 'linkage',
                COLUMNS: [
                    'first_question_id', 'second_question_id'
                ]
            },
            ANSWER: {
                NAME: 'answer',
                COLUMNS: [
                    'question_id', 'priority', 'scale_value', 'text', 'image_url'
                ]
            },
            USER_ANSWER: {
                NAME: 'user_answer',
                COLUMNS: [
                    'user_internal_id', 'question_id', 'answer_id', 'timestamp'
                ]
            },
            POST: {
                NAME: 'post',
                COLUMNS: [
                    'user_internal_id', 'post_category_id', 'text', 'priority', 'timestamp'
                ]
            },
            CATEGORY: {
                NAME: 'post_category',
                COLUMNS: [
                    'text'
                ]
            },
            POST_CATEGORY: {
                NAME: 'post_category',
                COLUMNS: [
                    'text'
                ]
            },
            RESOURCE: {
                NAME: 'resource',
                COLUMNS: [
                    'post_id', 'resource', 'type', 'timestamp'
                ]
            },
            COMMENT: {
                NAME: 'comment',
                COLUMNS: [
                    'user_internal_id', 'post_id', 'text', 'visible', 'timestamp'
                ]
            },
            REACTION: {
                NAME: 'reaction',
                COLUMNS: [
                    'user_internal_id', 'post_id', 'reaction', 'timestamp'
                ]
            },
            TAG: {
                NAME: 'tag',
                COLUMNS: [
                    'name'
                ]
            },
            SUBSCRIPTION: {
                NAME: 'subscription',
                COLUMNS: [
                    'name', 'description', 'post_limit', 'questionnaire_limit', 'comments_active', 'reactions_active', 'support', 'price'
                ]
            },
            USER: {
                NAME: 'user',
                COLUMNS: [
                    'subscription_id', 'type', 'email', 'username', 'first_name', 'last_name', 'address', 'city', 'country', 'zip_code', 'theme', 'timestamp', 'active'
                ]
            },
            QUESTIONNAIRE_TAG: {
                NAME: 'questionnaire_tag',
                COLUMNS: [
                    'tag_id', 'questionnaire_id', 'interest'
                ]
            },
            QUESTION_TAG: {
                NAME: 'question_tag',
                COLUMNS: [
                    'tag_id', 'question_id', 'interest'
                ]
            },
            LINKAGE_TAG: {
                NAME: 'linkage_tag',
                COLUMNS: [
                    'tag_id', 'linkage_id', 'interest'
                ]
            },
            POST_TAG: {
                NAME: 'post_tag',
                COLUMNS: [
                    'tag_id', 'post_id', 'interest'
                ]
            },
            NOTIFICATION: {
                NAME: 'notification',
                COLUMNS: [
                    'user_internal_id', 'timestamp', 'message', 'type', 'info'
                ]
            }
        }
    }
};
const QUERIES = {
    QUESTIONNAIRE: {
        GET_ALL: () => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (priority, title, description) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE.COLUMNS.join(', ');
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${priority}, '${title}', '${description}') RETURNING id;`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        GET_ALL_QUESTIONNAIRES_BY_USER_AND_ORDERED: (email) => {
            return `SELECT * FROM social_media_db.questionnaire q
                    ORDER BY priority DESC
                    LIMIT (
                        SELECT s.questionnaire_limit FROM social_media_db."user" u 
                        JOIN social_media_db."subscription" s ON u.subscription_id = s.id WHERE u.email = '${email}'
                    )`;
        },
        GET_ANSWERED_QUESTIONNAIRE_LIST: (email) => {
            return `SELECT * FROM social_media_db.questionnaire q2 WHERE q2.id IN (
                        SELECT DISTINCT (questionnaire_id) 
                        FROM social_media_db.question q 
                        WHERE q.id IN (
                            SELECT question_id 
                            FROM social_media_db.user_answer ua 
                            WHERE ua.user_internal_id  = (
                                SELECT user_internal_id 
                                FROM social_media_db.USER 
                                WHERE email = '${email}'
                            )
                        )
                    )`;
        },
    },
    QUESTION: {
        GET_ALL: () => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTION.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTION.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        GET_BY_QUESTIONNAIRE_ID: (questionnaireId) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTION.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE questionnaire_id = ${questionnaireId};`;
        },
        ADD: (questionnaire_id, question_type, multiple_answers, title, description) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTION.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTION.COLUMNS.join(', ');
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${questionnaire_id}, '${question_type}', ${multiple_answers}, '${title}', '${description}') RETURNING id;`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTION.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    LINKAGE: {
        GET_ALL: () => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (first_question_id, second_question_id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE.COLUMNS.join(', ');
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${first_question_id}, ${second_question_id}) RETURNING id;`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    ANSWER: {
        GET_ALL: () => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.ANSWER.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_ALL_BY_QUESTION_ID: (questionId) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.ANSWER.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE question_id = ${questionId};`;
        },
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.ANSWER.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (question_id, priority, scale_value, text, image_url) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.ANSWER.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.ANSWER.COLUMNS.join(', ');
            let values = question_id + ', ' + priority + ', ' + scale_value + ', \'' + text + '\', \'' + image_url + '\'';
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.ANSWER.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    USER_ANSWER: {
        GET_ALL: () => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER_ANSWER.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER_ANSWER.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (user_internal_id, question_id, answer_id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER_ANSWER.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER_ANSWER.COLUMNS.join(', ');
            let values = user_internal_id + ', ' + question_id + ', ' + answer_id + ', CURRENT_TIMESTAMP';
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER_ANSWER.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        GET_ACTIVITY_OF: (user_internal_id) => {
            return `SELECT 
                        q.title AS "question_text",
                        ua."timestamp" AS "timestamp" 
                    FROM social_media_db.user_answer ua 
                    JOIN social_media_db.question q ON q.id = ua.question_id 
                    WHERE ua.user_internal_id = ${user_internal_id};`;
        }
    },
    POST: {
        GET_ALL: () => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_ALL_BY_CATEGORY_ID: (category_id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE post_category_id = ${category_id};`;
        },
        COUNT: () => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST.NAME;
            return `SELECT COUNT(*) FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (user_internal_id, post_category_id, text, priority) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST.COLUMNS.join(', ');
            let values = `${user_internal_id}, ${post_category_id}, '${text}', ${priority}, CURRENT_TIMESTAMP`;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        GET_ALL_BY_SUBSCRIPTION_AND_ORDERED: (email) => {
            return `SELECT p.id, p.post_category_id, p.user_internal_id, p."text", p.priority, p."timestamp" FROM social_media_db.post p
                    ORDER BY priority DESC, "timestamp" DESC 
                    LIMIT (
                        SELECT s.post_limit FROM social_media_db."user" u 
                        JOIN social_media_db."subscription" s ON u.subscription_id = s.id WHERE u.email = '${email}' LIMIT 1
                    )`;
        },
        GET_ACTIVITY_OF: (user_internal_id) => {
            return `SELECT 
                        p."text" AS "post_text",
                        pc.TEXT AS "category_name",
                        p."timestamp" AS "timestamp" 
                    FROM social_media_db.post p 
                    JOIN social_media_db.post_category pc ON pc.id = p.post_category_id 
                    WHERE user_internal_id = ${user_internal_id};`;
        }
    },
    CATEGORY: {
        GET_ALL: () => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.CATEGORY.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        ADD: (text) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.CATEGORY.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.CATEGORY.COLUMNS.join(', ');
            let values = '\'' + text + '\'';
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.CATEGORY.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    RESOURCE: {
        GET_ALL: () => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        GET_BY_POST_ID: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE post_id = ${id};`;
        },
        ADD: (post_id, resource, type) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.COLUMNS.join(', ');
            let values = post_id + ', \'' + resource + '\', \'' + type + '\', CURRENT_TIMESTAMP';
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    COMMENT: {
        GET_ALL: () => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.COMMENT.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.COMMENT.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        GET_UNAPPROVED_COMMENTS: () => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.COMMENT.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} c WHERE c.visible = FALSE;`;
        },
        GET_BY_POST_ID: (post_id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.COMMENT.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE post_id = ${post_id};`;
        },
        ADD: (user_internal_id, post_id, text) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.COMMENT.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.COMMENT.COLUMNS.join(', ');
            let values = user_internal_id + ', ' + post_id + ', \'' + text + '\', FALSE, CURRENT_TIMESTAMP';
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        APPROVE_COMMENT: (commentId) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.COMMENT.NAME;
            return `UPDATE ${schemaAndDatabaseName} SET visible = TRUE WHERE id = ${commentId}`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.COMMENT.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        GET_ACTIVITY_OF: (user_internal_id) => {
            return `SELECT 
                        c."text" AS "comment_text",
                        c.visible AS "comment_visible",
                        p."text" AS "post_text",
                        c."timestamp" AS "timestamp" 
                    FROM social_media_db."comment" c 
                    JOIN social_media_db.post p ON p.id = c.post_id 
                    WHERE c.user_internal_id = ${user_internal_id};`;
        }
    },
    REACTION: {
        GET_ALL: () => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.REACTION.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.REACTION.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        GET_BY_POST_ID: (post_id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.REACTION.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE post_id = ${post_id};`;
        },
        ADD: (user_internal_id, post_id, reaction) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.REACTION.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.REACTION.COLUMNS.join(', ');
            let values = user_internal_id + ', ' + post_id + ', \'' + reaction + '\', CURRENT_TIMESTAMP';
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.REACTION.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        GET_ACTIVITY_OF: (user_internal_id) => {
            return `SELECT 
                        r."reaction" AS "reaction",
                        p."text" AS "post_text",
                        r."timestamp" AS "timestamp" 
                    FROM social_media_db."reaction" r 
                    JOIN social_media_db.post p ON p.id = r.post_id 
                    WHERE r.user_internal_id = ${user_internal_id};`;
        }
    },
    TAG: {
        GET_ALL: () => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (name) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.TAG.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.COLUMNS.join(', ');
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES ('${name}') RETURNING id;`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.TAG.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    SUBSCRIPTION: {
        GET_ALL: () => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.SUBSCRIPTION.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.SUBSCRIPTION.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (name, description, post_limit, questionnaire_limit, comments_active, reactions_active, support, price) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.SUBSCRIPTION.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.COLUMNS.join(', ');
            let values = '\'' + name + '\', \'' + description + '\', ' + post_limit + ', ' + questionnaire_limit + ', '
                + comments_active + ', ' + reactions_active + ', \'' + support + '\', ' + price;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.TAG.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    USER: {
        GET_ALL: () => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_SHALLOW_USERS_BY_IDS: (ids) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.NAME;
            return `SELECT user_internal_id, first_name, last_name FROM ${schemaAndDatabaseName} WHERE id IN (${ids.join(',')})`;
        },
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.NAME;
            let selectedColumns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.COLUMNS.join(',');
            return `SELECT ${selectedColumns} FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        GET_BY_USER_INTERNAL_ID: (user_internal_id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.NAME;
            let selectedColumns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.COLUMNS.join(',');
            return `SELECT ${selectedColumns} FROM ${schemaAndDatabaseName} WHERE user_internal_id = ${user_internal_id};`;
        },
        CHANGE_SUBSCRIPTION: (subscription_id, user_email) => {
            return `UPDATE social_media_db."user" u
                    SET subscription_id = (SELECT id FROM social_media_db."subscription" s WHERE id = ${subscription_id})
                    WHERE u.email = '${user_email}';`;
        },
        CHANGE_ACTIVE_STATUS: (user_internal_id, activeStatus) => {
            return `UPDATE social_media_db."user" 
                    SET active = ${activeStatus} 
                    WHERE user_internal_id = ${user_internal_id};`;
        },
        GET_BY_EMAIL: (email) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE email = '${email}';`;
        },
        ADD: (subscription_id, type, email, username, first_name, last_name, address, city, country, zip_code, theme) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.COLUMNS.join(', ');
            let values = subscription_id + ', \'' + type + '\', \'' + email + '\', \''
                + username + '\', \'' + first_name + '\', \'' + last_name + '\', \'' + address + '\', \'' + city + '\', \''
                + country + '\', \'' + zip_code + '\', \'' + theme + '\', CURRENT_TIMESTAMP, TRUE';
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        EDIT_DETAILS: (email, new_email, first_name, last_name, city, country, zip_code) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.NAME;
            return `UPDATE ${schemaAndDatabaseName} u
                SET email = '${new_email}',  first_name = '${first_name}', last_name = '${last_name}', city = '${city}', country = '${country}', zip_code = '${zip_code}'
                WHERE u.email = '${email}'`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    QUESTIONNAIRE_TAG: {
        GET_ALL: () => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE_TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE_TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (tag_id, questionnaire_id, interest) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE_TAG.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.COLUMNS.join(', ');
            let values = tag_id + ', ' + questionnaire_id + ', ' + interest;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE_TAG.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    QUESTION_TAG: {
        GET_ALL: () => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTION_TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTION_TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (tag_id, question_id, interest) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTION_TAG.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.COLUMNS.join(', ');
            let values = tag_id + ', ' + question_id + ', ' + interest;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTION_TAG.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    LINKAGE_TAG: {
        GET_ALL: () => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE_TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE_TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (tag_id, linkage_id, interest) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE_TAG.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE_TAG.COLUMNS.join(', ');
            let values = tag_id + ', ' + linkage_id + ', ' + interest;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE_TAG.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    POST_TAG: {
        GET_ALL: () => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST_TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST_TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (tag_id, post_id, interest) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST_TAG.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST_TAG.COLUMNS.join(', ');
            let values = tag_id + ', ' + post_id + ', ' + interest;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST_TAG.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    NOTIFICATION: {
        GET_FOR_USER_ID: (user_internal_id) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.NOTIFICATION.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE user_internal_id = ${user_internal_id} OR user_internal_id = -1
                    ORDER BY timestamp DESC;`;
        },
        ADD_FOR_USER: (user_internal_id, message, type, info) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.NOTIFICATION.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.NOTIFICATION.COLUMNS.join(', ');
            let goodInfo = info == null ? "NULL" : `'${info}'`;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns} VALUES (${user_internal_id}, CURRENT_TIMESTAMP, '${message}', '${type}', ${goodInfo}))`;
        },
        ADD_ALERT_FOR_ALL: (message, info) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.NOTIFICATION.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.NOTIFICATION.COLUMNS.join(', ');
            let goodInfo = info == null ? `NULL` : `'${info}'`;
            let user_internal_id = -1;
            let type = 'alert';
            return `INSERT INTO ${schemaAndDatabaseName} (${columns} VALUES (${user_internal_id}, CURRENT_TIMESTAMP, '${message}', '${type}', ${goodInfo}))`;
        }
    },
};
const MESSAGES = {
    NOT_FOUND: {
        status: 404,
        QUESTIONNAIRE: 'QUESTIONNAIRE not found.',
        QUESTION: 'QUESTION not found.',
        LINKAGE: 'LINKAGE not found.',
        ANSWER: 'ANSWER not found.',
        USER_ANSWER: 'USER_ANSWER not found.',
        USER: 'USER not found.',
        POST: 'POST not found.',
        CATEGORIES: 'CATEGORIES not found.',
        RESOURCE: 'RESOURCE not found.',
        COMMENT: 'COMMENT not found.',
        REACTION: 'REACTION not found.',
        TAG: 'TAG not found.',
        QUESTIONNAIRE_TAG: 'QUESTIONNAIRE_TAG not found.',
        QUESTION_TAG: 'QUESTION_TAG not found.',
        LINKAGE_TAG: 'LINKAGE_TAG not found.',
        POST_TAG: 'POST_TAG not found.',
        SUBSCRIPTION: 'SUBSCRIPTION not found.',
        NOTIFICATION: 'NOTIFICATION not found'
    },
    SUCCESS: {
        SUBSCRIPTION_UPDATED: 'Subscription plan updated successfully.'
    }
};


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: Controllers, Services, Lambdas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controllers", function() { return Controllers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lambdas", function() { return Lambdas; });
/* harmony import */ var _Controllers_QuestionnaireController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controllers/QuestionnaireController */ "./Controllers/QuestionnaireController.ts");
/* harmony import */ var _Services_Database_DatabaseCreatorService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services/Database/DatabaseCreatorService */ "./Services/Database/DatabaseCreatorService.ts");
/* harmony import */ var _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/Database/DatabaseService */ "./Services/Database/DatabaseService.ts");
/* harmony import */ var _lambdas_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lambdas/handler */ "./lambdas/handler.ts");
/* harmony import */ var _lambdas_questionnaireLambda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lambdas/questionnaireLambda */ "./lambdas/questionnaireLambda.ts");





const Controllers = {
    QuestionnaireController: _Controllers_QuestionnaireController__WEBPACK_IMPORTED_MODULE_0__
};
const Services = {
    DatabaseCreatorService: _Services_Database_DatabaseCreatorService__WEBPACK_IMPORTED_MODULE_1__,
    DatabaseService: _Services_Database_DatabaseService__WEBPACK_IMPORTED_MODULE_2__
};
const Lambdas = {
    MainLambda: _lambdas_handler__WEBPACK_IMPORTED_MODULE_3__,
    QuestionnaireLambda: _lambdas_questionnaireLambda__WEBPACK_IMPORTED_MODULE_4__
};


/***/ }),

/***/ "./lambdas/handler.ts":
/*!****************************!*\
  !*** ./lambdas/handler.ts ***!
  \****************************/
/*! exports provided: hello, getPosts, createPost, getUnapprovedComments, approveComment, deleteComment, getCategories, getTags, createCategory, getPostsByCategoryId, reactionAddHandle, reactionDeleteHandle, commentAddHandle, commentDeleteHandle, getQuestionnaires, createQuestionnaire, addUserAnswers, deleteQuestionnaire, getSubscriptions, getCurrentUser, changeActiveStatus, getUserActivity, getAllUsersInShallowForm, getUserContactInfo, changeUserDetails, changeSubscription, addNotificationForUser, addNotificationAlert, getNotificationForUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hello", function() { return hello; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPost", function() { return createPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnapprovedComments", function() { return getUnapprovedComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approveComment", function() { return approveComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteComment", function() { return deleteComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTags", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCategory", function() { return createCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsByCategoryId", function() { return getPostsByCategoryId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactionAddHandle", function() { return reactionAddHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactionDeleteHandle", function() { return reactionDeleteHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentAddHandle", function() { return commentAddHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentDeleteHandle", function() { return commentDeleteHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuestionnaires", function() { return getQuestionnaires; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQuestionnaire", function() { return createQuestionnaire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUserAnswers", function() { return addUserAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteQuestionnaire", function() { return deleteQuestionnaire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubscriptions", function() { return getSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeActiveStatus", function() { return changeActiveStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserActivity", function() { return getUserActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsersInShallowForm", function() { return getAllUsersInShallowForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserContactInfo", function() { return getUserContactInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeUserDetails", function() { return changeUserDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSubscription", function() { return changeSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNotificationForUser", function() { return addNotificationForUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNotificationAlert", function() { return addNotificationAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotificationForUser", function() { return getNotificationForUser; });
/* harmony import */ var _Controllers_QuestionnaireController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controllers/QuestionnaireController */ "./Controllers/QuestionnaireController.ts");
/* harmony import */ var _Services_Database_DatabaseCreatorService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/Database/DatabaseCreatorService */ "./Services/Database/DatabaseCreatorService.ts");
/* harmony import */ var _Services_PostService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/PostService */ "./Services/PostService.ts");
/* harmony import */ var _Services_UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/UserService */ "./Services/UserService.ts");
/* harmony import */ var _Services_SubscriptionService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/SubscriptionService */ "./Services/SubscriptionService.ts");
/* harmony import */ var _Services_QuestionnaireService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/QuestionnaireService */ "./Services/QuestionnaireService.ts");
/* harmony import */ var _Services_NotificationsService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/NotificationsService */ "./Services/NotificationsService.ts");
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Utils/Constants */ "./Utils/Constants.ts");









let dbCreationChecked = false;
async function databaseCheckLogic() {
    if (!dbCreationChecked) {
        await _Services_Database_DatabaseCreatorService__WEBPACK_IMPORTED_MODULE_1__["createSchemaIfMissing"]();
        dbCreationChecked = true;
    }
}
async function hello(event) {
    await databaseCheckLogic();
    console.log(event);
    console.log(_Controllers_QuestionnaireController__WEBPACK_IMPORTED_MODULE_0__);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'data' })
    };
}
async function getPosts(event, params) {
    let posts = await _Services_PostService__WEBPACK_IMPORTED_MODULE_2__["getComputedPostList"](params.authorization.email);
    return {
        statusCode: 200,
        body: JSON.stringify(posts)
    };
}
async function createPost(event, params, body) {
    let posts = await _Services_PostService__WEBPACK_IMPORTED_MODULE_2__["createPost"](params.authorization.email, body);
    return {
        statusCode: 200,
        body: JSON.stringify(posts)
    };
}
async function getUnapprovedComments(event, params) {
    let posts = await _Services_PostService__WEBPACK_IMPORTED_MODULE_2__["getUnapprovedComments"](params.authorization.email);
    return {
        statusCode: 200,
        body: JSON.stringify(posts)
    };
}
async function approveComment(event, params) {
    let response = await _Services_PostService__WEBPACK_IMPORTED_MODULE_2__["approveComment"](params.authorization.email, params.commentId);
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    };
}
async function deleteComment(event, params) {
    let response = await _Services_PostService__WEBPACK_IMPORTED_MODULE_2__["deleteComment"](params.authorization.email, params.commentId);
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    };
}
async function getCategories(event, params) {
    let posts = await _Services_PostService__WEBPACK_IMPORTED_MODULE_2__["getCategories"](params.authorization.email);
    return {
        statusCode: 200,
        body: JSON.stringify(posts)
    };
}
async function getTags(event, params) {
    let tags = await _Services_PostService__WEBPACK_IMPORTED_MODULE_2__["getTags"](params.authorization.email);
    return {
        statusCode: 200,
        body: JSON.stringify(tags)
    };
}
async function createCategory(event, params, body) {
    let posts = await _Services_PostService__WEBPACK_IMPORTED_MODULE_2__["createCategory"](params.authorization.email, body.text);
    return {
        statusCode: 200,
        body: JSON.stringify(posts)
    };
}
async function getPostsByCategoryId(event, params) {
    let posts = await _Services_PostService__WEBPACK_IMPORTED_MODULE_2__["getAllByCategoryId"](params.authorization.email, params.categoryId);
    return {
        statusCode: 200,
        body: JSON.stringify(posts)
    };
}
async function reactionAddHandle(event, params, body) {
    let post_id = params.postId;
    if (post_id != body.post_id) {
        throw new _Services_PostService__WEBPACK_IMPORTED_MODULE_2__["PostError"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_7__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_7__["MESSAGES"].NOT_FOUND.POST);
    }
    let response = await _Services_PostService__WEBPACK_IMPORTED_MODULE_2__["reactionAddHandle"](post_id, body, params.authorization.email);
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    };
}
async function reactionDeleteHandle(event, params) {
    let post_id = params.postId;
    let reaction_id = params.reactionId;
    let response = await _Services_PostService__WEBPACK_IMPORTED_MODULE_2__["reactionDeleteHandle"](post_id, reaction_id);
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    };
}
async function commentAddHandle(event, params, body) {
    let post_id = params.postId;
    if (post_id != body.post_id) {
        throw new _Services_PostService__WEBPACK_IMPORTED_MODULE_2__["PostError"](_Utils_Constants__WEBPACK_IMPORTED_MODULE_7__["MESSAGES"].NOT_FOUND.status, _Utils_Constants__WEBPACK_IMPORTED_MODULE_7__["MESSAGES"].NOT_FOUND.POST);
    }
    let response = await _Services_PostService__WEBPACK_IMPORTED_MODULE_2__["commentAddHandle"](post_id, body, params.authorization.email);
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    };
}
async function commentDeleteHandle(event, params) {
    let post_id = params.postId;
    let comment_id = params.commentId;
    let response = await _Services_PostService__WEBPACK_IMPORTED_MODULE_2__["commentDeleteHandle"](post_id, comment_id);
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    };
}
async function getQuestionnaires(event, params) {
    let questionnaires = await _Services_QuestionnaireService__WEBPACK_IMPORTED_MODULE_5__["getComputedQuestionnaireList"](params.authorization.email);
    return {
        statusCode: 200,
        body: JSON.stringify(questionnaires)
    };
}
async function createQuestionnaire(event, params, body) {
    let questionnaires = await _Services_QuestionnaireService__WEBPACK_IMPORTED_MODULE_5__["createQuestionnaire"](params.authorization.email, body);
    return {
        statusCode: 200,
        body: JSON.stringify(questionnaires)
    };
}
async function addUserAnswers(event, params, body) {
    let response = await _Services_QuestionnaireService__WEBPACK_IMPORTED_MODULE_5__["addUserAnswers"](params.questionnaireId, body, params.authorization.email);
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    };
}
async function deleteQuestionnaire(event, params) {
    let response = await _Services_QuestionnaireService__WEBPACK_IMPORTED_MODULE_5__["deleteQuestionnaire"](params.questionnaireId, params.authorization.email);
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    };
}
async function getSubscriptions(event) {
    let subscriptions = await _Services_SubscriptionService__WEBPACK_IMPORTED_MODULE_4__["getAll"]();
    return {
        statusCode: 200,
        body: JSON.stringify(subscriptions)
    };
}
async function getCurrentUser(event, params) {
    let user = await _Services_UserService__WEBPACK_IMPORTED_MODULE_3__["getCurrentUser"](params.authorization.email);
    if (user.active) {
        return {
            statusCode: 200,
            body: JSON.stringify(user)
        };
    }
    return {
        statusCode: 404,
        body: JSON.stringify({
            message: "User is not active."
        })
    };
}
async function changeActiveStatus(event, params) {
    let response = await _Services_UserService__WEBPACK_IMPORTED_MODULE_3__["changeActiveStatus"](params.authorization.email, params.user_internal_id);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: response
        })
    };
}
async function getUserActivity(event, params) {
    let response = await _Services_UserService__WEBPACK_IMPORTED_MODULE_3__["getUserActivity"](params.authorization.email, params.user_internal_id);
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    };
}
async function getAllUsersInShallowForm(event, params) {
    let users = await _Services_UserService__WEBPACK_IMPORTED_MODULE_3__["getAllUsersInShallowForm"](params.authorization.email);
    return {
        statusCode: 200,
        body: JSON.stringify(users)
    };
}
async function getUserContactInfo(event, params) {
    let user = await _Services_UserService__WEBPACK_IMPORTED_MODULE_3__["getById"](params.userId);
    let userContactInfo = {
        email: user.email,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        address: user.address,
        city: user.city
    };
    return {
        statusCode: 200,
        body: JSON.stringify(userContactInfo)
    };
}
async function changeUserDetails(event, params, body) {
    let user = await _Services_UserService__WEBPACK_IMPORTED_MODULE_3__["changeUserDetails"](params.authorization.email, body);
    return {
        statusCode: 200,
        body: JSON.stringify(user)
    };
}
async function changeSubscription(event, params) {
    let subscription_id = params.subscriptionId;
    let user = await _Services_UserService__WEBPACK_IMPORTED_MODULE_3__["changeSubscription"](subscription_id, params.authorization.email);
    return {
        statusCode: 200,
        body: JSON.stringify(user)
    };
}
async function addNotificationForUser(event, params, body) {
    var _a, _b;
    try {
        await _Services_NotificationsService__WEBPACK_IMPORTED_MODULE_6__["addNotification"](body.userId, body.message, body.type, body.info);
    }
    catch (err) {
        const typedError = err;
        return {
            statusCode: (_a = typedError.status) !== null && _a !== void 0 ? _a : 500,
            body: (_b = typedError.error) !== null && _b !== void 0 ? _b : "Something went wrong"
        };
    }
    return {
        statusCode: 201,
        body: ''
    };
}
async function addNotificationAlert(event, params, body) {
    var _a, _b;
    try {
        await _Services_NotificationsService__WEBPACK_IMPORTED_MODULE_6__["addAlert"](body.userId, body.info);
    }
    catch (err) {
        const typedError = err;
        return {
            statusCode: (_a = typedError.status) !== null && _a !== void 0 ? _a : 500,
            body: (_b = typedError.error) !== null && _b !== void 0 ? _b : "Something went wrong"
        };
    }
    return {
        statusCode: 201,
        body: ''
    };
}
async function getNotificationForUser(event, params) {
    var _a, _b;
    try {
        const notifications = await _Services_NotificationsService__WEBPACK_IMPORTED_MODULE_6__["getForUserWithId"](params.userId);
        return {
            statusCode: 200,
            body: JSON.stringify(notifications)
        };
    }
    catch (err) {
        const typedError = err;
        return {
            statusCode: (_a = typedError.status) !== null && _a !== void 0 ? _a : 500,
            body: (_b = typedError.error) !== null && _b !== void 0 ? _b : "Something went wrong"
        };
    }
}


/***/ }),

/***/ "./lambdas/questionnaireLambda.ts":
/*!****************************************!*\
  !*** ./lambdas/questionnaireLambda.ts ***!
  \****************************************/
/*! exports provided: getAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony import */ var _Controllers_QuestionnaireController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controllers/QuestionnaireController */ "./Controllers/QuestionnaireController.ts");
/* harmony import */ var _Services_Database_DatabaseCreatorService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/Database/DatabaseCreatorService */ "./Services/Database/DatabaseCreatorService.ts");


let dbCreationChecked = false;
async function databaseCheckLogic() {
    if (!dbCreationChecked) {
        await _Services_Database_DatabaseCreatorService__WEBPACK_IMPORTED_MODULE_1__["createSchemaIfMissing"]();
        dbCreationChecked = true;
    }
}
async function getAll(event) {
    await databaseCheckLogic();
    let questionnaires = await _Controllers_QuestionnaireController__WEBPACK_IMPORTED_MODULE_0__["getAll"]();
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: questionnaires
    };
}


/***/ }),

/***/ "./node_modules/pg-connection-string/index.js":
/*!****************************************************!*\
  !*** ./node_modules/pg-connection-string/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var url = __webpack_require__(/*! url */ "url")
var fs = __webpack_require__(/*! fs */ "fs")

//Parse method copied from https://github.com/brianc/node-postgres
//Copyright (c) 2010-2014 Brian Carlson (brian.m.carlson@gmail.com)
//MIT License

//parses a connection string
function parse(str) {
  //unix socket
  if (str.charAt(0) === '/') {
    var config = str.split(' ')
    return { host: config[0], database: config[1] }
  }

  // url parse expects spaces encoded as %20
  var result = url.parse(
    / |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(str) ? encodeURI(str).replace(/\%25(\d\d)/g, '%$1') : str,
    true
  )
  var config = result.query
  for (var k in config) {
    if (Array.isArray(config[k])) {
      config[k] = config[k][config[k].length - 1]
    }
  }

  var auth = (result.auth || ':').split(':')
  config.user = auth[0]
  config.password = auth.splice(1).join(':')

  config.port = result.port
  if (result.protocol == 'socket:') {
    config.host = decodeURI(result.pathname)
    config.database = result.query.db
    config.client_encoding = result.query.encoding
    return config
  }
  if (!config.host) {
    // Only set the host if there is no equivalent query param.
    config.host = result.hostname
  }

  // If the host is missing it might be a URL-encoded path to a socket.
  var pathname = result.pathname
  if (!config.host && pathname && /^%2f/i.test(pathname)) {
    var pathnameSplit = pathname.split('/')
    config.host = decodeURIComponent(pathnameSplit[0])
    pathname = pathnameSplit.splice(1).join('/')
  }
  // result.pathname is not always guaranteed to have a '/' prefix (e.g. relative urls)
  // only strip the slash if it is present.
  if (pathname && pathname.charAt(0) === '/') {
    pathname = pathname.slice(1) || null
  }
  config.database = pathname && decodeURI(pathname)

  if (config.ssl === 'true' || config.ssl === '1') {
    config.ssl = true
  }

  if (config.ssl === '0') {
    config.ssl = false
  }

  if (config.sslcert || config.sslkey || config.sslrootcert) {
    config.ssl = {}
  }

  if (config.sslcert) {
    config.ssl.cert = fs.readFileSync(config.sslcert).toString()
  }

  if (config.sslkey) {
    config.ssl.key = fs.readFileSync(config.sslkey).toString()
  }

  if (config.sslrootcert) {
    config.ssl.ca = fs.readFileSync(config.sslrootcert).toString()
  }

  return config
}

module.exports = parse

parse.parse = parse


/***/ }),

/***/ "./node_modules/pg-int8/index.js":
/*!***************************************!*\
  !*** ./node_modules/pg-int8/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// selected so (BASE - 1) * 0x100000000 + 0xffffffff is a safe integer
var BASE = 1000000;

function readInt8(buffer) {
	var high = buffer.readInt32BE(0);
	var low = buffer.readUInt32BE(4);
	var sign = '';

	if (high < 0) {
		high = ~high + (low === 0);
		low = (~low + 1) >>> 0;
		sign = '-';
	}

	var result = '';
	var carry;
	var t;
	var digits;
	var pad;
	var l;
	var i;

	{
		carry = high % BASE;
		high = high / BASE >>> 0;

		t = 0x100000000 * carry + low;
		low = t / BASE >>> 0;
		digits = '' + (t - BASE * low);

		if (low === 0 && high === 0) {
			return sign + digits + result;
		}

		pad = '';
		l = 6 - digits.length;

		for (i = 0; i < l; i++) {
			pad += '0';
		}

		result = pad + digits + result;
	}

	{
		carry = high % BASE;
		high = high / BASE >>> 0;

		t = 0x100000000 * carry + low;
		low = t / BASE >>> 0;
		digits = '' + (t - BASE * low);

		if (low === 0 && high === 0) {
			return sign + digits + result;
		}

		pad = '';
		l = 6 - digits.length;

		for (i = 0; i < l; i++) {
			pad += '0';
		}

		result = pad + digits + result;
	}

	{
		carry = high % BASE;
		high = high / BASE >>> 0;

		t = 0x100000000 * carry + low;
		low = t / BASE >>> 0;
		digits = '' + (t - BASE * low);

		if (low === 0 && high === 0) {
			return sign + digits + result;
		}

		pad = '';
		l = 6 - digits.length;

		for (i = 0; i < l; i++) {
			pad += '0';
		}

		result = pad + digits + result;
	}

	{
		carry = high % BASE;
		t = 0x100000000 * carry + low;
		digits = '' + t % BASE;

		return sign + digits + result;
	}
}

module.exports = readInt8;


/***/ }),

/***/ "./node_modules/pg-pool/index.js":
/*!***************************************!*\
  !*** ./node_modules/pg-pool/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter

const NOOP = function () {}

const removeWhere = (list, predicate) => {
  const i = list.findIndex(predicate)

  return i === -1 ? undefined : list.splice(i, 1)[0]
}

class IdleItem {
  constructor(client, idleListener, timeoutId) {
    this.client = client
    this.idleListener = idleListener
    this.timeoutId = timeoutId
  }
}

class PendingItem {
  constructor(callback) {
    this.callback = callback
  }
}

function throwOnDoubleRelease() {
  throw new Error('Release called on client which has already been released to the pool.')
}

function promisify(Promise, callback) {
  if (callback) {
    return { callback: callback, result: undefined }
  }
  let rej
  let res
  const cb = function (err, client) {
    err ? rej(err) : res(client)
  }
  const result = new Promise(function (resolve, reject) {
    res = resolve
    rej = reject
  })
  return { callback: cb, result: result }
}

function makeIdleListener(pool, client) {
  return function idleListener(err) {
    err.client = client

    client.removeListener('error', idleListener)
    client.on('error', () => {
      pool.log('additional client error after disconnection due to error', err)
    })
    pool._remove(client)
    // TODO - document that once the pool emits an error
    // the client has already been closed & purged and is unusable
    pool.emit('error', err, client)
  }
}

class Pool extends EventEmitter {
  constructor(options, Client) {
    super()
    this.options = Object.assign({}, options)

    if (options != null && 'password' in options) {
      // "hiding" the password so it doesn't show up in stack traces
      // or if the client is console.logged
      Object.defineProperty(this.options, 'password', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: options.password,
      })
    }

    this.options.max = this.options.max || this.options.poolSize || 10
    this.options.maxUses = this.options.maxUses || Infinity
    this.log = this.options.log || function () {}
    this.Client = this.options.Client || Client || __webpack_require__(/*! pg */ "./node_modules/pg/lib/index.js").Client
    this.Promise = this.options.Promise || global.Promise

    if (typeof this.options.idleTimeoutMillis === 'undefined') {
      this.options.idleTimeoutMillis = 10000
    }

    this._clients = []
    this._idle = []
    this._pendingQueue = []
    this._endCallback = undefined
    this.ending = false
    this.ended = false
  }

  _isFull() {
    return this._clients.length >= this.options.max
  }

  _pulseQueue() {
    this.log('pulse queue')
    if (this.ended) {
      this.log('pulse queue ended')
      return
    }
    if (this.ending) {
      this.log('pulse queue on ending')
      if (this._idle.length) {
        this._idle.slice().map((item) => {
          this._remove(item.client)
        })
      }
      if (!this._clients.length) {
        this.ended = true
        this._endCallback()
      }
      return
    }
    // if we don't have any waiting, do nothing
    if (!this._pendingQueue.length) {
      this.log('no queued requests')
      return
    }
    // if we don't have any idle clients and we have no more room do nothing
    if (!this._idle.length && this._isFull()) {
      return
    }
    const pendingItem = this._pendingQueue.shift()
    if (this._idle.length) {
      const idleItem = this._idle.pop()
      clearTimeout(idleItem.timeoutId)
      const client = idleItem.client
      const idleListener = idleItem.idleListener

      return this._acquireClient(client, pendingItem, idleListener, false)
    }
    if (!this._isFull()) {
      return this.newClient(pendingItem)
    }
    throw new Error('unexpected condition')
  }

  _remove(client) {
    const removed = removeWhere(this._idle, (item) => item.client === client)

    if (removed !== undefined) {
      clearTimeout(removed.timeoutId)
    }

    this._clients = this._clients.filter((c) => c !== client)
    client.end()
    this.emit('remove', client)
  }

  connect(cb) {
    if (this.ending) {
      const err = new Error('Cannot use a pool after calling end on the pool')
      return cb ? cb(err) : this.Promise.reject(err)
    }

    const response = promisify(this.Promise, cb)
    const result = response.result

    // if we don't have to connect a new client, don't do so
    if (this._clients.length >= this.options.max || this._idle.length) {
      // if we have idle clients schedule a pulse immediately
      if (this._idle.length) {
        process.nextTick(() => this._pulseQueue())
      }

      if (!this.options.connectionTimeoutMillis) {
        this._pendingQueue.push(new PendingItem(response.callback))
        return result
      }

      const queueCallback = (err, res, done) => {
        clearTimeout(tid)
        response.callback(err, res, done)
      }

      const pendingItem = new PendingItem(queueCallback)

      // set connection timeout on checking out an existing client
      const tid = setTimeout(() => {
        // remove the callback from pending waiters because
        // we're going to call it with a timeout error
        removeWhere(this._pendingQueue, (i) => i.callback === queueCallback)
        pendingItem.timedOut = true
        response.callback(new Error('timeout exceeded when trying to connect'))
      }, this.options.connectionTimeoutMillis)

      this._pendingQueue.push(pendingItem)
      return result
    }

    this.newClient(new PendingItem(response.callback))

    return result
  }

  newClient(pendingItem) {
    const client = new this.Client(this.options)
    this._clients.push(client)
    const idleListener = makeIdleListener(this, client)

    this.log('checking client timeout')

    // connection timeout logic
    let tid
    let timeoutHit = false
    if (this.options.connectionTimeoutMillis) {
      tid = setTimeout(() => {
        this.log('ending client due to timeout')
        timeoutHit = true
        // force kill the node driver, and let libpq do its teardown
        client.connection ? client.connection.stream.destroy() : client.end()
      }, this.options.connectionTimeoutMillis)
    }

    this.log('connecting new client')
    client.connect((err) => {
      if (tid) {
        clearTimeout(tid)
      }
      client.on('error', idleListener)
      if (err) {
        this.log('client failed to connect', err)
        // remove the dead client from our list of clients
        this._clients = this._clients.filter((c) => c !== client)
        if (timeoutHit) {
          err.message = 'Connection terminated due to connection timeout'
        }

        // this client won’t be released, so move on immediately
        this._pulseQueue()

        if (!pendingItem.timedOut) {
          pendingItem.callback(err, undefined, NOOP)
        }
      } else {
        this.log('new client connected')

        return this._acquireClient(client, pendingItem, idleListener, true)
      }
    })
  }

  // acquire a client for a pending work item
  _acquireClient(client, pendingItem, idleListener, isNew) {
    if (isNew) {
      this.emit('connect', client)
    }

    this.emit('acquire', client)

    client.release = this._releaseOnce(client, idleListener)

    client.removeListener('error', idleListener)

    if (!pendingItem.timedOut) {
      if (isNew && this.options.verify) {
        this.options.verify(client, (err) => {
          if (err) {
            client.release(err)
            return pendingItem.callback(err, undefined, NOOP)
          }

          pendingItem.callback(undefined, client, client.release)
        })
      } else {
        pendingItem.callback(undefined, client, client.release)
      }
    } else {
      if (isNew && this.options.verify) {
        this.options.verify(client, client.release)
      } else {
        client.release()
      }
    }
  }

  // returns a function that wraps _release and throws if called more than once
  _releaseOnce(client, idleListener) {
    let released = false

    return (err) => {
      if (released) {
        throwOnDoubleRelease()
      }

      released = true
      this._release(client, idleListener, err)
    }
  }

  // release a client back to the poll, include an error
  // to remove it from the pool
  _release(client, idleListener, err) {
    client.on('error', idleListener)

    client._poolUseCount = (client._poolUseCount || 0) + 1

    // TODO(bmc): expose a proper, public interface _queryable and _ending
    if (err || this.ending || !client._queryable || client._ending || client._poolUseCount >= this.options.maxUses) {
      if (client._poolUseCount >= this.options.maxUses) {
        this.log('remove expended client')
      }
      this._remove(client)
      this._pulseQueue()
      return
    }

    // idle timeout
    let tid
    if (this.options.idleTimeoutMillis) {
      tid = setTimeout(() => {
        this.log('remove idle client')
        this._remove(client)
      }, this.options.idleTimeoutMillis)
    }

    this._idle.push(new IdleItem(client, idleListener, tid))
    this._pulseQueue()
  }

  query(text, values, cb) {
    // guard clause against passing a function as the first parameter
    if (typeof text === 'function') {
      const response = promisify(this.Promise, text)
      setImmediate(function () {
        return response.callback(new Error('Passing a function as the first parameter to pool.query is not supported'))
      })
      return response.result
    }

    // allow plain text query without values
    if (typeof values === 'function') {
      cb = values
      values = undefined
    }
    const response = promisify(this.Promise, cb)
    cb = response.callback

    this.connect((err, client) => {
      if (err) {
        return cb(err)
      }

      let clientReleased = false
      const onError = (err) => {
        if (clientReleased) {
          return
        }
        clientReleased = true
        client.release(err)
        cb(err)
      }

      client.once('error', onError)
      this.log('dispatching query')
      client.query(text, values, (err, res) => {
        this.log('query dispatched')
        client.removeListener('error', onError)
        if (clientReleased) {
          return
        }
        clientReleased = true
        client.release(err)
        if (err) {
          return cb(err)
        } else {
          return cb(undefined, res)
        }
      })
    })
    return response.result
  }

  end(cb) {
    this.log('ending')
    if (this.ending) {
      const err = new Error('Called end on pool more than once')
      return cb ? cb(err) : this.Promise.reject(err)
    }
    this.ending = true
    const promised = promisify(this.Promise, cb)
    this._endCallback = promised.callback
    this._pulseQueue()
    return promised.result
  }

  get waitingCount() {
    return this._pendingQueue.length
  }

  get idleCount() {
    return this._idle.length
  }

  get totalCount() {
    return this._clients.length
  }
}
module.exports = Pool


/***/ }),

/***/ "./node_modules/pg-protocol/dist/buffer-reader.js":
/*!********************************************************!*\
  !*** ./node_modules/pg-protocol/dist/buffer-reader.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const emptyBuffer = Buffer.allocUnsafe(0);
class BufferReader {
    constructor(offset = 0) {
        this.offset = offset;
        this.buffer = emptyBuffer;
        // TODO(bmc): support non-utf8 encoding?
        this.encoding = 'utf-8';
    }
    setBuffer(offset, buffer) {
        this.offset = offset;
        this.buffer = buffer;
    }
    int16() {
        const result = this.buffer.readInt16BE(this.offset);
        this.offset += 2;
        return result;
    }
    byte() {
        const result = this.buffer[this.offset];
        this.offset++;
        return result;
    }
    int32() {
        const result = this.buffer.readInt32BE(this.offset);
        this.offset += 4;
        return result;
    }
    string(length) {
        const result = this.buffer.toString(this.encoding, this.offset, this.offset + length);
        this.offset += length;
        return result;
    }
    cstring() {
        const start = this.offset;
        let end = start;
        while (this.buffer[end++] !== 0) { }
        this.offset = end;
        return this.buffer.toString(this.encoding, start, end - 1);
    }
    bytes(length) {
        const result = this.buffer.slice(this.offset, this.offset + length);
        this.offset += length;
        return result;
    }
}
exports.BufferReader = BufferReader;


/***/ }),

/***/ "./node_modules/pg-protocol/dist/buffer-writer.js":
/*!********************************************************!*\
  !*** ./node_modules/pg-protocol/dist/buffer-writer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//binary data writer tuned for encoding binary specific to the postgres binary protocol
Object.defineProperty(exports, "__esModule", { value: true });
class Writer {
    constructor(size = 256) {
        this.size = size;
        this.offset = 5;
        this.headerPosition = 0;
        this.buffer = Buffer.alloc(size);
    }
    ensure(size) {
        var remaining = this.buffer.length - this.offset;
        if (remaining < size) {
            var oldBuffer = this.buffer;
            // exponential growth factor of around ~ 1.5
            // https://stackoverflow.com/questions/2269063/buffer-growth-strategy
            var newSize = oldBuffer.length + (oldBuffer.length >> 1) + size;
            this.buffer = Buffer.alloc(newSize);
            oldBuffer.copy(this.buffer);
        }
    }
    addInt32(num) {
        this.ensure(4);
        this.buffer[this.offset++] = (num >>> 24) & 0xff;
        this.buffer[this.offset++] = (num >>> 16) & 0xff;
        this.buffer[this.offset++] = (num >>> 8) & 0xff;
        this.buffer[this.offset++] = (num >>> 0) & 0xff;
        return this;
    }
    addInt16(num) {
        this.ensure(2);
        this.buffer[this.offset++] = (num >>> 8) & 0xff;
        this.buffer[this.offset++] = (num >>> 0) & 0xff;
        return this;
    }
    addCString(string) {
        if (!string) {
            this.ensure(1);
        }
        else {
            var len = Buffer.byteLength(string);
            this.ensure(len + 1); // +1 for null terminator
            this.buffer.write(string, this.offset, 'utf-8');
            this.offset += len;
        }
        this.buffer[this.offset++] = 0; // null terminator
        return this;
    }
    addString(string = '') {
        var len = Buffer.byteLength(string);
        this.ensure(len);
        this.buffer.write(string, this.offset);
        this.offset += len;
        return this;
    }
    add(otherBuffer) {
        this.ensure(otherBuffer.length);
        otherBuffer.copy(this.buffer, this.offset);
        this.offset += otherBuffer.length;
        return this;
    }
    join(code) {
        if (code) {
            this.buffer[this.headerPosition] = code;
            //length is everything in this packet minus the code
            const length = this.offset - (this.headerPosition + 1);
            this.buffer.writeInt32BE(length, this.headerPosition + 1);
        }
        return this.buffer.slice(code ? 0 : 5, this.offset);
    }
    flush(code) {
        var result = this.join(code);
        this.offset = 5;
        this.headerPosition = 0;
        this.buffer = Buffer.allocUnsafe(this.size);
        return result;
    }
}
exports.Writer = Writer;


/***/ }),

/***/ "./node_modules/pg-protocol/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/pg-protocol/dist/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const serializer_1 = __webpack_require__(/*! ./serializer */ "./node_modules/pg-protocol/dist/serializer.js");
exports.serialize = serializer_1.serialize;
const parser_1 = __webpack_require__(/*! ./parser */ "./node_modules/pg-protocol/dist/parser.js");
function parse(stream, callback) {
    const parser = new parser_1.Parser();
    stream.on('data', (buffer) => parser.parse(buffer, callback));
    return new Promise((resolve) => stream.on('end', () => resolve()));
}
exports.parse = parse;


/***/ }),

/***/ "./node_modules/pg-protocol/dist/messages.js":
/*!***************************************************!*\
  !*** ./node_modules/pg-protocol/dist/messages.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseComplete = {
    name: "parseComplete" /* parseComplete */,
    length: 5,
};
exports.bindComplete = {
    name: "bindComplete" /* bindComplete */,
    length: 5,
};
exports.closeComplete = {
    name: "closeComplete" /* closeComplete */,
    length: 5,
};
exports.noData = {
    name: "noData" /* noData */,
    length: 5,
};
exports.portalSuspended = {
    name: "portalSuspended" /* portalSuspended */,
    length: 5,
};
exports.replicationStart = {
    name: "replicationStart" /* replicationStart */,
    length: 4,
};
exports.emptyQuery = {
    name: "emptyQuery" /* emptyQuery */,
    length: 4,
};
exports.copyDone = {
    name: "copyDone" /* copyDone */,
    length: 4,
};
class DatabaseError extends Error {
    constructor(message, length, name) {
        super(message);
        this.length = length;
        this.name = name;
    }
}
exports.DatabaseError = DatabaseError;
class CopyDataMessage {
    constructor(length, chunk) {
        this.length = length;
        this.chunk = chunk;
        this.name = "copyData" /* copyData */;
    }
}
exports.CopyDataMessage = CopyDataMessage;
class CopyResponse {
    constructor(length, name, binary, columnCount) {
        this.length = length;
        this.name = name;
        this.binary = binary;
        this.columnTypes = new Array(columnCount);
    }
}
exports.CopyResponse = CopyResponse;
class Field {
    constructor(name, tableID, columnID, dataTypeID, dataTypeSize, dataTypeModifier, format) {
        this.name = name;
        this.tableID = tableID;
        this.columnID = columnID;
        this.dataTypeID = dataTypeID;
        this.dataTypeSize = dataTypeSize;
        this.dataTypeModifier = dataTypeModifier;
        this.format = format;
    }
}
exports.Field = Field;
class RowDescriptionMessage {
    constructor(length, fieldCount) {
        this.length = length;
        this.fieldCount = fieldCount;
        this.name = "rowDescription" /* rowDescription */;
        this.fields = new Array(this.fieldCount);
    }
}
exports.RowDescriptionMessage = RowDescriptionMessage;
class ParameterStatusMessage {
    constructor(length, parameterName, parameterValue) {
        this.length = length;
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
        this.name = "parameterStatus" /* parameterStatus */;
    }
}
exports.ParameterStatusMessage = ParameterStatusMessage;
class AuthenticationMD5Password {
    constructor(length, salt) {
        this.length = length;
        this.salt = salt;
        this.name = "authenticationMD5Password" /* authenticationMD5Password */;
    }
}
exports.AuthenticationMD5Password = AuthenticationMD5Password;
class BackendKeyDataMessage {
    constructor(length, processID, secretKey) {
        this.length = length;
        this.processID = processID;
        this.secretKey = secretKey;
        this.name = "backendKeyData" /* backendKeyData */;
    }
}
exports.BackendKeyDataMessage = BackendKeyDataMessage;
class NotificationResponseMessage {
    constructor(length, processId, channel, payload) {
        this.length = length;
        this.processId = processId;
        this.channel = channel;
        this.payload = payload;
        this.name = "notification" /* notification */;
    }
}
exports.NotificationResponseMessage = NotificationResponseMessage;
class ReadyForQueryMessage {
    constructor(length, status) {
        this.length = length;
        this.status = status;
        this.name = "readyForQuery" /* readyForQuery */;
    }
}
exports.ReadyForQueryMessage = ReadyForQueryMessage;
class CommandCompleteMessage {
    constructor(length, text) {
        this.length = length;
        this.text = text;
        this.name = "commandComplete" /* commandComplete */;
    }
}
exports.CommandCompleteMessage = CommandCompleteMessage;
class DataRowMessage {
    constructor(length, fields) {
        this.length = length;
        this.fields = fields;
        this.name = "dataRow" /* dataRow */;
        this.fieldCount = fields.length;
    }
}
exports.DataRowMessage = DataRowMessage;
class NoticeMessage {
    constructor(length, message) {
        this.length = length;
        this.message = message;
        this.name = "notice" /* notice */;
    }
}
exports.NoticeMessage = NoticeMessage;


/***/ }),

/***/ "./node_modules/pg-protocol/dist/parser.js":
/*!*************************************************!*\
  !*** ./node_modules/pg-protocol/dist/parser.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = __webpack_require__(/*! ./messages */ "./node_modules/pg-protocol/dist/messages.js");
const buffer_reader_1 = __webpack_require__(/*! ./buffer-reader */ "./node_modules/pg-protocol/dist/buffer-reader.js");
const assert_1 = __importDefault(__webpack_require__(/*! assert */ "assert"));
// every message is prefixed with a single bye
const CODE_LENGTH = 1;
// every message has an int32 length which includes itself but does
// NOT include the code in the length
const LEN_LENGTH = 4;
const HEADER_LENGTH = CODE_LENGTH + LEN_LENGTH;
const emptyBuffer = Buffer.allocUnsafe(0);
class Parser {
    constructor(opts) {
        var _a, _b;
        this.buffer = emptyBuffer;
        this.bufferLength = 0;
        this.bufferOffset = 0;
        this.reader = new buffer_reader_1.BufferReader();
        if (((_a = opts) === null || _a === void 0 ? void 0 : _a.mode) === 'binary') {
            throw new Error('Binary mode not supported yet');
        }
        this.mode = ((_b = opts) === null || _b === void 0 ? void 0 : _b.mode) || 'text';
    }
    parse(buffer, callback) {
        this.mergeBuffer(buffer);
        const bufferFullLength = this.bufferOffset + this.bufferLength;
        let offset = this.bufferOffset;
        while (offset + HEADER_LENGTH <= bufferFullLength) {
            // code is 1 byte long - it identifies the message type
            const code = this.buffer[offset];
            // length is 1 Uint32BE - it is the length of the message EXCLUDING the code
            const length = this.buffer.readUInt32BE(offset + CODE_LENGTH);
            const fullMessageLength = CODE_LENGTH + length;
            if (fullMessageLength + offset <= bufferFullLength) {
                const message = this.handlePacket(offset + HEADER_LENGTH, code, length, this.buffer);
                callback(message);
                offset += fullMessageLength;
            }
            else {
                break;
            }
        }
        if (offset === bufferFullLength) {
            // No more use for the buffer
            this.buffer = emptyBuffer;
            this.bufferLength = 0;
            this.bufferOffset = 0;
        }
        else {
            // Adjust the cursors of remainingBuffer
            this.bufferLength = bufferFullLength - offset;
            this.bufferOffset = offset;
        }
    }
    mergeBuffer(buffer) {
        if (this.bufferLength > 0) {
            const newLength = this.bufferLength + buffer.byteLength;
            const newFullLength = newLength + this.bufferOffset;
            if (newFullLength > this.buffer.byteLength) {
                // We can't concat the new buffer with the remaining one
                let newBuffer;
                if (newLength <= this.buffer.byteLength && this.bufferOffset >= this.bufferLength) {
                    // We can move the relevant part to the beginning of the buffer instead of allocating a new buffer
                    newBuffer = this.buffer;
                }
                else {
                    // Allocate a new larger buffer
                    let newBufferLength = this.buffer.byteLength * 2;
                    while (newLength >= newBufferLength) {
                        newBufferLength *= 2;
                    }
                    newBuffer = Buffer.allocUnsafe(newBufferLength);
                }
                // Move the remaining buffer to the new one
                this.buffer.copy(newBuffer, 0, this.bufferOffset, this.bufferOffset + this.bufferLength);
                this.buffer = newBuffer;
                this.bufferOffset = 0;
            }
            // Concat the new buffer with the remaining one
            buffer.copy(this.buffer, this.bufferOffset + this.bufferLength);
            this.bufferLength = newLength;
        }
        else {
            this.buffer = buffer;
            this.bufferOffset = 0;
            this.bufferLength = buffer.byteLength;
        }
    }
    handlePacket(offset, code, length, bytes) {
        switch (code) {
            case 50 /* BindComplete */:
                return messages_1.bindComplete;
            case 49 /* ParseComplete */:
                return messages_1.parseComplete;
            case 51 /* CloseComplete */:
                return messages_1.closeComplete;
            case 110 /* NoData */:
                return messages_1.noData;
            case 115 /* PortalSuspended */:
                return messages_1.portalSuspended;
            case 99 /* CopyDone */:
                return messages_1.copyDone;
            case 87 /* ReplicationStart */:
                return messages_1.replicationStart;
            case 73 /* EmptyQuery */:
                return messages_1.emptyQuery;
            case 68 /* DataRow */:
                return this.parseDataRowMessage(offset, length, bytes);
            case 67 /* CommandComplete */:
                return this.parseCommandCompleteMessage(offset, length, bytes);
            case 90 /* ReadyForQuery */:
                return this.parseReadyForQueryMessage(offset, length, bytes);
            case 65 /* NotificationResponse */:
                return this.parseNotificationMessage(offset, length, bytes);
            case 82 /* AuthenticationResponse */:
                return this.parseAuthenticationResponse(offset, length, bytes);
            case 83 /* ParameterStatus */:
                return this.parseParameterStatusMessage(offset, length, bytes);
            case 75 /* BackendKeyData */:
                return this.parseBackendKeyData(offset, length, bytes);
            case 69 /* ErrorMessage */:
                return this.parseErrorMessage(offset, length, bytes, "error" /* error */);
            case 78 /* NoticeMessage */:
                return this.parseErrorMessage(offset, length, bytes, "notice" /* notice */);
            case 84 /* RowDescriptionMessage */:
                return this.parseRowDescriptionMessage(offset, length, bytes);
            case 71 /* CopyIn */:
                return this.parseCopyInMessage(offset, length, bytes);
            case 72 /* CopyOut */:
                return this.parseCopyOutMessage(offset, length, bytes);
            case 100 /* CopyData */:
                return this.parseCopyData(offset, length, bytes);
            default:
                assert_1.default.fail(`unknown message code: ${code.toString(16)}`);
        }
    }
    parseReadyForQueryMessage(offset, length, bytes) {
        this.reader.setBuffer(offset, bytes);
        const status = this.reader.string(1);
        return new messages_1.ReadyForQueryMessage(length, status);
    }
    parseCommandCompleteMessage(offset, length, bytes) {
        this.reader.setBuffer(offset, bytes);
        const text = this.reader.cstring();
        return new messages_1.CommandCompleteMessage(length, text);
    }
    parseCopyData(offset, length, bytes) {
        const chunk = bytes.slice(offset, offset + (length - 4));
        return new messages_1.CopyDataMessage(length, chunk);
    }
    parseCopyInMessage(offset, length, bytes) {
        return this.parseCopyMessage(offset, length, bytes, "copyInResponse" /* copyInResponse */);
    }
    parseCopyOutMessage(offset, length, bytes) {
        return this.parseCopyMessage(offset, length, bytes, "copyOutResponse" /* copyOutResponse */);
    }
    parseCopyMessage(offset, length, bytes, messageName) {
        this.reader.setBuffer(offset, bytes);
        const isBinary = this.reader.byte() !== 0;
        const columnCount = this.reader.int16();
        const message = new messages_1.CopyResponse(length, messageName, isBinary, columnCount);
        for (let i = 0; i < columnCount; i++) {
            message.columnTypes[i] = this.reader.int16();
        }
        return message;
    }
    parseNotificationMessage(offset, length, bytes) {
        this.reader.setBuffer(offset, bytes);
        const processId = this.reader.int32();
        const channel = this.reader.cstring();
        const payload = this.reader.cstring();
        return new messages_1.NotificationResponseMessage(length, processId, channel, payload);
    }
    parseRowDescriptionMessage(offset, length, bytes) {
        this.reader.setBuffer(offset, bytes);
        const fieldCount = this.reader.int16();
        const message = new messages_1.RowDescriptionMessage(length, fieldCount);
        for (let i = 0; i < fieldCount; i++) {
            message.fields[i] = this.parseField();
        }
        return message;
    }
    parseField() {
        const name = this.reader.cstring();
        const tableID = this.reader.int32();
        const columnID = this.reader.int16();
        const dataTypeID = this.reader.int32();
        const dataTypeSize = this.reader.int16();
        const dataTypeModifier = this.reader.int32();
        const mode = this.reader.int16() === 0 ? 'text' : 'binary';
        return new messages_1.Field(name, tableID, columnID, dataTypeID, dataTypeSize, dataTypeModifier, mode);
    }
    parseDataRowMessage(offset, length, bytes) {
        this.reader.setBuffer(offset, bytes);
        const fieldCount = this.reader.int16();
        const fields = new Array(fieldCount);
        for (let i = 0; i < fieldCount; i++) {
            const len = this.reader.int32();
            // a -1 for length means the value of the field is null
            fields[i] = len === -1 ? null : this.reader.string(len);
        }
        return new messages_1.DataRowMessage(length, fields);
    }
    parseParameterStatusMessage(offset, length, bytes) {
        this.reader.setBuffer(offset, bytes);
        const name = this.reader.cstring();
        const value = this.reader.cstring();
        return new messages_1.ParameterStatusMessage(length, name, value);
    }
    parseBackendKeyData(offset, length, bytes) {
        this.reader.setBuffer(offset, bytes);
        const processID = this.reader.int32();
        const secretKey = this.reader.int32();
        return new messages_1.BackendKeyDataMessage(length, processID, secretKey);
    }
    parseAuthenticationResponse(offset, length, bytes) {
        this.reader.setBuffer(offset, bytes);
        const code = this.reader.int32();
        // TODO(bmc): maybe better types here
        const message = {
            name: "authenticationOk" /* authenticationOk */,
            length,
        };
        switch (code) {
            case 0: // AuthenticationOk
                break;
            case 3: // AuthenticationCleartextPassword
                if (message.length === 8) {
                    message.name = "authenticationCleartextPassword" /* authenticationCleartextPassword */;
                }
                break;
            case 5: // AuthenticationMD5Password
                if (message.length === 12) {
                    message.name = "authenticationMD5Password" /* authenticationMD5Password */;
                    const salt = this.reader.bytes(4);
                    return new messages_1.AuthenticationMD5Password(length, salt);
                }
                break;
            case 10: // AuthenticationSASL
                message.name = "authenticationSASL" /* authenticationSASL */;
                message.mechanisms = [];
                let mechanism;
                do {
                    mechanism = this.reader.cstring();
                    if (mechanism) {
                        message.mechanisms.push(mechanism);
                    }
                } while (mechanism);
                break;
            case 11: // AuthenticationSASLContinue
                message.name = "authenticationSASLContinue" /* authenticationSASLContinue */;
                message.data = this.reader.string(length - 8);
                break;
            case 12: // AuthenticationSASLFinal
                message.name = "authenticationSASLFinal" /* authenticationSASLFinal */;
                message.data = this.reader.string(length - 8);
                break;
            default:
                throw new Error('Unknown authenticationOk message type ' + code);
        }
        return message;
    }
    parseErrorMessage(offset, length, bytes, name) {
        this.reader.setBuffer(offset, bytes);
        const fields = {};
        let fieldType = this.reader.string(1);
        while (fieldType !== '\0') {
            fields[fieldType] = this.reader.cstring();
            fieldType = this.reader.string(1);
        }
        const messageValue = fields.M;
        const message = name === "notice" /* notice */
            ? new messages_1.NoticeMessage(length, messageValue)
            : new messages_1.DatabaseError(messageValue, length, name);
        message.severity = fields.S;
        message.code = fields.C;
        message.detail = fields.D;
        message.hint = fields.H;
        message.position = fields.P;
        message.internalPosition = fields.p;
        message.internalQuery = fields.q;
        message.where = fields.W;
        message.schema = fields.s;
        message.table = fields.t;
        message.column = fields.c;
        message.dataType = fields.d;
        message.constraint = fields.n;
        message.file = fields.F;
        message.line = fields.L;
        message.routine = fields.R;
        return message;
    }
}
exports.Parser = Parser;


/***/ }),

/***/ "./node_modules/pg-protocol/dist/serializer.js":
/*!*****************************************************!*\
  !*** ./node_modules/pg-protocol/dist/serializer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const buffer_writer_1 = __webpack_require__(/*! ./buffer-writer */ "./node_modules/pg-protocol/dist/buffer-writer.js");
const writer = new buffer_writer_1.Writer();
const startup = (opts) => {
    // protocol version
    writer.addInt16(3).addInt16(0);
    for (const key of Object.keys(opts)) {
        writer.addCString(key).addCString(opts[key]);
    }
    writer.addCString('client_encoding').addCString('UTF8');
    var bodyBuffer = writer.addCString('').flush();
    // this message is sent without a code
    var length = bodyBuffer.length + 4;
    return new buffer_writer_1.Writer().addInt32(length).add(bodyBuffer).flush();
};
const requestSsl = () => {
    const response = Buffer.allocUnsafe(8);
    response.writeInt32BE(8, 0);
    response.writeInt32BE(80877103, 4);
    return response;
};
const password = (password) => {
    return writer.addCString(password).flush(112 /* startup */);
};
const sendSASLInitialResponseMessage = function (mechanism, initialResponse) {
    // 0x70 = 'p'
    writer.addCString(mechanism).addInt32(Buffer.byteLength(initialResponse)).addString(initialResponse);
    return writer.flush(112 /* startup */);
};
const sendSCRAMClientFinalMessage = function (additionalData) {
    return writer.addString(additionalData).flush(112 /* startup */);
};
const query = (text) => {
    return writer.addCString(text).flush(81 /* query */);
};
const emptyArray = [];
const parse = (query) => {
    // expect something like this:
    // { name: 'queryName',
    //   text: 'select * from blah',
    //   types: ['int8', 'bool'] }
    // normalize missing query names to allow for null
    const name = query.name || '';
    if (name.length > 63) {
        /* eslint-disable no-console */
        console.error('Warning! Postgres only supports 63 characters for query names.');
        console.error('You supplied %s (%s)', name, name.length);
        console.error('This can cause conflicts and silent errors executing queries');
        /* eslint-enable no-console */
    }
    const types = query.types || emptyArray;
    var len = types.length;
    var buffer = writer
        .addCString(name) // name of query
        .addCString(query.text) // actual query text
        .addInt16(len);
    for (var i = 0; i < len; i++) {
        buffer.addInt32(types[i]);
    }
    return writer.flush(80 /* parse */);
};
const bind = (config = {}) => {
    // normalize config
    const portal = config.portal || '';
    const statement = config.statement || '';
    const binary = config.binary || false;
    var values = config.values || emptyArray;
    var len = values.length;
    var useBinary = false;
    // TODO(bmc): all the loops in here aren't nice, we can do better
    for (var j = 0; j < len; j++) {
        useBinary = useBinary || values[j] instanceof Buffer;
    }
    var buffer = writer.addCString(portal).addCString(statement);
    if (!useBinary) {
        buffer.addInt16(0);
    }
    else {
        buffer.addInt16(len);
        for (j = 0; j < len; j++) {
            buffer.addInt16(values[j] instanceof Buffer ? 1 : 0);
        }
    }
    buffer.addInt16(len);
    for (var i = 0; i < len; i++) {
        var val = values[i];
        if (val === null || typeof val === 'undefined') {
            buffer.addInt32(-1);
        }
        else if (val instanceof Buffer) {
            buffer.addInt32(val.length);
            buffer.add(val);
        }
        else {
            buffer.addInt32(Buffer.byteLength(val));
            buffer.addString(val);
        }
    }
    if (binary) {
        buffer.addInt16(1); // format codes to use binary
        buffer.addInt16(1);
    }
    else {
        buffer.addInt16(0); // format codes to use text
    }
    return writer.flush(66 /* bind */);
};
const emptyExecute = Buffer.from([69 /* execute */, 0x00, 0x00, 0x00, 0x09, 0x00, 0x00, 0x00, 0x00, 0x00]);
const execute = (config) => {
    // this is the happy path for most queries
    if (!config || (!config.portal && !config.rows)) {
        return emptyExecute;
    }
    const portal = config.portal || '';
    const rows = config.rows || 0;
    const portalLength = Buffer.byteLength(portal);
    const len = 4 + portalLength + 1 + 4;
    // one extra bit for code
    const buff = Buffer.allocUnsafe(1 + len);
    buff[0] = 69 /* execute */;
    buff.writeInt32BE(len, 1);
    buff.write(portal, 5, 'utf-8');
    buff[portalLength + 5] = 0; // null terminate portal cString
    buff.writeUInt32BE(rows, buff.length - 4);
    return buff;
};
const cancel = (processID, secretKey) => {
    const buffer = Buffer.allocUnsafe(16);
    buffer.writeInt32BE(16, 0);
    buffer.writeInt16BE(1234, 4);
    buffer.writeInt16BE(5678, 6);
    buffer.writeInt32BE(processID, 8);
    buffer.writeInt32BE(secretKey, 12);
    return buffer;
};
const cstringMessage = (code, string) => {
    const stringLen = Buffer.byteLength(string);
    const len = 4 + stringLen + 1;
    // one extra bit for code
    const buffer = Buffer.allocUnsafe(1 + len);
    buffer[0] = code;
    buffer.writeInt32BE(len, 1);
    buffer.write(string, 5, 'utf-8');
    buffer[len] = 0; // null terminate cString
    return buffer;
};
const emptyDescribePortal = writer.addCString('P').flush(68 /* describe */);
const emptyDescribeStatement = writer.addCString('S').flush(68 /* describe */);
const describe = (msg) => {
    return msg.name
        ? cstringMessage(68 /* describe */, `${msg.type}${msg.name || ''}`)
        : msg.type === 'P'
            ? emptyDescribePortal
            : emptyDescribeStatement;
};
const close = (msg) => {
    const text = `${msg.type}${msg.name || ''}`;
    return cstringMessage(67 /* close */, text);
};
const copyData = (chunk) => {
    return writer.add(chunk).flush(100 /* copyFromChunk */);
};
const copyFail = (message) => {
    return cstringMessage(102 /* copyFail */, message);
};
const codeOnlyBuffer = (code) => Buffer.from([code, 0x00, 0x00, 0x00, 0x04]);
const flushBuffer = codeOnlyBuffer(72 /* flush */);
const syncBuffer = codeOnlyBuffer(83 /* sync */);
const endBuffer = codeOnlyBuffer(88 /* end */);
const copyDoneBuffer = codeOnlyBuffer(99 /* copyDone */);
const serialize = {
    startup,
    password,
    requestSsl,
    sendSASLInitialResponseMessage,
    sendSCRAMClientFinalMessage,
    query,
    parse,
    bind,
    execute,
    describe,
    close,
    flush: () => flushBuffer,
    sync: () => syncBuffer,
    end: () => endBuffer,
    copyData,
    copyDone: () => copyDoneBuffer,
    copyFail,
    cancel,
};
exports.serialize = serialize;


/***/ }),

/***/ "./node_modules/pg-types/index.js":
/*!****************************************!*\
  !*** ./node_modules/pg-types/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var textParsers = __webpack_require__(/*! ./lib/textParsers */ "./node_modules/pg-types/lib/textParsers.js");
var binaryParsers = __webpack_require__(/*! ./lib/binaryParsers */ "./node_modules/pg-types/lib/binaryParsers.js");
var arrayParser = __webpack_require__(/*! ./lib/arrayParser */ "./node_modules/pg-types/lib/arrayParser.js");
var builtinTypes = __webpack_require__(/*! ./lib/builtins */ "./node_modules/pg-types/lib/builtins.js");

exports.getTypeParser = getTypeParser;
exports.setTypeParser = setTypeParser;
exports.arrayParser = arrayParser;
exports.builtins = builtinTypes;

var typeParsers = {
  text: {},
  binary: {}
};

//the empty parse function
function noParse (val) {
  return String(val);
};

//returns a function used to convert a specific type (specified by
//oid) into a result javascript type
//note: the oid can be obtained via the following sql query:
//SELECT oid FROM pg_type WHERE typname = 'TYPE_NAME_HERE';
function getTypeParser (oid, format) {
  format = format || 'text';
  if (!typeParsers[format]) {
    return noParse;
  }
  return typeParsers[format][oid] || noParse;
};

function setTypeParser (oid, format, parseFn) {
  if(typeof format == 'function') {
    parseFn = format;
    format = 'text';
  }
  typeParsers[format][oid] = parseFn;
};

textParsers.init(function(oid, converter) {
  typeParsers.text[oid] = converter;
});

binaryParsers.init(function(oid, converter) {
  typeParsers.binary[oid] = converter;
});


/***/ }),

/***/ "./node_modules/pg-types/lib/arrayParser.js":
/*!**************************************************!*\
  !*** ./node_modules/pg-types/lib/arrayParser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var array = __webpack_require__(/*! postgres-array */ "./node_modules/postgres-array/index.js");

module.exports = {
  create: function (source, transform) {
    return {
      parse: function() {
        return array.parse(source, transform);
      }
    };
  }
};


/***/ }),

/***/ "./node_modules/pg-types/lib/binaryParsers.js":
/*!****************************************************!*\
  !*** ./node_modules/pg-types/lib/binaryParsers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parseInt64 = __webpack_require__(/*! pg-int8 */ "./node_modules/pg-int8/index.js");

var parseBits = function(data, bits, offset, invert, callback) {
  offset = offset || 0;
  invert = invert || false;
  callback = callback || function(lastValue, newValue, bits) { return (lastValue * Math.pow(2, bits)) + newValue; };
  var offsetBytes = offset >> 3;

  var inv = function(value) {
    if (invert) {
      return ~value & 0xff;
    }

    return value;
  };

  // read first (maybe partial) byte
  var mask = 0xff;
  var firstBits = 8 - (offset % 8);
  if (bits < firstBits) {
    mask = (0xff << (8 - bits)) & 0xff;
    firstBits = bits;
  }

  if (offset) {
    mask = mask >> (offset % 8);
  }

  var result = 0;
  if ((offset % 8) + bits >= 8) {
    result = callback(0, inv(data[offsetBytes]) & mask, firstBits);
  }

  // read bytes
  var bytes = (bits + offset) >> 3;
  for (var i = offsetBytes + 1; i < bytes; i++) {
    result = callback(result, inv(data[i]), 8);
  }

  // bits to read, that are not a complete byte
  var lastBits = (bits + offset) % 8;
  if (lastBits > 0) {
    result = callback(result, inv(data[bytes]) >> (8 - lastBits), lastBits);
  }

  return result;
};

var parseFloatFromBits = function(data, precisionBits, exponentBits) {
  var bias = Math.pow(2, exponentBits - 1) - 1;
  var sign = parseBits(data, 1);
  var exponent = parseBits(data, exponentBits, 1);

  if (exponent === 0) {
    return 0;
  }

  // parse mantissa
  var precisionBitsCounter = 1;
  var parsePrecisionBits = function(lastValue, newValue, bits) {
    if (lastValue === 0) {
      lastValue = 1;
    }

    for (var i = 1; i <= bits; i++) {
      precisionBitsCounter /= 2;
      if ((newValue & (0x1 << (bits - i))) > 0) {
        lastValue += precisionBitsCounter;
      }
    }

    return lastValue;
  };

  var mantissa = parseBits(data, precisionBits, exponentBits + 1, false, parsePrecisionBits);

  // special cases
  if (exponent == (Math.pow(2, exponentBits + 1) - 1)) {
    if (mantissa === 0) {
      return (sign === 0) ? Infinity : -Infinity;
    }

    return NaN;
  }

  // normale number
  return ((sign === 0) ? 1 : -1) * Math.pow(2, exponent - bias) * mantissa;
};

var parseInt16 = function(value) {
  if (parseBits(value, 1) == 1) {
    return -1 * (parseBits(value, 15, 1, true) + 1);
  }

  return parseBits(value, 15, 1);
};

var parseInt32 = function(value) {
  if (parseBits(value, 1) == 1) {
    return -1 * (parseBits(value, 31, 1, true) + 1);
  }

  return parseBits(value, 31, 1);
};

var parseFloat32 = function(value) {
  return parseFloatFromBits(value, 23, 8);
};

var parseFloat64 = function(value) {
  return parseFloatFromBits(value, 52, 11);
};

var parseNumeric = function(value) {
  var sign = parseBits(value, 16, 32);
  if (sign == 0xc000) {
    return NaN;
  }

  var weight = Math.pow(10000, parseBits(value, 16, 16));
  var result = 0;

  var digits = [];
  var ndigits = parseBits(value, 16);
  for (var i = 0; i < ndigits; i++) {
    result += parseBits(value, 16, 64 + (16 * i)) * weight;
    weight /= 10000;
  }

  var scale = Math.pow(10, parseBits(value, 16, 48));
  return ((sign === 0) ? 1 : -1) * Math.round(result * scale) / scale;
};

var parseDate = function(isUTC, value) {
  var sign = parseBits(value, 1);
  var rawValue = parseBits(value, 63, 1);

  // discard usecs and shift from 2000 to 1970
  var result = new Date((((sign === 0) ? 1 : -1) * rawValue / 1000) + 946684800000);

  if (!isUTC) {
    result.setTime(result.getTime() + result.getTimezoneOffset() * 60000);
  }

  // add microseconds to the date
  result.usec = rawValue % 1000;
  result.getMicroSeconds = function() {
    return this.usec;
  };
  result.setMicroSeconds = function(value) {
    this.usec = value;
  };
  result.getUTCMicroSeconds = function() {
    return this.usec;
  };

  return result;
};

var parseArray = function(value) {
  var dim = parseBits(value, 32);

  var flags = parseBits(value, 32, 32);
  var elementType = parseBits(value, 32, 64);

  var offset = 96;
  var dims = [];
  for (var i = 0; i < dim; i++) {
    // parse dimension
    dims[i] = parseBits(value, 32, offset);
    offset += 32;

    // ignore lower bounds
    offset += 32;
  }

  var parseElement = function(elementType) {
    // parse content length
    var length = parseBits(value, 32, offset);
    offset += 32;

    // parse null values
    if (length == 0xffffffff) {
      return null;
    }

    var result;
    if ((elementType == 0x17) || (elementType == 0x14)) {
      // int/bigint
      result = parseBits(value, length * 8, offset);
      offset += length * 8;
      return result;
    }
    else if (elementType == 0x19) {
      // string
      result = value.toString(this.encoding, offset >> 3, (offset += (length << 3)) >> 3);
      return result;
    }
    else {
      console.log("ERROR: ElementType not implemented: " + elementType);
    }
  };

  var parse = function(dimension, elementType) {
    var array = [];
    var i;

    if (dimension.length > 1) {
      var count = dimension.shift();
      for (i = 0; i < count; i++) {
        array[i] = parse(dimension, elementType);
      }
      dimension.unshift(count);
    }
    else {
      for (i = 0; i < dimension[0]; i++) {
        array[i] = parseElement(elementType);
      }
    }

    return array;
  };

  return parse(dims, elementType);
};

var parseText = function(value) {
  return value.toString('utf8');
};

var parseBool = function(value) {
  if(value === null) return null;
  return (parseBits(value, 8) > 0);
};

var init = function(register) {
  register(20, parseInt64);
  register(21, parseInt16);
  register(23, parseInt32);
  register(26, parseInt32);
  register(1700, parseNumeric);
  register(700, parseFloat32);
  register(701, parseFloat64);
  register(16, parseBool);
  register(1114, parseDate.bind(null, false));
  register(1184, parseDate.bind(null, true));
  register(1000, parseArray);
  register(1007, parseArray);
  register(1016, parseArray);
  register(1008, parseArray);
  register(1009, parseArray);
  register(25, parseText);
};

module.exports = {
  init: init
};


/***/ }),

/***/ "./node_modules/pg-types/lib/builtins.js":
/*!***********************************************!*\
  !*** ./node_modules/pg-types/lib/builtins.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Following query was used to generate this file:

 SELECT json_object_agg(UPPER(PT.typname), PT.oid::int4 ORDER BY pt.oid)
 FROM pg_type PT
 WHERE typnamespace = (SELECT pgn.oid FROM pg_namespace pgn WHERE nspname = 'pg_catalog') -- Take only builting Postgres types with stable OID (extension types are not guaranted to be stable)
 AND typtype = 'b' -- Only basic types
 AND typelem = 0 -- Ignore aliases
 AND typisdefined -- Ignore undefined types
 */

module.exports = {
    BOOL: 16,
    BYTEA: 17,
    CHAR: 18,
    INT8: 20,
    INT2: 21,
    INT4: 23,
    REGPROC: 24,
    TEXT: 25,
    OID: 26,
    TID: 27,
    XID: 28,
    CID: 29,
    JSON: 114,
    XML: 142,
    PG_NODE_TREE: 194,
    SMGR: 210,
    PATH: 602,
    POLYGON: 604,
    CIDR: 650,
    FLOAT4: 700,
    FLOAT8: 701,
    ABSTIME: 702,
    RELTIME: 703,
    TINTERVAL: 704,
    CIRCLE: 718,
    MACADDR8: 774,
    MONEY: 790,
    MACADDR: 829,
    INET: 869,
    ACLITEM: 1033,
    BPCHAR: 1042,
    VARCHAR: 1043,
    DATE: 1082,
    TIME: 1083,
    TIMESTAMP: 1114,
    TIMESTAMPTZ: 1184,
    INTERVAL: 1186,
    TIMETZ: 1266,
    BIT: 1560,
    VARBIT: 1562,
    NUMERIC: 1700,
    REFCURSOR: 1790,
    REGPROCEDURE: 2202,
    REGOPER: 2203,
    REGOPERATOR: 2204,
    REGCLASS: 2205,
    REGTYPE: 2206,
    UUID: 2950,
    TXID_SNAPSHOT: 2970,
    PG_LSN: 3220,
    PG_NDISTINCT: 3361,
    PG_DEPENDENCIES: 3402,
    TSVECTOR: 3614,
    TSQUERY: 3615,
    GTSVECTOR: 3642,
    REGCONFIG: 3734,
    REGDICTIONARY: 3769,
    JSONB: 3802,
    REGNAMESPACE: 4089,
    REGROLE: 4096
};


/***/ }),

/***/ "./node_modules/pg-types/lib/textParsers.js":
/*!**************************************************!*\
  !*** ./node_modules/pg-types/lib/textParsers.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var array = __webpack_require__(/*! postgres-array */ "./node_modules/postgres-array/index.js")
var arrayParser = __webpack_require__(/*! ./arrayParser */ "./node_modules/pg-types/lib/arrayParser.js");
var parseDate = __webpack_require__(/*! postgres-date */ "./node_modules/postgres-date/index.js");
var parseInterval = __webpack_require__(/*! postgres-interval */ "./node_modules/postgres-interval/index.js");
var parseByteA = __webpack_require__(/*! postgres-bytea */ "./node_modules/postgres-bytea/index.js");

function allowNull (fn) {
  return function nullAllowed (value) {
    if (value === null) return value
    return fn(value)
  }
}

function parseBool (value) {
  if (value === null) return value
  return value === 'TRUE' ||
    value === 't' ||
    value === 'true' ||
    value === 'y' ||
    value === 'yes' ||
    value === 'on' ||
    value === '1';
}

function parseBoolArray (value) {
  if (!value) return null
  return array.parse(value, parseBool)
}

function parseBaseTenInt (string) {
  return parseInt(string, 10)
}

function parseIntegerArray (value) {
  if (!value) return null
  return array.parse(value, allowNull(parseBaseTenInt))
}

function parseBigIntegerArray (value) {
  if (!value) return null
  return array.parse(value, allowNull(function (entry) {
    return parseBigInteger(entry).trim()
  }))
}

var parsePointArray = function(value) {
  if(!value) { return null; }
  var p = arrayParser.create(value, function(entry) {
    if(entry !== null) {
      entry = parsePoint(entry);
    }
    return entry;
  });

  return p.parse();
};

var parseFloatArray = function(value) {
  if(!value) { return null; }
  var p = arrayParser.create(value, function(entry) {
    if(entry !== null) {
      entry = parseFloat(entry);
    }
    return entry;
  });

  return p.parse();
};

var parseStringArray = function(value) {
  if(!value) { return null; }

  var p = arrayParser.create(value);
  return p.parse();
};

var parseDateArray = function(value) {
  if (!value) { return null; }

  var p = arrayParser.create(value, function(entry) {
    if (entry !== null) {
      entry = parseDate(entry);
    }
    return entry;
  });

  return p.parse();
};

var parseIntervalArray = function(value) {
  if (!value) { return null; }

  var p = arrayParser.create(value, function(entry) {
    if (entry !== null) {
      entry = parseInterval(entry);
    }
    return entry;
  });

  return p.parse();
};

var parseByteAArray = function(value) {
  if (!value) { return null; }

  return array.parse(value, allowNull(parseByteA));
};

var parseInteger = function(value) {
  return parseInt(value, 10);
};

var parseBigInteger = function(value) {
  var valStr = String(value);
  if (/^\d+$/.test(valStr)) { return valStr; }
  return value;
};

var parseJsonArray = function(value) {
  if (!value) { return null; }

  return array.parse(value, allowNull(JSON.parse));
};

var parsePoint = function(value) {
  if (value[0] !== '(') { return null; }

  value = value.substring( 1, value.length - 1 ).split(',');

  return {
    x: parseFloat(value[0])
  , y: parseFloat(value[1])
  };
};

var parseCircle = function(value) {
  if (value[0] !== '<' && value[1] !== '(') { return null; }

  var point = '(';
  var radius = '';
  var pointParsed = false;
  for (var i = 2; i < value.length - 1; i++){
    if (!pointParsed) {
      point += value[i];
    }

    if (value[i] === ')') {
      pointParsed = true;
      continue;
    } else if (!pointParsed) {
      continue;
    }

    if (value[i] === ','){
      continue;
    }

    radius += value[i];
  }
  var result = parsePoint(point);
  result.radius = parseFloat(radius);

  return result;
};

var init = function(register) {
  register(20, parseBigInteger); // int8
  register(21, parseInteger); // int2
  register(23, parseInteger); // int4
  register(26, parseInteger); // oid
  register(700, parseFloat); // float4/real
  register(701, parseFloat); // float8/double
  register(16, parseBool);
  register(1082, parseDate); // date
  register(1114, parseDate); // timestamp without timezone
  register(1184, parseDate); // timestamp
  register(600, parsePoint); // point
  register(651, parseStringArray); // cidr[]
  register(718, parseCircle); // circle
  register(1000, parseBoolArray);
  register(1001, parseByteAArray);
  register(1005, parseIntegerArray); // _int2
  register(1007, parseIntegerArray); // _int4
  register(1028, parseIntegerArray); // oid[]
  register(1016, parseBigIntegerArray); // _int8
  register(1017, parsePointArray); // point[]
  register(1021, parseFloatArray); // _float4
  register(1022, parseFloatArray); // _float8
  register(1231, parseFloatArray); // _numeric
  register(1014, parseStringArray); //char
  register(1015, parseStringArray); //varchar
  register(1008, parseStringArray);
  register(1009, parseStringArray);
  register(1040, parseStringArray); // macaddr[]
  register(1041, parseStringArray); // inet[]
  register(1115, parseDateArray); // timestamp without time zone[]
  register(1182, parseDateArray); // _date
  register(1185, parseDateArray); // timestamp with time zone[]
  register(1186, parseInterval);
  register(1187, parseIntervalArray);
  register(17, parseByteA);
  register(114, JSON.parse.bind(JSON)); // json
  register(3802, JSON.parse.bind(JSON)); // jsonb
  register(199, parseJsonArray); // json[]
  register(3807, parseJsonArray); // jsonb[]
  register(3907, parseStringArray); // numrange[]
  register(2951, parseStringArray); // uuid[]
  register(791, parseStringArray); // money[]
  register(1183, parseStringArray); // time[]
  register(1270, parseStringArray); // timetz[]
};

module.exports = {
  init: init
};


/***/ }),

/***/ "./node_modules/pg/lib/client.js":
/*!***************************************!*\
  !*** ./node_modules/pg/lib/client.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter
var util = __webpack_require__(/*! util */ "util")
var utils = __webpack_require__(/*! ./utils */ "./node_modules/pg/lib/utils.js")
var sasl = __webpack_require__(/*! ./sasl */ "./node_modules/pg/lib/sasl.js")
var pgPass = __webpack_require__(/*! pgpass */ "./node_modules/pgpass/lib/index.js")
var TypeOverrides = __webpack_require__(/*! ./type-overrides */ "./node_modules/pg/lib/type-overrides.js")

var ConnectionParameters = __webpack_require__(/*! ./connection-parameters */ "./node_modules/pg/lib/connection-parameters.js")
var Query = __webpack_require__(/*! ./query */ "./node_modules/pg/lib/query.js")
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/pg/lib/defaults.js")
var Connection = __webpack_require__(/*! ./connection */ "./node_modules/pg/lib/connection.js")

class Client extends EventEmitter {
  constructor(config) {
    super()

    this.connectionParameters = new ConnectionParameters(config)
    this.user = this.connectionParameters.user
    this.database = this.connectionParameters.database
    this.port = this.connectionParameters.port
    this.host = this.connectionParameters.host

    // "hiding" the password so it doesn't show up in stack traces
    // or if the client is console.logged
    Object.defineProperty(this, 'password', {
      configurable: true,
      enumerable: false,
      writable: true,
      value: this.connectionParameters.password,
    })

    this.replication = this.connectionParameters.replication

    var c = config || {}

    this._Promise = c.Promise || global.Promise
    this._types = new TypeOverrides(c.types)
    this._ending = false
    this._connecting = false
    this._connected = false
    this._connectionError = false
    this._queryable = true

    this.connection =
      c.connection ||
      new Connection({
        stream: c.stream,
        ssl: this.connectionParameters.ssl,
        keepAlive: c.keepAlive || false,
        keepAliveInitialDelayMillis: c.keepAliveInitialDelayMillis || 0,
        encoding: this.connectionParameters.client_encoding || 'utf8',
      })
    this.queryQueue = []
    this.binary = c.binary || defaults.binary
    this.processID = null
    this.secretKey = null
    this.ssl = this.connectionParameters.ssl || false
    this._connectionTimeoutMillis = c.connectionTimeoutMillis || 0
  }

  _errorAllQueries(err) {
    const enqueueError = (query) => {
      process.nextTick(() => {
        query.handleError(err, this.connection)
      })
    }

    if (this.activeQuery) {
      enqueueError(this.activeQuery)
      this.activeQuery = null
    }

    this.queryQueue.forEach(enqueueError)
    this.queryQueue.length = 0
  }

  _connect(callback) {
    var self = this
    var con = this.connection
    this._connectionCallback = callback

    if (this._connecting || this._connected) {
      const err = new Error('Client has already been connected. You cannot reuse a client.')
      process.nextTick(() => {
        callback(err)
      })
      return
    }
    this._connecting = true

    this.connectionTimeoutHandle
    if (this._connectionTimeoutMillis > 0) {
      this.connectionTimeoutHandle = setTimeout(() => {
        con._ending = true
        con.stream.destroy(new Error('timeout expired'))
      }, this._connectionTimeoutMillis)
    }

    if (this.host && this.host.indexOf('/') === 0) {
      con.connect(this.host + '/.s.PGSQL.' + this.port)
    } else {
      con.connect(this.port, this.host)
    }

    // once connection is established send startup message
    con.on('connect', function () {
      if (self.ssl) {
        con.requestSsl()
      } else {
        con.startup(self.getStartupConf())
      }
    })

    con.on('sslconnect', function () {
      con.startup(self.getStartupConf())
    })

    this._attachListeners(con)

    con.once('end', () => {
      const error = this._ending ? new Error('Connection terminated') : new Error('Connection terminated unexpectedly')

      clearTimeout(this.connectionTimeoutHandle)
      this._errorAllQueries(error)

      if (!this._ending) {
        // if the connection is ended without us calling .end()
        // on this client then we have an unexpected disconnection
        // treat this as an error unless we've already emitted an error
        // during connection.
        if (this._connecting && !this._connectionError) {
          if (this._connectionCallback) {
            this._connectionCallback(error)
          } else {
            this._handleErrorEvent(error)
          }
        } else if (!this._connectionError) {
          this._handleErrorEvent(error)
        }
      }

      process.nextTick(() => {
        this.emit('end')
      })
    })
  }

  connect(callback) {
    if (callback) {
      this._connect(callback)
      return
    }

    return new this._Promise((resolve, reject) => {
      this._connect((error) => {
        if (error) {
          reject(error)
        } else {
          resolve()
        }
      })
    })
  }

  _attachListeners(con) {
    // password request handling
    con.on('authenticationCleartextPassword', this._handleAuthCleartextPassword.bind(this))
    // password request handling
    con.on('authenticationMD5Password', this._handleAuthMD5Password.bind(this))
    // password request handling (SASL)
    con.on('authenticationSASL', this._handleAuthSASL.bind(this))
    con.on('authenticationSASLContinue', this._handleAuthSASLContinue.bind(this))
    con.on('authenticationSASLFinal', this._handleAuthSASLFinal.bind(this))
    con.on('backendKeyData', this._handleBackendKeyData.bind(this))
    con.on('error', this._handleErrorEvent.bind(this))
    con.on('errorMessage', this._handleErrorMessage.bind(this))
    con.on('readyForQuery', this._handleReadyForQuery.bind(this))
    con.on('notice', this._handleNotice.bind(this))
    con.on('rowDescription', this._handleRowDescription.bind(this))
    con.on('dataRow', this._handleDataRow.bind(this))
    con.on('portalSuspended', this._handlePortalSuspended.bind(this))
    con.on('emptyQuery', this._handleEmptyQuery.bind(this))
    con.on('commandComplete', this._handleCommandComplete.bind(this))
    con.on('parseComplete', this._handleParseComplete.bind(this))
    con.on('copyInResponse', this._handleCopyInResponse.bind(this))
    con.on('copyData', this._handleCopyData.bind(this))
    con.on('notification', this._handleNotification.bind(this))
  }

  // TODO(bmc): deprecate pgpass "built in" integration since this.password can be a function
  // it can be supplied by the user if required - this is a breaking change!
  _checkPgPass(cb) {
    const con = this.connection
    if (typeof this.password === 'function') {
      this._Promise
        .resolve()
        .then(() => this.password())
        .then((pass) => {
          if (pass !== undefined) {
            if (typeof pass !== 'string') {
              con.emit('error', new TypeError('Password must be a string'))
              return
            }
            this.connectionParameters.password = this.password = pass
          } else {
            this.connectionParameters.password = this.password = null
          }
          cb()
        })
        .catch((err) => {
          con.emit('error', err)
        })
    } else if (this.password !== null) {
      cb()
    } else {
      pgPass(this.connectionParameters, (pass) => {
        if (undefined !== pass) {
          this.connectionParameters.password = this.password = pass
        }
        cb()
      })
    }
  }

  _handleAuthCleartextPassword(msg) {
    this._checkPgPass(() => {
      this.connection.password(this.password)
    })
  }

  _handleAuthMD5Password(msg) {
    this._checkPgPass(() => {
      const hashedPassword = utils.postgresMd5PasswordHash(this.user, this.password, msg.salt)
      this.connection.password(hashedPassword)
    })
  }

  _handleAuthSASL(msg) {
    this._checkPgPass(() => {
      this.saslSession = sasl.startSession(msg.mechanisms)
      this.connection.sendSASLInitialResponseMessage(this.saslSession.mechanism, this.saslSession.response)
    })
  }

  _handleAuthSASLContinue(msg) {
    sasl.continueSession(this.saslSession, this.password, msg.data)
    this.connection.sendSCRAMClientFinalMessage(this.saslSession.response)
  }

  _handleAuthSASLFinal(msg) {
    sasl.finalizeSession(this.saslSession, msg.data)
    this.saslSession = null
  }

  _handleBackendKeyData(msg) {
    this.processID = msg.processID
    this.secretKey = msg.secretKey
  }

  _handleReadyForQuery(msg) {
    if (this._connecting) {
      this._connecting = false
      this._connected = true
      clearTimeout(this.connectionTimeoutHandle)

      // process possible callback argument to Client#connect
      if (this._connectionCallback) {
        this._connectionCallback(null, this)
        // remove callback for proper error handling
        // after the connect event
        this._connectionCallback = null
      }
      this.emit('connect')
    }
    const { activeQuery } = this
    this.activeQuery = null
    this.readyForQuery = true
    if (activeQuery) {
      activeQuery.handleReadyForQuery(this.connection)
    }
    this._pulseQueryQueue()
  }

  // if we receieve an error event or error message
  // during the connection process we handle it here
  _handleErrorWhileConnecting(err) {
    if (this._connectionError) {
      // TODO(bmc): this is swallowing errors - we shouldn't do this
      return
    }
    this._connectionError = true
    clearTimeout(this.connectionTimeoutHandle)
    if (this._connectionCallback) {
      return this._connectionCallback(err)
    }
    this.emit('error', err)
  }

  // if we're connected and we receive an error event from the connection
  // this means the socket is dead - do a hard abort of all queries and emit
  // the socket error on the client as well
  _handleErrorEvent(err) {
    if (this._connecting) {
      return this._handleErrorWhileConnecting(err)
    }
    this._queryable = false
    this._errorAllQueries(err)
    this.emit('error', err)
  }

  // handle error messages from the postgres backend
  _handleErrorMessage(msg) {
    if (this._connecting) {
      return this._handleErrorWhileConnecting(msg)
    }
    const activeQuery = this.activeQuery

    if (!activeQuery) {
      this._handleErrorEvent(msg)
      return
    }

    this.activeQuery = null
    activeQuery.handleError(msg, this.connection)
  }

  _handleRowDescription(msg) {
    // delegate rowDescription to active query
    this.activeQuery.handleRowDescription(msg)
  }

  _handleDataRow(msg) {
    // delegate dataRow to active query
    this.activeQuery.handleDataRow(msg)
  }

  _handlePortalSuspended(msg) {
    // delegate portalSuspended to active query
    this.activeQuery.handlePortalSuspended(this.connection)
  }

  _handleEmptyQuery(msg) {
    // delegate emptyQuery to active query
    this.activeQuery.handleEmptyQuery(this.connection)
  }

  _handleCommandComplete(msg) {
    // delegate commandComplete to active query
    this.activeQuery.handleCommandComplete(msg, this.connection)
  }

  _handleParseComplete(msg) {
    // if a prepared statement has a name and properly parses
    // we track that its already been executed so we don't parse
    // it again on the same client
    if (this.activeQuery.name) {
      this.connection.parsedStatements[this.activeQuery.name] = this.activeQuery.text
    }
  }

  _handleCopyInResponse(msg) {
    this.activeQuery.handleCopyInResponse(this.connection)
  }

  _handleCopyData(msg) {
    this.activeQuery.handleCopyData(msg, this.connection)
  }

  _handleNotification(msg) {
    this.emit('notification', msg)
  }

  _handleNotice(msg) {
    this.emit('notice', msg)
  }

  getStartupConf() {
    var params = this.connectionParameters

    var data = {
      user: params.user,
      database: params.database,
    }

    var appName = params.application_name || params.fallback_application_name
    if (appName) {
      data.application_name = appName
    }
    if (params.replication) {
      data.replication = '' + params.replication
    }
    if (params.statement_timeout) {
      data.statement_timeout = String(parseInt(params.statement_timeout, 10))
    }
    if (params.idle_in_transaction_session_timeout) {
      data.idle_in_transaction_session_timeout = String(parseInt(params.idle_in_transaction_session_timeout, 10))
    }
    if (params.options) {
      data.options = params.options
    }

    return data
  }

  cancel(client, query) {
    if (client.activeQuery === query) {
      var con = this.connection

      if (this.host && this.host.indexOf('/') === 0) {
        con.connect(this.host + '/.s.PGSQL.' + this.port)
      } else {
        con.connect(this.port, this.host)
      }

      // once connection is established send cancel message
      con.on('connect', function () {
        con.cancel(client.processID, client.secretKey)
      })
    } else if (client.queryQueue.indexOf(query) !== -1) {
      client.queryQueue.splice(client.queryQueue.indexOf(query), 1)
    }
  }

  setTypeParser(oid, format, parseFn) {
    return this._types.setTypeParser(oid, format, parseFn)
  }

  getTypeParser(oid, format) {
    return this._types.getTypeParser(oid, format)
  }

  // Ported from PostgreSQL 9.2.4 source code in src/interfaces/libpq/fe-exec.c
  escapeIdentifier(str) {
    return '"' + str.replace(/"/g, '""') + '"'
  }

  // Ported from PostgreSQL 9.2.4 source code in src/interfaces/libpq/fe-exec.c
  escapeLiteral(str) {
    var hasBackslash = false
    var escaped = "'"

    for (var i = 0; i < str.length; i++) {
      var c = str[i]
      if (c === "'") {
        escaped += c + c
      } else if (c === '\\') {
        escaped += c + c
        hasBackslash = true
      } else {
        escaped += c
      }
    }

    escaped += "'"

    if (hasBackslash === true) {
      escaped = ' E' + escaped
    }

    return escaped
  }

  _pulseQueryQueue() {
    if (this.readyForQuery === true) {
      this.activeQuery = this.queryQueue.shift()
      if (this.activeQuery) {
        this.readyForQuery = false
        this.hasExecuted = true

        const queryError = this.activeQuery.submit(this.connection)
        if (queryError) {
          process.nextTick(() => {
            this.activeQuery.handleError(queryError, this.connection)
            this.readyForQuery = true
            this._pulseQueryQueue()
          })
        }
      } else if (this.hasExecuted) {
        this.activeQuery = null
        this.emit('drain')
      }
    }
  }

  query(config, values, callback) {
    // can take in strings, config object or query object
    var query
    var result
    var readTimeout
    var readTimeoutTimer
    var queryCallback

    if (config === null || config === undefined) {
      throw new TypeError('Client was passed a null or undefined query')
    } else if (typeof config.submit === 'function') {
      readTimeout = config.query_timeout || this.connectionParameters.query_timeout
      result = query = config
      if (typeof values === 'function') {
        query.callback = query.callback || values
      }
    } else {
      readTimeout = this.connectionParameters.query_timeout
      query = new Query(config, values, callback)
      if (!query.callback) {
        result = new this._Promise((resolve, reject) => {
          query.callback = (err, res) => (err ? reject(err) : resolve(res))
        })
      }
    }

    if (readTimeout) {
      queryCallback = query.callback

      readTimeoutTimer = setTimeout(() => {
        var error = new Error('Query read timeout')

        process.nextTick(() => {
          query.handleError(error, this.connection)
        })

        queryCallback(error)

        // we already returned an error,
        // just do nothing if query completes
        query.callback = () => {}

        // Remove from queue
        var index = this.queryQueue.indexOf(query)
        if (index > -1) {
          this.queryQueue.splice(index, 1)
        }

        this._pulseQueryQueue()
      }, readTimeout)

      query.callback = (err, res) => {
        clearTimeout(readTimeoutTimer)
        queryCallback(err, res)
      }
    }

    if (this.binary && !query.binary) {
      query.binary = true
    }

    if (query._result && !query._result._types) {
      query._result._types = this._types
    }

    if (!this._queryable) {
      process.nextTick(() => {
        query.handleError(new Error('Client has encountered a connection error and is not queryable'), this.connection)
      })
      return result
    }

    if (this._ending) {
      process.nextTick(() => {
        query.handleError(new Error('Client was closed and is not queryable'), this.connection)
      })
      return result
    }

    this.queryQueue.push(query)
    this._pulseQueryQueue()
    return result
  }

  end(cb) {
    this._ending = true

    // if we have never connected, then end is a noop, callback immediately
    if (!this.connection._connecting) {
      if (cb) {
        cb()
      } else {
        return this._Promise.resolve()
      }
    }

    if (this.activeQuery || !this._queryable) {
      // if we have an active query we need to force a disconnect
      // on the socket - otherwise a hung query could block end forever
      this.connection.stream.destroy()
    } else {
      this.connection.end()
    }

    if (cb) {
      this.connection.once('end', cb)
    } else {
      return new this._Promise((resolve) => {
        this.connection.once('end', resolve)
      })
    }
  }
}

// expose a Query constructor
Client.Query = Query

module.exports = Client


/***/ }),

/***/ "./node_modules/pg/lib/connection-parameters.js":
/*!******************************************************!*\
  !*** ./node_modules/pg/lib/connection-parameters.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dns = __webpack_require__(/*! dns */ "dns")

var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/pg/lib/defaults.js")

var parse = __webpack_require__(/*! pg-connection-string */ "./node_modules/pg-connection-string/index.js").parse // parses a connection string

var val = function (key, config, envVar) {
  if (envVar === undefined) {
    envVar = process.env['PG' + key.toUpperCase()]
  } else if (envVar === false) {
    // do nothing ... use false
  } else {
    envVar = process.env[envVar]
  }

  return config[key] || envVar || defaults[key]
}

var readSSLConfigFromEnvironment = function () {
  switch (process.env.PGSSLMODE) {
    case 'disable':
      return false
    case 'prefer':
    case 'require':
    case 'verify-ca':
    case 'verify-full':
      return true
    case 'no-verify':
      return { rejectUnauthorized: false }
  }
  return defaults.ssl
}

// Convert arg to a string, surround in single quotes, and escape single quotes and backslashes
var quoteParamValue = function (value) {
  return "'" + ('' + value).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'"
}

var add = function (params, config, paramName) {
  var value = config[paramName]
  if (value !== undefined && value !== null) {
    params.push(paramName + '=' + quoteParamValue(value))
  }
}

class ConnectionParameters {
  constructor(config) {
    // if a string is passed, it is a raw connection string so we parse it into a config
    config = typeof config === 'string' ? parse(config) : config || {}

    // if the config has a connectionString defined, parse IT into the config we use
    // this will override other default values with what is stored in connectionString
    if (config.connectionString) {
      config = Object.assign({}, config, parse(config.connectionString))
    }

    this.user = val('user', config)
    this.database = val('database', config)

    if (this.database === undefined) {
      this.database = this.user
    }

    this.port = parseInt(val('port', config), 10)
    this.host = val('host', config)

    // "hiding" the password so it doesn't show up in stack traces
    // or if the client is console.logged
    Object.defineProperty(this, 'password', {
      configurable: true,
      enumerable: false,
      writable: true,
      value: val('password', config),
    })

    this.binary = val('binary', config)
    this.options = val('options', config)

    this.ssl = typeof config.ssl === 'undefined' ? readSSLConfigFromEnvironment() : config.ssl

    // support passing in ssl=no-verify via connection string
    if (this.ssl === 'no-verify') {
      this.ssl = { rejectUnauthorized: false }
    }

    this.client_encoding = val('client_encoding', config)
    this.replication = val('replication', config)
    // a domain socket begins with '/'
    this.isDomainSocket = !(this.host || '').indexOf('/')

    this.application_name = val('application_name', config, 'PGAPPNAME')
    this.fallback_application_name = val('fallback_application_name', config, false)
    this.statement_timeout = val('statement_timeout', config, false)
    this.idle_in_transaction_session_timeout = val('idle_in_transaction_session_timeout', config, false)
    this.query_timeout = val('query_timeout', config, false)

    if (config.connectionTimeoutMillis === undefined) {
      this.connect_timeout = process.env.PGCONNECT_TIMEOUT || 0
    } else {
      this.connect_timeout = Math.floor(config.connectionTimeoutMillis / 1000)
    }

    if (config.keepAlive === false) {
      this.keepalives = 0
    } else if (config.keepAlive === true) {
      this.keepalives = 1
    }

    if (typeof config.keepAliveInitialDelayMillis === 'number') {
      this.keepalives_idle = Math.floor(config.keepAliveInitialDelayMillis / 1000)
    }
  }

  getLibpqConnectionString(cb) {
    var params = []
    add(params, this, 'user')
    add(params, this, 'password')
    add(params, this, 'port')
    add(params, this, 'application_name')
    add(params, this, 'fallback_application_name')
    add(params, this, 'connect_timeout')
    add(params, this, 'options')

    var ssl = typeof this.ssl === 'object' ? this.ssl : this.ssl ? { sslmode: this.ssl } : {}
    add(params, ssl, 'sslmode')
    add(params, ssl, 'sslca')
    add(params, ssl, 'sslkey')
    add(params, ssl, 'sslcert')
    add(params, ssl, 'sslrootcert')

    if (this.database) {
      params.push('dbname=' + quoteParamValue(this.database))
    }
    if (this.replication) {
      params.push('replication=' + quoteParamValue(this.replication))
    }
    if (this.host) {
      params.push('host=' + quoteParamValue(this.host))
    }
    if (this.isDomainSocket) {
      return cb(null, params.join(' '))
    }
    if (this.client_encoding) {
      params.push('client_encoding=' + quoteParamValue(this.client_encoding))
    }
    dns.lookup(this.host, function (err, address) {
      if (err) return cb(err, null)
      params.push('hostaddr=' + quoteParamValue(address))
      return cb(null, params.join(' '))
    })
  }
}

module.exports = ConnectionParameters


/***/ }),

/***/ "./node_modules/pg/lib/connection.js":
/*!*******************************************!*\
  !*** ./node_modules/pg/lib/connection.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var net = __webpack_require__(/*! net */ "net")
var EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter
var util = __webpack_require__(/*! util */ "util")

const { parse, serialize } = __webpack_require__(/*! pg-protocol */ "./node_modules/pg-protocol/dist/index.js")

const flushBuffer = serialize.flush()
const syncBuffer = serialize.sync()
const endBuffer = serialize.end()

// TODO(bmc) support binary mode at some point
class Connection extends EventEmitter {
  constructor(config) {
    super()
    config = config || {}
    this.stream = config.stream || new net.Socket()
    this._keepAlive = config.keepAlive
    this._keepAliveInitialDelayMillis = config.keepAliveInitialDelayMillis
    this.lastBuffer = false
    this.parsedStatements = {}
    this.ssl = config.ssl || false
    this._ending = false
    this._emitMessage = false
    var self = this
    this.on('newListener', function (eventName) {
      if (eventName === 'message') {
        self._emitMessage = true
      }
    })
  }

  connect(port, host) {
    var self = this

    this._connecting = true
    this.stream.setNoDelay(true)
    this.stream.connect(port, host)

    this.stream.once('connect', function () {
      if (self._keepAlive) {
        self.stream.setKeepAlive(true, self._keepAliveInitialDelayMillis)
      }
      self.emit('connect')
    })

    const reportStreamError = function (error) {
      // errors about disconnections should be ignored during disconnect
      if (self._ending && (error.code === 'ECONNRESET' || error.code === 'EPIPE')) {
        return
      }
      self.emit('error', error)
    }
    this.stream.on('error', reportStreamError)

    this.stream.on('close', function () {
      self.emit('end')
    })

    if (!this.ssl) {
      return this.attachListeners(this.stream)
    }

    this.stream.once('data', function (buffer) {
      var responseCode = buffer.toString('utf8')
      switch (responseCode) {
        case 'S': // Server supports SSL connections, continue with a secure connection
          break
        case 'N': // Server does not support SSL connections
          self.stream.end()
          return self.emit('error', new Error('The server does not support SSL connections'))
        default:
          // Any other response byte, including 'E' (ErrorResponse) indicating a server error
          self.stream.end()
          return self.emit('error', new Error('There was an error establishing an SSL connection'))
      }
      var tls = __webpack_require__(/*! tls */ "tls")
      const options = Object.assign(
        {
          socket: self.stream,
        },
        self.ssl
      )
      if (net.isIP(host) === 0) {
        options.servername = host
      }
      try {
        self.stream = tls.connect(options)
      } catch (err) {
        return self.emit('error', err)
      }
      self.attachListeners(self.stream)
      self.stream.on('error', reportStreamError)

      self.emit('sslconnect')
    })
  }

  attachListeners(stream) {
    stream.on('end', () => {
      this.emit('end')
    })
    parse(stream, (msg) => {
      var eventName = msg.name === 'error' ? 'errorMessage' : msg.name
      if (this._emitMessage) {
        this.emit('message', msg)
      }
      this.emit(eventName, msg)
    })
  }

  requestSsl() {
    this.stream.write(serialize.requestSsl())
  }

  startup(config) {
    this.stream.write(serialize.startup(config))
  }

  cancel(processID, secretKey) {
    this._send(serialize.cancel(processID, secretKey))
  }

  password(password) {
    this._send(serialize.password(password))
  }

  sendSASLInitialResponseMessage(mechanism, initialResponse) {
    this._send(serialize.sendSASLInitialResponseMessage(mechanism, initialResponse))
  }

  sendSCRAMClientFinalMessage(additionalData) {
    this._send(serialize.sendSCRAMClientFinalMessage(additionalData))
  }

  _send(buffer) {
    if (!this.stream.writable) {
      return false
    }
    return this.stream.write(buffer)
  }

  query(text) {
    this._send(serialize.query(text))
  }

  // send parse message
  parse(query) {
    this._send(serialize.parse(query))
  }

  // send bind message
  bind(config) {
    this._send(serialize.bind(config))
  }

  // send execute message
  execute(config) {
    this._send(serialize.execute(config))
  }

  flush() {
    if (this.stream.writable) {
      this.stream.write(flushBuffer)
    }
  }

  sync() {
    this._ending = true
    this._send(flushBuffer)
    this._send(syncBuffer)
  }

  end() {
    // 0x58 = 'X'
    this._ending = true
    if (!this._connecting || !this.stream.writable) {
      this.stream.end()
      return
    }
    return this.stream.write(endBuffer, () => {
      this.stream.end()
    })
  }

  close(msg) {
    this._send(serialize.close(msg))
  }

  describe(msg) {
    this._send(serialize.describe(msg))
  }

  sendCopyFromChunk(chunk) {
    this._send(serialize.copyData(chunk))
  }

  endCopyFrom() {
    this._send(serialize.copyDone())
  }

  sendCopyFail(msg) {
    this._send(serialize.copyFail(msg))
  }
}

module.exports = Connection


/***/ }),

/***/ "./node_modules/pg/lib/defaults.js":
/*!*****************************************!*\
  !*** ./node_modules/pg/lib/defaults.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  // database host. defaults to localhost
  host: 'localhost',

  // database user's name
  user: process.platform === 'win32' ? process.env.USERNAME : process.env.USER,

  // name of database to connect
  database: undefined,

  // database user's password
  password: null,

  // a Postgres connection string to be used instead of setting individual connection items
  // NOTE:  Setting this value will cause it to override any other value (such as database or user) defined
  // in the defaults object.
  connectionString: undefined,

  // database port
  port: 5432,

  // number of rows to return at a time from a prepared statement's
  // portal. 0 will return all rows at once
  rows: 0,

  // binary result mode
  binary: false,

  // Connection pool options - see https://github.com/brianc/node-pg-pool

  // number of connections to use in connection pool
  // 0 will disable connection pooling
  max: 10,

  // max milliseconds a client can go unused before it is removed
  // from the pool and destroyed
  idleTimeoutMillis: 30000,

  client_encoding: '',

  ssl: false,

  application_name: undefined,

  fallback_application_name: undefined,

  options: undefined,

  parseInputDatesAsUTC: false,

  // max milliseconds any query using this connection will execute for before timing out in error.
  // false=unlimited
  statement_timeout: false,

  // Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds
  // false=unlimited
  idle_in_transaction_session_timeout: false,

  // max milliseconds to wait for query to complete (client side)
  query_timeout: false,

  connect_timeout: 0,

  keepalives: 1,

  keepalives_idle: 0,
}

var pgTypes = __webpack_require__(/*! pg-types */ "./node_modules/pg-types/index.js")
// save default parsers
var parseBigInteger = pgTypes.getTypeParser(20, 'text')
var parseBigIntegerArray = pgTypes.getTypeParser(1016, 'text')

// parse int8 so you can get your count values as actual numbers
module.exports.__defineSetter__('parseInt8', function (val) {
  pgTypes.setTypeParser(20, 'text', val ? pgTypes.getTypeParser(23, 'text') : parseBigInteger)
  pgTypes.setTypeParser(1016, 'text', val ? pgTypes.getTypeParser(1007, 'text') : parseBigIntegerArray)
})


/***/ }),

/***/ "./node_modules/pg/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/pg/lib/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Client = __webpack_require__(/*! ./client */ "./node_modules/pg/lib/client.js")
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/pg/lib/defaults.js")
var Connection = __webpack_require__(/*! ./connection */ "./node_modules/pg/lib/connection.js")
var Pool = __webpack_require__(/*! pg-pool */ "./node_modules/pg-pool/index.js")

const poolFactory = (Client) => {
  return class BoundPool extends Pool {
    constructor(options) {
      super(options, Client)
    }
  }
}

var PG = function (clientConstructor) {
  this.defaults = defaults
  this.Client = clientConstructor
  this.Query = this.Client.Query
  this.Pool = poolFactory(this.Client)
  this._pools = []
  this.Connection = Connection
  this.types = __webpack_require__(/*! pg-types */ "./node_modules/pg-types/index.js")
}

if (typeof process.env.NODE_PG_FORCE_NATIVE !== 'undefined') {
  module.exports = new PG(__webpack_require__(/*! ./native */ "./node_modules/pg/lib/native/index.js"))
} else {
  module.exports = new PG(Client)

  // lazy require native module...the native module may not have installed
  Object.defineProperty(module.exports, 'native', {
    configurable: true,
    enumerable: false,
    get() {
      var native = null
      try {
        native = new PG(__webpack_require__(/*! ./native */ "./node_modules/pg/lib/native/index.js"))
      } catch (err) {
        if (err.code !== 'MODULE_NOT_FOUND') {
          throw err
        }
        /* eslint-disable no-console */
        console.error(err.message)
        /* eslint-enable no-console */
      }

      // overwrite module.exports.native so that getter is never called again
      Object.defineProperty(module.exports, 'native', {
        value: native,
      })

      return native
    },
  })
}


/***/ }),

/***/ "./node_modules/pg/lib/native/client.js":
/*!**********************************************!*\
  !*** ./node_modules/pg/lib/native/client.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// eslint-disable-next-line
var Native = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'pg-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
var TypeOverrides = __webpack_require__(/*! ../type-overrides */ "./node_modules/pg/lib/type-overrides.js")
var semver = __webpack_require__(/*! semver */ "./node_modules/semver/semver.js")
var pkg = __webpack_require__(/*! ../../package.json */ "./node_modules/pg/package.json")
var assert = __webpack_require__(/*! assert */ "assert")
var EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter
var util = __webpack_require__(/*! util */ "util")
var ConnectionParameters = __webpack_require__(/*! ../connection-parameters */ "./node_modules/pg/lib/connection-parameters.js")

var msg = 'Version >= ' + pkg.minNativeVersion + ' of pg-native required.'
assert(semver.gte(Native.version, pkg.minNativeVersion), msg)

var NativeQuery = __webpack_require__(/*! ./query */ "./node_modules/pg/lib/native/query.js")

var Client = (module.exports = function (config) {
  EventEmitter.call(this)
  config = config || {}

  this._Promise = config.Promise || global.Promise
  this._types = new TypeOverrides(config.types)

  this.native = new Native({
    types: this._types,
  })

  this._queryQueue = []
  this._ending = false
  this._connecting = false
  this._connected = false
  this._queryable = true

  // keep these on the object for legacy reasons
  // for the time being. TODO: deprecate all this jazz
  var cp = (this.connectionParameters = new ConnectionParameters(config))
  this.user = cp.user

  // "hiding" the password so it doesn't show up in stack traces
  // or if the client is console.logged
  Object.defineProperty(this, 'password', {
    configurable: true,
    enumerable: false,
    writable: true,
    value: cp.password,
  })
  this.database = cp.database
  this.host = cp.host
  this.port = cp.port

  // a hash to hold named queries
  this.namedQueries = {}
})

Client.Query = NativeQuery

util.inherits(Client, EventEmitter)

Client.prototype._errorAllQueries = function (err) {
  const enqueueError = (query) => {
    process.nextTick(() => {
      query.native = this.native
      query.handleError(err)
    })
  }

  if (this._hasActiveQuery()) {
    enqueueError(this._activeQuery)
    this._activeQuery = null
  }

  this._queryQueue.forEach(enqueueError)
  this._queryQueue.length = 0
}

// connect to the backend
// pass an optional callback to be called once connected
// or with an error if there was a connection error
Client.prototype._connect = function (cb) {
  var self = this

  if (this._connecting) {
    process.nextTick(() => cb(new Error('Client has already been connected. You cannot reuse a client.')))
    return
  }

  this._connecting = true

  this.connectionParameters.getLibpqConnectionString(function (err, conString) {
    if (err) return cb(err)
    self.native.connect(conString, function (err) {
      if (err) {
        self.native.end()
        return cb(err)
      }

      // set internal states to connected
      self._connected = true

      // handle connection errors from the native layer
      self.native.on('error', function (err) {
        self._queryable = false
        self._errorAllQueries(err)
        self.emit('error', err)
      })

      self.native.on('notification', function (msg) {
        self.emit('notification', {
          channel: msg.relname,
          payload: msg.extra,
        })
      })

      // signal we are connected now
      self.emit('connect')
      self._pulseQueryQueue(true)

      cb()
    })
  })
}

Client.prototype.connect = function (callback) {
  if (callback) {
    this._connect(callback)
    return
  }

  return new this._Promise((resolve, reject) => {
    this._connect((error) => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}

// send a query to the server
// this method is highly overloaded to take
// 1) string query, optional array of parameters, optional function callback
// 2) object query with {
//    string query
//    optional array values,
//    optional function callback instead of as a separate parameter
//    optional string name to name & cache the query plan
//    optional string rowMode = 'array' for an array of results
//  }
Client.prototype.query = function (config, values, callback) {
  var query
  var result
  var readTimeout
  var readTimeoutTimer
  var queryCallback

  if (config === null || config === undefined) {
    throw new TypeError('Client was passed a null or undefined query')
  } else if (typeof config.submit === 'function') {
    readTimeout = config.query_timeout || this.connectionParameters.query_timeout
    result = query = config
    // accept query(new Query(...), (err, res) => { }) style
    if (typeof values === 'function') {
      config.callback = values
    }
  } else {
    readTimeout = this.connectionParameters.query_timeout
    query = new NativeQuery(config, values, callback)
    if (!query.callback) {
      let resolveOut, rejectOut
      result = new this._Promise((resolve, reject) => {
        resolveOut = resolve
        rejectOut = reject
      })
      query.callback = (err, res) => (err ? rejectOut(err) : resolveOut(res))
    }
  }

  if (readTimeout) {
    queryCallback = query.callback

    readTimeoutTimer = setTimeout(() => {
      var error = new Error('Query read timeout')

      process.nextTick(() => {
        query.handleError(error, this.connection)
      })

      queryCallback(error)

      // we already returned an error,
      // just do nothing if query completes
      query.callback = () => {}

      // Remove from queue
      var index = this._queryQueue.indexOf(query)
      if (index > -1) {
        this._queryQueue.splice(index, 1)
      }

      this._pulseQueryQueue()
    }, readTimeout)

    query.callback = (err, res) => {
      clearTimeout(readTimeoutTimer)
      queryCallback(err, res)
    }
  }

  if (!this._queryable) {
    query.native = this.native
    process.nextTick(() => {
      query.handleError(new Error('Client has encountered a connection error and is not queryable'))
    })
    return result
  }

  if (this._ending) {
    query.native = this.native
    process.nextTick(() => {
      query.handleError(new Error('Client was closed and is not queryable'))
    })
    return result
  }

  this._queryQueue.push(query)
  this._pulseQueryQueue()
  return result
}

// disconnect from the backend server
Client.prototype.end = function (cb) {
  var self = this

  this._ending = true

  if (!this._connected) {
    this.once('connect', this.end.bind(this, cb))
  }
  var result
  if (!cb) {
    result = new this._Promise(function (resolve, reject) {
      cb = (err) => (err ? reject(err) : resolve())
    })
  }
  this.native.end(function () {
    self._errorAllQueries(new Error('Connection terminated'))

    process.nextTick(() => {
      self.emit('end')
      if (cb) cb()
    })
  })
  return result
}

Client.prototype._hasActiveQuery = function () {
  return this._activeQuery && this._activeQuery.state !== 'error' && this._activeQuery.state !== 'end'
}

Client.prototype._pulseQueryQueue = function (initialConnection) {
  if (!this._connected) {
    return
  }
  if (this._hasActiveQuery()) {
    return
  }
  var query = this._queryQueue.shift()
  if (!query) {
    if (!initialConnection) {
      this.emit('drain')
    }
    return
  }
  this._activeQuery = query
  query.submit(this)
  var self = this
  query.once('_done', function () {
    self._pulseQueryQueue()
  })
}

// attempt to cancel an in-progress query
Client.prototype.cancel = function (query) {
  if (this._activeQuery === query) {
    this.native.cancel(function () {})
  } else if (this._queryQueue.indexOf(query) !== -1) {
    this._queryQueue.splice(this._queryQueue.indexOf(query), 1)
  }
}

Client.prototype.setTypeParser = function (oid, format, parseFn) {
  return this._types.setTypeParser(oid, format, parseFn)
}

Client.prototype.getTypeParser = function (oid, format) {
  return this._types.getTypeParser(oid, format)
}


/***/ }),

/***/ "./node_modules/pg/lib/native/index.js":
/*!*********************************************!*\
  !*** ./node_modules/pg/lib/native/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(/*! ./client */ "./node_modules/pg/lib/native/client.js")


/***/ }),

/***/ "./node_modules/pg/lib/native/query.js":
/*!*********************************************!*\
  !*** ./node_modules/pg/lib/native/query.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter
var util = __webpack_require__(/*! util */ "util")
var utils = __webpack_require__(/*! ../utils */ "./node_modules/pg/lib/utils.js")

var NativeQuery = (module.exports = function (config, values, callback) {
  EventEmitter.call(this)
  config = utils.normalizeQueryConfig(config, values, callback)
  this.text = config.text
  this.values = config.values
  this.name = config.name
  this.callback = config.callback
  this.state = 'new'
  this._arrayMode = config.rowMode === 'array'

  // if the 'row' event is listened for
  // then emit them as they come in
  // without setting singleRowMode to true
  // this has almost no meaning because libpq
  // reads all rows into memory befor returning any
  this._emitRowEvents = false
  this.on(
    'newListener',
    function (event) {
      if (event === 'row') this._emitRowEvents = true
    }.bind(this)
  )
})

util.inherits(NativeQuery, EventEmitter)

var errorFieldMap = {
  /* eslint-disable quote-props */
  sqlState: 'code',
  statementPosition: 'position',
  messagePrimary: 'message',
  context: 'where',
  schemaName: 'schema',
  tableName: 'table',
  columnName: 'column',
  dataTypeName: 'dataType',
  constraintName: 'constraint',
  sourceFile: 'file',
  sourceLine: 'line',
  sourceFunction: 'routine',
}

NativeQuery.prototype.handleError = function (err) {
  // copy pq error fields into the error object
  var fields = this.native.pq.resultErrorFields()
  if (fields) {
    for (var key in fields) {
      var normalizedFieldName = errorFieldMap[key] || key
      err[normalizedFieldName] = fields[key]
    }
  }
  if (this.callback) {
    this.callback(err)
  } else {
    this.emit('error', err)
  }
  this.state = 'error'
}

NativeQuery.prototype.then = function (onSuccess, onFailure) {
  return this._getPromise().then(onSuccess, onFailure)
}

NativeQuery.prototype.catch = function (callback) {
  return this._getPromise().catch(callback)
}

NativeQuery.prototype._getPromise = function () {
  if (this._promise) return this._promise
  this._promise = new Promise(
    function (resolve, reject) {
      this._once('end', resolve)
      this._once('error', reject)
    }.bind(this)
  )
  return this._promise
}

NativeQuery.prototype.submit = function (client) {
  this.state = 'running'
  var self = this
  this.native = client.native
  client.native.arrayMode = this._arrayMode

  var after = function (err, rows, results) {
    client.native.arrayMode = false
    setImmediate(function () {
      self.emit('_done')
    })

    // handle possible query error
    if (err) {
      return self.handleError(err)
    }

    // emit row events for each row in the result
    if (self._emitRowEvents) {
      if (results.length > 1) {
        rows.forEach((rowOfRows, i) => {
          rowOfRows.forEach((row) => {
            self.emit('row', row, results[i])
          })
        })
      } else {
        rows.forEach(function (row) {
          self.emit('row', row, results)
        })
      }
    }

    // handle successful result
    self.state = 'end'
    self.emit('end', results)
    if (self.callback) {
      self.callback(null, results)
    }
  }

  if (process.domain) {
    after = process.domain.bind(after)
  }

  // named query
  if (this.name) {
    if (this.name.length > 63) {
      /* eslint-disable no-console */
      console.error('Warning! Postgres only supports 63 characters for query names.')
      console.error('You supplied %s (%s)', this.name, this.name.length)
      console.error('This can cause conflicts and silent errors executing queries')
      /* eslint-enable no-console */
    }
    var values = (this.values || []).map(utils.prepareValue)

    // check if the client has already executed this named query
    // if so...just execute it again - skip the planning phase
    if (client.namedQueries[this.name]) {
      if (this.text && client.namedQueries[this.name] !== this.text) {
        const err = new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`)
        return after(err)
      }
      return client.native.execute(this.name, values, after)
    }
    // plan the named query the first time, then execute it
    return client.native.prepare(this.name, this.text, values.length, function (err) {
      if (err) return after(err)
      client.namedQueries[self.name] = self.text
      return self.native.execute(self.name, values, after)
    })
  } else if (this.values) {
    if (!Array.isArray(this.values)) {
      const err = new Error('Query values must be an array')
      return after(err)
    }
    var vals = this.values.map(utils.prepareValue)
    client.native.query(this.text, vals, after)
  } else {
    client.native.query(this.text, after)
  }
}


/***/ }),

/***/ "./node_modules/pg/lib/query.js":
/*!**************************************!*\
  !*** ./node_modules/pg/lib/query.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { EventEmitter } = __webpack_require__(/*! events */ "events")

const Result = __webpack_require__(/*! ./result */ "./node_modules/pg/lib/result.js")
const utils = __webpack_require__(/*! ./utils */ "./node_modules/pg/lib/utils.js")

class Query extends EventEmitter {
  constructor(config, values, callback) {
    super()

    config = utils.normalizeQueryConfig(config, values, callback)

    this.text = config.text
    this.values = config.values
    this.rows = config.rows
    this.types = config.types
    this.name = config.name
    this.binary = config.binary
    // use unique portal name each time
    this.portal = config.portal || ''
    this.callback = config.callback
    this._rowMode = config.rowMode
    if (process.domain && config.callback) {
      this.callback = process.domain.bind(config.callback)
    }
    this._result = new Result(this._rowMode, this.types)

    // potential for multiple results
    this._results = this._result
    this.isPreparedStatement = false
    this._canceledDueToError = false
    this._promise = null
  }

  requiresPreparation() {
    // named queries must always be prepared
    if (this.name) {
      return true
    }
    // always prepare if there are max number of rows expected per
    // portal execution
    if (this.rows) {
      return true
    }
    // don't prepare empty text queries
    if (!this.text) {
      return false
    }
    // prepare if there are values
    if (!this.values) {
      return false
    }
    return this.values.length > 0
  }

  _checkForMultirow() {
    // if we already have a result with a command property
    // then we've already executed one query in a multi-statement simple query
    // turn our results into an array of results
    if (this._result.command) {
      if (!Array.isArray(this._results)) {
        this._results = [this._result]
      }
      this._result = new Result(this._rowMode, this.types)
      this._results.push(this._result)
    }
  }

  // associates row metadata from the supplied
  // message with this query object
  // metadata used when parsing row results
  handleRowDescription(msg) {
    this._checkForMultirow()
    this._result.addFields(msg.fields)
    this._accumulateRows = this.callback || !this.listeners('row').length
  }

  handleDataRow(msg) {
    let row

    if (this._canceledDueToError) {
      return
    }

    try {
      row = this._result.parseRow(msg.fields)
    } catch (err) {
      this._canceledDueToError = err
      return
    }

    this.emit('row', row, this._result)
    if (this._accumulateRows) {
      this._result.addRow(row)
    }
  }

  handleCommandComplete(msg, con) {
    this._checkForMultirow()
    this._result.addCommandComplete(msg)
    // need to sync after each command complete of a prepared statement
    if (this.isPreparedStatement) {
      con.sync()
    }
  }

  // if a named prepared statement is created with empty query text
  // the backend will send an emptyQuery message but *not* a command complete message
  // execution on the connection will hang until the backend receives a sync message
  handleEmptyQuery(con) {
    if (this.isPreparedStatement) {
      con.sync()
    }
  }

  handleReadyForQuery(con) {
    if (this._canceledDueToError) {
      return this.handleError(this._canceledDueToError, con)
    }
    if (this.callback) {
      this.callback(null, this._results)
    }
    this.emit('end', this._results)
  }

  handleError(err, connection) {
    // need to sync after error during a prepared statement
    if (this.isPreparedStatement) {
      connection.sync()
    }
    if (this._canceledDueToError) {
      err = this._canceledDueToError
      this._canceledDueToError = false
    }
    // if callback supplied do not emit error event as uncaught error
    // events will bubble up to node process
    if (this.callback) {
      return this.callback(err)
    }
    this.emit('error', err)
  }

  submit(connection) {
    if (typeof this.text !== 'string' && typeof this.name !== 'string') {
      return new Error('A query must have either text or a name. Supplying neither is unsupported.')
    }
    const previous = connection.parsedStatements[this.name]
    if (this.text && previous && this.text !== previous) {
      return new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`)
    }
    if (this.values && !Array.isArray(this.values)) {
      return new Error('Query values must be an array')
    }
    if (this.requiresPreparation()) {
      this.prepare(connection)
    } else {
      connection.query(this.text)
    }
    return null
  }

  hasBeenParsed(connection) {
    return this.name && connection.parsedStatements[this.name]
  }

  handlePortalSuspended(connection) {
    this._getRows(connection, this.rows)
  }

  _getRows(connection, rows) {
    connection.execute({
      portal: this.portal,
      rows: rows,
    })
    connection.flush()
  }

  // http://developer.postgresql.org/pgdocs/postgres/protocol-flow.html#PROTOCOL-FLOW-EXT-QUERY
  prepare(connection) {
    // prepared statements need sync to be called after each command
    // complete or when an error is encountered
    this.isPreparedStatement = true

    // TODO refactor this poor encapsulation
    if (!this.hasBeenParsed(connection)) {
      connection.parse({
        text: this.text,
        name: this.name,
        types: this.types,
      })
    }

    if (this.values) {
      try {
        this.values = this.values.map(utils.prepareValue)
      } catch (err) {
        this.handleError(err, connection)
        return
      }
    }

    connection.bind({
      portal: this.portal,
      statement: this.name,
      values: this.values,
      binary: this.binary,
    })

    connection.describe({
      type: 'P',
      name: this.portal || '',
    })

    this._getRows(connection, this.rows)
  }

  handleCopyInResponse(connection) {
    connection.sendCopyFail('No source stream defined')
  }

  // eslint-disable-next-line no-unused-vars
  handleCopyData(msg, connection) {
    // noop
  }
}

module.exports = Query


/***/ }),

/***/ "./node_modules/pg/lib/result.js":
/*!***************************************!*\
  !*** ./node_modules/pg/lib/result.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(/*! pg-types */ "./node_modules/pg-types/index.js")

var matchRegexp = /^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/

// result object returned from query
// in the 'end' event and also
// passed as second argument to provided callback
class Result {
  constructor(rowMode, types) {
    this.command = null
    this.rowCount = null
    this.oid = null
    this.rows = []
    this.fields = []
    this._parsers = undefined
    this._types = types
    this.RowCtor = null
    this.rowAsArray = rowMode === 'array'
    if (this.rowAsArray) {
      this.parseRow = this._parseRowAsArray
    }
  }

  // adds a command complete message
  addCommandComplete(msg) {
    var match
    if (msg.text) {
      // pure javascript
      match = matchRegexp.exec(msg.text)
    } else {
      // native bindings
      match = matchRegexp.exec(msg.command)
    }
    if (match) {
      this.command = match[1]
      if (match[3]) {
        // COMMMAND OID ROWS
        this.oid = parseInt(match[2], 10)
        this.rowCount = parseInt(match[3], 10)
      } else if (match[2]) {
        // COMMAND ROWS
        this.rowCount = parseInt(match[2], 10)
      }
    }
  }

  _parseRowAsArray(rowData) {
    var row = new Array(rowData.length)
    for (var i = 0, len = rowData.length; i < len; i++) {
      var rawValue = rowData[i]
      if (rawValue !== null) {
        row[i] = this._parsers[i](rawValue)
      } else {
        row[i] = null
      }
    }
    return row
  }

  parseRow(rowData) {
    var row = {}
    for (var i = 0, len = rowData.length; i < len; i++) {
      var rawValue = rowData[i]
      var field = this.fields[i].name
      if (rawValue !== null) {
        row[field] = this._parsers[i](rawValue)
      } else {
        row[field] = null
      }
    }
    return row
  }

  addRow(row) {
    this.rows.push(row)
  }

  addFields(fieldDescriptions) {
    // clears field definitions
    // multiple query statements in 1 action can result in multiple sets
    // of rowDescriptions...eg: 'select NOW(); select 1::int;'
    // you need to reset the fields
    this.fields = fieldDescriptions
    if (this.fields.length) {
      this._parsers = new Array(fieldDescriptions.length)
    }
    for (var i = 0; i < fieldDescriptions.length; i++) {
      var desc = fieldDescriptions[i]
      if (this._types) {
        this._parsers[i] = this._types.getTypeParser(desc.dataTypeID, desc.format || 'text')
      } else {
        this._parsers[i] = types.getTypeParser(desc.dataTypeID, desc.format || 'text')
      }
    }
  }
}

module.exports = Result


/***/ }),

/***/ "./node_modules/pg/lib/sasl.js":
/*!*************************************!*\
  !*** ./node_modules/pg/lib/sasl.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const crypto = __webpack_require__(/*! crypto */ "crypto")

function startSession(mechanisms) {
  if (mechanisms.indexOf('SCRAM-SHA-256') === -1) {
    throw new Error('SASL: Only mechanism SCRAM-SHA-256 is currently supported')
  }

  const clientNonce = crypto.randomBytes(18).toString('base64')

  return {
    mechanism: 'SCRAM-SHA-256',
    clientNonce,
    response: 'n,,n=*,r=' + clientNonce,
    message: 'SASLInitialResponse',
  }
}

function continueSession(session, password, serverData) {
  if (session.message !== 'SASLInitialResponse') {
    throw new Error('SASL: Last message was not SASLInitialResponse')
  }

  const sv = extractVariablesFromFirstServerMessage(serverData)

  if (!sv.nonce.startsWith(session.clientNonce)) {
    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce')
  }

  var saltBytes = Buffer.from(sv.salt, 'base64')

  var saltedPassword = Hi(password, saltBytes, sv.iteration)

  var clientKey = createHMAC(saltedPassword, 'Client Key')
  var storedKey = crypto.createHash('sha256').update(clientKey).digest()

  var clientFirstMessageBare = 'n=*,r=' + session.clientNonce
  var serverFirstMessage = 'r=' + sv.nonce + ',s=' + sv.salt + ',i=' + sv.iteration

  var clientFinalMessageWithoutProof = 'c=biws,r=' + sv.nonce

  var authMessage = clientFirstMessageBare + ',' + serverFirstMessage + ',' + clientFinalMessageWithoutProof

  var clientSignature = createHMAC(storedKey, authMessage)
  var clientProofBytes = xorBuffers(clientKey, clientSignature)
  var clientProof = clientProofBytes.toString('base64')

  var serverKey = createHMAC(saltedPassword, 'Server Key')
  var serverSignatureBytes = createHMAC(serverKey, authMessage)

  session.message = 'SASLResponse'
  session.serverSignature = serverSignatureBytes.toString('base64')
  session.response = clientFinalMessageWithoutProof + ',p=' + clientProof
}

function finalizeSession(session, serverData) {
  if (session.message !== 'SASLResponse') {
    throw new Error('SASL: Last message was not SASLResponse')
  }

  var serverSignature

  String(serverData)
    .split(',')
    .forEach(function (part) {
      switch (part[0]) {
        case 'v':
          serverSignature = part.substr(2)
          break
      }
    })

  if (serverSignature !== session.serverSignature) {
    throw new Error('SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does not match')
  }
}

function extractVariablesFromFirstServerMessage(data) {
  var nonce, salt, iteration

  String(data)
    .split(',')
    .forEach(function (part) {
      switch (part[0]) {
        case 'r':
          nonce = part.substr(2)
          break
        case 's':
          salt = part.substr(2)
          break
        case 'i':
          iteration = parseInt(part.substr(2), 10)
          break
      }
    })

  if (!nonce) {
    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing')
  }

  if (!salt) {
    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing')
  }

  if (!iteration) {
    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing')
  }

  return {
    nonce,
    salt,
    iteration,
  }
}

function xorBuffers(a, b) {
  if (!Buffer.isBuffer(a)) a = Buffer.from(a)
  if (!Buffer.isBuffer(b)) b = Buffer.from(b)
  var res = []
  if (a.length > b.length) {
    for (var i = 0; i < b.length; i++) {
      res.push(a[i] ^ b[i])
    }
  } else {
    for (var j = 0; j < a.length; j++) {
      res.push(a[j] ^ b[j])
    }
  }
  return Buffer.from(res)
}

function createHMAC(key, msg) {
  return crypto.createHmac('sha256', key).update(msg).digest()
}

function Hi(password, saltBytes, iterations) {
  var ui1 = createHMAC(password, Buffer.concat([saltBytes, Buffer.from([0, 0, 0, 1])]))
  var ui = ui1
  for (var i = 0; i < iterations - 1; i++) {
    ui1 = createHMAC(password, ui1)
    ui = xorBuffers(ui, ui1)
  }

  return ui
}

module.exports = {
  startSession,
  continueSession,
  finalizeSession,
}


/***/ }),

/***/ "./node_modules/pg/lib/type-overrides.js":
/*!***********************************************!*\
  !*** ./node_modules/pg/lib/type-overrides.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(/*! pg-types */ "./node_modules/pg-types/index.js")

function TypeOverrides(userTypes) {
  this._types = userTypes || types
  this.text = {}
  this.binary = {}
}

TypeOverrides.prototype.getOverrides = function (format) {
  switch (format) {
    case 'text':
      return this.text
    case 'binary':
      return this.binary
    default:
      return {}
  }
}

TypeOverrides.prototype.setTypeParser = function (oid, format, parseFn) {
  if (typeof format === 'function') {
    parseFn = format
    format = 'text'
  }
  this.getOverrides(format)[oid] = parseFn
}

TypeOverrides.prototype.getTypeParser = function (oid, format) {
  format = format || 'text'
  return this.getOverrides(format)[oid] || this._types.getTypeParser(oid, format)
}

module.exports = TypeOverrides


/***/ }),

/***/ "./node_modules/pg/lib/utils.js":
/*!**************************************!*\
  !*** ./node_modules/pg/lib/utils.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const crypto = __webpack_require__(/*! crypto */ "crypto")

const defaults = __webpack_require__(/*! ./defaults */ "./node_modules/pg/lib/defaults.js")

function escapeElement(elementRepresentation) {
  var escaped = elementRepresentation.replace(/\\/g, '\\\\').replace(/"/g, '\\"')

  return '"' + escaped + '"'
}

// convert a JS array to a postgres array literal
// uses comma separator so won't work for types like box that use
// a different array separator.
function arrayString(val) {
  var result = '{'
  for (var i = 0; i < val.length; i++) {
    if (i > 0) {
      result = result + ','
    }
    if (val[i] === null || typeof val[i] === 'undefined') {
      result = result + 'NULL'
    } else if (Array.isArray(val[i])) {
      result = result + arrayString(val[i])
    } else if (val[i] instanceof Buffer) {
      result += '\\\\x' + val[i].toString('hex')
    } else {
      result += escapeElement(prepareValue(val[i]))
    }
  }
  result = result + '}'
  return result
}

// converts values from javascript types
// to their 'raw' counterparts for use as a postgres parameter
// note: you can override this function to provide your own conversion mechanism
// for complex types, etc...
var prepareValue = function (val, seen) {
  if (val instanceof Buffer) {
    return val
  }
  if (ArrayBuffer.isView(val)) {
    var buf = Buffer.from(val.buffer, val.byteOffset, val.byteLength)
    if (buf.length === val.byteLength) {
      return buf
    }
    return buf.slice(val.byteOffset, val.byteOffset + val.byteLength) // Node.js v4 does not support those Buffer.from params
  }
  if (val instanceof Date) {
    if (defaults.parseInputDatesAsUTC) {
      return dateToStringUTC(val)
    } else {
      return dateToString(val)
    }
  }
  if (Array.isArray(val)) {
    return arrayString(val)
  }
  if (val === null || typeof val === 'undefined') {
    return null
  }
  if (typeof val === 'object') {
    return prepareObject(val, seen)
  }
  return val.toString()
}

function prepareObject(val, seen) {
  if (val && typeof val.toPostgres === 'function') {
    seen = seen || []
    if (seen.indexOf(val) !== -1) {
      throw new Error('circular reference detected while preparing "' + val + '" for query')
    }
    seen.push(val)

    return prepareValue(val.toPostgres(prepareValue), seen)
  }
  return JSON.stringify(val)
}

function pad(number, digits) {
  number = '' + number
  while (number.length < digits) {
    number = '0' + number
  }
  return number
}

function dateToString(date) {
  var offset = -date.getTimezoneOffset()

  var year = date.getFullYear()
  var isBCYear = year < 1
  if (isBCYear) year = Math.abs(year) + 1 // negative years are 1 off their BC representation

  var ret =
    pad(year, 4) +
    '-' +
    pad(date.getMonth() + 1, 2) +
    '-' +
    pad(date.getDate(), 2) +
    'T' +
    pad(date.getHours(), 2) +
    ':' +
    pad(date.getMinutes(), 2) +
    ':' +
    pad(date.getSeconds(), 2) +
    '.' +
    pad(date.getMilliseconds(), 3)

  if (offset < 0) {
    ret += '-'
    offset *= -1
  } else {
    ret += '+'
  }

  ret += pad(Math.floor(offset / 60), 2) + ':' + pad(offset % 60, 2)
  if (isBCYear) ret += ' BC'
  return ret
}

function dateToStringUTC(date) {
  var year = date.getUTCFullYear()
  var isBCYear = year < 1
  if (isBCYear) year = Math.abs(year) + 1 // negative years are 1 off their BC representation

  var ret =
    pad(year, 4) +
    '-' +
    pad(date.getUTCMonth() + 1, 2) +
    '-' +
    pad(date.getUTCDate(), 2) +
    'T' +
    pad(date.getUTCHours(), 2) +
    ':' +
    pad(date.getUTCMinutes(), 2) +
    ':' +
    pad(date.getUTCSeconds(), 2) +
    '.' +
    pad(date.getUTCMilliseconds(), 3)

  ret += '+00:00'
  if (isBCYear) ret += ' BC'
  return ret
}

function normalizeQueryConfig(config, values, callback) {
  // can take in strings or config objects
  config = typeof config === 'string' ? { text: config } : config
  if (values) {
    if (typeof values === 'function') {
      config.callback = values
    } else {
      config.values = values
    }
  }
  if (callback) {
    config.callback = callback
  }
  return config
}

const md5 = function (string) {
  return crypto.createHash('md5').update(string, 'utf-8').digest('hex')
}

// See AuthenticationMD5Password at https://www.postgresql.org/docs/current/static/protocol-flow.html
const postgresMd5PasswordHash = function (user, password, salt) {
  var inner = md5(password + user)
  var outer = md5(Buffer.concat([Buffer.from(inner), salt]))
  return 'md5' + outer
}

module.exports = {
  prepareValue: function prepareValueWrapper(value) {
    // this ensures that extra arguments do not get passed into prepareValue
    // by accident, eg: from calling values.map(utils.prepareValue)
    return prepareValue(value)
  },
  normalizeQueryConfig,
  postgresMd5PasswordHash,
  md5,
}


/***/ }),

/***/ "./node_modules/pg/package.json":
/*!**************************************!*\
  !*** ./node_modules/pg/package.json ***!
  \**************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, dependencies, deprecated, description, devDependencies, engines, files, gitHead, homepage, keywords, license, main, minNativeVersion, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"pg@^8.3.0\",\"_id\":\"pg@8.3.3\",\"_inBundle\":false,\"_integrity\":\"sha512-wmUyoQM/Xzmo62wgOdQAn5tl7u+IA1ZYK7qbuppi+3E+Gj4hlUxVHjInulieWrd0SfHi/ADriTb5ILJ/lsJrSg==\",\"_location\":\"/pg\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"range\",\"registry\":true,\"raw\":\"pg@^8.3.0\",\"name\":\"pg\",\"escapedName\":\"pg\",\"rawSpec\":\"^8.3.0\",\"saveSpec\":null,\"fetchSpec\":\"^8.3.0\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/pg/-/pg-8.3.3.tgz\",\"_shasum\":\"0338631ca3c39b4fb425b699d494cab17f5bb7eb\",\"_spec\":\"pg@^8.3.0\",\"_where\":\"C:\\\\Users\\\\CosminIulianIrimia\\\\Documents\\\\msd-social-network-copy\\\\core\",\"author\":{\"name\":\"Brian Carlson\",\"email\":\"brian.m.carlson@gmail.com\"},\"bugs\":{\"url\":\"https://github.com/brianc/node-postgres/issues\"},\"bundleDependencies\":false,\"dependencies\":{\"buffer-writer\":\"2.0.0\",\"packet-reader\":\"1.0.0\",\"pg-connection-string\":\"^2.3.0\",\"pg-pool\":\"^3.2.1\",\"pg-protocol\":\"^1.2.5\",\"pg-types\":\"^2.1.0\",\"pgpass\":\"1.x\",\"semver\":\"4.3.2\"},\"deprecated\":false,\"description\":\"PostgreSQL client - pure javascript & libpq with the same API\",\"devDependencies\":{\"async\":\"0.9.0\",\"bluebird\":\"3.5.2\",\"co\":\"4.6.0\",\"pg-copy-streams\":\"0.3.0\"},\"engines\":{\"node\":\">= 8.0.0\"},\"files\":[\"lib\",\"SPONSORS.md\"],\"gitHead\":\"95b5daadaade40ea343c0d3ad09ab230fa2ade4c\",\"homepage\":\"https://github.com/brianc/node-postgres\",\"keywords\":[\"database\",\"libpq\",\"pg\",\"postgre\",\"postgres\",\"postgresql\",\"rdbms\"],\"license\":\"MIT\",\"main\":\"./lib\",\"minNativeVersion\":\"2.0.0\",\"name\":\"pg\",\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/brianc/node-postgres.git\"},\"scripts\":{\"test\":\"make test-all\"},\"version\":\"8.3.3\"}");

/***/ }),

/***/ "./node_modules/pgpass/lib/helper.js":
/*!*******************************************!*\
  !*** ./node_modules/pgpass/lib/helper.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(/*! path */ "path")
  , Stream = __webpack_require__(/*! stream */ "stream").Stream
  , Split = __webpack_require__(/*! split */ "./node_modules/split/index.js")
  , util = __webpack_require__(/*! util */ "util")
  , defaultPort = 5432
  , isWin = (process.platform === 'win32')
  , warnStream = process.stderr
;


var S_IRWXG = 56     //    00070(8)
  , S_IRWXO = 7      //    00007(8)
  , S_IFMT  = 61440  // 00170000(8)
  , S_IFREG = 32768  //  0100000(8)
;
function isRegFile(mode) {
    return ((mode & S_IFMT) == S_IFREG);
}

var fieldNames = [ 'host', 'port', 'database', 'user', 'password' ];
var nrOfFields = fieldNames.length;
var passKey = fieldNames[ nrOfFields -1 ];


function warn() {
    var isWritable = (
        warnStream instanceof Stream &&
          true === warnStream.writable
    );

    if (isWritable) {
        var args = Array.prototype.slice.call(arguments).concat("\n");
        warnStream.write( util.format.apply(util, args) );
    }
}


Object.defineProperty(module.exports, 'isWin', {
    get : function() {
        return isWin;
    } ,
    set : function(val) {
        isWin = val;
    }
});


module.exports.warnTo = function(stream) {
    var old = warnStream;
    warnStream = stream;
    return old;
};

module.exports.getFileName = function(env){
    env = env || process.env;
    var file = env.PGPASSFILE || (
        isWin ?
          path.join( env.APPDATA , 'postgresql', 'pgpass.conf' ) :
          path.join( env.HOME, '.pgpass' )
    );
    return file;
};

module.exports.usePgPass = function(stats, fname) {
    if (Object.prototype.hasOwnProperty.call(process.env, 'PGPASSWORD')) {
        return false;
    }

    if (isWin) {
        return true;
    }

    fname = fname || '<unkn>';

    if (! isRegFile(stats.mode)) {
        warn('WARNING: password file "%s" is not a plain file', fname);
        return false;
    }

    if (stats.mode & (S_IRWXG | S_IRWXO)) {
        /* If password file is insecure, alert the user and ignore it. */
        warn('WARNING: password file "%s" has group or world access; permissions should be u=rw (0600) or less', fname);
        return false;
    }

    return true;
};


var matcher = module.exports.match = function(connInfo, entry) {
    return fieldNames.slice(0, -1).reduce(function(prev, field, idx){
        if (idx == 1) {
            // the port
            if ( Number( connInfo[field] || defaultPort ) === Number( entry[field] ) ) {
                return prev && true;
            }
        }
        return prev && (
            entry[field] === '*' ||
              entry[field] === connInfo[field]
        );
    }, true);
};


module.exports.getPassword = function(connInfo, stream, cb) {
    var pass;
    var lineStream = stream.pipe(new Split());

    function onLine(line) {
        var entry = parseLine(line);
        if (entry && isValidEntry(entry) && matcher(connInfo, entry)) {
            pass = entry[passKey];
            lineStream.end(); // -> calls onEnd(), but pass is set now
        }
    }

    var onEnd = function() {
        stream.destroy();
        cb(pass);
    };

    var onErr = function(err) {
        stream.destroy();
        warn('WARNING: error on reading file: %s', err);
        cb(undefined);
    };

    stream.on('error', onErr);
    lineStream
        .on('data', onLine)
        .on('end', onEnd)
        .on('error', onErr)
    ;

};


var parseLine = module.exports.parseLine = function(line) {
    if (line.length < 11 || line.match(/^\s+#/)) {
        return null;
    }

    var curChar = '';
    var prevChar = '';
    var fieldIdx = 0;
    var startIdx = 0;
    var endIdx = 0;
    var obj = {};
    var isLastField = false;
    var addToObj = function(idx, i0, i1) {
        var field = line.substring(i0, i1);

        if (! Object.hasOwnProperty.call(process.env, 'PGPASS_NO_DEESCAPE')) {
            field = field.replace(/\\([:\\])/g, '$1');
        }

        obj[ fieldNames[idx] ] = field;
    };

    for (var i = 0 ; i < line.length-1 ; i += 1) {
        curChar = line.charAt(i+1);
        prevChar = line.charAt(i);

        isLastField = (fieldIdx == nrOfFields-1);

        if (isLastField) {
            addToObj(fieldIdx, startIdx);
            break;
        }

        if (i >= 0 && curChar == ':' && prevChar !== '\\') {
            addToObj(fieldIdx, startIdx, i+1);

            startIdx = i+2;
            fieldIdx += 1;
        }
    }

    obj = ( Object.keys(obj).length === nrOfFields ) ? obj : null;

    return obj;
};


var isValidEntry = module.exports.isValidEntry = function(entry){
    var rules = {
        // host
        0 : function(x){
            return x.length > 0;
        } ,
        // port
        1 : function(x){
            if (x === '*') {
                return true;
            }
            x = Number(x);
            return (
                isFinite(x) &&
                  x > 0 &&
                  x < 9007199254740992 &&
                  Math.floor(x) === x
            );
        } ,
        // database
        2 : function(x){
            return x.length > 0;
        } ,
        // username
        3 : function(x){
            return x.length > 0;
        } ,
        // password
        4 : function(x){
            return x.length > 0;
        }
    };

    for (var idx = 0 ; idx < fieldNames.length ; idx += 1) {
        var rule = rules[idx];
        var value = entry[ fieldNames[idx] ] || '';

        var res = rule(value);
        if (!res) {
            return false;
        }
    }

    return true;
};



/***/ }),

/***/ "./node_modules/pgpass/lib/index.js":
/*!******************************************!*\
  !*** ./node_modules/pgpass/lib/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(/*! path */ "path")
  , fs = __webpack_require__(/*! fs */ "fs")
  , helper = __webpack_require__(/*! ./helper.js */ "./node_modules/pgpass/lib/helper.js")
;


module.exports = function(connInfo, cb) {
    var file = helper.getFileName();
    
    fs.stat(file, function(err, stat){
        if (err || !helper.usePgPass(stat, file)) {
            return cb(undefined);
        }

        var st = fs.createReadStream(file);

        helper.getPassword(connInfo, st, cb);
    });
};

module.exports.warnTo = helper.warnTo;


/***/ }),

/***/ "./node_modules/postgres-array/index.js":
/*!**********************************************!*\
  !*** ./node_modules/postgres-array/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.parse = function (source, transform) {
  return new ArrayParser(source, transform).parse()
}

class ArrayParser {
  constructor (source, transform) {
    this.source = source
    this.transform = transform || identity
    this.position = 0
    this.entries = []
    this.recorded = []
    this.dimension = 0
  }

  isEof () {
    return this.position >= this.source.length
  }

  nextCharacter () {
    var character = this.source[this.position++]
    if (character === '\\') {
      return {
        value: this.source[this.position++],
        escaped: true
      }
    }
    return {
      value: character,
      escaped: false
    }
  }

  record (character) {
    this.recorded.push(character)
  }

  newEntry (includeEmpty) {
    var entry
    if (this.recorded.length > 0 || includeEmpty) {
      entry = this.recorded.join('')
      if (entry === 'NULL' && !includeEmpty) {
        entry = null
      }
      if (entry !== null) entry = this.transform(entry)
      this.entries.push(entry)
      this.recorded = []
    }
  }

  consumeDimensions () {
    if (this.source[0] === '[') {
      while (!this.isEof()) {
        var char = this.nextCharacter()
        if (char.value === '=') break
      }
    }
  }

  parse (nested) {
    var character, parser, quote
    this.consumeDimensions()
    while (!this.isEof()) {
      character = this.nextCharacter()
      if (character.value === '{' && !quote) {
        this.dimension++
        if (this.dimension > 1) {
          parser = new ArrayParser(this.source.substr(this.position - 1), this.transform)
          this.entries.push(parser.parse(true))
          this.position += parser.position - 2
        }
      } else if (character.value === '}' && !quote) {
        this.dimension--
        if (!this.dimension) {
          this.newEntry()
          if (nested) return this.entries
        }
      } else if (character.value === '"' && !character.escaped) {
        if (quote) this.newEntry(true)
        quote = !quote
      } else if (character.value === ',' && !quote) {
        this.newEntry()
      } else {
        this.record(character.value)
      }
    }
    if (this.dimension !== 0) {
      throw new Error('array dimension not balanced')
    }
    return this.entries
  }
}

function identity (value) {
  return value
}


/***/ }),

/***/ "./node_modules/postgres-bytea/index.js":
/*!**********************************************!*\
  !*** ./node_modules/postgres-bytea/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function parseBytea (input) {
  if (/^\\x/.test(input)) {
    // new 'hex' style response (pg >9.0)
    return new Buffer(input.substr(2), 'hex')
  }
  var output = ''
  var i = 0
  while (i < input.length) {
    if (input[i] !== '\\') {
      output += input[i]
      ++i
    } else {
      if (/[0-7]{3}/.test(input.substr(i + 1, 3))) {
        output += String.fromCharCode(parseInt(input.substr(i + 1, 3), 8))
        i += 4
      } else {
        var backslashes = 1
        while (i + backslashes < input.length && input[i + backslashes] === '\\') {
          backslashes++
        }
        for (var k = 0; k < Math.floor(backslashes / 2); ++k) {
          output += '\\'
        }
        i += Math.floor(backslashes / 2) * 2
      }
    }
  }
  return new Buffer(output, 'binary')
}


/***/ }),

/***/ "./node_modules/postgres-date/index.js":
/*!*********************************************!*\
  !*** ./node_modules/postgres-date/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DATE_TIME = /(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/
var DATE = /^(\d{1,})-(\d{2})-(\d{2})( BC)?$/
var TIME_ZONE = /([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/
var INFINITY = /^-?infinity$/

module.exports = function parseDate (isoDate) {
  if (INFINITY.test(isoDate)) {
    // Capitalize to Infinity before passing to Number
    return Number(isoDate.replace('i', 'I'))
  }
  var matches = DATE_TIME.exec(isoDate)

  if (!matches) {
    // Force YYYY-MM-DD dates to be parsed as local time
    return getDate(isoDate) || null
  }

  var isBC = !!matches[8]
  var year = parseInt(matches[1], 10)
  if (isBC) {
    year = bcYearToNegativeYear(year)
  }

  var month = parseInt(matches[2], 10) - 1
  var day = matches[3]
  var hour = parseInt(matches[4], 10)
  var minute = parseInt(matches[5], 10)
  var second = parseInt(matches[6], 10)

  var ms = matches[7]
  ms = ms ? 1000 * parseFloat(ms) : 0

  var date
  var offset = timeZoneOffset(isoDate)
  if (offset != null) {
    date = new Date(Date.UTC(year, month, day, hour, minute, second, ms))

    // Account for years from 0 to 99 being interpreted as 1900-1999
    // by Date.UTC / the multi-argument form of the Date constructor
    if (is0To99(year)) {
      date.setUTCFullYear(year)
    }

    if (offset !== 0) {
      date.setTime(date.getTime() - offset)
    }
  } else {
    date = new Date(year, month, day, hour, minute, second, ms)

    if (is0To99(year)) {
      date.setFullYear(year)
    }
  }

  return date
}

function getDate (isoDate) {
  var matches = DATE.exec(isoDate)
  if (!matches) {
    return
  }

  var year = parseInt(matches[1], 10)
  var isBC = !!matches[4]
  if (isBC) {
    year = bcYearToNegativeYear(year)
  }

  var month = parseInt(matches[2], 10) - 1
  var day = matches[3]
  // YYYY-MM-DD will be parsed as local time
  var date = new Date(year, month, day)

  if (is0To99(year)) {
    date.setFullYear(year)
  }

  return date
}

// match timezones:
// Z (UTC)
// -05
// +06:30
function timeZoneOffset (isoDate) {
  if (isoDate.endsWith('+00')) {
    return 0
  }

  var zone = TIME_ZONE.exec(isoDate.split(' ')[1])
  if (!zone) return
  var type = zone[1]

  if (type === 'Z') {
    return 0
  }
  var sign = type === '-' ? -1 : 1
  var offset = parseInt(zone[2], 10) * 3600 +
    parseInt(zone[3] || 0, 10) * 60 +
    parseInt(zone[4] || 0, 10)

  return offset * sign * 1000
}

function bcYearToNegativeYear (year) {
  // Account for numerical difference between representations of BC years
  // See: https://github.com/bendrucker/postgres-date/issues/5
  return -(year - 1)
}

function is0To99 (num) {
  return num >= 0 && num < 100
}


/***/ }),

/***/ "./node_modules/postgres-interval/index.js":
/*!*************************************************!*\
  !*** ./node_modules/postgres-interval/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(/*! xtend/mutable */ "./node_modules/xtend/mutable.js")

module.exports = PostgresInterval

function PostgresInterval (raw) {
  if (!(this instanceof PostgresInterval)) {
    return new PostgresInterval(raw)
  }
  extend(this, parse(raw))
}
var properties = ['seconds', 'minutes', 'hours', 'days', 'months', 'years']
PostgresInterval.prototype.toPostgres = function () {
  var filtered = properties.filter(this.hasOwnProperty, this)

  // In addition to `properties`, we need to account for fractions of seconds.
  if (this.milliseconds && filtered.indexOf('seconds') < 0) {
    filtered.push('seconds')
  }

  if (filtered.length === 0) return '0'
  return filtered
    .map(function (property) {
      var value = this[property] || 0

      // Account for fractional part of seconds,
      // remove trailing zeroes.
      if (property === 'seconds' && this.milliseconds) {
        value = (value + this.milliseconds / 1000).toFixed(6).replace(/\.?0+$/, '')
      }

      return value + ' ' + property
    }, this)
    .join(' ')
}

var propertiesISOEquivalent = {
  years: 'Y',
  months: 'M',
  days: 'D',
  hours: 'H',
  minutes: 'M',
  seconds: 'S'
}
var dateProperties = ['years', 'months', 'days']
var timeProperties = ['hours', 'minutes', 'seconds']
// according to ISO 8601
PostgresInterval.prototype.toISOString = PostgresInterval.prototype.toISO = function () {
  var datePart = dateProperties
    .map(buildProperty, this)
    .join('')

  var timePart = timeProperties
    .map(buildProperty, this)
    .join('')

  return 'P' + datePart + 'T' + timePart

  function buildProperty (property) {
    var value = this[property] || 0

    // Account for fractional part of seconds,
    // remove trailing zeroes.
    if (property === 'seconds' && this.milliseconds) {
      value = (value + this.milliseconds / 1000).toFixed(6).replace(/0+$/, '')
    }

    return value + propertiesISOEquivalent[property]
  }
}

var NUMBER = '([+-]?\\d+)'
var YEAR = NUMBER + '\\s+years?'
var MONTH = NUMBER + '\\s+mons?'
var DAY = NUMBER + '\\s+days?'
var TIME = '([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?'
var INTERVAL = new RegExp([YEAR, MONTH, DAY, TIME].map(function (regexString) {
  return '(' + regexString + ')?'
})
  .join('\\s*'))

// Positions of values in regex match
var positions = {
  years: 2,
  months: 4,
  days: 6,
  hours: 9,
  minutes: 10,
  seconds: 11,
  milliseconds: 12
}
// We can use negative time
var negatives = ['hours', 'minutes', 'seconds', 'milliseconds']

function parseMilliseconds (fraction) {
  // add omitted zeroes
  var microseconds = fraction + '000000'.slice(fraction.length)
  return parseInt(microseconds, 10) / 1000
}

function parse (interval) {
  if (!interval) return {}
  var matches = INTERVAL.exec(interval)
  var isNegative = matches[8] === '-'
  return Object.keys(positions)
    .reduce(function (parsed, property) {
      var position = positions[property]
      var value = matches[position]
      // no empty string
      if (!value) return parsed
      // milliseconds are actually microseconds (up to 6 digits)
      // with omitted trailing zeroes.
      value = property === 'milliseconds'
        ? parseMilliseconds(value)
        : parseInt(value, 10)
      // no zeros
      if (!value) return parsed
      if (isNegative && ~negatives.indexOf(property)) {
        value *= -1
      }
      parsed[property] = value
      return parsed
    }, {})
}


/***/ }),

/***/ "./node_modules/semver/semver.js":
/*!***************************************!*\
  !*** ./node_modules/semver/semver.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// export the class if we are in a Node-like system.
if ( true && module.exports === exports)
  exports = module.exports = SemVer;

// The debug function is excluded entirely from the minified version.
/* nomin */ var debug;
/* nomin */ if (typeof process === 'object' &&
    /* nomin */ process.env &&
    /* nomin */ process.env.NODE_DEBUG &&
    /* nomin */ /\bsemver\b/i.test(process.env.NODE_DEBUG))
  /* nomin */ debug = function() {
    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);
    /* nomin */ args.unshift('SEMVER');
    /* nomin */ console.log.apply(console, args);
    /* nomin */ };
/* nomin */ else
  /* nomin */ debug = function() {};

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0';

var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

// The actual regexps go on exports.re
var re = exports.re = [];
var src = exports.src = [];
var R = 0;

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++;
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
var NUMERICIDENTIFIERLOOSE = R++;
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';


// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++;
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';


// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++;
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')';

var MAINVERSIONLOOSE = R++;
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++;
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
                            '|' + src[NONNUMERICIDENTIFIER] + ')';

var PRERELEASEIDENTIFIERLOOSE = R++;
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[NONNUMERICIDENTIFIER] + ')';


// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++;
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

var PRERELEASELOOSE = R++;
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++;
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++;
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';


// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++;
var FULLPLAIN = 'v?' + src[MAINVERSION] +
                src[PRERELEASE] + '?' +
                src[BUILD] + '?';

src[FULL] = '^' + FULLPLAIN + '$';

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
                 src[PRERELEASELOOSE] + '?' +
                 src[BUILD] + '?';

var LOOSE = R++;
src[LOOSE] = '^' + LOOSEPLAIN + '$';

var GTLT = R++;
src[GTLT] = '((?:<|>)?=?)';

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++;
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
var XRANGEIDENTIFIER = R++;
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

var XRANGEPLAIN = R++;
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[PRERELEASE] + ')?' +
                   src[BUILD] + '?' +
                   ')?)?';

var XRANGEPLAINLOOSE = R++;
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[PRERELEASELOOSE] + ')?' +
                        src[BUILD] + '?' +
                        ')?)?';

var XRANGE = R++;
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
var XRANGELOOSE = R++;
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++;
src[LONETILDE] = '(?:~>?)';

var TILDETRIM = R++;
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
var tildeTrimReplace = '$1~';

var TILDE = R++;
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
var TILDELOOSE = R++;
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++;
src[LONECARET] = '(?:\\^)';

var CARETTRIM = R++;
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
var caretTrimReplace = '$1^';

var CARET = R++;
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
var CARETLOOSE = R++;
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++;
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
var COMPARATOR = R++;
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';


// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++;
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
var comparatorTrimReplace = '$1$2$3';


// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++;
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[XRANGEPLAIN] + ')' +
                   '\\s*$';

var HYPHENRANGELOOSE = R++;
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s*$';

// Star ranges basically just allow anything at all.
var STAR = R++;
src[STAR] = '(<|>)?=?\\s*\\*';

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i]);
  if (!re[i])
    re[i] = new RegExp(src[i]);
}

exports.parse = parse;
function parse(version, loose) {
  if (version.length > MAX_LENGTH)
    return null;

  var r = loose ? re[LOOSE] : re[FULL];
  if (!r.test(version))
    return null;

  try {
    return new SemVer(version, loose);
  } catch (er) {
    return null;
  }
}

exports.valid = valid;
function valid(version, loose) {
  var v = parse(version, loose);
  return v ? v.version : null;
}


exports.clean = clean;
function clean(version, loose) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
  return s ? s.version : null;
}

exports.SemVer = SemVer;

function SemVer(version, loose) {
  if (version instanceof SemVer) {
    if (version.loose === loose)
      return version;
    else
      version = version.version;
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version);
  }

  if (version.length > MAX_LENGTH)
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')

  if (!(this instanceof SemVer))
    return new SemVer(version, loose);

  debug('SemVer', version, loose);
  this.loose = loose;
  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

  if (!m)
    throw new TypeError('Invalid Version: ' + version);

  this.raw = version;

  // these are actually numbers
  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];

  if (this.major > MAX_SAFE_INTEGER || this.major < 0)
    throw new TypeError('Invalid major version')

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)
    throw new TypeError('Invalid minor version')

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)
    throw new TypeError('Invalid patch version')

  // numberify any prerelease numeric ids
  if (!m[4])
    this.prerelease = [];
  else
    this.prerelease = m[4].split('.').map(function(id) {
      return (/^[0-9]+$/.test(id)) ? +id : id;
    });

  this.build = m[5] ? m[5].split('.') : [];
  this.format();
}

SemVer.prototype.format = function() {
  this.version = this.major + '.' + this.minor + '.' + this.patch;
  if (this.prerelease.length)
    this.version += '-' + this.prerelease.join('.');
  return this.version;
};

SemVer.prototype.inspect = function() {
  return '<SemVer "' + this + '">';
};

SemVer.prototype.toString = function() {
  return this.version;
};

SemVer.prototype.compare = function(other) {
  debug('SemVer.compare', this.version, this.loose, other);
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return this.compareMain(other) || this.comparePre(other);
};

SemVer.prototype.compareMain = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch);
};

SemVer.prototype.comparePre = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length)
    return -1;
  else if (!this.prerelease.length && other.prerelease.length)
    return 1;
  else if (!this.prerelease.length && !other.prerelease.length)
    return 0;

  var i = 0;
  do {
    var a = this.prerelease[i];
    var b = other.prerelease[i];
    debug('prerelease compare', i, a, b);
    if (a === undefined && b === undefined)
      return 0;
    else if (b === undefined)
      return 1;
    else if (a === undefined)
      return -1;
    else if (a === b)
      continue;
    else
      return compareIdentifiers(a, b);
  } while (++i);
};

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function(release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor = 0;
      this.major++;
      this.inc('pre', identifier);
      break;
    case 'preminor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor++;
      this.inc('pre', identifier);
      break;
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0;
      this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0)
        this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
        this.major++;
      this.minor = 0;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0)
        this.minor++;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0)
        this.patch++;
      this.prerelease = [];
      break;
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0)
        this.prerelease = [0];
      else {
        var i = this.prerelease.length;
        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++;
            i = -2;
          }
        }
        if (i === -1) // didn't increment anything
          this.prerelease.push(0);
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1]))
            this.prerelease = [identifier, 0];
        } else
          this.prerelease = [identifier, 0];
      }
      break;

    default:
      throw new Error('invalid increment argument: ' + release);
  }
  this.format();
  return this;
};

exports.inc = inc;
function inc(version, release, loose, identifier) {
  if (typeof(loose) === 'string') {
    identifier = loose;
    loose = undefined;
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
}

exports.diff = diff;
function diff(version1, version2) {
  if (eq(version1, version2)) {
    return null;
  } else {
    var v1 = parse(version1);
    var v2 = parse(version2);
    if (v1.prerelease.length || v2.prerelease.length) {
      for (var key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return 'pre'+key;
          }
        }
      }
      return 'prerelease';
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return key;
        }
      }
    }
  }
}

exports.compareIdentifiers = compareIdentifiers;

var numeric = /^[0-9]+$/;
function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return (anum && !bnum) ? -1 :
         (bnum && !anum) ? 1 :
         a < b ? -1 :
         a > b ? 1 :
         0;
}

exports.rcompareIdentifiers = rcompareIdentifiers;
function rcompareIdentifiers(a, b) {
  return compareIdentifiers(b, a);
}

exports.major = major;
function major(a, loose) {
  return new SemVer(a, loose).major;
}

exports.minor = minor;
function minor(a, loose) {
  return new SemVer(a, loose).minor;
}

exports.patch = patch;
function patch(a, loose) {
  return new SemVer(a, loose).patch;
}

exports.compare = compare;
function compare(a, b, loose) {
  return new SemVer(a, loose).compare(b);
}

exports.compareLoose = compareLoose;
function compareLoose(a, b) {
  return compare(a, b, true);
}

exports.rcompare = rcompare;
function rcompare(a, b, loose) {
  return compare(b, a, loose);
}

exports.sort = sort;
function sort(list, loose) {
  return list.sort(function(a, b) {
    return exports.compare(a, b, loose);
  });
}

exports.rsort = rsort;
function rsort(list, loose) {
  return list.sort(function(a, b) {
    return exports.rcompare(a, b, loose);
  });
}

exports.gt = gt;
function gt(a, b, loose) {
  return compare(a, b, loose) > 0;
}

exports.lt = lt;
function lt(a, b, loose) {
  return compare(a, b, loose) < 0;
}

exports.eq = eq;
function eq(a, b, loose) {
  return compare(a, b, loose) === 0;
}

exports.neq = neq;
function neq(a, b, loose) {
  return compare(a, b, loose) !== 0;
}

exports.gte = gte;
function gte(a, b, loose) {
  return compare(a, b, loose) >= 0;
}

exports.lte = lte;
function lte(a, b, loose) {
  return compare(a, b, loose) <= 0;
}

exports.cmp = cmp;
function cmp(a, op, b, loose) {
  var ret;
  switch (op) {
    case '===':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a === b;
      break;
    case '!==':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a !== b;
      break;
    case '': case '=': case '==': ret = eq(a, b, loose); break;
    case '!=': ret = neq(a, b, loose); break;
    case '>': ret = gt(a, b, loose); break;
    case '>=': ret = gte(a, b, loose); break;
    case '<': ret = lt(a, b, loose); break;
    case '<=': ret = lte(a, b, loose); break;
    default: throw new TypeError('Invalid operator: ' + op);
  }
  return ret;
}

exports.Comparator = Comparator;
function Comparator(comp, loose) {
  if (comp instanceof Comparator) {
    if (comp.loose === loose)
      return comp;
    else
      comp = comp.value;
  }

  if (!(this instanceof Comparator))
    return new Comparator(comp, loose);

  debug('comparator', comp, loose);
  this.loose = loose;
  this.parse(comp);

  if (this.semver === ANY)
    this.value = '';
  else
    this.value = this.operator + this.semver.version;

  debug('comp', this);
}

var ANY = {};
Comparator.prototype.parse = function(comp) {
  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var m = comp.match(r);

  if (!m)
    throw new TypeError('Invalid comparator: ' + comp);

  this.operator = m[1];
  if (this.operator === '=')
    this.operator = '';

  // if it literally is just '>' or '' then allow anything.
  if (!m[2])
    this.semver = ANY;
  else
    this.semver = new SemVer(m[2], this.loose);
};

Comparator.prototype.inspect = function() {
  return '<SemVer Comparator "' + this + '">';
};

Comparator.prototype.toString = function() {
  return this.value;
};

Comparator.prototype.test = function(version) {
  debug('Comparator.test', version, this.loose);

  if (this.semver === ANY)
    return true;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  return cmp(version, this.operator, this.semver, this.loose);
};


exports.Range = Range;
function Range(range, loose) {
  if ((range instanceof Range) && range.loose === loose)
    return range;

  if (!(this instanceof Range))
    return new Range(range, loose);

  this.loose = loose;

  // First, split based on boolean or ||
  this.raw = range;
  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
    return this.parseRange(range.trim());
  }, this).filter(function(c) {
    // throw out any that are not relevant for whatever reason
    return c.length;
  });

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range);
  }

  this.format();
}

Range.prototype.inspect = function() {
  return '<SemVer Range "' + this.range + '">';
};

Range.prototype.format = function() {
  this.range = this.set.map(function(comps) {
    return comps.join(' ').trim();
  }).join('||').trim();
  return this.range;
};

Range.prototype.toString = function() {
  return this.range;
};

Range.prototype.parseRange = function(range) {
  var loose = this.loose;
  range = range.trim();
  debug('range', range, loose);
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
  range = range.replace(hr, hyphenReplace);
  debug('hyphen replace', range);
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
  debug('comparator trim', range, re[COMPARATORTRIM]);

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace);

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace);

  // normalize spaces
  range = range.split(/\s+/).join(' ');

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var set = range.split(' ').map(function(comp) {
    return parseComparator(comp, loose);
  }).join(' ').split(/\s+/);
  if (this.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function(comp) {
      return !!comp.match(compRe);
    });
  }
  set = set.map(function(comp) {
    return new Comparator(comp, loose);
  });

  return set;
};

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators;
function toComparators(range, loose) {
  return new Range(range, loose).set.map(function(comp) {
    return comp.map(function(c) {
      return c.value;
    }).join(' ').trim().split(' ');
  });
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator(comp, loose) {
  debug('comp', comp);
  comp = replaceCarets(comp, loose);
  debug('caret', comp);
  comp = replaceTildes(comp, loose);
  debug('tildes', comp);
  comp = replaceXRanges(comp, loose);
  debug('xrange', comp);
  comp = replaceStars(comp, loose);
  debug('stars', comp);
  return comp;
}

function isX(id) {
  return !id || id.toLowerCase() === 'x' || id === '*';
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceTilde(comp, loose);
  }).join(' ');
}

function replaceTilde(comp, loose) {
  var r = loose ? re[TILDELOOSE] : re[TILDE];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p))
      // ~1.2 == >=1.2.0- <1.3.0-
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    else if (pr) {
      debug('replaceTilde pr', pr);
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      ret = '>=' + M + '.' + m + '.' + p + pr +
            ' <' + M + '.' + (+m + 1) + '.0';
    } else
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0';

    debug('tilde return', ret);
    return ret;
  });
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceCaret(comp, loose);
  }).join(' ');
}

function replaceCaret(comp, loose) {
  debug('caret', comp, loose);
  var r = loose ? re[CARETLOOSE] : re[CARET];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p)) {
      if (M === '0')
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
      else
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
    } else if (pr) {
      debug('replaceCaret pr', pr);
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p + pr +
              ' <' + (+M + 1) + '.0.0';
    } else {
      debug('no pr');
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0';
    }

    debug('caret return', ret);
    return ret;
  });
}

function replaceXRanges(comp, loose) {
  debug('replaceXRanges', comp, loose);
  return comp.split(/\s+/).map(function(comp) {
    return replaceXRange(comp, loose);
  }).join(' ');
}

function replaceXRange(comp, loose) {
  comp = comp.trim();
  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr);
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;

    if (gtlt === '=' && anyX)
      gtlt = '';

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // replace X with 0
      if (xm)
        m = 0;
      if (xp)
        p = 0;

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>=';
        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else if (xp) {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm)
          M = +M + 1
        else
          m = +m + 1
      }

      ret = gtlt + M + '.' + m + '.' + p;
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    }

    debug('xRange return', ret);

    return ret;
  });
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars(comp, loose) {
  debug('replaceStars', comp, loose);
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '');
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace($0,
                       from, fM, fm, fp, fpr, fb,
                       to, tM, tm, tp, tpr, tb) {

  if (isX(fM))
    from = '';
  else if (isX(fm))
    from = '>=' + fM + '.0.0';
  else if (isX(fp))
    from = '>=' + fM + '.' + fm + '.0';
  else
    from = '>=' + from;

  if (isX(tM))
    to = '';
  else if (isX(tm))
    to = '<' + (+tM + 1) + '.0.0';
  else if (isX(tp))
    to = '<' + tM + '.' + (+tm + 1) + '.0';
  else if (tpr)
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
  else
    to = '<=' + to;

  return (from + ' ' + to).trim();
}


// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function(version) {
  if (!version)
    return false;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version))
      return true;
  }
  return false;
};

function testSet(set, version) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version))
      return false;
  }

  if (version.prerelease.length) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (var i = 0; i < set.length; i++) {
      debug(set[i].semver);
      if (set[i].semver === ANY)
        return true;

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch)
          return true;
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false;
  }

  return true;
}

exports.satisfies = satisfies;
function satisfies(version, range, loose) {
  try {
    range = new Range(range, loose);
  } catch (er) {
    return false;
  }
  return range.test(version);
}

exports.maxSatisfying = maxSatisfying;
function maxSatisfying(versions, range, loose) {
  return versions.filter(function(version) {
    return satisfies(version, range, loose);
  }).sort(function(a, b) {
    return rcompare(a, b, loose);
  })[0] || null;
}

exports.validRange = validRange;
function validRange(range, loose) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, loose).range || '*';
  } catch (er) {
    return null;
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr;
function ltr(version, range, loose) {
  return outside(version, range, '<', loose);
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr;
function gtr(version, range, loose) {
  return outside(version, range, '>', loose);
}

exports.outside = outside;
function outside(version, range, hilo, loose) {
  version = new SemVer(version, loose);
  range = new Range(range, loose);

  var gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;
    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, loose)) {
    return false;
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];

    var high = null;
    var low = null;

    comparators.forEach(function(comparator) {
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, loose)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, loose)) {
        low = comparator;
      }
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }
  return true;
}

// Use the define() function if we're in AMD land
if (true)
  !(__WEBPACK_AMD_DEFINE_FACTORY__ = (exports),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/split/index.js":
/*!*************************************!*\
  !*** ./node_modules/split/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//filter will reemit the data if cb(err,pass) pass is truthy

// reduce is more tricky
// maybe we want to group the reductions or emit progress updates occasionally
// the most basic reduce just emits one 'data' event after it has recieved 'end'


var through = __webpack_require__(/*! through */ "./node_modules/through/index.js")
var Decoder = __webpack_require__(/*! string_decoder */ "string_decoder").StringDecoder

module.exports = split

//TODO pass in a function to map across the lines.

function split (matcher, mapper, options) {
  var decoder = new Decoder()
  var soFar = ''
  var maxLength = options && options.maxLength;
  var trailing = options && options.trailing === false ? false : true
  if('function' === typeof matcher)
    mapper = matcher, matcher = null
  if (!matcher)
    matcher = /\r?\n/

  function emit(stream, piece) {
    if(mapper) {
      try {
        piece = mapper(piece)
      }
      catch (err) {
        return stream.emit('error', err)
      }
      if('undefined' !== typeof piece)
        stream.queue(piece)
    }
    else
      stream.queue(piece)
  }

  function next (stream, buffer) {
    var pieces = ((soFar != null ? soFar : '') + buffer).split(matcher)
    soFar = pieces.pop()

    if (maxLength && soFar.length > maxLength)
      return stream.emit('error', new Error('maximum buffer reached'))

    for (var i = 0; i < pieces.length; i++) {
      var piece = pieces[i]
      emit(stream, piece)
    }
  }

  return through(function (b) {
    next(this, decoder.write(b))
  },
  function () {
    if(decoder.end)
      next(this, decoder.end())
    if(trailing && soFar != null)
      emit(this, soFar)
    this.queue(null)
  })
}


/***/ }),

/***/ "./node_modules/through/index.js":
/*!***************************************!*\
  !*** ./node_modules/through/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stream = __webpack_require__(/*! stream */ "stream")

// through
//
// a stream that does nothing but re-emit the input.
// useful for aggregating a series of changing but not ending streams into one stream)

exports = module.exports = through
through.through = through

//create a readable writable stream.

function through (write, end, opts) {
  write = write || function (data) { this.queue(data) }
  end = end || function () { this.queue(null) }

  var ended = false, destroyed = false, buffer = [], _ended = false
  var stream = new Stream()
  stream.readable = stream.writable = true
  stream.paused = false

//  stream.autoPause   = !(opts && opts.autoPause   === false)
  stream.autoDestroy = !(opts && opts.autoDestroy === false)

  stream.write = function (data) {
    write.call(this, data)
    return !stream.paused
  }

  function drain() {
    while(buffer.length && !stream.paused) {
      var data = buffer.shift()
      if(null === data)
        return stream.emit('end')
      else
        stream.emit('data', data)
    }
  }

  stream.queue = stream.push = function (data) {
//    console.error(ended)
    if(_ended) return stream
    if(data === null) _ended = true
    buffer.push(data)
    drain()
    return stream
  }

  //this will be registered as the first 'end' listener
  //must call destroy next tick, to make sure we're after any
  //stream piped from here.
  //this is only a problem if end is not emitted synchronously.
  //a nicer way to do this is to make sure this is the last listener for 'end'

  stream.on('end', function () {
    stream.readable = false
    if(!stream.writable && stream.autoDestroy)
      process.nextTick(function () {
        stream.destroy()
      })
  })

  function _end () {
    stream.writable = false
    end.call(stream)
    if(!stream.readable && stream.autoDestroy)
      stream.destroy()
  }

  stream.end = function (data) {
    if(ended) return
    ended = true
    if(arguments.length) stream.write(data)
    _end() // will emit or queue
    return stream
  }

  stream.destroy = function () {
    if(destroyed) return
    destroyed = true
    ended = true
    buffer.length = 0
    stream.writable = stream.readable = false
    stream.emit('close')
    return stream
  }

  stream.pause = function () {
    if(stream.paused) return
    stream.paused = true
    return stream
  }

  stream.resume = function () {
    if(stream.paused) {
      stream.paused = false
      stream.emit('resume')
    }
    drain()
    //may have become paused again,
    //as drain emits 'data'.
    if(!stream.paused)
      stream.emit('drain')
    return stream
  }
  return stream
}



/***/ }),

/***/ "./node_modules/xtend/mutable.js":
/*!***************************************!*\
  !*** ./node_modules/xtend/mutable.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("string_decoder");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
});
//# sourceMappingURL=bundle.js.map