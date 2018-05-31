import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCX9TmujHZwkf9JL6VX9mx5SU73kfiNDpE",
    authDomain: "nba-fullstack-a6502.firebaseapp.com",
    databaseURL: "https://nba-fullstack-a6502.firebaseio.com",
    projectId: "nba-fullstack-a6502",
    storageBucket: "nba-fullstack-a6502.appspot.com",
    messagingSenderId: "177049064752"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');

  const firebaseLooper = (snapshot) => {
    const data = [];
        snapshot.forEach((childSnapshot)=>{
            data.push({
                ...childSnapshot.val(),
                id:childSnapshot.key
            })
        });
    return data;
  }

  export {
      firebase,
      firebaseDB,
      firebaseArticles,
      firebaseTeams,
      firebaseVideos,
      firebaseLooper
  }