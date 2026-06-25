import { useState, useCallback } from "react";

export function useModal<T>() {
  const [data, setData] = useState<T | null>(null);

  const open = useCallback((item: T) => {
    setData(item);
  }, []);

  const close = useCallback(() => {
    setData(null);
  }, []);

  return {
    isOpen: !!data,
    data,
    open,
    close,
  };
}