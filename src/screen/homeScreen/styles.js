import { StyleSheet, StatusBar, Dimensions } from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

function alturaRelativa(px) {
  return height * (px / 812);
}
function larguraRelativa(px) {
  return width * (px / 375);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
    marginTop: StatusBar.currentHeight || 0,
    alignItems: "center",
    backgroundColor: "#240046",
  },
  renderContainer: {
    alignSelf: "flex-start",
    marginBottom: alturaRelativa(20),
    width: larguraRelativa(300),
    height: alturaRelativa(100),
    backgroundColor: '#7b2cbf',
    elevation: 10,
    borderRadius: 15,
  },
  title: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 30,
    lineHeight: 48,
    fontWeight: "bold",
    marginBottom: alturaRelativa(30)
  },
  btnWrapper: {
    flexDirection: "row",
    marginBottom: alturaRelativa(60),
    justifyContent: "space-evenly",
    width: "100%",
  },
  btnOrdena: {
    height: alturaRelativa(35),
    width: larguraRelativa(95),
    backgroundColor: "#7b2cbf",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    elevation: 5,
  },
  btnText: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "bold",
  },
});

export default styles;