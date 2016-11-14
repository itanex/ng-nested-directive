module NestedNodes {
    class NodeItem {
        constructor(
            public name: string,
            public children?: Array<NodeItem>
        ) { }
    }

    class NodeLeafController {
        public tree: Array<NodeItem> = [{
            name: 'Europe',
            children: [{
                name: 'Italy',
                children: [{
                    name: 'Rome'
                }, {
                    name: 'Milan'
                }]
            }, {
                name: 'Spain'
            }]
        }, {
            name: 'South America',
            children: [{
                name: 'Brasil'
            }, {
                name: 'Peru'
            }]
        }];

        constructor() { }
    }

    angular
        .module('app.nested')
        .controller('NodeLeafController', NodeLeafController);
}

