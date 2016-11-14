module NestedNodes {
    class NodeDirective implements ng.IDirective {
        public restrict: string = 'E';
        public replace: boolean = true;
        public template: string = '<ul><leaf ng-repeat="node in nodes" leaf="node"></leaf></ul>';
        public scope: any = {
            nodes: '='
        };

        link = (scope, element, attrs) => {}

        static factory(): ng.IDirectiveFactory {
            const directive = () => new NodeDirective();
            directive.$inject = [];
            return directive;
        }
    }

    angular
        .module('app.nested')
        .directive('node', NodeDirective.factory());
}
