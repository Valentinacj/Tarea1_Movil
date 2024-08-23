import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionA}>
        <Text style={styles.text}>A</Text>
      </View>
      <View style={styles.sectionB}>
        <Text style={styles.text}>B</Text>
      </View>
      <View style={styles.sectionC}>
        <Text style={styles.text}>C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  sectionA: {
    flex: 1,
    backgroundColor: '#48c9b0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  sectionB: {
    flex: 2,
    backgroundColor: '#a3e4d7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  sectionC: {
    flex: 1,
    backgroundColor: '#d1f2eb',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
