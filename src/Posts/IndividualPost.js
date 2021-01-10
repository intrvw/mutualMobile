import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostsSelector } from "../Redux/ReduxSelectors";
import { getNextCommentsLimit, LoadCommentsForPost } from "../Server/Host";
import { Card } from "react-native-elements";
import {
  FlatList,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";
import Constants from "expo-constants";
import Loader from "../Components/Loader";
import ImageBackButton from "../Components/ImageBackButton";

export default function IndividualPost({ route, navigation }) {
  const { postItem } = route.params;
  const { comments, nextComments } = useSelector(PostsSelector);
  const [page, setPage] = useState(6);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    LoadCommentsForPost(postItem, dispatch, setLoading);
  }, [comments]);

  const handleNextLimit = () => {
    getNextCommentsLimit(comments, page, dispatch);
    setPage(page + 6);
    setLoading(false);
  };

  const Item = ({ item }) => {
    return <Comment comment={item} />;
  };

  if (loading) <Loader />;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomePage")}
        style={{ marginHorizontal: "3%", marginTop: "5%" }}
      >
        <ImageBackButton />
      </TouchableOpacity>
      <Card containerStyle={{ borderRadius: 20 }}>
        <Card.Title>PostId: {postItem.id}</Card.Title>
        <Card.Divider />
        <View>
          <Text>UserName: {postItem.id}</Text>
          <Text>Title: {postItem.title}</Text>
        </View>
      </Card>
      <Text style={{ marginVertical: "2%", marginLeft: "5%", fontWeight: "bold" }}>
        Comments:
      </Text>
      <FlatList
        data={comments}
        renderItem={Item}
        keyExtractor={(item) => `${item.id}`}
      />
    </SafeAreaView>
  );
}

function Comment({ comment }) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title}>Email</Text>
        <Text>{comment.email}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Name</Text>
        <Text>{comment.name}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Comment</Text>
        <Text>{comment.body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    flex: 1,
    borderRadius: 20,
    elevation: 2,
    backgroundColor: "white",
    padding: "5%",
    margin: "3%",
  },
  title: {
    fontWeight: "bold",
  },
  content: {
    flexDirection: "column",
    margin: "3%",
  },
  text: {
    flex: 1,
    flexWrap: "wrap",
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
