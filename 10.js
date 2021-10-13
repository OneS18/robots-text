class Work {
  constructor(message, response) {
    this.message = message;
    this.response = response;
  }
  login = async (message) => {
    const response = await this.response;
    console.log(response);
  };
  scrape_function = async (message) => {
    const response = await this.login();
  };
  fetch = async (message) => {
    const response = await this.scrape_function();
    console.log(response);
  };
  succeed = async (message) => {
    const response = await this.fetch();
    console.log(`${this.message} ${this.response}`);
  };
}

const work = new Work("Succeed", "!");
console.log(work.succeed());
