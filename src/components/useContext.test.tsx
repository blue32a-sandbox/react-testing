import React, { ReactElement } from 'react';
import Count, { CountContext } from './useContext';
import { render, screen } from '@testing-library/react';

interface WrapperProps {
  children: ReactElement
}

describe('useContext のテスト', () => {
  describe('Contextを使った Count コンポーネントのテスト', () => {
    test('wrapperを使うとContextの値を指定できる', () => {
      const wrapper = ({children}: WrapperProps) => (
        <CountContext.Provider value={2}>{children}</CountContext.Provider>
      );

      render(<Count />, { wrapper });

      expect(screen.getByRole('main').innerHTML).toBe('2');
    });
    test('wrapperを使わないとContextの値はデフォルトになる', () => {
      render(<Count />);

      expect(screen.getByRole('main').innerHTML).toBe('0');
    });
  });
});
