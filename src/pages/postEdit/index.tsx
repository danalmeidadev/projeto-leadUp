import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useDispatch, useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import Input from '../../components/Input';
import * as PostsActions from '../../store/ducks/posts/actions';
import { IAplicationState } from '../../store';
import { Container, Content } from './styles';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Posts } from '../../store/ducks/posts/types';
import api from '../../services/api';

interface propsPost {
  route: {
    params: {
      id: number;
    };
  };
}

const PostCreate: React.FC<propsPost> = ({ route }) => {
  const [posts, setPosts] = useState([]);
  const titleInputRef = useRef<TextInput>(null);
  const descriptionInputRef = useRef<TextInput>(null);
  const formRef = useRef<FormHandles>(null);

  const dispatch = useDispatch();
  const post_id = route.params.id;

  useEffect(() => {
    async function request() {
      await api.get<AxiosResponse>('/posts').then(response => {
        const { data } = response;
        const result = data.find(post => post.id === post_id);
        setPosts(result);
      });
    }
    request();
  }, [post_id]);

  const handlePostIdEdit = useCallback(
    (post: Posts) => {
      dispatch(PostsActions.postRequestEdit({ post, id: post_id }));
    },
    [dispatch, post_id],
  );

  return (
    <>
      <Header icone1="chevron-left" icone2="log-out" />
      <Container>
        <Content>
          <Form
            ref={formRef}
            initialData={{ title: posts.title, description: posts.description }}
            onSubmit={handlePostIdEdit}
          >
            <Text>Titulo</Text>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="default"
              name="title"
              icon="book"
              placeholder="Titulo"
              onSubmitEditing={() => titleInputRef.current?.focus()}
            />

            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="default"
              name="description"
              icon="book"
              placeholder="Descrição"
              onSubmitEditing={() => descriptionInputRef.current?.focus()}
            />
            <Text>Descrição</Text>

            <Button onPress={() => formRef.current?.submitForm()}>
              Salvar alterações
            </Button>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default PostCreate;
