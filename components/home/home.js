import { useState, useEffect, useRef } from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Pagination from '@material-ui/lab/Pagination';
import fetch from 'node-fetch';
import { getRequest, getSearchRequestUrl } from 'helpers/requests';
import { usePrevious } from 'helpers/utils';
import Cards from './components/cards';

//TODO: send it to styles.js
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "url('/bg.jpg')",
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  sideElementsWrapper: {
    height: '5vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    background: '#3c3c3c69'
  },
  headerWrapper: {
    height: '20vh',
  },
  header: {
    fontSize: '3em',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  textField: {
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
    '& label.Mui-focused, & label': {
      color: 'white'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'lightblue',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
      '& input': {
        color: 'white'
      }
    }
  },
  pageInation: {
    '& .MuiPaginationItem-page.MuiPaginationItem-outlinedSecondary.Mui-selected': {
      background: 'white',
      color: '#d22749'
    },
    '& .MuiPaginationItem-page.MuiPaginationItem-outlinedSecondary': {
      color: 'white'
    }
  }
}));

function Home(props) {
  const classes = useStyles();
  const { data } = props;
  const [loading, setLoading] = useState(false);
  const [searchValue , setSearchValue] = useState('');
  const [searchResponse, setSearchResponse] = useState(data);
  const { pagination, results } = searchResponse;
  const [currentPage, setCurrentPage] = useState(1);
  const prevPage = usePrevious(currentPage);
  const isFirstRender = useRef(true);
  //TODO: send it to homeManager.js
  function handlePageChange(event, value) {
    setCurrentPage(value);
    setLoading(true);
  }

  function changeSearchVal(event) {
    setSearchValue(event.target.value);
    setLoading(true);
  };

  useEffect(function searchOnValueChange() {
    if(isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      const isPageChange = prevPage !== currentPage;

      const delayDebounceFn = setTimeout(async function fetchData() {
        const res = await fetch(getRequest(getSearchRequestUrl(searchValue, isPageChange ? currentPage : 1)));
        const data = await res.json();

        if (!isPageChange) {
          setCurrentPage(1);
        }
        setSearchResponse(data);
        setLoading(false);
      }, isPageChange ? 0 : 1500);

      return () => clearTimeout(delayDebounceFn);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, currentPage]);

  //TODO: style loading
  return (
    <>
      <section className={classes.root}>
        <div className={`${classes.sideElementsWrapper} ${classes.headerWrapper}`}>
          <header className={classes.header}>
            {searchValue ? `Search results for "${searchValue}"` : 'Releases'}
          </header>
          <div>
            <form noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                className={classes.textField}
                label="search for something"
                variant="outlined"
                onChange={changeSearchVal}
              />
            </form>
          </div>
        </div>

        {
          loading ? <p>loading...</p> :
            <>
              <Cards data={results}/>
              <div className={classes.sideElementsWrapper}>
                <Pagination
                  count={pagination.pages}
                  page={currentPage}
                  color="secondary"
                  onChange={handlePageChange}
                  variant="outlined"
                  size="small"
                  className={classes.pageInation}
                />
              </div>
            </>
        }
      </section>
    </>
  );
}

export default Home;
