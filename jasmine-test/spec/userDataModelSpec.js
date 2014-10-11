define(['src/pages/users/model/userDataModel'], function(userDataModel){
  describe("UserDataModel", function() {
    var userDataModelObj;

    beforeEach(function() {
      userDataModelObj = new userDataModel();
    });

    it("should instantiate correctly", function() {
      expect(typeof userDataModelObj.getUsersList()).toEqual("object");
    });
    it("should add user correctly", function() {
      addSingleUserInUserDataModel(userDataModelObj, 'Yamika');
      // Take fresh copy of user list to verify
      userListArray = userDataModelObj.getUsersList();
      // Check if user exists in the array
      expect(userDataModelObj.getUsersList()[0].name).toEqual("Yamika");
    });
    it("should remove user correctly", function() {
      addSingleUserInUserDataModel(userDataModelObj, 'Yamika');
      // remove only user with 'deleteUserWithId' method
      userDataModelObj.deleteUserWithId(userDataModelObj.getUsersList()[0].id);
      // Check if user exists in the array
      expect(userDataModelObj.getUsersList().length).toEqual(0);
    });

    function addSingleUserInUserDataModel(userDataModelObj, userNameToBeAdded){
      // Get ref to user list
      var userListArray = userDataModelObj.getUsersList();
      // Empty the user list
      userListArray.length=0;
      // Add some user
      userDataModelObj.addUser(userNameToBeAdded);
    }
  });
});