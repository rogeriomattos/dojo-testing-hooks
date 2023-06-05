import { act, render } from "@testing-library/react";
import { useFormInput } from "./useFormInput";

const setup = (value: string): ReturnType<typeof useFormInput> => {
  const returnValue = {} as ReturnType<typeof useFormInput>;

  const TestComponent = () => {
    Object.assign(returnValue, useFormInput(value));

    return null;
  };

  render(<TestComponent />);

  return returnValue;
};

describe("useFormInput", () => {
  it("should change de value when call the onchange function", () => {
    const data = setup("rogerio");
    expect(data.value).toBe("rogerio");
    act(() => {
      data.onChange({
        target: { value: "João" },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(data.value).toBe("João");
  });
});
