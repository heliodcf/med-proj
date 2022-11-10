




// to do the signup
signup = async ({username, email, password}) => {
try{
    const {data} = await this.api.post('/auth/signup');
    return data;
} catch (error) {
    throw error.message || error;
}
}