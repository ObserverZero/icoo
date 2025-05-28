import * as sdk from "matrix-js-sdk";

const client = sdk.createClient({ baseUrl: "http://localhost:8008" });

async function login(username, password) {
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

async function createSpace(name, topic = "", isPublic = true) {
    try {
        // Create the space (which is a special type of room)
        const createResponse = await client.createRoom({
            name: name,
            topic: topic,
            visibility: isPublic ? "public" : "private",
            creation_content: {
                "type": "m.space"  // This makes it a space instead of a regular room
            },
            initial_state: [
                {
                    type: "m.room.history_visibility",
                    content: {
                        history_visibility: isPublic ? "world_readable" : "invited"
                    }
                }
            ],
            power_level_content_override: {
                // Default power levels for the space
                users_default: 0,
                events_default: 50,
                state_default: 100,
                ban: 50,
                kick: 50,
                redact: 50,
                invite: 50,
                // Add specific events that are important for spaces
                events: {
                    "m.space.child": 50,  // Power level required to add rooms to the space
                    "m.room.name": 50,
                    "m.room.topic": 50,
                    "m.room.avatar": 50
                }
            }
        });

        console.log("Space created successfully!");
        console.log("Space ID:", createResponse.room_id);
        return createResponse;
    } catch (error) {
        console.error("Failed to create space:", error);
        throw error;
    }
}

client.publicRooms(function (err, data) {
    console.log("Public Rooms: %s", JSON.stringify(data));
});

// Example usage of login (uncomment to use)
// await login("@username:matrix.org", "your-password");
// Example usage of createSpace (uncomment to use)
// await createSpace("My Space", "A space for my rooms", true);
await client.startClient({ initialSyncLimit: 10 });
