const twofactor = require("node-2fa");

module.exports.templateTags = [
  {
    name: "MFA",
    displayName: "MFA Code",
    description: "Generate MFA Code",
    args: [
      {
        displayName: "MFA Secret",
        description: "MFA Secret",
        type: "string",
        defaultValue: "YOUR_MFA_SECRET",
      },
    ],
    async run(context, mfaSecret) {
      return twofactor.generateToken(mfaSecret).token;
    },
  },
];
