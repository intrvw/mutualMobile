import React, { useEffect, useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader";
import { PostsSelector } from "../Redux/ReduxSelectors";
import { GetAllPosts, getNextPostLimit } from "../Server/Host";
import { Card } from "react-native-elements";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";

export default function HomePage({ navigation }) {
  const dispatch = useDispatch();
  const { posts, nextData } = useSelector(PostsSelector);
  const [page, setPage] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (posts.length === 0) GetAllPosts(dispatch);
  }, [posts]);

  const renderItem = ({ item }) => {
    return <Post post={item} navigation={navigation} />;
  };

  const handleNextLimit = () => {
    getNextPostLimit(posts, page, dispatch);
    setPage(page + 6);
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Card.Title h2>Mutual Mobile</Card.Title>
      </Card>

      <FlatList
        data={nextData}
        keyExtractor={(post) => `${post.id}`}
        renderItem={renderItem}
        onEndReachedThreshold={0.5}
        onEndReached={handleNextLimit}
        ListFooterComponent={<Loader />}
      />
    </SafeAreaView>
  );
}

//Individual post view
function Post({ post, navigation }) {

  const [loading,setLoading]=useState(false)
  const handleOnClick = () => {
    setLoading(true)
    navigation.navigate("IndividualPost", {
      postItem: post,
    });
    setLoading(false)
  };

  if(loading) return <Loader/>

  return (
    <TouchableOpacity onPress={handleOnClick}>
      <Card containerStyle={{ borderRadius: 20 }}>
        <Card.Title>Post: {post.id}</Card.Title>
        <Card.Divider />
        <View style={styles.card}>
          <View style={{ zIndex: 100, margin: "3%" }}>
            <Text style={styles.title}>UserName</Text>
            <Text style={styles.text}>{post.userId}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.text}>{post.title}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

//Post Styles
const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    flex: 1,
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
