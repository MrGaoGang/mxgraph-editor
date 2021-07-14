import Base64 from "./utils/base-64";
const Graph = function () {};
Graph.createSvgImage = function (w, h, data, coordWidth, coordHeight) {
  const tmp = unescape(
    encodeURIComponent(
      `${
        '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'
      }${w}px" height="${h}px" ${
        coordWidth != null && coordHeight != null
          ? `viewBox="0 0 ${coordWidth} ${coordHeight}" `
          : ""
      }version="1.1">${data}</svg>`
    )
  );

  return new mxImage(
    `data:image/svg+xml;base64,${Base64.encode(tmp, true)}`,
    w,
    h
  );
};

export default Graph;
