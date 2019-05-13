import React, {Component} from 'react'
import { connect } from 'react-redux'
import { gettingCandies } from '../reducers'


//do i want to subscribe to the store? well teh connect is doing it for us

class CandyList extends Component {
    async componentDidMount() {
        await this.props.gettingCandies()
    }
    render () {
        console.log('this is candies', this.props.candies)
        return (
            <div className="container">
            { this.props.candies.map(candy => (
                <div key={candy.id}>
                    <h4>{candy.name}</h4>
                    {/* <img src={candy.imageUrl} /> */}
                </div>
                ))
            }
            </div>
        )
    }
}

//anything i map below will be available to the component via props

const mapStateToProps = (state) => ({
    candies: state.candies
})

const mapDispatchToProps = (dispatch) => ({
    gettingCandies: () => dispatch(gettingCandies())
})

//candies : () => dispatch(gettingAllCandies())</div>

export default connect(mapStateToProps, mapDispatchToProps)(CandyList)
