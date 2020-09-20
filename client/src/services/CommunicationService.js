import Constants from "../Constants";

async function doRequest(method = 'GET', url = "/", data = {}) {
    let fetchParams = {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'x-apigateway-event' : '{"test" : "Test"}',
            'x-apigateway-context' : '{"test" : "Test"}',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    };

    if (method !== 'GET') {
        fetchParams.body = JSON.stringify(data)
    }

    let response = await fetch(url, fetchParams);
    console.log(response);
    return response.json();
}

async function doPost(url = '', data = {}) {
    return doRequest('POST', url, data);
}

async function doPut(url = '', data = {}) {
    return doRequest('PUT', url, data);
}

async function doGet(url) {
    return doRequest('GET', url);
}

async function doDelete(url) {
    return doRequest('DELETE', url);
}

export async function getQuestionnaires() {
    let apiURL = Constants.API.HOST_AND_PORT + Constants.API.PATHS.QUESTIONNAIRES.GET_ALL_BY_USER;
    return doGet(apiURL)
}

export async function answer(questionnaireId, userAnswers) {
    let apiURL = Constants.API.HOST_AND_PORT + Constants.API.PATHS.QUESTIONNAIRES.ANSWER;
    return doPost(apiURL, {
        "questionnaireId": questionnaireId,
        "userAnswers": userAnswers
    })
}

export async function getPosts() {
    let apiURL = Constants.API.HOST_AND_PORT + Constants.API.PATHS.POST.GET_ALL_BY_USER;
    return doGet(apiURL)
}

export async function getSubscriptions() {
    let apiURL = Constants.API.HOST_AND_PORT + Constants.API.PATHS.SUBSCRIPTION.GET_ALL_BY_USER;
    return doGet(apiURL)
}

export async function getCurrentUser() {
    let apiURL = Constants.API.HOST_AND_PORT + Constants.API.PATHS.USER.GET_CURRENT;
    return doGet(apiURL)
}
export async function changeSubscription(subscription_id) {
    let apiURL = Constants.API.HOST_AND_PORT + Constants.API.PATHS.USER.CHANGE_SUBSCRIPTION(subscription_id);
    return doPut(apiURL)
}

export async function reactToPost(post_id, reaction) {
    let apiURL = Constants.API.HOST_AND_PORT + Constants.API.PATHS.POST.REACT(post_id);
    return doPut(apiURL, {
        "post_id": post_id,
        "reaction": reaction
    })
}

export async function unreactToPost(post_id, reaction_id) {
    let apiURL = Constants.API.HOST_AND_PORT + Constants.API.PATHS.POST.UNREACT(post_id, reaction_id);
    return doDelete(apiURL)
}


export async function commentToPost(post_id, comment) {
    let apiURL = Constants.API.HOST_AND_PORT + Constants.API.PATHS.POST.COMMENT(post_id);
    return doPut(apiURL, {
        "post_id": post_id,
        "comment": comment
    })
}

export async function deleteCommentFromPost(post_id, comment_id) {
    let apiURL = Constants.API.HOST_AND_PORT + Constants.API.PATHS.POST.UNCOMMENT(post_id, comment_id);
    return doDelete(apiURL)
}