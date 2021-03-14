import { Box, Grid } from '@material-ui/core';
import { ITrack } from '../model/track';
import TrackItem from './TrackItem';

interface IProps {
  tracks: ITrack[];
}

const TrackList: React.FC<IProps> = ({ tracks }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem track={track} key={track._id} />
        ))}
      </Box>
    </Grid>
  );
};

export default TrackList;
