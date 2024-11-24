import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';



export default function MapABC() {
    return (
    <View style={styles.container}>
        <MapView
        style={styles.map}
        initialRegion={{
            latitude: -23.6939, // Latitude central do ABC Paulista
            longitude: -46.565, // Longitude central do ABC Paulista
            latitudeDelta: 0.1, // Ajuste do zoom (área exibida)
            longitudeDelta: 0.1, // Ajuste do zoom (área exibida)
        }}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    map: {
    flex: 1,
    },
});