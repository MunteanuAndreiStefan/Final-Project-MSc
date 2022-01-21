import config from './config';

let AUTHORIZATION = '';

const API = {
    HOST_AND_PORT: config.server.AWS,
    PATHS: {
        POST: {
            GET_ALL_BY_USER: '/posts',
            CREATE: '/posts',
            GET_ALL_TAGS: '/posts/tags',
            GET_ALL_CATEGORIES: '/posts/categories',
            CREATE_CATEGORY: '/posts/categories',
            GET_ALL_BY_CATEGORY_ID: (category_id) => `/posts/categoryId/${category_id}`,
            REACT: (post_id) => `/posts/id/${post_id}/react`,
            UNREACT: (post_id, reaction_id) => `/posts/id/${post_id}/react/${reaction_id}`,
            GET_ALL_UNAPPROVED_COMMENTS: `/posts/comments/unapproved`,
            APPROVE_COMMENT: (comment_id) => `/posts/comments/${comment_id}/approve`,
            DELETE_COMMENT: (comment_id) => `/posts/comments/${comment_id}`,
            COMMENT: (post_id) => `/posts/id/${post_id}/comment`,
            UNCOMMENT: (post_id, comment_id) => `/posts/id/${post_id}/comment/${comment_id}`
        },
        USER: {
            GET_ALL_SHALLOW: '/users/shallowAll',
            GET_CURRENT: '/users/current',
            GET_USER_CONTACT_INFO: (user_id) =>  `/users/contactInfo/${user_id}`,
            CHANGE_SUBSCRIPTION: (subscription_id) => `/users/change/subscription/${subscription_id}`,
            CHANGE_ACTIVE_STATUS: (user_internal_id) => `/users/change/activeStatus/user_internal_id/${user_internal_id}`,
            GET_USER_ACTIVITY: (user_internal_id) => `/users/activity/user_internal_id/${user_internal_id}`,
            CHANGE_DETAILS: `/users/change/details`
        },
        SUBSCRIPTION: {
            GET_ALL_BY_USER: '/subscriptions'
        },
        QUESTIONNAIRES: {
            GET_ALL_BY_USER: '/questionnaires',
            CREATE: '/questionnaires',
            ANSWER: (questionnaireId) => `/questionnaires/id/${questionnaireId}`,
            DELETE: (questionnaireId) => `/questionnaires/id/${questionnaireId}`
        },
        NOTIFICATIONS: {
            GET_ALL: '/notifications',
            GET_ALL_MESSAGES: '/notifications/messages',
            ADD_ALERT: '/notifications/addAlert',
            ADMIN_MESSAGE: '/notifications/addMessageForAdmin',
            USER_MESSAGE: '/notifications/addMessageForUserAsAdmin'
        }
    }
}

export default {
    API, AUTHORIZATION
};
