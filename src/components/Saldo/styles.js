import styled from 'styled-components/native';

export const Container = styled.View``;

export const Card = styled.View`
  background: #fff;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
`;

export const Title = styled.Text`
  font-size: 23px;
  max-width: 45%;
  padding-bottom: 10px;
  color: #242220;
  font-weight: 200;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Value = styled.Text`
  color: green;
  font-size: 20px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FooterText = styled.Text`
  color: #326cab;
  font-weight: 500;
  font-size: 16px;
  padding-top: 10px;
`;

export const Division = styled.View`
  border-top-width: 2px;
  border-top-color: #eee9e5;
`;
