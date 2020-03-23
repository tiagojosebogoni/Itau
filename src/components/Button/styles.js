import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled(BaseButton)`
  background: #fff;
  height: 46px;
  width: 300px;

  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #f28500;
  font-weight: bold;
  font-size: 16px;
`;
