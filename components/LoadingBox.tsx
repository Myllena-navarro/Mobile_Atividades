import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

type Props = {
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
}: Props) {
  const [progresso, setProgresso] = useState(1);
  const [concluido, setConcluido] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setProgresso((prev) => {
        if (prev >= 5) {
          clearInterval(intervalo);
          setConcluido(true);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

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

      {!concluido ? (
        <>
          <Text style={[styles.loadingTexto, { color: texto }]}>
            Aplicando atualizações OTA... ({progresso}/5)
          </Text>

          <Text style={[styles.loadingSubtexto, { color: textoSecundario }]}>
            Atualizando componentes do sistema
          </Text>
        </>
      ) : (
        <>
          <Text style={[styles.loadingTexto, { color: texto }]}>
            ✅ Atualização concluída
          </Text>

          <Text style={[styles.loadingSubtexto, { color: textoSecundario }]}>
            Sistema atualizado com sucesso
          </Text>
        </>
      )}
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