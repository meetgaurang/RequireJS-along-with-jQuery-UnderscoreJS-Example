define(['underscore'], function(_){

	var userDataModel = function(){
		this.usersList = [{'id':1,'name':'Tom'},{'id':2,'name':'Jerry'},{'id':3,'name':'Bat Man'},{'id':4,'name':'Spider Man'}];
			
		this.getUsersList = function (){
			return this.usersList;
		};
		
		this.addUser = function (newUserName){
			var randomGeneratedID = Math.floor((Math.random()*100000000)+1);
			var objToBeAdded = {"id":randomGeneratedID,"name":newUserName};
			//Make server call here to add user
			this.usersList.push(objToBeAdded);
		};
		
		this.deleteUserWithId = function (userIdToBeDeleted){
			var self = this;
			_.each(self.usersList,function(item,index,list){
				if(item.id==userIdToBeDeleted){
					//Make server call here to delete user with give ID
					self.usersList.splice( index, 1 );
				}
			});			
		};
	};
	return userDataModel;
});