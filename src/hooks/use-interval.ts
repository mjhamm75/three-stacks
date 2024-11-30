import { useEffect, useRef } from "react";

export function useInterval(callback: () => void, delay: number | null): void {
  const savedCallback = useRef<() => void>(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (delay !== null) {
      intervalId = setInterval(() => savedCallback.current(), delay);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [delay]);
}
