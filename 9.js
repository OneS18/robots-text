const cb = (message, color) => {
  console.log(`${message} ${color}`);
};

const fourPara = (a, b, c, cb) => {
  a = "is ok";
  b = "green";
  c = "Error";

  const d = a;
  let e = d;

  if ((b = "green")) {
    e = `${a}  You can access the website`;
  } else if ((b = "red")) {
    c = "Is not ok. You are not allowed to view the website";
  } else {
    c = "Error. Something went wrong";
    b = "red";
  }
  return cb(a, e);
};

fourPara("is ok", "green", "error", cb);
