// Insert your GitHub Api Authorization Token
// Token(Classic) -> Generate new token(Classic)
// https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
let token = "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";
let login = document.getElementById("input-login");
const detailTypes = {
    company: 0,
    location: 1,
    email: 2,
    url: 3,
    twitter: 4,
};

login.onkeydown = function (e) {
    if (e.key !== "Enter" || !isValidGitHubLogin(login.value)) return;
    SearchLogin(login.value);
};

window.onload = function () {
    ChangeFireVisibility(false);
    StartHeart();
    ChangeMainVisibility(false);
    SearchLogin("KenanHomework");
};

function isValidGitHubLogin(username) {
    return /^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){0,38}$/i.test(username);
}

function AssignClickEvent() {
    let section = document.getElementById("additional-info-area");
    let cards = section.querySelectorAll(".info-card");

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", InfoCardClick);
    }
}

function AddInfoCard(iconName, label, data) {
    if (data == null || data.length === 0) data = "-";

    let card = GetInfoCard(GetLocalIcon(iconName), label, data);

    let section = document.getElementById("additional-info-area");

    section.insertAdjacentHTML("beforeend", card);
}

function GetInfoCard(iconPath, label, data) {
    return `
     <div class="info-card">
            <div class="info-icon" style="background-image: url('${iconPath}')" ></div>
            <div class="info-data">
                <div class="info-label">${label}</div>
                ${GetFixedLengthValue(data)}
            </div>
        </div>`;
}

function GetFixedLengthValue(data) {
    if (data.length > 94) {
        data = data.substring(0, 91) + "...";
        return `<div class="info-value-small">${data}</div>`;
    }
    return `<div class="info-value">${data}</div>`;
}

function AddDetail(value, type = detailTypes.location) {
    if (value == null || value.length === 0) return;

    let detail = GetDetail(value, type);
    let container = document.querySelector(".detail-container");

    container.insertAdjacentHTML("beforeend", detail);
}

function GetDetail(value, type) {
    return `
    <div class="profile-detail">
        <div class="detail-svg">${GetDetailSVGFromDetailType(type)}</div>
        ${GetDetailValueFromDetailType(value, type)}
    </div>`;
}

function GetDetailValueFromDetailType(value, type = detailTypes.location) {
    switch (type) {
        case detailTypes.company:
            return `<span>${value}</span>`;
        case detailTypes.location:
            return `<span>${value}</span>`;
        case detailTypes.email:
            return `<a href="mailto:${value}">${value}</a>`;
        case detailTypes.url:
            return `<a href="${
                value.startsWith("https://") ? value : "https://" + value
            }" target="_blank">${value}</a>`;
        case detailTypes.twitter:
            return `<a href="${"https://twitter.com/" + value}" target="_blank">${
                "@" + value
            }</a>`;
    }
}

function GetDetailSVGFromDetailType(type = detailTypes.location) {
    switch (type) {
        case detailTypes.company:
            return `        
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" fill="#8b949e">
                <path fill-rule="evenodd"
                      d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path>
            </svg>`;
        case detailTypes.location:
            return `        
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" fill="#8b949e">
                <path fill-rule="evenodd"
                      d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>`;

        case detailTypes.email:
            return `        
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" fill="#8b949e">
                <path fill-rule="evenodd"
                  d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"></path>
            </svg>`;

        case detailTypes.url:
            return `                
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" data-view-component="true"  fill="#8b949e">
                <path fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
            </svg>`;
        case detailTypes.twitter:
            return `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.5 222.3" role="img" aria-labelledby="8fmefd0h8l6j7npjdys5v0fdz6bdktz" height="16" width="16" fill="#8b949e">
                <path d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1"
                    fill="currentColor"></path>
            </svg>`;
    }
}

function ShowSnackBar() {
    const snackbar = document.querySelector(".snackbar");
    const closeBtn = document.querySelector(".snackbar-close-btn");

    const showSnackbar = (autohide) => {
        snackbar.classList.add("isShown");

        if (autohide) {
            setTimeout(hideSnackbar, 2000);
        }
    };

    const hideSnackbar = () => {
        snackbar.classList.remove("isShown");
    };
    closeBtn.addEventListener("click", hideSnackbar);

    showSnackbar(true);
}

function InfoCardClick() {
    if (navigator.clipboard) {
        let data;
        try {
            data = this.querySelector(".info-data .info-value").innerText;
        } catch {
            data = this.querySelector(".info-data .info-value-small").innerText;
        }

        navigator.clipboard.writeText(data).then(function () {
            let snackbarData = document.querySelector(".snackbar-text-paragraph");
            snackbarData.innerText = data;
            ShowSnackBar();
        });
    }
}

function GetLocalIcon(name) {
    let path = `./Images/InfoIcons/${name}.png`;
    return FileExists(path) ? path : "./Images/InfoIcons/info.png";
}

function FileExists(path) {
    let xhr = new XMLHttpRequest();
    xhr.open("HEAD", path, false);
    xhr.send();
    return xhr.status !== 404;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function ChangeMainVisibility(isVisible = true) {
    let visibilityValue = isVisible ? "flex" : "none";

    let main = document.querySelector("main");
    main.style.display = visibilityValue;
}

function ChangeLoaderVisibility(isVisible = true) {
    let loaderContainer = document.querySelector("#loader-container");
    let loader = document.querySelector("#loader");
    if (isVisible) {
        loaderContainer.style.display = "flex";
        loader.classList.add("loader");
    } else {
        loaderContainer.style.display = "none";
        loader.classList.remove("loader");
    }
}

function ChangeFireVisibility(isVisible = true) {
    let visibilityValue = isVisible ? "flex" : "none";

    let fire = document.querySelector(".fire");
    fire.style.display = visibilityValue;
}

function Change404PageVisibility(isVisible = true) {
    let visibilityValue = isVisible ? "unset" : "none";

    let content = document.querySelector(".content");
    content.style.display = visibilityValue;
}

function StartHeart() {
    let pumpLevels = [5, 10, 15, 0];
    let tankLevels = [25, 35, 60, -20];
    let counter = 0;
    let isAnimating = false;

    function pumpHeart() {
        if (isAnimating) {
            return;
        }

        isAnimating = true;
        //forward
        gsap.to(".heart", {
            translateZ: pumpLevels[counter],
            duration: 0.5,
        });

        gsap.to(".curve", {
            bottom: tankLevels[counter],
            transformOrigin: "bottom",
            scaleY: 1,
            duration: 0.5,
        });
        gsap.to(".tank", {
            height: counter === 3 ? 0 : tankLevels[counter],
            duration: 0.5,
        });

        //reverse
        gsap.to(".curve", {
            delay: 0.6,
            bottom: tankLevels[counter],
            transformOrigin: "bottom",
            scaleY: 0.5,
            duration: 0.5,
        });

        gsap.to(".heart", {
            delay: 0.6,
            translateZ: 0,
            duration: 0.25,
            onComplete: function () {
                isAnimating = false;
            },
        });

        if (++counter > 3) counter = 0;
        if (counter === 3) ChangeFireVisibility(true);
    }

    let heart = document.getElementsByClassName("heart")[0];
    heart.addEventListener("click", pumpHeart);
}

async function StartLoadingAnimation(duration, showMain = true) {
    ChangeMainVisibility(false);
    ChangeLoaderVisibility(true);
    await sleep(duration);
    ChangeLoaderVisibility(false);
    if (showMain) ChangeMainVisibility(true);
}

function ReadGeneralInfo(response) {
    let title = document.querySelector("title");
    let avatar = document.querySelector("#avatar");
    let fullName = document.querySelector("#full-name");
    let login = document.querySelector("#login");
    let followers = document.querySelector("#followers");
    let following = document.querySelector("#following");
    let goToProfile = document.querySelector("#goto-profile");

    title.innerText = `GitSearch | ${response.login}`;
    avatar.style.backgroundImage = `url('${response.avatar_url}')`;
    fullName.innerText = response.name;
    login.innerText = response.login;
    goToProfile.href = response.html_url;
    followers.innerText = response.followers;
    following.innerText = response.following;

    AddDetail(response.company, detailTypes.company);
    AddDetail(response.location, detailTypes.location);
    AddDetail(response.email, detailTypes.email);
    AddDetail(response.blog, detailTypes.url);
    AddDetail(response.twitter_username, detailTypes.twitter);
}

function ReadUrlDataCount(url, iconName, label) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            AddInfoCard(iconName, label, response.length);
            AssignClickEvent();
        }
    };
}

function ReadAdditionalInfo(response) {
    AddInfoCard(
        "created_at",
        "Profile Creation Date",
        GetDate(response.created_at)
    );
    AddInfoCard("bio", "Bio", response.bio);
    AddInfoCard("public_repos", "Repositories", response.public_repos);
    AddInfoCard("public_gists", "Gists Number", response.public_gists);
    ReadUrlDataCount(response.organizations_url, "organization", "Organizations");
    ReadUrlDataCount(
        `https://api.github.com/users/${response.login}/starred`,
        "star",
        "Starred Repositories"
    );
}

function GetDate(date) {
    return new Date(date).toLocaleDateString();
}

function Reset() {
    let additional = document.querySelector(".profile-additional-info");
    let detailContainer = document.querySelector(".detail-container");

    additional.innerHTML = "";
    detailContainer.innerHTML = "";
}

async function SearchLogin(login) {
    await StartLoadingAnimation(500, false);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.github.com/users/${login}`);
    if (token !== "your_token")
        xhr.setRequestHeader("Authorization", `token ${token}`);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            Change404PageVisibility(false);
            Reset();
            ReadGeneralInfo(response);
            ReadAdditionalInfo(response);
            AssignClickEvent();
            ChangeMainVisibility(true);
        }

        if (xhr.status === 404) {
            ChangeMainVisibility(false);
            Change404PageVisibility(true);
        }
    };
}
