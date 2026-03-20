import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

type LoadingBoxProps = {
  texto: string;
  textoSecundario: string;
  card: string;
  borda: string;
};

export default function LoadingBox({
  texto,
  textoSecundario,
  card,
  borda,
}: LoadingBoxProps) {
  return (
    <View
      style={[
        styles.loadingBox,
        {
          backgroundColor: card,
          borderColor: borda,
        },
      ]}
    >
      <ActivityIndicator size="large" color="#2F80ED" />

      <Text style={[styles.loadingTexto, { color: texto }]}>
        Aplicando atualizações OTA...
      </Text>

      <Text style={[styles.loadingSubtexto, { color: textoSecundario }]}>
        Correções visuais em andamento
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingBox: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginTop: 10,
  },
  loadingTexto: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  loadingSubtexto: {
    marginTop: 6,
    fontSize: 13,
    textAlign: "center",
  },
});