import React, { useCallback } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import PostImg from '../../../assets/images/post.png';
import { Posts } from '../../../store/ducks/posts/types';
import * as PostsActions from '../../../store/ducks/posts/actions';

import Button from '../../../components/Button';
import {
  ButtonPost,
  Container,
  Description,
  TextContent,
  ButtonPostExcluir,
} from './styled';

interface IItemProps {
  item: Posts;
}

const Item: React.FC<IItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const handlePostId = useCallback(
    (id: number) => {
      navigate('postEdit', { id });
    },
    [navigate],
  );

  const handlePostIdExcluir = useCallback(
    (id: Posts) => {
      dispatch(PostsActions.postRequestId(id));
    },
    [dispatch],
  );

  return (
    <>
      <Container>
        <Image source={PostImg} />
        <TextContent>{item.title}</TextContent>
        <Description>{item.description}</Description>

        <ButtonPost>
          <Button onPress={() => handlePostId(item.id)}>Editar</Button>
        </ButtonPost>

        <ButtonPostExcluir>
          <Button onPress={() => handlePostIdExcluir(item.id)}>Excluir</Button>
        </ButtonPostExcluir>
      </Container>
    </>
  );
};

export default Item;
