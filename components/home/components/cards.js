import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  cardsWrapper: {
    height: '80vh',
    margin: 0,
    listStyle: 'none',
    padding: 0,
    overflow: 'scroll',
    display: 'flex',
    maxWidth: '90%',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  media: {
    height: 225,
  }
}));

function Cards(props) {
  const { data } = props;
  const classes = useStyles();
  console.log('data', data);
  //TODO: bring default image in project
  return (
    <ul className={classes.cardsWrapper}>
      {data.map((item) => (
        <li key={item.id}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.cover_image || "https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg"}
                title={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.catno}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
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
