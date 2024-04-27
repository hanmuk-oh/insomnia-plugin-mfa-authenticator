const twofactor = require("node-2fa");

export const templateTags: TemplateTag[] = [
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
    async run(_context: unknown, mfaSecret: string): Promise<string> {
      return twofactor.generateToken(mfaSecret)?.token;
    },
  },
];
