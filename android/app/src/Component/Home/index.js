import React, { useState } from "react";
import { styles } from "./style";

import {
    Image,
    FlatList,
    Text,
    View,
    ImageBackground,
    ScrollView
} from 'react-native';

export default function List() {
    const [images, setimages] = useState([
        require('../Home/1.jpg'),
        require('../Home/2.jpg'),
        require('../Home/3.jpg'),
        require('../Home/1.jpg'),
        require('../Home/2.jpg'),
       
    ]);
    const image = { uri: "https://img.freepik.com/free-vector/white-minimal-background_1393-354.jpg?size=626&ext=jpg" };
    return (

        <ScrollView>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.txt}>Home Screen</Text>
                <Text style={styles.txt1}>HI AYA.....,</Text>
                <FlatList
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    data={images}
                    renderItem={({ item, index }) => (
                        <Image source={item}
                            key={index + 1}
                            style={styles.img}
                        />
                    )}
                />
            </ImageBackground>
        </ScrollView>
    );
}