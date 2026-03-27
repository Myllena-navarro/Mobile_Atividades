import { router } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

export default function Home() {
  const [modoEscuro, setModoEscuro] = useState(false);

  const tema = modoEscuro
    ? {
        fundo: "#121212",
        texto: "#FFFFFF",
        botao: "#2F80ED",
      }
    : {
        fundo: "#F4F6F8",
        texto: "#111111",
        botao: "#2F80ED",
      };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: tema.fundo }]}>
      
      <View style={styles.topo}>
        <Switch value={modoEscuro} onValueChange={setModoEscuro} />
      </View>

      <View style={styles.conteudo}>
        
        <Text style={[styles.titulo, { color: tema.texto }]}>
          Atividades
        </Text>

        <Pressable
          style={[styles.botao, { backgroundColor: tema.botao }]}
          onPress={() => router.push("/noticias")}
        >
          <Text style={styles.botaoTexto}>
            NOTÍCIAS
          </Text>
        </Pressable>

        <Pressable
          style={[styles.botao, { backgroundColor: tema.botao }]}
          onPress={() => router.push("/perfil")}
        >
          <Text style={styles.botaoTexto}>
            PERFIL RÁPIDO
          </Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  topo: {
    alignItems: "flex-end",
  },

  conteudo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
  },

  paragrafo: {
    fontSize: 18,
  },

  botao: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
  },

  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
});