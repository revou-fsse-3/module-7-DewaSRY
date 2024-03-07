import { describe, vi, beforeEach, afterEach, expect, it } from "vitest";
import delAnimal from "@http/animal/delAnimal";

const mocks = vi.hoisted(() => {
  return {
    fetchMock: vi.fn(),
    getCookie: vi.fn(),
  };
});

vi.mock("@utils/cookie", () => {
  return {
    getCookies: mocks.getCookie,
  };
});

describe("testing delete animal  ", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", mocks.fetchMock);
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("del animal testing", async () => {
    mocks.fetchMock.mockResolvedValue({
      json: async () => ({ message: "Item deleted." }),
      ok: true,
    });
    const actual = await delAnimal("332f7d12-b048-482f-90e9-1d0ac3ac7548");

    expect(actual).toBeTruthy();
    expect(mocks.getCookie).toBeCalled();
  });
});
