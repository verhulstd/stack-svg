const fs = require("fs");
const pd = require("pretty-data").pd;

const stackSvg = function () {
  const inputFile = process.argv[2];
  const outputFile = process.argv[3];

  if (!inputFile || !outputFile) {
    console.error(
      "Please provide the 2 required parameters.\n example command: stack-svg symbol-defs.svg icons.svg"
    );
  } else {
    const svgCode = fs.readFileSync(inputFile, "utf-8");
    const converted = svgCode
      .replace("<defs>", "")
      .replace("</defs>", "")
      .replace(
        `<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">`,
        ""
      )
      .replace("</svg>", "")
      .replace(/<symbol/g, "<svg")
      .replace(/<\/symbol>/g, "</svg>");
    const finalCode = `
    <?xml version="1.0" encoding="UTF-8"?>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
       <style>:root&gt;svg{display:none}:root&gt;svg:target{display:block}</style>
          ${converted}
        </svg>
        `;

    fs.writeFile(outputFile, pd.xml(finalCode), (err) => {
      if (err) throw err;
      console.log("SVG STACK CONVERTED !");
    });
  }
};

exports.stackSvg = stackSvg;
