module NestedNodes {

    class LeafDirective implements ng.IDirective {
        public restrict: string = 'E';
        public replace: boolean = true;
        public template: string = '<li class="leaf"><span class="{{icon}}"></span>{{leaf.name}}</li>';
        public scope: any = {
            leaf: '='
        };

        constructor(
            private $compile: ng.ICompileService
        ) { }

        link = (scope, element, attrs) => {
            var nodeTpl = '<node nodes="leaf.children"></node>';

            var openIcon = "glyphicon glyphicon-triangle-bottom";
            var closeIcon = "glyphicon glyphicon-triangle-right";
            var endIcon = "glyphicon glyphicon-flash";

            function hello() {
                console.log('hello');
            }

            if (angular.isArray(scope.leaf.children)) {
                scope.icon = closeIcon;

                //element.attr('onclick', hello());

                //debugger;
                /*
                element.on('click', function (event) {
                  event.preventDefault();

                  isExpanded = !isExpanded;
                  scope.icon = isExpanded ? openIcon : closeIcon;
                });
                        //*/
                this.$compile(nodeTpl)(scope, function (cloned, scope) {
                    element.append(cloned);
                });
            } else {
                scope.icon = endIcon;
            }
        }

        static factory(): ng.IDirectiveFactory {
            const directive = ($compile: ng.ICompileService) => new LeafDirective($compile);
            directive.$inject = ['$compile'];
            return directive;
        }
    }


    angular
        .module('app.nested')
        .directive('leaf', LeafDirective.factory());
}
