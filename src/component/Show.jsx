import { useState } from "react";

export default function Show({ children }) {
  const [show, setShow] = useState(false);
  console.log("render");
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "이미지 보기" : "이미지 숨기기"}
      </button>
      {show && children}
    </>
  );
}
