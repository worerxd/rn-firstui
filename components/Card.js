import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  card: {        
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderWidth: 2,
  },
  imageContainer: {
    flex: 1
  },
  image: {  
    width: 150,
    height: '100%'
  },
  body: {
    flex: 1
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    marginTop: 5,
    color: 'grey',
    fontWeight: 'bold'
  },
  tagContainer: {    
    flexDirection: 'row', 
    flexWrap: 'wrap',   
  },
  tag: {    
    backgroundColor: 'grey',
    margin: 5,
    padding: 5, 
    borderRadius: 5,
  },
  tagText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white'
  },
  commentsContainer: {
    flexDirection: 'row',   
    marginLeft: 5, 
  },
  commentText: {
    marginLeft: 10,
  }
})

const Card = (props) => {
  const {picture, author, about, tags, comments } = props
  return (
    <View style={styles.card} >
      <View style={styles.imageContainer}>
        <Image 
        style={styles.image}
          source={{
          uri: picture,
          }}
        />
      </View>    
      <View style={styles.body}>
        <Text style={styles.title}>{about.slice(0,30)}</Text>
        <Text style={styles.author}>by {author} </Text>
        <View style={styles.tagContainer}>
          {
            tags.map((tag,index) => <View key={index} style={styles.tag}><Text style={styles.tagText}>{tag}</Text></View>)
          }
        </View>
        <View style={styles.commentsContainer}>
        <MaterialCommunityIcons name="comment-multiple-outline" size={24} color="grey" />
          <Text style={styles.commentText}>{comments.length} Comments</Text>
        </View>
        </View>
    </View>
  );
};

export default Card;