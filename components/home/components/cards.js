import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '80vh',
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
    width: '33%',
    padding: '8px',
    paddingBottom: 0,
  },
  card: {
    height: 355,
    position: 'relative'
  },
  media: {
    height: 225,
  },
  title : {
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  cardAction: {
    position: 'absolute',
    bottom: 0
  }
}));

function Cards(props) {
  const { data } = props;
  const classes = useStyles();

  if (data.length === 0) {
    return <p className={classes.root}>sorry we couldnt find any result for this search</p>;
  }

  //TODO: bring default image in project
  return (
    <ul className={classes.root}>
      {data.map((item) => (
        <li key={item.id} className={classes.cardWrapper}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.cover_image || "https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg"}
                title={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.catno}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardAction}>
              <Link target="_blank" rel="noopener" variant="body2" href={`https://www.discogs.com/${item.uri}`}>
              Visit
              </Link>
            </CardActions>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default Cards;
