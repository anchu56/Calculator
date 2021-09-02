function cleardisplay()
{
document.getElementById("input-output-screen").value=""
}

function buttonclick(x)
{
    document.getElementById("input-output-screen").value+=x

}
function equalclick()
{
    var x=document.getElementById("input-output-screen").value
    var result=eval(x)
    document.getElementById("input-output-screen").value=result
}