import { describe, vi, beforeEach, afterEach, expect, it } from "vitest";
import getAllAnimal from "@/features/http/animal/animal-get-all";
import { animalPayload, animalPayloadWithId } from "@/features/entity";

const mockAnimal: animalPayload = {
  name: "cat",
  species: "Mammals",
  gender: "Male",
  age: 10,
};

const animalResolve: animalPayloadWithId = {
  ...mockAnimal,
  animalId: "b816b393-4639-4ba7-9c53-3f70606a923e",
};

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

describe("testing get all animal ", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", mocks.fetchMock);
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("call all animal testing", async () => {
    mocks.fetchMock.mockResolvedValue({
      json: async () => [animalResolve],
      ok: true,
    });
    const actual = await getAllAnimal();

    expect(actual.includes(animalResolve)).toBeTruthy();
  });
});
