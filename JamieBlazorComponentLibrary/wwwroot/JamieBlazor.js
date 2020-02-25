// This file is to show how a library package may provide JavaScript interop features
// wrapped in a .NET API

window.functions = {
    focusElement: function (element) {
        element.focus();
    },

    setupCloseDropDown: function (dotnetClass) {  
        document.addEventListener("click", function (e) {
            if (e.target !== undefined && !e.target.classList.contains("dropdown") && e.target.id !== "search") {
                //document.getElementsByClassName("dropdown")[0].classList.add("dropdown-hide");
                dotnetClass.invokeMethodAsync("CloseDropDown");               
                }
            });     
    },

    checkItemListScroll: function (key) {

        let highlightedItem = document.getElementsByClassName("dropdown-item-highlighted")[0];
        let dropDownBox = document.getElementsByClassName("dropdown")[0];

        if (highlightedItem !== undefined) {
            let DDTop = dropDownBox.scrollTop;
            let DDBottom = DDTop + dropDownBox.clientHeight - highlightedItem.clientHeight;
            let itemTop = highlightedItem.offsetTop;
            let itemBottom = itemTop + highlightedItem.clientHeight;

            if (itemBottom >= DDBottom && (key === "ArrowDown" || key === "Down"))
                dropDownBox.scrollTop = dropDownBox.scrollTop + highlightedItem.clientHeight;

            if (itemTop <= DDTop && (key === "ArrowUp" || key === "Up"))
                dropDownBox.scrollTop = highlightedItem.offsetTop - highlightedItem.clientHeight;         
        }
    }
};