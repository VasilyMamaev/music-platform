import { Card, Grid, IconButton } from '@material-ui/core';
import { Delete, Pause, PlayArrow } from '@material-ui/icons';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import { SERVER_URL } from '../app-config';
import { useActions } from '../hooks/useActions';

import { ITrack } from '../model/track';
import styles from '../styles/TrackItem.module.scss';

interface IProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<IProps> = ({ track, active = false }) => {
  const router = useRouter();
  const { playTrack, pauseTrack, setActiveTrack } = useActions();

  const deleteHandler = (evt: MouseEvent) => {
    evt.stopPropagation();
  };

  const playPauseHandler = (evt: MouseEvent) => {
    evt.stopPropagation();
    if (!active) {
      setActiveTrack(track);
      playTrack();
    } else {
      pauseTrack();
    }
  };

  return (
    <Card
      className={styles.track}
      onClick={() => router.push(`/tracks/${track._id}`)}
    >
      <IconButton onClick={playPauseHandler}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <img width={70} height={70} src={SERVER_URL + '/' + track.picture} />
      <Grid container direction="column" style={{ width: 200, margin: '0 20' }}>
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
      </Grid>
      {active && <div>02:28 / 14:88</div>}
      <IconButton style={{ marginLeft: 'auto' }} onClick={deleteHandler}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
