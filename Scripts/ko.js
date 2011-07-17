/// <reference path="jquery-1.6.1-vsdoc.js" />

var itemsa = [];
for (var ii = 0; ii < 200; ii++) {

    innerList = [];
    for (var il = 0; il < 30; il++) {
        innerList.push({
            inner2: ko.observable("vInner2")
        });
    }

    itemsa.push({
        vInner: ko.observable("vInner"),
        innerList: ko.observableArray(innerList)
        });
}

$(function () {
    var vm = {
        items: ko.observableArray(itemsa),
        vOuter: ko.observable("vOuter")
    };
    ko.applyBindings(vm);

});
