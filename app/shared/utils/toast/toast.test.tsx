import * as reactHotToast from "react-hot-toast";
import { toast } from "./toast";

jest.mock("react-hot-toast", () => ({
  __esModule: true,
  ...jest.requireActual("react-hot-toast"),
}));

const hotToastMock = jest.spyOn(reactHotToast, "toast");

describe("Toast Utils", () => {
  afterEach(() => {
    hotToastMock.mockClear();
  });

  test("toast function should call hotToast with correct arguments", () => {
    toast({ title: "Test Title", description: "Test Description" });

    expect(hotToastMock).toHaveBeenCalledTimes(1);
    expect(hotToastMock).toHaveBeenCalledWith(expect.anything(), {
      duration: 3000,
      position: "top-right",
      ariaProps: {
        role: "alert",
        "aria-live": "assertive",
      },
      style: {
        padding: 0,
        margin: 0,
      },
    });
  });
});
