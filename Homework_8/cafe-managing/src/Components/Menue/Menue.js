import React, { useEffect } from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import MenueList from './MenueList';
import DishForm from './DishForm';
import { getMenue } from '../../store/actions/menue'
import { connect } from 'react-redux';
import '../Tables/Tables.css';

function Menue({ isLoading, getMenue }) {
  const { path } = useRouteMatch();
  
  useEffect(() => {
    getMenue();
  }, [])
  
    return (
      <div className='container'>
        <h2>Menue</h2>
        { isLoading ? 'LOADING':
        <Switch>
          <Route path={`${path}/`} exact>
            <MenueList />
          </Route>
          <Route path={`${path}/:id`} 
            render = { route => (
              <DishForm id={route.match.params.id} />
            )}
          ></Route>
          <Route path={`${path}/*`}>
            <Redirect to={`${path}/`} />
          </Route>
        </Switch>
        }
      </div>
    );
  }
  
  function mapStateToProps(state){
    return {
      isLoading: state.menue.isLoading
    };
  }
  
  
  const mapDispatchToProps = {
    getMenue: getMenue
  };
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Menue);