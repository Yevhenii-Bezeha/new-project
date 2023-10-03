export const AuthService = jest.fn().mockImplementation(() => {
    return {
        setLoggedIn: jest.fn(),
        isLoggedIn: jest.fn().mockReturnValue(false)
    };
});
