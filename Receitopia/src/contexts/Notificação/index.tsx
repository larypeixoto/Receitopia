import React, { createContext, useContext, useState, ReactNode } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

type TipoNotificacao = "sucesso" | "erro" | "info";

interface Notificacao {
  tipo: TipoNotificacao;
  mensagem: string;
}

interface NotificacaoContextType {
  notificar: (notificacao: Notificacao) => void;
}

const NotificacaoContext = createContext<NotificacaoContextType | null>(null);

export const NotificacaoProvider = ({ children }: { children: ReactNode }) => {
  const [notificacao, setNotificacao] = useState<Notificacao | null>(null);

  // Para animar a opacidade da notificação (fade in/out)
  const opacity = React.useRef(new Animated.Value(0)).current;

  const notificar = (nova: Notificacao) => {
    setNotificacao(nova);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setNotificacao(null);
      });
    }, 3000);
  };

  const backgroundColor =
    notificacao?.tipo === "sucesso"
      ? "#4caf50"
      : notificacao?.tipo === "erro"
      ? "#f44336"
      : "#2196f3";

  return (
    <NotificacaoContext.Provider value={{ notificar }}>
      {children}
      {notificacao && (
        <Animated.View style={[styles.container, { backgroundColor, opacity }]}>
          <Text style={styles.text}>{notificacao.mensagem}</Text>
        </Animated.View>
      )}
    </NotificacaoContext.Provider>
  );
};

export const useNotificacao = () => {
  const context = useContext(NotificacaoContext);
  if (!context) throw new Error("useNotificacao deve estar dentro do NotificacaoProvider");
  return context;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 60,
    right: 20,
    left: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5, // para Android
    zIndex: 1000,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
