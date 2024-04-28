import { vi } from "vitest";

import { generateToken } from "node-2fa";
import { templateTags } from "../src/main";

describe("MFA Code Generator", () => {
  beforeEach(() => {});

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("generates an MFA code given a valid secret", async () => {
    const mfaSecret = "VALID_SECRET";
    const mfa = templateTags.find((item) => item.name === "MFA")!;

    const token = await mfa.run({}, mfaSecret);

    expect(token).toBe(generateToken(mfaSecret)?.token);
  });

  it("returns undefined when the secret is empty", async () => {
    const emptySecret = "";
    const mfa = templateTags.find((item) => item.name === "MFA")!;

    const token = await mfa.run({}, emptySecret);

    expect(token).toBe(undefined);
  });
});
