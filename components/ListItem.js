import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import CardSection from './common/CardSection.js';
import * as actions from './actions';

class ListItem extends Component {
    // renderDescription = () => {
    //     if(this)
    // }

    render() {
        const { id, title, description } = this.props.library.item;
        console.log(id, this.props.selectedLibraryId)
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <View>
                        <CardSection>
                            <Text>{title}</Text>
                        </CardSection>
                    </View>

                    {
                        id === this.props.selectedLibraryId ?
                        <Text>{description}</Text> :
                        null
                    }
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        selectedLibraryId: state.selectedLibraryId
    };
};

export default connect(mapStateToProps, actions)(ListItem);