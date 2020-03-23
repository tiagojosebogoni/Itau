import React, { useState } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import {
  Container,
  Card,
  Top,
  Title,
  Value,
  Footer,
  FooterText,
  Division,
} from './styles';

export default function Saldo() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSaldo() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(!visible);
    }, 1300);
  }

  return (
    <Container>
      <Card>
        <Top>
          <Title numberOfLines={2}>Saldo em Conta Corrente</Title>
          <TouchableOpacity
            style={{ width: 30, height: 30 }}
            onPress={() => handleSaldo()}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#5e5752" />
            ) : (
              <Icon name={visible ? 'chevron-down' : 'chevron-up'} />
            )}
          </TouchableOpacity>
        </Top>
        {visible && <Value>R$5.000</Value>}
        <Division />
        <Footer>
          <TouchableOpacity>
            <FooterText>ver extrato</FooterText>
          </TouchableOpacity>
          {visible && (
            <TouchableOpacity>
              <FooterText>ver detalhes</FooterText>
            </TouchableOpacity>
          )}
        </Footer>
      </Card>
    </Container>
  );
}
