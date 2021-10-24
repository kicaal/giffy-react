import { renderHook, act } from "@testing-library/react-hooks";

import useForm from "./hook";

test("should change keyword", () => {
  const { result } = renderHook(() =>
    useForm({ initialKeyword: "superman", initialRating: "g" })
  );

  act(() => {
    result.current.updateKeyword("batman");
  });

  expect(result.current.keyword).toBe("batman");
});

test("should use initialValues", () => {
  const { result } = renderHook(() =>
    useForm({ initialKeyword: "superman", initialRating: "g" })
  );

  expect(result.current.keyword).toBe("superman");
});

test("should update correctly times when used twice", () => {
  const { result } = renderHook(() =>
    useForm({ initialKeyword: "superman", initialRating: "g" })
  );

  act(() => {
    result.current.updateKeyword("b");
    result.current.updateKeyword("a");
    result.current.updateKeyword("t");
    result.current.updateKeyword("m");
    result.current.updateKeyword("a");
    result.current.updateKeyword("batman");
  });

  expect(result.current.keyword).toBe("batman");
  expect(result.current.times).toBe(6);
});
