import React from 'react';
import { declOfNum } from './../../../helpers/declOfNum';

export const UserView = ({ user, isEng, toFavour }) => {
	const { id, image, name, age, phone, favourite } = user;

	return <div className="list__item">
		<img src={`images/${image}.svg`} alt="user-logo" className="list__item-logo" />
		<div className="list__item-content">
			<div className="list__item-name">{name}</div>
			<div className="list__item-age">
				{`${age} ${isEng ? 'y.o.' : declOfNum(age, ['год', 'года', 'лет'])}`}
			</div>
			<div className="list__item-phone">{phone}</div>
		</div>
		<span
			onClick={() => toFavour(id, favourite)}
			className={`list__item-favorite${favourite ? ' active' : ''}`}
		>
			<svg enableBackground="new 0 0 511.998 511.998"
				width="20"
				height="20"
				viewBox="0 0 511.998 511.998"
				xmlns="http://www.w3.org/2000/svg">
				<path d="m414.168 500.62-158.169-83.155-158.169 83.155 30.207-176.121-128.037-124.735 176.86-25.689 79.139-162.697 79.139 162.697 176.86 25.689-128.037 124.734z"
					fill="#d4cbc1f7" />
			</svg>
		</span>
	</div>
};