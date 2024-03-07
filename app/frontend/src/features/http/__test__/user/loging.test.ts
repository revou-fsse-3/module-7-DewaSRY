import { it, describe, expect, vi, beforeEach, afterEach } from "vitest";
import fetchLogin from "@http/auth/login";
const mocks = vi.hoisted(() => {
  return {
    fetchMock: vi.fn(),
    setCookie: vi.fn(),
  };
});

vi.mock("@utils/cookie", () => {
  return {
    setCookies: mocks.setCookie,
  };
});
describe("testing login user", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", mocks.fetchMock);
  });
  afterEach(() => {
    vi.clearAllMocks();
  });
  const loginPayload = {
    username: "testing mock",
    password: "passwordMock",
  };
  const mockAccessToken = "this is access token";
  it("login user with valid payload", async () => {
    mocks.fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        access_token: mockAccessToken,
      }),
    });

    await fetchLogin(loginPayload);
    expect(mocks.setCookie).toBeCalledWith(mockAccessToken);
  });
});
