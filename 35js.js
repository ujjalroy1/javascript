var input=document.querySelector("input[name=name]");
input.addEventListener("change",changeheader);
function changeheader(ev)
{
     document.write(ev.target.className+"<br>");
     document.write(ev.target.value);
}