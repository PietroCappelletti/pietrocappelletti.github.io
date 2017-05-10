var sh3 = parseInt(getUrlVars()["sh3"]);
var sh2 = parseInt(getUrlVars()["sh2"]);
var sh1 = parseInt(getUrlVars()["sh1"]);

var costo1 = sh1 * 20;
var costo2 = sh2 * 10;
var costo3 = sh3 * 20;

var tot = costo1 + costo2 + costo3;

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

if (costo1 == 0)
    {
        document.getElementById('costo1').style.display = "none";
        document.getElementById('d1').style.display = "none";
    }
else
    {
        document.getElementById('costo1').innerHTML = sh1 + "X " + costo1 + "€";
    }

if (costo2 == 0)
    {
        document.getElementById('costo2').style.display = "none";
        document.getElementById('d2').style.display = "none";
    }
else
    {
        document.getElementById('costo2').innerHTML = sh2 + "X " + costo2 + "€";
    }

if (costo3 == 0)
    {
        document.getElementById('costo3').style.display = "none";
        document.getElementById('d3').style.display = "none";
    }
else
    {
        document.getElementById('costo3').innerHTML = sh3 + "X " + costo3 + "€";
    }
if (tot == 0)
    {
        document.getElementById('costo1').style.display = "block";
        document.getElementById('d1').style.display = "none";
        document.getElementById('costo1').style.width = "auto";
        document.getElementById('costo1').innerHTML = "Nessun oggetto!";
        document.getElementById('tot').innerHTML = tot + "€";
    }
else
    {
        document.getElementById('tot').innerHTML = tot + "€";
    }
    
function windowclose(){
    window.close();
}