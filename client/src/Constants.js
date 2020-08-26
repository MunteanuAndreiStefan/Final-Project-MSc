let MOCK_DATA = {
    users: [
        {
            user_internal_id: 1,
            first_name: 'Marin',
            last_name: 'Morar'
        }
    ],
    posts: [
        {
            id: 1,
            text: 'Covid19 does not exist',
            timestamp: '2020-08-10 23:35:32',
            comments: [
                {
                    user_internal_id: 1,
                    text: 'How are you?',
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
            id: 1,
            text: 'Covid19 does not exist',
            timestamp: '2020-08-10 23:35:32',
            comments: [
                {
                    user_internal_id: 1,
                    text: 'How are you?',
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
