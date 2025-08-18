const PDFMerger = require('pdf-merger-js').default;


const mergePdfs = async (pdfPaths) => {
  const merger = new PDFMerger();  // Create a new instance each time

  for (const pdf of pdfPaths) {
    await merger.add(pdf);
  }

  let d=new Date().getTime();
  await merger.save(`public/${d}.pdf`); // Save as merged.pdf
  return d;
}

module.exports={mergePdfs};