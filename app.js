import React from 'react'
import {
    TouchableHighlight, View, Text,
    StyleSheet, Image, Dimensions, SafeAreaView, FlatList, TouchableOpacity,
    Modal
} from 'react-native'

import {connect} from 'react-redux'
import {fetchData, addToNext, clear} from './actions'
import Spinner from 'react-native-loading-spinner-overlay'


let styles;


const App = (props) => {


    const {
        container,
        image,
        imageFull,
        flatListStyle,
        form,
        spinnerTextStyle
    } = styles;

    if (props.appData.data.length === 0 && props.appData.isFetching === false) props.fetchData();

    if (props.appData.isNext === true) {

        return <View style={styles.container}>

            <TouchableOpacity style={flatListStyle} onPress={() => {
                props.clear();
                props.fetchData();
            }}>
                <Image style={flatListStyle} source={{uri: props.appData.next}}/>
            </TouchableOpacity>
        </View>;


    } else {


        return (
            <SafeAreaView style={container}>
                <View style={container}>


                    <Spinner
                        visible={props.appData.isFetching}
                        textContent={'Loading...'}
                        textStyle={spinnerTextStyle}
                    />

                    {
                        props.appData.data.length ? (

                            <FlatList numColumns={2} data={props.appData.data}
                                      renderItem={({item}) => {
                                          return (
                                              <View style={form}>
                                                  <TouchableOpacity style={image} onPress={() => {
                                                      props.addToNext(item.urls.full)
                                                  }}>
                                                      <Image style={image} source={{uri: item.urls.full}}/>
                                                  </TouchableOpacity>
                                                  <Text>Author: {item.user.name}</Text>
                                              </View>
                                          )
                                      }}


                            />
                        ) : null
                    }
                </View>
            </SafeAreaView>
        )

    }
};


styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
    },
    form: {
        flex: 1,
        backgroundColor: '#F3F3F3',
        flexDirection: 'column',
    },
    image: {
        width: (Dimensions.get('window').width / 2),
        height: 150,
    },
    flatListStyle: {
        flex: 1,
    },
    spinnerTextStyle: {
        color: '#FFF'
    }
});


function mapStateToProps(state) {
    return {
        appData: state.appData,
        next: state.count,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => dispatch(fetchData()),
        addToNext: (url) => dispatch(addToNext(url)),
        clear: () => dispatch(clear())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)