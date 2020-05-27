import React from 'react';
import { useHistory } from 'react-router-dom';

export const View = ({ isEng, preview, setPreview }) => {

	const history = useHistory();

	const setUsersView = ({ target }) => {
		history.push(target.name);
		setPreview(target.name === 'preview' ? true : false);
	}

	return <div className="controls__item  controls__view">
		<h4 className="controls__item-head">{isEng ? 'View' : 'Вид'}</h4>

		<div className="controls__item-btns">
			<button
				name=""
				onClick={setUsersView}
				className={`controls__item-btn${!preview ? ' active' : ''}`}
			>
				{isEng ? 'Table' : 'Таблица'}
			</button>
			<button
				name="preview"
				onClick={setUsersView}
				className={`controls__item-btn${preview ? ' active' : ''}`}
			>
				{isEng ? 'Preview' : 'Превью'}
			</button>
		</div>

	</div>
};