import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import Series from '../Series/Series';
import classes from './Main.module.scss';

function Main() {
  const dispatch = useDispatch();
  const { charts } = useSelector(state => state.charts);

  useEffect(() => {
    dispatch(
      actions.chartGetInitiate(
        `https://docs.google.com/spreadsheets/d/e/2PACX-1vTOLa7GDMYPChB9ZwTP3XexYz8VrnDWQWDwtt_PEnaHCOME3YDPME3cb9k2x4MMWgBDfbmKPAv3WZCc/pub?output=csv`
        // `https://docs.google.com/spreadsheets/d/e/2PACX-1vQgOcBHZw1doMOLYaTAlG4V4MnS26pbQYbET5ygUavmGIz23Q6yDD7RFbxgYxNMFw/pub?output=xlsx`
      )
    );
  }, []);

  return (
    <div className={classes.main}>
      {charts.map((chart, index) => (
        <Series key={index} chart={chart} />
      ))}
    </div>
  );
}

export default connect()(Main);
