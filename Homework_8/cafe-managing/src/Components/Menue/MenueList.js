import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, Link, useHistory } from 'react-router-dom';
import {createSelector} from 'reselect';
import { searchDish } from '../../store/actions/menue';
import { deleteDish } from '../../store/actions/menue';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import '../Tables/TablesList.css';

function MenueList( {list, search, onSearch, deleteDish }) {
  const { url } = useRouteMatch();
  const history = useHistory();
 
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
  
    const classes = useStyles();
  
  return (
    <>
        <input 
          type="text" 
          value={search} 
          placeholder="Search..."
          onChange={({target}) => onSearch(target.value)} />
      <button className ='add-btn' onClick={()=>history.push(`${url}/new`)}>Add dish</button>

        {list.map(item => (
          <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={item.photo}
              title= {item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <Link to = {`${url}/${item.id}`} className='group-item-link'>{ item.name }</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Button size="small" color="primary" onClick={ () => { deleteDish(item.id)}}>
          Delete
          </Button>
        </CardActions>
        </Card>
        ))}

    </>
  );
}

const listSelector = (state) => state.menue.list;
const searchSelector = (state) => state.menue.search;

const getFilteredMenue = createSelector(
  [listSelector, searchSelector],
  (list, search) => {
    const searchRegExp = new RegExp(search, 'gi')
    return search
      ? list.filter(item => item.name.match(searchRegExp)) 
      :list;

  }
);


function mapStateToProps(state){
  return {
    list:  getFilteredMenue(state),
    search: state.menue.search
  };
}


const mapDispatchToProps = {
  onSearch: searchDish,
  deleteDish: deleteDish,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenueList);
