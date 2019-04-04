import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import vcs from '../../../../assets/vcs.png';
import sun from '../../../../assets/sun.png';
import nhac from '../../../../assets/nhac.png';
import saigon from '../../../../assets/saigon.png';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import NavigationBar from '../../../theme/components/NavigationBar';
export default class AllEvents extends Component {
    constructor() {
        super(...arguments);
        this.state = {};
        this.renderItem2 = ({ item }) => {
            return (React.createElement(TouchableOpacity, { style: { marginStart: 10, marginBottom: 10 } },
                React.createElement(Image, { source: item.image, style: { width: deviceWidth - 20, height: deviceHeight / 5 } })));
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
        return (React.createElement(View, { style: { backgroundColor: '#FFFFFF' } },
            React.createElement(ScrollView, { style: { marginTop: 60 } },
                React.createElement(FlatList, { data: data1, renderItem: this.renderItem2 })),
            React.createElement(View, { style: { position: 'absolute', width: deviceWidth, height: 50, backgroundColor: '#000000' } },
                React.createElement(NavigationBar, { goBack: () => this.props.navigation.goBack(), title: 'T\u1EA5t c\u1EA3 s\u1EF1 ki\u1EC7n' }))));
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