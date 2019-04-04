import React from 'react';
import { View, StyleSheet, ActivityIndicator, StatusBar } from 'react-native';
export default class LoadingScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(ActivityIndicator, { size: "large", color: "#0000ff" }),
            React.createElement(StatusBar, { barStyle: "default" })));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
//# sourceMappingURL=Loading.js.map