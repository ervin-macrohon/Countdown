import React, { Component }  from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';

import EventCard from './EventCard';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#F3F3F3'
    }
});

class EventList extends React.Component{
    state = {
        events: []
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                events: this.state.events.map(evt => ({
                    ...evt,
                    timer: Date.now() // this prop is useless but tells component to rerender
                }))
            });
        }, 1000);

        const events = require('./db.json').events.map(e => ({
            ...e,
            date: new Date(e.date)
        }));
        this.setState({ events });
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('form');
    }

    render(){
        return[
            <FlatList 
                data={this.state.events}
                style={styles.list}
                renderItem={({ item }) => <EventCard event={item} />}
                keyExtractor={item => item.id}
            />,
            <ActionButton
                key="fab"
                onPress={this.handleAddEvent}
                buttonColor="rgba(231, 76, 60, 1)"
            />
        ];
    }
}

export default EventList;