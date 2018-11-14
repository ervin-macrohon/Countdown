import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import {
    formatDate,
    getCountDownParts
} from './api';

const styles = StyleSheet.create({

});

export default function EventCard({ event }) {
    return(
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.date}>{formatDate(event.date)}</Text>
                <Text style={styles.title}>{event.title}</Text>
            </View>
        </View>
    );
}

EventCard.PropTypes = {
    event: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date)
    })
};