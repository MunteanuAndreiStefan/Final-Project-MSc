let MOCK_DATA = {
    current_user_id: 1,
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
                    user_internal_id: 1,
                    reaction: 'LIKE',
                    timestamp: '2020-08-10 23:35:32'
                }
            ]
        }
    ]
}

export default {
    MOCK_DATA
};
