export default {
    loginPage: (): string => '/login',
    signUpPage: (): string => '/register',
    usersPage: (): string => '/users',
    profilePage: (userId: string): string => `/profile/${userId}`,
};
