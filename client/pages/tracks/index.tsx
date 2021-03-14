import { Box, Button, Card, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import TrackList from '../../components/TrackList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../model/track';
import { NextThunkDispatch, wrapper } from '../../store';
import { fetchTracks, searchTracks } from '../../store/actions-creators/track';

const Tracks: React.FC = () => {
  const router = useRouter();

  const { tracks, error } = useTypedSelector((state) => state.tracks);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch as NextThunkDispatch;

  // TODO: debouncer
  const search = async (evt: ChangeEvent<HTMLInputElement>) => {
    setQuery(evt.target.value);
    await dispatch(await searchTracks(evt.target.value));
  };

  // TODO: beautify error viewing, maybe use snackbar?
  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button onClick={() => router.push('/tracks/create')}>
                Загрузить
              </Button>
            </Grid>
          </Box>
          <TextField value={query} onChange={search} fullWidth />
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Tracks;

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchTracks());
  },
);
