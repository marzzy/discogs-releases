import Pagination from '@material-ui/lab/Pagination';

function Footer(props) {
  const { classes, pagination, currentPage, handlePageChange, loading } = props;

  return (
    <footer className={classes.sideElementsWrapper}>
      <Pagination
        count={pagination.pages}
        page={currentPage}
        color="secondary"
        onChange={handlePageChange}
        variant="outlined"
        size="small"
        className={classes.pageInation}
        disabled={loading}
      />
    </footer>
  );
}

export default Footer;
