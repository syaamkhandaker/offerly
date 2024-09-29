import { NextRequest } from "next/server";
import { NextResponse as Response } from "next/server";
import { GoogleApis } from "googleapis";
import { authenticate } from "@google-cloud/local-auth";

export async function GET(request: NextRequest) {
  return new Response("hello");
}

async function authorize() {
  //   let client = await loadSavedCredentialsIfExist();
  //   if (client) {
  //     return client;
  //   }
  // const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
  //   const client = await authenticate({
  //     scopes: SCOPES,
  //     keyfilePath: CREDENTIALS_PATH,
  //   });
  //   if (client.credentials) {
  //     await saveCredentials(client);
  //   }
  //   return client;
}
