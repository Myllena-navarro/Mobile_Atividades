import React, { useState } from "react";
import {
    Image,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
} from "react-native";

export default function Perfil() {
  const [nome, setNome] = useState("");
  const [corBotao, setCorBotao] = useState("#2F80ED");

  function salvar() {
    alert(`Perfil salvo!\nNome: ${nome || "Não informado"}`);
  }

  function mudarCor() {
    setCorBotao((prev) =>
      prev === "#2F80ED" ? "#27AE60" : "#2F80ED"
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/images/perfil.jpeg")}
        style={styles.imagem}
      />

      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <Pressable
        style={[styles.botao, { backgroundColor: corBotao }]}
        onPress={salvar}
        onLongPress={mudarCor}
      >
        <Text style={styles.botaoTexto}>Salvar Perfil</Text>
      </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 20,
  },

  imagem: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: "cover",
    borderWidth: 2,
    borderColor: "#2F80ED",
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
  },

  botao: {
    width: "100%",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});