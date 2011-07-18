/// <reference path="jquery-1.6.1-vsdoc.js" />

var itemsa = [];
for (var ii = 0; ii < 500; ii++) {

    innerList = [];
    for (var il = 0; il < 10; il++) {
        innerList.push({
            inner2: ko.observable("vInner2")
        });
    }

    itemsa.push({
        vInner: ko.observable("vInner"),
        innerList: ko.observableArray(innerList)
        });
}

function timeAction(action) {
    var startTime = new Date();
    action();
    var endTime = new Date();

    return endTime - startTime;
}

$(function () {
    var vm = {
        items: ko.observableArray(itemsa),
        vOuter: ko.observable("vOuter"),
        renderTime: ko.observable('')
    };

    var action = function() {
        ko.applyBindings(vm);
    };

    var time = timeAction(action);
    vm.renderTime(time);
});
