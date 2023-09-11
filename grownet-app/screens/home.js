import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { GlobalStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useRef, useState } from "react";

const home = () => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();
  const isCarousel = useRef(null);

  const images = [
    { source: require("../assets/img/carousel_img1.png") },
    { source: require("../assets/img/carousel_img2.png") },
    { source: require("../assets/img/carousel_img3.png") },
    { source: require("../assets/img/carousel_img4.png") },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={GlobalStyles.slide}>
        <Image source={item.source} style={GlobalStyles.image} />
      </View>
    );
  };

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width}
        autoplay={true}
        autoplayInterval={5000}
        loop={true}
        layout="default"
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        ref={isCarousel}
      />
      <View style={GlobalStyles.paginatioCarousel}>
        <Pagination
          dotsLength={images.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: "#FFFFFF",
          }}
          inactiveDotOpacity={0.8}
          inactiveDotScale={0.8}
          tappableDots={true}
        />
      </View>
      <View style={GlobalStyles.containerButtton}>
        <TouchableOpacity
          style={GlobalStyles.btnSecundary}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={GlobalStyles.textInput}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={GlobalStyles.btnWhite}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={GlobalStyles.textBtnW}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={GlobalStyles.linkWhite}>Terms & Conditions</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default home;
