import { FlatList, StyleSheet, Text, View } from 'react-native';

type HistoryProps = {
  history: string[];
};

export default function History({ history }: HistoryProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>

      <FlatList
        data={history}
        renderItem={({ item }) => (
          <Text style={styles.historyItem}>{item}</Text>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  historyItem: {
    fontSize: 18,
    marginBottom: 8,
  },
});