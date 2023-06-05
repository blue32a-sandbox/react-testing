import React, { ReactElement } from 'react';
import { renderHook } from '@testing-library/react';
import { CountContext, useCount } from './useContext';

interface WrapperProps {
  children: ReactElement
}

describe('useContext のテスト', () => {
  describe('Contextを使った useCount フックのテスト', () => {
    test('wrapperを使うとContextの値を指定できる', () => {
      const wrapper = ({children}: WrapperProps) => (
        <CountContext.Provider value={2}>{children}</CountContext.Provider>
      );

      const { result } = renderHook(() => useCount(), { wrapper });

      expect(result.current).toBe(2);
    });
    test('wrapperを使わないとContextの値はデフォルトになる', () => {
      const { result } = renderHook(() => useCount());

      expect(result.current).toBe(0);
    });
  });
});
