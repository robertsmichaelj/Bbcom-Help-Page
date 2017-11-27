/*jslint devel: true, nomen: true, sloppy: true, browser: true, regexp: true*/
/*global $*/

var i, helpData, secondIndex, mainSection, firstHeader, secondHeader, thirdHeader, forthHeader, origClick, breadcrumb, value, sectionName,
	sideTopicsAppendTo = document.getElementById("helpSideBar").getElementsByTagName("UL")[0],
	mainCellsAppendTo = document.getElementById("helpSectionBoxes"),
	quickLinksAppendTo = document.getElementById("helpQuickLinks"),
	topicHeader = document.getElementById('helpContent').getElementsByTagName("h1")[0],
	helpBoxes = $('#helpSectionBoxes'),
	helpBoxes1 = document.getElementById('helpSectionBoxes'),
	searchBar = document.getElementById('helpSearchBar'),
	helpMain = document.getElementById('helpMain'),
	breadCrumbInner = $('.breadCrumbInner'),
	transitionSpeed = 300;

//ADDS CUSTOMERS NAME TO THE HEADER OF THE PAGE IF THEY ARE LOGGED IN AND HAVE A NAME SET
document.addEventListener("DOMContentLoaded", function () {
	if (localStorage.getItem("currentUser") !== null) {
		var name = JSON.parse(localStorage.currentUser).user.realName,
			firstName = name.trim().split(" ")[0];
		if (firstName.length > 0) {
			document.getElementById('pageHeader').textContent = "Hello, " + firstName + ". How can we help you?";
		} else {
			return;
		}
	}
});
//CHANGES PAGE TITLE IN HOPES SEARCH ENGINES WILL PICK UP ON IT
function changePageAttributes(text) {
	var titleText = text;
	document.title = "Bodybuilding.com Help - " + titleText;
}

function mainHeaderFade(text) {
	topicHeader.classList.add('helpFade');
	setTimeout(function () {
		topicHeader.innerHTML = text;
		topicHeader.classList.remove('helpFade');
	}, transitionSpeed);
}

function removeChildren(element) {
	while (element.hasChildNodes()) {
		element.removeChild(element.lastChild);
	}
}

function helpFadeOut(element) {
	element.classList.add('helpFade');
}

function helpFadeIn(element) {
	element.classList.remove('helpFade');
}

function breadCrumbs(first, second, third, forth) {
	var breadLink,
		breadCrumbInner1 = document.querySelector('.breadCrumbInner');
	helpFadeOut(breadCrumbInner1);
	setTimeout(function () {
		removeChildren(breadCrumbInner1);
		if (second) {
			breadLink = document.createElement('a');
			breadLink.classList.add("helpBreadLink", "helpBreadLink2");
			breadLink.id = 'helpBreadLink2';
			breadLink.textContent = second;
			breadCrumbInner.append(breadLink);
		}
		if (third) {
			breadLink = document.createElement('a');
			breadLink.classList.add("helpBreadLink", "helpBreadLink3");
			breadLink.id = 'helpBreadLink3';
			breadLink.textContent = third;
			breadCrumbInner.append(breadLink);
		}
		if (forth) {
			breadLink = document.createElement('a');
			breadLink.classList.add("helpBreadLink", "helpBreadLink4");
			breadLink.id = 'helpBreadLink4';
			breadLink.textContent = forth;
			breadCrumbInner.append(breadLink);
		}
		helpFadeIn(breadCrumbInner1);
	}, transitionSpeed);
}

function createCells(text, appendTo, main, second, third, imgSrc) {
	var cell = document.createElement('a'),
		wrapSection = document.createElement('div'),
		cellImg = document.createElement('img'),
		listItem = document.createElement('li'),
		anchor = document.createElement('a'),
		imgSource = imgSrc;
	if (appendTo === mainCellsAppendTo) {
		if (main === true && second === false && third === false) {
			cell.classList.add('helpSectionBox', 'helpSectionNormalBox');
		} else if (main === true && second === true && third === false) {
			cell.classList.add('helpSectionBox', 'helpSectionNormalBox', 'helpSectionBoxSecond');
		} else if (main === true && second === true && third === true) {
			cell.classList.add('helpSectionBox', 'helpSectionNormalBox', 'helpSectionBoxThird');
		}
		wrapSection.className = 'helpSectionBoxWrap';
		wrapSection.innerHTML = text;
		if (imgSrc) {
			cellImg.setAttribute('src', imgSource);
			wrapSection.prepend(cellImg);
		}
		cell.append(wrapSection);
		appendTo.append(cell);
	} else if (appendTo === sideTopicsAppendTo) {
		listItem.append(anchor);
		anchor.innerHTML = text;
		appendTo.append(listItem);
	} else if (appendTo === quickLinksAppendTo) {
		cell.append(anchor);
		anchor.innerHTML = text;
		appendTo.append(anchor);
	}
}

function createAnswers(text) {
	var helpDiv = document.createElement('div');
	helpDiv.className = "helpAnswerBox";
	try {
		if (text[0].block.length >= 1) {
			helpDiv.innerHTML = text[0].block;
			helpBoxes1.append(helpDiv);
		} else if (text[0].block === undefined) {
			helpDiv.innerHTML = text;
			helpBoxes1.append(helpDiv);
		}
	} catch (e) {
		helpDiv.innerHTML = text;
		helpBoxes1.append(helpDiv);
	}
	
}

function createSearchAnswers(answer, breadcrumb) {
	//CLICK ON SEARCH GENERATED CELLS
	$(document).on('click', '.helpSectionSearchBox', function (e) {
		e.preventDefault();
		var answerData = answer,
			index = Array.prototype.slice.call(e.currentTarget.parentElement.children).indexOf(e.currentTarget),
			thirdBreadCrumb1 = e.currentTarget.textContent,
			textData = answerData[index].answer,
			sectionText = answerData[index].section;
		breadCrumbs(firstHeader, breadcrumb, thirdBreadCrumb1);
		mainHeaderFade(sectionText);
		helpFadeOut(helpBoxes1);
		setTimeout(function () {
			removeChildren(helpBoxes1);
			createAnswers(textData);
			helpBoxes1.classList.remove('helpFade');
		}, transitionSpeed);
	});
}

function createSearchCells(answer) {
	helpFadeOut(helpBoxes1);
	setTimeout(function () {
		removeChildren(helpBoxes1);
		for (i = 0; i < answer.length; i += 1) {
			var wrapSection = document.createElement('div'),
				cell = document.createElement('a');
			wrapSection.className = 'helpSectionBoxWrap';
			wrapSection.innerHTML = answer[i].section;
			cell.classList.add('helpSectionBox', 'helpSectionSearchBox');
			cell.append(wrapSection);
			mainCellsAppendTo.append(cell);
		}
		helpBoxes1.classList.remove('helpFade');
	}, transitionSpeed);
}

//SEARCH FUNCTIONS
function initSearch(data) {
	var searchData = data;
	mainSection = JSON.search(searchData, '*//*[section]');
	breadcrumb = JSON.search(searchData, '//mainSection[section]');
}

function quickSearch(term) {
	$.each(mainSection, function (index, value) {
		if (typeof value.answer !== "undefined") {
			var sectionAnswer = value.answer,
				link2 = term.replace('?', '').replace("'", "").replace("-", "").trim().toLowerCase();
			sectionName = value.section.replace('?', '').replace("'", "").replace("-", "").trim().toLowerCase();
			
			if (sectionName.indexOf(link2) >= 0 && sectionAnswer.length >= 0) {
				createAnswers(sectionAnswer[0].block);
			}
		}
	});
}

function searching(term) {
	var searchArray = [],
		searchTerm,
		stripSearch;
	if (searchBar.value) {
		searchTerm = searchBar.value.toLowerCase();
		for (i = 0; i < mainSection.length; i += 1) {
			value = mainSection[i];
			var sectionAnswer = value.answer[0].block;
			sectionName = value.section.replace('?', '').replace("'", "").replace("-", "").trim().toLowerCase();
			if (typeof value.answer !== "undefined") {
				if (sectionAnswer.toLowerCase().indexOf(searchTerm) >= 0 && searchTerm.length > 0) {
					searchArray.push(value);
				}
				if (sectionName.indexOf(searchTerm) >= 0 && searchTerm.length > 0) {
					searchArray.push(value);
				}
			}
		}
		stripSearch = searchArray.filter(function (elem, index, self) {
			return index === self.indexOf(elem);
		});
		createSearchCells(stripSearch);
		createSearchAnswers(stripSearch);
	} else if (term !== undefined) {
		searchTerm = term;
		for (i = 0; i < breadcrumb.length; i += 1) {
			value = breadcrumb[i];
			sectionName = value.section.toLowerCase();
			var cells = value.secondSection,
				secondHeader = document.querySelector('.helpBreadLink2').innerHTML;
			if (sectionName.indexOf(searchTerm) >= 0) {
				createSearchCells(cells);
				createSearchAnswers(cells, secondHeader);
				mainHeaderFade(value.section);
				breadCrumbs(firstHeader, secondHeader);
			}
		}
	}
}

function initLoad(data) {
	var text, indexBox, imgSrc,
		helpData = data;
	firstHeader = helpData.mainSectionHeader;
	//CREATE SIDE BAR LINKS
	document.getElementById('helpSideBarHeader').textContent = helpData.popularTopicsHeader;
	for (i = 0; i < helpData.popularTopics.length; i += 1) {
		text = helpData.popularTopics[i].section;
		createCells(text, sideTopicsAppendTo);
	}
	//CREATE MAIN SECTIONS
	document.getElementById('helpH1').textContent = firstHeader;
	for (i = 0; i < helpData.mainSection.length; i += 1) {
		text = helpData.mainSection[i].section;
		imgSrc = helpData.mainSection[i].sectionImg;
		createCells(text, mainCellsAppendTo, true, false, false, imgSrc);
	}
	//CREATE QUICK LINKS
	document.getElementById('helpQuickLinksHeader').textContent = helpData.selfHelpLinksHeader;
	for (i = 0; i < helpData.selfHelpLinkTopics.length; i += 1) {
		text = helpData.selfHelpLinkTopics[i].section;
		createCells(text, quickLinksAppendTo);
	}
	//SET CLICK ZONES
	$(document).on('click', '.helpSectionNormalBox', function (e) {
		e.preventDefault();
		indexBox = Array.prototype.slice.call(e.currentTarget.parentElement.children).indexOf(e.currentTarget);
		if (e.currentTarget.classList.contains('helpSectionBoxSecond')) {
			//SECOND LEVEL CELL CLICK
			text = helpData.mainSection[origClick].secondSection[indexBox].answer;
			secondHeader = helpData.mainSection[origClick].section;
			thirdHeader = helpData.mainSection[origClick].secondSection[indexBox].section;
			breadCrumbs(firstHeader, secondHeader, thirdHeader);
			mainHeaderFade(thirdHeader);
			helpFadeOut(helpBoxes1);
			removeChildren(helpBoxes1);
			createAnswers(text);
			changePageAttributes(thirdHeader);
			helpFadeIn(helpBoxes1);
		} else {
			//FIRST CLICK ON MAIN CELLS
			origClick = indexBox;
			secondHeader = helpData.mainSection[indexBox].section;
			breadCrumbs(firstHeader, secondHeader);
			mainHeaderFade(secondHeader);
			helpFadeOut(helpBoxes1);
			removeChildren(helpBoxes1);
			for (i = 0; i < helpData.mainSection[indexBox].secondSection.length; i += 1) {
				text = helpData.mainSection[indexBox].secondSection[i].section;
				imgSrc = helpData.mainSection[indexBox].secondSection[i].sectionImg;
				createCells(text, mainCellsAppendTo, true, true, false, imgSrc);
				changePageAttributes(secondHeader);
			}
			helpFadeIn(helpBoxes1);
		}
	});

	$(document).on('click', '.helpBreadLink', function () {
		var breadText = $(this).text().toLowerCase();
		searching(breadText);
	});
	var quickLinks = $('#helpQuickLinks a'),
		popTopics = $('#helpSideBar ul li');
	quickLinks.on('click', function () {
		indexBox = $(this).index();
		var header1 = helpData.selfHelpLinksHeader,
			header2 = helpData.selfHelpLinkTopics[indexBox].section,
			alternate = helpData.selfHelpLinkTopics[indexBox].alternate;
		breadCrumbs(header1, header2);
		mainHeaderFade(header2);
		helpBoxes.fadeOut(transitionSpeed, function () {
			helpBoxes.children().remove();
			quickSearch(alternate);
			helpBoxes.fadeIn(transitionSpeed);
		});
	});
	popTopics.on('click', function () {
		indexBox = $(this).index();
		var header1 = helpData.popularTopicsHeader,
			header2 = helpData.popularTopics[indexBox].section,
			alternate = helpData.popularTopics[indexBox].alternate;
		breadCrumbs(header1, header2);
		mainHeaderFade(header2);
		helpBoxes.fadeOut(transitionSpeed, function () {
			helpBoxes.children().remove();
			quickSearch(alternate);
			helpBoxes.fadeIn(transitionSpeed);
		});
	});
}

function reset(data) {
	//FADE ALL ELEMENTS WITH CHANGES AND REMOVE CHILDREN THEN LOAD PAGE AS NEW AGAIN
	helpMain.classList.add('helpFade');
	setTimeout(function () {
		$('#helpSectionBoxes, #helpSideBar ul, #helpQuickLinks, #helpBreadCrumbs .breadCrumbInner').children().remove();
		initLoad(data);
		helpMain.classList.remove('helpFade');
	}, transitionSpeed);
	//CHANGE PAGE TITLE WHEN RESETING BACK TO DEFAULT
	var resetTitle = "Bodybuilding.com Help Center";
	changePageAttributes(resetTitle);
	//ERASE ANYTHING IN THE SEARCH BAR WHEN RESETTING
	searchBar.value = "";
}


function setResetClicksEvents(data) {
	var resetElements = document.querySelectorAll(".resetLinking"),
		typingTimer;
	helpData = data;
	//SEARCH BAR TYPING
	//ON ANY KEY UP SET TIMER TO SEE IF USER IS DONE TYPING AND THEN SEARCH FOR WHAT IS IN THE SEARCH BOX
	searchBar.addEventListener('keyup', function () {
		clearTimeout(typingTimer);
		//IF SEARCH FIELD IS EMPTY AFTER TYPING THEN RESET HELP PAGE
		if (searchBar.value.length === 0) {
			reset(helpData);
			return;
		}
		//IF SEARCH FIELD HAS MORE THAN 4 CHARACTERS RUN SEARCH - PREVENTS TOO MANY ENTRIES FROM SHOWING
		if (searchBar.value.length >= 4) {
			typingTimer = setTimeout(searching, 400);
		}
	});
	//ON ANY KEY DOWN RESET TIMER ABOVE
	searchBar.addEventListener('keydown', function () {
		clearTimeout(typingTimer);
	});
	//ADD CLICK EVENTS TO RESET TO ALL WITH RESETLINKING CLASS
	for (i = 0; i < resetElements.length; i += 1) {
		resetElements[i].addEventListener("click", function () {
			reset(helpData);
		});
	}
}

//GET JSON DATA AND SEND TO APPROPRIATE FUNCTIONS
$.ajax({
	'async': false,
	url: "helpMain.json",
	dataType: "json",
	success: function (data) {
		var jsonData = data;
		initLoad(jsonData);
		setResetClicksEvents(jsonData);
		initSearch(jsonData);
	}
});