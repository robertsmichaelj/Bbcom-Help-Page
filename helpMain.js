/*jslint devel: true, nomen: true, sloppy: true, browser: true, regexp: true*/
/*global $*/

//BASIC GLOBAL VARIABLES
var i, jsonData, secondIndex, mainSection, firstHeader, secondHeader, thirdHeader, forthHeader, origClick, mainSections, value, secondSections, sectionName, sectionAnswer, jsonData, answers,
	sideTopicsContainer = document.getElementById("helpSideBar").getElementsByTagName("UL")[0],
	mainCellsAppendTo = document.getElementById("helpSectionBoxes"),
	quickLinksContainer = document.getElementById("helpQuickLinks"),
	breadCrumbsContainer = document.getElementById('helpBreadCrumbs'),
	breadCrumbInner = document.getElementById('breadCrumbInner'),
	helpBoxes = document.getElementById('helpSectionBoxes'),
	searchBar = document.getElementById('helpSearchBar'),
	resetElements = document.querySelectorAll(".resetLinking"),
	typingTimer,
	transitionSpeed = 300,
	classFade = 'helpFade';
//GET JSON DATA AND SEND TO APPROPRIATE FUNCTIONS
$.ajax({
	'async': false,
	url: "helpMain.json",
	dataType: "json",
	success: function (data) {
		jsonData = data;
	}
});
//ALL SECTIONS TOP AND BOTTOM
mainSection = JSON.search(jsonData, '*//*[section]');
//TOP LEVEL SECTIONS
mainSections = JSON.search(jsonData, '//mainSection[section]');
//BOTTOM LEVEL SECTIONS AND ANSWERS
answers = JSON.search(jsonData, '//secondSection[section]');
//SECONDARY SECTIONS
secondSections = JSON.search(jsonData, '//secondSection[secondarySection]');
//CHANGES PAGE TITLE IN HOPES SEARCH ENGINES WILL PICK UP ON IT
function changePageAttributes(text) {
	var titleText = text;
	document.title = "Bodybuilding.com Help - " + titleText;
}
//REMOVES CHILDREN OF AN ELEMENT
function removeChildren(element) {
	while (element.hasChildNodes()) {
		element.removeChild(element.lastChild);
	}
}
//FADES OUT ELEMENT WITH CSS
function helpFadeOut(element) {
	element.classList.add(classFade);
}
//FADE IN ELEMENT WITH CSS
function helpFadeIn(element) {
	element.classList.remove(classFade);
}

//BREADCRUMBS SECTION
function breadLinked() {
	var bread = document.querySelectorAll('.helpBreadLink');
	for (i = 0; i < bread.length; i += 1) {
		bread[i].addEventListener("click", function () {
			searching(this.textContent, 1);
		});
	}
}
function breadCrumbs(first, second, third, forth) {
	var breadLink;
	helpFadeOut(breadCrumbInner);
	setTimeout(function () {
		removeChildren(breadCrumbInner);
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
		helpFadeIn(breadCrumbInner);
		breadLinked();
	}, transitionSpeed);
}

//CREATES FADE FOR THE MAIN HEADER 
function mainHeaderFade(text) {
	var topicHeader = document.getElementById('helpContent').getElementsByTagName("h1")[0];
	helpFadeOut(topicHeader);
	setTimeout(function () {
		topicHeader.innerHTML = text;
		helpFadeIn(topicHeader);
	}, transitionSpeed);
}

//CREATES CLICKABLE CELLS
function createCells(text, appendTo, main, second, imgSrc) {
	var cell = document.createElement('a'),
		wrapSection = document.createElement('div'),
		cellImg = document.createElement('img'),
		listItem = document.createElement('li'),
		anchor = document.createElement('a'),
		imgSource = imgSrc;
	if (appendTo === mainCellsAppendTo) {
		if (main === true && second === false) {
			cell.classList.add('helpSectionBox', 'helpSectionNormalBox');
		} else if (main === true && second === true) {
			cell.classList.add('helpSectionBox', 'helpSectionNormalBox', 'helpSectionBoxSecond');
		}
		wrapSection.className = 'helpSectionBoxWrap';
		wrapSection.innerHTML = text;
		if (imgSrc) {
			cellImg.setAttribute('src', imgSource);
			wrapSection.prepend(cellImg);
		}
		cell.append(wrapSection);
		appendTo.append(cell);
	} else if (appendTo === sideTopicsContainer) {
		listItem.append(anchor);
		anchor.innerHTML = text;
		appendTo.append(listItem);
	} else if (appendTo === quickLinksContainer) {
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
			helpBoxes.append(helpDiv);
		} else if (text[0].block === undefined) {
			helpDiv.innerHTML = text;
			helpBoxes.append(helpDiv);
		}
	} catch (e) {
		helpDiv.innerHTML = text;
		helpBoxes.append(helpDiv);
	}
}

function setSearchClicks(answer, breadcrumb) {
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
		helpFadeOut(helpBoxes);
		setTimeout(function () {
			removeChildren(helpBoxes);
			createAnswers(textData);
			helpFadeIn(helpBoxes);
		}, transitionSpeed);
	});
}
function createSearchCells(data, secondary) {
	helpFadeOut(helpBoxes);
	setTimeout(function () {
		if (secondary !== true) {
			removeChildren(helpBoxes);
		}
		for (i = 0; i < data.length; i += 1) {
			var wrapSection = document.createElement('div'),
				cell = document.createElement('a');
			wrapSection.className = 'helpSectionBoxWrap';
			wrapSection.innerHTML = data[i].section;
			cell.classList.add('helpSectionBox', 'helpSectionNormalBox');
			cell.append(wrapSection);
			mainCellsAppendTo.append(cell);
		}
		helpFadeIn(helpBoxes);
	}, transitionSpeed);
}
function secondarySearch(term) {
	var secondArray = [],
		secTerm = term.toLowerCase();
	for (i = 0; i < secondSections.length; i += 1) {
		var value1 = secondSections[i];
		sectionName = value1.secondarySection.toLowerCase();
		if (sectionName.indexOf(secTerm) >= 0) {
			createCells(value1.section, mainCellsAppendTo, true, true);
		}
	}
}
function linkSearch(term) {
	$.each(mainSection, function (index, value) {
		if (typeof value.answer !== "undefined") {
			var words = term.replace('?', '').replace("'", "").replace("-", "").trim().toLowerCase();
			sectionAnswer = value.answer;
			sectionName = value.section.replace('?', '').replace("'", "").replace("-", "").trim().toLowerCase();
			if (sectionName.indexOf(words) >= 0 && sectionAnswer.length >= 0) {
				createAnswers(sectionAnswer[0].block);
			}
		}
	});
}
function searching(term, type) {
	var searchArray = [],
		searchTerm,
		stripSearch;
	if (searchBar.value) {
		//SEARCH IN THE SEARCH BAR
		searchTerm = searchBar.value.toLowerCase();
		for (i = 0; i < answers.length; i += 1) {
			value = answers[i];
			if (typeof value.answer !== "undefined") {
				sectionAnswer = value.answer[0].block;
				sectionName = value.section.replace('?', '').replace("'", "").replace("-", "").trim().toLowerCase();
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
		setSearchClicks(stripSearch);
	} else if (term !== undefined) {
		//SEARCHING FOR AN ACTUAL TERM - CLICKED ON TERM
		if (type === 1) {
			for (i = 0; i < mainSections.length; i += 1) {
				value = mainSections[i];
				sectionName = value.section.toLowerCase();
				var cells = value.secondSection,
					secondHeader = document.querySelector('.helpBreadLink2').innerHTML;
				if (sectionName.indexOf(searchTerm) >= 0) {
					createSearchCells(cells);
					setSearchClicks(cells, secondHeader);
					mainHeaderFade(value.section);
					breadCrumbs(firstHeader, secondHeader);
				}
			}
		} else if (type === 2) {
			console.log("2");
			searchTerm = term.toLowerCase();
			for (i = 0; i < answers.length; i += 1) {
				value = answers[i];
				sectionName = value.section.toLowerCase();
				var answer = value.answer,
					secondHeader = document.querySelector('.helpBreadLink2').innerHTML;
				if (sectionName.indexOf(searchTerm) >= 0) {
					var section = value.section,
						block = value.answer[0].block;
					mainHeaderFade(section);
					breadCrumbs(firstHeader, section);
					helpFadeOut(helpBoxes);
					setTimeout(function () {
						removeChildren(helpBoxes);
						createAnswers(block);
						changePageAttributes(thirdHeader);
						helpFadeIn(helpBoxes);
					}, transitionSpeed);
				}
			}
		} else if (type === 3) {
			console.log("3");
			searchTerm = term.toLowerCase();
			for (i = 0; i < mainSections.length; i += 1) {
				value = mainSections[i];
				sectionName = value.section.toLowerCase();
				sectionNames = value.secondSection[i];
				var sectionWhole = value.section;
				if (sectionName.indexOf(searchTerm) >= 0) {
					mainHeaderFade(term);
					breadCrumbs(firstHeader, term);
					helpFadeOut(helpBoxes);
					value1 = value;
					setTimeout(function () {
						removeChildren(helpBoxes);
						for (r = 0; r < value1.secondSection.length; r += 1) {
							createCells(value1.secondSection[r].section, mainCellsAppendTo, true, false);
						}
						changePageAttributes(thirdHeader);
						helpFadeIn(helpBoxes);
					}, transitionSpeed);
				}
			}	   
		}
		
	}
}

function initLoad(data) {
	var text, indexBox, imgSrc;
	firstHeader = jsonData.mainSectionHeader;
	//CREATE SIDE BAR LINKS
	document.getElementById('helpSideBarHeader').textContent = jsonData.popularTopicsHeader;
	for (i = 0; i < jsonData.popularTopics.length; i += 1) {
		text = jsonData.popularTopics[i].section;
		createCells(text, sideTopicsContainer);
	}
	//CREATE MAIN SECTIONS
	document.getElementById('helpH1').textContent = firstHeader;
	for (i = 0; i < mainSections.length; i += 1) {
		text = mainSections[i].section;
		imgSrc = mainSections[i].sectionImg;
		createCells(text, mainCellsAppendTo, true, false, imgSrc);
	}
	//CREATE QUICK LINKS
	document.getElementById('helpQuickLinksHeader').textContent = jsonData.selfHelpLinksHeader;
	for (i = 0; i < jsonData.selfHelpLinkTopics.length; i += 1) {
		text = jsonData.selfHelpLinkTopics[i].section;
		createCells(text, quickLinksContainer);
	}
	//SET CLICK ZONES
	$(document).on('click', '.helpSectionNormalBox', function (e) {
		e.preventDefault();
		if (e.currentTarget.classList.contains('helpSectionBoxSecond')) {
			//SECOND LEVEL CELL CLICK
			text = e.currentTarget.textContent;
			searching(text, 2);
		} else {
			text = e.currentTarget.textContent;
			searching(text, 3);
			//FIRST CLICK ON MAIN CELLS
		}
	});
	var quickLinks = $('#helpQuickLinks a'),
		popTopics = $('#helpSideBar ul li');
	quickLinks.on('click', function (e) {
		indexBox = Array.prototype.slice.call(e.currentTarget.parentElement.children).indexOf(e.currentTarget);
		var header1 = jsonData.selfHelpLinksHeader,
			header2 = jsonData.selfHelpLinkTopics[indexBox].section,
			alternate = jsonData.selfHelpLinkTopics[indexBox].alternate;
		breadCrumbs(header1, header2);
		mainHeaderFade(header2);
		helpFadeOut(helpBoxes);
		setTimeout(function () {
			removeChildren(helpBoxes);
			linkSearch(alternate);
			helpFadeIn(helpBoxes);
		}, transitionSpeed);
	});
	popTopics.on('click', function (e) {
		indexBox = Array.prototype.slice.call(e.currentTarget.parentElement.children).indexOf(e.currentTarget);
		var header1 = jsonData.popularTopicsHeader,
			header2 = jsonData.popularTopics[indexBox].section,
			alternate = jsonData.popularTopics[indexBox].alternate;
		breadCrumbs(header1, header2);
		mainHeaderFade(header2);
		helpFadeOut(helpBoxes);
		setTimeout(function () {
			removeChildren(helpBoxes);
			linkSearch(alternate);
			helpFadeIn(helpBoxes);
		}, transitionSpeed);
	});
	breadLinked();
}

function reset(data) {
	var helpMain = document.getElementById('helpMain'),
		resetTitle = "Bodybuilding.com Help Center";
	//FADE ALL ELEMENTS WITH CHANGES, REMOVE CHILDREN, THEN LOAD PAGE AS NEW AGAIN
	helpFadeOut(helpMain);
	setTimeout(function () {
		//REMOVE CHILDREN FOR EACH OF THESE CONTAINERS
		[helpBoxes, quickLinksContainer, breadCrumbInner, sideTopicsContainer].forEach(removeChildren);
		initLoad(data);
		helpFadeIn(helpMain);
	}, transitionSpeed);
	//CHANGE PAGE TITLE WHEN RESETING BACK TO DEFAULT
	changePageAttributes(resetTitle);
	//ERASE ANYTHING IN THE SEARCH BAR WHEN RESETTING
	searchBar.value = "";
}

//SEARCH BAR TYPING
//ON ANY KEY UP SET TIMER TO SEE IF USER IS DONE TYPING AND THEN SEARCH FOR WHAT IS IN THE SEARCH BOX
searchBar.addEventListener('keyup', function () {
	clearTimeout(typingTimer);
	//IF SEARCH FIELD IS EMPTY AFTER TYPING THEN RESET HELP PAGE
	if (searchBar.value.length === 0) {
		reset(jsonData);
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
		reset(jsonData);
	});
}
//INITAL LOAD AND SEARCHES
initLoad(jsonData);
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