import {StyleSheet} from "react-native";
import {Context as BlogContext} from "../contexts/BlogContext";
import {useContext} from "react";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({navigation}) => {

    const {addBlogPost} = useContext(BlogContext);

    return (<BlogPostForm onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'))
    }}/>)
};

const styles = StyleSheet.create({});
export default CreateScreen;