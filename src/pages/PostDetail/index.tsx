import React, { useCallback, useRef } from 'react';
import { Text, View } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Input';
import * as PostsActions from '../../store/ducks/posts/actions';
import { IAplicationState } from '../../store';
import { Container, Content } from './styles';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Posts } from '../../store/ducks/posts/types';

const PostCreate: React.FC = () => {
  const { data: dados } = useSelector((state: IAplicationState) => state.posts);

  const formRef = useRef<FormHandles>(null);
  const dispatch = useDispatch();

  const handlepost = useCallback(
    (post: Posts) => {
      dispatch(PostsActions.postRequestCreate(post));
    },
    [dispatch],
  );

  return (
    <>
      <Header icone1="chevron-left" icone2="log-out" />
      <Container>
        <Content>
          <Form ref={formRef} onSubmit={handlepost}>
            <Text>Titulo</Text>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="default"
              name="title"
              icon="book"
              placeholder="Titulo"
              returnKeyType="next"
            />

            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="default"
              name="description"
              icon="book"
              placeholder="Descrição"
              returnKeyType="next"
            />
            <Text>Descrição</Text>

            <Button onPress={() => formRef.current?.submitForm()}>
              Entrar
            </Button>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default PostCreate;
