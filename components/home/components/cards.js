import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image';
import defaultPicture from 'public/default-card.jpg';
import useStyles from './cardStyles';

function Cards(props) {
  const { data } = props;
  const classes = useStyles();

  if (data.length === 0) {
    return (
      <p className={`${classes.notfound} ${classes.root}`}>
        sorry we couldnt find any result for this search
      </p>
    );
  }

  return (
    <ul className={classes.root}>
      {data.map((item) => (
        <li key={item.id} className={classes.cardWrapper}>
          <Card className={classes.card}>
            <CardActionArea className={classes.mediaWrapper}>
              <Image
                src={item.cover_image || defaultPicture}
                alt={item.title}
                width={300}
                height={225}
                placeholder="blur"
                blurDataURL={item.thumb}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {item.catno}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardAction}>
              <Link
                target="_blank"
                rel="noopener"
                variant="body2"
                href={`https://www.discogs.com/${item.uri}`}
              >
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
