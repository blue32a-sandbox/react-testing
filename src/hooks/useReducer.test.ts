import { act, renderHook, waitFor } from '@testing-library/react';
import { useForm } from './useReducer';

describe('useReducerのテスト', () => {
  describe('useFormはフォームの値を扱うカスタムフック', () => {
    test('引数の値に初期化される', () => {
      const initValues = { name: 'hoge', age: 23 };

      const { result } = renderHook(() => useForm(initValues));

      expect(result.current.values).toEqual(initValues);
    });
    test('dispatchでnameを更新できる', () => {
      const initValues = { name: 'hoge', age: 23 };
      const { result } = renderHook(() => useForm(initValues));
      const { dispatch } = result.current;

      act(() => dispatch({ type: 'changed_name', newName: 'fuga' }));

      expect(result.current.values).toEqual({ name: 'fuga', age: 23 });
    });
    test('dispatchでageを更新できる', () => {
      const initValues = { name: 'hoge', age: 23 };
      const { result } = renderHook(() => useForm(initValues));
      const { dispatch } = result.current;

      act(() => dispatch({ type: 'changed_age', newAge: 31 }));

      expect(result.current.values).toEqual({ name: 'hoge', age: 31 });
    });
    test('act(...)でラップされていない、というWarning発生するテスト', async () => {
      const initValues = { name: 'hoge', age: 23 };
      const { result } = renderHook(() => useForm(initValues));
      const { dispatch } = result.current;

      // Warning: An update to TestComponent inside a test was not wrapped in act(...).
      dispatch({ type: 'changed_name', newName: 'fuga' });

      await waitFor(() => {
        expect(result.current.values).toEqual({ name: 'fuga', age: 23 });
      });
    });
  });
});
