import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={320}
    height={50}
    viewBox="0 0 320 50"
    backgroundColor="#c0c0c0"
    foregroundColor="#ecebeb"
  >
    <circle cx="25" cy="25" r="25" />
    <rect x="64" y="0" rx="6" ry="6" width="137" height="25" />
    <rect x="64" y="32" rx="6" ry="6" width="183" height="15" />
  </ContentLoader>
);
export default Skeleton;
