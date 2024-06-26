import {takeEvery, takeLatest} from 'typed-redux-saga';
import * as Saga from './saga';
import {checkinActions} from '../../redux-store/checkin-reducer/reducer';

export function* checkinSaga() {
  yield* takeLatest(
    checkinActions.getListNoteCheckin.type.toString(),
    Saga.getDataNote,
  );
  yield* takeLatest(
    checkinActions.getListStaff.type.toString(),
    Saga.getDataStaff,
  );
  yield* takeLatest(
    checkinActions.getListNoteType.type.toString(),
    Saga.getDataNoteType,
  );
  yield* takeLatest(
    checkinActions.getListProgram.toString(),
    Saga.getListProgramData,
  );
  yield* takeLatest(
    checkinActions.postImageScore.type.toString(),
    Saga.postImageScore,
  );
  yield* takeLatest(
    checkinActions.createReportMarkScore.type.toString(),
    Saga.createReportMarkScoreSaga,
  );
}
