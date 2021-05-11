export default function ajax() {
  return new Promise((resolve, reject) => {
    let xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(JSON.parse(this.responseText));
      }
    };
    xHttp.open("GET", "https://icanhazdadjoke.com/", true);
    xHttp.setRequestHeader("Accept", "application/json");
    xHttp.send();
  });
}
