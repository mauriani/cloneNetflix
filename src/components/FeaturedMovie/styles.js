import styled from 'styled-components/native';

import LinerGradient from 'react-native-linear-gradient';

export const ContainerHeader = styled.SafeAreaView`
  flex: 1;
  height: 450px;
`;

export const FeaturedInfoHorizontal = styled(LinerGradient).attrs({
  start: {y: 1, y: 0.3},
  colors: ['#111', '#111'],
})`
  flex: 0.1;
  left: 0px;
  right: 0px;
  bottom: -330px;
  align-items: center;
`;
export const FeaturedInfo = styled.View``;

export const ImageBackground = styled.ImageBackground`
  height: 100%;
  width: 100%;
  opacity: 0.8;
`;

export const Titulo = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  margin-top: 15px;
  text-transform: uppercase;
`;

export const SubTitulo = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  margin-top: 15px;
`;