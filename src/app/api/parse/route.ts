import { authenticate } from "@google-cloud/local-auth";
import { NextRequest } from "next/server";
import { google } from "googleapis";
import path from "path";
import process from "process";
const gmail = google.gmail("v1");
// eslint-disable-next-line @typescript-eslint/no-require-imports

export async function POST(request: NextRequest) {
  const { accessToken, email } = await request.json();

  try {
    // const res = await fetch(
    //   `https://gmail.googleapis.com/gmail/v1/users/${email}/messages`,
    //   {
    //     headers: { Authorization: `Bearer ${accessToken}` },
    //   }
    // );
    // console.log(await res.json());
    // const keyfilePath = path.join(
    //   "/Users/syaamboss/Desktop/Coding/offerly/credentials.json"
    // );

    // const SCOPES = ["https://www.googleapis.com/auth/gmail.readonly"];
    // // The file token.json stores the user's access and refresh tokens, and is
    // // created automatically when the authorization flow completes for the first
    // // time.
    // const client = await authenticate({
    //   scopes: SCOPES,
    //   keyfilePath: "/Users/syaamboss/Desktop/Coding/offerly/credentials.json",
    // });
    // console.log(client);
    // console.log(
    //   (await gmail.users.messages.list({ userId: "me", auth: client })).data
    // );
    // const oauth2Client = new google.auth.OAuth2();
    // oauth2Client.setCredentials({
    //   access_token: accessToken,
    // });
    // const response = await gmail.users.messages.list({
    //   userId: "me", // 'me' refers to the authenticated user
    //   auth: oauth2Client, // Pass the OAuth2 client with access token
    // });

    // // Log the message IDs
    // const messages = response.data.messages;
    // console.log(messages);
    const CLIENT_EMAIL =
      "your-service-account-email@your-project.iam.gserviceaccount.com"; // Your service account email
    const PRIVATE_KEY =
      "-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"; // Your private key
    const USER_EMAIL = "user@example.com"; // The email of the user you want to impersonate

    // Create JWT client
    const jwtClient = new google.auth.JWT(
      CLIENT_EMAIL,
      null,
      PRIVATE_KEY,
      ["https://www.googleapis.com/auth/gmail.readonly"], // Adjust the scope as needed
      USER_EMAIL
    );
    await jwtClient.authorize();

    // Create the Gmail API service
    const gmail = google.gmail({ version: "v1", auth: jwtClient });

    const allEmails = [];

    do {
      // List messages

      const response = await gmail.users.messages.list({
        userId: "me", // 'me' refers to the authenticated user
      });
      allEmails.push(...(response.data.messages || [])); // Collect messages
      console.log(allEmails);
    } while (pageToken); // Repeat until there are no more pages
  } catch (e) {
    console.error(e);
  }
  return new Response(accessToken);
}
