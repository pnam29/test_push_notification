/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {TouchableOpacity} from 'react-native';
import PushNotification from 'react-native-push-notification';

const App = () => {
  const noti = () => {
    PushNotification.localNotificationSchedule({
      title: 'Bzzzzzzz',
      message: 'alo',
      date: new Date(Date.now()),
      repeatType: 'day',
      soundName: 'alert_sound.mp3',
      playSound: true,
    });
  };
  return (
    <TouchableOpacity
      style={{backgroundColor: 'black', flex: 1}}
      onPress={() => {
        console.log('Date(Date.now())', Date(Date.now()));
        noti();
      }}
    />
  );
};

export default App;
