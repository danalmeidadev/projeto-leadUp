import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import {
  Container,
  ContentFlat,
  ButtonCreate,
  BottonCreateText,
} from './styles';
import * as PostsActions from '../../store/ducks/posts/actions';
import { IAplicationState } from '../../store';
import Item from './Item';

const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const { data: dados } = useSelector((state: IAplicationState) => state.posts);
  const [isPosts, setPosts] = useState([]);
  const navigation = useNavigation();

  const postData = useCallback(() => {
    dispatch(PostsActions.postRequest());
  }, [dispatch]);

  useEffect(() => {
    postData();
  }, [postData]);

  useEffect(() => {
    setPosts(dados);
  }, [dados]);

  return (
    <>
      <Header
        onPress={() => navigation.navigate('postCreate')}
        icone1="chevron-left"
        icone2="log-out"
      />
      <ButtonCreate>
        <BottonCreateText onPress={() => navigation.navigate('postCreate')}>
          +
        </BottonCreateText>
      </ButtonCreate>

      <Container>
        <ContentFlat
          data={isPosts}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Item item={item} />}
        />
      </Container>
    </>
  );
};

export default Posts;
