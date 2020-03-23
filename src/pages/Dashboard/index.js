import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Saldo from '../../components/Saldo';
import { Container, BoxSaldo, BoxCut, CardCartao, CardSaldo } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <BoxSaldo>
        <Saldo />
        <CardCartao />
      </BoxSaldo>
      <BoxCut>
        <Icon name="help" />
        <Icon name="help" />
        <Icon name="help" />
        <Icon name="help" />
        <Icon name="help" />
      </BoxCut>
    </Container>
  );
}
