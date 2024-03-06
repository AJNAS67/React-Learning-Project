import { useEffect } from "react";

export default function useOutsideClick(ref, handler) {
  useEffect(() => {
    function listner(event) {
        console.log(event.target,'event');
        console.log('====================================');
        console.log(ref,'refffffff');
        console.log('====================================');
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    }
    document.addEventListener("mousedown", listner);
    document.addEventListener("touchstart", listner);
    return () => {
      document.removeEventListener("mousedown", listner);
      document.removeEventListener("touchstart", listner);
    };
  }, [handler, ref]);
}
