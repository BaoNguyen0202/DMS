import React, {FC} from 'react';
import {AppHeader, AppIcons} from './index';
import {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {MainLayout} from '../../layouts';
import {AppConstant} from '../../const';
import {Searchbar} from 'react-native-paper';
import {ImageAssets} from '../../assets';
import {
  Image,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInputSubmitEditingEventData,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import { AppTheme, useTheme } from '../../layouts/theme';

const FilterListComponent: FC<FilterListComponentProps> = ({
  title,
  searchPlaceholder,
  data,
  onChangeSearch,
  searchValue,
  handleItem,
  onClose,
  onSubmitEditing,
  screenName,
  isSearch = false,
}) => {
  const {colors} =useTheme() ;
  const {t: getLabel} = useTranslation();
  const styles = rootStyles(useTheme())
  return (
    <MainLayout
      style={{
        backgroundColor: colors.bg_default,
        paddingTop: 0,
      }}>
      <AppHeader
        style={{marginTop: 0}}
        label={title}
        labelStyle={{fontSize: 18}}
        hiddenBackButton={!onClose}
        onBack={onClose}
        backButtonIcon={
          <AppIcons
            iconType={AppConstant.ICON_TYPE.IonIcon}
            name={'close'}
            size={24}
            color={colors.text_primary}
          />
        }
      />
      {isSearch && (
        <Searchbar
          style={{
            backgroundColor: colors.bg_neutral,
            borderRadius: 10,
            marginTop: 16,
          }}
          placeholder={searchPlaceholder}
          placeholderTextColor={colors.text_disable}
          icon={ImageAssets.SearchIcon}
          value={searchValue || ''}
          onChangeText={onChangeSearch}
          inputStyle={{color: colors.text_primary}}
          onSubmitEditing={onSubmitEditing}
        />
      )}

      <BottomSheetScrollView
        style={{flex: 1, marginTop: 16}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.touchableItem}
                onPress={() => handleItem(item)}
                key={index}>
                <Text
                  style={{
                    color: colors.text_primary,
                    fontSize: 16,
                    fontWeight: item.isSelected ? '600' : '400',
                  }}>
                  {getLabel(item.label)}
                </Text>
                <Image
                  source={ImageAssets.CheckIcon}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: item.isSelected
                      ? colors.primary
                      : colors.bg_default,
                  }}
                  resizeMode={'cover'}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </BottomSheetScrollView>
    </MainLayout>
  );
};
interface FilterListComponentProps {
  title: string;
  searchPlaceholder?: string;
  data: IFilterType[] | any[];
  handleItem: (item: IFilterType) => void;
  searchValue?: string;
  onChangeSearch?: (text: string) => void;
  onClose?: () => void;
  isSearch?: boolean;
  screenName?: string;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
}
export default FilterListComponent;

const rootStyles = (theme:AppTheme) => StyleSheet.create({
  touchableItem:{
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  } as ViewStyle
})

export type IFilterType = {
  label: string;
  value?: string | number;
  isSelected: boolean;
};
