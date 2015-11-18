import React                    from 'react'
import routes                   from '../routes'
import DevTools                 from '../DevTools/DevTools'
import {Provider}               from 'react-redux'
import {ReduxRouter}            from 'redux-router'
import {createDevToolsWindow}   from '../DevTools/DevToolsWindow'



export default class Root extends React.Component {
    static propTypes = {
        store : React.PropTypes.object.isRequired,
        debug : React.PropTypes.bool,
        debugExternal : React.PropTypes.bool
    }

    static defaultProps = {
        debug : false,
        debugExternal : false
    }

    renderDevTools () {
        if (!this.props.debug) return null
        return this.props.debugExternal ? createDevToolsWindow(this.props.store) : <DevTools />
    }

  render () {
    return (
        <div>
            <Provider store={this.props.store}>
                <div>
                    <ReduxRouter>
                        {routes}
                    </ReduxRouter>
                    {this.renderDevTools()}
                </div>
            </Provider>
        </div>
    )
  }
}
