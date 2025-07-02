import React, { createContext, ReactNode, useContext, useState } from "react";
import { Animated, Text } from "react-native";
import { styles } from "./styles";

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
  if (!context)
    throw new Error("useNotificacao deve estar dentro do NotificacaoProvider");
  return context;
};
