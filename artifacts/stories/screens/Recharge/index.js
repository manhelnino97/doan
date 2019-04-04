import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import NavigationBar from '../../../theme/components/NavigationBar';
export default class Recharge extends Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        return (React.createElement(View, { style: { flex: 1, backgroundColor: '#FFFFFF' } },
            React.createElement(View, { style: { marginTop: 60, width: deviceWidth, alignItems: 'center', justifyContent: 'center' } },
                React.createElement(Text, { style: { fontSize: 20, fontWeight: 'bold', color: '#85563a' } }, "S\u1ED1 d\u01B0 trong v\u00ED"),
                React.createElement(Text, { style: { fontSize: 20, fontWeight: 'bold', color: '#85563a' } }, "69.000 \u0111")),
            React.createElement(View, { style: { width: deviceWidth, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingStart: 10, paddingEnd: 20 } },
                React.createElement(TextInput, { placeholder: 'Nh\u1EADp s\u1ED1 ti\u1EC1n', placeholderTextColor: '#999999', style: { fontSize: 20, color: '#85563a' }, keyboardType: 'numeric' }),
                React.createElement(Text, { style: { fontSize: 20, color: '#85563a' } }, "\u0111")),
            React.createElement(View, { style: styles.grayline }),
            React.createElement(View, { style: { width: deviceWidth, backgroundColor: '#e0e0e0', height: 40, justifyContent: 'center', marginTop: 10 } },
                React.createElement(Text, { style: { fontSize: 16, marginStart: 10 } }, "CH\u1ECCN NGU\u1ED2N TI\u1EC0N")),
            React.createElement(TouchableOpacity, { style: { position: 'absolute', bottom: 0, width: deviceWidth, height: 45, backgroundColor: '#ebaa34', alignItems: 'center', justifyContent: 'center' } },
                React.createElement(Text, { style: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 } }, "N\u1EA0P TI\u1EC0N")),
            React.createElement(View, { style: { position: 'absolute', width: deviceWidth, height: 50, backgroundColor: '#000000' } },
                React.createElement(NavigationBar, { goBack: () => this.props.navigation.goBack(), title: 'N\u1EA1p ti\u1EC1n v\u00E0o v\u00ED' }))));
    }
}
const styles = StyleSheet.create({
    grayline: {
        width: deviceWidth - 30,
        height: 1,
        backgroundColor: '#d6d6d6',
        marginStart: 10,
        marginEnd: 20,
    },
});
//# sourceMappingURL=index.js.map