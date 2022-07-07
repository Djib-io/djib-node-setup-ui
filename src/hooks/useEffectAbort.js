import { useEffect } from "react";

function useEffectAbort(effect, deps) {
  useEffect(() => {
    const controller = new AbortController();
    effect(controller.signal);
    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default useEffectAbort;
