import { UsersThree } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.XXL,
  color: theme.COLORS.GREEN_700,
  weight: "fill",
}))`
  margin-right: 20px;
`;
