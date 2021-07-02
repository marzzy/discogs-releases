
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '65vh',
    margin: 0,
    listStyle: 'none',
    padding: 0,
    overflow: 'scroll',
    display: 'flex',
    width: '90%',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  cardWrapper: {
    padding: '8px',
    paddingBottom: 0,
  },
  card: {
    height: 355,
    width: 300,
    position: 'relative',
  },
  title : {
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'black'
  },
  cardAction: {
    position: 'absolute',
    bottom: 0
  },
  notfound: {
    padding: '50px 0',
    fontSize: '1.5em'
  },
  mediaWrapper: {
    width: '100%',
    '& > div': {
      width: '100%'
    }
  }
}));

export default useStyles;
