import { renderHook, waitFor } from '@testing-library/react';
import { useStringWithAsync, useStringWithSync } from './useEffect';

describe('useEffectのテスト', () => {
  describe('useEffectの中でセットされたstateのテスト（非同期処理は使用しない場合）', () => {
    test('result.currentは、useEffectの中でセットされたstateを返す', () => {
      const { result } = renderHook(() => useStringWithSync('default'));

      expect(result.current).toBe('setted in useEffect');
    });
  });

  describe('useEffectの中でセットされたstateのテスト（非同期処理を使用する場合）', () => {
    test('result.currentは、useEffectの中でセットされたstateを返さない', () => {
      const { result } = renderHook(() => useStringWithAsync('default'));

      expect(result.current).toBe('default');
      expect(result.current).not.toBe('setted in useEffect');
    });
    test('waitForの中だと、result.currentはuseEffectの中でsetされたstateになる', () => {
      const { result } = renderHook(() => useStringWithAsync('default'));

      expect(result.current).toBe('default');

      waitFor(() => {
        expect(result.current).toBe('setted in useEffect');
      });
    });
  });
});
