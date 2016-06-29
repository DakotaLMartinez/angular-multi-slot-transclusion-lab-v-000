angular
	.module('app')
	.directive('userProfile', UserProfile);
	
function UserProfile() {
	return {
		transclude: {
			name: 'h4', 
			position: '?h6', 
			description: '?p'
		},
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<div>Name: <span ng-transclude="name"></span></div>',
				'<div>Position: <span ng-transclude="position">No Position</span></div>', 
				'<div>Description:</div>', 
				'<span ng-transclude="description">No Description</span>',
			'</div>'
		].join('')
	}
}

