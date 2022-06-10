window.onload = function() {
let zeme = "23saulessistema";
let dangus = "menulis";


console.log(zeme);
console.log(dangus);
let ilgiusuma = dviejuZodziuIlgis(zeme,dangus);

console.log(ilgiusuma)

}


function sujungtizodziai(a,b) 
{
    return a+b;
}
function dviejuZodziuIlgis(text1,text2){
    let texstuIlgis = text1.length;
    let texstu2Ilgis = text2.length;
    let ilgiusuma = texstuIlgis + texstu2Ilgis;

    return ilgiusuma;
}
