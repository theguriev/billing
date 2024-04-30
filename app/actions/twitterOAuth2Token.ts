import objToFormData from "@/app/utils/objToFormData";

type TwitterAccess = {
  token_type: string;
  expires_in: number;
  access_token: string;
  scope: string;
  refresh_token: string;
};

const twitterOAuth2Token = async ({ code }: { code: string }) => {
  const req = await fetch("https://api.twitter.com/2/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: objToFormData({
      code,
      grant_type: "authorization_code",
      client_id: String(process.env.X_CLIENT_ID),
      code_verifier: "challenge",
      redirect_uri: "http://127.0.0.1:3000/x/callback",
    }),
  });
  const resp: TwitterAccess = await req.json();
  return resp;
};

export default twitterOAuth2Token;
