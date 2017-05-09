var sh5 = parseInt(getUrlVars()["sh5"]);
var sh4 = parseInt(getUrlVars()["sh4"]);
var sh3 = parseInt(getUrlVars()["sh3"]);
var sh2 = parseInt(getUrlVars()["sh2"]);
var sh1 = parseInt(getUrlVars()["sh1"]);

var costo1 = sh1 * 10;
var costo2 = sh2 * 3;
var costo3 = sh3 * 5;
var costo4 = sh4 * 50;
var costo5 = sh5 * 10;

var tot = costo1 + costo2 + costo3 + costo4 + costo5;

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
        document.getElementById('costo1').innerHTML = costo1 + "€";
    }

if (costo2 == 0)
    {
        document.getElementById('costo2').style.display = "none";
        document.getElementById('d2').style.display = "none";
    }
else
    {
        document.getElementById('costo2').innerHTML = costo2 + "€";
    }

if (costo3 == 0)
    {
        document.getElementById('costo3').style.display = "none";
        document.getElementById('d3').style.display = "none";
    }
else
    {
        document.getElementById('costo3').innerHTML = costo3 + "€";
    }

if (costo4 == 0)
    {
        document.getElementById('costo4').style.display = "none";
        document.getElementById('d4').style.display = "none";
    }
else
    {
        document.getElementById('costo4').innerHTML = costo4 + "€";
    }

if (costo5 == 0)
    {
        document.getElementById('costo5').style.display = "none";
        document.getElementById('d5').style.display = "none";
    }
else
    {
        document.getElementById('costo5').innerHTML = costo5 + "€";
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