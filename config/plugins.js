const crypto = require("crypto");

module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret:
        env("CUSTOM_JWT_SECRET") || crypto.randomBytes(16).toString("base64"),
    },
  },
});
