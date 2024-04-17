import { it, describe, expect, vi, beforeEach, afterEach } from "vitest";
import fetchUserRegister from "@/features/http/auth/auth-register";
const mocks = vi.hoisted(() => {
  return {
    fetchLoginMock: vi.fn(),
    fetchMock: vi.fn(),
  };
});

vi.mock("@http/auth/login", () => {
  return {
    default: mocks.fetchLoginMock,
  };
});

describe("testing register user", () => {
  const payload = {
    username: "testing mock",
    password: "passwordMock",
  };
  beforeEach(() => {
    vi.stubGlobal("fetch", mocks.fetchMock);
  });
  afterEach(() => {
    vi.clearAllMocks();
  });
  it("register with same username respond", async () => {
    mocks.fetchMock.mockResolvedValue({
      status: 422,
    });

    try {
      await fetchUserRegister(payload);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
    vi.clearAllMocks();
  });
  it("first register respond", async () => {
    mocks.fetchMock.mockResolvedValue({
      ok: true,
    });
    await fetchUserRegister(payload);
    expect(mocks.fetchLoginMock).toBeCalledWith(payload);
  });
});
