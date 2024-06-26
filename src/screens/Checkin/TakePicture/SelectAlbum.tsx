import React, {FC, useMemo, useState} from 'react';
import {IFilterType} from '../../../components/common/FilterListComponent';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {ExtendedTheme, useTheme} from '@react-navigation/native';
import {
  BottomSheetScrollView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import {AppBottomSheet} from '../../../components/common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ImageAssets} from '../../../assets';
import {Button} from 'react-native-paper';
import {IAlbumImage} from '../../../models/types';

const SelectAlbum: FC<SelectAlbumProps> = ({
  bottomSheetRef,
  data,
  setData,
  setAlbumImageData,
  albumImageData,
}) => {
  const theme = useTheme();
  const styles = createStyleSheet(theme);
  const {bottom} = useSafeAreaInsets();

  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const [curData, setCurData] = useState<IFilterType[]>(data);

  const handleItem = (item: IFilterType) => {
    const newData = curData.map(itemCur => {
      if (item.value === itemCur.value) {
        return {...itemCur, isSelected: !itemCur.isSelected};
      } else {
        return itemCur;
      }
    });
    setCurData(newData);
  };

  const handleAlbum = (selectedItem: IFilterType[]) => {
    const selectedData = selectedItem
      .filter(item => item.isSelected)
      .map((selected, selectedIdx) => ({
        id: selectedIdx,
        label: selected.label,
        image: ['IconCamera'],
      }));

    const albumImageDataCopy = [...albumImageData];

    selectedData.forEach(selectedItem => {
      const existingIndex = albumImageDataCopy.findIndex(
        item => item.label === selectedItem.label,
      );

      if (existingIndex === -1 && !('isSelected' in selectedItem)) {
        const indexToRemove = albumImageDataCopy.findIndex(
          item => item.label === selectedItem.label,
        );
        if (indexToRemove !== -1) {
          albumImageDataCopy.splice(indexToRemove, 1);
        }
      }
    });

    if (selectedData.length > 0) {
      setAlbumImageData([
        ...selectedData.map(item => ({
          id: item.id, // Adjust this based on your actual structure
          label: item.label,
          image: item.image.map(image => ({url: image})),
        })),
      ]);
    } else {
      setAlbumImageData([]);
    }
    return selectedData;
  };

  const ItemAlbum: FC<ItemAlbumProps> = ({item}) => {
    return (
      <Pressable
        style={styles.row}
        onPress={() => {
          handleItem(item);
        }}>
        <Text
          style={[
            styles.itemText,
            {fontWeight: item.isSelected ? '500' : '400'},
          ]}>
          {item.label}
        </Text>
        <Image
          source={ImageAssets.CheckIcon}
          style={{width: 24, height: 24}}
          tintColor={
            item.isSelected ? theme.colors.primary : theme.colors.bg_default
          }
        />
      </Pressable>
    );
  };

  const ListAlbumSelected = () => {
    return (
      <View
        style={styles.listAlbumStyle}>
        {curData
          .filter(item => item.isSelected)
          .map((item, index) => {
            return (
              <Button
                key={index}
                onPress={() => {
                  handleItem(item);
                }}
                style={{backgroundColor: theme.colors.bg_neutral}}
                contentStyle={{flexDirection: 'row-reverse'}}
                mode={'contained-tonal'}
                labelStyle={{
                  color: theme.colors.text_primary,
                  fontWeight: '400',
                  fontSize: 13,
                }}
                icon={'close'}>
                {item.label}
              </Button>
            );
          })}
      </View>
    );
  };

  return (
    <>
      <AppBottomSheet
        bottomSheetRef={bottomSheetRef}
        snapPointsCustom={animatedSnapPoints}
        // @ts-ignore
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}>
        <BottomSheetScrollView
          style={{paddingBottom: bottom + 16, paddingHorizontal: 16}}
          onLayout={handleContentLayout}>
          <View>
            <View style={styles.row}>
              <Text
                onPress={() => {
                  setCurData([]);
                  bottomSheetRef.current?.close();
                }}
                style={styles.cancelTxt}>
                Hủy
              </Text>
              <Text style={styles.albumTxt}>Album</Text>
              <Text
                onPress={() => {
                  setData(curData);
                  handleAlbum(curData);
                  bottomSheetRef.current?.close();
                }}
                style={styles.confirmTxt}>
                Xác nhận
              </Text>
            </View>
            <ListAlbumSelected />
            {curData.map((item, index) => {
              return <ItemAlbum key={index} item={item} />;
            })}
          </View>
        </BottomSheetScrollView>
      </AppBottomSheet>
    </>
  );
};
interface SelectAlbumProps {
  bottomSheetRef: any;
  data: IFilterType[];
  setData: (data: IFilterType[]) => void;
  setAlbumImageData: React.Dispatch<React.SetStateAction<IAlbumImage[]>>;
  albumImageData: IAlbumImage[];
}
interface ItemAlbumProps {
  item: IFilterType;
}
export default SelectAlbum;
const createStyleSheet = (theme: ExtendedTheme) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 6,
    } as ViewStyle,
    itemText: {
      color: theme.colors.text_primary,
      fontSize: 16,
    } as TextStyle,
    cancelTxt: {
      color: theme.colors.text_disable,
      fontSize: 16,
      fontWeight: '500',
    } as TextStyle,
    albumTxt: {
      color: theme.colors.text_primary,
      fontSize: 18,
      fontWeight: '500',
    } as TextStyle,
    confirmTxt: {
      color: theme.colors.action,
      fontSize: 16,
      fontWeight: '500',
    } as TextStyle,
    listAlbumStyle:{
      
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        rowGap: 8,
        columnGap: 16,
        flexWrap: 'wrap',
        marginTop: 24,
        marginBottom: 16,
      
    } as ViewStyle
  });
