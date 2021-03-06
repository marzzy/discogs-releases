import { makeStyles } from '@material-ui/core/styles';
import theme from 'theme';

const useStyles = makeStyles(() => ({
  root: {
    height: '65vh',
    margin: 0,
    listStyle: 'none',
    padding: 0,
    overflowY: 'scroll',
    display: 'flex',
    width: '100%',
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
  },
  chip: {
    '& > span': {
      color: 'gray',
    },
    marginRight: theme.spacing(1)
  }
}));

export default useStyles;
