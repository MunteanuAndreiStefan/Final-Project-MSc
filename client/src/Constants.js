let MOCK_DATA = {
    subscriptions: [
        {
            id: 1,
            name: 'Free tier',
            description: 'This contains limited features.',
            feature_list: [
                '10 Posts',
                '5 Questionnaires'
            ],
            price: 0
        },
        {
            id: 2,
            name: 'Silver tier',
            description: 'This contains more features.',
            feature_list: [
                '50 Posts',
                '25 Questionnaires',
                'Reaction and Comment capabilities'
            ],
            price: 9.99
        },
        {
            id: 3,
            name: 'Gold tier',
            description: 'This contains a lot of features.',
            feature_list: [
                '100 Posts',
                '50 Questionnaires',
                'Reaction and Comment capabilities',
                'Bussines hours Support'
            ],
            price: 17.99
        },
        {
            id: 4,
            name: 'Platinum tier',
            description: 'This contains all the features.',
            feature_list: [
                'Unlimited Posts',
                'Unlimited Questionnaires',
                'Like and Comment capabilities',
                '24/7 Support'
            ],
            price: 29.99
        }
    ],
    current_user: {
        id: 1,
        first_name: 'Marin',
        last_name: 'Morar',
        email: 'marin.morar@hey.com',
        address: 'Str. Padurii',
        city: 'Iasi',
        country: 'Romania',
        zip_code: '717171',
        subscription_id: 1,
    },
    users: [
        {
            user_internal_id: 1,
            first_name: 'Marin',
            last_name: 'Morar'
        },
        {
            user_internal_id: 2,
            first_name: 'Andrei',
            last_name: 'Popescu'
        },
        {
            user_internal_id: 3,
            first_name: 'Lucian',
            last_name: 'Lazar'
        }
    ],
    posts: [
        {
            id: 1,
            user_internal_id: 1,
            text: 'Covid19 does not exist',
            timestamp: '2020-08-10 23:35:32',
            image: 'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/5d6043a39271b9000f7601d2-69341c77.jpg',
            comments: [
                {
                    id: 1,
                    user_internal_id: 2,
                    text: 'How are you?How are you?How are you?How are you?How are you?How are y?',
                    timestamp: '2020-08-10 23:35:32'
                },
                {
                    id: 2,
                    user_internal_id: 3,
                    text: 'Wonderful',
                    timestamp: '2020-08-10 23:35:32'
                },
                {
                    id: 3,
                    user_internal_id: 2,
                    text: 'How are you?How are you?How are you?How are you?How are you?How are y?',
                    timestamp: '2020-08-10 23:35:32'
                },
                {
                    id: 4,
                    user_internal_id: 3,
                    text: 'Wonderful',
                    timestamp: '2020-08-10 23:35:32'
                },
                {
                    id: 5,
                    user_internal_id: 2,
                    text: 'How are you?How are you?How are you?How are you?How are you?How are y?',
                    timestamp: '2020-08-10 23:35:32'
                },
                {
                    id: 6,
                    user_internal_id: 3,
                    text: 'Wonderful',
                    timestamp: '2020-08-10 23:35:32'
                },
                {
                    id: 7,
                    user_internal_id: 2,
                    text: 'How are you?How are you?How are you?How are you?How are you?How are y?',
                    timestamp: '2020-08-10 23:35:32'
                },
                {
                    id: 8,
                    user_internal_id: 3,
                    text: 'Wonderful',
                    timestamp: '2020-08-10 23:35:32'
                },
                {
                    id: 9,
                    user_internal_id: 2,
                    text: 'How are you?How are you?How are you?How are you?How are you?How are y?',
                    timestamp: '2020-08-10 23:35:32'
                },
                {
                    id: 10,
                    user_internal_id: 3,
                    text: 'Wonderful',
                    timestamp: '2020-08-10 23:35:32'
                },
                {
                    id: 11,
                    user_internal_id: 2,
                    text: 'How are you?How are you?How are you?How are you?How are you?How are y?',
                    timestamp: '2020-08-10 23:35:32'
                },
                {
                    id: 12,
                    user_internal_id: 3,
                    text: 'Wonderful',
                    timestamp: '2020-08-10 23:35:32'
                }
            ],
            reactions: [
                {
                    user_internal_id: 2,
                    reaction: 'LIKE',
                    timestamp: '2020-08-10 23:35:32'
                },
                {
                    user_internal_id: 3,
                    reaction: 'LIKE',
                    timestamp: '2020-08-10 23:35:32'
                }
            ]
        },
        {
            id: 2,
            user_internal_id: 2,
            text: 'Covid19 does not exist',
            timestamp: '2020-08-10 23:35:32',
            image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg',
            comments: [
                {
                    id: 15,
                    user_internal_id: 1,
                    text: 'How are you?',
                    timestamp: '2020-08-10 23:35:32'
                },
                {
                    id: 16,
                    user_internal_id: 3,
                    text: 'Wonderful',
                    timestamp: '2020-08-10 23:35:32'
                }
            ],
            reactions: [
                {
                    user_internal_id: 1,
                    reaction: 'LIKE',
                    timestamp: '2020-08-10 23:35:32'
                }
            ]
        },
        {
            id: 3,
            user_internal_id: 3,
            text: 'Covid19 does not exist',
            timestamp: '2020-08-10 23:35:32',
            image: 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
            comments: [
                {
                    id: 20,
                    user_internal_id: 2,
                    text: 'How are you?',
                    timestamp: '2020-08-10 23:35:32'
                },
                {
                    id: 21,
                    user_internal_id: 3,
                    text: 'Wonderful',
                    timestamp: '2020-08-10 23:35:32'
                }
            ],
            reactions: [
                {
                    user_internal_id: 2,
                    reaction: 'LIKE',
                    timestamp: '2020-08-10 23:35:32'
                }
            ]
        }
    ],
    questionnaires: [
        {
            id: 1,
            title: "Trump blabla",
            description: "Let's see if you like politics",
            questions: [
                {
                    id: 1,
                    title: 'How much do you like Republicans?',
                    type: 'SCALE',
                    multiple: false,
                    possibleAnswers: [
                        {
                            id: 1,
                            scale_value: 1
                        },
                        {
                            id: 2,
                            scale_value: 2
                        },
                        {
                            id: 3,
                            scale_value: 3
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'Witch was the best president?',
                    type: 'TEXT',
                    multiple: true,
                    possibleAnswers: [
                        {
                            id: 4,
                            text: "Donald Trump"
                        },
                        {
                            id: 5,
                            text: "Barack Obama"
                        },
                        {
                            id: 6,
                            text: "George Bush"
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'Pick an image',
                    type: 'IMAGE',
                    possibleAnswers: [
                        {
                            id: 7,
                            image_url: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg'
                        },
                        {
                            id: 8,
                            image_url: 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Biden blabla",
            description: "Let's see if you like politics",
            questions: [
                {
                    id: 4,
                    title: 'How much do you like Republicans?',
                    type: 'SCALE',
                    multiple: true,
                    possibleAnswers: [
                        {
                            id: 1,
                            scale_value: 1
                        },
                        {
                            id: 2,
                            scale_value: 2
                        },
                        {
                            id: 3,
                            scale_value: 3
                        }
                    ]
                },
                {
                    id: 5,
                    title: 'Witch was the best president?',
                    type: 'TEXT',
                    possibleAnswers: [
                        {
                            id: 4,
                            text: "Donald Trump"
                        },
                        {
                            id: 5,
                            text: "Barack Obama"
                        },
                        {
                            id: 6,
                            text: "George Bush"
                        }
                    ]
                },
                {
                    id: 6,
                    title: 'Pick an image',
                    type: 'IMAGE',
                    possibleAnswers: [
                        {
                            id: 7,
                            image_url: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg'
                        },
                        {
                            id: 8,
                            image_url: 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
                        },
                        {
                            id: 9,
                            image_url: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg'
                        },
                        {
                            id: 10,
                            image_url: 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
                        },
                        {
                            id: 11,
                            image_url: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg'
                        },
                        {
                            id: 12,
                            image_url: 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
                        }
                    ]
                }
            ]
        }
    ]
}

let API = {
    HOST_AND_PORT: 'http://localhost:3001',
    PATHS: {
        POST: {
            GET_ALL_BY_USER: '/posts',
            REACT: (post_id) => `/posts/id/${post_id}/react`,
            UNREACT: (post_id, reaction_id) => `/posts/id/${post_id}/react/${reaction_id}`,
            COMMENT: (post_id) => `/posts/id/${post_id}/comment`,
            UNCOMMENT: (post_id, comment_id) => `/posts/id/${post_id}/comment/${comment_id}`
        },
        USER: {
            GET_CURRENT: '/users/current',
            CHANGE_SUBSCRIPTION: (subscription_id) => `/users/change/subscription/${subscription_id}`
        },
        SUBSCRIPTION: {
            GET_ALL_BY_USER: '/subscriptions'
        },
        QUESTIONNAIRES: {
            GET_ALL_BY_USER: '/questionnaires',
            ANSWER: '/questionnaires/id/:questionnaireId'
        }
    }
}

export default {
    MOCK_DATA, API
};
