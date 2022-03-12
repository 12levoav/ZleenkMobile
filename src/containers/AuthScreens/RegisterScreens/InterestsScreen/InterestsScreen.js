import * as React from 'react';
import {
    View,
    Text,
    Button, Platform, Animated, TouchableOpacity, FlatList, ScrollView, Keyboard, TouchableWithoutFeedback, Image
} from 'react-native';
import styles from './styles';
import {useCallback, useEffect, useRef, useState} from 'react';
import {useNavigation} from "@react-navigation/native";

import {horizontalScale, verticalScale, WINDOW_WIDTH} from "../../../../helpers/constants";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";


export default function InterestsScreen(props) {
    const {navigate, goBack} = useNavigation();
    const [scrollX, setScrollX] = useState(new Animated.Value(0));
    const [selectedBubbles,setSelectedBubbles] = useState([])
const [scrolled,setScrolled] = useState(0)
    const [cities, setCities] = React.useState([
        [ {id:1,title:'vxcssssvxcv'},
        {id:2,title:'vxcvxcv'},
        {id:3,title:'vxcvxcv3'},
        {id:4,title:'vxcsvxcv'},
        {id:5,title:'asd'},
        {id:6,title:'vxcvxcv'},
        {id:7,title:'asd'}
        ,{id:8,title:'vxcvxcv'},
        {id:9,title:'asd'},
       ],[ {id:10,title:'asd'},
        {id:11,title:'vxcvxcv'},
        {id:12,title:'asd'}
        ,{id:13,title:'vxcvxcv'},
        {id:14,title:'vxcvxcv'},
        {id:15,title:'vxcssvxcv'},
        {id:16,title:'vxcvxcv'},
        {id:17,title:'vxcdsvxcv'},
        {id:18,title:'vxcvxcv'},],
        [ {id:19,title:'vxcvxcv'}, {id:20,title:'vxasdasdascvxcv'}]

        ]);


    const dots = useCallback(()=>{
        let position = Animated.divide(scrollX, WINDOW_WIDTH);
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',

                }}>
                {cities.map((_, i) => {

                    return (
                        <View
                            key={i}
                            style={{
                                height:verticalScale(15),
                                width:verticalScale(15),
                                borderRadius:verticalScale(30),
                                backgroundColor:position.__getValue().toString()===i.toString() ? '#20BDC8':'#999999',
                                marginRight: horizontalScale(5),
                            }}
                        />
                    );
                })}
            </View>
        );
    },[scrollX])

    const renderRowItem = (itemData) => {
        let id = itemData.item.id;
        let fullLength =  horizontalScale(14)* itemData.item.title.length

return(
        <View
            style={[styles.bubbleContainer,{
                height: fullLength+horizontalScale(10),
                width: fullLength+horizontalScale(10),
            }]}
        >
            <TouchableOpacity
                onPress={()=>
                {
                    let index = selectedBubbles.indexOf(itemData.item.id)
                    if(index===-1){
                        setSelectedBubbles([...selectedBubbles,itemData.item.id])
                    }
                    else{
                        setSelectedBubbles([
                            ...selectedBubbles.slice(0, index),
                            ...selectedBubbles.slice(index + 1)
                        ]);
                    }
                }}
                style={[styles.bubbleView,{
                height: fullLength,
                width: fullLength,
                borderRadius: (fullLength) * 2,
                backgroundColor: !selectedBubbles.includes(id)?'#EFEAEA':'#967CE6',
            }]}>
                <Image source={require('./icons/Illustration3.png')}
                       resizeMode={'contain'}
                       style={{width:verticalScale(60),
                           height:verticalScale(60),
                           marginBottom:verticalScale(1)
                }}/>
                <Text
                    style={{
                        color: !selectedBubbles.includes(id)?'black':'white' ,
                        alignSelf:'center',
                        fontSize: 12,
                        fontFamily:'arial',

                    }}>
                    {itemData.item.title}</Text>
            </TouchableOpacity>
        </View>
)

    }

   const renderFlatItem = (itemData) => {
        return (
            <TouchableOpacity activeOpacity={1}  >
            <FlatList
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
                data={itemData.item}
                numColumns={3}
                style={{width:WINDOW_WIDTH+horizontalScale(10)}}
                renderItem={renderRowItem}

            />
            </TouchableOpacity>

        )
    }



    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Text style={styles.headerTextBig}>Ընտրի՜ր հետաքրքրություններ</Text>
                    <Text style={styles.headerTextSmall}>ամենաքիչը 3 հատ</Text>
                </View>

<View style={styles.flatListView}>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    scrollEnabled={true}
                    data={cities}
                    horizontal={true}
                    pagingEnabled={true}
                    renderItem={renderFlatItem}
                    onScroll={(event)=>{
                    setScrollX(event.nativeEvent.contentOffset.x)
                        setScrolled(Math.random())
                    }}
                    scrollEventThrottle={16}
                    contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}

                />
</View>
                <View style={styles.bottomContainer}>

                    <TouchableOpacity onPress={()=>goBack()} style={styles.leftButtonContainer}>
                        <AntDesign name={'arrowleft'} color={'white'} size={verticalScale(30)}/>
                    </TouchableOpacity>

                    {dots()}
                    <TouchableOpacity onPress={()=>navigate('HomeScreen')} disabled={selectedBubbles.length<3} style={[styles.buttonContainer,{backgroundColor:selectedBubbles.length<3?'#CBBAFF':'#9D7CE6'}]}>
                        <AntDesign name={'check'} color={'white'} size={verticalScale(30)}/>
                    </TouchableOpacity>

                </View>
            </View>
        </TouchableWithoutFeedback>
    );
  }

