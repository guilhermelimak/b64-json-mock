var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// functions/index.ts
__export(exports, {
  handler: () => handler
});
var handler = (event, context) => {
  var _a;
  const body = (_a = event.queryStringParameters) == null ? void 0 : _a.body;
  if (!body) {
    return {
      statusCode: 500
    };
  }
  try {
    const decoded = Buffer.from(body, "base64").toString("ascii");
    return {
      statusCode: 200,
      body: decoded
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=index.js.map
