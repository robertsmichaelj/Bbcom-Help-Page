/*jslint devel: true, nomen: true, sloppy: true, browser: true, regexp: true*/
/*global $*/

//TAKE HELP MAIN OUT AT DEPLOYMENT
//TAKE HELP MAIN OUT AT DEPLOYMENT

//BASIC GLOBAL VARIABLES
var i, r, jsonData, firstHeader, mainSections, sectionName, answers, fullLoadQueries, splitQueries, pop, found, sideTopicsContainer = document.getElementById("helpSideBar").getElementsByTagName("UL")[0],
	mainCellsAppendTo = document.getElementById("helpSectionBoxes"),
	quickLinksContainer = document.getElementById("helpQuickLinks"),
	breadCrumbInner = document.getElementById('breadCrumbInner'),
	helpBoxes = document.getElementById('helpSectionBoxes'),
	searchBar = document.getElementById('helpSearchBar'),
	resetElements = document.querySelectorAll(".resetLinking"),
	typingTimer,
	tSpeed = 350,
	classFade = 'helpFade',
	topicHeader = document.getElementById('helpContent').getElementsByTagName("h1")[0],
	topicHeaderImg = document.getElementById('helpHeaderImg');
//GET JSON DATA AND SET DATA VARIABLE
//http://cms.bodybuilding.com/dA/8cd7e639fd/helpMain.json
$.ajax({
	'async': false,
	url: "/helpMain.json",
	dataType: "json",
	success: function (data) {
		jsonData = data;
	}
});
var snapshot = Defiant.getSnapshot(jsonData);
//TOP LEVEL SECTIONS
mainSections = JSON.search(jsonData, '//mainSection[section]');
//BOTTOM LEVEL SECTIONS AND ANSWERS
answers = JSON.search(jsonData, '//secondSection[section]');

function changePageAttributes(text) {
	//CHANGES PAGE TITLE IN HOPES SEARCH ENGINES WILL PICK UP ON IT
	var titleText = text;
	document.title = "Bodybuilding.com Help - " + titleText;
}
function removeChildren(element) {
	//REMOVES CHILDREN OF AN ELEMENT
	while (element.hasChildNodes()) {
		element.removeChild(element.lastChild);
	}
}
function helpFadeOut(element) {
	//FADES OUT ELEMENT WITH CSS
	element.classList.add(classFade);
}
function helpFadeIn(element) {
	//FADE IN ELEMENT WITH CSS
	element.classList.remove(classFade);
}
if (window.location.search.indexOf('?') >= 0) {
	//PARSES URL - AND RETURNS SECTIONS
	fullLoadQueries = window.location.search.split('?')[1];
	splitQueries = fullLoadQueries.split('&');
}
function setQuery(first, second) {
	//USES HTML5 PUSHSTATE TO CHANGE AND SET URLS
	var state = ["home", first, second];
	if (first && !second) {
//		history.pushState(state, null, "helpMain.html?" + first);
		history.pushState(state, null, first);
	} else if (first) {
//		history.pushState(state, null, "helpMain.html?" + first + "&" + second);
		history.pushState(state, null, first + "&" + second);
	}
	if (!first) {
//		window.history.pushState(state, null, "helpMain.html");
		window.history.pushState(state, null, null);
	}
	pop = state.filter(function (val) {return val !== undefined; });
}

var isEqual = function (value, other) {
	//CHECKS IF TWO ARRAYS ARE THE SAME - MIGHT BE ABLE TO DELETE - CHECK FOR USAGE WHEN DONE
    var type = Object.prototype.toString.call(value);
    if (type !== Object.prototype.toString.call(other)) {
		return false;
	}
    if (['[object Array]', '[object Object]'].indexOf(type) < 0) {
		return false;
	}
    var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length,
		otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
    if (valueLen !== otherLen) {
		return false;
	}
    var compare = function (item1, item2) {
        var itemType = Object.prototype.toString.call(item1);
        if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
            if (!isEqual(item1, item2)) {
				return false;
			}
        } else {
            if (itemType !== Object.prototype.toString.call(item2)) {
				return false;
			}
            if (itemType === '[object Function]') {
                if (item1.toString() !== item2.toString()) {
					return false;
				}
            } else {
                if (item1 !== item2) {
					return false;
				}
            }
        }
    };
    if (type === '[object Array]') {
        for (i = 0; i < valueLen; i += 1) {
            if (compare(value[i], other[i]) === false) {
				return false;
			}
        }
    } else {
		var key;
        for (key in value) {
            if (value.hasOwnProperty(key)) {
                if (compare(value[key], other[key]) === false) {
					return false;
				}
            }
        }
    }
    return true;
};
function breadClick(element, i) {
	//CLICKS ON BREADCRUMBS SET HERE
	element[i].addEventListener("click", function () {
		if (this.classList.contains('helpBreadLink2')) {
			searching(this.textContent, 2);
		} else if (this.classList.contains('helpBreadLink3')) {
			searching(this.textContent, 3);
		}
	});
}
function breadLinked() {
	//CALL FUNCTION FOR SETTING CLICKS ON BREADCRUMBS - MAY BE ABLE TO REVISE TO TAKE THIS OUT
	var bread = document.querySelectorAll('.helpBreadLink');
	for (i = 0; i < bread.length; i += 1) {
		breadClick(bread, i);
	}
}
function breadCrumbs(first, second, third) {
	//CREATES BREADCRUMB ELEMENTS
	var breadLink;
	removeChildren(breadCrumbInner);
	if (second) {
		breadLink = document.createElement('a');
		breadLink.classList.add("helpBreadLink", "helpBreadLink2");
		breadLink.id = 'helpBreadLink2';
		breadLink.textContent = second.replace(/-/g, ' ');
		breadCrumbInner.append(breadLink);
	}
	if (third) {
		breadLink = document.createElement('a');
		breadLink.classList.add("helpBreadLink", "helpBreadLink3");
		breadLink.id = 'helpBreadLink3';
		breadLink.textContent = third.replace(/-/g, ' ');
		breadCrumbInner.append(breadLink);
	}
	breadLinked();
}
function mainHeaderText(text, img) {
	//CHANGES TEXT IN THE MAIN HEADER 
	topicHeaderImg.setAttribute('src', '');
	topicHeader.innerHTML = text;
	if (img) {
		topicHeaderImg.setAttribute('src', '../' + img);
	}
}
function alpha() {
	//ALPHABETIZES CLICKABLE CELLS
	var cellsArray = Array.prototype.slice.call(helpBoxes.children);
	cellsArray.sort(function (a, b) {
		if (a.innerText < b.innerText) {
			return -1;
		}
		if (a.innerText > b.innerText) {
			return 1;
		}
		return 0;
	});
	cellsArray.forEach(function (item) {
		helpBoxes.append(item);
	});
}

function createCells(text, appendTo, main, second, imgSrc) {
	//CREATES CLICKABLE AREAS
	var cell = document.createElement('a'),
		wrapSection = document.createElement('div'),
		cellImg = document.createElement('img'),
		listItem = document.createElement('li'),
		anchor = document.createElement('a'),
		imgSource = imgSrc;
	if (appendTo === mainCellsAppendTo) {
		//IF CREATING MAIN SECTION CELLS
		if (main === true && second === false) {
			cell.classList.add('helpSectionBox', 'helpSectionNormalBox');
		} else if (main === true && second === true) {
			cell.classList.add('helpSectionBox', 'helpSectionNormalBox', 'helpSectionBoxSecond');
		}
		wrapSection.className = 'helpSectionBoxWrap';
		wrapSection.innerHTML = text;
		if (imgSrc) {
			cellImg.setAttribute('src', imgSource);
			cellImg.setAttribute('alt', text);
			wrapSection.prepend(cellImg);
		}
		cell.append(wrapSection);
		appendTo.append(cell);
	} else if (appendTo === sideTopicsContainer) {
		//IF CREATING SIDE TOPICS
		listItem.append(anchor);
		if (text.hasOwnProperty('link')) {
			anchor.setAttribute('href', text.link);
			anchor.setAttribute('target', '_blank');
		}
		anchor.innerHTML = text.name;
		appendTo.append(listItem);
	} else if (appendTo === quickLinksContainer) {
		//IF CREATING SELF HELP LINKS
		cell.append(anchor);
		if (text.hasOwnProperty('link')) {
			anchor.setAttribute('href', text.link);
			anchor.setAttribute('target', '_blank');
		}
		anchor.innerHTML = text.name;
		appendTo.append(anchor);
	}
}
function createAnswers(text) {
	//CREATES ANSWERS FROM CLICKED ON ELEMENT AND JSON
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
//SEARCHES SECONDARY SECTIONS AND ADDS TO CLICKABLE CELLS IF MATCHES
//function secondarySearch(term) {
//	var secTerm = term.toLowerCase();
//	for (i = 0; i < answers.length; i += 1) {
//		var v1 = answers[i];
//		sectionName = v1.secondarySection.toLowerCase();
//		if (sectionName.indexOf(secTerm) >= 0) {
//			createCells(v1.section, mainCellsAppendTo, true, true);
//		}
//	}
//}
var createLink = function (data) {
	//CREATES TEXT STRING FOR LINKS AND ADDS DASHES
	var link = data.toString().toLowerCase().replace(/ /g, '-').replace(/\'/g, '').replace(/\?/g, ' ');
	return link;
};
function removeDuplicates(arr) {
	//REMOVES DUPLICATES FROM ARRAY
    var unique_array = arr.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
    });
    return unique_array;
}
function searching(term, level) {
	//MAIN SEARCHING FUNCTION - USED FOR CLICKS AND TYPING
	var search = {
		result: function (data, section) {
			var searchTerm = term.toLowerCase().trim(),
				snapshot = Defiant.getSnapshot(data),
				terms = '//*[contains(' + section + ', "' + searchTerm + '")]';
			found = JSON.search(snapshot, terms);
			return found;
		}
	};
	var answerMatch = search.result(jsonData, "section")[0],
		secMat = search.result(jsonData, "secondarySection"),
		resultAnswer = Object.values(answerMatch),
	//CAN DELETE RESULT CATEGORY AND ALL ASSOCIATED IF ISEQUAL IS NOT NEEDED
		resultCategory;
	if (typeof secMat === 'object') {
        //CATEGORY MATCH EXISTS
		resultCategory = Object.values(secMat);
    } else {
		resultCategory = resultAnswer;
	}
	//IF THERE IS A SEARCH QUERY IN THE URL
	[helpBoxes, breadCrumbInner, topicHeader].forEach(helpFadeOut);
	setTimeout(function () {
		if (level === 1) {
			removeChildren(helpBoxes);
			var cells = [];
			for (i = 0; i < answers.length; i += 1) {
				var name = answers[i].section;
				if (name.toLowerCase().indexOf(term) >= 0) {
					cells.push(name);
				}
				if (answers[i].answer.block.toLowerCase().indexOf(term) >= 0) {
					cells.push(name);
				}
			}
			var clean = removeDuplicates(cells);
			for (i = 0; i < clean.length; i += 1) {
				createCells(clean[i], mainCellsAppendTo, true, true);
			}
			[helpBoxes, breadCrumbInner, topicHeader].forEach(helpFadeIn);
		} else if (level === 2) {
			var cn2 = answerMatch.section,
				cl1 = createLink(cn2);
			removeChildren(helpBoxes);
			for (r = 0; r < answerMatch.secondSection.length; r += 1) {
				createCells(answerMatch.secondSection[r].section, mainCellsAppendTo, true, true);
			}
//			console.log(resultAnswer);
//			console.log(resultCategory);
//			if (isEqual(resultAnswer, resultCategory) === false) {
				//ARRAYS ARE NOT EQUAL
			if (typeof secMat === 'object' && secMat.length > 0) {
				if (secMat[0].hasOwnProperty('section')) {
					for (r = 0; r < secMat.length; r += 1) {
						createCells(secMat[r].section, mainCellsAppendTo, true, true);
					}
				} else {
					for (r = 0; r < secMat.secondSection.length; r += 1) {
						createCells(secMat.secondSection[r].section, mainCellsAppendTo, true, true);
					}
				}
			}
			breadCrumbs(firstHeader, cn2);
			setQuery(cl1);
			mainHeaderText(cn2);
			changePageAttributes(cn2);
//			} else {
//				console.log('ARE EQUAL');
//				breadCrumbs(firstHeader, cn2);
//				setQuery(cl1);
//				mainHeaderText(cn2);
//				changePageAttributes(cn2);
//			}
			alpha();
			[helpBoxes, breadCrumbInner, topicHeader].forEach(helpFadeIn);
		} else if (level === 3) {
			var an3 = answerMatch.section,
				al1 = createLink(an3),
				ac = answerMatch.answer.block;
			removeChildren(helpBoxes);
			mainHeaderText(an3);
			createAnswers(ac);
			changePageAttributes(an3);
			for (i = 0; i < mainSections.length; i += 1) {
				for (r = 0; r < mainSections[i].secondSection.length; r += 1) {
					var s3 = mainSections[i].secondSection[r].section.toLowerCase(),
						m3 = mainSections[i].section.toLowerCase(),
						ml3 = createLink(m3);
					if (s3 === term.toLowerCase()) {
						var ml31 = ml3;
						breadCrumbs(firstHeader, m3, an3);
						setQuery(ml31, al1);
						[helpBoxes, breadCrumbInner, topicHeader].forEach(helpFadeIn);
						return;
					}
				}
			}
		} else if (level === 4) {
			var alt = search.result(jsonData, "section")[0];
			if (alt.hasOwnProperty('answer')) {
				var an4 = alt.section,
					al4 = createLink(an4),
					ac4 = alt.answer.block;
				removeChildren(helpBoxes);
				mainHeaderText(an4);
				createAnswers(ac4);
				changePageAttributes(an4);
				for (i = 0; i < mainSections.length; i += 1) {
					for (r = 0; r < mainSections[i].secondSection.length; r += 1) {
						var s4 = mainSections[i].secondSection[r].section.toLowerCase(),
							sc4 = mainSections[i].section.toLowerCase(),
							scl4 = createLink(sc4);
						if (s4 === term.toLowerCase()) {
							breadCrumbs(firstHeader, sc4, an4);
							setQuery(scl4, al4);
							[helpBoxes, breadCrumbInner, topicHeader].forEach(helpFadeIn);
							return;
						}
					}
				}
			}
			return;
		}
	}, tSpeed);
	return;
}
function initLoad() {
	//INTIAL LOADING
	var text, imgSrc;
	firstHeader = jsonData.mainSectionHeader;
	//CREATE SIDE BAR LINKS
	document.getElementById('helpSideBarHeader').textContent = jsonData.popularTopicsHeader;
	for (i = 0; i < jsonData.popularTopics.length; i += 1) {
		text = jsonData.popularTopics[i];
		createCells(text, sideTopicsContainer);
	}
	//CREATE QUICK LINKS
	document.getElementById('helpQuickLinksHeader').textContent = jsonData.selfHelpLinksHeader;
	for (i = 0; i < jsonData.selfHelpLinkTopics.length; i += 1) {
		text = jsonData.selfHelpLinkTopics[i];
		createCells(text, quickLinksContainer);
	}
	if (window.location.search.indexOf('?') >= 0) {
		if (splitQueries.length === 1) {
			var st1 = splitQueries[0].toString().replace(/-/g, ' ').trim();
			searching(st1, 2);
		} else if (splitQueries.length === 2) {
			var st2 = splitQueries[1].toString().replace(/-/g, ' ').trim();
			searching(st2, 3);
		}
	} else {
		//CREATE MAIN SECTIONS
		document.getElementById('helpH1').textContent = firstHeader;
		for (i = 0; i < mainSections.length; i += 1) {
			text = mainSections[i].section;
			imgSrc = mainSections[i].sectionImg;
			createCells(text, mainCellsAppendTo, true, false, imgSrc);
		}
	}
	//SET CLICK ZONES FOR CLICKABLE BOXES
	$(document).on('click', '.helpSectionNormalBox', function (e) {
		e.stopImmediatePropagation();
		if (!e.currentTarget.classList.contains('helpSectionBoxSecond')) {
			//FIRST CLICK ON MAIN CELLS
			text = e.currentTarget.textContent;
			searching(text, 2);
		} else {
			//SECOND LEVEL CELL CLICK
			text = e.currentTarget.textContent;
			searching(text, 3);
		}
		return;
	});
	$('#helpQuickLinks a').on('click', function (e) {
		if (e.target.href.length === 0) {
			var sqi = Array.prototype.slice.call(e.currentTarget.parentElement.children).indexOf(e.currentTarget),
				sq = jsonData.selfHelpLinkTopics[sqi].name;
			searching(sq, 4);
		}
	});
	$('#helpSideBar ul li').on('click', function (e) {
		if (e.target.href.length === 0) {
			var sqp = Array.prototype.slice.call(e.currentTarget.parentElement.children).indexOf(e.currentTarget),
				sp = jsonData.popularTopics[sqp].name;
			searching(sp, 4);
		}
	});
	//CLICKING ON ANCHORS IN ANSWERS BEHAVIOR
	$(document).one('click', '.helpAnswerBox a',  function (e) {
		e.preventDefault();
		if (e.currentTarget.href.length >= 1) {
			if (e.currentTarget.href.type === 'email') {
				window.location = e.currentTarget.href;
			} else {
				window.open(e.currentTarget.href, '_blank');
			}
		} else {
			var text = $(this).text();
			searching(text, 4);
		}
	});
	breadLinked();
}
function reset() {
	//RESET HELP PAGE TO INITIAL STATE
	var resetTitle = "Bodybuilding.com Help Center";
	setQuery();
	//FADE ALL ELEMENTS WITH CHANGES, REMOVE CHILDREN, THEN LOAD PAGE AS NEW AGAIN
	[helpBoxes, breadCrumbInner, topicHeader].forEach(helpFadeOut);
	setTimeout(function () {
		//REMOVE CHILDREN FOR EACH OF THESE CONTAINERS
		[helpBoxes, quickLinksContainer, breadCrumbInner, sideTopicsContainer].forEach(removeChildren);
		//CHANGE PAGE TITLE WHEN RESETING BACK TO DEFAULT
		changePageAttributes(resetTitle);
		//ERASE ANYTHING IN THE SEARCH BAR WHEN RESETTING
		searchBar.value = "";
		initLoad();
		[helpBoxes, breadCrumbInner, topicHeader].forEach(helpFadeIn);
	}, tSpeed);
	return;
}
searchBar.addEventListener('keyup', function () {
	//SEARCH BAR TYPING
	//ON ANY KEY UP SET TIMER TO SEE IF USER IS DONE TYPING AND THEN SEARCH FOR WHAT IS IN THE SEARCH BOX
	clearTimeout(typingTimer);
	//IF SEARCH FIELD IS EMPTY AFTER TYPING THEN RESET HELP PAGE
	if (searchBar.value.length === 0) {
		reset();
		return;
	}
	//IF SEARCH FIELD HAS MORE THAN 4 CHARACTERS RUN SEARCH - PREVENTS TOO MANY ENTRIES FROM SHOWING
	if (searchBar.value.length >= 4) {
		var term = searchBar.value;
		typingTimer = setTimeout(function () {
			searching(term, 1);
		}, 400);
	}
});
searchBar.addEventListener('keydown', function () {
	//ON ANY KEY DOWN RESET TIMER ABOVE
	clearTimeout(typingTimer);
});
for (i = 0; i < resetElements.length; i += 1) {
	//ADD CLICK EVENTS TO RESET TO ALL WITH RESETLINKING CLASS
	resetElements[i].addEventListener("click", function () {
		reset();
	});
}
window.onpopstate = function (event) {
	//BACK AND FORWARD BUTTONS
	event.preventDefault();
	var popL = pop.length;
	if (popL === 3) {
		searching(pop[1].replace('-', ' '), 2);
	} else if (popL === 2) {
		reset();
	}
};
//INITAL LOAD AND SEARCHES
initLoad();
document.addEventListener("DOMContentLoaded", function () {
	//ADDS CUSTOMERS NAME TO THE HEADER OF THE PAGE IF THEY ARE LOGGED IN AND HAVE A NAME SET
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