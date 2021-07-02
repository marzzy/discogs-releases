import TextField from '@material-ui/core/TextField';

function Header(props) {
  const { classes, searchValue, handleChangeSearchVal } = props;

  return (
    <header className={`${classes.sideElementsWrapper} ${classes.headerWrapper}`}>
      <h1 className={classes.header}>
        {searchValue ? `Search results for "${searchValue}"` : 'Releases'}
      </h1>
      <div>
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            className={classes.textField}
            label="search for something"
            variant="outlined"
            onChange={handleChangeSearchVal}
          />
        </form>
      </div>
    </header>
  );
}

export default Header;
