import { describe, vi, beforeEach, afterEach, expect, it } from "vitest";
import updateAnimal from "@/features/http/animal/animal-update";
import { animalPayload, animalPayloadWithId } from "@/features/entity";

const mockAnimal: animalPayload = {
  name: "cat",
  species: "Amphibians",
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

// const test =

vi.mock("@utils/cookie", () => {
  return {
    getCookies: mocks.getCookie,
    // getCookies: mocks.getCookie.mockReturnValue(
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwOTcwMDM4NiwianRpIjoiZWQ2MDk0YzYtOGE2NS00ZDYyLWE4NDYtNTA1ZmVhNzIwYjA0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjY3NGUyNDNjLTJhMDktNDI5MC04MWJlLWMxNjhhY2RlMDgxOCIsIm5iZiI6MTcwOTcwMDM4NiwiY3NyZiI6IjQzOGZjYzM0LTU3N2UtNGI0Zi05ZWE3LTNhMTc5YjMzODhkMiIsImV4cCI6MTcxMDMwNTE4Nn0.JrdaJF3-5XZvq2_yypZIsiNEwKsUuMXWz4MQIWIOmtU"
    // ),
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
    const animalAfterUpdate = {
      ...animalResolve,
      age: 10,
    };
    mocks.fetchMock.mockResolvedValue({
      json: async () => animalAfterUpdate,

      ok: true,
    });
    const actual = await updateAnimal({
      payload: {
        age: 10,
      },
      id: animalResolve.animalId,
    });
    expect(actual).toEqual(animalAfterUpdate);
  });
});
