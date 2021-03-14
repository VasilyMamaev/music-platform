import { SERVER_URL } from './../../app-config';
import { Dispatch } from 'react';
import { TrackAction, TrackActionTypes } from '../../model/track';
import axios from 'axios';

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await axios.get(`${SERVER_URL}/tracks`);
      dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: response.data });
    } catch (err) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: 'Load tracks error',
      });
      console.error(err);
    }
  };
};

export const searchTracks = (query: string) => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await axios.get(
        `${SERVER_URL}/tracks/search?query=` + query,
      );
      dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: response.data });
    } catch (err) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: 'Load tracks error',
      });
      console.error(err);
    }
  };
};
