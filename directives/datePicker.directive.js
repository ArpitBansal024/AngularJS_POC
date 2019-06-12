myApp.directive('datePicker', function () {
  return {
    restrict: 'A',
    require : 'ngModel',
    link : function (scope, element, attrs, ngModelCtrl) {
        $(function(){
            element.datepicker({
                dateFormat:'yy-mm-dd',
                onSelect:function (date) {
                    ngModelCtrl.$setViewValue(date);
                    scope.$apply();

                }
            });
        });
    }
} });