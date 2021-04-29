import CONSTANTS from "utils/constants";

/**
 * Generate base URL including OMDB required params
 * @param {string} url
 * @returns {string}
 */
const getBaseURL = (url: string): string => {
  return `${url}?${new URLSearchParams({
    i: CONSTANTS.API_USER_ID,
    apikey: CONSTANTS.API_KEY,
  }).toString()}`;
};

/**
 * Service object exported to use across application
 */
const service = {
  get: async (url: string) => {
    const response = await fetch(getBaseURL(url), {
      method: "GET",
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // application/x-www-form-urlencoded, application/json
      },
    });
    return response.json(); // parses JSON response into native JavaScript objects
  },
  post: async (url: string, data: object) => {
    const response = await fetch(getBaseURL(url), {
      method: "POST",
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // application/x-www-form-urlencoded, application/json
      },
      body: JSON.stringify(data),
    });
    return response.json(); // parses JSON response into native JavaScript objects
  },
};

export default service;
