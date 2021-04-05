function addManagerService(event) {
	let arrTitles = Array.from(document.getElementsByClassName("tabs__title"));
	let arrContent = Array.from(document.getElementsByClassName("tabs__content"));
    arrTitles.forEach(function(title, index) {
            if (title === this.event.target) {
                title.classList.add("active");
                arrContent[index].classList.remove("invisibility");
            } else {
                title.classList.remove("active");
                arrContent[index].classList.add("invisibility");
            }
        });
    }