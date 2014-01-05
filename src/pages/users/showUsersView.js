define(['jquery',
	'underscore',
	'text!./template/showUsersViewTemplate.html', 
	'text!./template/userListTemplate.html', 
	'text!./template/userListItemTemplate.html',
	'text!./template/addUserViewTemplate.html',
	'./model/userDataModel'],
	function(jQuery, underscore, showUsersViewTemplate, userListTemplate, userListItemTemplate, addUserViewTemplate, UserDataModel){

	var showUsersViewModule = function(){
		var userDataModel = new UserDataModel();
		var usersList;

		this.render = function(){
			$('[data-role="page"]').attr('data-page-id','usersPage');
			this.reload();
		};
		
		this.reload = function(){
			reload();
		};
		
		function reload(){
			usersList = userDataModel.getUsersList();
			destroyUsersPageContent();
			renderUserList();
			renderURLs();
			
			//Listening to delete user event
			$('[data-action-point="userListItemDelete"]').click(function(event){
				event.toElement.parentElement.remove();
				userDataModel.deleteUserWithId(event.toElement.getAttribute('value'));
				reload();
			});
		};
		
		function destroyUsersPageContent(){
			$('[data-page-id="usersPage"]').children().remove();
		};
		
		function renderUserList(){
			var $showUsersViewTemplate = $(showUsersViewTemplate);
			var $userListUL = $(userListTemplate);
			_.each(usersList,function(item,key,list){
				var $userListLI = $(userListItemTemplate);
				var populatedLITemplate = _.template(userListItemTemplate,item);
				$userListUL.append(populatedLITemplate);
			});
			$showUsersViewTemplate.find('[data-point="users"]').append($userListUL);
			$('[data-page-id="usersPage"]').append($showUsersViewTemplate);
		};
		
		function renderURLs(){
			$('[data-point="urls"]').append('<a id="addUserURLID" href="">Add User</a>');
			$('#addUserURLID').click(function(event){
				event.preventDefault()
				renderAddUserControls();
			});
		};
		
		function renderAddUserControls(){
			destroyUsersPageContent();
			var $addUserViewTemplate = $(addUserViewTemplate);
			$('[data-page-id="usersPage"]').append($addUserViewTemplate);
			$('#add-user-button').click(function(){
				addUser($('#add-user-name-text-input').val());
			});
		};
		
		function addUser(newUserName){
			userDataModel.addUser(newUserName);
			//destroyUsersPageContent();
			reload();
		};
	};
	return showUsersViewModule;
});