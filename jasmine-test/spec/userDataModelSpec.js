define(['src/pages/users/model/userDataModel'], function(userDataModel){
  describe("UserDataModel", function() {
    var userDataModelObj;

    beforeEach(function() {
      userDataModelObj = new userDataModel();
    });

    it("should instantiate correctly", function() {
      expect(typeof userDataModelObj.getUsersList()).toEqual("object");
    });
  });
});