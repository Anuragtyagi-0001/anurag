import React, { Suspense, lazy } from "react";

const Pic1 = lazy(() => import("./Image"));

const Lazy = () => {
  return (
    <div>
      <h1>Lazy Loading Images</h1>

      <div className="image-box">
        <Suspense fallback={<div className="load">Loading.......</div>}>
          <Pic1 />
        </Suspense>
      </div>
    </div>
  );
};

export default Lazy;
