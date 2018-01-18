/*jslint devel: true, nomen: true, sloppy: true, browser: true, regexp: true*/
/*global $*/

//BASIC GLOBAL VARIABLES
var i, r, jsonData, firstHeader, mainSections, sectionName, answers, keywords, fullLoadQueries, splitQueries, pop, found, clickedSection, st1, st2, secCat1, secCat2, sideTopicsContainer = document.getElementById('helpSideBarTopics'),
    mainCellsAppendTo = document.getElementById("helpSectionBoxes"),
    quickLinksContainer = document.getElementById("helpQuickLinks"),
    breadCrumbInner = document.getElementById('breadCrumbInner'),
    helpBoxes = document.getElementById('helpSectionBoxes'),
    searchBar = document.getElementById('helpSearchBar'),
    resetElements = document.querySelectorAll(".resetLinking"),
    typingTimer,
    tSpeed = 350,
    classFade = 'helpFade',
    topicHeader = document.getElementById('helpH1'),
    topicHeaderDiv = document.getElementById('helpHeader'),
    topicHeaderImg = document.getElementById('helpHeaderImg'),
    helpErrorMessage = document.getElementById('helpErrorMessage');
jsonData = helpJsonData;
var snapshot = Defiant.getSnapshot(jsonData);
//TOP LEVEL SECTIONS
mainSections = JSON.search(snapshot, '//mainSection[section]');
//BOTTOM LEVEL SECTIONS AND ANSWERS
answers = JSON.search(snapshot, '//secondSection[section]');
//BOTTOM LEVEL SECTIONS AND ANSWERS
keywords = JSON.search(snapshot, '//secondSection[keywords]');

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

function setGA(page) {
    try {
        ga('gtm4.set', 'page', page);
        ga('gtm4.send', 'pageview');
    } catch (e) {
        console.log('GA Not Catching');
    }
}
function setQuery(first, second) {
    //USES HTML5 PUSHSTATE TO CHANGE AND SET URLS
    var state = ["home", first, second];
    if (first && !second) {
        window.history.pushState(state, null, "/help?" + first);
        setGA("/help?" + first);
    } else if (first) {
        window.history.pushState(state, null, "/help?" + first + "&" + second);
        setGA("/help?" + first + "&" + second);
    }
    if (!first) {
        window.history.pushState(state, null, "/help");
        setGA("/help");
    }
    pop = state.filter(function (val) {
        return val !== undefined;
    });
}
//function setQuery(first, second) {
//    //USES HTML5 PUSHSTATE TO CHANGE AND SET URLS
//    var state = ["helpMain.html", first, second];
//    if (first && !second) {
//        window.history.pushState(state, null, "helpMain.html?" + first);
//    } else if (first) {
//        window.history.pushState(state, null, "helpMain.html?" + first + "&" + second);
//    }
//    if (!first) {
//        window.history.pushState(state, null, "helpMain.html");
//    }
//    pop = state.filter(function (val) {
//        return val !== undefined;
//    });
//    console.log(pop);
//}

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
    if (!img === false) {
        helpFadeIn(topicHeaderImg);
        topicHeaderImg.setAttribute('src', img);
    } else {
        helpFadeOut(topicHeaderImg);
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
        wrapSection.id = text.replace(/ /g, '').toLowerCase();
        wrapSection.innerHTML = text;
        if (imgSrc) {
            wrapSection.style.backgroundImage = "url(" + imgSource + ")";
            wrapSection.prepend(cellImg);
        }
        cell.append(wrapSection);
        appendTo.append(cell);
    } else if (appendTo === sideTopicsContainer) {
        //IF CREATING SIDE TOPICS
        listItem.append(anchor);
        if (text.hasOwnProperty('link')) {
            anchor.setAttribute('href', text.link);
            anchor.setAttribute('target', '_self');
        }
        anchor.innerHTML = text.name;
        appendTo.append(listItem);
    } else if (appendTo === quickLinksContainer) {
        //IF CREATING SELF HELP LINKS
        cell.append(anchor);
        if (text.hasOwnProperty('link')) {
            anchor.setAttribute('href', text.link);
            anchor.setAttribute('target', '_self');
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

function searching(term, level, otherCat) {
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
        secMat = search.result(jsonData, "secondarySection");
	[helpBoxes, breadCrumbInner, topicHeaderDiv, helpErrorMessage].forEach(helpFadeOut);
    setTimeout(function () {
        if (level === 1) {
            //SEARCH BAR
            removeChildren(helpBoxes);
            var cells = [];
            for (i = 0; i < answers.length; i += 1) {
                var name = answers[i].section;
                if (name.toLowerCase().indexOf(term) >= 0) {
                    cells.push(name);
                    console.log('here1');
                }
                if (answers[i].answer.block.toLowerCase().indexOf(term) >= 0) {
                    cells.push(name);
                    console.log('here2');
                }
            }
            for (i = 0; i < keywords.length; i += 1) {
                for (r = 0; r < keywords[i].keywords.length; r += 1) {
                    if (keywords[i].answer.block.toLowerCase().indexOf(term) >= 0) {
                        var name = keywords[i].section;
                        cells.push(name);
                        console.log('here3');
                    }
                }
            }
            
            if (cells.length >= 1) {
                var clean = removeDuplicates(cells);
                for (i = 0; i < clean.length; i += 1) {
                    createCells(clean[i], mainCellsAppendTo, true, true);
                    console.log('here4');
                }
            } else {
                helpFadeIn(helpErrorMessage);
                console.log('here5');
            }
			[helpBoxes, breadCrumbInner, topicHeaderDiv].forEach(helpFadeIn);
        } else if (level === 2) {
            //First Level Clicks
            console.log('first level clicks');
            var cn2 = answerMatch.section,
                ci2 = answerMatch.sectionImg,
                cl1 = createLink(cn2);
            removeChildren(helpBoxes);
            for (r = 0; r < answerMatch.secondSection.length; r += 1) {
                createCells(answerMatch.secondSection[r].section, mainCellsAppendTo, true, true);
            }
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
            mainHeaderText(cn2, ci2);
            changePageAttributes(cn2);
            alpha();
			[helpBoxes, breadCrumbInner, topicHeaderDiv].forEach(helpFadeIn);
        } else if (level === 3) {
            //Second Level Clicks
            console.log('second level clicks');
            console.log(answerMatch.section);
            var an3 = answerMatch.section,
                al1 = createLink(an3),
                ac = answerMatch.answer.block,
                m3;
            removeChildren(helpBoxes);
            mainHeaderText(an3, false);
            createAnswers(ac);
            changePageAttributes(an3);
            for (i = 0; i < mainSections.length; i += 1) {
                for (r = 0; r < mainSections[i].secondSection.length; r += 1) {
                    m3 = mainSections[i].section.toLowerCase();
                    var s3 = mainSections[i].secondSection[r].section.toLowerCase(),
                        ml3 = createLink(m3);
                    if (s3 === term.toLowerCase()) {
                        var ml31 = ml3;
                        if (clickedSection === undefined) {
                            clickedSection = otherCat;
                        }
                        breadCrumbs(firstHeader, clickedSection, an3);
                        if (clickedSection) {
                            var makelink3 = createLink(clickedSection);
                            setQuery(makelink3, al1);
                        } else {
                            setQuery(ml31, al1);
                        }
						[helpBoxes, breadCrumbInner, topicHeaderDiv].forEach(helpFadeIn);
                        return;
                    }
                }
            }
        } else if (level === 4) {
            //QUICK LINKS AND POPULAR TOPICS
            console.log('quick links');
            var alt = search.result(jsonData, "section")[0];
            if (alt.hasOwnProperty('answer')) {
                var an4 = alt.section,
                    al4 = createLink(an4),
                    ac4 = alt.answer.block;
                removeChildren(helpBoxes);
                mainHeaderText(an4, false);
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
							[helpBoxes, breadCrumbInner, topicHeaderDiv].forEach(helpFadeIn);
                            return;
                        }
                    }
                }
            } else if (alt.hasOwnProperty('secondSection')) {
                var an5 = alt.section,
                    ai5 = alt.sectionImg,
                    al5 = createLink(an5);
                removeChildren(helpBoxes);
                for (r = 0; r < alt.secondSection.length; r += 1) {
                    createCells(alt.secondSection[r].section, mainCellsAppendTo, true, true);
                }
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
                breadCrumbs(firstHeader, an5);
                setQuery(al5);
                mainHeaderText(an5, ai5);
                changePageAttributes(an5);
                alpha();
                [helpBoxes, breadCrumbInner, topicHeaderDiv].forEach(helpFadeIn);
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
    //LOOK AT URL FOR THINGS TO SEARCH FOR
    if (window.location.search.indexOf('?') >= 0) {
        console.log(splitQueries);
        if (splitQueries.length === 1) {
            //IF THERE IS JUST A MAIN CATEGORY AND NOT A SUB CATEGORY
            st1 = splitQueries[0].toString().replace(/-/g, ' ').trim();
//            secCat1 = splitQueries[1].toString().replace(/-/g, ' ').trim();
//            searching(st1, 2, secCat1);
            secCat1 = splitQueries[0].toString().replace(/-/g, ' ').trim();
            searching(st1, 2);
        } else if (splitQueries.length === 2) {
            //IF THERE IS A SUB CATEGORY AND A MAIN CATEGORY
            console.log(splitQueries[1]);
            st2 = splitQueries[1].toString().replace(/-/g, ' ').trim();
            secCat2 = splitQueries[0].toString().replace(/-/g, ' ').trim();
            searching(st2, 3, secCat2);
        }
    } else {
        //IF THERE IS NOTHING IN THE URL TO SEARCH FOR
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
            clickedSection = $('#helpBreadLink2').text();
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
    $(document).on('click', '.helpAnswerBox a', function (e) {
        e.preventDefault();
        if (e.currentTarget.href.length >= 1) {
            if (e.currentTarget.href.type === 'email') {
                window.location = e.currentTarget.href;
            } else {
                window.open(e.currentTarget.href, '_self');
            }
        } else {
            var text = $(this).text();
            searching(text, 4);
        }
    });
    breadLinked();
    mainHeaderText(firstHeader);
}

function reset() {
    //RESET HELP PAGE TO INITIAL STATE
    var resetTitle = "Bodybuilding.com Help Center";
    setQuery();
    //FADE ALL ELEMENTS WITH CHANGES, REMOVE CHILDREN, THEN LOAD PAGE AS NEW AGAIN
	[helpBoxes, breadCrumbInner, topicHeaderDiv, helpErrorMessage].forEach(helpFadeOut);
    setTimeout(function () {
        //REMOVE CHILDREN FOR EACH OF THESE CONTAINERS
		[helpBoxes, quickLinksContainer, breadCrumbInner, sideTopicsContainer].forEach(removeChildren);
        //CHANGE PAGE TITLE WHEN RESETING BACK TO DEFAULT
        changePageAttributes(resetTitle);
        //ERASE ANYTHING IN THE SEARCH BAR WHEN RESETTING
        searchBar.value = "";
        initLoad();
		[helpBoxes, breadCrumbInner, topicHeaderDiv].forEach(helpFadeIn);
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
        searching(pop[1].replace(/-/g, ' '), 2);
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
    var initialAtTop = $('#helpHeader').offset().top + $('#helpHeader').height();
    $(window).scroll(function () {
        var atTop = $(window).scrollTop();
        if (atTop >= initialAtTop) {
            topicHeaderDiv.classList.add('headerFixed');
        } else if (atTop) {
            topicHeaderDiv.classList.remove('headerFixed');
        }
    });
});