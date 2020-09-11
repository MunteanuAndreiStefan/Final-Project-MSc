
export function enhanceUser(user) {
    return user === undefined || user === null ? {} : {
        ...user,
        avatar: user.first_name.slice(0, 1) + user.last_name.slice(0, 1),
        full_name: user.first_name + ' ' + user.last_name
    };
}