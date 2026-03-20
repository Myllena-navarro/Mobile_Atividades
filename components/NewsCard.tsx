import React from "react";
import { StyleSheet, Text, View } from "react-native";

type NewsCardProps = {
  titulo: string;
  descricao: string;
  tempo: string;
  texto: string;
  textoSecundario: string;
  card: string;
  borda: string;
};

export default function NewsCard({
  titulo,
  descricao,
  tempo,
  texto,
  textoSecundario,
  card,
  borda,
}: NewsCardProps) {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: card,
          borderColor: borda,
        },
      ]}
    >
      <View style={styles.cardTexto}>
        <Text style={[styles.cardTitulo, { color: texto }]}>{titulo}</Text>
        <Text style={[styles.cardDescricao, { color: textoSecundario }]}>
          {descricao}
        </Text>
      </View>

      <Text style={[styles.tempo, { color: textoSecundario }]}>{tempo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  cardTexto: {
    flex: 1,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: "bold",
   marginBottom: 6,
  },
  cardDescricao: {
    fontSize: 14,
    lineHeight: 20,
  },
  tempo: {
    fontSize: 12,
    marginTop: 2,
  },
});