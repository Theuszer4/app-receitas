import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
} from "react-native";
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
  const tiposReceita = {
    entrada: "#FF4246",
    principal: "#FFB86E",
    sobremesa: "#F4CFE1",
    vegano: "#90EBBE",
  };

  return (
    <View>
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
          <Text style={style.textoIngredientes}>{receitas.ingredientes[1]}</Text>
        </View>
      </View>
    </View>
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

  containerIngredientes:{
    width: '50%',
    height: 250,
    display: "flex",
    flexDirection: 'column'
  },

  textoIngredientes:{
    display: 'flex',
  },
});
