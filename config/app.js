module.exports = {
  name: "issues",
  alias: "issues analytics",
  port: process.env.PORT || 3000,
  tokenHeader: "x-token-issues",
  tokenSecret: process.env.TOKEN || "issues",
  tokenLength: 32,
  tokenExpires: 24 * 60 * 60 * 1000, // 24h
};
