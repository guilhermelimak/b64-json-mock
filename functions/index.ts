import { Handler } from "@netlify/functions";

const handler: Handler = (event, context) => {
  const body = event.queryStringParameters?.body;

  if (!body) {
    return {
      statusCode: 500,
    };
  }

  try {
    const decoded = JSON.parse(Buffer.from(body, "base64").toString("ascii"));
    return {
      statusCode: 200,
      body: decoded,
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
    };
  }
};

export { handler };
