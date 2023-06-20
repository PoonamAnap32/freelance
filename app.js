app.controller('MainCtrl', function($scope) {
    $scope.groups = [
      {
        groupName: 'Group 1',
        groupMembers: [1, 2],
        customGroupId: '1234567890',
        dateTimeChangedBy: '2023-06-19T12:00:00',
        lastUpdatedBy: 'John Doe'
      },
      {
        groupName: 'Group 2',
        groupMembers: [3, 4],
        customGroupId: '9876543210',
        dateTimeChangedBy: '2023-06-20T12:00:00',
        lastUpdatedBy: 'Jane Doe'
      }
    ];
  
    $scope.save = function() {
      // TODO: Save the group data
      $scope.groups.push({
        groupName: $scope.groupName,
        groupMembers: $scope.groupMembers,
        customGroupId: $scope.customGroupId,
        dateTimeChangedBy: $scope.dateTimeChangedBy,
        lastUpdatedBy: $scope.lastUpdatedBy
      });
    };
  
    $scope.deleteGroup = function(group) {
      // TODO: Delete the group
      $scope.groups.splice($scope.groups.indexOf(group), 1);
    };
  
    $scope.editGroup = function(group) {
      // TODO: Edit the group
      $scope.groupName = group.groupName;
      $scope.groupMembers = group.groupMembers;
      $scope.customGroupId = group.customGroupId;
      $scope.dateTimeChangedBy = group.dateTimeChangedBy;
      $scope.lastUpdatedBy = group.lastUpdatedBy;
    };
  });
  