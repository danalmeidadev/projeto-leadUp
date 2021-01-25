import React from 'react';
import { Text, View } from 'react-native';

interface propsPost {
  route: {
    params: {
      id: number;
    };
  };
}

const PostEdit: React.FC<propsPost> = ({ route }) => {
  return (
    <View>
      <Text>Texte</Text>
    </View>
  );
};

export default PostEdit;
