import {MyAppTheme, ThemeType} from '../../layouts/theme';
import {loadString} from '../../utils/storage';
import {
  appActions,
  onLoadApp,
  onLoadAppEnd,
} from '../../redux-store/app-reducer/reducer';
import {PayloadAction} from '@reduxjs/toolkit';
import {
  createImageCheckinApi,
  getListCity,
  getListDistrict,
  getListNoteApi,
  getListWard,
  getSystemConfig,
  postChecking,
} from '../../services/appService';
import {all, call, fork, put} from 'typed-redux-saga';
import {showSnack} from '../../components/common';
import {navigate} from '../../navigation/navigation-service';
import {ScreenConstant} from '../../const';

export const checkKeyInObject = (T: any, key: string) => {
  return Object.keys(T).includes(key);
};

export type ResponseGenerator = {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: any;
  code?: number;
  message?: any;
  exception?: any;
  result?: any;
};

export function* onLoadAppModeAndTheme() {
  const {appTheme} = yield* all({
    appTheme: call(loadString, 'APP_THEME'),
  });

  if (typeof appTheme === 'string' && checkKeyInObject(MyAppTheme, appTheme)) {
    yield* put(appActions.onSetAppTheme(appTheme as ThemeType));
  }
  yield* put(appActions.onLoadAppEnd());
}

export function* onCheckInData(action: PayloadAction) {
  if (appActions.onCheckIn.match(action)) {
    try {
      yield put(appActions.onLoadApp());

      const response: ResponseGenerator = yield call(
        postChecking,
        action.payload,
      );
      if (response?.result.length > 0) {
        navigate(ScreenConstant.CHECKIN, {item: action.payload});
      }
    } catch (err) {
      console.log(err, 'err');
    } finally {
      yield put(appActions.onLoadAppEnd());
    }
  }
}

export function* onGetSystemConfiguration(action: PayloadAction) {
  if (appActions.onGetSystemConfig.match(action)) {
    try {
      yield put(onLoadApp());
      const response: ResponseGenerator = yield call(
        getSystemConfig,
        action.payload,
      );
      if (response.message === 'Thành công') {
        yield put(appActions.setSystemConfig(response.result));
      } else {
        console.log('app System err');
      }
    } catch (err) {
      console.error('err: ', err);
    } finally {
      yield put(onLoadAppEnd());
    }
  }
}
export function* onGetListCity(action: PayloadAction) {
  if (appActions.onGetListCity.match(action)) {
    try {
      const response: ResponseGenerator = yield call(
        getListCity,
        action.payload,
      );
      if (response.message === 'Thành công') {
        yield put(appActions.setDataCity(response.data));
      } else {
        showSnack({
          msg: 'Đã có lỗi xảy ra, hãy thử lại',
          interval: 2000,
          type: 'error',
        });
      }
    } catch (err) {
      console.error('[err]: ', err);
    }
  }
}
export function* onGetListDistrict(action: PayloadAction) {
  if (appActions.onGetListDistrict.match(action)) {
    try {
      const response: ResponseGenerator = yield call(
        getListDistrict,
        action.payload,
      );
      if (response.message === 'Thành công') {
        yield put(appActions.setDataDistrict(response.data));
      } else {
        showSnack({
          msg: 'Đã có lỗi xảy ra, hãy thử lại',
          interval: 2000,
          type: 'error',
        });
      }
    } catch (err) {
      console.error('[err]: ', err);
    }
  }
}
export function* onGetListWard(action: PayloadAction) {
  if (appActions.onGetListWard.match(action)) {
    try {
      const response: ResponseGenerator = yield call(
        getListWard,
        action.payload,
      );
      if (response.message === 'Thành công') {
        yield put(appActions.setDataWard(response.data));
      } else {
        showSnack({
          msg: 'Đã có lỗi xảy ra, hãy thử lại',
          interval: 2000,
          type: 'error',
        });
      }
    } catch (err) {
      console.error('[err]: ', err);
    }
  }
}

export function* createImageCheckIn(action: PayloadAction) {
  if (appActions.postImageCheckIn.match(action)) {
    try {
      const response: ResponseGenerator = yield call(
        createImageCheckinApi,
        action.payload,
      );
      if (response.result?.status === true) {
        yield put(appActions.setListImage([response.result?.file_url]));
      } else {
        console.log('error');
      }
    } catch (err) {
      console.log(err, 'err saga');
      yield put(appActions.setImageError(action.payload.image));
    } finally {
    }
  }
}
