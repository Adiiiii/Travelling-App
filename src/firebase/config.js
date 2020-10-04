import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD9UdNLXC8K9BF6t7Sz9IznPSdHIUBrAwc',
  authDomain: 'travellerend.firebaseapp.com',
  databaseURL: 'https://travellerend.firebaseio.com',
  projectId: 'travellerend',
  storageBucket: 'gs://travellerend.appspot.com',
  // messagingSenderId: '12345-insert-yourse',
  appId: '1:447532044562:ios:c7ee23dfef892a086ee3cb',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
