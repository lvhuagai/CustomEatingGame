//background color changing section START
window.setInterval(bodycolor, 45);
var i = 210;
var stLock = 0;
function colorChange(_r, _g, _b) {
	document.body.style.backgroundColor = "rgb(" + _r + ", " + _g + ", " + _b + ")";
}

function bodycolor() {
	if (i <= 256 & stLock == 0) {
		i++;
		colorChange(225, i, 255);
	}
	if (i == 256 & stLock == 0) stLock = 1;
	if (i > 210 & stLock == 1) {
		i--;
		colorChange(225, i, 255);
	}
	if (i == 209 & stLock == 1) stLock = 0;
}
//background color changing section END

//page encoding section START
function conencode(_ele) {
	var fuckit_ele = document.getElementById(_ele);  //fk it ok? im done with this bs
	var fuckit_con = fuckit_ele.value;               //lol
	fuckit_ele.value = Base64.encode(fuckit_con);
}

function pageencode() {
	conencode("websitename");
	conencode("WelcomeText1");
	conencode("Character1");
	conencode("TimeupText1");
	conencode("ScoreComment29");
	conencode("ScoreComment49");
	conencode("ScoreComment99");
	conencode("ScoreComment159");
	conencode("ScoreComment199");
	conencode("ScoreCommentMore");
	conencode("ClickBefore");
	conencode("AfterClicking");
	conencode("GameTime");
	return true;
}
//page encoding section END

//page sections hiding/displaying section START
function textsection() {
	var txtscele = document.getElementById("text-section"); //the text section
	var txtschnd = document.getElementById("text-section-handle"); //the text section's handle
	if (txtscele.style.display == "none") {
		txtscele.style.display = "block";
		txtschnd.innerText = "点我收起文字设置项";
	} else {
		txtscele.style.display = "none";
		txtschnd.innerText = "点我展开文字设置项";
	}
}

function imagesection() {
	var imgscele = document.getElementById("image-section"); //the image section
	var imgschnd = document.getElementById("image-section-handle"); //the image section's handle
	if (imgscele.style.display == "none") {
		imgscele.style.display = "block";
		imgschnd.innerText = "点我收起图片设置项";
	} else {
		imgscele.style.display = "none";
		imgschnd.innerText = "点我展开图片设置项";
	}
}

function miscsection() {
	var miscscele = document.getElementById("misc-section"); //the misc section
	var miscschnd = document.getElementById("misc-section-handle"); //the misc section's handle
	if (miscscele.style.display == "none") {
		miscscele.style.display = "block";
		miscschnd.innerText = "点我收起其他设置项";
	} else {
		miscscele.style.display = "none";
		miscschnd.innerText = "点我展开其他设置项";
	}
}
//page section hiding/displaying section END