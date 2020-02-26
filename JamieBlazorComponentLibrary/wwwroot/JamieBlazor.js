// This file is to show how a library package may provide JavaScript interop features
// wrapped in a .NET API

window.functions = {
    focusElement: function (element) {
        element.focus();
    },

    setupCloseDropDown: function (dotnetClass) {  
        document.addEventListener("click", function (e) {
            if (e.target !== undefined && !e.target.classList.contains("auto-complete-dropdown") && !e.target.classList.contains("text-box")) {
                //document.getElementsByClassName("dropdown")[0].classList.add("dropdown-hide");
                dotnetClass.invokeMethodAsync("CloseDropDown");               
                }
            });     
    },

    checkItemListScroll: function (key,dropDownElement) {

        let dropDownBox = dropDownElement;
        let highlightedItem = dropDownElement.querySelector(".auto-complete-dropdown-item-highlighted");
        
        if (highlightedItem !== null) {
            let DDTop = dropDownBox.scrollTop;
            let DDBottom = DDTop + dropDownBox.clientHeight;
            let itemTop = highlightedItem.offsetTop;
            let itemBottom = itemTop + highlightedItem.clientHeight;

            if (itemBottom >= DDBottom && (key === "ArrowDown" || key === "Down"))
                dropDownBox.scrollTop = dropDownBox.scrollTop + highlightedItem.clientHeight;

            if (itemTop <= DDTop && (key === "ArrowUp" || key === "Up"))
                dropDownBox.scrollTop = highlightedItem.offsetTop - highlightedItem.clientHeight;         
        }
    }
};