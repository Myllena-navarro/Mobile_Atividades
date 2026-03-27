import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    View,
} from "react-native";
import LoadingBox from "../components/LoadingBox";

export default function Noticias() {
  const [modoEscuro, setModoEscuro] = useState(false);

  const noticias = [
    {
      id: 1,
      titulo: "Propaganda #5 ativa",
      descricao: "Novo anúncio carregado no painel do elevador A.",
      tempo: "12/03/2026 10:30",
      icone: "📢",
    },
    {
      id: 2,
      titulo: "Correção v2.1 aplicada",
      descricao: "Atualização do sistema aplicada com sucesso.",
      tempo: "12/03/2026 09:15",
      icone: "🔧",
    },
    {
      id: 3,
      titulo: "Novo módulo de relatórios",
      descricao: "Relatórios disponíveis no painel.",
      tempo: "11/03/2026 18:00",
      icone: "📊",
    },
    {
      id: 4,
      titulo: "Atualização de segurança",
      descricao: "Sistema protegido contra vulnerabilidades.",
      tempo: "11/03/2026 14:30",
      icone: "🛡️",
    },
    {
      id: 5,
      titulo: "Propaganda #4 encerrada",
      descricao: "Campanha finalizada no sistema.",
      tempo: "11/03/2026 11:00",
      icone: "📢",
    },
  ];

  const tema = modoEscuro
    ? {
        fundo: "#121212",
        card: "#1E1E1E",
        texto: "#FFFFFF",
        textoSecundario: "#AAAAAA",
        iconeFundo: "#2F80ED22",
      }
    : {
        fundo: "#F4F6F8",
        card: "#FFFFFF",
        texto: "#111111",
        textoSecundario: "#555555",
        iconeFundo: "#E6EEF7",
      };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: tema.fundo }]}>
      
      <View style={styles.header}>

        <Text style={[styles.titulo, { color: tema.texto }]}>
          Notícias do Dia
        </Text>

        <View style={styles.switchArea}>
          <Text style={{ color: tema.textoSecundario }}>
            {modoEscuro ? "Escuro" : "Claro"}
          </Text>
          <Switch value={modoEscuro} onValueChange={setModoEscuro} />
        </View>
      </View>

      <ScrollView>
        {noticias.map((n) => (
          <View
            key={n.id}
            style={[
              styles.card,
              { backgroundColor: tema.card }
            ]}
          >
            <View
              style={[
                styles.iconeBox,
                { backgroundColor: tema.iconeFundo },
              ]}
            >
              <Text style={styles.icone}>{n.icone}</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={[styles.cardTitulo, { color: tema.texto }]}>
                {n.titulo}
              </Text>

              <Text style={{ color: tema.textoSecundario }}>
                {n.descricao}
              </Text>

              <Text style={styles.tempo}>{n.tempo}</Text>
            </View>
          </View>
        ))}

        <LoadingBox
          texto={tema.texto}
          textoSecundario={tema.textoSecundario}
          card={tema.card}
          borda={tema.iconeFundo}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  header: {
    marginBottom: 20,
    gap: 8,
  },

  voltar: {
    fontSize: 14,
    color: "#2F80ED",
    fontWeight: "bold",
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
  },

  switchArea: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  card: {
    flexDirection: "row",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: "flex-start",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  iconeBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  icone: {
    fontSize: 20,
  },

  cardTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },

  tempo: {
    fontSize: 12,
    marginTop: 4,
    color: "#888",
  },
});