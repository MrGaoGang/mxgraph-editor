import mx from "mxgraph";
const mxgraph = mx({
  mxImageBasePath: "/flows/res/images",
});
window.mxUtils = mxgraph.mxUtils;
window.mxCylinder = mxgraph.mxCylinder;
window.mxGraph = mxgraph.mxGraph;

for (const key in mxgraph) {
  if (Object.hasOwnProperty.call(mxgraph, key)) {
    window[key] = mxgraph[key];
  }
}

export { mxgraph };
