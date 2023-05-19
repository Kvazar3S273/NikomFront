import "./fancy.css";
import Fancybox from "./fancybox.js";
import React from "react";
export default function Apt() {
  return (
    <div className="Apt">
      <h1>Fancybox</h1>

      <Fancybox>
        <p>
          <a data-fancybox="gallery" href="/images/slider/bg1.jpg">
            <img alt="" src="/images/slider/bg1.jpg" style={{ width: "20%" }} />
          </a>

          <a data-fancybox="gallery" href="/images/slider/bg2.jpg">
            <img alt="" src="/images/slider/bg2.jpg" style={{ width: "20%" }} />
          </a>

          <a data-fancybox="gallery" href="/images/slider/bg3.jpg">
            <img alt="" src="/images/slider/bg3.jpg" style={{ width: "20%" }} />
          </a>

          <a data-fancybox="gallery" href="/images/slider/bg4.jpg">
            <img alt="" src="/images/slider/bg4.jpg" style={{ width: "20%" }} />
          </a>
        </p>
      </Fancybox>
    </div>
  );
}
