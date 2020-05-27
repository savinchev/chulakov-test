import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { sortBy } from './helpers/sortBy';

import { LangSwitch } from './components/LangSwitch/LangSwitch';
import { Controls } from './components/Controls/Controls';
import { Search } from './components/Search/Search';
import { UsersList } from './components/UsersList/UsersList';

import { changeLang } from './actions/changeLang';
import { setUsers } from './actions/setUsers';
import { setSortValue, setSortOrder } from './actions/sortUsers';
import { filterUsers } from './actions/filterUsers';


const App = props => {

  const { isEng, users, sort, filterValue, changeLang,
    setUsers, setSortValue, setSortOrder, filterUsers } = props;

  const history = useHistory();
  const isPreview = history.location.pathname.slice(1) === 'preview';
  const [preview, setPreview] = useState(isPreview);

  useEffect(() => {
    axios.get('/data.json')
      .then(({ data }) => setUsers(data));
  }, [setUsers]);

  const changeLanguage = () => {
    changeLang(!isEng);
  };

  const changeFilterValue = ({ target }) => {
    filterUsers(target.value);
  };

  const toFavour = (id, bool) => {
    users.find(u => u.id === id).favourite = !bool;
    setUsers([...users]);
  }

  return (
    <div className="container">
      <LangSwitch
        changeLanguage={changeLanguage}
        isEng={isEng}
      />
      <Controls
        setSortValue={setSortValue}
        sortValue={sort.sortValue}
        setSortOrder={setSortOrder}
        sortOrder={sort.sortOrder}
        isEng={isEng}
        preview={preview}
        setPreview={setPreview}
      />
      <Search
        isEng={isEng}
        filterValue={filterValue}
        changeFilterValue={changeFilterValue}
      />
      <UsersList
        users={users}
        isEng={isEng}
        isPreview={isPreview}
        toFavour={toFavour}
        preview={preview}
      />
    </div>
  );
};

const mapStateToProps = ({ lang, users, sort, filter }) => ({
  isEng: lang.isEng,
  users: sortBy(
    users.users.filter(u => {
      return u.name.toLowerCase().includes(filter.filterValue.toLowerCase())
        || (u.name.toLowerCase().includes(filter.filterValue.toLowerCase().split(' ')[0])
          && u.name.toLowerCase().includes(filter.filterValue.toLowerCase().split(' ')[1]))
    }),
    sort.sortValue,
    sort.sortOrder
  ),
  sort,
  filterValue: filter.filterValue
});

export default connect(
  mapStateToProps,
  {
    changeLang,
    setUsers,
    setSortValue,
    setSortOrder,
    filterUsers
  }
)(App);

