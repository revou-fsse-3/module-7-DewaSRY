import { describe, vi, beforeEach, afterEach, expect, it } from "vitest";
import { employeePayload, employeePayloadWithId } from "@utils/type";
import getAllEmployees from "@http/employee/allEmployees";

const mockEmployee: employeePayload = {
  role: "Manager",
  schedule: "Morning",
  name: "Surya",
  email: "sdewaSurya@gmail.com",
  phone: "this is a phone",
};

const employeeResolve: employeePayloadWithId = {
  ...mockEmployee,
  employeeId: "b816b393-4639-4ba7-9c53-3f70606a923e",
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

describe("testing get all employee ", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", mocks.fetchMock);
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("call all employee testing", async () => {
    mocks.fetchMock.mockResolvedValue({
      json: async () => [employeeResolve],
      ok: true,
    });
    const actual = await getAllEmployees();

    expect(actual.includes(employeeResolve)).toBeTruthy();
  });
});
