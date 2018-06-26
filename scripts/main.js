let url = "https://www.4628.jp/?module=top&rd=1";
const request = new XMLHttpRequest();
request.open("GET", url);
request.addEventListener("load", (event) => {
    console.log(event.target.status); // => 200
    console.log(event.target.responseText); // => "{...}"
});
console.log("勤之助にアクセスします");
request.send();
