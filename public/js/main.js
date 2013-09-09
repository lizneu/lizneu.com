var showingContent = false;
var beingSurprising = false;
var currPage = 'about'
var paper, iDot, iStem;

$(document).ready(function() {

	$(".link1").click(function() {letterClicked("projects")});
	$(".link2").click(function() { letterClicked("about"); });
	$(".link3").click(surprise);
	$(".close").click(hideContent);
});

function letterClicked(page) {
	if(showingContent) {
		swapPage(page);
	} else {
		showingContent = true;
		currPage = page;
		showContent();
	}
}

function showContent() {
	$(".content").removeClass("top bottom");
	$("#" + currPage).addClass("top");
	$(".content.top").siblings().addClass("bottom");

	$("#lastname").hide();
	$("#content-wrapper").removeClass("hidden off-screen").addClass("bounceInUp animated");
}

function hideContent() {
	$("#lastname").show();
	$("#content-wrapper").addClass("hidden off-screen");
	showingContent = false;
}

function swapPage(page) {
	if (currPage == page) {
		return;
	}

	var curr = $("#" + currPage);
	var next = $("#" + page);
	curr.removeClass("top").addClass("bottom");
	next.removeClass("bottom").addClass("top");
	currPage = page;
}

function surprise() {
	if (!beingSurprising) {
		beingSurprising = true;
		$("#iChar").addClass("surprise");
		$(".link2, .char2").addClass("hidden");
		paper = Raphael("iChar", 100, 590); 
		iDot = paper.rect(19.5, 138.5, 64, 61).attr("fill", "#222");
		iStem = paper.rect(19.5, 222.5, 64, 254.5).attr("fill", "#222");

		iDot.animate({'transform': 's0.75'}, 600, 'easeOut', function() {
			iDot.animate({'y': 350}, 1000, 'easeOut', function() {
				iDot.animate({'y': -1000, 'transform': 's1.0'}, 900, 'easeOut', function() {
					iDot.animate({'y': 138.5}, 1200, 'bounce', function() {
						beingSurprising = false;
						paper.remove();
						$("#iChar").removeClass("surprise");
						$(".link2, .char2").removeClass("hidden");
					});
				});
			});
		});
	}
}