import { describe, vi, beforeEach, afterEach, expect, it } from "vitest";
import createAnimal from "@http/animal/newAnimal";
import { animalPayload, animalPayloadWithId } from "@utils/type";

const mockAnimal: animalPayload = {
  name: "cat",
  species: "Mam",
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

describe("testing create new Animal", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", mocks.fetchMock);
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("create new animal ", async () => {
    mocks.fetchMock.mockResolvedValue({
      json: async () => animalResolve,
      ok: true,
    });
    const actual = await createAnimal(mockAnimal);
    expect(actual).toEqual(animalResolve);
  });
});
