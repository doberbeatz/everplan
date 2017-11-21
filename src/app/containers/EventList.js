import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Feed} from 'semantic-ui-react'

import EventBrief from '../components/EventBrief'
import LoaderWrapper from '../components/LoaderWrpapper'
import {itemsFetchData} from '../../redux/actions/eventActions'

class EventList extends Component {

    componentDidMount() {
        this.props.fetchData()
    }

    render() {
        if (this.props.isLoading) {
            return <LoaderWrapper/>
        }

        return (
            <Feed>
                {this.props.events.reverse().map((event) =>
                    <EventBrief key={event.id} {...event} />
                )}
            </Feed>
        )
    }
}

export default connect(
    (state) => ({
        events: state.events.items,
        isLoading: state.events.isLoading
    }),
    (dispatch) => ({
        fetchData: () => dispatch(itemsFetchData())
    })
)(EventList)