import React from 'react';


const Navigation = ({ onRouteChange, isSignedIn }) => {
	if(isSignedIn) {

		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('signout')} className = 'mv4 f4 link dim black underline pa3 pointer athelas'>Sign Out</p>
			</nav>
		);		
		} else {
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p onClick={()=>onRouteChange('signIn')}className = 'f4 link dim black underline pa3 pointer athelas'>Sign In</p>
					<p onClick={()=>onRouteChange('register')}className = 'f4 link dim black underline pa3 pointer athelas'>Register</p>
				</nav>
			);
		}
		
}

export default Navigation;