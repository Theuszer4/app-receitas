import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { useRef } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import YoutubePlayer from "react-native-youtube-iframe";
import { receitas } from "../../receitas";

receitaImage = {
  batata: require("../../../assets/batataFrita.jpg"),
  pao: require("../../../assets/paoCaseiro.jpg"),
  bolinho: require("../../../assets/bolinhoArroz.jpg"),
  salada: require("../../../assets/saladaCaesar.jpg"),
  cebola: require("../../../assets/cebolaEmpanada.jpg"),
  bifeParmegiana: require("../../../assets/bifeParmegiana.png"),
  rocambole: require("../../../assets/rocambole.jpg"),
  escondidinho: require("../../../assets/escondidinhoCarneSeca.jpg"),
  costelinha: require("../../../assets/costelinha.png"),
  yakissoba: require("../../../assets/yakissoba.jpg"),
  bombomTravessa: require("../../../assets/bombomTravessa.jpg"),
  danoninhoCaseiro: require("../../../assets/danoninhoCaseiro.jpg"),
  boloSorvete: require("../../../assets/boloSorvete.png"),
  paveChocolate: require("../../../assets/paveChocolate.png"),
  mousseLimao: require("../../../assets/mousseLimao.jpg"),
  crepioca: require("../../../assets/crepioca.jpg"),
  tabule: require("../../../assets/tabule.png"),
  saladaTomate: require("../../../assets/saladaTomate.jpg"),
  paoBatata: require("../../../assets/paoBatata.jpg"),
  paoSemGluten: require("../../../assets/paoSemGluten.jpg"),
};

export default function Receita({ route }) {
  const { receitas } = route.params;
  const playerRef = useRef();
  const tiposReceita = {
    entrada: "#FF4246",
    principal: "#FFB86E",
    sobremesa: "#F4CFE1",
    vegano: "#90EBBE",
  };

  return (
    <ScrollView>
      <View style={style.containerImage}>
        <Image style={style.img} source={receitaImage[receitas.img]} />
      </View>

      <View style={style.containerTitulo}>
        <Text style={style.receitasTitulo}>{receitas.nome}</Text>
      </View>

      <View>
        <View
          style={[
            style.nomeTipo,
            { backgroundColor: tiposReceita[receitas.tipo] },
          ]}
        >
          <Text style={style.nomeIngredientes}>Ingredientes</Text>
        </View>
        <View style={style.containerIngredientes}>
          {receitas.ingredientes.map((ingredientes, index) => {
            return (
              <View style={style.containerTextoIngredientes}>
                <Text style={style.textoIngredientes} key={index}>
                  <MaterialCommunityIcons name="circle" size={10} color="#909090" />  {ingredientes}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      <View
        style={[
          style.nomeTipo,
          { backgroundColor: tiposReceita[receitas.tipo] },
        ]}
      >
        <Text style={style.nomeIngredientes}>Modo de Preparo</Text>
      </View>

      <View style={style.containerModoPreparo}>
        {receitas.modo_preparo.map((preparo, index) => {
          return (
            <View style={style.containertextoModoPreparo}>
              <Text style={style.textoModoPreparo}>
                {index + 1}.  {preparo}
              </Text>
            </View>
          );
        })}
      </View>

      <View style={style.video}>
        <YoutubePlayer
          ref={playerRef}
          height={"80%"}
          width={"90%"}
          videoId={receitas.id_video}
          webViewStyle={{ opacity: 0.99 }}
        />
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  containerImage: {
    width: "100%",
  },

  img: {
    width: "100%",
    height: 210,
  },

  containerTitulo: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    padding: 10,
  },

  receitasTitulo: {
    fontSize: 25,
    fontWeight: "600",
  },

  nomeTipo: {
    width: "100%",
    height: 38,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
  },

  nomeIngredientes: {
    fontSize: 24,
    fontWeight: "600",
    color: "#ffff",
  },

  containerIngredientes: {
    display: "flex",
    flexDirection: "column",
    padding: 10
  },

  textoIngredientes: {
    display: "flex",
  },

  containerTextoIngredientes:{
    display: 'flex',
    alignItems: 'flex-start',
    padding: 5,
  },

  textoIngredientes:{
    fontSize: 16
  },

  containerModoPreparo:{
    display: "flex",
    flexDirection: "column",
    padding: 10,
  },

  containertextoModoPreparo:{
    display: 'flex',
    alignItems: "flex-start",
    padding: 5
  },

  textoModoPreparo:{
    fontSize: 16
  },

  video: {
    display: "flex",
    flexDirection: 'row',
    width: "100%",
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  }
});
