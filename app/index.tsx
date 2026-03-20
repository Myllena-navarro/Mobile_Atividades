import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import Header from "../components/Header";
import LoadingBox from "../components/LoadingBox";
import NewsCard from "../components/NewsCard";

type Noticia = {
  id: number;
  titulo: string;
  descricao: string;
  tempo: string;
};

export default function Index() {
  const [modoEscuro, setModoEscuro] = useState(false);

  const noticias: Noticia[] = [
    {
      id: 1,
      titulo: "Propaganda #5 ativa",
      descricao: "Novo anúncio carregado no painel do elevador A.",
      tempo: "Há 5 min",
    },
    {
      id: 2,
      titulo: "Clima atualizado",
      descricao: "Previsão do tempo exibida nos elevadores B e C.",
      tempo: "Há 15 min",
    },
    {
      id: 3,
      titulo: "Manchetes do dia",
      descricao: "Notícias locais sincronizadas no painel principal.",
      tempo: "Há 30 min",
    },
    {
      id: 4,
      titulo: "Eventos do prédio",
      descricao: "Agenda semanal atualizada no elevador social.",
      tempo: "Há 1 h",
    },
    {
      id: 5,
      titulo: "Mensagem automática",
      descricao: "Avisos do horário de pico exibidos no sistema.",
      tempo: "Há 2 h",
    },
  ];

  const tema = modoEscuro
    ? {
        fundo: "#121212",
        card: "#1E1E1E",
        texto: "#FFFFFF",
        textoSecundario: "#CFCFCF",
        borda: "#2A2A2A",
      }
    : {
        fundo: "#F4F4F4",
        card: "#FFFFFF",
        texto: "#111111",
        textoSecundario: "#555555",
        borda: "#DDDDDD",
      };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: tema.fundo }]}>
      <StatusBar barStyle={modoEscuro ? "light-content" : "dark-content"} />

      <Header
        modoEscuro={modoEscuro}
        setModoEscuro={setModoEscuro}
        texto={tema.texto}
        textoSecundario={tema.textoSecundario}
      />

      <ScrollView contentContainerStyle={styles.scroll}>
        {noticias.map((noticia) => (
          <NewsCard
            key={noticia.id}
            titulo={noticia.titulo}
            descricao={noticia.descricao}
            tempo={noticia.tempo}
            texto={tema.texto}
            textoSecundario={tema.textoSecundario}
            card={tema.card}
            borda={tema.borda}
          />
        ))}

        <LoadingBox
          texto={tema.texto}
          textoSecundario={tema.textoSecundario}
          card={tema.card}
          borda={tema.borda}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  scroll: {
    paddingBottom: 30,
  },
});