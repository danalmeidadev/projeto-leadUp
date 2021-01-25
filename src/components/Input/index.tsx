import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';
import { TextInputProps } from 'react-native';
import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { name, icon, ...restant },
  ref,
) => {
  const inputElemnetRef = useRef<any>(null);
  const { registerField, defaultValue, fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [isFocused, setIsFoused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handlesInputFocus = useCallback(() => {
    setIsFoused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFoused(false);
    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElemnetRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Icon
        name={icon}
        size={20}
        color={isFocused || isFilled ? '#00DCB7' : '#666360'}
      />
      <TextInput
        ref={inputElemnetRef}
        placeholderTextColor="#707070"
        defaultValue={defaultValue}
        onFocus={handlesInputFocus}
        onBlur={handleInputBlur}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        keyboardAppearance="light"
        {...restant}
      />
    </Container>
  );
};

export default forwardRef(Input);
