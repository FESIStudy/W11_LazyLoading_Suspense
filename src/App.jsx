import { Suspense } from "react";
import FstImage from "./component/FstImage";
import { lazy } from "react";
import Show from "./component/Show";

const SecImage = lazy(() => import("./component/SecImage"));

function App() {
  return (
    <>
      <div className="container">
        <div className="items">
          <p>normal</p>
          <Show>
            <FstImage />
          </Show>
        </div>
        <div className="items">
          <p>lazy</p>
          <Show>
            <Suspense fallback={<p className="fallback">이미지 로딩 중</p>}>
              <SecImage />
            </Suspense>
          </Show>
        </div>
      </div>
    </>
  );
}

export default App;
