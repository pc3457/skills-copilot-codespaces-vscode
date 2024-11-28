function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/member/member.html',
        controller: 'MemberCtrl',
        controllerAs: 'memberCtrl',
        bindToController: true,
        scope: {
            member: '='
        }

    };
}