import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import vcs from '../../../../assets/vcs.png';
import sun from '../../../../assets/sun.png';
import nhac from '../../../../assets/nhac.png';
import saigon from '../../../../assets/saigon.png';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import NavigationBar from '../../../theme/components/NavigationBar';
export default class Promotion extends Component {
    constructor() {
        super(...arguments);
        this.state = {};
        this.renderItem2 = ({ item }) => {
            return (React.createElement(TouchableOpacity, { style: { flexDirection: 'row', marginStart: 10, marginBottom: 10, marginEnd: 10, width: deviceWidth - 20, height: 100, backgroundColor: '#FFFFFF', borderLeftColor: '#ebaa34', borderLeftWidth: 5 } },
                React.createElement(View, { style: { width: (deviceWidth - 10) / 4, backgroundColor: 'green' } }),
                React.createElement(View, { style: { width: (deviceWidth - 10) / 4 * 3, alignItems: 'center', justifyContent: 'center' } },
                    React.createElement(Text, null, "Khuy\u1EBFn m\u1EA1i "),
                    React.createElement(Text, null, "Khuy\u1EBFn m\u1EA1i Khuy\u1EBFn m\u1EA1i "))));
        };
    }
    render() {
        const data1 = [
            { id: '1', image: vcs },
            { id: '2', image: nhac },
            { id: '3', image: sun },
            { id: '4', image: saigon },
            { id: '1', image: vcs },
            { id: '2', image: nhac },
            { id: '3', image: sun },
            { id: '4', image: saigon },
        ];
        return (React.createElement(View, { style: { backgroundColor: '#d9d9d9', flex: 1 } },
            React.createElement(ScrollView, { style: { marginTop: 60 } },
                React.createElement(FlatList, { data: data1, renderItem: this.renderItem2 })),
            React.createElement(View, { style: { position: 'absolute', width: deviceWidth, height: 50, backgroundColor: '#000000' } },
                React.createElement(NavigationBar, { goBack: () => this.props.navigation.goBack(), title: 'Th\u00F4ng tin khuy\u1EBFn m\u1EA1i' }))));
    }
}
const styles = StyleSheet.create({
    grayline: {
        width: deviceWidth,
        height: 1,
        backgroundColor: '#d6d6d6',
    },
});
//# sourceMappingURL=index.js.map