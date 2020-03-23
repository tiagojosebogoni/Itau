import React, { useState, useEffect } from 'react';
import { Alert, Dimensions, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Auth, Container, Label, Atalhos, Box } from './styles';

export default function SignIn({ navigation }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // setWidth(Math.round(Dimensions.get('window').width));
    /*
    FingerprintScanner.authenticate({
      description: 'Sua senha',
    })
      .then(() => {
        navigation.navigate('Dashboard');
      })
      .catch(error => {});
      */
  }, []);

  function handleLogIn() {
    navigation.navigate('Dashboard');
  }
  return (
    <Container>
      <Auth>
        <Label>senha eletrônica</Label>
        <Input style={{ marginTop: 10 }} icon="lock-outline" />
        <Button
          style={{ marginTop: 30, marginBottom: 30 }}
          onPress={handleLogIn}
        >
          acessar
        </Button>
        <Label>esqueci minha senha</Label>
      </Auth>
      <Atalhos>
        <Box>
          <Icon name="help" size={20} color="#fff" />
          <Text style={{ color: '#fff' }}>atalhos</Text>
        </Box>
        <Box>
          <Icon name="help" size={20} color="#fff" />
          <Text style={{ color: '#fff' }}>iToken</Text>
        </Box>
        <Box>
          <Icon name="help" size={20} color="#fff" />
          <Text style={{ color: '#fff' }}>ajuda</Text>
        </Box>
      </Atalhos>
    </Container>
  );
}
