import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

type HeaderProps = {
  modoEscuro: boolean;
  setModoEscuro: (value: boolean) => void;
  texto: string;
  textoSecundario: string;
};

export default function Header({
  modoEscuro,
  setModoEscuro,
  texto,
  textoSecundario,
}: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={[styles.titulo, { color: texto }]}>
        Atualização em Andamento
      </Text>

      <Text style={[styles.subtitulo, { color: textoSecundario }]}>
        Status do painel de elevador
      </Text>

      <View style={styles.switchArea}>
        <Text style={[styles.switchTexto, { color: textoSecundario }]}>
          {modoEscuro ? "Modo escuro" : "Modo claro"}
        </Text>
        <Switch value={modoEscuro} onValueChange={setModoEscuro} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 6,
  },
  subtitulo: {
    fontSize: 15,
    marginBottom: 12,
  },
  switchArea: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  switchTexto: {
    fontSize: 14,
  },
});