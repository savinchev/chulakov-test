import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import { UserView } from './UserView/UserView';
import { Preloader } from '../Preloader/Preloader';
import { UserPreview } from './UserPreview/UserPreview';

export const UsersList = withRouter(({ users, isEng, isPreview, toFavour }) => {

	return <div className={`users__list${isPreview ? ' preview' : ''}`}>

		<Route exact path='/'>
			{!users
				? <Preloader />
				: users.map(user => (
					<UserView
						key={user.id}
						user={user}
						isEng={isEng}
						toFavour={toFavour}
					/>
				))}
		</Route>
		<Route exact path='/preview'>
			{!users
				? <Preloader />
				: users.map(user => (
					<UserPreview
						key={user.id}
						user={user}
						isEng={isEng}
						toFavour={toFavour}
					/>
				))}
		</Route>

	</div>

});