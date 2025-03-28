import tweets from '../../../../assets/data/tweets'
import { StyleSheet, View, FlatList, Pressable } from 'react-native';
import TweetStructure from '../../../../components/Tweet_structure'
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router'

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data = {tweets}
        renderItem={({item}) => <TweetStructure tweet = {item}/>}
      />
      <Pressable>
        <Link href = "/newTweet" asChild>
          <Entypo name="plus" size={24} color="white" style = {styles.floatingButton}/>
        </Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  },
  floatingButton: {
    backgroundColor: '#1C98F0',
    width: 50,
    height: 50,
    borderRadius: 25,
    textAlign: 'center',
    lineHeight: 50,
    position: 'absolute',
    right: 15,
    bottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden'
  }
});
