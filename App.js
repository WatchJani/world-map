import React from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken('pk.eyJ1IjoiamFua283MjYyIiwiYSI6ImNsdzEzMTg1YTA2cnkyanBoeW9xaTRpZ3QifQ.7vbQ1Xgo0cBUlpxFx8LveQ');
const App = () => {
    return (
        <View style={styles.page}>
            <Mapbox.MapView style={styles.map} styleURL='mapbox://styles/mapbox/dark-v11' />
        </View>
    );
}

export default App;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        height: 300,
        width: 300,
    },
    map: {
        flex: 1
    }
});