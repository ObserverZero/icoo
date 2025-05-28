import * as sdk from "matrix-js-sdk";

const client = sdk.createClient({ baseUrl: "https://matrix.org" });

async function login(username: string, password: string) {
    try {
        const response = await client.login("m.login.password", {
            user: username,
            password: password
        });
        console.log("Login successful!");
        console.log("Access token:", response.access_token);
        // Store the access token for future requests
        client.credentials = {
            userId: response.user_id,
            accessToken: response.access_token
        };
        return response;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
}

export { client, login }; 