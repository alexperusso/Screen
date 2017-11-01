function getTestPlanData() {

    var defaultData = [{
        text: 'Parent 1',

        nodes: [{
            text: 'Child 1',
            href: '#child1',
            tags: ['2'],
            nodes: [{
                text: 'Grandchild 1',
            }, {
                text: 'Grandchild 2',
            }]
        }, {
            text: 'Child 2',
        }]
    }, {
        text: 'Parent 2',
    }, {
        text: 'Parent 3',
    }, {
        text: 'Parent 4',
    }, {
        text: 'Parent 5',
    }];

    return defaultData;
}

$(function() {
    var defaultData = getTestPlanData();

    $('#TestPlanHierarchy').treeview({
        data: defaultData
    });

});