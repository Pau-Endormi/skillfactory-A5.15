let outFromData = "";
const startObj = {"text":["Жили-были {var1} да {var2}","Была у них {var3}","Снесла {var3} {var4}, не простое - золотое","- {var1} бил, бил - не разбил","- {var2} била, била - не разбила","{var5} бежала, {var6} задела, {var4} упало и разбилось.","{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speach}"]};

function fetchButton() {
  let objToArray = Object.values(startObj).map(v => Object.values(v));
  let newResult = objToArray[0].join(' ');
  outFromData = newResult;
  $("#result").text(outFromData);
  $("#result").show();
}

function replaceButton() {
  let text1 = $('input')[0].value;
  let text2 = $('input')[1].value;
  let text3 = $('input')[2].value;
  let text4 = $('input')[3].value;
  let text5 = $('input')[4].value;
  let text6 = $('input')[5].value;
  let text7 = $('input')[6].value;

  let replaceText = outFromData.replace(/{var1}/g, text1);
  replaceText = replaceText.replace(/{var2}/g, text2);
  replaceText = replaceText.replace(/{var3}/g, text3);
  replaceText = replaceText.replace(/{var4}/g, text4);
  replaceText = replaceText.replace(/{var5}/g, text5);
  replaceText = replaceText.replace(/{var6}/g, text6);
  replaceText = replaceText.replace(/{speach}/g, text7);

  $("#result").text(replaceText);
  $("#result").show();
}

function init1() {
	$("#button-fetch").click(fetchButton);
}

function init2() {
	$("#button-replace").click(replaceButton);
}

$(document).ready(init1);
$(document).ready(init2);
