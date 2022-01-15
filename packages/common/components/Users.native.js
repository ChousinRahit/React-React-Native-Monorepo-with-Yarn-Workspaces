import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';

const Users = ({ users }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={[styles.nameText, { flexWrap: 'wrap', flex: 1 }]}>
            {item.email}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.webLickBtn}
          onPress={() => Linking.openURL(`https://${item.website}`)}
        >
          <Text style={styles.websiteText}>https://{item.website}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default Users;

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    color: '#3a3a3a',
  },
  websiteText: {
    color: '#1111ee',
  },
  webLickBtn: {
    borderWidth: 1,
    borderColor: '#1111ee',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
});
