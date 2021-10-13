const Nightmare = require("nightmare"),
  nightmare = Nightmare({
    show: true,
  });

//I WASN'T ABLE TO RETURN THE TITLES OF ALL THE SEARCH PAGE RESULTS, SO I WASN'T ABLE TO COMPARE THEM IF THEY ARE THE SAME

//I WAS ABLE THOUGH  TO RETURN ONE TITLE

const search = "W3Schools";
nightmare
  .goto("https://google.com")
  .wait(4000)
  .type('form[action*="/search"] [name=q]', search)
  .click(".gNO89b")
  .wait(1000)
  .evaluate(() => document.querySelector("title").innerText)
  .end()
  .then((result) => {
    console.log("Result:", result);

    let title = result;
    let firstChar = title.split(" ")[0];
    console.log(firstChar);

    const isSameTitle = () => {
      if (title || firstChar === search) {
        console.log("same title !");
      } else {
        console.log("not the same title !");
      }
    };
    isSameTitle();

    return nightmare.end();
  });
