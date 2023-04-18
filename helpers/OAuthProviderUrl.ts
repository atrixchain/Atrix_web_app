export const TWITTER_STATE = "twitter-increaser-state";
const TWITTER_CODE_CHALLENGE = "challenge";
const TWITTER_AUTH_URL = "https://twitter.com/i/oauth2/authorize";
const TWITTER_SCOPE = ["tweet.read", "users.read", "offline.access"].join(" ");
const clinetId = process.env.NEXT_PUBLIC_TWIITER_CLIENT_ID;
export const getTwitterOAuthUrl = (redirectUri: string) =>
  getURLWithQueryParams(TWITTER_AUTH_URL, {
    client_id: clinetId,
    redirect_uri: redirectUri,
    scope: TWITTER_SCOPE,
    state: TWITTER_STATE,
    response_type: "code",
    code_challenge: TWITTER_CODE_CHALLENGE,
    code_challenge_method: "plain",
  });

export const getURLWithQueryParams = (
  baseUrl: string,
  params: Record<string, any>
) => {
  const query = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  console.log(123123, `${baseUrl}?${query}`);

  return `${baseUrl}?${query}`;
};
