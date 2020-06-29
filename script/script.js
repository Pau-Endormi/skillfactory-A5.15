let outFromData = "";

function handleButton() {
  $.getJSON( "https://api.jsonbin.io/b/5e905926172eb643896166e7",
    function (data, textStatus, jqXHR) {
      let obj = data;
      let objToArray = Object.values(obj).map(v => Object.values(v));
      let newResult = objToArray[0].join(' ');
      outFromData = newResult;
      $("#result").text(outFromData);
      $("#result").show();
    })
}

function handleData() {
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
	$("#button-fetch").click(handleButton);
}

function init2() {
	$("#button-replace").click(handleData);
}

$(document).ready(init1);
$(document).ready(init2);
