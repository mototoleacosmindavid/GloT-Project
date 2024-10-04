export function buildPagination(currentPage, containerId, pageTotal, pageLinkOnClick) {
    console.log(`Building pagination for ${currentPage} and ${pageTotal}`);
    const container = document.getElementById(containerId);
    console.log("Number of children: " + container.getElementsByTagName("a").length);
    container.innerHTML = "";
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    console.log("Number of children: " + container.getElementsByTagName("a").length);
    if (pageTotal < 1) {
        return;
    }

    const pageLinkList = [];
    const pageLinkSkipToFirst = createPageLink(pageLinkOnClick, 1, '<i class="fa-solid fa-angles-left"></i>');
    pageLinkList.push(pageLinkSkipToFirst);

    // BEFORE
    const atMost2Before = Math.max(1, currentPage - 2);
    const needToCreateFirstPage = atMost2Before > 1;
    if (needToCreateFirstPage) {
        const pageLinkFirst = createPageLink(pageLinkOnClick, 1, '1');
        pageLinkList.push(pageLinkFirst);
        const pagesLeftUntilThe2BeforeCurrent = 2 <= atMost2Before - 1;
        if (pagesLeftUntilThe2BeforeCurrent) {
            const pageLinkOthers = createPageLink(() => { }, 0, "...");
            pageLinkOthers.classList.add("disabled");
            pageLinkList.push(pageLinkOthers);
        }
    }
    for (let i = atMost2Before; i < currentPage; i++) {
        const pageLink = createPageLink(pageLinkOnClick, i, i.toString());
        pageLinkList.push(pageLink);
    }
    // CURRENT
    const pageLinkCurrent = createPageLink(pageLinkOnClick, currentPage, currentPage.toString());
    pageLinkCurrent.classList.add("active");
    pageLinkList.push(pageLinkCurrent);
    // AFTER CURRENT
    const atMost2After = Math.min(pageTotal, currentPage + 2);
    for (let i = currentPage + 1; i <= atMost2After; i++) {
        pageLinkList.push(createPageLink(pageLinkOnClick, i, i.toString()));
    }

    const lastPageNotAlreadyCreated = pageTotal > atMost2After;
    if (lastPageNotAlreadyCreated) {
        const isTherePagesLeftUntilLast = pageTotal - atMost2After >= 1;
        if (isTherePagesLeftUntilLast) {
            const pageLinkOthers = createPageLink(() => { }, 0, "...");
            pageLinkOthers.classList.add("disabled");
            pageLinkList.push(pageLinkOthers);
        }

        const pageLinkLast = createPageLink(pageLinkOnClick, pageTotal, pageTotal.toString());
        pageLinkList.push(pageLinkLast);
    }

    const pageLinkSkipToLast = createPageLink(pageLinkOnClick, pageTotal, '<i class="fa-solid fa-angles-right"></i>');
    pageLinkList.push(pageLinkSkipToLast);
    pageLinkList.forEach(pageLink => {
        container.appendChild(pageLink);
    });
}

function createPageLink(callbackPageLinkOnClick, pageNumber, pageSymbol) {
    const pageLink = document.createElement("a");
    if (pageSymbol) {
        pageLink.innerHTML = pageSymbol;
    } else {
        pageLink.innerText = pageNumber;
    }
    pageLink.addEventListener('click', (event) => {
        event.preventDefault(); // Previne comportamentul implicit de navigare
        callbackPageLinkOnClick(pageNumber);
    });
    return pageLink;
}

export function isPageActive(containerId, pageNumber) {
    const pageLinks = document.getElementById(containerId).getElementsByTagName("a");
    console.log(pageLinks.length);
    for (let i = 0; i < pageLinks.length; i++) {
        if (pageLinks[i].innerText === pageNumber + "" && pageLinks[i].classList.contains("active")) {
            return true;
        }
    }
    return false;
}

export function makeActiveOnlyPageLink(containerId, pageNumber) {
    const container = document.getElementById(containerId);
    const pageLinks = container.getElementsByTagName("a");

    for (let i = 0; i < pageLinks.length; i++) {
        pageLinks[i].classList.remove("active");

        if (pageLinks[i].innerText === pageNumber + "") {
            pageLinks[i].classList.add("active");
        }
    }
}
