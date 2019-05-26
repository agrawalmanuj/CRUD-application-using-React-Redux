//
//135441113314-s205c7ufn37k364dvk8k6mtsdksppg0i.apps.googleusercontent.com

import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history'




const App = () => {

    return (
        <div className="ui container">
            
            <Router history={history}>
            
                <div>
                    <Header />
                    <Switch> 
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />
                    <Route path="/streams/delete/:id" exact component={StreamDelete} />
                    <Route path="/streams/:id" exact component={StreamShow} />
                    </Switch>

                </div>

            </Router>

        </div>
    );
}

//switch for differnt routes show only one route if route are same

export default App;