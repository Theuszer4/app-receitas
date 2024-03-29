import { useEffect, useState, useRef } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import CardReceita from "../../components/CardReceita";
import { receitas } from "../../receitas";
import * as Animatable from "react-native-animatable";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
function Sobremesa({ navigation }) {
  const [pageAnimation, setPageAnimation] = useState(null);
  const scrollRef = useRef();

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  useEffect(() => {
    navigation.addListener("focus", (e) => {
      setPageAnimation("bounceInUp");
      scrollRef.current.scrollTo({ y: 0, animated: true });
    });

    navigation.addListener("blur", (e) => {
      setPageAnimation(null);
    });
  }, [navigation]);

  return (
    <ScrollView ref={scrollRef}>
      <Animatable.View
        style={style.container}
        animation={pageAnimation}
        duration={400}
      >
        <Text style={style.titulo}>Receitas</Text>
        <View style={style.receitas}>
          {receitas.sobremesa.map((receita, index) => {
            return (
              <CardReceita
                navigation={navigation}
                key={index}
                receita={receita}
                tipo={receita.tipo}
              />
            );
          })}
        </View>
      </Animatable.View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB",
    alignItems: "center",
    paddingTop: 20,
  },
  titulo: {
    width: 350,
    fontSize: 38,
    fontFamily: "Poppins_400Regular"
  },
  receitas: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 90,
  },
});

export default Sobremesa;
