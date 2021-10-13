const Nightmare = require("nightmare"),
  nightmare = Nightmare({
    show: true,
  });

const url = "https://datatables.net/";
nightmare
  .goto("https://google.com")
  .wait(4000)
  .type('form[action*="/search"] [name=q]', "datatables")
  .wait(2000)
  .click('[name="btnK"]')
  .wait(1000)
  .click(
    "#rso > div:nth-child(1) > div > div > div > div > div > div > div.yuRUbf > a > h3"
  )
  .evaluate(() => {
    let array = [];
    const data = document.querySelector("#example").innerText;
    array = data;
    return array;
  })
  .then((result) => {
    console.log(result);
  });
