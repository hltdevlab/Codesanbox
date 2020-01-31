const fetchUrl = require("fetch-promise");
var HTMLParser = require("node-html-parser");

export default () => {
  fetchUrl("https://www.moh.gov.sg/2019-ncov-wuhan/past-updates")
    .then(
      result => {
        const { res, buf } = result;
        //console.log(buf.toString());
        return buf.toString();
      },
      err => console.error(err)
    )
    .then(html => {
      let root = HTMLParser.parse(html);
      let anchorArr = root.querySelectorAll("a");
      console.log(anchorArr.length);
      return anchorArr;
    })
    .then(anchorArr => {
      anchorArr = anchorArr.filter(anchor => anchor.text.includes("Confirm"));
      console.log(anchorArr.length);

      anchorArr.map(anchor => {
        console.log(anchor.attributes.href);
      });
    });
};
