let btnColors = [
  ["#E34F26", "#C3401C"],
  ["#1572B6", "#14619A"],
  ["#EFB92F", "#D4A222"],
  ["#777BB4", "#5C61A5"],
  ["#0175C2", "#066DB1"],
  ["#00599C", "#024A81"],
  ["#00599C", "#034374"],
  ["#009639", "#008030"],
  ["#024C63", "#002A37"],
  ["#E47373", "#C05D5D"],
  ["#21759B", "#1A6587"],
];  

function setBtn_colors() {
  let langs = document.querySelectorAll('.lang');
  langs.forEach((e, idx) => {
    e.style.background = 'linear-gradient('+ btnColors[idx][0] + ',' + btnColors[idx][1] + ')'; 
  });
}

function init() {
  setBtn_colors();
}

init();