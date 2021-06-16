import { Handler } from "@netlify/functions";

const handler: Handler = (event, context) => {
  const body = event.queryStringParameters?.body;
  console.log("Receiving body", body);

  if (!body) {
    console.log("No body, returning 500. Body received: ", body);
    return {
      statusCode: 500,
    };
  }

  try {
    console.log("Decoding buffer");
    const decoded = Buffer.from(body, "base64").toString("ascii");
    console.log("Buffer decoded:", decoded);
    return {
      statusCode: 200,
      body: decoded,
    };
  } catch (err) {
    console.log("Fail to decode buffer");
    console.error(err);
    return {
      statusCode: 500,
    };
  }
};

export { handler };
