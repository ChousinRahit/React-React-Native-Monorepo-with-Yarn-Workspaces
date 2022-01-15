import React, {useContext, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import {Users, Context} from '@monorepo-yarn/common';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {
    state: {users},
    getUsers,
  } = useContext(Context);
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={true ? 'light-content' : 'dark-content'} />
      <Users users={users} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
