import React, { Component } from "react"
import { IYourShareState, Person, Item } from '../redux/types';
import { connect } from 'react-redux';


// ItemList component
// Render the list of items that can be borrowed (for use on the welcome screen)

interface IItemListProps {
    listOfPeople: Array<Person>
    onClick?: any
}

// onClick={this.props.onClick} - link to borrow

class ItemList extends React.Component<IItemListProps> {
    render() {
        return (
            <div id="availableItems" >
                <table>
                    <thead>
                        <th>Items for borrowing</th>
                        <th>Lender</th>
                    </thead>
                    <tbody>
                        {this.props.listOfPeople.map((person: Person) => {
                            return person.items.map((item: Item) => (
                                <tr key={item.id} onClick={this.props.onClick}> <td>{item.name}</td><td>{person.name}</td></tr>)
                            )
                        }
                        )}
                    </tbody>
                </table>
            </div >
        )
    };
}

// Map redux state to component state
function mapStateToProps(state: IYourShareState) {
    return {
        listOfPeople: state.people
    }
}

// Map redux actions to component props
function mapDispatchToProps(dispatch: any) {
    return {
        // Because this component doesn't change the state of the app at all
        // we're going to leave this empty
    }
}

// The Hight Order Component (HOC)
// props need to be recived by the component
let connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList);


export default connectedComponent;