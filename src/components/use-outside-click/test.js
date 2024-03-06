import { useRef, useState } from "react";
import useOutsideClick from ".";
export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));
  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is Outside hook test component</h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setShowContent(true)}
        >
          show content
        </button>
      )}
    </div>
  );
}
