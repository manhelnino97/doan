import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import { Switch } from 'native-base';
import user from '../../../../assets/Profile/userlogin.png';
import iconfoward from '../../../../assets/Profile/iconfoward.png';
import NavigationBar from '../../../theme/components/NavigationBar';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default class Personal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heightDialog: 0,
            isShowDialog: false,
        };
    }
    render() {
        return (React.createElement(View, { style: { flex: 1 } },
            React.createElement(View, { style: { marginTop: 50 } },
                React.createElement(ScrollView, null,
                    React.createElement(View, { style: styles.viewUser },
                        React.createElement(View, { style: { flexDirection: 'row' } },
                            React.createElement(Image, { source: user }),
                            React.createElement(View, { style: { marginStart: 15 } },
                                React.createElement(Text, { style: { fontWeight: 'bold', color: '#000000' } }, "Ho\u00E0ng Ti\u1EBFn M\u1EA1nh"),
                                React.createElement(Text, { style: { color: '#000000' } }, "0338668369"),
                                React.createElement(Text, { style: { color: '#000000' } }, "manhelnino97@gmail.com"))),
                        React.createElement(TouchableOpacity, { onPress: () => this.props.navigation.navigate('Profile') },
                            React.createElement(Text, { style: { color: '#ebaa34', fontSize: 16, marginTop: 10 } }, "S\u1EEDa \u0111\u1ED5i"))),
                    React.createElement(View, { style: styles.grayline }),
                    React.createElement(View, { style: { flexDirection: 'row', justifyContent: 'space-between', padding: 15 } },
                        React.createElement(Text, { style: { color: '#000000', fontSize: 16 } }, "S\u1ED1 d\u01B0 kh\u1EA3 d\u1EE5ng:  69.000 \u0111"),
                        React.createElement(TouchableOpacity, null,
                            React.createElement(Text, { style: { color: '#ebaa34', fontSize: 16 } }, "N\u1EA1p ti\u1EC1n"))),
                    React.createElement(View, { style: styles.grayline }),
                    React.createElement(View, { style: styles.textOption },
                        React.createElement(Text, { style: { color: '#000000' } }, "Th\u00F4ng b\u00E1o qua \u0111i\u1EC7n tho\u1EA1i"),
                        React.createElement(Switch, { value: true, style: { marginStart: 10 } })),
                    React.createElement(View, { style: { width: deviceWidth, height: 1, backgroundColor: '#d6d6d6', } }),
                    React.createElement(View, { style: styles.textOption },
                        React.createElement(Text, { style: { color: '#000000' } }, "Th\u00F4ng b\u00E1o qua Email"),
                        React.createElement(Switch, { value: true, style: { marginStart: 10 } })),
                    React.createElement(View, { style: styles.grayline }),
                    React.createElement(TouchableOpacity, null,
                        React.createElement(View, { style: styles.textOption },
                            React.createElement(Text, { style: { color: '#000000' } }, "\u0110i\u1EC1u kho\u1EA3n d\u1ECBch v\u1EE5"),
                            React.createElement(View, { style: { justifyContent: 'center', marginStart: 10 } },
                                React.createElement(Image, { source: iconfoward })))),
                    React.createElement(View, { style: { width: deviceWidth, height: 1, backgroundColor: '#d6d6d6', } }),
                    React.createElement(TouchableOpacity, null,
                        React.createElement(View, { style: styles.textOption },
                            React.createElement(Text, { style: { color: '#000000' } }, "Ch\u00EDnh s\u00E1ch b\u1EA3o m\u1EADt"),
                            React.createElement(View, { style: { justifyContent: 'center', marginStart: 10 } },
                                React.createElement(Image, { source: iconfoward })))),
                    React.createElement(View, { style: { width: deviceWidth, height: 1, backgroundColor: '#d6d6d6', } }),
                    React.createElement(TouchableOpacity, null,
                        React.createElement(View, { style: styles.textOption },
                            React.createElement(Text, { style: { color: '#000000' } }, "\u0110\u00E1nh gi\u00E1 \u1EE9ng d\u1EE5ng"),
                            React.createElement(View, { style: { justifyContent: 'center', marginStart: 10 } },
                                React.createElement(Image, { source: iconfoward })))),
                    React.createElement(View, { style: styles.grayline }),
                    React.createElement(TouchableOpacity, null,
                        React.createElement(View, { style: { width: deviceWidth, alignItems: 'center', justifyContent: 'center', padding: 15 } },
                            React.createElement(Text, { style: { color: 'red' } }, "\u0110\u0102NG XU\u1EA4T"))),
                    React.createElement(View, { style: { width: deviceWidth, height: 1, backgroundColor: '#d6d6d6', } }))),
            React.createElement(View, { style: { position: 'absolute', width: deviceWidth, height: 50, backgroundColor: '#000000' } },
                React.createElement(NavigationBar, { goBack: () => this.props.navigation.goBack(), title: 'T\u00E0i kho\u1EA3n' }))));
    }
}
const styles = StyleSheet.create({
    viewUser: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between'
    },
    grayline: {
        width: deviceWidth,
        height: 15,
        backgroundColor: '#d6d6d6',
    },
    textOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center'
    }
});
//# sourceMappingURL=index.js.map