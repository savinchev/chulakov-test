import React from 'react';
import { declOfNum } from './../../../helpers/declOfNum';


export const UserPreview = ({ user, isEng, toFavour }) => {
	const { id, image, name, age, phone, phrase, video, favourite } = user;

	const playerControl = event => {
		const playerElem = event.target;
		window.addEventListener('scroll', e => {
			let top = playerElem.getBoundingClientRect().top;
			let height = playerElem.getBoundingClientRect().height;

			if( top > 0 && top < window.innerHeight - height) {
				playerElem.play();
			} else {
				playerElem.pause();
			}
		});
	};

	return <div className={`list__item${video ? ' player' : ''}`}>

		<div className="list__item-info">
			<div className="list__item-head">
				<img src={`images/${image}.svg`} alt="user-logo" className="list__item-logo" />
				<div className="list__item-name">{name}</div>
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
			<div className="list__item-body">
				<p>{`${age} ${isEng ? 'y.o.' : declOfNum(age, ['год', 'года', 'лет'])}`}</p>
				<p>{phone}</p>
				<p className="item__body-text" >{phrase}</p>
			</div>

		</div>

		{video &&
			<div className="list__item-player">
				<video
					onCanPlayThrough={playerControl}
					src={`videos/${video}.mp4`}
					width="100%"
					loop
					controls="controls"
				/>
			</div>
		}

	</div>
};
