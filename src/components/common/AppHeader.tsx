import React, {FC} from 'react';
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {ImageAssets} from '../../assets';
import {CommonUtils} from '../../utils';
import {useTheme} from '@react-navigation/native';

const AppHeader: FC<AppHeaderProps> = ({
  label,
  labelStyle,
  style,
  onBack,
  hiddenBackButton,
  rightButton,
  backButtonIcon,
}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.header as any, style]}>
      {!hiddenBackButton && (
        <TouchableOpacity
          onPress={() => {
            Keyboard.dismiss();
            CommonUtils.sleep(100).then(() => {
              onBack && onBack();
            });
          }}
          style={styles.backButton as any}>
          {backButtonIcon ? (
            backButtonIcon
          ) : (
            <Image
              source={ImageAssets.ArrowLeftIcon}
              style={[{width: 24, height: 24}]}
              resizeMode={'cover'}
              tintColor={colors.text_primary}
            />
          )}
        </TouchableOpacity>
      )}
      {label && (
        <Text
          style={[
            styles.label as any,
            {color: colors.text_primary, flex: rightButton ? 0 : 1},
            labelStyle,
          ]}>
          {label}
        </Text>
      )}
      {rightButton ? rightButton : <View style={{width: 32}} />}
    </View>
  );
};

interface AppHeaderProps {
  label?: string;
  style?: ViewStyle;
  labelStyle?: TextStyle;
  backButtonStyle?: TextStyle;
  onBack?: () => void;
  hiddenBackButton?: boolean;
  rightButton?:
    | JSX.Element
    | JSX.Element[]
    | React.JSX.Element
    | React.JSX.Element[];
  backButtonIcon?: JSX.Element;
}

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginTop: 16,
    justifyContent: 'space-between',
    height: 32,
  },
  label: {
    fontSize: 20,
    fontWeight: '500',
    // flex: 1,
    textAlign: 'center',
    marginLeft: 17,
  },
  backButton: {
    position: 'relative',
    left: 0,
  },
});
