import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { createFriend, getFriends, destroyFriend } from './util/friend_api_util'
import { fetchAllBills } from './util/bill_api_util'
import { fetchAllUsers } from './util/session_api_util'
import { updateBill } from './util/bill_api_util'
import { getComments } from './util/comment_api_util'



//////;
document.addEventListener('DOMContentLoaded', () => {
    let store;
    //////;
    if (window.currentUser) {
      //////;
      const preloadedState = {
        entities: {
          users: { [window.currentUser.id]: window.currentUser }
        },
        session: { id: window.currentUser.id },
      };
      //////;
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }
    //////;
    window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.createFriend = createFriend;
    // window.destroyFriend = destroyFriend;
    // window.getFriends = getFriends;
    // window.fetchAllBills = fetchAllBills;
    // window.fetchAllUsers = fetchAllUsers;
    // window.updateBill = updateBill;
    // window.getComments = getComments;

    
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});



